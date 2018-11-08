const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = async ctx => {
  // 通过ctx.request.path可以获取用户请求的路径
  if (ctx.request.path !== '/') {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
  } else {
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);