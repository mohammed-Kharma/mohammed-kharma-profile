import Layout from "@/componenet/admin/Layout";
import WorkConrtollers from "@/controllers/admin-databases/WorkConrtoller";
import DB_Home from "@/model/database/DB_Home";
import DB_Work from "@/model/database/DB_Work";
import { ActionWork } from "@/redux/sciles/work-scile";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let AddHome = () => {
  
  let Conrtoller = new WorkConrtollers();
  let nameRef = useRef();
  let desRef  = useRef();
  let dispath = useDispatch();
  const [image ,setImage] = useState(null);
  const [imageInput , setImageInput] = useState(null);
  let onSubmitFormHnadler= async(event)=>{
    event.preventDefault();
    await createContent();
  }
  let createContent = async()=>{
    let newData = new DB_Work(
      nameRef.current.value ,
      desRef.current.value,
      image
    );
    let resposes = await Conrtoller.CreateWork(newData);
    if(resposes){
      dispath(ActionWork.create(resposes));
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
          <h3>
            Add Work
          </h3>
            <div className="all-input-all">
              <label htmlFor="">Name:</label>
              <input ref={nameRef} type="text" placeholder="Name..." />
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
export default AddHome;
