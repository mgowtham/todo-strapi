export const state = () => ({
    list: []
  })
  
  export const mutations = {
    add(state, { description, done, id }) {
      state.list.push({
        description,
        done,
        id
      })
    },
    remove(state, { id }) {
      state.list = state.list.filter(l => l.id != id)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    }
  }