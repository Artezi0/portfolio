let links = Array.from(document.querySelectorAll("button, a"))
let images = Array.from(document.querySelectorAll("img"))
let submenuBtn = document.getElementById('submenu-btn')
let submenu = document.getElementById('submenu')
let cursor = document.querySelector(".cursor")

function showMenu() {
    submenu.classList.toggle('active')

    if (submenu.classList.contains('active')) {
        submenuBtn.style.backgroundColor = 'black'
        submenuBtn.style.color = 'white'
    } else {
        submenuBtn.style.backgroundColor = 'white'
        submenuBtn.style.color = 'black'
    }
}

document.addEventListener("mousemove", moveCursor)
function moveCursor(e) {
    let x = e.clientX
    let y = e.clientY

   cursor.style.left = `${x}px`
   cursor.style.top = `${y}px`
}

links.forEach (link => {
    link.addEventListener('mousemove', ()=>{
        cursor.classList.add('state-1')
    })
    link.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('state-1')
    })
})

images.forEach (image => {
    image.addEventListener('mousemove', ()=>{
        cursor.classList.add('state-2')
    })
    image.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('state-2')
    })
})

luxy.init()
  
