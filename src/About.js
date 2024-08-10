import React from "react"

function About(){
    return(
        <div className="about">
            <h2 className="mainContent">
                Hi there, welcome to weather-tunes. This application plays a Spotify playlist based on 
                the current weather conditions at your location. The website is built in ReactJS. The application 
                uses OpenWeatherMap API for getting the current weather. The user can either enter his/her location
                or directly use the GPS technology. The background video also changes as per the weather conditions.
            </h2>
        </div>
    )
}

export default About