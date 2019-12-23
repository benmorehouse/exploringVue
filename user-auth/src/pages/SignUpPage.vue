<template>
	<div>
		<input v-model="Username" placeholder="Username">
		<input v-model="Password" placeholder="Password">
		<input v-model="ConfirmPassword" placeholder="Confirm Password">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'SignUpPage',
	methods:{
		switchPage:function(){
			this.$router.push('/pages/SuccessfullyLoggedIn')
		}
	},
	
	data(){
		return{
			Username: '',
			Password: '',
			ConfirmPassword: '',
		}
	},
}
</script>

<style scoped>

input{
	width:200px;
}

button{
	width:100px;
	height:40px;
	background-color:grey;
	color:white;
}


</style>
