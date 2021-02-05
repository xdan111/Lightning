console.clear();
var canvas = document.getElementById('can')
var c = canvas.getContext('2d');

let mouseX, mouseY;

canvas.height = innerHeight;
canvas.width = innerWidth;

/* addEventListener('resize', () => {
	canvas.height = innerHeight;
	canvas.width = innerWidth;
	init();
});
addEventListener('mousemove', (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;
	return mouseX
}); */

class Particle{
	constructor(x, y, radius, color, velocity){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = {
			x: (Math.random() - 0.5) * velocity,
			y: (Math.random() - 0.5) * velocity
		}
		var mouseRange = 200;


		this.draw = function(){
			c.save();
			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fillStyle = this.color;
			c.shadowColor = this.color;
			c.shadowBlur = 5;
			c.fill();
			c.closePath();
			c.restore();
		}
		this.update = function(){
			this.x += this.velocity.x;
			this.y += this.velocity.y;
			var defaultColor = color;
			const xDist = mouseX - this.x;
			const yDist = mouseY - this.y;


			if(this.x + this.radius > innerWidth || this.x - this.radius< 0){
				this.velocity.x = -this.velocity.x;
			}else if(this.y + this.radius > innerHeight || this.y -this.radius < 0){
				this.velocity.y = -this.velocity.y;
			}

			if(xDist < mouseRange && xDist > -mouseRange &&
				yDist < mouseRange && yDist > -mouseRange){
				this.color = '#fff';
				this.x += (4 * this.velocity.x);
				this.y += (4 * this.velocity.y);
			}else{
				this.color = defaultColor;
			}
			this.draw();
		}
	}
}

var particlesArray = [];
var colorsArray = ['#ffffff','#ffffff','#ffffff','#ffffff'];

function init(){
	particlesArray = [];
	for(let i = 0; i < 100; i++){
		const randRadius = Math.random() * 2;
		const randX = Math.random() * innerWidth - (2 * randRadius) + randRadius;
		const randY = Math.random() * innerHeight - (2 * randRadius) + randRadius;
		const randVelocity = Math.random() * 6;
		var randColorIndex = Math.floor(Math.random() * colorsArray.length);
		particlesArray.push(new Particle(randX, randY, randRadius, colorsArray[randColorIndex], randVelocity));
	}
	/* addEventListener('click', (e) => {
		for(let i = 0; i < 20; i++){
			const randRadius = Math.random() * 15;
			const randVelocity = Math.random() * 10;
			var randColorIndex = Math.floor(Math.random() * colorsArray.length);
			particlesArray.push(new Particle(e.x, e.y, randRadius, colorsArray[randColorIndex], randVelocity))
		}
	}); */
}
function animate(){
	c.clearRect(0,0,innerWidth, innerHeight);
	particlesArray.forEach(particle => {
		particle.update();
	})
	requestAnimationFrame(animate);
}
animate();
init();