import { validaCPF } from "./ValidarCPF.js"

$(document).ready(function () {
  $('.inputCPF').inputmask('999.999.999-99')
});


const Formulario2 = document.getElementById("validarFormulario2")
Formulario2.addEventListener("click", validarFormulario2)

function validarFormulario2(e) {
  e.preventDefault()

  const cpfFormatado = document.getElementById('inputRegisterCPF').value
  validaCPF(cpfFormatado)
  
  const cpfAprovado = validaCPF(cpfFormatado)



  if (cpfAprovado) {
    alert('CPF válido!')
  } else {
    mostraResultado('CPF invalido!!', "Register")
  }
}


const Formulario1 = document.getElementById("validarFormulario1")
Formulario1.addEventListener("click", validarFormulario1)

function validarFormulario1(e) {
  e.preventDefault()

  const cpfFormatado = document.getElementById('inputLogaCPF').value
  validaCPF(cpfFormatado)
  
  const cpfAprovado = validaCPF(cpfFormatado)


  if (cpfAprovado) {
    alert('CPF válido!')
  } else {
    mostraResultado('CPF invalido!!', "Loga")
  }
}



function mostraResultado(text, formulario) {
  const span = document.getElementById(`input${formulario}CPF`)
  const styleTag = document.createElement('style')
  
  span.value = ""
  span.placeholder = text

  styleTag.textContent = `
  #input${formulario}CPF::placeholder {
    color: red;
    font-style: italic;
 }
` 

  document.head.appendChild(styleTag)
}
