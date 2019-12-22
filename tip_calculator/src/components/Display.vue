<template>
	<div class="display">
		<div class="expression-wrapper">
			{{expression}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Display',
	props:['expression'],
}
</script>

<style scoped>

.display{
	color:#D4D4D2;
	background-color:#1c1c1c;
	text-align:right;
	height:100px;
	padding-right:10px;
}

.expression-wrapper{
	font-size:50px;
	padding-top:25px;
	padding-bottom:25px;
}

</style>



