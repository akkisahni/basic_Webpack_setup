console.log("inside app.js");

var sum = function(i,j){
	console.log(i,j);
	return i+j;
};

const updateSum = function(){
	console.log("inside update sum")
	const sumTotal = sum(parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value));
	console.log(sumTotal);
	document.getElementById('sumResult').innerHtml = sumTotal
}
function wiring(){
	console.log('wiring');
	document.getElementById('sum').addEventListener('click', updateSum);
}
wiring();