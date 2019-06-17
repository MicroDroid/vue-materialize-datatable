<template>
  <div id="app">
    <a
  href="https://github.com/MicroDroid/vue-materialize-datatable"
  class="github-corner"
  aria-label="View source on GitHub"
  ><svg
    width="80"
    height="80"
    viewBox="0 0 250 250"
    style="fill:#ee6e73; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
    aria-hidden="true"
  >
    <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
    <path
      d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
      fill="currentColor"
      style="transform-origin: 130px 106px;"
      class="octo-arm"
    ></path>
    <path
      d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
      fill="currentColor"
      class="octo-body"
    ></path></svg></a
>
    <header>
      <div class="container">
        <a
          href="#"
          data-target="nav-mobile"
          class="top-nav sidenav-trigger waves-effect waves-light circle hide-on-large-only"
          ><i class="material-icons">menu</i></a
        >
      </div>
      <ul id="nav-mobile" class="sidenav sidenav-fixed">
        <li class="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
            width="40px"
            height="40px"
          />
        </li>
        <!-- <li class="version">
          <a href="#" data-target="version-dropdown" class="dropdown-trigger">
            1.0.0
          </a>
          <ul id="version-dropdown" class="dropdown-content">
            <li><a>1.0.0</a></li>
            <li>
              <a href="http://archives.materializecss.com/0.100.2/">0.100.2</a>
            </li>
          </ul>
        </li> -->
        <!-- <li class="search">
          <div class="search-wrapper">
            <input id="search" placeholder="Search" /><i class="material-icons"
              >search</i
            >
            <div class="search-results"></div>
          </div>
        </li> -->
        <li class="bold">
          <a href="#basic" class="waves-effect waves-teal">Basic Example</a>
        </li>
        <li class="bold">
          <a href="#minimal" class="waves-effect waves-teal">Minimal table</a>
        </li>
        <li class="bold">
          <a href="#localization" class="waves-effect waves-teal">Localization</a>
        </li>
        <li class="bold">
          <a href="#interactive" class="waves-effect waves-teal">Interactive rows</a>
        </li>
        <li class="bold">
          <a href="#custom-pagination" class="waves-effect waves-teal">Custom pagination</a>
        </li>
        <li class="bold">
          <a href="#row-buttons" class="waves-effect waves-teal">Row buttons</a>
        </li>
        <!-- <li class="bold">
          <a href="themes.html" class="waves-effect waves-teal"
            >New FunFunc!<span
              data-badge-caption="updated"
              class="new badge"
            ></span
          ></a>
        </li> -->
      </ul>
    </header>

    <!-- Page Layout here -->
    <main>
      <div class="section" id="index-banner">
        <div class="container">
          <div class="row" style="margin-bottom: 0;">
            <div
              class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
            >
              <h1 class="header mt10">vue-materialize-datatable demo page</h1>
              <h4 class="light">
                Various examples with VueJS Materialize CSS datatable component
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div id="basic" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">Basic example</h3>
            <p>
              Basic example with <span class="grey lighten-2">sorting</span>,
              <span class="grey lighten-2">pagination</span>,
              <span class="grey lighten-2">printing</span>,
              <span class="grey lighten-2">excel export</span> turned on by
              default.
            </p>
            
            <prism language="html">
&lt;datatable
  title="Basic table"
  :columns="tableColumns1"
  :rows="tableRows1"
&gt;&lt;/datatable&gt;
            </prism>
            <prism language="javascript">
data() {
  return {
    tableColumns1: [
      {
        label: "Character name",
        field: "charName",
        numeric: false,
        html: false
      },
      {
        label: "First appearance",
        field: "firstAppearance",
        numeric: false,
        html: false
      },
      {
        label: "Created by",
        field: "createdBy",
        numeric: false,
        html: false
      },
      {
        label: "Voiced by",
        field: "voicedBy",
        numeric: false,
        html: false
      }
    ],
    tableRows1: [
      {
        charName: "Abu",
        firstAppearance: "Alladin (1992)",
        createdBy: "Joe Grant",
        voicedBy: "Frank Welker"
      },
      {
        charName: "Magic Carpet",
        firstAppearance: "Alladin (1992)",
        createdBy: "Randy Cartwright",
        voicedBy: "N/A"
      },
      {
        charName: "The Sultan",
        firstAppearance: "Alladin (1992)",
        createdBy: "Navid Negahban",
        voicedBy: "Douglas Seale"
      }
    ],
  }
}
            </prism>
            <datatable
              title="Basic table"
              :columns="tableColumns1"
              :rows="tableRows1"
            ></datatable>
          </div>
        </div>
        <div id="minimal" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">Minimal table</h3>
            <p>
              Table with all possible options set to
              <span class="grey lighten-2">false</span>
            </p>
            <prism language="html">
