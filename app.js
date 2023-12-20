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




const arrows = {
    up: "icon-arrow-up.svg",
    down: "icon-arrow-down.svg"
}

const droppables= document.querySelectorAll('.droppable');
droppables.forEach(dropper =>{
    dropper.addEventListener('click', (e)=>{

        const Arrays= Array.from(droppables);

        const clickIndex = Arrays.indexOf(dropper)

        if(dropper.querySelector('.drop-downbtn').getAttribute('src') == arrows.up){
            closeDropdown(dropper)
        }else{
            openDropdown(dropper)

            Arrays.forEach(otherDropper => {
                if (Arrays.indexOf(otherDropper) !== clickIndex) {
                    closeDropdown(otherDropper)
                }
            }) 
        }  
    })
})


function closeDropdown(dropper) {
    dropper.querySelector('.dropdown').style.display ='none'
    dropper.querySelector('.drop-downbtn').setAttribute('src', arrows.down);
}

function openDropdown(dropper) {
    dropper.querySelector('.dropdown').style.display= 'block';
    dropper.querySelector('.drop-downbtn').setAttribute('src', arrows.up);
}

