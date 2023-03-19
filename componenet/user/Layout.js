import { Fragment } from "react";
import HeaderUser from "./HeaderUser";

let LayoutUser = ({children})=>{
    return(
        <Fragment>
            <HeaderUser />
            {children}
        </Fragment>
       
    );
}
export default LayoutUser;