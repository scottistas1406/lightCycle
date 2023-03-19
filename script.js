let canvas = document.getElementById("theGrid");
let ctx = canvas.getContext("2d")
let square = 80;
let bikeX = 0;
let bikeY = 0;
//console.log(`hello`);
let lightCycle = [
    { x: 5, y: 0, velocity: 10, size: 5 },
    { x: 10, y: 0, velocity: 10, size: 5 },
    { x: 15, y: 0, velocity: 10, size: 5 },
    { x: 20, y: 0, velocity: 10, size: 5 }

];//put lightcycle in array...??
let direction = "down";
//console.log(lightCycle.length);
//console.log(lightCycle);


//this function will draw the bike in its position on the canvas
function drawBike(x, y, length) {
    //  console.log('function draw bike')
    ctx.fillStyle = "lightblue";
    for (var i = 0; i < lightCycle.length; i++) {
        let arrayPosition = lightCycle[i];
        ctx.fillStyle = "blue"; //set option to select blue or red
        ctx.fillRect(arrayPosition.x, arrayPosition.y, arrayPosition.size, arrayPosition.size);
        console.log(`array position${arrayPosition.size}`);
        //ctx.fillRect(x - i * 5, y, 10, 10);
        // console.log(i);
        //  console.log(length);
    }
}
//drawBike(bikeX, bikeY, 50)

//function will run the game call all functions from here.
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBike();
    changeDirection();
    drawBike(lightCycle.x, lightCycle.y, lightCycle.length);

    console.log('function update game');

}

function updateBike() {


    for (let i = 0; i < lightCycle.length; i++) {
        lightCycle[i].x += lightCycle[i].velocity
        lightCycle[i].y += lightCycle[i].velocity;
    }





}

function changeDirection(direction) {
    console.log(`function changeDirection, direction is ${direction}`);
    // console.log(`steer${steer}`);
    //let tail = lightCycle.pop //remove back of bike
    let front = { x: lightCycle[0].x, y: lightCycle[0].y }
    console.log(front);
    console.log

    switch (direction) {
        case "left":
            front.x -= 1;
            break;
        case "right":
            front.x += 1;
            break;
        case "down":
            front.y += 1;
            break;
        case "up":
            front.y -= 1;
            break;
    }
    lightCycle.unshift(front); //add to the front of the lightCycle array
    for (let i = 1; i < lightCycle.length; i++) {
        lightCycle[i].x = lightCycle[i - 1].x;
        lightCycle[i].y = lightCycle[i - 1].y;
        console.log(`loop working`)
    }
    lightCycle.push

    //     if (bikeX < 0 || bikeX > canvas.width || bikeY < 0 || bikeY > canvas.height)
    //         //game over player1
    //         console.log(`game over`);
}


//Events to WATCH OUT FOR
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        // Code to be executed when the up arrow key is pressed
        // console.log("Up arrow key pressed!");
        changeDirection('up');
    }
    if (event.key === "ArrowDown") {
        // Code to be executed when the up arrow key is pressed
        //console.log("down arrow key pressed!");
        changeDirection('down');
    }

    if (event.key === "ArrowRight") {
        // Code to be executed when the up arrow key is pressed
        //console.log("right arrow key pressed!");
        changeDirection('right');
    }

    if (event.key === "ArrowLeft") {
        // Code to be executed when the up arrow key is pressed
        //console.log("left arrow key pressed!");
        changeDirection('left');
    }

});
setInterval(updateGame, 1000);

