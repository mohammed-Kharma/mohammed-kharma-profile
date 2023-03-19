import { Fragment } from "react";
import Header from "./Header";


let Layout = ({children})=>{
    return(
        <Fragment>
        <Header />
        
        <section className="home-section">
        <div className="home-content">
      
        {children}
        </div>
        </section>
        </Fragment>
      
    );
}
export default Layout;