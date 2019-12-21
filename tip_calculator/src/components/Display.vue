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
	color:white;
	background-color:#393A47;
	text-align:right;
	height:100px;
}

.expression-wrapper{
	font-size:50px;
	padding-top:25px;
	padding-bottom:25px;
}

</style>



