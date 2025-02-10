import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/Auth";
import { useContext } from "react";
import { enqueueSnackbar } from "notistack";
import "../../../src/App.css"


function Header() {
  const { isLogin, setLogin } = useContext(AuthContext);

  const navigate = useNavigate();


  const handleLogout = () => {
    setLogin(false);
   
    localStorage.removeItem("favorites");

    localStorage.setItem("isLogin", JSON.stringify(false));
    navigate("/");

    enqueueSnackbar("logout Sucessfully", { variant: "info" });
    
  };

  return (
    <nav className=" p-2 pl-4 navbar  flex justify-between items-center">

    <div><h4>Sonic <span className="text-white">Flow</span></h4></div>
    <div><ul className="flex justify-between items-center px-6 text-xl">
       

       {isLogin ? (
         <>
         
           
           <li className="m-4">
             <Link to={"/"}>Home</Link>
           </li>
           <li className="m-4">
             <Link to={"/favorite"}>My Playlist</Link>
           </li >
           <li className="m-4 hover-cursor" onClick={handleLogout}>Logout</li>

           
         </>
       ) : (
         <>
           
           <li className="m-4">
             <Link to={"/login"}>Login</Link>
           </li>
           <li className="m-4">
             <Link to={"/register"}>Register</Link>
           </li>
         </>
       )}

       
     </ul></div>

      
      
      <ThemeSwitcher/>
    </nav>
  );
}
import ThemeSwitcher from "../../themes/ThemeSwitcher";


export default Header;
