pics = [
	"images/devy_pup.jpg",
	"images/devy_sun.jpg", 
	"images/devy_elephant.jpg",
	"images/devy_asleep.jpg",
	"images/devy_shell.jpg",
	"images/devy_belly.jpg",
	"images/devy_heat.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 7){
		counter = 0;
	}
	img.src = pics[counter];
	counter = counter + 1;
});
