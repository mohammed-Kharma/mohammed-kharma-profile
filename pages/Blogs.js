import BlogesComponent from "@/componenet/user/BlogsComp";
import LayoutUser from "@/componenet/user/Layout";
import BlogConrtollers from "@/controllers/admin-databases/BlogControllers";
import { ActionBlog } from "@/redux/sciles/blog-scile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let Blogs = () => {
  let items = useSelector((state)=> state.dataBlog.filterData);
  let dispath = useDispatch();
  let contrllor = new BlogConrtollers();

  let fethData =async ()=>{
      let item = await contrllor.ViewBlog();
      if(item){
        dispath(ActionBlog.read(item))
      }
  }
  useEffect(()=>{fethData();},[]);
  return (
    <LayoutUser>
      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span>my</span> blogs{" "}
        </h1>

        <div className="box-container">
         {
          items.map((element)=> (<BlogesComponent key={element} card={element} />))
         }

        </div>
      </section>
    </LayoutUser>
  );
};
export default Blogs;