&lt;datatable
  title="Minimal table"
  :columns="tableColumns1"
  :rows="tableRows1"
  :clickable="false"
  :sortable="false"
  :exactSearch="false"
  :searchable="false"
  :paginate="false"
  :exportable="false"
  :printable="false"
&gt;&lt;/datatable&gt;
            </prism>
              <p>Dont forget to set <span class="grey lighten-2">:rows</span> and <span class="grey lighten-2">:columns</span> in your <span class="grey lighten-2">data()</span>!</p>
            <datatable
              title="Minimal table"
              :columns="tableColumns1"
              :rows="tableRows1"
              :clickable="false"
              :sortable="false"
              :exactSearch="false"
              :searchable="false"
              :paginate="false"
              :exportable="false"
              :printable="false"
            ></datatable>
          </div>
        </div>
        <div id="localization" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">Localization</h3>
            <p>
              Specified language of table controls with
              <span class="grey lighten-2">locale</span> prop.
            </p>
            <prism language="html">
&lt;datatable
  title="Localized table"
  :columns="tableColumns1"
  :rows="tableRows2"
  locale="es"
&gt;&lt;/datatable&gt;
            </prism>
            <prism language="javascript">
tableRows2: [
  {
    charName: "Abu",
    firstAppearance: "Alladin (1992)",
    createdBy: "Joe Grant",
    voicedBy: "Frank Welker"
  },
  {
    charName: "Magic Carpet",
    firstAppearance: "Alladin (1992)",
    createdBy: "Randy Cartwright",
    voicedBy: "N/A"
  },
  {
    charName: "The Sultan",
    firstAppearance: "Alladin (1992)",
    createdBy: "Navid Negahban",
    voicedBy: "Douglas Seale"
  }
]
            </prism>
            <datatable
              title="Localized table"
              :columns="tableColumns1"
              :rows="tableRows2"
              locale="es"
            ></datatable>
          </div>
        </div>
        <div id="interactive" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">Interactive rows</h3>

            <p>Table with interactive rows, REACTing&#128064  on every click with materialize modal window.</p>
            <!-- Modal Structure -->
            <div id="modal1" class="modal">
              <div class="modal-content">
                <h4>{{ currentModalTitle }}</h4>
                <p>{{ currentModalText }}</p>
              </div>
              <div class="modal-footer">
                <a
                  href="#!"
                  class="modal-close waves-effect waves-green btn-flat"
                  >Ok</a
                >
              </div>
            </div>
            <prism language="html">
&lt;datatable
  title="Click on row!"
  :columns="tableColumns1"
  :rows="tableRows3"
  v-on:row-click="onRowClick"
&gt;&lt;/datatable&gt;
            </prism>
            <p>Setting html code of modal Materialize window anywhere in the code. <a href="https://materializecss.com/modals.html" target="_blank">More info</a>.</p>
            <prism language="html">
&lt;div id="modal1" class="modal"&gt;
  &lt;div class="modal-content"&gt;
    &lt;h4&gt;{{ currentModalTitle }}&lt;/h4&gt;
    &lt;p&gt;{{ currentModalText }}&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="modal-footer"&gt;
    &lt;a
      href="#!"
      class="modal-close waves-effect waves-green btn-flat"
      &gt;Ok&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </prism>
            <p>Set row content and data variables for modal windows.</p>
            <prism language="javascript">
