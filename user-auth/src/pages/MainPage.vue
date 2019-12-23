<template>
	<div id="mainpage">
		<button @click='switchPage()'> Login </button>
		<button @click='switchPage()'> Login </button>
	</div>
</template>

<script>
export default {
	name: 'Mainpage',
	methods:{
		switchPage:function(){
			this.$router.push({path:'/SignUpPage'})
		}
	},

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
