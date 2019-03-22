module.exports = app => {
	const { router, controller } = app;
	router.get('/', controller.home.main);
	router.get('/news', controller.home.news);
	router.get('/article', controller.home.article);
};