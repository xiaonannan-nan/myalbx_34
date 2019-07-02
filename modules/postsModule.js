// 1 引入mysql
var mysql = require("mysql");

// 2 创建链接
var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "baixiu"
});

module.exports = {
  getPostList(params, callback) {
    //创建sql语句
    var sql = `select posts.id,posts.slug,posts.title,posts.feature,posts.created,posts.content,posts.status,users.id,users.nickname,categories.name
        from posts
        inner join users on posts.user_id = users.id
        inner join categories on posts.category_id = categories.id
        limit ${(params.pagenum - 1) * params.pagesize},${params.pagesize}`;
    conn.query(sql, (err, results) => {
      if (err) return callback(err);

      callback(null, results);
    });
  }
};
