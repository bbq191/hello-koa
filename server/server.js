const Koa = require('koa');
const app = new Koa();

/*
Koa 提供一个 Context 对象，表示一次对话的上下文（包括 HTTP 请求和 HTTP 回复）。
通过加工这个对象，就可以控制返回给用户的内容。
*/
const helloworld = async ctx => {
  ctx.response.body = 'Hello World';
};

app.use(helloworld);
app.listen(3000);