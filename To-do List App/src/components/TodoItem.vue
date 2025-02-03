<template>
    <div class="flex items-center justify-between p-2 bg-gray-100 rounded-lg mb-2">
        <div :class="{ 'line-through': todo.completed }" class="text-gray-800">
            {{ todo.text }}
        </div>
        <div>
            <button @click="$emit('toggle', todo.id)" class="text-green-500 mr-2">✔️</button>
            <button @click="$emit('delete', todo.id)" class="text-red-500">❌</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
};
</script>

<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>