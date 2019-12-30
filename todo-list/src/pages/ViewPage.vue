<template>
	<div>
		<div id="task-list">
			<h1> Current Tasks to handle </h1>
		</div>

		<ul>
			<div v-bind:key="this.isChanged">
				<li v-for="(item,index) in tasks" v-bind:key=item.index> <!-- must bind -->
					<button class="delete-button" @click="deleteTask(index)" >
						<task v-bind:exp="item" expression={{item}} />
					</button>
				</li>
			</div>
		</ul>
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
			tasks: ['first','second','third','fourth'],
			isChanged:0,
		}
	},
	methods:{
		deleteTask: function(value){
			this.tasks.splice(Number(value),1)
			this.isChanged++
		}
	}

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.something{

}

#task-list{
	text-align:center;
}

.task{
	margin-left:auto;
	margin-right:auto;
}


.delete-button{
	background-color:white;
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
	margin-left:180px;
}

</style>
