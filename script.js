let openBtn = document.querySelector('.button-area');
let modalContainer = document.querySelector('.modal-container');
let closeBtn = document.querySelector('.close-btn');



openBtn.addEventListener('click', ()=>{
    modalContainer.style.display = "block"
});

closeBtn.addEventListener('click', ()=>{
    modalContainer.style.display ="none"
});

window.addEventListener('click', (e)=>{
    if(e.target ===modalContainer){
        modalContainer.style.display ="none"
    }
});