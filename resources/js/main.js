import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { APP_NAME } from './utils/constants';

import './assets/css/app.css';

import MainLayout from "./layouts/Main.vue"
import initPlugin from './plugins'

createInertiaApp({
	resolve: async (name) => {
		const pages = import.meta.glob('./views/**/*.vue');
		let page =  (await pages[`./views/${name}.vue`]()).default;

		page.layout ??= MainLayout
    	return page
	},
	title: title => title ? `${title} - ${ APP_NAME }` : APP_NAME,
	setup({ el, App, props, plugin }) {
		initPlugin(createApp({ render: () => h(App, props) }).use(plugin)).mount(el)
	},
});
