const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index(){
		this.ctx.body = 'HELLO WORLD!';
	}

  async main(){
    const ctx = this.ctx;
    await ctx.render('main/entries/index.nj')
  }

  async news() {
    const ctx = this.ctx;
    const list = [
        { id: 1, title: 'news1 title', url: '/news/1', time:'2018-12-12'},
        { id: 2, title: 'news2 title', url: '/news/2', time:'2019-08-12'},

      ];
    await ctx.render('main/entries/news.nj', {list});
  }

  async article() {
    const ctx = this.ctx;
    const article = {
      title: 'wodewenzhang',
      content: 'dsaidjiuhwduishdniufhisjsncuhuhnkxnkcj啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊'
    };
    await ctx.render('main/entries/article.nj', {article});
  }

  async error404() {
    const ctx = this.ctx
    await ctx.render('common/404.nj')
  }

  async error500() {
    const ctx = this.ctx
    await ctx.render('common/500.nj')
  }
}

module.exports = HomeController;