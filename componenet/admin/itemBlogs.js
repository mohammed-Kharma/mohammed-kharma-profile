import BlogConrtollers from "@/controllers/admin-databases/BlogControllers";
import DB_Blog from "@/model/database/DB_Blog";
import { ActionBlog } from "@/redux/sciles/blog-scile";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

let ItemBlog = (props)=>{
    let dispath = useDispatch();
    let controller = new BlogConrtollers();

    let onDeleteItemBlog =async ()=>{
        let card = new DB_Blog();
        card._id = props.card._id;
        let deleted = await controller.DeleteItemBlog(card);
        if(deleted){
            dispath(ActionBlog.delete(props.card));
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
                    Blog Name : <span>
                        {props.card.name}
                    </span>
                </h4>
                <h6>
                    Year: <span>{props.card.year}</span>
                </h6>
                <p>
                    Details: <span>
                        {props.card.des}
                    </span>
                </p>
                <div className="icon-action">
                    <div className="box-icon-action bg-icon-one">
                        <span className="bx bx-pencil"></span>
                    </div>
                    <button onClick={onDeleteItemBlog} className="box-icon-action bg-icon-tow">
                        <span className="bx bx-trash"></span>
                    </button>
                </div>
            </div>
      
        </div>
    </div>
    );
}
export default ItemBlog;