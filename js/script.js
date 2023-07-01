document.getElementById("target1").addEventListener("targetFound", () => {
    document.getElementById("placaMaeCard").style.display = "block";
})

document.getElementById("target1").addEventListener("targetLost", () => {
    document.getElementById("placaMaeCard").style.display = "none";
})

// document.getElementById("placaMaeCard")