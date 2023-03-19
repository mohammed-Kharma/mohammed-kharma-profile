import EducationComponent from "@/componenet/user/EducationComp";
import LayoutUser from "@/componenet/user/Layout";
import SkllisComponent from "@/componenet/user/SkllisComp";
import EducationConrtollers from "@/controllers/admin-databases/EducationControllers";
import SkllisConrtollers from "@/controllers/admin-databases/Skllis_Controller";
import { ActionEducation } from "@/redux/sciles/education-scile";
import { ActionSkllis } from "@/redux/sciles/skllis-scile";
import { useEffect } from "react";
import CountUp from "react-countup";
// import CountUp from "react-countup/build/CountUp";
import { useDispatch, useSelector } from "react-redux";
// import '../assest/js/user/main.js';

let About = () => {
  let itemSkllis = useSelector((state)=> state.dataSkllis.filterData);
  let itemEd = useSelector((state)=> state.dataEducation.filterData);
  let dispathSkllis = useDispatch();
  let dispathEd = useDispatch();

  let sk_Controller = new SkllisConrtollers();
  let Ed_Controller  = new EducationConrtollers();
  let viewSkllis =async ()=>{
    let item = await sk_Controller.ViewSkllis();
    if(item){
      dispathSkllis(ActionSkllis.read(item));
    }
  }
  let viewEd =async ()=>{
    let item = await Ed_Controller.ViewEducation();
    if(item){
      dispathEd(ActionEducation.read(item));
    }
  }

  useEffect(()=>{viewSkllis(); viewEd();},[]);
  return (
    <LayoutUser>
      <section className="about">
        <h1 className="heading">
          {" "}
          about <span>me</span>{" "}
        </h1>

        <div className="row">
          <div className="info-container">
            <h1>personal info</h1>

            <div className="box-container">
              <div className="box">
                <h3>
                  {" "}
                  <span>name : </span> Abo moffed
                </h3>
                <h3>
                  {" "}
                  <span>age : </span> 22{" "}
                </h3>
                <h3>
                  {" "}
                  <span>email : </span> abc@gmail.com{" "}
                </h3>
                <h3>
                  {" "}
                  <span>address : </span> Gaza, Palestine - +972{" "}
                </h3>
              </div>

              <div className="box">
                <h3>
                  {" "}
                  <span>freelance : </span> available{" "}
                </h3>
                <h3>
                  {" "}
                  <span>skill : </span> front-end{" "}
                </h3>
                <h3>
                  {" "}
                  <span>experience : </span> 2 years{" "}
                </h3>
                <h3>
                  {" "}
                  <span>language : </span> Arbic, english{" "}
                </h3>
              </div>
            </div>

            <a href="#" className="btn">
              {" "}
              download CV <i className="bx bx-download"></i>{" "}
            </a>
          </div>

          <div className="count-container">
            <div className="box">
              <h3 className="num">
              <CountUp end={15} start={0} delay={1} duration={5}/>
               </h3>
              <p>years of experience</p>
            </div>

            <div className="box">
              <h3 className="num">
              <CountUp end={450} start={0} delay={2} duration={5}/>
              </h3>
              <p>happy clients</p>
            </div>

            <div className="box">
              <h3 className="num">
              <CountUp end={150} start={0} delay={3} duration={5}/>
              </h3>
              <p>project completed</p>
            </div>

            <div className="box">
              <h3 className="num">
              <CountUp end={10} start={0} delay={2} duration={5}/></h3>
              <p>awards won</p>
            </div>
          </div>
        </div>
      </section>
      <section className="skills">
        <h1 className="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>

        <div className="box-container">
         {
          itemSkllis.map((element)=> (<SkllisComponent  key={element} card={element}/>))
         }
          
        </div>
      </section>
      <section className="education">
        <h1 className="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>

        <div className="box-container">
        {
          itemEd.map((element)=> (<EducationComponent key={element} edItem={element}/>))
        }

        </div>
      </section>
    </LayoutUser>
  );
};
export default About;
