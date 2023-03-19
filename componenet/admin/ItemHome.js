import Link from "next/link";

let ItemHome = (porps)=>{
    return(
        <div className="row custome-home">
        <div className="col colum-home">
            <div className="img-home">
                <img src={porps.card.image}  alt=""/>
            </div>
        </div>
        <div className="col colum-home">
            <div className="content-person">
                <h3>
                    {porps.card.name}
                </h3>
                <h4>
                    {porps.card.jobs}
                </h4>
                <p>
                {porps.card.des}
                </p>
                <Link href="#" className="btn"> about me <i className="bx bxs-user"></i> </Link>
            </div>
        </div>
    </div>
    );
}
export default ItemHome;