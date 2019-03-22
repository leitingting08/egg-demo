module.exports = app => {
	const { router, controller } = app;
  router.get('/', controller.home.main);
  router.get('/404', controller.home.error404);
	router.get('/500', controller.home.error500);
	router.get('/news', controller.home.news);
	router.get('/article', controller.home.article);
};