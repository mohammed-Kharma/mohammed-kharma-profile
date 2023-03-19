import LayoutUser from "@/componenet/user/Layout";
import ProfileComponent from "@/componenet/user/PorfileComp";
import WorkConrtollers from "@/controllers/admin-databases/WorkConrtoller";
import { ActionWork } from "@/redux/sciles/work-scile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let Profile = () => {
  let items = useSelector((state)=> state.dataWork.filterData);
  let dispath = useDispatch();
  let controllers = new WorkConrtollers();

  let fethData = async ()=>{
    let item = await controllers.ViewWork();
    if(item){
      dispath(ActionWork.read(item));
    }
  }
  useEffect(()=>{fethData();},[]);
  return (
    <LayoutUser>
      <section className="portfolio">
        <h1 className="heading">
          {" "}
          <span>my</span> work{" "}
        </h1>

        <div className="box-container">
          {
            items.map((element)=> (<ProfileComponent key={element} card={element} />))
          }
      
        </div>

        <a href="#" className="btn">
          {" "}
          load more <i class='bx bx-loader'></i>{" "}
        </a>
      </section>
    </LayoutUser>
  );
};
export default Profile;
