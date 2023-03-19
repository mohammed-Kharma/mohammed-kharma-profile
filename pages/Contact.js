import ContactUser from "@/componenet/user/ContactUs";
import LayoutUser from "@/componenet/user/Layout";

let Contact = () => {
  return (
    <LayoutUser>
        <section className="contact">
      <h1 className="heading">
        {" "}
        contact <span>me</span>{" "}
      </h1>

      <div className="row">
        <div className="info-container">
          <h1>get in touch</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis
            tempora?
          </p>

          <div className="box-container">
            <div className="box">
              <i className="fas fa-map"></i>
              <div className="info">
                <h3>address :</h3>
                <p>Gaze - 400104</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-envelope"></i>
              <div className="info">
                <h3>email :</h3>
                <p>mohammed.kharma2001@gmail.com</p>
              </div>
            </div>

            <div className="box">
              <i className="fas fa-phone"></i>
              <div className="info">
                <h3>number :</h3>
                <p>+9720595126158</p>
              </div>
            </div>
          </div>

          <div className="share">
            <a
              href="https://www.facebook.com/profile.php?id=100070013906086"
              className="bx bxl-facebook"
            ></a>
            <a
              href="https://wa.me/+9720595126158"
              className="bx bxl-whatsapp"
            ></a>
            <a
              href="https://www.behance.net/mohammedkharma1"
              className="bx bxl-behance"
            ></a>
            <a
              href="https://www.linkedin.com/in/mohammed-kharma-211113210/"
              className="bx bxl-linkedin"
            ></a>
          </div>
        </div>

        <ContactUser />
     
      </div>
    </section>
    </LayoutUser>
  );
};
export default Contact;
