pics = [
	"devy_pup.jpg",
	"devy_sun.jpg", 
	"devy_elephant.jpg",
	"devy_asleep.jpg",
	"devy_shell.jpg",
	"devy_belly.jpg",
	"devy_heat.jpg",
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
