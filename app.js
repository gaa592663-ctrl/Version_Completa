    function activarSOS(){

       
        let sonido = document.getElementById("sirena");
        sonido.volume = 0.10;
        sonido.currentTime = 0; 
        sonido.play();

        setTimeout(function(){
            sonido.pause();
            sonido.currentTime = 0;
        },3000);

        let hora = new Date().toLocaleTimeString();

        alert(
            "🚨 ALERTA SOS ACTIVADA\n\n"+
            "📍 Ubicación enviada\n"+
            "📡 GPS conectado\n"+
            "👥 Contactos avisados\n"+
            "🚓 Policía notificada\n"+
            "⏰ Hora: " + hora
        );
    }




    function abrirLogin(){

    localStorage.setItem("login", "true");
    localStorage.setItem("user", "Usuario");

    actualizarUsuario();

    alert("✅ Sesión iniciada");
}


    


    function actualizarUsuario(){

        let estado = localStorage.getItem("login");

        if(estado === "true"){
            let user = localStorage.getItem("user");

            document.querySelector(".usuario").innerHTML =
            "👤 " + user + " (Salir)";

            document.querySelector(".usuario").onclick = logout;
        }
    }


    function logout(){
        localStorage.clear();
        location.reload();
    }


    window.onload = actualizarUsuario;

    function compartirUbicacion(){


    let confirmar = confirm(
    "⚠️ ¿Deseas compartir tu ubicación de emergencia?"
    );



    if(confirmar){


    let boton = event.target;


    boton.innerHTML = "📡 Enviando ubicación...";

    boton.disabled = true;



    setTimeout(()=>{


    let hora = new Date()
    .toLocaleTimeString();



    alert(

    "🚨 EMERGENCIA SIMULADA\n\n"+
    "📍 Ubicación compartida\n"+
    "🏠 Av. Santa clara\n"+
    "🌎 Lima - Perú\n"+
    "📡 GPS activo\n"+
    "👥 Contactos avisados\n"+
    "🚓 Servicio de emergencia notificado\n"+
    "⏰ Hora: "+hora


    );



    boton.innerHTML =
    "✅ Ubicación enviada";


    },2000);



    }

    }


    function verDetalle(texto){

    document.getElementById("detalleModal")
    .style.display="flex";


    document.getElementById("detalleTexto")
    .innerHTML=
    `
    <b>${texto}</b><br><br>

    📍 Ubicación registrada<br>
    🕒 Tiempo real<br>
    👥 Ciudadanos informando<br>
    🚓 Autoridades notificadas
    `;

    }



    function cerrarDetalle(){

    document.getElementById("detalleModal")
    .style.display="none";

    }



    function compartirAlerta(nombre){


    navigator.clipboard.writeText(
    "🚨 ALERTA: "+nombre+
    "\nSistema SafeCity"
    );


    alert(
    "📤 Alerta copiada y lista para compartir"
    );


    }



    let filtros=document.querySelectorAll(".filter");


    filtros.forEach(btn=>{


    btn.onclick=function(){


    filtros.forEach(x=>
    x.classList.remove("active")
    );


    this.classList.add("active");


    alert(
    "Filtro seleccionado: "
    +this.innerText
    );


    }


    });


    const formulario = document.getElementById("reporte");

if(formulario){

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let lugar = document.getElementById("lugar").value;
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;

    let reportes = JSON.parse(localStorage.getItem("reportes")) || [];

    reportes.push({
        lugar:lugar,
        tipo:tipo,
        descripcion:descripcion,
        hora:new Date().toLocaleTimeString()
    });

    localStorage.setItem("reportes", JSON.stringify(reportes));

    this.reset();

});

}


    function llamarEmergencia(servicio, numero){

    if(!confirm("¿Llamar a " + servicio + " (" + numero + ")?")){
        return;
    }

    alert("📞 Marcando " + servicio + "...");

    setTimeout(function(){

        if(servicio==="Policía"){

            alert(
                "👮 Policía Nacional\n\n" +
                "¿Cuál es la emergencia?\n" +
                "Una patrulla está siendo enviada."
            );

        }else if(servicio==="Ambulancia"){

            alert(
                "🚑 Central SAMU\n\n" +
                "¿Hay personas heridas?\n" +
                "Una ambulancia está en camino."
            );

        }else{

            alert(
                "🚒 Central de Bomberos\n\n" +
                "¿Existe un incendio o rescate?\n" +
                "La unidad más cercana fue despachada."
            );

        }

        setTimeout(function(){

            alert(
                "✅ Solicitud registrada\n\n" +
                "📍 Ubicación enviada\n" +
                "👥 Personal de emergencia notificado\n" +
                "🚨 Mantenga la calma y espere la llegada de la unidad."
            );

        },2500);

    },2000);

}

const alertas=[

{
tipo:"robo",
titulo:"Robo reportado",
lugar:"Av. Santa Clara",
hora:"Hace 5 minutos",
nivel:"Crítico"
},

{
tipo:"accidente",
titulo:"Accidente vehicular",
lugar:"Av. Arequipa",
hora:"Hace 15 minutos",
nivel:"Medio"
},

{
tipo:"sospecha",
titulo:"Actividad sospechosa",
lugar:"Centro Comercial",
hora:"Hace 40 minutos",
nivel:"Bajo"
}

];

function abrirLogin(){
    document.getElementById("loginModal").style.display = "flex";
}

function cerrarLogin(){
    document.getElementById("loginModal").style.display = "none";
}

function login(){

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    if(usuario === "admin" && clave === "1234"){
        alert("Bienvenido " + usuario);
        cerrarLogin();
    }else{
        alert("Usuario o contraseña incorrectos");
    }

}









function login(){

    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    // Usuario Premium
    if(usuario==="premium" && clave==="1234"){

        alert("Bienvenido a Dangerzone Premium");

        window.location.href = "index.html";

        return;
    }

    alert("Credenciales incorrectas.");

}

function cerrarLogin(){

    document.getElementById("loginModal").style.display="none";

}

