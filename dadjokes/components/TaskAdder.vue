<template>
    <div class="w-1/3 m-4 border-solid border-2 border-light-blue-500 flex rounded-md">
        <input v-model="description" class="flex-grow h-10 p-3" placeholder="Things to be done.."/>
        <button class="bg-emerald-200 px-5" @click="addTask"> Add </button>
    </div>
   
</template>

<script>

export default {
    data () {
        return {
            description: ''

        }
    },
   methods: {
        addTask() {
        let { description } = this
        let conf = {
           description: description,
           done: false,
        }
        this.$axios.$post('/tasks', conf)
            .then( t => this.$store.commit('todo/add', t))
            
           
        }
   }
}
</script>

