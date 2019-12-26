<template>
	<div class="topBar">
		<router-link to="/">Main Page</router-link>
		<br>
		<router-link to="/Add">SignUpPage</router-link>
		<br>
		<router-link to="/Remove">Success</router-link>
		<br>
		<router-link to="/View">Login</router-link>
		<br>
		<router-view class="view"></router-view>
	</div>
</template>

<script>

export default {
	name: "topBar",
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topBar{
	margin-left:-30px;
	margin-top:-10px;
	margin-right:-30px;
	height:1000px;
	background-color:#c41e3a;
}

router-link{
	width:20px;
	height:20px;
	background-color:#ffd700 ;
}

</style>
