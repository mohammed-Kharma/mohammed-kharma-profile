import Layout from "@/componenet/admin/Layout";
import HomeConrtollers from "@/controllers/admin-databases/HomeControllers";
import DB_Home from "@/model/database/DB_Home";
import { ActionHome } from "@/redux/sciles/home-scile";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let AddHome = () => {
  
  let homeConrtoller = new HomeConrtollers();
  let nameRef = useRef();
  let jobsRef = useRef();
  let desRef  = useRef();
  let dispath = useDispatch();
  const [image ,setImage] = useState(null);
  const [imageInput , setImageInput] = useState(null);
  let onSubmitFormHnadler= async(event)=>{
    event.preventDefault();
    await createContent();
  }
  let createContent = async()=>{
    let newData = new DB_Home(
      nameRef.current.value ,
      jobsRef.current.value,
      desRef.current.value,
      image
    );
    let resposes = await homeConrtoller.CreateHome(newData);
    if(resposes){
      dispath(ActionHome.create(resposes));
      toast.success("Success Add",{position:"bottom-left"});
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
  return (
    <Layout>
      <section className="className=">
        <div className="Content-All">
          <form onSubmit={onSubmitFormHnadler} className="form-all">
            <div className="all-input-all">
              <label htmlFor="">Name:</label>
              <input ref={nameRef} type="text" placeholder="Name..." />
            </div>

            <div className="all-input-all">
              <label htmlFor="">Specialization:</label>
              <input ref={jobsRef} type="text" placeholder="Specialization..." />
              <p className="validMassage">Pleace Enter a Input</p>
            </div>

            <div className="all-input-all">
              <label htmlFor="">About Us:</label>
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
export default AddHome;
