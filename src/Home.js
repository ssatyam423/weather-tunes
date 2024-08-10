import React from "react"
import { NavLink } from "react-router-dom"
function Home(){
    return(
        <div className="home">
            <h1 className="mainContent">Feel the atmosphere <br/><span>Live the Music</span><br/>
            <NavLink exact to="/form" className="btn btn-primary">Get started</NavLink>
            </h1>
        </div>
    )
}
 
export default Home