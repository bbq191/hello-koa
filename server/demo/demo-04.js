const fs = require('fs');
const Koa = require('koa');
const Route = require('koa-router');

const app = new Koa();
const route = new Route();

const about = ctx =
>
{
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Index Page</a>';
}
;

const main = ctx =
>
{
    ctx.response.body = 'Hello World';
}
;

route.get('/', main);
route.get('/about', about);

app.use(route.routes());

app.listen(3000);