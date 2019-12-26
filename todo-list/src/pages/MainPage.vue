<template>
	<topBar />
</template>

<script>
import topBar from '../components/topBar.vue'

export default {
	name: "MainPage",
	components:{
		topBar,
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topBar{
	margin-left:-30px;
	margin-top:-10px;
	margin-right:-30px;
	height:100px;
	background-color:#c41e3a;
}

</style>
