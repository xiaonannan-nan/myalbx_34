// 1. 引入控制器模块
const pagesController = require("../controllers/pagesController");
const postsController = require("../controllers/postsController");
// 2.引入模块
const express = require("express");

// 3.路由中间件
const router = express.Router();

// 前台页面
router
  .get("/", pagesController.getIndexpage)
  .get("/list", pagesController.getListpage)
  .get("/detail", pagesController.getDetailpage)
  // 后台页面
  .get("/admin", pagesController.getAdminpage)
  .get("/admin/categories", pagesController.getCategoriesPage)
  .get("/admin/comments", pagesController.getCommentsPage)
  .get("/admin/login", pagesController.getLoginPage)
  .get("/admin/nav-menus", pagesController.getNavmenusPage)
  .get("/admin/password-reset", pagesController.getPasswordresetPage)
  .get("/admin/post-add", pagesController.getPostaddPage)
  .get("/admin/posts", pagesController.getPostsPage)
  .get("/admin/profile", pagesController.getProfilepage)
  .get("/admin/settings", pagesController.getSettingspage)
  .get("/admin/slides", pagesController.getSlidespage)
  .get("/admin/users", pagesController.getUserspage)

  // 业务处理
  .get("/getpostList", postsController.getPostList);

//暴露
module.exports = router;
