
var button = document.querySelector('.button');
button.onclick = function() {
	var number = document.getElementById('inputNum').value;
	var sum = ' ';
	var sharp = '#';
	for (var i = 0; i < number; i++) {
		sum += sharp;
		var container = document.body.children[0];	
		var block = container.children[2];
		var ul = block.children[0];
		var li = document.createElement('li');
		ul.appendChild(li);
		li.insertAdjacentHTML("afterBegin", sum);
		console.log (sum);
	}
}
