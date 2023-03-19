let SkllisComponent = (props)=>{
    return(
        <div className="box">
        <img src={props.card.image} />
        <h3>{props.card.name}</h3>
      </div>
      
    );
}
export default SkllisComponent;