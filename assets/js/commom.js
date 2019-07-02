//封装一个获取最后一个/后面的内容和?前的内容

function getRouterName(href) {
  // href:代表传进来的url路径
  //  1.  indexOf('?'): 查找字符串有没有这个?,如果有?就代表有参数,有参数我们还要去掉?后面的提取中间的中间的路由名称,
  //   如果没有 就是-1
  var index = href.indexOf("?");
  //  2.  定义一个变量来储存提取的路由名称
  var routername = "";
  //  3.  判断是否有参数 indexOf() -1代表没有参数直接用substring()方法提取字符串中介于两个指定下标之间的字符
  if (index == -1) {
    // -1代表没有参数直接提取
    //   lastIndexOf():在字符串从后向前查找,我们查找最后一个/ +1就是不要我们查找的那个/
    routername = href.substring(href.lastIndexOf("/") + 1);
  } else {
    routername = href.substring(href.lastIndexOf("/") + 1, href.indexOf("?"));
  }
  return routername;
}
