let submit = document.querySelector('#submit_btn')
submit.onclick = function() {

	let decimal = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
	let roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
	let romanized = '';
	let input = document.querySelector('#user-input')
	let output = document.querySelector('#output')
	let num = input.value;

	if(input.value == ''){
		window.alert('Please insert a valid number.')
	}
	else if(input.value == 0){
		window.alert('Please insert a valid number.')
	} 
	else {
		console.log('ok')
	}


	for (let i = 0; i < decimal.length; i++) {
		while (decimal[i] <= num) {
		romanized += roman[i];
		num -= decimal[i];
		}
	}
		output.innerHTML = romanized;
		input.value = '';
}