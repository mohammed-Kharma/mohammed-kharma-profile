import HomeCompoenent from "@/componenet/user/HomeComp";
import LayoutUser from "@/componenet/user/Layout";
import HomeConrtollers from "@/controllers/admin-databases/HomeControllers";
import { ActionHome } from "@/redux/sciles/home-scile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let HomeUser = () => {
  let items = useSelector((state)=> state.dataHome.filterData);
  let dispath = useDispatch();
  let contrllor = new HomeConrtollers();
  let fethData =async ()=>{
    let item = await  contrllor.ViewHome();
    if(item){
      dispath(ActionHome.read(item));
    }
  }
  useEffect(()=>{fethData();},[]);
  return (
    <div>
      <LayoutUser>
      {
        items.map((element)=> ( <HomeCompoenent key={element} card={element}/>))
      }
     
      </LayoutUser>
    </div>
  );
};
export default HomeUser;
