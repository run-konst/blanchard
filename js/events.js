const section = document.querySelector('.events');
const events = document.querySelectorAll('.event');
const button = document.querySelector('.events__btn');

button.addEventListener('click', function() {
    events.forEach(function(elem) {
        elem.classList.remove('hidden');
    });
    button.classList.add('hidden');
    section.style.marginBottom = '30px';
})

/*
const container = document.querySelector('.events__container');

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
*/