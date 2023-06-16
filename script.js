function validarCPF () {
  const cpfFormatado = document.getElementById("cpf").value
  
  const cpf = limparFormatacao(cpfFormatado)
}

function limparFormatacao (cpf = "") {
   cpf = cpf.replace(/\d/g, '')

   return cpf
}