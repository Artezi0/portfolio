let links = Array.from(document.querySelectorAll("button, a"))
let items = document.querySelectorAll (".gallery__list, li")
let images = Array.from(document.querySelectorAll("img"))
let submenuBtn = document.getElementById('submenu-btn')
let submenu = document.getElementById('submenu')
let cursor = document.querySelector(".cursor")

function showMenu() {
    submenu.classList.toggle('active')

    if (submenu.classList.contains('active')) {
        submenu.style.transition = "all 0.5s";
        submenuBtn.style.backgroundColor = 'black'
        submenuBtn.style.color = 'white'
    } else {
        submenu.style.transition = "all 0.5s";
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

items.forEach(item => {

    const parent = item.parentElement, photo = item.querySelector('.photo');
    
    item.addEventListener('mousemove', function(event){
        parent.classList.add('active');
        photo.classList.add('active');

        const cursorX = event.pageX,
              cursorY = event.pageY;

        const itemLeft =  item.getBoundingClientRect().left,
              itemTop = item.getBoundingClientRect().top;

        const photoPositionX = cursorX - itemLeft;
        const yphotoPositionY = cursorY - itemTop - window.scrollY;

        if(photo.offsetHeight + 40 > event.clientY){
            photo.style.top = `${yphotoPositionY + 20}px`;
        } else { 
            photo.style.top = `${yphotoPositionY - photo.offsetHeight - 20}px`;
        }

        photo.style.left = `${photoPositionX + 20}px`;
    });

    item.addEventListener('mouseleave', ()=>{
        parent.classList.remove('active');
        photo.classList.remove('active');
    });
});


luxy.init()
  

