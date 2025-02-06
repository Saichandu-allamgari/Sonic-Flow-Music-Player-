import React, { useEffect, useState } from "react";
import { useContext} from "react";
import "./home.css";
import { AuthContext } from "../auth/Auth.jsx";
import axios from "axios";
import AlbumCards from "../trendingSongs/AlbumCards.jsx";
import NewAlbumCards from "../newSongs/NewAlbumCards.jsx";

// React Slick carousel styles 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider  from "react-slick";

import { CustomPrevArrow, CustomNextArrow } from "../arrows/arrow.jsx";
import { useNavigate } from "react-router-dom";
import ContactUs from "../footer/footer.jsx";
import ImageCarousel from "./CarouselHome.jsx";



function Home() {

  // const {isLogin} = useContext(AuthContext);

  // const {isLogin} = useContext(AuthContext);

  const [data, setData]=useState([]);
  const [newAlbumData, setNewAlbumData]=useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showAll2, setShowAll2] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchMusicItems = async()=>{
      try {
        const response= await axios.get("https://csa-batch79-react.onrender.com/music");
        console.log(response, "Response");
        setData(response.data);
        
        const response2= await axios.get("https://qtify-backend-labs.crio.do/albums/new");
        console.log(response2, "Response2");
        setNewAlbumData(response2.data);
        
      }
      catch(err){
       console.error("error occurred", err);
      }
    };
    
    fetchMusicItems()

  },[])
   
    const filteredData = data.filter((each)=> 
      each.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredNewAlbums = newAlbumData.filter((album) =>
    album.title.toLowerCase().includes(search.toLowerCase())
  );


  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleAlbumTrendingClick = (id) => {
    navigate(`/albumsInfo/${id}`);
  };

  const handleAlbumNewClick = (id) => {
    navigate(`/newAlbumsInfo/${id}`);
  };

  const sliderSettings = {
    infinite: true,         
  
    slidesToShow: 5,        
    slidesToScroll: 1,      
    arrows: true,    
    prevArrow:<CustomPrevArrow/>,
    nextArrow:<CustomNextArrow/>,
  
         
    
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const users = JSON.parse(localStorage.getItem("musicUsers"))?.slice(-1)[0] ;

  return (

    <>
          <div className="flex justify-center  p-8 ">

          <input placeholder="Search Music Albums"
            className="border text-center px-60 py-2 rounded-lg w-1/2"
               value={search}
               onChange={handleSearch}
      /> 
        {search && (
        <div className="absolute left-0 right-0 m-12 bg-black text-white md:w-1/2 mx-auto rounded-lg p-4 shadow-lg z-50">
          {filteredData.length > 0 || filteredNewAlbums.length > 0 ? (
            <>
              
              {filteredData.length > 0 && <h3 className="text-gray-300 mb-2">Trending Songs</h3>}
              {filteredData.map((album) => (
                <div
                  key={album.id}
                  className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleAlbumTrendingClick(album.id)}
                >
                  <img src={album.image} alt={album.title} className="w-12 h-12 rounded-md mr-3" />
                  <div>
                    <h2 className="text-lg">{album.title}</h2>
                    <p className="text-sm text-gray-400">{album.artist}</p>
                  </div>
                  <span className="ml-auto text-gray-300">{album.follows} Follows</span>
                </div>
              ))}

              
              {filteredNewAlbums.length > 0 && <h3 className="text-gray-300 mt-4 mb-2">New Albums</h3>}
              {filteredNewAlbums.map((album) => (
                <div
                  key={album.id}
                  className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleAlbumNewClick(album.id)}
                >
                  <img src={album.image} alt={album.title} className="w-12 h-12 rounded-md mr-3" />
                  <div>
                    <h2 className="text-lg">{album.title}</h2>
                    <p className="text-sm text-gray-400">{album.artist}</p>
                  </div>
                  <span className="ml-auto text-gray-300">{album.follows} Follows</span>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center">No results found</p>
          )}
        </div>
      )}


    </div>




<div className="card p-7 m-6"> <h1 className="text-4xl text-center"> Welcome back, {users ? users.fullName : "Guest"}! Let’s set the vibe for today!</h1>
   <h1 className="text-center text-gray-800">🎼 "Find your flow, explore new beats, and enjoy your tunes!"</h1>
 </div>

 <div className=" m-14">  
   <ImageCarousel/>
</div>

    <div className="  p-4 " id="Trending Songs">
     
       <div className=" gap-5 w-[95vw] "> 
         
         <div className="relative mx-auto p-5 flex justify-between ">
          <h1>Trending Songs</h1>
          <button onClick={()=> setShowAll(!showAll)} className="mb-4 button rounded-md">
          {showAll ? "Collapse" : "Show All"}
          
          </button>
          </div>
 
        {
          showAll ? (
              <div className="grid grid-cols-5 md:grid-cols-5 gap-5  ">
  
               {data.map((each)=>(
                <AlbumCards item={each} key={each.id}  /> )
               )}

              </div>
            ):
            
            <Slider {...sliderSettings} >
    
            {data.map((each)=>(
              <AlbumCards item={each} key={each.id}/> )
            )}
            </Slider>
            
            }
      
      </div>

      
    
    </div>

    <div class="border-t-2 border-gray-400 mt-11   mx-auto"></div>

         <div className=" p-4 "  id="New Songs">
     
         <div className=" gap-5 w-[95vw] "> 
         
         <div className="relative mx-auto p-5 flex justify-between ">
          <h1>New Songs</h1>
          <button onClick={()=> setShowAll2(!showAll2)} className="mb-4 button rounded-md">
          {showAll2 ? "Collapse" : "Show All"}
          
          </button>
          </div>
 
        {
          showAll2 ? (
              <div className="grid grid-cols-5 md:grid-cols-5 gap-5">
  
                { newAlbumData.map((each2)=>(
                 <NewAlbumCards item={each2} key={each2.id}/> )
                     )}

              </div>
            ):
            
            <Slider {...sliderSettings} >
    
              { newAlbumData.map((each2)=>(
                 <NewAlbumCards item={each2} key={each2.id}/> )
                 )}
            </Slider>
            
            }
      
      </div>
    
    </div>

    <div class="border-t-2 border-gray-400 my-8 pb-8  mx-auto"></div>


    <ContactUs/>

 

    </>
  );
}

export default Home;
