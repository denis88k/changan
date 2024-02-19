export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `./${app.path.buildFolder}/`,
		},
		notify: true,
		port: 3000 || 3002 || 3003,
	});
};
