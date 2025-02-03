<template>
    <div class="max-w-md mx-auto mt-10">
        <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Vue.js To-Do List</h1>
        <div class="flex items-center mb-6">
            <input v-model="newTodo" @keyup.enter="addTodo"
                class="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a new task..." />
            <button @click="addTodo"
                class="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Add
            </button>
        </div>
        <div>
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="toggleTodo" @delete="deleteTodo" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

export default {
    components: { TodoItem },
    setup() {
        const todos = ref([]);
        const newTodo = ref('');

        const addTodo = () => {
            if (newTodo.value.trim() !== '') {
                todos.value.push({
                    id: Date.now(),
                    text: newTodo.value,
                    completed: false,
                });
                newTodo.value = '';
            }
        };

        const toggleTodo = (id) => {
            const todo = todos.value.find(t => t.id === id);
            if (todo) todo.completed = !todo.completed;
        };

        const deleteTodo = (id) => {
            todos.value = todos.value.filter(t => t.id !== id);
        };

        return { todos, newTodo, addTodo, toggleTodo, deleteTodo };
    },
};
</script>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
}
</style>