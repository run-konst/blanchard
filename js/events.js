const container = document.querySelector('.events__container');
const events = document.querySelectorAll('.event');
const button = document.querySelector('.events__btn');

const setContainerHeight = function() {
    container.style.height = events[0].offsetHeight + 50 + 'px';    
}

document.addEventListener('DOMContentLoaded', function() {
    setContainerHeight();
})

window.addEventListener('resize', function() {
    if (!button.classList.contains('hidden')) {
        setContainerHeight();
        button.classList.remove('hidden');
    }
});

button.addEventListener('click', function() {
    container.style.height = 'auto';
    button.classList.add('hidden');
})