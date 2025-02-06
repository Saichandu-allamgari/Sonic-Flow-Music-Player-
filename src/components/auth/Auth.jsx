import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) || false
  );

  const [favorite, setFavorite]=useState(()=>{
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : {}; 
  });

  useEffect(()=>{
    localStorage.setItem("favorites", JSON.stringify(favorite));
  },[favorite]
  );


    // Toggle --- favorite status for a single song
    const toggleFavorite = (song) => {
      setFavorite((prevFavorites) => {
        const updatedFavorite={...prevFavorites};
  
        if(updatedFavorite[song.id]){
          delete updatedFavorite[song.id];
        }
         else{
  
          updatedFavorite[song.id]={
            id : song.id ,
            title : song.title ,
            artist : song.artists ,
            image : song.image ,
            duration : song.durationInMs ,
            likes : song.likes ,
            // genere : song.genere.label ,
            
          };
  
        } 
        
        
  
        localStorage.setItem("favorites", JSON.stringify(updatedFavorite));
  
        return updatedFavorite;
      });
    };
   


  return (
    <AuthContext.Provider value={{ isLogin, setLogin, favorite, setFavorite, toggleFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};