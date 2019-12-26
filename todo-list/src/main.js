import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//imported pages
import MainPage from './pages/MainPage.vue'
import ViewTasks from './pages/ViewPage.vue'
//imported pages

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
	mode:"history",
	routes: [
		{path:'/', component: MainPage},
		{path:'/View', component: ViewTasks},
	]
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
