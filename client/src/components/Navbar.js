import React ,{useRef} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import aboutimg from "../images/about-img.jpg";
const Navbar = ()=>{
    const topNav = useRef(null);
    const showBtn = useRef(null);
    const handleclick = (e) =>{
        if(topNav.current.classList.contains('showNav')){
            topNav.current.classList.remove('showNav');
            showBtn.current.innerHTML = '<i class = "fas fa-bars"></i>';
        }else{
            topNav.current.classList.add('showNav');
            showBtn.current.innerHTML = '<i class = "fas fa-times"></i>';
        }
    }
    return(
        <>
         <header className= "header">
            <div className = "nav-section">
                <div className = "brand-and-navBtn">
                    <span className = "brand-name">
                        SARAHLAB
                    </span>
                    <span className = "navBtn flex" onClick={handleclick} ref={showBtn}>
                        <i className = "fas fa-bars"></i>
                    </span>
                </div>

                
                <nav className = "top-nav" ref={topNav}>
                    <ul>
                        <li><NavLink to = "/" >Home</NavLink></li>
                        <li><NavLink to = "/gallery" >Gallery</NavLink></li>
                        <li><NavLink to = "/blog" >Blog</NavLink></li>
                        <li><NavLink to = "/contact" >Contact</NavLink></li>
                    </ul>
                </nav>
            </div>

            <div className = "container about">
                <div className = "about-content">
                    <div className = "about-img flex">
                        <img src ={aboutimg}  alt = "photographer img" />
                    </div>
                    <h2>I'm Suman Karmakar</h2>
                    <h3>Photographer | Traveller</h3>
                    <blockquote>
                        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever ... It remembers little things, long after you have forgotten everything."
                        <span>-Aaron Siskind</span>
                    </blockquote>
                </div>

                <div className = "social-icons">
                    <ul>
                        <li>
                            <a href = "https://www.facebook.com/profile.php?id=100073330501368"><i className = "fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href = "https://api.whatsapp.com/send?phone=6291240278"><i className = "fab fa-whatsapp"></i></a>
                        </li>
                        <li>
                            <a href = "/#"><i className = "fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href = "/#"><i className = "fab fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
        
    );
}
export default Navbar;