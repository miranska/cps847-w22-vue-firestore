<template>
  <div>
    <table>
      <tr>
        <th>Description</th>
        <th>Owner</th>
        <th></th>
      </tr>
      <tr v-for="{ id, description, owner } in todos" :key="id">
          <td>{{ description }}</td>
          <td>{{ owner }}</td>
          <td>
            <router-link :to="`/update/${id}`">
              <button> Update </button>
            </router-link>
            <button @click="deleteTodo(id)"> Delete </button>
          </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { readTodos, deleteTodo } from '@/todo.db'
const todos = readTodos()
</script>

<!-- The <script setup> code is equivalent to the following:

<script>
import { readTodos, deleteTodo } from '@/todo.db'

export default {
  name: 'ShowUsers',
  setup() {
    const todos = readTodos()
    return { todos, deleteTodo }
  }
}
</script>

-->

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
</style>
