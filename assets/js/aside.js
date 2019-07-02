$(function(){
     //实现点击左边菜单栏合理展开和点击变白色
  // 1.封装一个函数获取url中最后一个/后面的内容不要?后面的和/
  // 我们获取的如果有参数就是/后面到?前面的内容
  // 如果有参数就是/后面的内容
  // location.href: url中最后一个/后面的内容
  var routername = getRouterName(location.href);
  console.log(routername);
  // 2.1获取你想要添加类名的dom原素
  var menu_posts = $("#menu-posts");
  // 2.判断每次获取的路由是不是我们想要的三个其中一个
  if (
    routername == "post-add" ||
    routername == "posts" ||
    routername == "categories"
  ) {
    //添加类名:in
    menu_posts.addClass("in");
    //添加属性
    menu_posts.attr("aria-expanded", true);
  }
  var menu_posts = $("#menu-settings");
  // 2.判断每次获取的路由是不是我们想要的三个其中一个
  if (
    routername == "nav-menus" ||
    routername == "slides" ||
    routername == "settings"
  ) {
    //添加类名:in
    menu_posts.addClass("in");
    //添加属性
    menu_posts.attr("aria-expanded", true);
  }

//   添加样式 点击谁白 排他思想
$('li').removeClass('active')
$('#'+routername).addClass('active')

});