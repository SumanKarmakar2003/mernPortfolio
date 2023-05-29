import React from "react";
import "./Gallery.css";
import gallery1 from "../images/gallery1.jfif";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gallery3.jpg";
import gallery4 from "../images/gallery4.jpg";
import gallery5 from "../images/gallery5.jfif";
import gallery6 from "../images/gallery6.jfif" ;
import gallery7 from "../images/gallery7.jpg";
import gallery8 from "../images/gallery8.jfif";
import gallery9 from "../images/gallery9.jfif";

const Gallery = ()=>{
    return(
        <div>
        <section className = "section-three">
            <div className = "container">
                <div className = "gallery" >
                    <a href = {gallery1}>
                        <div className = "single-img">
                            <img src = {gallery1} alt = "gallery1" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery2}>
                        <div className = "single-img">
                            <img src = {gallery2} alt = "gallery2" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery3}>
                        <div className = "single-img">
                            <img src = {gallery3} alt = "gallery3" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery4}>
                        <div className = "single-img">
                            <img src = {gallery4} alt = "gallery4" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery5}>
                        <div className = "single-img">
                            <img src = {gallery5} alt = "gallery5" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery6}>
                        <div className = "single-img">
                            <img src = {gallery6} alt = "gallery6" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery7}>
                        <div className = "single-img">
                            <img src = {gallery7} alt = "gallery7" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery8}>
                        <div className = "single-img">
                            <img src = {gallery8} alt = "gallery8" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {gallery9}>
                        <div className = "single-img">
                            <img src = {gallery9} alt = "gallery9" />
                            <div className = "single-img-content">
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Gallery;