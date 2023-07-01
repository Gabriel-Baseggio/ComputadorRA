let x = 0;
document.getElementsByClassName("flip-card")[0].addEventListener('click', () => {
    let flipCardInner = document.getElementsByClassName("flip-card-inner")[0];
    if (x % 2 == 0) {
        flipCardInner.style.transform = "rotateY(180deg)";
    } else {
        flipCardInner.style.transform = "rotateY(0deg)";
    }
    x++;
})