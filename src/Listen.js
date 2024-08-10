import React from "react"
import { useLocation } from "react-router-dom"
import Iframe from 'react-iframe'
import Data from "./Data"
import FadeElement from "./FadeElement"
function Listen(props){
    const location = useLocation()
    const song_url= Data[location.weather]["song"]
    const video_url= "/Weather-tunes/Videos" + Data[location.weather]["background"]
    var text = Data[location.weather]["text"]
    return( 
        <div className="video">
            <video className='videoTag' autoPlay loop muted>
                <source src={video_url} type='video/mp4' />
            </video>   
            <Iframe url={song_url}
                
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            />
            < FadeElement text={text} />
        </div>
    )
}

export default Listen