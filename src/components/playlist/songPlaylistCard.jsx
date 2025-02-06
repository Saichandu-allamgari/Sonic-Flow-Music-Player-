import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/Auth";

const SongsPlayList = ({item}) => {


 const {toggleFavorite } = useContext(AuthContext);



    return(
        <>
        <div className=" border rounded-border w-[300px] card "  > 
        <img src={item.image} alt="Album Image" className="w-[300px] h-[300px] object-cover rounded-2xl" />
        
           <div >
        <h1 className="pl-11 pb-3 text-2xl ">{item.title}</h1>

       
        </div>
        <div className="flex justify-around items-center ">
        <p className="pl-5">{item.likes} likes</p>

           <p className="pl-5">{item.duration} duration</p>
        </div>
       <div className="p-5"> 
        <button 
                    onClick={() => toggleFavorite(item)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                  </div>
    </div>
    </>
    )
}

export default SongsPlayList;