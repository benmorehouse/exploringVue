<template>
	<div>
		<div class="topBar">
			<h1>STD 2.0 </h1>
			<div class="buttons-bar">
				<router-link class="router-link" to="/">Main Page</router-link>
				<router-link class="router-link" to="/View">View Tasks</router-link>
			</div>
		</div>
		
		<router-view class="view"></router-view>
		<div class="bottom-bar">
			Copyright 2019 <a href="https://github.com/benmorehouse">Benjamin Morehouse</a>
		</div>
	</div>
</template>

<script>

export default {
	name: "topBar",
}

</script>

<style>

.topBar > h1{
	color:white;
	text-align:center;
	margin-left:auto;
	margin-right:auto;
	margin-top:-10px;
	margin-bottom:-35px;
	padding-top:5px;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: black;
}

.topBar{
	margin-left:-10px;
	margin-right:-10px;
	margin-top:-10px;
	margin-bottom:-10px;
	background-color:#c41e3a;
	height:100px;
}

.router-link{
	opacity:1;
	margin-left:50px;
	margin-top:40px;
	float:left;
	height:20px;
	padding-top:10px;
	padding-bottom:10px;
	width:250px;
	text-align:center;
	background-color:#ffd700;
	border-radius:10px;
	text-decoration:none;
	color:black;
	box-shadow: 0px 2px 5px black;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.router-link:hover{
	opacity:.8;
}

.buttons-bar{
	margin-left:auto;
	margin-right:auto;
	margin-bottom:0px;
	margin-top:-20px;
	width:650px;
	height:100px;
	outline: none !important;
	outline-offset: none !important;
}

.view{
	margin-left:auto;
	margin-right:auto;
	margin-top:10px;
	width:auto;
	border-radius:20px;
	padding:20px;
	min-height:500px;
	background-color:lightgrey;
}

.bottom-bar{
	height:30px;
	margin-left:-10px;
	margin-right:-10px;
	margin-top:-20px;
	margin-bottom:0px;
	padding-top:5px;
	font-size:10px;
	color:black;
	text-align:center;
	background-color:#c41e3a;
}

</style>
