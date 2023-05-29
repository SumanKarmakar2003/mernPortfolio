import React, {useState} from "react";
import "./Contact.css";
import Axios from "axios";
import Iframe from "react-iframe";

const Contact = ()=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitDetail = ()=>{
        Axios.post("http://localhost:3001/api/insert",{
            name : name,
            email : email,
            subject : subject,
            message : message,
        }).then(()=>{
            alert("successful insert");
        })
    }

    return(
        <div>
        <section className = "section-five">
            <div className = "container">
                <div className = "contact-top">
                    <h3>CONTACT ME</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nobis.</p>
                </div>

                <div className = "contact-middle">
                    <div>
                        <span className = "contact-icon">
                            <i className = "fas fa-map-signs"></i>
                        </span>
                        <span>Address</span>
                        <p>Kolkata</p>
                    </div>

                    <div>
                        <span className = "contact-icon">
                            <i className = "fas fa-phone"></i>
                        </span>
                        <span>Contact Number</span>
                        <p>6291240278</p>
                    </div>

                    <div>
                        <span className = "contact-icon">
                            <i className = "fas fa-paper-plane"></i>
                        </span>
                        <span>Email Address</span>
                        <p>sumankarmakar@gmail.com</p>
                    </div>

                    <div>
                        <span className = "contact-icon">
                            <i className = "fas fa-globe"></i>
                        </span>
                        <span>Website</span>
                        <p>www.suman.com</p>
                    </div>
                </div>

                <div className = "contact-bottom">
                    <form className = "form">
                        <input type = "text" name="name" placeholder="Your Name" onChange={(e)=>{
                            setName(e.target.value)
                        }}/>
                        <input type = "email" name="email" placeholder="Your Email"onChange={(e)=>{
                            setEmail(e.target.value)
                        }} />
                        <input type = "text" name="subject" placeholder="Subject"onChange={(e)=>{
                            setSubject(e.target.value)
                        }} />
                        <textarea rows = "9" name="message" placeholder="Message"onChange={(e)=>{
                            setMessage(e.target.value)
                        }}></textarea>
                        <input type = "submit" onClick={submitDetail} className = "btn" value = "Send Message" />
                    </form>

                    
                    <div>
                         <Iframe url="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3686.817583136562!2d88.35861521396347!3d22.473488285233827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a0270fe65c6edd5%3A0xd01b1af2b653f3f5!2sMasterda%20Surya%20Sen%2C%20Bansdroni%20Post%20Office%20Road%2C%20Naktala%2C%20Bansdroni%2C%20Kolkata%2C%20West%20Bengal%20700070!3m2!1d22.4734883!2d88.3608039!5e0!3m2!1sen!2sin!4v1667746318495!5m2!1sen!2sin" width="100%" height="600px" title="myframe" frameBorder="0" style={{border:"0"}} allowFullScreen="" aria-hidden="false" tabindex="0" /> 
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}
export default Contact;