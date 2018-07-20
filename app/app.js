import '../styles/main.css';
var sum = function(i,j){
	return i+j;
};

const updateSum = function(){	
	const a = parseInt(document.getElementById('num1').value);
	const b = parseInt(document.getElementById('num2').value); 	
	const sumTotal = sum(a,b);	
	console.log(sumTotal);
	document.getElementById('sumResult').innerHtml = sumTotal
}

function wiring(){
	console.log('wiring');
	document.getElementById('sum').addEventListener('click', updateSum);
}
wiring();