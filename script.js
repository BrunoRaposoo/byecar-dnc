const card = document.querySelector('#main-card')
const icon1 = document.getElementById('icon1')
const icon2 = document.getElementById('icon2')

function Honda() {
  card.src = 'assets/card2.svg'
  icon1.setAttribute("onclick", "Scooter()")
  icon2.setAttribute("onclick", "Scooter()")
}

function Scooter() {
  card.src = 'assets/card.svg'
  icon1.setAttribute("onclick", 'Honda()')
  icon2.setAttribute("onclick", 'Honda()')
}