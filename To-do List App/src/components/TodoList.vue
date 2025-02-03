<template>
    <div class="max-w-md mx-auto mt-10">
        <h1 class="text-2xl font-bold text-center mb-4">Vue.js To-Do List</h1>
        <div class="flex items-center mb-4">
            <input v-model="newTodo" @keyup.enter="addTodo" class="flex-1 border rounded-l-lg px-2 py-1"
                placeholder="Add a new task..." />
            <button @click="addTodo" class="bg-blue-500 text-white px-4 py-1 rounded-r-lg">Add</button>
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

<style>
body {
    font-family: Arial, sans-serif;
}
</style>