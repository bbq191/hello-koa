const Koa = require('koa');
const app = new Koa();

const main = async ctx => {
  /*
  返回其他类型的内容，可以先用ctx.request.accepts判断一下，客户端希望接
  受什么数据（根据 HTTP Request 的 Accept 字段），然后使用 ctx.response.type 指
  定返回类型
  */
  if (await ctx.request.accepts('xml')) {
    ctx.response.type = 'xml';
    ctx.response.body = '<data>Hello World</data>';
  } else if (await ctx.request.accepts('json')) {
    ctx.response.type = 'json';
    ctx.response.body = { data: 'Hello World' };
  } else if (ctx.request.accepts('html')) {
    ctx.response.type = 'html';
    ctx.response.body = '<p>Hello World</p>';
  } else {
    ctx.response.type = 'text';
    ctx.response.body = 'Hello World';
  }
};

app.use(main);
app.listen(3000);