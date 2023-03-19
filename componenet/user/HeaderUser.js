import Link from "next/link";

let HeaderUser = ()=>{
    return(
        <nav className="navbar">
         <Link href="/"> <i className="bx bx-home"></i> <span>home</span> </Link>
        <Link href="/About"> <i className="bx bx-user"></i> <span>about</span> </Link>
        <Link href="/Profile"> <i class='bx bx-briefcase'></i> <span>portfolio</span> </Link>
        <Link href="/Blogs"> <i class='bx bxl-blogger'></i> <span>blogs</span> </Link>
        <Link href="/Contact"> <i class='bx bxs-contact' ></i> <span>contact</span> </Link>
        </nav>
    );
}
export default HeaderUser;