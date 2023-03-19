import DB_Blog from "@/model/database/DB_Blog";

class BlogConrtollers{
    async CreateBlog(item){
        
     return await item.AddBlog();
    }
    async ViewBlog(){
        return await DB_Blog.ReadBlog();
    }
    async DeleteItemBlog(item){
        return await item.DeleteBlog();
    }
}
export default BlogConrtollers;