var currentTheme = "main";

function updateImage(src) {
    let imgElement = document.querySelector("img");

    if (!imgElement) {
        imgElement = document.createElement("img");
        document.body.appendChild(imgElement);
    }
    
    imgElement.src = src;
}

function Blue(theme) {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
        updateImage("img/boy.jpg");
        currentTheme = "blue";
    }
}

function Pink(theme) {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Arial, Helvetica, sans-serif";
        updateImage("img/girl.jpg");
        currentTheme = "pink";
    }
}

function Brown(theme) {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#5a3825";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Arial, Helvetica, sans-serif";
        updateImage("img/elder.png");
        currentTheme = "brown";
    }
}


function resetTheme() {
    document.body.style.backgroundColor = "white";
    document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    currentTheme = "main";
}