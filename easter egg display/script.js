
 document.querySelector(".looking-glass").addEventListener("click", gray);
 
 
 function gray(){


document.getElementById("g").src = "./eraser-svgrepo-com.svg"
document.getElementById("banner-photo").style.cursor = "url('eraser-svgrepo-com.svg'), auto";

function drawDot(mouseX,mouseY){
	bannerCanvas.beginPath();
    bannerCanvas.arc(mouseX, mouseY, brushRadius, 0, 2*Math.PI, true);
    bannerCanvas.fillStyle = '#000';
    bannerCanvas.globalCompositeOperation = "destination-out";
    bannerCanvas.fill();
}

banner.addEventListener("mousemove", function(e) {
	var brushPos = getBrushPos(e.clientX, e.clientY);
  var leftBut = detectLeftButton(e);
  if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y);
  }
}, false);

banner.addEventListener("touchmove", function(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) {
    var brushPos = getBrushPos(touch.pageX, touch.pageY);
        drawDot(brushPos.x, brushPos.y);
    }
}, false);

}

var banner = document.getElementById("banner-photo"),

bannerCanvas = banner.getContext('2d'),
brushRadius = (banner.width / 20) ,
img = new Image();

img.onload = function(){  
	bannerCanvas.drawImage(img, 0, 0, banner.width, banner.height);
}
	img.src = 'span.jpg';

function detectLeftButton(event) {
    if ('buttons' in event) {
        return event.buttons === 1;
    } else if ('which' in event) {
        return event.which === 1;
    } else {
        return event.button === 1;
    }
}

function getBrushPos(xRef, yRef) {
	var bannerRect = banner.getBoundingClientRect();
    return {
	  x: Math.floor((xRef-bannerRect.left)/(bannerRect.right-bannerRect.left)*banner.width),
	  y: Math.floor((yRef-bannerRect.top)/(bannerRect.bottom-bannerRect.top)*banner.height)
    };
}   


   

