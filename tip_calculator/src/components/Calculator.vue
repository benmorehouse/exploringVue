<template>
	<div class="calculator">
		<h1>iOS Calculator</h1>
		<Display v-bind:expression='expression' :key="this.isChanged" />

		<div class="button-row">		
			<button class="button" @click="handleNumericExpression('÷')">÷</Button>
			<button class="button" @click="negative()">+/-</Button>
			<button class="button" @click="clear()">c</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="handleNumericExpression('x')">x</Button>
			<button class="button" @click="handleNumber(7)">7</Button>
			<button class="button" @click="handleNumber(8)">8</Button>
			<button class="button" @click="handleNumber(9)">9</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="handleNumericExpression('-')">-</Button>
			<button class="button" @click="handleNumber(4)">4</Button>
			<button class="button" @click="handleNumber(5)">5</Button>
			<button class="button" @click="handleNumber(6)">6</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="handleNumericExpression('+')">+</Button>
			<button class="button" @click="handleNumber(1)">1</Button>
			<button class="button" @click="handleNumber(2)">2</Button>
			<button class="button" @click="handleNumber(3)">3</Button>
		</div>
		<div class="button-row">		
			<button class="button" @click="solve()">=</Button>
			<button class="button" @click="handleNumber('.')">.</Button>
			<div id="zero-button">
				<button class="button" @click="handleNumber(0)">0</Button>
			</div>
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
			prevExpression: '',
			isChanged: 0,
			lastCalledOperation:'',
		}
	},

	methods:{
		handleNumber: function(value){
			value = value.toString()
			if(this.expression == this.prevExpression){
				this.expression = value
			}else{
				this.expression = this.expression + value
				this.isChanged = this.isChanged + 1
			}
		},

		handleNumericExpression: function(value){
			if (value == '%'){
				if(this.expression == 0){
					this.expression = 'DNE'
				}else{
					this.lastCalledOperation = value
					this.expression = this.prevExpression / this.expression 
					this.prevExpression = this.expression
				}
			}else if(value == '-'){
				this.lastCalledOperation = value
				this.expression = this.prevExpression - this.expression 
				this.prevExpression = this.expression
			}else if(value == '*'){
				this.lastCalledOperation = value
				this.expression = this.prevExpression * this.expression 
				this.prevExpression = this.expression
			}else{
				this.lastCalledOperation = value
				this.expression = this.prevExpression + this.expression 
				this.prevExpression = this.expression
			}
			this.isChanged++
		},
		
		solve: function(){
			this.expression = Number(this.expression)
			this.prevExpression = Number(this.prevExpression)
			if(this.lastCalledOperation == ''){
				return // this means that whatever we called was just a number equal to itself
			}else if(this.lastCalledOperation == '%'){
				if(this.expression == 0){
					this.expression = 'DNE'
					this.prevExpression = 'DNE'
				}else{
					this.expression = this.prevExpression / this.expression 
					this.prevExpression = this.expression
				}
				this.lastCalledOperation = ''
			}else if(this.lastCalledOperation == '+'){
				this.lastCalledOperation = ''
				this.expression = this.prevExpression + this.expression 
				this.prevExpression = this.expression
			}else if(this.lastCalledOperation == '-'){
				this.lastCalledOperation = ''
				this.expression = this.prevExpression - this.expression
				this.prevExpression = this.expression
			}else{	
				this.lastCalledOperation = ''
				this.expression = Number(this.prevExpression) * Number(this.expression)
				this.prevExpression = this.expression
			}
			this.lastCalledOperation = ''
			this.isChanged++
		},

		clear: function(){
			this.lastCalledOperation = ''
			this.prevExpression = ''
			this.expression = ''
			this.isChanged++
		},

		negative: function(){
			this.expression *= -1
			this.isChanged++
		}
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

#zero-button > .button{
	width:200px;
}

</style>


