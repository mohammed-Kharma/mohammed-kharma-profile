import ItemBlog from "@/componenet/admin/itemBlogs";
import Layout from "@/componenet/admin/Layout";
import BlogConrtollers from "@/controllers/admin-databases/BlogControllers";
import { ActionBlog } from "@/redux/sciles/blog-scile";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let Blog = ()=>{
    let items= useSelector((state)=> state.dataBlog.filterData);
    let dispath = useDispatch();
    let controllers = new BlogConrtollers();

    let fethData =async ()=>{
        let item = await controllers.ViewBlog();
        if(item){
            dispath(ActionBlog.read(item))
        }
    }
    let onSearchHandler = (e)=>{
        dispath(ActionBlog.searchData(e.target.value));
    }
    useEffect(()=>{fethData();},[]);
    return(
        <Layout>
                <section className="home">
        <div className="Content-All">
            <div className="flex-header-search-and-filter">
                <div className="box-search">
                    <input type="search" onChange={onSearchHandler} placeholder="Search Hear..."/>
                    {/* <button>
                        <span className="bx bx-search"></span>
                    </button> */}
                </div>
        
                <div className="box-add-filter">
                 
                    <div className="add-skllis">
                        <Link href="/admin/AddBlog">Add</Link>
                    </div>
                </div>
            </div>
      
            <div className="row custome-work">
                {
                    items.map((element)=> (<ItemBlog key={element} card={element} />))
                }
            </div>
        </div>
    </section>
        </Layout>
    );
}
export default Blog;