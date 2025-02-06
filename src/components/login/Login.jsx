import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { enqueueSnackbar } from "notistack";
import { AuthContext} from "../auth/Auth";

const Login =() =>{
  const [formData, setFormData] = useState({ email: "", password: "" });
 

  const navigate= useNavigate();
  

  const handleChange = (event) => {
    // console.log(event.target.value, "input tag event");

    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const {setLogin} = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.email === "" ||
      formData.password === "" 
    ) {
      // alert("Please fill the form completely");
      enqueueSnackbar("Please fill the form completely", {
        variant: "error",
      });
      return;
    }

    if (formData.password.length < 5) {
      // alert("password must be above 5 char");
      enqueueSnackbar("Password must be above 5 char", { variant: "info" });
      return;
    }

    const users = JSON.parse(localStorage.getItem("musicUsers")) ;

    const filterData= users.filter(
      (each)=> each.email === formData.email && each.password === formData.password);
     
    if(filterData.length === 0){
      enqueueSnackbar("The credentials you either entered incorrect or does not exist", { variant: "error" } );
      return;
    }



    localStorage.setItem("isLogin", JSON.stringify(true));
    
    setLogin(true);

    enqueueSnackbar("Login Sucessfully.", {variant: "success",});
 
     navigate("/");
    
    // console.log(filterData, "form Data");
   

  };

  return (
    <div className="flex justify-center items-center h-[80vh] p-4">
      {/* <img
        className="border rounded-lg "
        src="/src/images/photo-1574859532068-361a402b48b6.avif"
      /> */}

      <form
        className=" flex flex-col justify-center items-center border rounded-lg  form-overlay w-[40%] m-10"
        onSubmit={handleSubmit}
      >
        <h1 className="mt-9"> 🎶 Welcome back!  </h1>
        <h1 className="mb-9">  🎧 Your music, your way—just one step away! 🎧 </h1>
        <div className="flex flex-col w-[70%]">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-red-100 border rounded-lg  mb-5 "
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="bg-red-100 border rounded-lg "
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="pt-5 pb-4">
          <button
            className=" button  rounded"
            type="submit"
          >
            Login
          </button>
        </div>
        <p>
          Don't have an account?
          <strong >
            <Link to={"/register"}> Register Now</Link>
          </strong>
        </p>
      </form>
    </div>
  );
}

export default Login;
