let EducationComponent = (props)=>{
    return(
        <div className="box">
        <i class='bx bxs-graduation'></i>
        <span>{props.edItem.year}</span>
        <h3>{props.edItem.title}</h3>
        <p>
         {
            props.edItem.detelis
         }
        </p>
      </div>
    );
}
export default EducationComponent;