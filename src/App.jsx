import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import NotFound from "./components/NotFound";
import Login from "./components/login/Login";
import { useContext } from "react";
import Register from "./components/register/Register";
import { AuthContext } from "./components/auth/Auth";
import AlbumInfo from "./components/trendingSongs/AlbumInfo";
import NewAlbumInfo from "./components/newSongs/NewAlbumInfo";
import { ThemeProvider } from "./themes/ThemeContext";
import ThemeSwitcher from "./themes/ThemeSwitcher";
import Playlist from "./components/playlist/AddFavorite";


function App() {
  const { isLogin } = useContext(AuthContext);
  return (
    <>
    <ThemeProvider>
      <Header />
      

      <Routes>
        {isLogin ? <>
         <Route path="/" element={<Home />}></Route>
         <Route path="/albumsInfo/:id" element={<AlbumInfo/>}></Route>
         
         <Route path="/newAlbumsInfo/:id" element={<NewAlbumInfo />}></Route>
         <Route path="/favorite" element={<Playlist/>}></Route>
         </>
       
         
         : 
         <><Route path="/login" element={<Login />}></Route> <Route path="/register" element={<Register />}></Route></> }
        
        <Route path="*" element={<NotFound />}></Route>
        
        
      </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
