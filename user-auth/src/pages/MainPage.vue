<template>
	<div id="mainpage">
		<Button class="page-selection">
			<router-link to='/pages/SignUpPage'>Sign Up</router-link>	
		</Button>
		<br>
		<Button class="page-selection">
			<router-link to='/pages/LoginPage'>Login Page</router-link>	
		</Button>
	</div>
</template>

<script>
export default {
	name: 'Mainpage',
	methods:{
		switchPage:function(value){
			this.$router.replace(value)
		}
	}
		
}
</script>

<style>
#mainpage{
	background-color:grey;	
	margin-left:0px;	
	margin-right:0px;	
	width:auto;
	height:1000px;
}
.page-selection{
	background-color:white;	
	border-radius:10px;
	border-color:black;
	color:black;
	outline: none !important;
	outline-offset: none !important;
}
</style>
