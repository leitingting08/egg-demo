const path = require('path');
module.exports = appInfo => {
  let config = exports = {};

  config = {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1527412918337_1084',
    view: {
      defaultViewEngine: 'nunjucks',
      root: [
        // path.join(appInfo.baseDir, 'app/view/pages'),
        path.join(appInfo.baseDir, 'app/view'),
      ].join(','),
      mapping: {
        '.tpl': 'nunjucks',
      },
      defaultExtension: '.nj',
    },
    nunjucks: {
      // dir: 'path/to/template/dir',  // default to `{app_root}/app/view`
      cache: false, // local env is false
    },
    httpclient: {
      request: {
        timeout: 8000
      },
      followRedirect: true
    },
    time: {
      expire: 3600 * 24 * 30
    },
    static: {
      prefix: '/public/',
      dir: path.join(appInfo.baseDir, 'app/public'),
      dynamic: true,
      preload: false,
      buffer: true,
      maxAge: 31536000
    },
    projects: [
    	'news',
    	'article',
    	'form'
    ],
    middleware: [

    ],
    memcached: {
      dev: '192.168.200.244:11211',
      cn: 'hnode01.mc.host.dxy:11266'
    },
    // 404 跳转
    notfound: {
      pageUrl: '/404'
    },
    onerror: {
      // 线上页面发生异常时，重定向到这个页面上
      errorPageUrl: '/500'
    }
  }

  config.httpclient = {
    followRedirect: true
  }

  // add your config here
  // config.middleware = [];
  // config.env = 'local'
  return config;
};
