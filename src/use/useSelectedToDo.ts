import {store} from '../stores/index'

const todos = computed(() => store.state.todos)
const selectedToDoId = ref(0)

export default function useSelectedToDo(id: any) {
    const selectedTodo = computed(() => {
        return todos.value.find((todo: any) => todo.id === parseInt(id))
    })
    return selectedTodo.value
}