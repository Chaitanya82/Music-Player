import ReactDOM from "react-dom";
import React, {useRef, useState, useEffect} from "react";
import AThemeForASummerPlace from "./AudioFiles/AThemeForASummerPlace.mp3";
import Flower1 from "./Images/Flower1.jpg";
//import Paper from '@mui/material/Paper';
import App from "./App.css";
import { ImPause2 } from "react-icons/im";
import { ImPlay2 } from "react-icons/im";
import { ImNext } from "react-icons/im";
import { ImPrevious } from "react-icons/im";



export default function Sound(){
    const audio1 = useRef();
    
    const [isPlaying, setIsPlaying] = useState(false);
    function Play(){
        audio1.current.play();
        
    }
    function PlayPause(){
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);
      if(!prevValue){
        audio1.current.play();
      }else{
        audio1.current.pause();
      }
    }
    return (
        <div>
          <div class='flex-container' style={{height: '500px', width: '400px', backgroundColor:'#000066', borderRadius: '25px', justifyContent: 'center'}}>
            <audio ref={audio1}>
                <source src = {AThemeForASummerPlace} type="audio/mpeg"></source>
            </audio>
            <img src={Flower1} style={{padding: '10px 0px 0px 60px',margin: '10px', height: '250px', width: '260px'}} />
            <div style={{padding: '120px 0px 0px 120px'}}>
            <button style={{fontSize: '30px', borderRadius: '50%', border: '#000066', background: '#000066', color: 'white'}}><ImPrevious /></button>
            <button onClick = {PlayPause} style={{margin: '10px',border: '#000066', background: '#000066', color: 'white', borderRadius: '10%', fontSize: '35px'}}>
            {isPlaying?<ImPause2 />:<ImPlay2 />}
            </button>
            <button style={{fontSize: '30px', borderRadius: '50%', border: '#000066', background: '#000066', color: 'white'}}><ImNext /></button>
            
            </div>
          </div>  
        </div>
    )
}