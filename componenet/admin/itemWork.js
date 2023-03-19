import WorkConrtollers from "@/controllers/admin-databases/WorkConrtoller";
import DB_Work from "@/model/database/DB_Work";
import { ActionWork } from "@/redux/sciles/work-scile";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let ItemWork = (props)=>{
    let dispath = useDispatch();
    let controllers = new WorkConrtollers();

    let onDeleteItem = async()=>{
        let card = new DB_Work();
        card._id = props.card._id;
        let deleted = await controllers.DeleteItemWork(card);
        if(deleted){
            dispath(ActionWork.delete(props.card));
            toast.error(`${props.card.name} is Deleted`,{position:"bottom-left"});
        }else{
            toast.info(`${props.card.name} is Deleted`,{position:"bottom-left"});
        }
    }
    return(
        <div className="colum-work">
                    <div className="card-work">
                        <img src={props.card.image} alt=""/>
                        <div className="mar-content-work">
                            <h4>
                                Project Name : <span>{props.card.name}</span>
                            </h4>
                         
                            <p>
                                Details: <span>{props.card.des}</span>
                            </p>
                            <div className="icon-action">
                                <div className="box-icon-action bg-icon-one">
                                    <span className="bx bx-pencil"></span>
                                </div>
                                <button onClick={onDeleteItem} className="box-icon-action bg-icon-tow">
                                    <span className="bx bx-trash"></span>
                                </button>
                            </div>
                        </div>
                  
                    </div>
                </div>
    );
}
export default ItemWork;