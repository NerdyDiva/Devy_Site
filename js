pics = [
	"imgs/devy_belly.jpg",
	"imgs/devy_sun.jpg", 
	"imgs/devy_elephant.jpg",
	"imgs/devy_sleep.jpg",
	"imgs/devy_laying.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 5){
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
});
