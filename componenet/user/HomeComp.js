import { ReactTypical } from "@deadcoder0904/react-typical";
import Link from "next/link";

let HomeCompoenent = (props)=>{
    return(
        <section className="homeUser">
        <div className="image">
          <img src={props.card.image} alt="" />
        </div>

        <div className="content">
          <h3>{props.card.name}</h3>
          {/* <span className="typing">{props.card.jobs}</span> */}
          <span className="typing">
          I'm   
            <ReactTypical  steps={[' Front End Developer', 1000 ,' Back End Developer', 2000 , ' UXUI Desinger' , 2500]} loop={Infinity}
              wrapper="span"/>
          </span>
          <p>
            {
                props.card.des
            }
          </p>
          <Link href="#" className="btn"> about me <i className="bx bxs-user"></i> </Link>

        </div>
      </section>
    );
}
export default HomeCompoenent;