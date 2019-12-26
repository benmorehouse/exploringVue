<template>
	<div id="mainpage">
		<router-link to="/">MainPage</router-link>
		<br>
		<router-link to="/SignUpPage">SignUpPage</router-link>
		<br>
		<router-link to="/SuccessfullyLoggedIn">Success</router-link>
		<br>
		<router-link to="/LoginPage">Login</router-link>
		<br>
		<router-view class="view"></router-view>
	</div>
</template>

<script>

export default {
	name: 'Mainpage',
}

</script>

<style scoped>
#mainpage{
	background-color:grey;	
	margin-left:0px;	
	margin-right:0px;	
	width:auto;
	height:1000px;
}

</style>
