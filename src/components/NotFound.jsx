import React, { useContext, useEffect } from "react";
import { AuthContext } from "./auth/Auth";
import { useNavigate } from "react-router-dom";


function NotFound(){

    const {isLogin} = useContext(AuthContext);

    const navigate= useNavigate();

    useEffect(()=>{
        if(!isLogin ){

            console.log(isLogin)
            navigate("/login")
            
        }  
    },[])

    

    console.log(isLogin)
  
    return(
    
        <div className="bg-info rounded">
            <p>
                <h1>404</h1>
            </p>
        </div>
        

    )
}

export default NotFound;