const containerContador = document.getElementById("container-contador")

const countDown = new Date("Jan 12, 2024 15:37:25").getTime()

var interval = setInterval(function () {
  const now = new Date().getTime()

  const distance = countDown - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) // calcula o restante
  // da distancia e depois divide pelo resultado de 1000 milesimos x 60 seg x 60 minutos
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((distance % (1000 * 60)) / 1000)

  containerContador.innerHTML = `<p class="contador" id="contador-dias">${days}<span class="contador__tempo">DIAS</span></p>
  <p class="contador" id="contador-horas">${hours}<span class="contador__tempo">HORAS</span></p>
  <p class="contador" id="contador-minutos">${minutes}<span class="contador__tempo">MINUTOS</span></p>
  <p class="contador" id="contador-segundos">${seconds}<span class="contador__tempo">SEGUNDOS</span></p>`
}, 1000)