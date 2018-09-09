var immediate = document.getElementById('immediateButton');
document.getElementById('immediateButton').onclick = function(){
	console.log('wow');
	immediate.style.backgroundColor = "#EA4F37";
	immediate.style.opacity = "1.0";
	expectant.style.backgroundColor = "grey";
	delayed.style.backgroundColor = "grey";
	minor.style.backgroundColor = "grey";
	expectant.style.opacity = "0.5";
	delayed.style.opacity = "0.5";
	minor.style.opacity = "0.5";
};
var delayed = document.getElementById('delayedButton');
document.getElementById('delayedButton').onclick = function(){
	console.log('wow2');
	delayed.style.backgroundColor = "#FDF94F";
	delayed.style.opacity = "1.0";
	immediate.style.backgroundColor = "grey";
	expectant.style.backgroundColor = "grey";
	minor.style.backgroundColor = "grey";
	immediate.style.opacity = "0.5";
	expectant.style.opacity = "0.5";
	minor.style.opacity = "0.5";
};
var minor = document.getElementById('minorButton');
document.getElementById('minorButton').onclick = function(){
	console.log('wow3');
	minor.style.backgroundColor = "#1BBB1F";
	minor.style.opacity = "1.0";
	immediate.style.backgroundColor = "grey";
	delayed.style.backgroundColor = "grey";
	expectant.style.backgroundColor = "grey";
	immediate.style.opacity = "0.5";
	delayed.style.opacity = "0.5";
	expectant.style.opacity = "0.5";
};
var expectant = document.getElementById('expectantButton');
document.getElementById('expectantButton').onclick = function(){
	console.log('wow4');
	expectant.style.backgroundColor = "black";
	expectant.style.opacity = "1.0";
	immediate.style.backgroundColor = "grey";
	delayed.style.backgroundColor = "grey";
	minor.style.backgroundColor = "grey";
	immediate.style.opacity = "0.5";
	delayed.style.opacity = "0.5";
	minor.style.opacity = "0.5";
};

function changecss(id){
	console.log(document.getElementById(id).style.backgroundColor);
	if(document.getElementById(id).style.backgroundColor == "white"){
		document.getElementById(id).style.backgroundColor = "#3762F5";
	}
	else{
		document.getElementById(id).style.backgroundColor = "white";
	}
}