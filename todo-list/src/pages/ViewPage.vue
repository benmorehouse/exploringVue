<template>
	<div id="text">
		<h1> Current Tasks to handle </h1>
		<task class="task" expression="Go to store"/>
	</div>
</template>

<script>
import task from '../components/task.vue'

export default {
	name: "ViewPage",
	components:{
		task,
	},
	data(){
		return{
			tasks:['Example task'],
		}
	},

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#text{
	text-align:center;
}

.task{
	margin-left:auto;
	margin-right:auto;
}

</style>
