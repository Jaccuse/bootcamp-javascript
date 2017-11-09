function generateRandomInteger(minimum, maximum) {
    return(Math.floor(Math.random() * (maximum - minimum + 1) + minimum));
}

function randomColor() {
    let red = generateRandomInteger(0, 255);
    let green = generateRandomInteger(0, 255);
    let blue = generateRandomInteger(0, 255);
    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";

    return(rgb);
}

onmousedown=$('#steve').click(
    function() {
        document.getElementById.backgroundColor.style.left = generateRandomInteger(0, 800) + "px";
    }
);

onmousedown=$('#paragraph').click(
    function() {
        document.getElementById.style.backgroundColor = randomColor();
    }
);