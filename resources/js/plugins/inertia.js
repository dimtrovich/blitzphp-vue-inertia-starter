import { InertiaProgress } from '@inertiajs/progress'
import { Link, Head } from '@inertiajs/inertia-vue3'

InertiaProgress.init({ color: '#4B5563' });

export default function (app) {
	app.component('Head', Head)
	app.component("Link", Link)

	return app
}
