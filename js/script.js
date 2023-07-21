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
    noneEmTudo();
    document.getElementById("botao-aberto").style.display = "flex";
})

document.getElementById("pcAbertoIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo();
    document.getElementById("botao-aberto").style.display = "flex";
})

// Fechar PC Aberto
document.getElementById("botoes-fechar").addEventListener("click", () => {
    noneEmTudo();
    document.getElementById("botao-aberto").style.display = "none";
})

// Botões de remover
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
    noneEmTudo()
    document.getElementById("placaMae").style.display = "block";
})

document.getElementById("placaMaeIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("placaMae").style.display = "block";
})

document.getElementById("placaMae").addEventListener('click', () => {
    virarCard(document.getElementById("placaMaeInner"));
})

document.getElementById("botao-placamae").addEventListener('click', () => {
    noneEmTudo()
    document.getElementById("placaMae").style.display = "block";
});

// Processador
document.getElementById("processadorTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("processador").style.display = "block";
})

document.getElementById("processadorIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("processador").style.display = "block";
})

document.getElementById("processador").addEventListener('click', () => {
    virarCard(document.getElementById("processadorInner"));
})

document.getElementById("botao-processador").addEventListener('click', () => {
    noneEmTudo()
    document.getElementById("processador").style.display = "block";
});

// Fonte
document.getElementById("fonteTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("fonte").style.display = "block";
})

document.getElementById("fonteIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo();
    console.log("achou a fonte");
    document.getElementById("fonte").style.display = "block";
})

document.getElementById("fonte").addEventListener('click', () => {
    virarCard(document.getElementById("fonteInner"));
})

document.getElementById("botao-fonte").addEventListener('click', () => {
    noneEmTudo()
    document.getElementById("fonte").style.display = "block";
});

// HD
document.getElementById("hdTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("hd").style.display = "block";
})

document.getElementById("hdIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo();
    console.log("achou o HD");
    document.getElementById("hd").style.display = "block";
})

document.getElementById("hd").addEventListener('click', () => {
    virarCard(document.getElementById("hdInner"));
})

document.getElementById("botao-hd").addEventListener('click', () => {
    noneEmTudo()
    document.getElementById("hd").style.display = "block";
});

// Memória RAM
document.getElementById("memoriaRamTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("memoriaRam").style.display = "block";
})

document.getElementById("memoriaRamIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("memoriaRam").style.display = "block";
})

document.getElementById("memoriaRam").addEventListener('click', () => {
    virarCard(document.getElementById("memoriaRamInner"));
})

document.getElementById("botao-memoriaram").addEventListener('click', () => {
    noneEmTudo()
    document.getElementById("memoriaRam").style.display = "block";
});

// Placa de Vídeo
document.getElementById("placaVideoTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("placaVideo").style.display = "block";
})

document.getElementById("placaVideoIconeTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("placaVideo").style.display = "block";
})

document.getElementById("placaVideo").addEventListener('click', () => {
    virarCard(document.getElementById("placaVideoInner"));
})

document.getElementById("botao-placavideo").addEventListener('click', () => {
    noneEmTudo()
    document.getElementById("placaVideo").style.display = "block";
});

// PC Fechado
document.getElementById("pcFechadoTarget").addEventListener("targetFound", () => {
    noneEmTudo()
    document.getElementById("pcFechado").style.display = "block";
})

document.getElementById("pcFechado").addEventListener('click', () => {
    virarCard(document.getElementById("pcFechadoInner"));
})

// Função para dar display none em todos os cards
function noneEmTudo() {
    for (let i = 0; i < document.getElementsByClassName("flip-card").length; i++) {
        document.getElementsByClassName("flip-card")[i].style.display = "none";
    }
}