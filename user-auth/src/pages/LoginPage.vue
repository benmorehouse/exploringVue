<template>
	<div id="LoginPage">
		<input v-model="username" placeholder="Username">
		<input v-model="Password" placeholder="Password">
		<button @click='switchPage()'> Login </button>
	</div>
</template>

<script>
export default {
	name: 'LoginPage',
	methods:{
		switchPage:function(){
			this.$router.push()
		}
	}
		
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
