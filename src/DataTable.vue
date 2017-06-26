<template>
	<div class="card material-table">
		<div class="table-header">
			<span class="table-title">{{title}}</span>
			<div class="actions">
				<a v-for="button in customButtons" href="javascript:undefined"
				   class="waves-effect btn-flat nopadding"
				   v-if="button.hide ? !button.hide : true"
				   @click="button.onclick">
					<i class="material-icons">{{button.icon}}</i>
				</a>
				<a href="javascript:undefined"
					class="waves-effect btn-flat nopadding"
					v-if="this.printable"
					@click="print">
					<i class="material-icons">print</i>
				</a>
				<a href="javascript:undefined"
					class="waves-effect btn-flat nopadding"
					v-if="this.exportable"
					@click="exportExcel">
					<i class="material-icons">description</i>
				</a>
				<a href="javascript:undefined"
					class="waves-effect btn-flat nopadding"
					v-if="this.searchable"
					@click="search">
					<i class="material-icons">search</i>
				</a>
			</div>
		</div>
		<div v-if="this.searching">
			<div id="search-input-container">
				<label>
					<input type="search" id="search-input" class="form-control" placeholder="Search data"
						:value="searchInput"
						@input="(e) => {this.searchInput = e.target.value}">
				</label>
			</div>
		</div>
		<table ref="table">
			<thead>
				<tr>
					<th v-for="(column, index) in columns"
						@click="sort(index)"
						:class="(sortable ? 'sorting ' : '')
							+ (sortColumn === index ?
								(sortType === 'desc' ? 'sorting-desc' : 'sorting-asc')
								: '')
							+ (column.numeric ? ' numeric' : '')"
						:style="{width: column.width ? column.width : 'auto'}">
						{{column.label}}
					</th>
					<slot name="thead-tr"></slot>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(row, index) in paginated" :class="{ clickable : clickable }" @click="click(row)">
					<td v-for="column in columns" :class=" { numeric : column.numeric } ">
						<div v-if="!column.html"> {{ collect(row, column.field) }} </div>
						<div v-if="column.html" v-html="collect(row, column.field)"></div>						
					</td>
					<slot name="tbody-tr" :row="row"></slot>
				</tr>
			</tbody>
		</table>

		<div class="table-footer" v-if="paginate">
			<div class="datatable-length">
				<label>
					<span>Rows per page:</span>
					<select class="browser-default" @change="onTableLength">
						<option v-for="option in perPageOptions" :value="option" :selected="option == currentPerPage">
					    {{ option === -1 ? 'All' : option }}
					  </option>
					</select>
				</label>
			</div>
			<div class="datatable-info">
				{{(currentPage - 1) * currentPerPage ? (currentPage - 1) * currentPerPage : 1}}
					-{{Math.min(processedRows.length, currentPerPage * currentPage)}} of {{processedRows.length}}
			</div>
			<div>
				<ul class="material-pagination">
					<li>
						<a href="javascript:undefined" class="waves-effect btn-flat" @click.prevent="previousPage" tabindex="0">
							<i class="material-icons">chevron_left</i>
						</a>
					</li>
					<li>
						<a href="javascript:undefined" class="waves-effect btn-flat" @click.prevent="nextPage" tabindex="0">
							<i class="material-icons">chevron_right</i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Fuse from 'fuse.js';

	export default {
		props: {
			title: '',
			columns: {},
			rows: {},
			clickable: {default: true},
			customButtons: {default: () => []},
			perPage: {default: [10, 20, 30, 40, 50]},
			defaultPerPage: {default: null},
			sortable: {default: true},
			searchable: {default: true},
			exactSearch: {
				type: Boolean,
				default: false
			},
			paginate: {default: true},
			exportable: {default: true},
			printable: {default: true},
		},

		data: () => ({
			currentPage: 1,
			currentPerPage: 10,
			sortColumn: -1,
			sortType: 'asc',
			searching: false,
			searchInput: '',
		}),

		methods: {
			nextPage: function() {
				if (this.processedRows.length > this.currentPerPage * this.currentPage)
					++this.currentPage;
			},

			previousPage: function() {
				if (this.currentPage > 1)
					--this.currentPage;
			},

			onTableLength: function(e) {
				this.currentPerPage = e.target.value;
			},

			sort: function(index) {
				if (!this.sortable)
					return;
				if (this.sortColumn === index) {
					this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
				} else {
					this.sortType = 'asc';
					this.sortColumn = index;
				}
			},

			search: function(e) {
				this.searching = !this.searching;
			},

			click: function(row) {
				if(!this.clickable){
					return
				}

				if(getSelection().toString()){
					// Return if some text is selected instead of firing the row-click event.
					return
				}

				this.$emit('row-click', row)
			},

			exportExcel: function() {
				const mimeType = 'data:application/vnd.ms-excel';
				const html = this.renderTable().replace(/ /g, '%20');

				const documentPrefix = this.title != '' ? this.title.replace(/ /g, '-') : 'Sheet'
				const d = new Date();

				var dummy = document.createElement('a');
				dummy.href = mimeType + ', ' + html;
				dummy.download = documentPrefix
					+ '-' + d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate()
					+ '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds()
					+'.xls';
				dummy.click();
			},

			print: function() {
				let win = window.open("");
				win.document.write(this.renderTable());
				win.print();
				win.close();
			},

			renderTable: function() {
				var table = '<table><thead>';

				table += '<tr>';
				for (var i = 0; i < this.columns.length; i++) {
					const column = this.columns[i];
					table += '<th>';
					table += 	column.label;
					table += '</th>';
				}
				table += '</tr>';

				table += '</thead><tbody>';

				for (var i = 0; i < this.rows.length; i++) {
					const row = this.rows[i];
					table += '<tr>';
					for (var j = 0; j < this.columns.length; j++) {
						const column = this.columns[j];
						table += '<td>';
						table +=	this.collect(row, column.field);
						table += '</td>';
					}
					table += '</tr>';
				}

				table += '</tbody></table>';

				return table;
			},

			dig: function(obj, selector) {
				var result = obj;
				const splitter = selector.split('.');

				for (let i = 0; i < splitter.length; i++){
					if (result == undefined)
						return undefined;
						
					result = result[splitter[i]];
				}

				return result;
			},

			collect: function(obj, field) {
				if (typeof(field) === 'function')
					return field(obj);
				else if (typeof(field) === 'string')
					return this.dig(obj, field);
				else
					return undefined;
			}
		},

		computed: {
			perPageOptions: function() {
				var options = (Array.isArray(this.perPage) && this.perPage) || [10, 20, 30, 40, 50];

				// Force numbers
				options = options.map( v => parseInt(v));

				// Set current page to first value
				this.currentPerPage = options[0];

				// Sort options
				options.sort((a,b) => a - b);

				// And add "All"
				options.push(-1);

				// If defaultPerPage is provided and it's a valid option, set as current per page
				if (options.indexOf(this.defaultPerPage) > -1) {
					this.currentPerPage = parseInt(this.defaultPerPage);
				}

				return options;
			},
			processedRows: function() {
				var computedRows = this.rows;

				if (this.sortable !== false)
					computedRows = computedRows.sort((x,y) => {
						if (!this.columns[this.sortColumn])
							return 0;

						const cook = (x) => {
							x = this.collect(x, this.columns[this.sortColumn].field);
							if (typeof(x) === 'string') {
								x = x.toLowerCase();
							 	if (this.columns[this.sortColumn].numeric)
									x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
							}
							return x;
						}

						x = cook(x);
						y = cook(y);

						return (x < y ? -1 : (x > y ? 1 : 0)) * (this.sortType === 'desc' ? -1 : 1);
					})

				if (this.searching && this.searchInput) {
					const searchConfig = { keys: this.columns.map(c => c.field) }

					// Enable searching of numbers (non-string)
					// Temporary fix of https://github.com/krisk/Fuse/issues/144
				    	searchConfig.getFn = function (obj, path) {
						if(Number.isInteger(obj[path]))
						return JSON.stringify(obj[path]);
					    	return obj[path];
					}

					if(this.exactSearch){
						//return only exact matches
						searchConfig.threshold = 0,
						searchConfig.distance = 0
					}

					computedRows = (new Fuse(computedRows, searchConfig)).search(this.searchInput);
				}

                return computedRows;
			},

			paginated: function() {
			    var paginatedRows = this.processedRows;
                if (this.paginate)
                    paginatedRows = paginatedRows.slice((this.currentPage - 1) * this.currentPerPage, this.currentPerPage === -1 ? paginatedRows.length + 1 : this.currentPage * this.currentPerPage);
                return paginatedRows;
            }
		},

		mounted: function() {
			this.currentPerPage = this.currentPerPage
		}
	}
