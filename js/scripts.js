const url = 'https://randomuser.me/api/?results=12';
const gallery = document.querySelector('.gallery');
const card = document.getElementsByClassName('card');

const modalContainer = document.createElement('div');
modalContainer.className = 'modal-container';
gallery.insertAdjacentElement('afterend', modalContainer);
$('.modal-container').hide();


// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

fetch(url)
    .then(response => response.json())
    .then(data => data.results.map(e => {
        generateEmployeeData(e);
        //generateModalCard(e);
        //console.log(data.results)
    }))


// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateEmployeeData(data) {
    const html = `
        <div class="card">
            <div class="card-img-container">
                <img class="card-img" src="${data.picture.medium}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${data.name.first} ${data.name.last}</h3>
                <p class="card-text">${data.email}</p>
                <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
            </div>
        </div>
        `;
    gallery.innerHTML += html; 
}

function generateModalCard(data) {
    const html = `  
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data.picture.medium}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                <p class="modal-text">${data.email}</p>
                <p class="modal-text cap">${data.location.city}</p>
                <hr>
                <p class="modal-text">${data.phone}</p>
                <p class="modal-text">${data.location.street.number} ${data.location.street.name} ${data.location.state}, ${data.location.postcode}</p>
                <p class="modal-text">Birthday: ${data.dob.date}</p>
            </div>
        </div>
        `;
    modalContainer.innerHTML += html;  
} 

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------


   


// ------------------------------------------
//  POST DATA
// ------------------------------------------


















/*
function generateLink(){
    for (let index = 0; index < card.length; index++) {
        card[index].addEventListener('click', function(){
            generateModalCard(index);
            $('.modal-container').show();
        })
    }
}
*/