// 引入数据
var postsModule = require("../modules/postsModule.js");

module.exports={
    getPostList(req,res){
        // 获取数据
        var obj =req.query

        //调用数据模块进行处理
        postsModule.getPostList(obj,(err,data)=>{
            if(err){res.json({
                code:'400',
                msg:'数据查询失败'
            })}else{
                res.json({
                    code:'200',
                    msg:'数据查询成功',
                    data:data
                })
            }
        })
    }
}