import Link from 'next/link';
import { useState } from 'react';
import Images from '../../assest/img/profile-3.jpg';
let Header = ()=>{
    const [isOpen , setIsOpen] = useState(false);
    const toggle = ()=>{
        setIsOpen(!isOpen);
        // alert("Success");
    }
    return(
        <nav style={{width:isOpen ? "250px" : "88px"}} className="sidebar ">
        <header>
            <div className="image-text">
                <span className="image">
                    <img src={Images} alt=""/>
                </span>

                <div style={{overflow:isOpen ? "visible" : "hidden"}} className="text logo-text">
                    <span className="name">Profile</span>
                    <span className="profession">Web developer</span>
                </div>
            </div>

            <i onClick={toggle} className='bx bx-chevron-right toggle'></i>
        </header>

        <div className="menu-bar">
            <div className="menu">

        

                <ul className="menu-links">
                  
                    <li className="nav-link">
                        <Link href="/admin/home">
                            <i className='bx bx-home-alt icon' ></i>
                            <span className="text nav-text">Home Page</span>
                        </Link>
                    </li>
                 

                    <li className="nav-link">
                        <Link href="/admin/skllis">
                            <i className='bx bx-bar-chart-alt-2 icon' ></i>
                            <span className="text nav-text">My Skllis</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link href="/admin/education">
                            <i className='bx bxs-graduation icon'></i>
                            <span className="text nav-text">
                                My Education
                            </span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link href="/admin/work">
                            <i className='bx bx-pie-chart-alt icon' ></i>
                            <span className="text nav-text">My Work</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <Link href="/admin/blog">
                            <i className='bx bx-heart icon' ></i>
                            <span className="text nav-text">My Blogs</span>
                        </Link>
                    </li>

                    <li className="nav-link">
                        <a href="#">
                            <i className='bx bx-wallet icon' ></i>
                            <span className="text nav-text">Contact Us</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className="bottom-content">
                <li className="">
                    <Link href="/admin">
                        <i className='bx bx-log-out icon' ></i>
                        <span className="text nav-text">Logout</span>
                    </Link>
                </li>

              
                
            </div>
        </div>

    </nav>
      );
}
export default Header;