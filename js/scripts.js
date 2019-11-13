//main URL + global variables
const url = 'https://randomuser.me/api/?results=12&nat=us';
const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function fetchData(url) {
    return fetch(url)
    .then(response => response.json())
}

fetchData(url)
    //.then(data => console.log(data.results))
    .then(data => generateEmployeeData(data.results))

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------
function generateEmployeeData(data) {
    data.map(e=> {
        const card = document.createElement('div');
        card.className = 'card';

        const html = `
            <div class="card-img-container">
                <img class="card-img" src="${e.picture.large}" alt="profile picture">
            </div>
            <div class="card-info-container">
                <h3 id="name" class="card-name cap">${e.name.first} ${e.name.last}</h3>
                <p class="card-text">${e.email}</p>
                <p class="card-text cap">${e.location.city}, ${e.location.state}</p>
            </div>
            `;

        card.innerHTML = html;
        gallery.appendChild(card);
        
        card.addEventListener('click', () => {
            generateModalCard(e)
        });
    });
}

function generateModalCard(e) {
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    $('.modal-container').hide();

    //clean dob:
    let dobYear = e.dob.date.slice(0,4);
    let dobMonth = e.dob.date.slice(5,7);
    let dobDay = e.dob.date.slice(8,10);
    let dob =  `${dobMonth}/${dobDay}/${dobYear}`;

    const html = `  
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${e.picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${e.name.first} ${e.name.last}</h3>
                <p class="modal-text"><strong>Email:</strong> ${e.email}</p>
                <hr>
                <p class="modal-text"><strong>Phone:</strong> ${e.phone}</p>
                <p class="modal-text"><strong>Address:</strong> ${e.location.street.number} ${e.location.street.name}</p>
                <p class="modal-text">${e.location.city}, ${e.location.state} ${e.location.postcode}</p>
                <p class="modal-text"><strong>DOB:</strong> ${dob} </p>
            </div>
        </div>
        `;

    modalContainer.innerHTML = html;  
    body.appendChild(modalContainer);
   
    modalContainer.addEventListener('click', () => {
        $('.modal-container').hide();
    });
  
    window.addEventListener('click', (e) => {
        if (e.target.modalContainer) {
        $('.modal-container').hide();
        }
    });
} 