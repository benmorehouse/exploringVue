<template>
	<div class="task-body-background">
		<div class="task-body">
			<div class="task-text">
				{{expression}}
			</div>
			<button class="delete-button" @click="detelTask"><strong>X</strong></button>
		</div>
	</div>
</template>

<script>

export default {
	name: "task",
	props:{
		expression:String
	},
	methods:{
		deleteTask:function(){
			// need to 	
		}	
	}
}

</script>

<style>
.task-text{
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	text-align:center;
	font-size:15px;
	color:black;
	padding:5px;
}

.task-body{
	position:relative;
	left:1px;
	top:1px;
	background-color:#ffd700;
	border-radius:10px;
	height:30px;
	width:400px;
}

.task-body-background{
	background-color:black;
	border-radius:10px;
	height:32px;
	width:402px;
}

.delete-button{
	background-color:Transparent;
	border:none;
	color:black;
	text-align:center;
	width:20px;
	height:20px;
	position:relative;
	bottom:25px;
	left:180px;
	outline: none !important;
	outline-offset: none !important;
}

</style>
