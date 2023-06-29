//Seu JavaScript de validação aqui

const camposDoFormulario = document.querySelectorAll('[required]')

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um email válido."
    }
}

function verificaCampo(campo) {
  const mensagemErro = campo.nextElementSibling;
  const validadorDeInput = campo.checkValidity();

  if (!validadorDeInput) {
    mensagemErro.textContent = mensagemDeErro(campo);
  } else {
    mensagemErro.textContent = '';
  }
}

const formulario = document.querySelector('[data-formulario]');

formulario.addEventListener("submit", (e) => {
   e.preventDefault();

   const listaRespostas = {
       "nome": e.target.elements["nome"].value,
       "email": e.target.elements["email"].value
  }

  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = "./abrir-conta-form-2.html";
})