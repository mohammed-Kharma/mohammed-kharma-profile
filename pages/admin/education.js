import ItemEducation from "@/componenet/admin/itemEducation";
import Layout from "@/componenet/admin/Layout";
import EducationConrtollers from "@/controllers/admin-databases/EducationControllers";
import { ActionEducation } from "@/redux/sciles/education-scile";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

let education = ()=>{
    let items = useSelector((state)=> state.dataEducation.filterData);

    let dispath = useDispatch();
    let controllers = new EducationConrtollers();

    let fethData =async ()=>{
        let item = await controllers.ViewEducation();
        if(item){
            dispath(ActionEducation.read(item));
        }
    }
    useEffect(()=>{fethData();},[]);

    let onSearchHandler = (e)=>{
        dispath(ActionEducation.searchData(e.target.value));
    }
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
                  
                    <div className="add-skllis">
                        <Link href="/admin/AddEducation">Add</Link>
                    </div>
                </div>
            </div>
           
            <div className="row row-education">
            {
                items.map((element)=> ( <ItemEducation key={element} card={element} />))
            }
                
                   
            </div>
        </div>
    </section>
        </Layout>
    );
}
export default education;