import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/Auth";


const SongsTable = ({ songs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 10;

  const {favorite ,  toggleFavorite}=useContext(AuthContext)
 

  // Calculate the indexes for pagination
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);




  return (

    
    <div className="mt-6">

     <div className="flex justify-between justify-center">
      
      <h2 className="text-xl font-bold m-4">Songs List</h2>

      <div className="flex justify-center m-4 ">
        {Array.from({ length: Math.ceil(songs.length / songsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === i + 1 ? "button" : "bg-black-400"
            } rounded`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      </div>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2"></th>
            <th className="border p-2">Songs</th>
            <th className="border p-2">Artists</th>
            <th className="border p-2">Duration</th>
            <th className="border p-2">Add to Playlist </th>
          </tr>
        </thead>
        <tbody>
          {currentSongs.map((song) => (
            
            <tr key={song.id} className="text-center">
              <td className="border p-2">
                <img src={song.image} alt={song.title} className="w-12 h-12 rounded-md mx-auto" />
                </td>
              <td className="border p-2">{song.title}</td>
              <td className="border p-2">{song.artists}</td>
              <td className="border p-2">{song.durationInMs}</td>
              <td className="border p-2">{
                

                <button onClick={()=> toggleFavorite(song)} className="mb-4 button rounded-md">
                 {favorite[song.id] ? "Remove" : "Add"}
          
          </button>

                }</td>
            </tr>
          ))}
        </tbody>
      </table>

     
      
    </div>
  );
};

export default SongsTable;