data () {
  return {
    currentModalTitle: "",
    currentModalText: "",
    tableRows3: [
      {
        charName: "Abu",
        firstAppearance: "Alladin (1992)",
        createdBy: "Joe Grant",
        voicedBy: "Frank Welker",
        desc:
          "Abu is Aladdin's kleptomaniac monkey partner with a high-pitched voice and can talk a little. The animators filmed monkeys at the San Francisco Zoo to study the movements Abu would have. The character is based on the similarly named Abu the thief, played by Sabu Dastagir in the 1940 version of The Thief of Bagdad. Abu also appears in Kingdom Hearts and Kingdom Hearts II, playing a large role in the latter with his kleptomanic habits getting him into trouble during Sora's first return visit to Agrabah."
      },
      {
        charName: "Magic Carpet",
        firstAppearance: "Alladin (1992)",
        createdBy: "Randy Cartwright",
        voicedBy: "N/A",
        desc:
          'The Magic Carpet is an ancient carpet that was found by Aladdin in the Cave of Wonders treasure room. It is a character without a voice, and expresses itself entirely through pantomime and movements. It is genderless, but is often assumed to be male by Genie and other characters. It is playful, as it reacts with Abu, intelligent, as it beats Genie at chess (and most other things), and helpful, as it helps Aladdin romance Princess Jasmine during the song "A Whole New World". It sometimes uses its tassels as hands and feet to accentuate its feelings.'
      },
      {
        charName: "The Sultan",
        firstAppearance: "Alladin (1992)",
        createdBy: "Navid Negahban",
        voicedBy: "Douglas Seale",
        desc:
          "The Sultan (real name: Hamed Bobolonius II) is Princess Jasmine's father and the pompous but kind ruler of Agrabah. Some aspects of the character were inspired in the Wizard of Oz, to create a bumbling authority figure. He was voiced by Douglas Seale in the first film, by Val Bettin in the sequels and the TV series, and by Jeff Bennett in Disney Princess Enchanted Tales: Follow Your Dreams. In the 2019 film, the Sultan was protrayed by Navid Negahban."
      }
    ],
  }
}
            </prism>
            <p>Initialize modal window. <a href="https://materializecss.com/modals.html#initialization" target="_blank">More info</a>.</p>
            <prism language="javascript">
mounted() {
  document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems);
  });
}
            </prism>
            <p>Define method which fires up after click on a row and setting up modal window content.</p>
            <prism language="javascript">
methods: {
  onRowClick: function(row) {
    this.currentModalTitle = row.charName;
    this.currentModalText = this.tableRows3.find(
      x => x.charName === row.charName
    ).desc;
    var elem = document.querySelectorAll(".modal")[0];
    var instance = M.Modal.getInstance(elem);
    instance.open();
  }
}
            </prism>
            <datatable
              title="Click on row!"
              :columns="tableColumns1"
              :rows="tableRows3"
              v-on:row-click="onRowClick"
            ></datatable>
          </div>
        </div>
        <div id="custom-pagination" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">Custom pagination</h3>
            <p>Table with custom amount of rows on every page.</p>
            <prism language="html">
&lt;datatable
  title="Table with custom pagination"
  :columns="tableColumns1"
  :rows="tableRows4"
  :perPage="[3, 5, 10]"
&gt;&lt;/datatable&gt;
            </prism>
            <prism language="javascript">
data() {
  return {
    tableRows4: [
      {
        charName: "Abu",
        firstAppearance: "Alladin (1992)",
        createdBy: "Joe Grant",
        voicedBy: "Frank Welker"
      },
      {
        charName: "Magic Carpet",
        firstAppearance: "Alladin (1992)",
        createdBy: "Randy Cartwright",
        voicedBy: "N/A"
      },
      {
        charName: "The Sultan",
        firstAppearance: "Alladin (1992)",
        createdBy: "Navid Negahban",
        voicedBy: "Douglas Seale"
      },
      {
        charName: "Razoul",
        firstAppearance: "Alladin (1992)",
        voicedBy: "Jim Cummings"
      },
      {
        charName: "Fazahl",
        firstAppearance: "Alladin (1992)",
        voicedBy: "Jim Cummings"
      },
      {
        charName: "Hakim",
        firstAppearance: "Alladin (1992)",
        voicedBy: "Numan Acar"
      },
      {
        charName: "Zagoolien",
        firstAppearance: "Alladin (1992)",
        voicedBy: "Jeff Bennett"
      },
      {
        charName: "The Peddler",
        firstAppearance: "Alladin (1992)",
        voicedBy: "Frank Welker"
      }
    ],
  }
}
            </prism>
            <datatable
              title="Table with custom pagination"
              :columns="tableColumns1"
              :rows="tableRows4"
              :perPage="[3, 5, 10]"
            ></datatable>
          </div>
        </div>
        <div id="row-buttons" class="row scrollspy" style="margin-bottom: 0;">
          <div
            class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
          >
            <h3 class="header">Row buttons</h3>
            <p>Table with delete buttons on every row.</p>
            <prism language="html">
&lt;datatable
  title="Do not press the red buttons!"
  :columns="tableColumns1"
  :rows="tableRows5"
&gt;
  &lt;th slot="thead-tr"&gt;
    Actions
  &lt;/th&gt;
  &lt;template slot="tbody-tr" scope="props"&gt;
    &lt;td&gt;
      &lt;button
        class="btn red darken-2 waves-effect waves-light compact-btn"
        @click="e => deleteItem(props.row, e)"
      &gt;
        &lt;i class="material-icons white-text"&gt;delete&lt;/i&gt;
      &lt;/button&gt;
    &lt;/td&gt;
  &lt;/template&gt;
