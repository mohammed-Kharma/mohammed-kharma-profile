import Layout from "@/componenet/admin/Layout";
import HomeConrtollers from "@/controllers/admin-databases/HomeControllers";
import SkllisConrtollers from "@/controllers/admin-databases/Skllis_Controller";
import DB_Home from "@/model/database/DB_Home";
import DB_Skllis from "@/model/database/DB_Skllis";
import { ActionHome } from "@/redux/sciles/home-scile";
import { ActionSkllis } from "@/redux/sciles/skllis-scile";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let AddHome = () => {
  
  let skllisControllr = new SkllisConrtollers();
  let nameRef = useRef();

  let dispath = useDispatch();
  const [image ,setImage] = useState(null);
  const [imageInput , setImageInput] = useState(null);
  let onSubmitFormHnadler= async(event)=>{
    event.preventDefault();
    await createContent();
  }
  let createContent = async()=>{
    let newData = new DB_Skllis(
      nameRef.current.value ,
      image
    );
    let resposes = await skllisControllr.CreateSkllis(newData);
    if(resposes){
      dispath(ActionSkllis.create(resposes));
      // toast.success("Success Add",{position:"bottom-left"});
      clear();
    }else{
      // toast.error("Error Add",{position:"bottom-left"});
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

  let clear = ()=>{
    nameRef.current.value ="";
  } 

  return (
    <Layout>
      <section className="home">
        <div className="Content-All">
        
          <form onSubmit={onSubmitFormHnadler} className="form-all">
          <h3>Add Skllis</h3>
            <div className="all-input-all">
              <label htmlFor="">Name:</label>
              <input ref={nameRef} type="text" placeholder="Name..." />
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
