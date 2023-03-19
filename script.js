let canvas = document.getElementById("theGrid");
let ctx = canvas.getContext("2d")
let teamColor
let square = 80;
let bikeX = 0;
let bikeY = 0;
let direction = "right";
let gameOver = 0;



//console.log(gameOver);
//runGame();
function startGame() {
    let selectColorElement = document.getElementById("cycleColor")
    let selectColor = selectColorElement.value;
    teamColor = selectColor;
    console.log(teamColor)
    let gameInterval = setInterval(updateGame, 100);
}
//console.log(`hello`);
let lightCycle = [
    //front of cycle
    { x: 5, y: 0, velocity: 5, size: 15 }, //x is the position on the x and y axis, velocity controls the number of spaces the light cycle will travel...pixels? the smaller the number the slower it will appear to move
    //middle
    { x: 10, y: 0, velocity: 5, size: 15, },
    //back middle
    { x: 15, y: 0, velocity: 5, size: 15, },
    { x: 20, y: 0, velocity: 5, size: 15, },
    { x: 25, y: 0, velocity: 5, size: 15, }



];//put lightcycle in array...??






function drawBike() {


    for (var i = 0; i < lightCycle.length; i++) {
        let arrayPosition = lightCycle[i];
        ctx.fillStyle = teamColor; //set option to select blue or red
        ctx.fillRect(arrayPosition.x, arrayPosition.y, arrayPosition.size, arrayPosition.size);


        //  console.log(`array position${arrayPosition.x}`);

    }
}


//function will run the game call all functions from here.
function updateGame() {
    if (gameOver === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        updateBike(direction);
        drawBike();
        checkOOB();
        //console.log(gameOver);
        // runGame();
    }
    else {
        stopGame()

    }
}

function updateBike(axis) {
    console.log(`axis ${axis}`)
    console.log(lightCycle.length);
    for (let i = lightCycle.length - 1; i > 0; i--) { //set to last position of array
        console.log(`madeit ${lightCycle.length}`)
        lightCycle[i].x = lightCycle[i - 1].x;
        lightCycle[i].y = lightCycle[i - 1].y;
    }
    switch (axis) {
        case "right":
            lightCycle[0].x += lightCycle[0].velocity
            break;
        case "left":
            lightCycle[0].x += -lightCycle[0].velocity
            break;
        case "up":
            lightCycle[0].y = lightCycle[0].y - lightCycle[0].velocity
            break;
        case "down":
            lightCycle[0].y += lightCycle[0].velocity
            break;

    }

}
function checkOOB() {
    if (lightCycle[0].x < 0 || lightCycle[0].x >= canvas.width || lightCycle[0].y < 0 || lightCycle[0].y > canvas.height) {
        alert("Game Over");
        gameOver = 1;
        clearInterval(gameInterval);

    }
    else {
        gameOver = 0;
    }
}


function changeDirection(axisDirection) {
    switch (axisDirection) {
        case "left":
            console.log(`direction${direction}`)
            // front.x -= 1;
            direction = "left";
            break;
        case "right":
            // front.x += 1;
            console.log(`direction${direction}`)
            direction = "right";
            break;
        case "down":
            //  front.y += 1;

            direction = "down";
            break;
        case "up":
            //  front.y -= 1;

            direction = "up";
            break;
    }

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
//function runGame() {
// if (gameOver === 0) {
//setInterval(updateGame, gameInterval);
  //  }

//}
