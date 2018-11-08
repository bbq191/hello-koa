const Koa = require('koa');
const Route = require('koa-router');
const app = new Koa();
const route = new Route();

const redirect = ctx => {
  ctx.response.redirect('http://baidu.com');
};

const main = ctx => {
  ctx.response.body = 'Hello World';
};

route.get('/', main);
route.get('/redirect', redirect);

app.use(route.routes());
app.listen(3000);