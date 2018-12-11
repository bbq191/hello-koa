const fs = require('fs');
const Koa = require('koa');
const app = new Koa();

const main = async
ctx =
>
{
    ctx.response.type = 'html';
    //返回给用户的网页模板文件
    ctx.response.body = fs.createReadStream('server/demo/template.html');
}
;

app.use(main);
app.listen(3000);