</script>

<style scoped>
	div.material-table {
		padding: 0;
	}

	tr.clickable {
		cursor: pointer;
	}

	#search-input {
		margin: 0;
		border: transparent 0 !important;
		height: 48px;
		color: rgba(0, 0, 0, .84);
	}

	#search-input-container {
		padding: 0 14px 0 24px;
		border-bottom: solid 1px #DDDDDD;
	}

	table {
		table-layout: fixed;
	}

	.table-header {
		height: 64px;
		padding-left: 24px;
		padding-right: 14px;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		display: flex;
		-webkit-display: flex;
		border-bottom: solid 1px #DDDDDD;
	}

	.table-header .actions {
		display: -webkit-flex;
		margin-left: auto;
	}

	.table-header .btn-flat {
			min-width: 36px;
			padding: 0 8px;
	}

	.table-header input {
		margin: 0;
		height: auto;
	}

	.table-header i {
		color: rgba(0, 0, 0, 0.54);
		font-size: 24px;
	}

	.table-footer {
		height: 56px;
		padding-left: 24px;
		padding-right: 14px;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		flex-direction: row;
		-webkit-justify-content: flex-end;
		justify-content: flex-end;
		-webkit-align-items: center;
		align-items: center;
		font-size: 12px !important;
		color: rgba(0, 0, 0, 0.54);
	}

	.table-footer .datatable-length {
		display: -webkit-flex;
		display: flex;
	}

	.table-footer .datatable-length select {
		outline: none;
	}

	.table-footer label {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.54);
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		/* works with row or column */
		
		flex-direction: row;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
	}

	.table-footer .select-wrapper {
		display: -webkit-flex;
		display: flex;
		-webkit-flex-direction: row;
		/* works with row or column */
		
		flex-direction: row;
		-webkit-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		justify-content: center;
	}

	.table-footer .datatable-info,
	.table-footer .datatable-length {
		margin-right: 32px;
	}

	.table-footer .material-pagination {
		display: flex;
		-webkit-display: flex;
		margin: 0;
	}

	.table-footer .material-pagination li a {
		color: rgba(0, 0, 0, 0.54);
		padding: 0 8px;
		font-size: 24px;
	}

	.table-footer .select-wrapper input.select-dropdown {
		margin: 0;
		border-bottom: none;
		height: auto;
		line-height: normal;
		font-size: 12px;
		width: 40px;
		text-align: right;
	}

	.table-footer select {
		background-color: transparent;
		width: auto;
		padding: 0;
		border: 0;
		border-radius: 0;
		height: auto;
		margin-left: 20px;
	}

	.table-title {
		font-size: 20px;
		color: #000;
	}

	table tr td {
		padding: 0 0 0 56px;
		height: 48px;
		font-size: 13px;
		color: rgba(0, 0, 0, 0.87);
		border-bottom: solid 1px #DDDDDD;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	table td, table th {
    	border-radius: 0;
	}

	table tr td a {
		color: inherit;
	}

	table tr td a i {
		font-size: 18px;
		color: rgba(0, 0, 0, 0.54);
	}

	table tr {
		font-size: 12px;
	}

	table th {
		font-size: 12px;
		font-weight: 500;
		color: #757575;
		cursor: pointer;
		white-space: nowrap;
		padding: 0;
		height: 56px;
		padding-left: 56px;
		vertical-align: middle;
		outline: none !important;

	    overflow: hidden;
	    text-overflow: ellipsis;
	}

	table th:hover {
		overflow: visible;
		text-overflow: initial;
	}

	table th.sorting-asc,
	table th.sorting-desc {
		color: rgba(0, 0, 0, 0.87);
	}

	table th.sorting:after,
	table th.sorting-asc:after  {
		font-family: 'Material Icons';
		font-weight: normal;
		font-style: normal;
		font-size: 16px;
		line-height: 1;
		letter-spacing: normal;
		text-transform: none;
		display: inline-block;
		word-wrap: normal;
		-webkit-font-feature-settings: 'liga';
		-webkit-font-smoothing: antialiased;
		content: "arrow_back";
		-webkit-transform: rotate(90deg);
		display: none;
		vertical-align: middle;
	}

	table th.sorting:hover:after,
	table th.sorting-asc:after,
	table th.sorting-desc:after {
		display: inline-block;
	}

	table th.sorting-desc:after {
		content: "arrow_forward";
	}

	table tbody tr:hover {
		background-color: #EEE;
	}
	
	table th:last-child,
	table td:last-child {
		padding-right: 14px;
	}

	table th:first-child, table td:first-child {
		padding-left: 24px;
	}
</style>
