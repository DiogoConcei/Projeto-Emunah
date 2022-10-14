// Código para o aparecimento da tela de login

let button = document.getElementById("action");
let some = document.getElementById("esconde");
let cliente = document.getElementById("client");

some.classList.add("hide");

button.addEventListener("click", function () {
  some.classList.toggle("hide");
  cliente.classList.toggle("hide");
});

// Código relacionado a mudança de tela

function entrar() {
  let nome = document.getElementById("Name").value;
  let senha = document.getElementById("Senha").value;

  if (nome == "admin" && senha == "admin") {
    location.href = "./html/admin.html";
  } else {
    alert("Usuario incorreto");
    alert(`${senha}`);
    alert(`${nome}`);
  }
}
