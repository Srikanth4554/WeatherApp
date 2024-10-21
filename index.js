
let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data= async ()=>{
        let key="3f7e3498685fa20f6a56c71730117e7f"
       let place=document.getElementById("location").value                     
       let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
       let finaldata= await data.json()
       console.log(finaldata)
       let tempValue=document.querySelector(".temp")
       let HumValue=document.querySelector(".humid")
       let weatherCondition=document.querySelector("#main_container")
       let finalTemp=Math.round(finaldata.main.temp-273)
       let finalHum=finaldata.main.humidity
       let finalCondition=(finaldata.weather[0].main).toLowerCase()
       tempValue.innerHTML=`${finalTemp}<sup>0</sup>C`
       HumValue.innerHTML=`${finalHum} KMPH`
       let weatherimg=document.querySelector("img")
       switch (finalCondition) {
        case "clouds":
            weatherimg.src="./asserts/cloud.jpg"
            weatherCondition.style.backgroundImage="url(./asserts/cloud.jpg)"
            break;
        case "haze":
            weatherimg.src="./asserts/haze.avif"
            weatherCondition.style.backgroundImage="url(./asserts/haze.avif)"
            break;
        case "rain":
            weatherimg.src="./asserts/rain.jpg"
            weatherCondition.style.backgroundImage="url(./asserts/rain.jpg)"
            break;
        case "dust":
            weatherimg.src="./asserts/dust.webp"
            weatherCondition.style.backgroundImage="url(./asserts/dust.webp)"
            break;
        case "snow":
            weatherimg.src="./asserts/Snow.webp"
            weatherCondition.style.backgroundImage="url(./asserts/Snow.webp)"
            break;
        default:
            break;
       }
       
   }
   data()
          
})
