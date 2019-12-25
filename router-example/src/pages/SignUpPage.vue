<template>
	<div>
		<input v-model="Username" placeholder="Username">
		<br>

		<input v-model="Password" placeholder="Password">
		<br>
		<input v-model="ConfirmPassword" placeholder="Confirm Password">
		<br>
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
	margin:10px;
	width:200px;
	border-radius:5px;
}

button{
	margin-top:100px;
	width:100px;
	height:40px;
	background-color:grey;
	color:white;
}


</style>
