// 暴露
// exports.getIndexpage=(req,res)=>{
//     res.render('index.ejs')
// },getListpage=(req,res)=>{

// }

module.exports={
    //前端页面
    getIndexpage(req,res){
        res.render('index.ejs')
    },
    getListpage(req,res){
        res.render('list')
    },
    getDetailpage(req,res){
        res.render('detail')
    },
    //后端页面
    getAdminpage(req,res){
        res.render('admin')
    },
    getCategoriesPage(req,res){
        res.render('admin/categories')
    },
    getCommentsPage(req,res){
        res.render('admin/comments')
    },
    getLoginPage(req,res){
        res.render('admin/login')
    },
    getNavmenusPage(req,res){
        res.render('admin/nav-menus')
    },
    getPasswordresetPage(req,res){
        res.render('admin/password-reset')
    },
    getPostaddPage(req,res){
        res.render('admin/post-add')
    },
    getPostsPage(req,res){
        res.render('admin/posts')
    },
    getProfilepage(req,res){
        res.render('admin/profile')
    },
    getSettingspage(req,res){
        res.render('admin/settings')
    },
    getSlidespage(req,res){
        res.render('admin/slides')
    },
    getUserspage(req,res){
        res.render('admin/users')
    }
}