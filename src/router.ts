import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./views/Index.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('./views/About.vue')
	},
	{
		path: '/projects',
		name: 'projects',
		component: () => import('./views/Projects.vue')
	},
	{
		path: '/contact',
		name: 'contact',
		component: () => import('./views/Contact.vue')
	}
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
