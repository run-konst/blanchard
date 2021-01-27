const buttons = document.querySelectorAll('.alt-nav__btn');
const dropdowns = document.querySelectorAll('.alt-nav__painters');


let clickButton = function(button, dropdown) {
    button.addEventListener('click', function() {
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i] !== button) {
                buttons[i].classList.remove('alt-nav__btn_active');
                dropdowns[i].classList.add('hidden');
            }
        }
        button.classList.toggle('alt-nav__btn_active');
        dropdown.classList.toggle('hidden');
    })    
}

for(let i = 0; i < buttons.length; i++) {
    clickButton(buttons[i], dropdowns[i]);
}

