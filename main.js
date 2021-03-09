var images = {
	"BabaJi.jpg",
	"Umma.jpg",
	"cuchicuri.jpg",
	"Mummy.jpg",
	"CHACHU.jpg",
	"CHACHI.jpg",
	"me.jpg",
	"AADRI.jpg",
	"KANU.jpg",
	"VARDHU.jpg"
};
images++;
var about = ["Grandma", "Grandpa", "Father", "Mother", "Uncle", "Aunt", "Me", "Sister", "Sister", "Brother"];

var i = 0;

function next() {
	document.getElementById("abo").innerHTML = images[i];
	document.getElementById("my_family").src = images[i];
	i++;
}