&lt;/datatable&gt;
            </prism>
            <prism language="javascript">
data() {
  return {
    tableRows5: [
      {
        charName: "Abu",
        firstAppearance: "Alladin (1992)",
        createdBy: "Joe Grant",
        voicedBy: "Frank Welker"
      },
      {
        charName: "Magic Carpet",
        firstAppearance: "Alladin (1992)",
        createdBy: "Randy Cartwright",
        voicedBy: "N/A"
      },
      {
        charName: "The Sultan",
        firstAppearance: "Alladin (1992)",
        createdBy: "Navid Negahban",
        voicedBy: "Douglas Seale"
      }
    ]
  }
}
            </prism>
            <datatable
              title="Do not press the red buttons!"
              :columns="tableColumns1"
              :rows="tableRows5"
            >
              <th slot="thead-tr">
                Actions
              </th>
              <template slot="tbody-tr" scope="props">
                <td>
                  <button
                    class="btn red darken-2 waves-effect waves-light compact-btn"
                    @click="e => deleteItem(props.row, e)"
                  >
                    <i class="material-icons white-text">delete</i>
                  </button>
                </td>
              </template>
            </datatable>
          </div>
          <div id="row-buttons" class="row scrollspy" style="margin-bottom: 0;">
            <div
              class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only"
            >
              <h1 class="header">Links</h1>
              <div class="collection">
                <a href="https://github.com/MicroDroid/vue-materialize-datatable" class="collection-item">vue-materialize-datatable</a>
                <a href="https://github.com/MicroDroid/vue-materialize-datatable" class="collection-item">Materialize</a>
                <a href="https://github.com/MicroDroid/vue-materialize-datatable" class="collection-item">Materialize modals</a>
                <a href="https://github.com/MicroDroid/vue-materialize-datatable" class="collection-item">Materialize scrollspy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="page-footer docs-footer">
      <div class="container">
        <div class="row" style="margin-bottom: 0;">
          <div class="col s12 m8 offset-m1 xl11 offset-xl1 center-on-small-only">
            <div  class="left valign-wrapper date">2019</div>
            <div class="right grey-text text-darken-1 right">vue-materialize-datatable author - <a href="https://github.com/MicroDroid" target="_blank">MicroDroid</a></div> </br>
            <div class="right grey-text text-darken-1 right">author of this page - <a href="https://github.com/justice47" target="_blank">justice47</a></div>
          </div>
        </div>
        <!--<div class="row" style="margin-bottom: 0;">
          <div class="col s12 m10 offset-m1">

          <a class="grey-text text-darken-1 right" href="https://github.com/Dogfalo/materialize/blob/master/LICENSE">MIT License</a>
          
          </div>
        </div> -->
      </div>
    </footer>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DataTable from "vue-materialize-datatable";
import Prism from "vue-prism-component";

