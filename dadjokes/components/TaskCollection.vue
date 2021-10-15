<template>
    <ul>
        <li class="relative w-1/3 bg-gray-100 px-20 py-5 rounded-lg m-3" v-for="(todo, i) in todos" :key="i"> 
            {{ todo.description }}
            <button @click="deleteTask(todo)" class="bg-red-600 p-2 absolute right-5 rounded-full w-9 h-9 text-center text-white top-1/4"> X </button>
        </li>
    </ul>
</template>

<script>


export default {
computed: {
    todos () {
      return this.$store.state.todo.list
    }
  },

 mounted() {
     this.$axios.$get('/tasks')
         .then(tasks =>  tasks.forEach( t => this.$store.commit('todo/add', t) ))
  },
  methods: {
      deleteTask(todo) {

          this.$axios.$delete(`/tasks/${todo.id}`)
              .then(t => this.$store.commit('todo/remove', todo) );


      }
  }

  
}
</script>

