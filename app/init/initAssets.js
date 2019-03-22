module.exports = (app) => {
  const env = app.config.env

  // 判断是不是生产环境
  const diffSuffix = env === 'prod' ? '' : 'dev'

  // 放在cdn上的静态资源地址--for example
  app.locals.assets = {
    main: `https://assets.cdn.com/${diffSuffix}/dist`,
  }
}