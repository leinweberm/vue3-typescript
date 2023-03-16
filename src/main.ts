import { createApp } from 'vue';
// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import { router } from './router'
import { RouterView } from 'vue-router';

import './assets/styles/colors.css';
import './assets/styles/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import czCS from './locales/cs.json';
import enUS from './locales/en.json';
import Button from 'primevue/button';
import MegaMenu from 'primevue/megamenu';
import InputText from 'primevue/inputtext';
import InputSwitch from 'primevue/inputswitch';
import InputNumber from 'primevue/inputnumber';
import SelectButton from 'primevue/selectbutton';

import MenuNav from './components/MenuNav.vue';

// const routes:Array<RouteRecordRaw> = [
// 	{
// 		path: '/',
// 		name: 'Home',
// 		component: App
// 	},
// 	{
// 		path: '/about',
// 		name: 'About',
// 		component: () => import('./views/About.vue')
// 	},
// 	{
// 		path: '/projects',
// 		name: 'Projects',
// 		component: () => import('./views/Projects.vue')
// 	}
// ];

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes,
// });

type MessageSchema = typeof enUS;
const i18n = createI18n<[MessageSchema], 'en' | 'cs'>({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		'en': enUS,
		'cs': czCS,
	}
});

const app = createApp(App)
app.use(router);
app.use(i18n);

app.component('Button', Button);
app.component('MegaMenu', MegaMenu);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('SelectButton', SelectButton);
app.component('MenuNav', MenuNav);
app.component('router-view', RouterView);

app.mount('#app');
