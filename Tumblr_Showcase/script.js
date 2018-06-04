const form = document.getElementById('query-form');
const query = document.getElementById('query');
const list = document.getElementById('list-data');

form.onsubmit = function(event){
	event.preventDefault();

	const queryText = query.value;
	console.log(queryText);

	getTaggedPhotos(queryText);
	query.value="";
}

function getTaggedPhotos(tagName){
	fetch("https://api.tumblr.com/v2/tagged?tag=" + tagName + "&api_key=LMS8c5l0uDdzMFu43CyJtM67dErLNf7b09jUT4vYpypPcfSrCl")
	.then(function(response){

		if(!response.ok){
			window.alert('Uh-oh! Something went wrong, please contact at twinsakura@gmail.com')
			return;
		}
		return response.json();
	}).then(function(result){
		if(!result){
			return;
		}
		// clear list
		list.innerHTML="";

		const items = result.response;

		for(let i=0; i < items.length; i++ ){
			const item = items[i]
			if(item.photos !=undefined){
				const altSizes = item.photos[0].alt_sizes
				const imgSrc = altSizes[altSizes.length-3].url;

				const img = document.createElement('img');
				img.src = imgSrc;

				const li = document.createElement('li');
				li.appendChild(img);
				// li.innerHTML = imgSrc;

				list.appendChild(li);
			}
		}
		
	})
}

// 	getTaggedPhotos('dogs')
// getTaggedPhotos('food');

setTimeout(function(){
},3000)