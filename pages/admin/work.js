import ItemWork from "@/componenet/admin/itemWork";
import Layout from "@/componenet/admin/Layout";
import WorkConrtollers from "@/controllers/admin-databases/WorkConrtoller";
import { ActionWork } from "@/redux/sciles/work-scile";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let Work = ()=>{
    let items = useSelector((state)=> state.dataWork.filterData);
    let dispath = useDispatch();
    let controllers = new WorkConrtollers();
    let fethData =async ()=>{
        let item = await controllers.ViewWork();
        if(item){
            dispath(ActionWork.read(item));
        }
    }
    let onSearchHandler = (e)=>{
        dispath(ActionWork.searchData(e.target.value));
    }
    useEffect(()=>{fethData();},[]);
    return(
        <Layout>
            <section className="home">
        <div className="Content-All">
            <div className="flex-header-search-and-filter">
                <div className="box-search">
                    <input type="search" onChange={onSearchHandler} placeholder="Search Hear..."/>
                    {/* <button>
                        <span className="bx bx-search"></span>
                    </button> */}
                </div>
                
                <div className="box-add-filter">
                    {/* <select name="" id="">
                        <option value="all">All Work</option>
                        <option value="Html">Html</option>
                        <option value="Css">Css</option>
                        <option value="Js">Js</option>
                        <option value="React">React</option>
                    </select> */}
                    <div className="add-skllis">
                        <Link href="/admin/AddWork">Add</Link>
                    </div>
                </div>
            </div>
      
            <div className="row custome-work">
                {
                    items.map((element)=> (<ItemWork key={element} card={element} />))
                }
               
               
            </div>
        </div>
    </section>
        </Layout>
    );
}
export default Work;