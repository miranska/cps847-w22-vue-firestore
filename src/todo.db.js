import { firebaseApp } from "@/firebase"
import { onUnmounted, ref } from 'vue'

// See https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference for details
// Use CRUD naming convention

const todoCollection = firebaseApp.firestore().collection('todos')

export const createTodo = (todo) => {
  return todoCollection.add(todo)
}

export const readTodo = async (id) => {
  const todo = await todoCollection.doc(id).get()
  if (todo.exists) {
    return todo.data()
   } else {
    return null
   } 
}

export const updateTodo = (id, todo) => {
  return todoCollection.doc(id).update(todo)
}

export const deleteTodo = (id) => {
  return todoCollection.doc(id).delete()
}

export const readTodos = () => {
  const todos = ref([]) // making todos reactive
  const listener = todoCollection.onSnapshot(snapshot => {
    todos.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(listener)
  return todos
}
