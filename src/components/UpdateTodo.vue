<template>
  <div>
    <h1>Update ToDo</h1>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Description</label><br>
        <input v-model="todo.description" type="text" required />
      </div>
      <div>
        <label>Owner</label><br>
        <input v-model="todo.owner" type="text" />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { readTodo, updateTodo } from '@/todo.db'

const router = useRouter()
const route = useRoute()
const todoId = computed(() => route.params.id)

const todo = reactive({ description: '', owner: '' })
onMounted(async () => {
    const currentTodo = await readTodo(todoId.value)
    todo.description = currentTodo.description
    todo.owner = currentTodo.owner
})

const onSubmit = async () => {
    await updateTodo(todoId.value, { ...todo })
    router.push('/')
    todo.description = ''
    todo.owner = ''
}
</script>
