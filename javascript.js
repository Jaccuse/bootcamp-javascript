/*
i was using this but i'm not now ¯\_(ツ)_/¯
function randomColor() {
    let red = generateRandomInteger(0, 255);
    let green = generateRandomInteger(0, 255);
    let blue = generateRandomInteger(0, 255);
    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

    return(rgb);
}
*/

function generateRandomInteger(minimum, maximum) {
    return(Math.floor(Math.random() * (maximum - minimum + 1) + minimum));
}



function randomXAxis() {
    return generateRandomInteger(0, 800) + "px";
}

function randomYAxis() {
    return generateRandomInteger(100, 400) + "px";
}

function randomPosition() {
    document.getElementById("steve").style.position = "absolute";
    let xAxis = document.getElementById("steve").style.left = randomXAxis();
    let yAxis = document.getElementById("steve").style.top = randomYAxis();
    console.log("Image was moved to x" + xAxis + " y" + yAxis);
}