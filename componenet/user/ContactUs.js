import ContactControllers from "@/controllers/admin-databases/contactControllers";
import DB_Contact from "@/model/database/DB_Contact";
import { ActionContact } from "@/redux/sciles/contactUs";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let ContactUser = ()=>{
    let dispath = useDispatch();
    let controller = new ContactControllers();
    let nameRef = useRef();
    let numberRef =useRef();
    let emailRef = useRef();
    let subjectRef = useRef();
    let massageRef = useRef();
    let onSubmitFormContact = async (evnet)=>{
        evnet.preventDefault();
        
            await createContent();
        
    }
    let createContent =async ()=>{
        let content = new DB_Contact(
            nameRef.current.value,
            numberRef.current.value,
            emailRef.current.value,
            subjectRef.current.value,
            massageRef.current.value
        );
        let final =  await controller.CreateContact(content);
        if(final){
            dispath(ActionContact.create(final));
            clearData();
            toast.success(`Send Massage`,{position:"bottom-left"});
           

        }else{
            toast.error(`Error Send Massage`,{position:"bottom-left"});
        }
    }
    // let checkData = ()=>{
    //     if(
    //         nameRef.current.value !="" && numberRef.current.value !="" &&
    //         emailRef.current.value !="" && subjectRef.current.value && massageRef.current.value
    //         ){
    //             toast.success(`Send Massage`,{position:"bottom-left"});
    //         }else{
    //             toast.error(`Pleace Enter a Input`,{position:"bottom-left"});
    //         }
    // }
    let clearData = ()=>{
        nameRef.current.value = "";
        numberRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";
        massageRef.current.value = "";
    }
    return(
        <form action="" onSubmit={onSubmitFormContact}>
        <div className="inputBox">
          <input ref={nameRef} type="text" placeholder="your name" />
          <input ref={numberRef} type="number" placeholder="your number" />
        </div>

        <div className="inputBox">
          <input ref={emailRef} type="email" placeholder="your email" />
          <input ref={subjectRef} type="text" placeholder="your subject" />
        </div>

        <textarea
          name=""
          placeholder="your message"
          id=""
          cols="30"
          rows="10"
          ref={massageRef}
        ></textarea>
      <button className="btn">
      Send Massage <i className="bx bx-send"></i>
      </button>
        {/* <input type="submit" value="send message" className="btn" /> */}
      </form>
    );
}
export default ContactUser;