import SkllisConrtollers from "@/controllers/admin-databases/Skllis_Controller";
import DB_Skllis from "@/model/database/DB_Skllis";
import { ActionBlog } from "@/redux/sciles/blog-scile";
import { ActionSkllis } from "@/redux/sciles/skllis-scile";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let ItemSkllis = (props)=>{
    let dispath = useDispatch();
    let controllers = new SkllisConrtollers();
    let router = useRouter();
    
    let DeleteItem =async ()=>{
        let card = new DB_Skllis();
        card._id = props.card._id;
        let deleted = await controllers.DeleteItemSkllis(card);
        if(deleted){
            dispath(ActionSkllis.delete(props.card));
            toast.error(`${props.card.name} is Deleted`,{position:"bottom-left"});
        }else{
            toast.info("Error Add",{position:"bottom-left"});
        }
    }
    let onShowDetelisPageEdit = ()=>{
        let card = new DB_Skllis();
        card._id = props.card._id;
        dispath(ActionSkllis.showDetelis(props.card._id));
        router.push({
            pathname: "/admin/EditSkllis",query:{
              _id: props.card._id,
              name:props.card.name,
              image:props.card.image
            }
        });
    }
    return(
        <div className="colum-skllis">
                    <div className="card-skklis">
                        <img src={props.card.image} alt=""/>
                        <h4>
                            {props.card.name}
                        </h4>
                        <div className="icon-action">
                            <button onClick={onShowDetelisPageEdit} className="box-icon-action bg-icon-one">
                                <span className="bx bx-pencil"></span>
                            </button>
                            <button onClick={DeleteItem} className="box-icon-action bg-icon-tow">
                                <span className="bx bx-trash"></span>
                            </button>
                        </div>
                    </div>
                </div>
    );
}
export default ItemSkllis;