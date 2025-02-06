import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SongsTable from "../songsTable/TrendingSongsTable";



function AlbumInfo() {

    const {id} =useParams();
    const [data, setData] = useState([]);
  
    const [songsData, setSongsData] = useState([]);
    const [search, setSearch] = useState("");

    




  useEffect(()=>{
    const fetchMusicItems = async()=>{
      try {
        const response= await axios.get(`https://csa-batch79-react.onrender.com/music/${id}`);
        console.log(response, "Response");
        setData(response.data);
        setSongsData(response.data.songs);

        console.log(response.data.songs,"response songs")
      }
      catch(err){
       console.error("error occurred", err);
      }
    };
    
    fetchMusicItems()

  },[])

  const filteredSongsData = songsData.filter((songs) =>
    songs.title.toLowerCase().includes(search.toLowerCase()));
  
   const handleSearch= (e) =>{
    setSearch(e.target.value);
   };

  


  return (
    <> 
   
   
   
   {/* I have written Search functionality for this div, which will serach album songs */}
    <div className="flex justify-center p-4">


    <input 
        type="text"
        placeholder="Search Song "
        className="border text-center px-60 py-2 rounded-lg w-1/2"
        value={search}
        onChange={handleSearch}
      />

    {search && (
        <div className="absolute left-0 right-0 p-8 mt-9 bg-black text-white md:w-1/2 mx-auto rounded-lg shadow-lg z-50">
          {filteredSongsData.length > 0 ? (
            filteredSongsData.map((songs) => (
              <div
                key={songs.id}
                className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                 // Navigate to album
              >
                <img src={songs.image} alt={songs.title} className="w-12 h-12 rounded-md mr-3" />
                <div>
                  <h2 className="text-lg">{songs.title}</h2>
                  <p className="text-sm text-gray-400">{songs.artists}</p>
                </div>
                <span className="ml-auto text-gray-300">{songs.follows} Follows</span>
              </div>
            ))
          ) : (
            <p className="text-center">No results found</p>
          )}
        </div>
      )}
    </div>
 

     {/* Here i have created two div, one for individual album details and another for album list songs which is fetching. */}

  <div className="">
     <div className="flex justify-center  "> 
      <div className="flex flex-row card">
    <div className="">
  <img src={data.image} alt="Album Image" className="  border rounded-border w-[300px] rounded-xl " />
  </div>
<div  className="p-5 flex flex-col justify-end "> 
  <h1 className="text-3xl ">{data.title}</h1> 
  <h3 className="text-wrap break-words max-w-md mt-3 mb-3"> {data.description}</h3>
  <h1 className="text-md mb-5">Slug : {data.slug}</h1>
  <h1 className="text-sm mb-5">Total Songs: {songsData.length}</h1>

<p>{data.follows} Love's this album</p></div>
     
</div>
    </div>

    {/* <div className="flex flex-wrap gap-5 w-[10vw]"> 
        
        {songsData.map((songs)=>(
          <div className="border rounded-border p-10" key={songs.id}> 
          <img src={songs.image} alt="Album Image" width={300} />
             <h1>{songs.title}</h1>
         </div>
        )
    )}
      </div> */}
   
    
  </div>
  <SongsTable songs={songsData}/>
  </>
  );
}

export default AlbumInfo;
