var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var img = new Image();
var grd=ctx.createRadialGradient(255,255,200,100,100,50);
grd.addColorStop(0,"fef490");
grd.addColorStop(1,"white");

/*img.src = 'bg.png'
img.onload = function () {
	ctx.drawImage(img,0,0)
}*/

ctx.beginPath();
ctx.arc(255,255,205,0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.fillStyle = '#968614';
ctx.fill();

ctx.beginPath();
ctx.arc(255,255,200,0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.fillStyle = grd;
ctx.fill();

ctx.beginPath();
ctx.arc(225,275,20,0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.fillStyle = '#222';
ctx.fill();

ctx.beginPath();
ctx.arc(375,275,20,0, Math.PI * 2);
ctx.closePath();
ctx.fill();
ctx.fillStyle = '#222';
ctx.fill();

ctx.beginPath();
ctx.rotate(-20*Math.PI/180);
ctx.fillStyle = '#511803';
ctx.fillRect(45,205,175,75);

ctx.beginPath();
ctx.fillStyle = '#90401f';
ctx.fillRect(50,200,175,75);

ctx.beginPath();
ctx.rotate(30*Math.PI/180);
ctx.fillStyle = '#511803';
ctx.fillRect(345,105,175,75);

ctx.beginPath();
ctx.fillStyle = '#90401f';
ctx.fillRect(350,100,175,75);

ctx.beginPath();
ctx.moveTo(275,375);
ctx.bezierCurveTo(300,250,400,300,400,300);
ctx.stroke();
ctx.strokeStyle = '#222';

ctx.rotate(-10*Math.PI/180);
ctx.fillText('Oswald is having a bad day.',195,500);