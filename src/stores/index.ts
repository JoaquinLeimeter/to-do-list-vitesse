import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const store = new Vuex.Store({
  state: {
    todos: <any>[],
    selectedTodo: <any>{},
  },
  plugins: [createPersistedState()],
  mutations: {
    getTodos(state) {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then((data) => {
          state.todos = data
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter(item => item.id !== id)
    },
    changeState(state, id) {
      state.todos.forEach((item) => {
        if (item.id === id)
          item.completed = !item.completed
      })
    },
    addTodo(state, title) {
      state.todos = [
        {
          id: Math.floor(1000 + Math.random() * 9000),
          userId: Math.floor(1000 + Math.random() * 9000) + 1,
          title,
          completed: false,
        },
        ...state.todos,
      ]
    },
    selectTodo(state, todo): void {
      state.selectedTodo = todo
    },
    clearSelected(state) {
      state.selectedTodo = {}
    },
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
  },
})
