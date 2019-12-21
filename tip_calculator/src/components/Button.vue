<template>
	<button class="button" v-on:click="handleClick">
		{{number}}
	</button>
</template>

<script>

export default{
	number: 'Button',
	props: ['number'],
	methods:{
		handleClick: function(){
			alert('You have touched',this.number)
		}
	}
}

</script>

<style>

.button{
	float:right;
	background-color:lightgrey;
	height:50px;
	width:100px;
	text-align:center;
	padding-top:25px;
	color:white;
}
</style>
