import './firebase'
import Vue from 'vue'
//import VueRouter from 'vue'
import { rtdbPlugin } from 'vuefire'
import App from './App.vue';
import router from './router/index.js';

Vue.use(rtdbPlugin);
Vue.config.productionTip = false


new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
