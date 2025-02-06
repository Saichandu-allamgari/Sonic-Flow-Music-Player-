import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AlbumCards = ({item}) => {
 
    const navigation = useNavigate();



    return(
        <>
        <div className=" border rounded-border w-[250px] rounded-2xl mx-5 card "  onClick={()=>navigation(`/albumsInfo/${item.id}`)}> 
        <img src={item.image} alt="Album Image" className="w-[300px] h-[300px] object-cover rounded-lg" />
        <h1 className="p-5">{item.title}</h1>
        <p className="p-5">{item.follows} Followers</p>
    </div>
    </>
    )
}

export default AlbumCards;