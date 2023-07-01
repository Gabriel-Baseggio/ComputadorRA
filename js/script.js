document.getElementById("target1").addEventListener("targetFound", () => {
    document.getElementsByClassName("placaMaeCard")[0].style.display = "block";
})

document.getElementById("target1").addEventListener("targetLost", () => {
    document.getElementsByClassName("placaMaeCard")[0].style.display = "none";
})

// document.getElementById("placaMaeCard")