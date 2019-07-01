// 1.引入express模块
const express = require("express");
// 引入路由模块
const router = require("./router/index");
const ejs = require("ejs");
// 2.创建实例对象
const app = express();

// 3.添加指定的端口和监听
app.listen(3001, () => {
  console.log("http://127.0.0.1:3001");
});

// 4.设置模板引擎为ejs
app.set("view engine", "ejs");
app.set('views','./views')

// 5.添加静态资源的托管
// css样式
app.use("/assets", express.static("assets"));
// 图片
app.use("/uploads", express.static("uploads"));

// 5添加路由配置
app.use(router);
