// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  //Validar que el campo no esté vacío
  if (amigo === "") {
    alert("Debe ingresar un nombre");
    return;
  }
  amigos.push(amigo);

  // Limpiar el input
  document.getElementById("amigo").value = "";

  // Mostramos los nombres de los amigos en el HTML
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  });

  console.log(amigos);
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  //Validar que haya al menos un amigo
  if (amigos.length === 0) {
    alert("Debe ingresar al menos un amigo");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  listaAmigos.innerHTML = "";
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}
