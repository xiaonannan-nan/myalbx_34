// 暴露
// exports.getIndexpage=(req,res)=>{
//     res.render('index.ejs')
// },getListpage=(req,res)=>{

// }

module.exports={
    getIndexpage(req,res){
        res.render('index.ejs')
    },
    getListpage(req,res){
        res.render('list')
    },
    getDetailpage(req,res){
        res.render('detail')
    }
}