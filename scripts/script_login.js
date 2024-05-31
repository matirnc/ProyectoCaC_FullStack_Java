
/* por el ID identificamos el boton y le asignamos el evento, pasandole que sera el evento y la funcion que desencadenara */
document.getElementById("btn__registrarse")?.addEventListener("click", register);

document.getElementById("btn__iniciar-sesion")?.addEventListener("click", iniciarSesion);

//document.getElementById("btn__log").addEventListener("click", saludo_bienvenida);

/* agregamos evento a la ventana para manejar el resize */
window.addEventListener("resize", anchoPagina);


// VARIABLES

/* esta variable captura el contenido del formulario */

let contenedor_login_register = document.querySelector(".container__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");


let caja_trasera_login = document.querySelector(".caja__trasera--login");
let caja_trasera_register = document.querySelector(".caja__trasera--register");


/* funcion que al hacer clic en register desplace la caja blanca hacia el lado de registro */
function register() {

    if (window.innerWidth > 850) {

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none"; // se oculta
        caja_trasera_register.display.opacity = "0";    // se oculta
        caja_trasera_login.display.opacity = "1";   // se muestra

    } else {

        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none"; // se oculta

        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";   // se muestra

    }   // para lograr el responsive

}

/* funcion que al hacer clic en iniciar sesion desplace la caja blanca hacia el lado de iniciar sesion */
function iniciarSesion() {

    if (window.innerWidth > 850) {

        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.opacity = "1";    // se muestra
        //caja_trasera_login.style.opacity = "0";   // esto trae a un error; desaparece el texto del login !

    } else {

        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja_trasera_register.style.display = "block";    // se muestra
        caja_trasera_login.display.display = "none";   // se oculta


    }

}

/* funcion para manejar el resize de la pagina */

function anchoPagina() {

    if (window.innerWidth > 850) {
        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";

        caja_trasera_login.style.display = "none";  // oculta
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px"; // no habra desplazamiento
    }
}

anchoPagina();  // esto es necesario de lo contrario se superponen las cajas traseras


//  ALMACENAR EN LOCAL STORAGE - REGISTRO

const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const nombre = document.querySelector('#nombreID').value
    const email = document.querySelector('#emailID').value
    const usuario = document.querySelector('#usuarioID').value
    const pass = document.querySelector('#passID').value

    // chequear que el email no exista ya 
    const users = JSON.parse(localStorage.getItem('users')) || []

    const isUserRegistered = users.find(user => user.email === email)   // buscar algun usuario con el mismo email ingresado

    if (isUserRegistered) {
        return alert('El usuario ya está registrado');
    }

    users.push({ nombre: nombre, email: email, usuario: usuario, pass: pass })
    // guardar en el storage
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso');

    //  redireccion
    window.location.href = './login.html';
})

//  LOGIN

const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e) => {

    e.preventDefault();  // para evitar que recargue la pag

    const email_log = document.querySelector('#email_usuario').value
    const pass_log = document.querySelector('#pass_login').value

    const users = JSON.parse(localStorage.getItem('users')) || []

    const valid_user = users.find(users => users.email === email_log && users.pass === pass_log)

    if (!valid_user) {
        alert('Usuario y/o contraseña incorrecta');
        exit();
    } else {
        if (window.confirm(`Bienvenido ${valid_user.nombre}. `)) {
            sessionStorage.setItem("user_logged", valid_user.usuario)
            window.location.href = '../index.html';
        }
    }
})

window.onload = function(){
    const user_logged = sessionStorage.getItem('user_logged');

    if (user_logged !== null) {
        window.location.href = '../index.html';
    }
}

navigator