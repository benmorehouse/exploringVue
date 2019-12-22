<template>
	<div id="app">
		<Mainpage />
	</div>
</template>

<script>

import Mainpage from './pages/MainPage.vue';

export default {
	name: 'App',
	components: {
		Mainpage,
	}
}

</script>

<style>

#app{
	background-color:grey;
	margin:-10px;	
	width:auto;
	height:1000px;
}

</style>
