import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import MainPage from './pages/MainPage.vue'
import SignUpPage from './pages/SignUpPage.vue'
import LoginPage from './pages/LoginPage.vue'
import SuccessfullyLoggedInPage from './pages/SuccessfullyLoggedIn.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
	{ path: '', component: MainPage },
	{ path: '/pages/SignUpPage', component: SignUpPage },
	{ path: '/pages/SuccessfullyLoggedIn', component: SuccessfullyLoggedInPage},
	{ path: '/pages/LoginPage', component: LoginPage },
]

const router = new VueRouter({
	mode:"history",
	routes, // short for `routes: routes`
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

