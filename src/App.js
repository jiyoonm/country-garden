import "./App.css";
import React from "react"
import SongDetail from './pages/SongDetail'
import FullPage from './pages/FullPage'
import HomeNav from './pages/HomeOverlay'
import About from './pages/About'




import { Routes , Route } from "react-router-dom";
import Scene from "./pages/Scene";

export default function App(props) {
    return (
    <div className="App">
      <Scene/>
    <Routes>
    <Route path='/' element={<HomeNav/>}/>      
    <Route path='about' element={<About/>}/>      

    <Route path='garden' element={<HomeNav/>}/> 
    <Route path='garden/:id' element={<FullPage/>}/> 
    <Route path='garden/:id/:songid' element={<SongDetail/>}/>

    </Routes>
    </div>
  );
}
 