export default {
  name: "app",
  components: {
    HelloWorld,
    datatable: DataTable,
    Prism
  },
  data() {
    const self = this;
    return {
      currentModalTitle: "",
      currentModalText: "",
      tableTitle1: "First table title",
      tableColumns1: [
        {
          label: "Character name",
          field: "charName",
          numeric: false,
          html: false
        },
        {
          label: "First appearance",
          field: "firstAppearance",
          numeric: false,
          html: false
        },
        {
          label: "Created by",
          field: "createdBy",
          numeric: false,
          html: false
        },
        {
          label: "Voiced by",
          field: "voicedBy",
          numeric: false,
          html: false
        }
      ],
      tableRows1: [
        {
          charName: "Abu",
          firstAppearance: "Alladin (1992)",
          createdBy: "Joe Grant",
          voicedBy: "Frank Welker"
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A"
        },
        {
          charName: "The Sultan",
          firstAppearance: "Alladin (1992)",
          createdBy: "Navid Negahban",
          voicedBy: "Douglas Seale"
        }
      ],
      tableRows2: [
        {
          charName: "Abu",
          firstAppearance: "Alladin (1992)",
          createdBy: "Joe Grant",
          voicedBy: "Frank Welker"
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A"
        },
        {
          charName: "The Sultan",
          firstAppearance: "Alladin (1992)",
          createdBy: "Navid Negahban",
          voicedBy: "Douglas Seale"
        }
      ],
      tableRows3: [
        {
          charName: "Abu",
          firstAppearance: "Alladin (1992)",
          createdBy: "Joe Grant",
          voicedBy: "Frank Welker",
          desc:
            "Abu is Aladdin's kleptomaniac monkey partner with a high-pitched voice and can talk a little. The animators filmed monkeys at the San Francisco Zoo to study the movements Abu would have. The character is based on the similarly named Abu the thief, played by Sabu Dastagir in the 1940 version of The Thief of Bagdad. Abu also appears in Kingdom Hearts and Kingdom Hearts II, playing a large role in the latter with his kleptomanic habits getting him into trouble during Sora's first return visit to Agrabah."
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A",
          desc:
            'The Magic Carpet is an ancient carpet that was found by Aladdin in the Cave of Wonders treasure room. It is a character without a voice, and expresses itself entirely through pantomime and movements. It is genderless, but is often assumed to be male by Genie and other characters. It is playful, as it reacts with Abu, intelligent, as it beats Genie at chess (and most other things), and helpful, as it helps Aladdin romance Princess Jasmine during the song "A Whole New World". It sometimes uses its tassels as hands and feet to accentuate its feelings.'
        },
        {
          charName: "The Sultan",
          firstAppearance: "Alladin (1992)",
          createdBy: "Navid Negahban",
          voicedBy: "Douglas Seale",
          desc:
            "The Sultan (real name: Hamed Bobolonius II) is Princess Jasmine's father and the pompous but kind ruler of Agrabah. Some aspects of the character were inspired in the Wizard of Oz, to create a bumbling authority figure. He was voiced by Douglas Seale in the first film, by Val Bettin in the sequels and the TV series, and by Jeff Bennett in Disney Princess Enchanted Tales: Follow Your Dreams. In the 2019 film, the Sultan was protrayed by Navid Negahban."
        }
      ],
      tableRows4: [
        {
          charName: "Abu",
          firstAppearance: "Alladin (1992)",
          createdBy: "Joe Grant",
          voicedBy: "Frank Welker"
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A"
        },
        {
          charName: "The Sultan",
          firstAppearance: "Alladin (1992)",
          createdBy: "Navid Negahban",
          voicedBy: "Douglas Seale"
        },
        {
          charName: "Razoul",
          firstAppearance: "Alladin (1992)",
          voicedBy: "Jim Cummings"
        },
        {
          charName: "Fazahl",
          firstAppearance: "Alladin (1992)",
          voicedBy: "Jim Cummings"
        },
        {
          charName: "Hakim",
          firstAppearance: "Alladin (1992)",
          voicedBy: "Numan Acar"
        },
        {
          charName: "Zagoolien",
          firstAppearance: "Alladin (1992)",
          voicedBy: "Jeff Bennett"
        },
        {
          charName: "The Peddler",
          firstAppearance: "Alladin (1992)",
          voicedBy: "Frank Welker"
        }
      ],
      tableRows5: [
        {
          charName: "Abu",
          firstAppearance: "Alladin (1992)",
          createdBy: "Joe Grant",
          voicedBy: "Frank Welker"
        },
        {
          charName: "Magic Carpet",
          firstAppearance: "Alladin (1992)",
          createdBy: "Randy Cartwright",
          voicedBy: "N/A"
        },
        {
          charName: "The Sultan",
          firstAppearance: "Alladin (1992)",
          createdBy: "Navid Negahban",
          voicedBy: "Douglas Seale"
        }
      ]
    };
  },
  methods: {
    deleteItem(row, e) {
      var index = this.tableRows5.findIndex(x => x.charName === row.charName);
      this.tableRows5.splice(index, 1);
    },
    onRowClick: function(row) {
      this.currentModalTitle = row.charName;
      this.currentModalText = this.tableRows3.find(
        x => x.charName === row.charName
      ).desc;
      var elem = document.querySelectorAll(".modal")[0];
      var instance = M.Modal.getInstance(elem);
      instance.open();
    }
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".modal");
      var instances = M.Modal.init(elems);
    });
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".scrollspy");
      var instances = M.ScrollSpy.init(elems /*, {scrollOffset: 200}*/);
    });
  }
};
</script>

<style lang="scss">
.date {
  height: 42px;
}
footer .container {
  width: 100%;
  color: blaCK;
}
.page-footer {
  background-color: inherit !important;
  padding-bottom: 20px;
}
.section > .container {
  z-index: -1;
}
.active {
  background-color: rgba(50, 50, 50, 0.06);
}
.grey.lighten-2 {
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
}
.header {
  color: #ee6e73;
  font-weight: 300;
}

.light {
  font-weight: 300;
}

#index-banner {
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
