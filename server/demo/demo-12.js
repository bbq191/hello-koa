const Koa = require('koa');
const app = new Koa();
//ctx.throw()方法，用来抛出错误，ctx.throw(500)就是抛出500错误
const main = ctx => {
  ctx.throw(500);
};

app.use(main);
app.listen(3000);