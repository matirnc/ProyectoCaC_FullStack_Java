loadData()

async function loadData() {
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

window.onload = function () {
    const user_logged = sessionStorage.getItem('user_logged') || false;

    if (!user_logged) {
        return
    }
    document.getElementById("login_registro").style.display = "none"
    document.getElementById("mi_perfil").style.display = "block"
    document.getElementById("mi_perfil").textContent += ` - ${user_logged}`
    document.getElementById("log_out").style.display = "block"
}

const log_out_btn = document.getElementById("log_out")
log_out_btn.addEventListener('click', ()=>{

    document.getElementById("login_registro").style.display = "block"
    let miPerfil = document.getElementById("mi_perfil")
    miPerfil.textContent = miPerfil.textContent.replace(/ - .*/, "")
    miPerfil.style.display = "none"
    log_out_btn.style.display = "none"
    sessionStorage.removeItem('user_logged')
})



