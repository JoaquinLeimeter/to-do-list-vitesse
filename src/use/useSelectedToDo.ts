import { store } from '../stores/index'

const todos = computed(() => store.state.todos)

export default function useSelectedToDo(id: any) {
  const selectedTodo = computed(() => {
    return todos.value.find((todo: any) => todo.id === +id)
  })
  return selectedTodo.value
}
