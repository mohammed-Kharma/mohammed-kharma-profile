import ItemHome from "@/componenet/admin/ItemHome";
import Layout from "@/componenet/admin/Layout";
import HomeConrtollers from "@/controllers/admin-databases/HomeControllers";
import { ActionHome } from "@/redux/sciles/home-scile";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Images from '../../assest/img/profile-3.jpg';
let Home=  ()=>{
    let items =useSelector((state)=> state.dataHome.filterData);
    let dispath = useDispatch();
    let homeConrtoller = new HomeConrtollers();

    let fethData =async ()=>{
        let item = await homeConrtoller.ViewHome();
        if(item){
            dispath(ActionHome.read(item));
        }
    }
    useEffect(()=>{fethData();},[]);
    return(
        <Layout>
        <section className="home">
        
        <div className="Content-All">
            <div className="add-but">
                <a href="" className="edit-home">Edit</a>
                <Link href="/admin/AddHome" >Add</Link>
                
            </div>
            <div className="carding-home-info">
                {
                    items.map((element)=> (<ItemHome key={element} card={element}/>))
                }
                 
                </div>
            
            
        </div>
    </section>
        </Layout>
    );
}
export default Home;