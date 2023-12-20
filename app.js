const openMenu= $('.menu-btn');
const closeMenu= $('.close-btn');
const menu= $('.ul');
const nav= $('nav')
const shadow= $('.shadow')

openMenu.on('click',()=>{
    menu.show()
    nav.addClass('nav-shadow')
    // shadow.show();


    openMenu.hide();
    closeMenu.show();
})
closeMenu.on('click', () => {
    menu.hide();
    nav.removeClass('nav-shadow');
    closeMenu.hide();
    openMenu.show();
    // shadow.hide();
});

const buttons={
    up:"icon-arrow-up.svg",
    down: "icon-arrow-down.svg"
}

const droppables = document.querySelectorAll('.droppable')
droppables.forEach(dropper=>{
    dropper.addEventListener('click',()=>{

        const arrays= Array.from(droppables)
        const clickIndex= arrays.indexOf(dropper)
        
        if(dropper.querySelector('.drop-downbtn').getAttribute('src')== buttons.up){
            closeDropper(dropper);
        }else{
            openDropper(dropper);


            droppables.forEach(otherDropper => {
                if (arrays.indexOf(otherDropper) !== clickIndex) {
                    closeDropper(otherDropper)
                }
            })  
        }
    })


})
function openDropper(dropper){
    dropper.querySelector('.dropdown').style.display ='block'
    dropper.querySelector('.drop-downbtn').setAttribute("src", buttons.up)
}
function closeDropper(dropper){
    dropper.querySelector('.dropdown').style.display='none';
    dropper.querySelector('.drop-downbtn').setAttribute("src",buttons.down);
   
}
