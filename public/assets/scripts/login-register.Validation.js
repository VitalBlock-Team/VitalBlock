//iniciar una pagina web
function inicializar(){
    document.getElementById('btn-login').addEventListener('click',validarCredenciales);
    document.getElementById('btn-register').addEventListener('click',validarCredenciales);
}

function validarCredenciales(){
    //email
    let email = document.getElementById('email');
    let validarCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    //contrasena
    let clave =document.getElementById('password').value;

    if (validarCorreo.test(email.value)) {
        window.location="LoginMedico.html";
        return true;
    } else {
        alert('Datos incorrectos');
        return false;
    }
}

window.addEventListener('load',inicializar);

document.getElementById("forgot-link").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("recover-modal").classList.add("active");
});

function cerrarModal() {
  document.getElementById("recover-modal").classList.remove("active");
  document.getElementById("recover-msg").textContent = "";
}

function enviarRecuperacion() {
  const email = document.getElementById("recover-email").value.trim();
  const msg = document.getElementById("recover-msg");
  if (!email) {
    msg.textContent = "Por favor ingresa tu correo.";
  } else {
    msg.style.color = "green";
    msg.textContent = "Si el correo está registrado, recibirás un mensaje.";
    // Aquí podrías llamar al backend real (AJAX o fetch)
  }
}




