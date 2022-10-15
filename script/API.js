const LimparForm = (endereco) => {
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("numero").value = "";
};

const preencherForm = (endereco) => {
  document.getElementById("logradouro").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
  document.getElementById("numero").value = endereco.complemento;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCEP = async () => {
  LimparForm();
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();

    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("logradouro").value = "CEP NÃO ENCONTRADO!!";
    } else {
      preencherForm(endereco);
    }
  } else {
    document.getElementById("logradouro").value = "CEP INCORRETO!!";
  }
};

let cep = document
  .getElementById("cep")
  .addEventListener("focusout", pesquisarCEP);
