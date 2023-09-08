const input = document.querySelector('input')
const img = document.querySelector('img')
const imageContainer = document.querySelector('.image-container')
const form = document.querySelector('form')

function searchPlayerProfilePic(e) {
    e.preventDefault()
    const playerId = input.value
    const img = document.createElement('img')
    img.src = `https://cdn.nba.com/headshots/nba/latest/1040x760/${playerId}.png`

    imageContainer.appendChild(img)
}

form.addEventListener('submit', searchPlayerProfilePic)