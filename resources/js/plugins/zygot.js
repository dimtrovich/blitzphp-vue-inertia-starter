import { ZygotVue }  from 'zygot';

export default function (app) {
	const config = typeof Zygot !== 'undefined' ? Zygot : globalThis?.Zygot;
	if (!config.defaults) {
		config.defaults = {};
	}

	config.defaults.routeNamePrefix = '';

	app.use(ZygotVue, config);
	
	return app
}
