import Layout from "@/componenet/admin/Layout";
import SkllisConrtollers from "@/controllers/admin-databases/Skllis_Controller";
import DB_Skllis from "@/model/database/DB_Skllis";
import { ActionSkllis } from "@/redux/sciles/skllis-scile";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

let EditSkllis = ()=>{
  let dispath = useDispatch();
  let item = useSelector((state)=> state.dataSkllis.item);
  let controllers = new SkllisConrtollers();
  let nameRef = useRef();
  let router = useRouter();
  const {
    query:{ 
      _id,
      name,
      image
    },
}= router;
  let getDetalis =async ()=>{
    if(Object.keys(item).length ==0){
      let item = await controllers.ViewSkllis();
      dispath(ActionSkllis.read(item));
      dispath(ActionSkllis.showDetelis(router.query._id));
    }
  }
  useEffect(()=>{getDetalis();},[]);
  const [imageNew ,setImage] = useState(null);
  const [imageInput , setImageInput] = useState(null);
  const changeImageHandler = (event)=>{
    const file = event.target.files[0];
    setImageInput(file);
    // console.log(file);
    const fileRender = new FileReader();
    fileRender.onload = function(event){
      setImage(event.target.result);
     
    }
   
    fileRender.readAsDataURL(file);
  }
  let updataData = async (event)=>{
      event.preventDefault();
      let updataContent = new DB_Skllis();
      updataContent._id = _id;
      let finalUpdata = await controllers.UpdateDataSkllis(updataContent);
      if(finalUpdata){
        let newData = new DB_Skllis(
          nameRef.current.value,
          imageNew ,
          );
          console.log(newData);
        dispath(ActionSkllis.updateData(newData));
        toast.info("Success Edit",{position:"bottom-left"});
        alert(_id);
      }else{
        toast.error("Error Edit",{position:"bottom-left"});
       
      }
  }
    return(
        <Layout>
                 <section className="home">
        <div className="Content-All">
        
          <form className="form-all">
          <h3>Edit Skllis</h3>
            <div className="all-input-all">
              <label htmlFor="">Name:</label>
              <textarea className="sammelText" ref={nameRef} >{name}</textarea>
              {/* <input  type="text" placeholder="Name..." name={name}  ref={nameRef}/> */}
            </div>
            <div className="viewImages">
              <img src={image} />
            </div>
            <div className="all-input-all1">
              <label htmlFor="">Upload Iamge:</label>
              <input onChange={changeImageHandler}  type="file" className="cust-upload" />
             
            </div>

            <div onClick={updataData} className="all-but-form">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </section>
        </Layout>
    );
}
export default EditSkllis;