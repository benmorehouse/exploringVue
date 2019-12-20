<template> 
	<div class="goodbye">
		<h1>Goodbye</h1>
		<p>Here is your messages: {{msg}}</p>
	</div>
</template> 

<script>
export default {
name: 'GoodbyeWorld',
	props: {
		msg: String
	}
}
</script>

<style scoped>

h1{
	color:grey;
}

</style>
