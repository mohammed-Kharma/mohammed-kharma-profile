import Layout from "@/componenet/admin/Layout";
import BlogConrtollers from "@/controllers/admin-databases/BlogControllers";
import DB_Blog from "@/model/database/DB_Blog";
import { ActionEducation } from "@/redux/sciles/education-scile";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let AddBlog = () => {
  
  let Conrtoller = new BlogConrtollers();
  let nameRef = useRef();
  let desRef  = useRef();
  let yearRef = useRef();
  let dispath = useDispatch();
  const [image ,setImage] = useState(null);
  const [imageInput , setImageInput] = useState(null);
  let onSubmitFormHnadler= async(event)=>{
    event.preventDefault();
    await createContent();
  }
  let createContent = async()=>{
    let newData = new DB_Blog(
      nameRef.current.value ,
      yearRef.current.value,
      desRef.current.value,
      image
    );
    let resposes = await Conrtoller.CreateBlog(newData);
    if(resposes){
      dispath(ActionEducation.create(resposes));
      toast.success("Success Add",{position:"bottom-left"});
      // clearData();
    }else{
      toast.error("Error Add",{position:"bottom-left"});
    }
  }
  
  const changeImageHandler = (event)=>{
    const file = event.target.files[0];
    setImageInput(file);
    // console.log(file);
    const fileRender = new FileReader();
    fileRender.onload = function(event){
      setImage(event.target.result);
      // console.log(event.target.result);
    }
   
    fileRender.readAsDataURL(file);
  }
  let clearData = ()=>{
    nameRef.current.value ="";
    yearRef.current.value = "";
    desRef.current.value = "";

  }
  return (
    <Layout>
      <section className="className=">
        <div className="Content-All">
          <form onSubmit={onSubmitFormHnadler} className="form-all">
          <h3>
            Add Blog
          </h3>
          
            <div className="all-input-all">
              <label htmlFor="">Name:</label>
              <input ref={nameRef} type="text" placeholder="Name..." />
            </div>
            <div className="all-input-all">
              <label htmlFor="">Year:</label>
              <input ref={yearRef} type="data" placeholder="data..." />
            </div>
         

            <div className="all-input-all">
              <label htmlFor="">Detelis:</label>
              <textarea  ref={desRef} className="test-all"></textarea>
              <p className="validMassage">Pleace Enter a Input</p>
            </div>

            <div className="all-input-all1">
              <label htmlFor="">Upload Iamge:</label>
              <input onChange={changeImageHandler} type="file" className="cust-upload" />
             
            </div>

            <div className="all-but-form">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};
export default AddBlog;
