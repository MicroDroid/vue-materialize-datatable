import Vue from 'vue'
import App from './App.vue'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import 'prismjs'
import 'prismjs/themes/prism.css'
import VueHighlightJS from 'vue-highlight.js';

import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

import 'highlight.js/styles/default.css';

Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		css,
		javascript,
		vue
	}
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
