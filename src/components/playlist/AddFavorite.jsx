import React, { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import AlbumCards from "../trendingSongs/AlbumCards";
import SongsPlayList from "./songPlaylistCard";

const Playlist = () => {
  const { favorite  } = useContext(AuthContext);
  const savedSongs = Object.values(favorite); 

  return (
    <div className="mt-4 ">
      <h2 className="text-xl  font-bold ml-14 ">My Playlist</h2>

      {savedSongs.length === 0 ? (
        <p className="text-center text-gray-500">No songs added yet.</p>
      ) : (
       <>
        <div className="flex flex-wrap justify-center justify-evenly gap-2.5 m-5 w-[80%]">
              
              {savedSongs.map((each)=>(
              <SongsPlayList item={each} key={each.id}/> )
            )}
        </div>
        </>

      )}
    </div>
  );
};

export default Playlist;
