
// function Search(){

//       const [search, setSearch] = useState("");
   
//           const filteredData = data.filter((each)=> 
//             each.title.toLowerCase().includes(search.toLowerCase())
//         );
      
//         const filteredNewAlbums = newAlbumData.filter((album) =>
//           album.title.toLowerCase().includes(search.toLowerCase())
//         );
      
      
//         const handleSearch = (e) => {
//           setSearch(e.target.value);
//         };
      
//         const handleAlbumClick = (id) => {
//           navigate(`/albumsInfo/${id}`);
//         };


//     return(



//         <div>

//         <input placeholder="Search Music Albums"
//           className="border text-center"
//              value={search}
//              onChange={handleSearch}
//     /> 
//       {search && (
//       <div className="absolute left-0 right-0 mt-2 bg-black text-white md:w-1/2 mx-auto rounded-lg p-4 shadow-lg z-50">
//         {filteredData.length > 0 || filteredNewAlbums.length > 0 ? (
//           <>
            
//             {filteredData.length > 0 && <h3 className="text-gray-300 mb-2">Trending Songs</h3>}
//             {filteredData.map((album) => (
//               <div
//                 key={album.id}
//                 className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
//                 onClick={() => handleAlbumClick(album.id)}
//               >
//                 <img src={album.image} alt={album.title} className="w-12 h-12 rounded-md mr-3" />
//                 <div>
//                   <h2 className="text-lg">{album.title}</h2>
//                   <p className="text-sm text-gray-400">{album.artist}</p>
//                 </div>
//                 <span className="ml-auto text-gray-300">{album.follows} Follows</span>
//               </div>
//             ))}

            
//             {filteredNewAlbums.length > 0 && <h3 className="text-gray-300 mt-4 mb-2">New Albums</h3>}
//             {filteredNewAlbums.map((album) => (
//               <div
//                 key={album.id}
//                 className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
//                 onClick={() => handleAlbumClick(album.id)}
//               >
//                 <img src={album.image} alt={album.title} className="w-12 h-12 rounded-md mr-3" />
//                 <div>
//                   <h2 className="text-lg">{album.title}</h2>
//                   <p className="text-sm text-gray-400">{album.artist}</p>
//                 </div>
//                 <span className="ml-auto text-gray-300">{album.follows} Follows</span>
//               </div>
//             ))}
//           </>
//         ) : (
//           <p className="text-center">No results found</p>
//         )}
//       </div>
//     )}


//   </div>
//     )

// }

// export default Search;