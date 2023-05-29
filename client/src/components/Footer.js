import React, {useState} from "react";
import Axios from "axios";
import "./Footer.css";

const Footer = ()=>{
    const [subscription, setSubscription] = useState('')

    const submitSubscription = ()=>{
        Axios.post("http://localhost:3001/api/subscription",{
            subscription : subscription,
        }).then(()=>{
            alert("successful insert");
        })
    }
    return(
        <>
        <footer className = "footer">
            <div className = "footer-container container">
                <div>
                    <h2>SUMAN KARMAKAR</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati sapiente minima itaque nam modi libero optio vitae animi, praesentium quis commodi fugit quasi nostrum nihil veniam nisi suscipit cumque ducimus error doloribus est voluptatum at? Et aut mollitia quia.</p>
                </div>
                <div>
                    <h3>Free Subscription!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, facere eius! Ipsam laborum modi, cumque dolor incidunt animi nam magni.</p>

                    <div className = "subs">
                        <i className = "fas fa-envelope"></i>
                        <form>
                        <input type = "email" id = "email" name="subscription" placeholder="Email Address" onChange={(e)=>{
                            setSubscription(e.target.value)
                        }}/>
                        <button type = "submit" onClick={submitSubscription}> SUBSCRIBE </button>
                        </form>
                    </div>
                </div>
            </div>
            <p>&copy; Copyright SARAHDOE . SIMPLE AND NICE TEMPALTE</p>
        </footer>
        </>
    );
}
export default Footer;