<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <label>Description</label><br>
        <input v-model="todo.description" type="text" required />
      </div>
      <div>
        <label>Owner</label><br>
        <input v-model="todo.owner" type="text" />
      </div>
      <button type="submit"> Create </button>
    </form>
  </div>
</template>

<script setup>
import { createTodo } from '@/todo.db'
import { reactive } from 'vue'

const todo = reactive({ description: '', owner: '' })

const onSubmit = async () => {
  await createTodo({ ...todo })
  todo.description = ''
  todo.owner = ''
}
</script>
