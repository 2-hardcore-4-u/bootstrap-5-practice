// изменение высоты навбара

var navbar = document.getElementById("navbar");

var prevHeight = 0;

window.onscroll = function changeNavbarHeight()
{
	if(document.documentElement.scrollTop > prevHeight){
		document.getElementById("navbar").style.height = "6vh";
	}
	else{
		document.getElementById("navbar").style.height = "8vh";
	}
	prevHeight = document.documentElement.scrollTop;
}