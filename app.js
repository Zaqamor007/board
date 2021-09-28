const board = document.querySelector('#board')
const colors = ['#FF0000', '#FF1493', '#BDB76B', '#4B0082',
'#483D8B', '#000080', '#00BFFF']
const SQUARES_NUMBER = 340

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () => 
   setColor(square))

   square.addEventListener('mouseleave', () => 
   removeColor(square))

   board.append(square)
}

function setColor(e) {
   const color = getRandomColor()
   e.style.backgroundColor = color
   e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(e) {
   e.style.backgroundColor = '#1d1d1d'
   e.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}