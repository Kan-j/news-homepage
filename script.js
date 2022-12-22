const menuIcon = document.querySelector('.menu')


const overlay = document.querySelector('.overlay-close')
const mobile_menu = document.querySelector('.mobile_nav')
const closeButton = document.querySelector('.close-button')



console.log(overlay);



menuIcon.addEventListener('click', ()=>{
    document.querySelector('.overlay').style.display = 'block'
    overlay.style.display = 'block'
    mobile_menu.style.display ='block'
})

overlay.addEventListener('click', ()=>{
    document.querySelector('.overlay').style.display = 'none'
    overlay.style.display = 'none'
    mobile_menu.style.display ='none'  
})

closeButton.addEventListener('click', ()=>{
    overlay.style.display = 'none'
    mobile_menu.style.display ='none'  
})
