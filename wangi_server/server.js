let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let demoData = require('./datas/demo');

router.get('/demo', (ctx, next) => {
  ctx.body = demoData
});

app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
