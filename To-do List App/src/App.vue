<template>
  <div id="app" class="min-h-screen bg-gray-50 py-10">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>
<style>
@import 'tailwindcss/tailwind.css';
</style>