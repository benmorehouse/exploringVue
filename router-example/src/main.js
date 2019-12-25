import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import MainPage from './pages/MainPage.vue'
import SignUpPage from './pages/SignUpPage.vue'
import LoginPage from './pages/LoginPage.vue'
import SuccessfullyLoggedInPage from './pages/SuccessfullyLoggedIn.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
	mode:"history",
	routes: [
		{ path: '/', component: MainPage },
		{ path: '/SignUpPage', component: SignUpPage },
		{ path: '/SuccessfullyLoggedIn', component: SuccessfullyLoggedInPage},
		{ path: '/LoginPage', component: LoginPage },
	]
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

