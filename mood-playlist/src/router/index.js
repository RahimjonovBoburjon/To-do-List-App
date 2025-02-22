import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MoodSelect from '../views/MoodSelect.vue';
import Playlist from '../views/Playlist.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/mood', component: MoodSelect },
    { path: '/playlist', component: Playlist },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;