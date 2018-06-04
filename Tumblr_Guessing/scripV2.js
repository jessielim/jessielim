
var tagChoices = ['baking','cake','macaron','fondue','cookies','muffin']; //tags
var randomImages = document.getElementById('random_img'); //list-data
var tagOption = document.querySelector('h2'); //choices//
var selectedTag = "";  //answer


function randomColor(){
	const r = Math.floor(Math.random()*255);
	const g = Math.floor(Math.random()*255);
	const b = Math.floor(Math.random()*255);
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function reset(){
	tagOption.innerHTML="";
	selectedTag = tagChoices[Math.floor(Math.random()*tagChoices.length)]
	getTaggedPhotos(selectedTag);

	const choices =[];
	choices.push(selectedTag);

	while(choices.length < 4){
		const rand = tagChoices[Math.floor(Math.random()*tagChoices.length)]
		if(choices.indexOf(rand) == -1){
			choices.push(rand);
		}
	}

	choices.sort(function(){
		return Math.random()*2 -1 ;
	});

	for(let i=0; i< choices.length; i++){
		const li = document.createElement('li');
		const btn = document.createElement('button');
		li.appendChild(btn)
		btn.innerHTML = choices[i];
		console.log(btn.innerHTML)
		btn.style.backgroundColor = randomColor();
		btn.onclick = function(){
			if(btn.innerHTML == selectedTag){
				window.alert("You've guess correctly!")
			}
			else{
				window.alert("Sorry! The answer is " + selectedTag + " !")
			}

			reset();
		}
		tagOption.appendChild(btn);
	}
}
function getTaggedPhotos(selectedTag){

	fetch("https://api.tumblr.com/v2/tagged?tag=" + selectedTag + "&api_key=LMS8c5l0uDdzMFu43CyJtM67dErLNf7b09jUT4vYpypPcfSrCl")
	.then(function(response){
		return response.json();
	}).then(function(result){

		randomImages.innerHTML='';
		var items = result.response;
		let masonry;


		for(let i=0;i < items.length; i++){
			const item = items[i];
			if(items[i].photos != undefined){
			var altSizes = item.photos[0].alt_sizes
			var imgSrc = altSizes[altSizes.length -3].url;

			const img = document.createElement('img');
			img.src = imgSrc;
			img.onload = function(){
				masonry.layout();
			}
			// randomImages.innerHTML = imgSrc;
			const li = document.createElement('li');
			li.appendChild(img);
			randomImages.appendChild(img);
			// containerImage.appendChild(randomImages);
			}
		}

		
		masonry = new Masonry(randomImages, {
		itemSelector: 'img',
		gutterWidth: 8,
		});

		masonry.layout();
	})
}



reset()
// form.onsubmit = function(event){
// 	event.preventDefault();

// 	const queryTerm = query.value;
// 	console.log(queryTerm);

// 	getTaggedPhotos(queryTerm);
// }





// function callBack(selectedTag){
// fetch("https://api.tumblr.com/v2/tagged?tag=" + selectedTag + "&api_key=LMS8c5l0uDdzMFu43CyJtM67dErLNf7b09jUT4vYpypPcfSrCl")
// .then(function(resp){
// 	return resp.json();
// }).then(function(result){
// 	for(var i=0;i<result.response.length;i++){
// 		for(var j=0;j<result.response[i].photos.length;j++){
// 			if(result.response[i].photos[j].alt_sizes[6] !=undefined){

// 			var imagesResult= result.response[i].photos[j].alt_sizes[6].url;
// 			let images = document.createElement('img');
// 			images.src = imagesResult;
// 			randomImages.appendChild(images);
// 			}
// 		}
// 	}
	
// })
// }

// // button creating
// for(let i=0; i<tagChoices.length; i++){
// let newBtn = document.createElement('button');
// newBtn.name = tagChoices[i];
// newBtn.innerHTML = tagChoices[i];
// tagOption.appendChild(newBtn);
// // console.log(newBtn.getAttribute('name'))
// // newBtn.setAttribute('class','btnBTN');
// // callBack(selectedTag);
// callBack();

// newBtn.onclick = function(event){
// 			console.log(event.target.name)
// 			selectedTag = event.target.name;
// 			callBack(selectedTag);

// 		}
// }



	// newBtn.getAttribute('name');
	// console.log(this);

// console.log(tagS[i])
// while (i--){
// 	if (tagS[i].length <4){
// 		tagS.splice(i,1);
// 	}
// }
// function createOption(){
	// for(let i=0; i<tagS.length; i++){
	// 	let newBtn = document.createElement('button');
	// 	newBtn.name = tagS[i];
	// 	// console.log(newBtn);
	// 	randIndex = Math.floor(Math.random()*tagS.length);
	// 	console.log(tagS[randIndex])
		// console.log(tagS[i])
		//if malaysia exist in the array then splice that index 
		// if(randIndex.indexOf)
		// if (){
			// for(let i=0; i<tagS.length; i++){
		// if(tagNoRepeat.indexOf(tagS[i]) == -1){
		// 	tagNoRepeat.push(tagS[i])
		// }else{
		// 	// tagName = tagS[randIndex];
		// 	tagName = tagNoRepeat[randIndex]
		// 	console.log(tagName)
	 //    	// tagS.splice(randIndex, 1);
		// 	tagOption.appendChild(newBtn);
		// }	

	// }
	


// function getTaggedPhotos(tagName){
// 	fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=LMS8c5l0uDdzMFu43CyJtM67dErLNf7b09jUT4vYpypPcfSrCl")
// 	.then(function(response){
// 		return response.json();
// 	}).then(function(result){
// 		result.response;
// 	})
// }
// getTaggedPhotos("puppy");