
// // alert("This Web Application Is Under Development")
// const {app,BrowserWindow}=require('electron')

// function createWindow(){
//     const win = new BrowserWindow({
//         width: 810,
//         height: 540,
//         frame: false,
//         webPreferences:{
//             nodeIntegration:true
//         }
//     })
//     win.loadFile("main.html")
// }

// app.whenReady().then(createWindow);
console.log("JS has Started");
function maps(){
    window.location.replace("https://www.google.com/maps")
    window.history.go(-1);
}
let homee = document.querySelector(".home");
 homee.addEventListener('click',function(){
 alert("Home");
  });
let navigation = document.getElementById("navigation").addEventListener('click',function(){
    alert("Navigation Pressed");
  location.replace("https://www.google.com/maps");
let map = "https://www.google.com/maps";
  });
let connect = document.querySelector(".connect");
  connect.addEventListener('click',function(){
  alert("Connect");
  });
let more = document.querySelector(".more");
  more.addEventListener('click',function(){
    console.log("Pressed");
  alert("More");
  location.href="Filemain.html";
  });

  let carname = document.getElementById('CarName').innerHTML = "<h1>ASHWAMEGHA</h1>";
  let date =  document.getElementById('time').innerHTML = "<h1>Time</h1>";

// let Time = document.querySelector('.time'); 
// function printtime(){
//     let date = new Date();
//     let day = date.getDate();
//     let month = date.getMonth()+1;
//     let year = date.getFullYear();
//     let time = date.getTime();
//     Time.innerHTML = day + " / " + month + " / " + year;
// }
// printtime();

    
function youtube(){
    window.open("https://www.youtube.com/" , "_blank")
}
function home() {
    alert("Press Home");
}
document.getElementById("Forward").onclick= function() {
    location.href = "secondpage.html";
}
document.getElementById("Backward").onclick= function() {
    window.history.back(-1)
}
document.getElementsByClassName("Home").onclick= function() {
    alert('Pressed Home');
    location.href="main.html";
}
document.getElementsByClassName("More").onclick= function(){
    location.href="main.html";
}
// Weather Detail 
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const api = `bd06176ba8ae2dffef62796b4c29c3d8`;
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${api}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
checkWeather();
// Weather Function Ends Here




