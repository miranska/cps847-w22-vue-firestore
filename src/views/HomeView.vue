<template>
  <div>
    <h1>List ToDos</h1>
    <ShowTodos/>
  </div>
</template>

<script>
// @ is an alias to /src
import ShowTodos from "@/components/ShowTodos.vue"

export default {
  name: 'HomeView',
  components: {
    ShowTodos
  }
}
</script>
