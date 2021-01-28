const painters = [
    {
        name: 'Французский художник 1',
        years: '1 января 1448 — 1 февраля 1494.',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus asperiores neque mollitia culpa sunt saepe, animi officia corporis quisquam minima perspiciatis quos ea velit nulla repudiandae eum distinctio veniam adipisci?Velit vero culpa id dignissimos necessitatibus cumque ratione in, maiores ipsa veniam, natus, labore nulla dolorem nemo sapiente. Dolorum possimus quidem sapiente excepturi? Minima et dolorum deserunt ex, ullam voluptatem.',
        img: 'img/events/event-1.jpg'
    },
    {
        name: 'Французский художник 2',
        years: '2 января 1448 — 2 февраля 1494.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur fugiat, ab laudantium laborum explicabo, sed sunt reiciendis quasi corrupti voluptas optio incidunt alias aliquid nulla delectus quidem, neque suscipit earum.',
        img: 'img/events/event-2.jpg'
    },
    {
        name: 'Французский художник 3',
        years: '3 января 1448 — 3 февраля 1494.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod rem, perspiciatis maiores veniam molestiae eius ipsa repudiandae nulla dolore similique molestias minus illo minima fuga nostrum, necessitatibus blanditiis. Animi.Voluptates a possimus obcaecati veniam reprehenderit consequuntur, accusantium rem magni explicabo libero dolor eveniet doloremque rerum minima tenetur perferendis exercitationem sequi, mollitia quidem. Commodi unde, quisquam iste magni dicta ducimus!',
        img: 'img/events/event-3.jpg'
    },
    {
        name: 'Французский художник 4',
        years: '4 января 1448 — 4 февраля 1494.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam omnis eos eum nam! Nostrum, quae beatae voluptatum maiores id repellat velit. Laudantium ducimus doloribus dolorum pariatur necessitatibus iure quos. Ab, deleniti harum alias ex tempora voluptatem nam ipsum ducimus, vitae ad neque eaque necessitatibus repellat nostrum sequi. Voluptatem obcaecati atque libero eum voluptate inventore repellendus! Cum qui saepe dolorum! Vitae ullam aliquid corporis itaque, iure id autem consequuntur veritatis quia vero natus ipsum in adipisci neque, suscipit beatae, modi nesciunt eaque atque commodi porro impedit alias! Labore, enim nisi?',
        img: 'img/events/event-4.jpg'
    },
    {
        name: 'Французский художник 5',
        years: '5 января 1448 — 5 февраля 1494.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur non, vel totam quaerat sequi iusto aperiam officiis architecto nemo numquam, excepturi voluptates aut labore beatae nam rerum dolorem amet ipsam.Similique, laboriosam! Nulla cupiditate laudantium voluptates ipsa eligendi neque! Obcaecati, tenetur sequi excepturi fugiat quas dignissimos doloremque sapiente molestiae aut omnis enim eveniet. Est, mollitia commodi aut eveniet eum laudantium.',
        img: 'img/events/event-5.jpg'
    }
]

const years = document.querySelectorAll('.year-list__years');
const painterLists = document.querySelectorAll('.year-list__painters');
const painterButtons = document.querySelectorAll('.year-list__link');
const painterName = document.querySelector('.painter__name');
const painterYears = document.querySelector('.painter__years');
const painterDescription = document.querySelector('.painter__description');
const painterImg = document.querySelector('.painter__img');
const countryButtons = document.querySelectorAll('.country__item');
const countryLists = document.querySelectorAll('.year-list');

let toggleList = function(year, painterList) {
    year.addEventListener('click', function() {
        for(let i = 0; i < years.length; i++) {
            if(years[i] !== year) {
                years[i].classList.remove('year-list__years_active');
                painterLists[i].classList.add('hidden');
            }
        }
        year.classList.toggle('year-list__years_active');
        painterList.classList.toggle('hidden');
    })
}

for(let i = 0; i < years.length; i++) {
    toggleList(years[i], painterLists[i]);           
}

let clickPainter = function(painter, painters) {
    painter.addEventListener('click', function(evt) {
        evt.preventDefault();
        painterButtons.forEach(function(elem) {
            elem.classList.remove('year-list__link_active');
        });
        painter.classList.add('year-list__link_active');
        painterName.textContent = painters.name;
        painterYears.textContent = painters.years;
        painterDescription.textContent = painters.description;
        painterImg.src = painters.img;
    })
}

for(let i = 0; i < painterButtons.length; i++) {
    clickPainter(painterButtons[i], painters[i]);
}

let clickCountry = function(country, list) {
    country.addEventListener('click', function() {
        countryButtons.forEach(function(elem) {
            elem.classList.remove('country__item_active');
        });
        countryLists.forEach(function(elem) {
            elem.classList.add('hidden');
        });
        country.classList.add('country__item_active');
        list.classList.remove('hidden');
    })
}

for(let i = 0; i < countryButtons.length; i++) {
    clickCountry(countryButtons[i], countryLists[i]);           
}