const options = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

const optionsReverse = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

function criptografar() {
    let mensagemUsuario = document.getElementById("textinho").value.split("");
    for(i in mensagemUsuario){
        if (mensagemUsuario[i] in options) {
            mensagemUsuario[i] = options[mensagemUsuario[i]];
        } else {
            alert(
              'Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.'
            );
          }
    }
    let mensagemCriptografada = mensagemUsuario.join("");
    document.getElementById("resultado").value = mensagemCriptografada
}

function descriptografar() {
    let mensagemCriptografada = document.getElementById("textinho").value.split("");
    for (let i = 0; i < mensagemCriptografada.length; i++) {
        for (let key in optionsReverse) {
            if (mensagemCriptografada.slice(i, i + key.length).join("") === key) {
                mensagemCriptografada.splice(i, key.length, optionsReverse[key]);
                break;
            } else {
                alert(
                  'Por favor, insira apenas letras minúsculas sem acentos ou caracteres especiais.'
                );
              }
        }
    }
    let mensagemDesencriptada = mensagemCriptografada.join("");
    document.getElementById("resultado").value = mensagemDesencriptada;
}

document.getElementById('copiando').addEventListener('click', () => {
    const textToCopy = document.getElementById("resultado").value;
    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          message.value = '';
          toggleVisibility(false);
        })
        .catch((err) => {
          console.error('Erro ao copiar o texto: ', err);
        });
    }
  });
