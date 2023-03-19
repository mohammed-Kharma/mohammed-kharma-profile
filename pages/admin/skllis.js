import ItemSkllis from "@/componenet/admin/ItemSkllis";
import Layout from "@/componenet/admin/Layout";
import SkllisConrtollers from "@/controllers/admin-databases/Skllis_Controller";
import { ActionSkllis } from "@/redux/sciles/skllis-scile";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let Skllis = ()=>{
    let items= useSelector((state)=> state.dataSkllis.filterData);
    let dispath = useDispatch();
    let controllers = new SkllisConrtollers();
    
    let fethData =async ()=>{
        let item = await controllers.ViewSkllis();
        if(item){
            dispath(ActionSkllis.read(item));
        }
    }
    useEffect(()=>{fethData();},[]);

    let searchData =async (event)=>{
        dispath(ActionSkllis.searchData(event.target.value));
    }
    return(
      <Layout>
          <section className="home">
        <div className="Content-All">
            <div className="flex-header-search-and-filter">
                <div className="box-search">
                    <input type="search" onChange={searchData} placeholder="Search Hear..."/>
                    {/* <button>
                        <span className="bx bx-search"></span>
                    </button> */}
                </div>
           
                <div className="box-add-filter">
                
                    <div className="add-skllis">
                        <Link href="/admin/AddSkllis">Add</Link>
                    </div>
                </div>
            </div>
           
            <div className="row custome-skllis">
                {
                    items.map((element)=> (<ItemSkllis key={element} card={element}/>))
                }
                
            </div>
        </div>
    </section>
      </Layout>
    );
}
export default Skllis;