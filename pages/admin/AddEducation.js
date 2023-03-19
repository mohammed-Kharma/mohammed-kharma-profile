import Layout from "@/componenet/admin/Layout";
import EducationConrtollers from "@/controllers/admin-databases/EducationControllers";
import DB_Education from "@/model/database/DB_Education";
import { ActionEducation } from "@/redux/sciles/education-scile";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let AddEducation = ()=>{
    let dispath = useDispatch();
    let controllers = new EducationConrtollers();
    let yearRef = useRef();
    let titleRef = useRef();
    let detalisRef = useRef();
    let onSubmitFormHnadler= async(event)=>{
        event.preventDefault();
        await createContent();
      }
    let createContent = async()=>{
        let newData = new DB_Education(
          yearRef.current.value,
          titleRef.current.value,
          detalisRef.current.value
        );
        let resposes = await controllers.CreateEducation(newData);
        if(resposes){
          dispath(ActionEducation.create(resposes));
          toast.success("Success Add",{position:"bottom-left"});
        }else{
          toast.error("Error Add",{position:"bottom-left"});
        }
      }
    return(
        <Layout>
            
    <section className="home">
     
      <div className="Content-All">
        <form onSubmit={onSubmitFormHnadler} action="" className="form-all">
          <div className="all-input-all">
            <label for="">Year:</label>
            <input ref={yearRef} type="text" placeholder="Name..." />
          </div>
      
          <div className="all-input-all">
            <label for="">Title:</label>
            <input ref={titleRef} type="text" placeholder="Specialization..." />
            <p className="validMassage">
                Pleace Enter a Input
            </p>
          </div>
         
          <div className="all-input-all">
            <label for="">Detelis:</label>
            <textarea ref={detalisRef} className="test-all"></textarea>
            <p className="validMassage">
                Pleace Enter a Input
            </p>
          </div>
 
          <div className="all-but-form">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </section>
        </Layout>
    );
}
export default AddEducation;