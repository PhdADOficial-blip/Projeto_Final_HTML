function obterCookie(nome) {
    let nomeProcurado = nome + "=";
    let cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nomeProcurado) == 0) return c.substring(nomeProcurado.length, c.length);
    }
    return "";
}

// Função para fechar o modal na tela quando clicar no botão ou no X
function fecharModalGame() {
    document.getElementById("meuModalCookie").style.display = "none";
}

window.onload = function() {
    let visitou = obterCookie("usuario_ja_visitou");

    if (visitou === "") {
        // Se NÃO tem o cookie, exibe o modal estilizado mudando o display para flex
        document.getElementById("meuModalCookie").style.display = "flex";
        
        // Cria o cookie para não incomodar o usuário na próxima vez
        let data = new Date();
        data.setTime(data.getTime() + (7 * 24 * 60 * 60 * 1000));
        document.cookie = "usuario_ja_visitou=sim; expires=" + data.toUTCString() + "; path=/; SameSite=Lax";
    } else {
        console.log("Usuário recorrente. O cookie evitou o modal.");
    }
};

