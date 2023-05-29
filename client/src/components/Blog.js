import React from "react";
import "./Blog.css";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import blog4 from "../images/blog4.jpg";
import blog5 from "../images/blog5.jpg";
import blog6 from "../images/blog6.jpg";

const Blog = ()=>{
    return(
        <div>

        <section className = "section-four">
            <div className = "container">
                <div className = "blogs">
                    <div className = "blog-wrapper-lg">
                        
                        <div className = "blog">
                            <img src = {blog1} alt="blog1" />
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/#" className = "btn">Read More</a>
                            </div>
                        </div>
                       
                        <div className = "blog">
                            <img src = {blog2} alt="blog2" />
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/#" className = "btn">Read More</a>
                            </div>
                        </div>
                       
                    </div>

                    <div className = "blog-wrapper-sm">
                        
                        <div className = "blog">
                            <img src = {blog3} alt="blog3" />
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/#" className = "btn">Read More</a>
                            </div>
                        </div>
                        
                        <div className = "blog">
                            <img src = {blog4} alt="blog4" />
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/#" className = "btn">Read More</a>
                            </div>
                        </div>
                      
                        <div className = "blog">
                            <img src = {blog5} alt="blog5" />
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/#" className = "btn">Read More</a>
                            </div>
                        </div>
                       
                        <div className = "blog">
                            <img src = {blog6} alt="blog6" />
                            <div className = "blog-content">
                                <span className = "badge">Photography</span>
                                <span className = "misc-info">
                                    Published: 1 Week Ago | 25 Comments
                                </span>
                                <h3 className = "blog-title">
                                    Best Photography Tips For Beginners
                                </h3>
                                <p className = "blog-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, eligendi!
                                </p>
                                <a href = "/#" className = "btn">Read More</a>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Blog;