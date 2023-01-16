document.querySelector('#sprintX').addEventListener("click", function(){
  window.open("./sprint x game/index.html")
})


let score = 0
let click = document.querySelector('.clicker-button')
click.addEventListener("click", function(){
  score += 1
  document.querySelector('.score').innerText = score
  localStorage.setItem("score",score);
})


let x = 0
let meting = "trackName"

window.onload = start()

function start(){
  getdata()
  score = parseInt(localStorage.getItem("score"));
  document.querySelector('.score').innerText = score;
}



document.getElementById("0").addEventListener("click",(e) => {x = 0  
    cleardata()
    getdata(x)})
document.getElementById("1").addEventListener("click",(e) => {x = 1
    cleardata()
    getdata(x)})
document.getElementById("2").addEventListener("click",(e) => {x = 2
    cleardata()
    getdata(x)})
document.getElementById("3").addEventListener("click",(e) => {x = 3
    cleardata()
    getdata(x)})
document.getElementById("4").addEventListener("click",(e) => {x = 4
    cleardata()
    getdata(x)})

    document.getElementById("track").addEventListener("click",(e) =>{
      meting = "trackName"
      cleardata()
      getdata(x)
    })
    document.getElementById("artists").addEventListener("click",(e) =>{
      meting = "artistName"
      cleardata()
      getdata(x)
    })


    function cleardata(){
       let clear = document.querySelector(".spotify-wrapped")
       clear.innerHTML = ""
    }


function getdata(){
fetch('./MyData/StreamingHistory' + x + '.json')
.then(response => response.json())
.then((data) => bingo(data));
}

function bingo(data){
    let key = meting
    arraydata = plays(data, key)
    arraydata = arraydata.sort(function(a, b) {
        return a.occurrence - b.occurrence;
      });
      arraydata = arraydata.reverse()
      console.log(arraydata)
      const frame = document.querySelector(".spotify-wrapped")
      for(var i = 1; i <=3; i++){
        const wrapped = frame.appendChild(document.createElement("div"))
        wrapped.classList.add("wrapped")
        const placement = wrapped.appendChild(document.createElement("P"))
        placement.innerText = [i] + "."
        const artist = wrapped.appendChild(document.createElement("p"))
        artist.classList.add("add")
        if(meting == "trackName"){
          artist.innerText = arraydata[i-1].trackName;
        }else if(meting == "artistName"){
          artist.innerText = arraydata[i-1].artistName;
        }
        
        const plays = wrapped.appendChild(document.createElement("p"))
        plays.classList.add("add")
        plays.innerText = "aantal plays: " + arraydata[i-1].occurrence;

      }
}


function plays(array, key){
    var playarray = [];
    array.forEach((e)=>{
         

       if(playarray.some((val)=>{ return val[key] == e[key] })){
           
         playarray.forEach((k)=>{
           if(k[key] === e[key]){ 
             k["occurrence"]++
           }
        })
           
       }else{
         let a = {}
         a[key] = e[key]
         a["occurrence"] = 1
         playarray.push(a);
       }
    })
      
    return playarray
  }


  document.querySelector(".leeruitkomst-rechts-canvas").style.cursor = "url('./images/eraser-svgrepo-com.svg'), auto";
  var canvas = document.getElementById("fontysEasteregg"),
imgcanvas = canvas.getContext('2d'),
brushRadius = (canvas.width / 10) ,
img = new Image();
var boundings = canvas.getBoundingClientRect();

    img.onload = function(){ 
        imgcanvas.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    img.src = './images/148163f8-4d2e-4701-8732-612f2982a602_00-LOGO-FONTYS-PAARS-OL-RGB.jpg';

function getMousePos(xRef, yRef) {
	var canvasRect = canvas.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-canvasRect.left)/(canvasRect.right-canvasRect.left)*canvas.width),
	  y: Math.floor((yRef-canvasRect.top)/(canvasRect.bottom-canvasRect.top)*canvas.height)
    };
}	

canvas.addEventListener("mousemove", function(e) {
	var MousePos = getMousePos(e.clientX, e.clientY);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(MousePos.x, MousePos.y);
  }
}, false);

function detectLeftButton(e) {
    if ('buttons' in e) {
        return e.buttons === 1;
    } else if ('which' in e) {
        return e.which === 1;
    } else {
        return e.button === 1;
    }
}


     
function drawDot(mouseX,mouseY){
	imgcanvas.beginPath();
    imgcanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI);
    imgcanvas.fillStyle = '#000';
    imgcanvas.globalCompositeOperation = "destination-out";
    imgcanvas.fill();
}





document.querySelector(".clicker-button").addEventListener("mousedown", () =>{
  document.querySelector(".clicker-button").src = "./images/button.png"
})

document.querySelector(".clicker-button").addEventListener("mouseup", () =>{
  document.querySelector(".clicker-button").src = "./images/press button.png"
})

