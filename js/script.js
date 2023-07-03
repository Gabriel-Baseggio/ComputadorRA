document.getElementById("target1").addEventListener("targetFound", () => {
    document.getElementById("placaMae").style.display = "block";
})

document.getElementById("target1").addEventListener("targetLost", () => {
    document.getElementById("placaMae").style.display = "none";
})

let x = 0;
function virarCard(card) {
    if (x % 2 == 0) {
        card.style.transform = "rotateY(180deg)";
    } else {
        card.style.transform = "rotateY(0deg)";
    }
    x++;
}

document.getElementById("placaMae").addEventListener('click', () => {
    virarCard(document.getElementById("placaMaeInner"));
})

document.getElementById("memoriaRam").addEventListener('click', () => {
    virarCard(document.getElementById("memoriaRamInner"));
})
