import React from "react"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom";

var lat="";
var lon="";
var weather="";
function Form(){
    let history = useHistory();
    const {register, handleSubmit} = useForm()

    function onSubmit(data){
        byName(data.cityName)
    }    
    async function byName(cityName){
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=fc415071491901ce29041bd939ec4ec2")
        const data = await response.json()
        weather=data["weather"][0]["main"]
        history.push({
            pathname: '/listen',
            weather: weather
            });
    }
    function Nav(){
        navigator.geolocation.getCurrentPosition(
            function(position) {
                lat=position.coords.latitude;
                lon=position.coords.longitude;
                byGPS(lat, lon)
            },
            function(error) {
              console.log("Error Code = " + error.code + " - " + error.message);
            }
          )
        }
        async function byGPS(lat, lon){
            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=fc415071491901ce29041bd939ec4ec2")
            const data = await response.json()
            weather=data["weather"][0]["main"]
            history.push({
                pathname: '/listen',
                weather: weather
            });
        }
    return(
        <div className="home">
            <h1 className="mainContent">Enter the city name :
                <div className="form">
                    <form onSubmit={handleSubmit(onSubmit)} className="row g-3 d-flex justify-content-center">
                        <div className="col-auto">
                            <input name="cityName" type="text" className="form-control" id="inputPassword2" ref={register}/>
                        </div>
                        <div className="col-auto d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary mb-3">Let's go</button>
                        </div>
                    </form>
                </div>
                <div><h2 className="or">OR</h2></div>
                <button onClick={Nav} type="submit" className="btn btn-primary mb-3 gps">Use GPS instead</button>
            </h1>
        </div>
    )
}

export default Form