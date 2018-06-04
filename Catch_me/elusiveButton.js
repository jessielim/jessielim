const mybutton = document.getElementById('button');
var count = 0;


function randomColor(){
	const r = Math.floor(Math.random()*255);
	const g = Math.floor(Math.random()*255);
	const b = Math.floor(Math.random()*255);
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}
mybutton.onmouseover = function(event){
	console.log(event.target);
mybutton.style.backgroundColor = randomColor();
	if(count <=7){
		count +=1;
	mybutton.style.marginLeft = String(Math.random()*1250)+"px";
	mybutton.style.marginTop = String(Math.random()*499)+"px";
	}
	else{		
		document.getElementById('button').innerHTML = "Visit Me!";
	}
};