var canvas = new fabric.Canvas('myCanvas');

ball_x = 10;
ball_y = 10;

hole_y = 50;
hole_x = 50;


ball_side = 5;
ball_ns = 5;

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

function load_goal() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top: hole_y,
			left: hole_x
		})
		canvas.add(hole_object);
	});
	new_image();
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
		load_img();
	}
}

function down() {
	if (ball_y <= 460) {
		ball_y = ball_y + ball_ns;
		console.log("block image height = " + ball_ns);
		console.log("When down arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_img();
	}
}

function left() {
	if (ball_x >= 0) {
		ball_x = ball_x - ball_side;
		console.log("block image width = " + ball_side);
		console.log("When left arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_img();
	}
}

function right() {
	if (ball_x <= 850) {
		ball_x = ball_x + ball_side;
		console.log("block image width = " + ball_side);
		console.log("When right arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
		canvas.remove(player_object);
		load_img();
	}
}