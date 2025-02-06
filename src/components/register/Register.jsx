import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigation = useNavigate();

  const handleChange = (event) => {
    // console.log(event.target, "input tag event");

    setFormData({ ...formData, [event.target.name]: event.target.value });

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData, "form Data");

    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === "" ||
      formData.fullName === ""
    ) {
      // alert("Please fill the form completely");
      enqueueSnackbar("Please fill the form completely", {
        variant: "error",
      });
      return;
    }

    if (formData.password.length < 5) {
      // alert("password must be above 5 char");
      enqueueSnackbar("Password must be above five Characters, please try again.", { variant: "info" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      // alert("password and confirm password are not matching");
      enqueueSnackbar("Password and Confirm password are not matching, please try again.", {
        variant: "error",
      });
      return;
    }

    //validations
    // All fields non-empty
    //same email already exited
    //confirmPassword and password should match

    const exisitingData = JSON.parse(localStorage.getItem("musicUsers")) || [];

    const filterData = exisitingData.filter(
      (each) => each.email === formData.email
    );
    if (filterData.length >= 1) {
      // alert("already existing the email");
      enqueueSnackbar("The email you enter has already existed, please try to login ", { variant: "error" });
      return;
    }

    exisitingData.push(formData);
    localStorage.setItem("musicUsers", JSON.stringify(exisitingData));

    enqueueSnackbar("User Registered Sucessfully", { variant: "success" });

    navigation("/login");
  };

  return (
    <div
      className="flex justify-center items-center h-[80vh] p-4"
      onSubmit={handleSubmit}
    >
      {/* <img
        className="border rounded-lg "
        src="src/images/photo-1622811895287-7b541c50f51d.avif"
      /> */}

      <form className=" flex flex-col justify-center items-center border rounded-lg form-overlay w-[40%] m-10">
        <h1 className="mb-9"> 🎵 Join us and explore a world of music like never before! 🎶</h1>
        <div className="flex flex-col w-[70%]">
          <label className="mb-2" htmlFor="fullName">
            Full Name
          </label>
          <input
            className="bg-red-100 border rounded-lg mb-4 " 
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-red-100 border rounded-lg  mb-4 "
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
            className="bg-red-100 border rounded-lg mb-4"
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <label className="mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="bg-red-100 border rounded-lg "
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <div className="pt-5 pb-4">
          <button
            className=" button"
            type="submit"
          >
            Register
          </button>
        </div>
        <p>
          Already have an account?
          <strong >
            <Link to={"/login"}> Login </Link>
          </strong>
        </p>
      </form>
    </div>
  );
}

export default Register;
