<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h2 class="text-3xl font-bold mb-6">How are you feeling today?</h2>
        <div class="grid grid-cols-2 gap-4">
            <button v-for="mood in moods" :key="mood"
                class="px-6 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600" @click="selectMood(mood)">
                {{ mood }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            moods: ['Happy', 'Relaxed', 'Energetic', 'Sad'],
        };
    },
    methods: {
        selectMood(mood) {
            this.$router.push(`/playlist?mood=${mood}`);
        },
    },
};
</script>

<style></style>