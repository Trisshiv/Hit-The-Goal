var canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;

hole_y = 1000;
hole_x = 100;


ball_side = 3;
ball_ns = 3;

function load_img() {
	fabric.Image.fromURL("ball.png",
		function (Img) {
			player_object = Img;
			player_object.scaleToWidth(50);
			player_object.scaleToHeight(50);
			player_object.set({
				top: ball_y,
				left: ball_x
			});
			canvas.add(player_object);
		});
}

function load_g() {
	fabric.Image.fromURL("golf-h.png",
		function (Img) {
			g_object = Img;
			g_object.scaleToWidth(85);
			g_object.scaleToHeight(85);
			g_object.set({
				top: hole_x,
				left: hole_y
			});
			canvas.add(g_object);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '38') {
		up();
		console.log("up");
	}
	if (keyPressed == '40') {
		down();
		console.log("down");
	}
	if (keyPressed == '37') {
		left();
		console.log("left");
	}
	if (keyPressed == '39') {
		right();
		console.log("right");
	}
}

function up() {
	if (ball_y >= 0) {
		ball_y = ball_y - ball_ns;
		console.log("block image height = " + ball_ns);
		console.log("When up arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_g();
		load_img();
		
	}
}

function down() {
	if (ball_y <= 550) {
		ball_y = ball_y + ball_ns;
		console.log("block image height = " + ball_ns);
		console.log("When down arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_g();
		load_img();
		
	}
}

function left() {
	if (ball_x >= 0) {
		ball_x = ball_x - ball_side;
		console.log("block image width = " + ball_side);
		console.log("When left arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_g();
		load_img();
		
	}
}

function right() {
	if (ball_x <= 1250) {
		ball_x = ball_x + ball_side;
		console.log("block image width = " + ball_side);
		console.log("When right arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_g();
		load_img();
		
	}
}

if((ball_x==hole_x)&&(ball_y==hole_y)) {
	player_object.scaleToHeight(45);
	document.getElementById("hd3").innerHTML="You have hit the goal !!!";
	document.getElementById("myCanvas").style.borderColor-"red";
}