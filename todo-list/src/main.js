import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
//import pages
import MainPage from './pages/MainPage.vue'
import AddTasks from './pages/AddPage.vue'
import RemoveTasks from './pages/RemovePage.vue'
import ViewTasks from './pages/ViewPage.vue'

const router = new VueRouter({
	mode:"History",
	routes: [
		{path:'/', component: MainPage},
		{path:'/Add', component: AddTasks},
		{path:'/Remove', component: RemoveTasks},
		{path:'/View', component: ViewTasks},
	]
})

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
