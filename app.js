let drawingCanvas = document.getElementById('canvas');
let context = drawingCanvas.getContext('2d');
let d1xEl = document.querySelector('.d1x')
let d1yEl = document.querySelector('.d1y')
let d2xEl = document.querySelector('.d2x')
let d2yEl = document.querySelector('.d2y')
let d3xEl = document.querySelector('.d3x')
let d3yEl = document.querySelector('.d3y')
d1xEl.value = 300;
d1yEl.value = 100;
d2xEl.value = 100;
d2yEl.value = 500;
d3xEl.value = 500;
d3yEl.value = 500;


let zeroDotXEl = document.querySelector('.zerDotX')
let zerDotYEl = document.querySelector('.zerDotY')
let dotsAmountEl = document.querySelector('.dotsAmount')
let readyEl = document.querySelector('.ready')
let clearEl = document.querySelector('.clear')
let d1x, d1y, d2x, d2y, d3x, d3y, zeroDotX, zeroDotY, dnx, dny, itterations
// d1x = 234
// d1y = 324
// d2x = 425
// d2y = 111
// d3x = 334
// d3y = 467
// zeroDotX = 0
// zeroDotY = 0
// dnx = zeroDotX
// dny = zeroDotX
// itterations = 2000

readyEl.addEventListener('click', () => {
	itterations = dotsAmountEl.value
	Canvas()
	console.log(itterations);
})
clearEl.addEventListener('click', () => {
	context.clearRect(0, 0, 600, 600)
})
Canvas()

let buttonShowEl = document.querySelector('.buttonShow')
buttonShowEl.addEventListener('click', () => {
	d1x = parseInt(d1xEl.value);
	d1y = parseInt(d1yEl.value)
	d2x = parseInt(d2xEl.value)
	d2y = parseInt(d2yEl.value)
	d3x = parseInt(d3xEl.value)
	d3y = parseInt(d3yEl.value)
	zeroDotX = parseInt(zeroDotXEl.value)
	zeroDotY = parseInt(zerDotYEl.value)
	dnx = zeroDotX
	dny = zeroDotY
	createStaticDot(context, d1x, d1y)
	createStaticDot(context, d2x, d2y)
	createStaticDot(context, d3x, d3y)
	createZeroDot(context, zeroDotX, zeroDotY)
})

function Canvas() {
	context.fillStyle = "grey";
	context.fillRect(0, 0, 600, 600)
	createStaticDot(context, d1x, d1y)
	createStaticDot(context, d2x, d2y)
	createStaticDot(context, d3x, d3y)
	createZeroDot(context, zeroDotX, zeroDotY)

	drawDots(itterations, 5)
	// for (let i = 1; i <= itterations; i++) {
		
	// }
}

function drawDots(iter, interval) {
	let result = throwDice(1, 6)

	if (1 <= result && result <= 2) {
		createDot(context, d1x, d1y)
	}
	if (3 <= result && result <= 4) {
		createDot(context, d2x, d2y)
	}
	if (5 <= result && result <= 6) {
		createDot(context, d3x, d3y)
	}
	if (1 <= result && result <= 2) {
		dnx = (d1x + dnx) / 2
		dny = (d1y + dny) / 2
	}
	if (3 <= result && result <= 4) {
		dnx = (d2x + dnx) / 2
		dny = (d2y + dny) / 2
	}
	if (5 <= result && result <= 6) {
		dnx = (d3x + dnx) / 2
		dny = (d3y + dny) / 2
	}

	if(iter > 0) {
		setTimeout(() => drawDots(iter-1, interval), interval);
	}
}

function throwDice(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function createDot(ctx, dx, dy) {
	ctx.strokeStyle = "black";
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc((dx + dnx) / 2, (dy + dny) / 2, 0.5, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

function createStaticDot(ctx, dx, dy) {
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(dx, dy, 2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}

function createZeroDot(ctx, dx, dy) {
	ctx.strokeStyle = "#000";
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(dx, dy, 2, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
}