loadData()

async function loadData (){
    try {
        const response = await fetch("./resources/places.json")
        places = await response.json()
        console.log(places);
       
        places.forEach(e => {
            insertCard(e)
        });

    } catch (error) {
        console.log(error);
    }
}


function createCard(place) {
    const divCard = document.createElement('div')
    divCard.classList.add('col')
    divCard.classList.add('col-12')
    divCard.classList.add('col-md-6')
    divCard.classList.add('col-lg-4')
     

    const { img, title, description, link } = place
    divCard.innerHTML = `
            <div class="miCard">
                <div class="img-box"><img src="${img}" class="box" alt="..."></div>
                <div class="card-body-box">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <a href="${link}" class="btn btn-primary">${title}</a>
                </div>
            </div>`

    return divCard
    
}


function insertCard(divCard) {
    const element = document.querySelector('#cards-home')
    const card = createCard(divCard)
    element.appendChild(card)
}

/*          LOGIN            */
/*
const user = JSON.parse(localStorage.getItem(`login_success`)) || false;

if(!user){
    window.location.href = '../index.html';
}
*/


