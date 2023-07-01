document.getElementById("target1").addEventListener("targetFound", () => {
    document.getElementsByClassName("placaMaeCard")[0].style.display = "block";
})

document.getElementById("target1").addEventListener("targetLost", () => {
    document.getElementsByClassName("placaMaeCard")[0].style.display = "none";
})

function nMostrar() {
    document.getElementsByClassName("placaMaeCard")[0].style.display = "none";
}

function mostrar() {
    document.getElementsByClassName("placaMaeCard")[0].style.display = "block";
}

let x = 0;
document.getElementsByClassName("placaMaeCard")[0].addEventListener('click', () => {
    let placaMaeCard = document.getElementsByClassName("placaMaeCard")[0];
    if (x % 2 == 0) {
        placaMaeCard.style.transform = "rotateY(180deg)";
    } else {
        placaMaeCard.style.transform = "rotateY(0deg)";
    }
    x++;
})
