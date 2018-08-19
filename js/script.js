const button = document.querySelector('.button');
button.onclick = () => {
	let number = document.getElementById('inputNum').value;
	let sum = ' ';
	const sharp = '#';
	for (let i = 0; i < number; i++) {
		sum += sharp;
		const container = document.body.children[0];	
		const block = container.children[2];
		const ul = block.children[0];
		let li = document.createElement('li');
		ul.appendChild(li);
		li.insertAdjacentHTML("afterBegin", sum);
		console.log (sum);
	}
}
