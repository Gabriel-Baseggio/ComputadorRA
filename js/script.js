function virarCard(card) {
    if (!card.classList[1]) {
        card.style.transform = "rotateY(180deg)";
    } else {
        card.style.transform = "rotateY(0deg)";
    }
    card.classList.toggle("virado");
}

// PC Aberto
document.getElementById("pcAbertoTarget").addEventListener("targetFound", () => {
    document.getElementById("botao-aberto").style.display = "block";
})

document.getElementById("pcAbertoTarget").addEventListener("targetLost", () => {
    for (let i = 0; i < document.getElementsByClassName("flip-card").length; i++) {
        document.getElementsByClassName("flip-card")[i].style.display = "none";
    }
    document.getElementById("botao-aberto").style.display = "none";
})


for (let i = 0; i < document.getElementsByClassName("flip-card").length; i++) {
    for (let j = i * 2; j < i * 2 + 2; j++) {
        document.getElementsByClassName("botao-fechar")[j].addEventListener('click', () => {
            document.getElementsByClassName("flip-card")[i].style.display = "none";
            virarCard(document.getElementsByClassName("flip-card-inner")[i]);
        })
    }
}

// Placa Mãe
document.getElementById("placaMaeTarget").addEventListener("targetFound", () => {
    document.getElementById("placaMae").style.display = "block";
})

document.getElementById("placaMae").addEventListener('click', () => {
    virarCard(document.getElementById("placaMaeInner"));
})

document.getElementById("botao-placamae").addEventListener('click', () => {
    document.getElementById("placaMae").style.display = "block";
});

// Processador
document.getElementById("processadorTarget").addEventListener("targetFound", () => {
    document.getElementById("processador").style.display = "block";
})

document.getElementById("processador").addEventListener('click', () => {
    virarCard(document.getElementById("processadorInner"));
})

document.getElementById("botao-processador").addEventListener('click', () => {
    document.getElementById("processador").style.display = "block";
});

// Fonte
document.getElementById("fonteTarget").addEventListener("targetFound", () => {
    document.getElementById("fonte").style.display = "block";
})

document.getElementById("fonte").addEventListener('click', () => {
    virarCard(document.getElementById("fonteInner"));
})

document.getElementById("botao-fonte").addEventListener('click', () => {
    document.getElementById("fonte").style.display = "block";
});

// HD
document.getElementById("hdTarget").addEventListener("targetFound", () => {
    document.getElementById("hd").style.display = "block";
})

document.getElementById("hd").addEventListener('click', () => {
    virarCard(document.getElementById("hdInner"));
})

document.getElementById("botao-hd").addEventListener('click', () => {
    document.getElementById("hd").style.display = "block";
});

// Memória RAM
document.getElementById("memoriaRamTarget").addEventListener("targetFound", () => {
    document.getElementById("memoriaRam").style.display = "block";
})

document.getElementById("memoriaRam").addEventListener('click', () => {
    virarCard(document.getElementById("memoriaRamInner"));
})

document.getElementById("botao-memoriaram").addEventListener('click', () => {
    document.getElementById("memoriaRam").style.display = "block";
});

// Placa de Vídeo
document.getElementById("placaVideoTarget").addEventListener("targetFound", () => {
    document.getElementById("placaVideo").style.display = "block";
})

document.getElementById("placaVideo").addEventListener('click', () => {
    virarCard(document.getElementById("placaVideoInner"));
})

document.getElementById("botao-placavideo").addEventListener('click', () => {
    document.getElementById("placaVideo").style.display = "block";
});



function mostrarPcAberto() {
    document.getElementById("pcAbertoTarget").addEventListener("targetFound", () => {
        document.getElementById("botao-aberto").style.display = "block";
    })

    document.getElementById("pcAbertoTarget").addEventListener("targetFound", () => {
        document.getElementById("botao-aberto").style.display = "block";
    })

}