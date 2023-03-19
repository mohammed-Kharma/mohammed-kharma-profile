let ProfileComponent = (props)=>{
    return(
        <div className="box">
            <img src={props.card.image} alt="" />
            <div className="content">
              <h3>{props.card.name}</h3>
              <p>
                {
                    props.card.des
                }
              </p>
              <a href="#">read more </a>
            </div>
          </div>
    );
}
export default ProfileComponent;