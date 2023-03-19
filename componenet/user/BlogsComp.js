let BlogesComponent = (props)=>{
    return(
        <div className="box">
        <div className="image">
          <img src={props.card.image} alt="" />
        </div>
        <div className="content">
          <div className="icons">
            <a href="#">
              {" "}
              <i className="bx bx-calendar"></i> {props.card.year}{" "}
            </a>
            <a href="#">
              {" "}
              <i className="bx bxs-user"></i> by admin{" "}
            </a>
          </div>
          <h3>{props.card.name}</h3>
          <p>
            {
                props.card.des
            }
          </p>
          <a href="#" className="btn">
            {" "}
            read more <i class='bx bx-link'></i>{" "}
          </a>
        </div>
      </div>
    );
}
export default BlogesComponent;