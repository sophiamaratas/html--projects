var currentTheme = "main";

function updateImage(src, text, font, fontSize, top, left) {
  let imgElement = document.getElementById("themeImage");
  imgElement.src = src;
  imgElement.style.display = "block";
  
  // text element
  let textElement = document.createElement("p");
  textElement.textContent = text;
  textElement.style.fontFamily = font;
  textElement.style.fontSize = fontSize;
  textElement.style.position = "absolute";
  textElement.style.top = top + "px";
  textElement.style.left = left + "px";

  document.body.appendChild(textElement);
}

function Blue(theme) {
  if (currentTheme === "blue") {
    resetTheme();
  } else {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Rowdies";
    updateImage("img/boy.jpg", "Hi, I'm Jay", "Rowdies", "50px", 320, 650); 
    currentTheme = "blue";
  }
}

function Pink(theme) {
  if (currentTheme === "pink") {
    resetTheme();
  } else {
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "black";
    document.body.style.fontFamily = "'Comic Sans MS', cursive";
    updateImage("img/girl.jpg", "Hi, I'm Jennie", "Pacifico", "50px", 300, 620); 
    currentTheme = "pink";
  }
}

function Brown(theme) {
    if (currentTheme === "brown") {
    resetTheme();
    } else {
    document.body.style.backgroundColor = "#5a3825";
    document.body.style.color = "white";
    document.body.style.fontFamily = "'Times New Roman', Times, serif";
    updateImage("img/elder.png", "I'm Old", "Times New Roman", "150px", 130, 550);
    currentTheme = "brown";
    }
  }

  function resetTheme() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "default";
    document.getElementById("themeImage").style.display = "none";
    document.body.removeChild(document.querySelector("p"));
    currentTheme = "main";
  }