<template>
  <div>
    <h1>Create ToDo</h1>
    <CreateTodo/>
    <h1>List ToDos</h1>
    <ShowTodos/>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTodo from "@/components/CreateTodo.vue"
import ShowTodos from "@/components/ShowTodos.vue"

export default {
  name: 'HomeView',
  components: {
    CreateTodo,
    ShowTodos
  }
}
</script>
