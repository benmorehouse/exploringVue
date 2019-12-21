<template>
	<div class="calculator">
		<h1>Tip Calculator</h1>
		<Display v-bind:expression='display'  />
		<div class="button-row">		
			<button class="button" @click="handleNumber(7)">7</Button>
			<button class="button" @click="handleNumber(8)">8</Button>
			<button class="button" @click="handleNumber(9)">9</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="handleNumber(4)">4</Button>
			<button class="button" @click="handleNumber(5)">5</Button>
			<button class="button" @click="handleNumber(6)">6</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="handleNumber(1)">1</Button>
			<button class="button" @click="handleNumber(2)">2</Button>
			<button class="button" @click="handleNumber(3)">3</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="handleNumber(0)">0</Button>
			<button class="button" @click="handleNumber('.')">.</Button>
		</div>
	</div>
</template>

<script>
import Display from './Display.vue'

export default {
	name: 'Calculator',

	components:{ 
		Display,
	},

	data(){
		return{
			expression: '',
		}
	},

	methods:{
		handleNumber: function(value){
			this.expression = this.expression + value		
		},
	}
}
</script>

<style scoped>
.calculator{
	height:1000px;
	width:500px;
	margin-left:auto;
	margin-right:auto;
}

h1{
	color:white;	
	text-shadow:
	-1px -1px 0 #000,
	1px -1px 0 #000,
	-1px 1px 0 #000,
	1px 1px 0 #000;
}

.button{
	float:right;
	background-color:lightgrey;
	height:50px;
	width:100px;
	text-align:center;
	color:white;
	font-size:20px;
	outline: none !important;
	outline-offset: none !important;

}

.button-row{
	background-color:grey;
	width:500px;
	height:50px;
}

</style>


