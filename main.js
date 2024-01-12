const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

let formValido = false;

function validaNumero (a, b) {
  let valorCampoA = parseInt(a);
  let valorCampoB = parseInt(b);

  return valorCampoB > valorCampoA;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  formValido = validaNumero(campoA.value, campoB.value);
  if (formValido) {
    alert("Formulário Válido: B > A")
  } else {
    alert("Formulário Inválido: B <= A")
  }
})
