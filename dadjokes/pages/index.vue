<template>
  <div class="p-20">
      <task-adder/>
      <task-collection/>
  </div>
    
</template>

<script>
import TaskAdder from '../components/TaskAdder.vue'
import TaskCollection from '../components/TaskCollection.vue'
export default {
  components: { TaskAdder, TaskCollection },
  
}
</script>
