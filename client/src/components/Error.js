import "./Error.css"
import { useNavigate } from "react-router-dom";
const Error = () =>{

    const navigate = useNavigate();
    const goToHome = () =>{
        navigate("/"); 
    }
    return(
        <>
        <div id="error-page">
         <div className="content">
            <h2 className="st" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist.
            </p>
            <div className="btns">
                <button onClick={() => goToHome()}>Go to Home</button>
            </div>
         </div>
      </div>
        </>
    )
}

export default Error;