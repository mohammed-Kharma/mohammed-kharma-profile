import EducationConrtollers from "@/controllers/admin-databases/EducationControllers";
import DB_Education from "@/model/database/DB_Education";
import { ActionEducation } from "@/redux/sciles/education-scile";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let ItemEducation = (props)=>{
    let dispath = useDispatch();
    let controllers = new  EducationConrtollers();

    let DeleteItem =async ()=>{
        let card = new DB_Education();
        card._id = props.card._id;
        let deleted = await controllers.DeleteEdu(card);
        if(deleted){
            dispath(ActionEducation.delete(props.card));
            toast.error(`${props.card.title} is Deleted`,{position:"bottom-left"});
        }else{
            toast.info(`Error Deleted`,{position:"bottom-left"});
        }
    }
    return(
        <div className="colum-ed">
        <h4>
            Year: <span> {props.card.year} </span>
        </h4>
        <h4>
            Title: <span> {props.card.title}</span>
        </h4>
        <h4>
            Detelis: <span> 
                    {props.card.detelis}
             </span>
        </h4>
        <div className="icon-action">
            <div className="box-icon-action bg-icon-one">
                <span className="bx bx-pencil"></span>
            </div>
            <button onClick={DeleteItem} className="box-icon-action bg-icon-tow">
                <span className="bx bx-trash"></span>
            </button>
        </div>
    </div>
    );
}
export default ItemEducation;