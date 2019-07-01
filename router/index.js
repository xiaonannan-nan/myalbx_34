// 1. 引入控制器模块
const pagesController = require("../controllers/pagesController");

// 2.引入模块
const express = require("express");

// 3.路由中间件
const router = express.Router();

// 前台页面
router
  .get("/", pagesController.getIndexpage)
  .get("/list", pagesController.getListpage)
  .get('/detail',pagesController.getDetailpage)








//暴露
module.exports = router;
