//Definir visibilidad de elementos
var divRegistro = document.getElementById("registro");
var divLogin = document.getElementById("login");
var divOlvidar = document.getElementById("olvidar");
var divInterdo = document.getElementById("interdo");
var divInteres = document.getElementById("interes");
document.getElementById('reg_btn_notas').disabled = true;
document.getElementById('reg_btn_consultar').disabled = true;
document.getElementById('reg_btn_salirEstudiante').disabled = true;
document.getElementById('reg_btn_salirDocente').disabled = true;
document.getElementById('reg_btn_salirEstudiante').style.display = "none";
document.getElementById('reg_btn_salirDocente').style.display = "none";


divInterdo.style.display = "none";
divRegistro.style.display = "none";
divInteres.style.display = "none";
document.getElementById("reg_bienvenido").style.display = "none";


//el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div

//lógica para crear nuevos usuarios en el sistema
document.getElementById("btnCrearUsuario")
    .addEventListener("click", function () {
        //recuperar datos ingresados
        var nombre = document.getElementById("reg_nombre").value;
        var apellido = document.getElementById("reg_apellido").value;
        var cedula = document.getElementById("reg_cedula").value;
        var correo = document.getElementById("reg_correo").value;
        var usuario = document.getElementById("reg_usuario").value;
        var clave = document.getElementById("reg_clave").value;
        var rol = document.getElementById("reg_rol").value;
        var semestre = document.getElementById("reg_semestre").value;
        var jornada = document.getElementById("reg_jornada").value;
        var paralelo = document.getElementById("reg_paralelo").value;
        //guardar en array
        if (nombre == "" && apellido == "" && correo == "" && usuario == "" && clave == "") {
            alert("Todos los campos son requeridos")
        } else if (rol == "Estudiante") {
            var nuevoUsuario = new Usuario(nombre, apellido, cedula, correo, usuario, clave, rol, semestre, jornada, paralelo);
            estudiante.push(nuevoUsuario);
            alert("Cuenta " + usuario + " Creada.");
            ocultarRegistro();

        } else if (rol == "Docente") {
            var nuevoUsuario = new Usuario(nombre, apellido, cedula, correo, usuario, clave, rol, semestre, jornada, paralelo);
            docente.push(nuevoUsuario);
            alert("Cuenta " + usuario + " Creada.");
            ocultarRegistro();
        }

    });

//Mostrar registros de cuentas
document.getElementById("btnRegistrar")
    .addEventListener("click", ocultarLoguin);
function ocultarLoguin() {
    //ocultar div de Loguin
    divLogin.style.display = "none";

    //mostrar div de Reigistro
    divRegistro.style.display = "block";

}
//mostrar inicio sesión
function ocultarRegistro() {
    //ocultar div de registro
    divRegistro.style.display = "none";

    //mostrar div de login
    divLogin.style.display = "block";
}
//ocultar Sistema Estudiante
document.getElementById("reg_btn_salirEstudiante")
    .addEventListener("click", ocultarSistemaEstudiante)
function ocultarSistemaEstudiante() {
    //ocultar div de registro
    divInteres.style.display = "none";

    //mostrar div de login
    divLogin.style.display = "block";
}
//ocultar Sistema Docente
document.getElementById("reg_btn_salirDocente")
    .addEventListener("click", ocultarSistemaDocente)
function ocultarSistemaDocente() {
    //ocultar div de registro
    divInterdo.style.display = "none";

    //mostrar div de login
    divLogin.style.display = "block";
}
//Ingresar al Sistema Docente
function mostrarSistemaDocente() {
    //ocultar div de login
    divLogin.style.display = "none";

    //mostrar Sistema
    divInterdo.style.display = "block";
}
//Ingresar al Sitema Estudiante
function mostrarSistemaEstudiante() {
    //ocultar div de login
    divLogin.style.display = "none";

    //mostrar Sistema
    divInteres.style.display = "block";
}

//recuperar datos ingresados en la web del estudiante
document.getElementById("btnIngresarEstudiante")
    .addEventListener("click", function () {
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;

        if (usuario == "" && clave == "") {
            alert("Las credenciales no pueden ser vacias")
        } else {
            usuario = estudiante.find(
                data =>
                    data.user === usuario
                    && data.clave === clave
            );

            if (typeof usuario === "undefined") {
                alert("Usuario o clave no válidas");
            } else {
                alert("Bienvenido " + usuario.nombre + " " + usuario.apellido + " al sistema");
                //mostrar sistema notas
                mostrarSistemaEstudiante();
                document.getElementById('reg_btn_salirEstudiante').disabled = false;
                document.getElementById('reg_btn_consultar').disabled = false;
                document.getElementById('reg_btn_salirEstudiante').style.display = "block";
                document.getElementById('reg_btn_salirDocente').style.display = "none";
            }
        }
    });
//recuperar datos ingresados en la web del estudiante
document.getElementById("btnIngresarDocente")
    .addEventListener("click", function () {
        var usuario = document.getElementById("usuario").value;
        var clave = document.getElementById("clave").value;

        if (usuario == "" && clave == "") {
            alert("Las credenciales no pueden ser vacias")
        } else {
            usuario = docente.find(
                data =>
                    data.user === usuario
                    && data.clave === clave
            );

            if (typeof usuario === "undefined") {
                alert("Usuario o clave no válidas");
            } else {
                alert("Bienvenido " + usuario.nombre + " " + usuario.apellido + " al sistema");
                //mostrar sistema notas
                mostrarSistemaDocente();
                //mostrar botones
                document.getElementById('reg_btn_salirDocente').disabled = false;
                document.getElementById('reg_btn_salirDocente').style.display = "block";
                document.getElementById('reg_btn_notas').disabled = false;
                document.getElementById('reg_btn_consultar').disabled = false;
                document.getElementById('reg_btn_salirEstudiante').style.display = "none";
            }
        }
    });
//Agregar Temas y mostrar en HTML
document.getElementById("btnEnviar")
    .addEventListener("click", function () {
        var tema = document.getElementById("tema").value
        var descripcion = document.getElementById("descripcion").value
        var entrega1 = document.getElementById("1entrega").value;
        var entrega2 = document.getElementById("2entrega").value
        var usuario = document.getElementById("usuario1").value;

        entrega1.onloadend = function () {
            preview.src = reader.result;
        }
        //alert(entrega1);
        if (tema == "") {
            alert("LLene los campos requeridos");
        } else {
            var nuevoProyecto = new Proyecto(usuario, tema, descripcion, entrega1, entrega2)
            proyecto.push(nuevoProyecto);
            alert("Proyecto " + tema + " Insertado.");
            document.getElementById("tema1").innerHTML = tema;
            document.getElementById("descripcion1").innerHTML = descripcion;
            document.getElementById("entrega01").href = entrega1;
            document.getElementById("entrega02").href = entrega2;
        }
    })
document.getElementById("btnEnviar")
    .addEventListener("click", function () {
        var tema = document.getElementById("tema").value
        var descripcion = document.getElementById("descripcion").value
        var entrega1 = document.getElementById("1entrega").value;
        var entrega2 = document.getElementById("2entrega").value
        if (tema == "") {
            alert("LLene los campos requeridos");
        } else {
            var nuevoProyecto = new Proyecto(tema, descripcion, entrega1, entrega2)
            proyecto.push(nuevoProyecto);
            //alert("Proyecto " + tema + " Insertado.");
            document.getElementById("tema1").innerHTML = tema;
            document.getElementById("descripcion1").innerHTML = descripcion;
            document.getElementById("entrega01").href = entrega1;
            document.getElementById("entrega02").href = entrega2;
            //Datos del Sistema de Docentes
            document.getElementById("temaEstudiante").innerHTML = tema;
            document.getElementById("descripcionEstudiante").innerHTML = descripcion;
            document.getElementById("entregaEstudiante01").innerHTML = entrega1;
            document.getElementById("entregaEstudiante02").innerHTML = entrega2;
        }
    })
//Elegir estudiante para la Calificacion
document.getElementById("btn_estudiantes")
    .addEventListener("click", function () {
        var alumnos = document.getElementById("rEstudiantes").value
        var buscar = estudiante.filter(function (el) {
            return el.user === alumnos
        })
        var buscarProyecto = proyecto.filter(function (a) {
            if (a.usuario === alumnos) {
                document.getElementById("temaEstudiante").innerHTML = a.nombre;
                document.getElementById("descripcionEstudiante").innerHTML = a.descripcion;
            }
            return a.usuario === alumnos
        })
    });



//Calificacion de Proyectos
document.getElementById("btnEnviarDocente")
    .addEventListener("click", function () {
        var primeraNota = parseInt(document.getElementById("nota1").value);
        var segundaNota = +document.getElementById("nota2").value;
        var terceraNota = +document.getElementById("nota3").value;
        var tema = document.getElementById("tema").value;
        var descripcion = document.getElementById("descripcion").value;
        var entrega1 = document.getElementById("1entrega").value;
        var entrega2 = document.getElementById("2entrega").value;
        //alert(entrega1)
        var notafinal = (primeraNota + segundaNota + terceraNota) / 3;
        if (primeraNota == "" || segundaNota == "" || terceraNota == "") {
            alert("LLene los campos requeridos");
        } else {
            //promediar Nota Final
            var final = new Proyecto(tema, descripcion, entrega1, entrega2, notafinal)
            proyecto.push(final);
            alert("Nota " + notafinal + " es la Final.");
            document.getElementById("temaEstudiante").innerHTML = tema;
            document.getElementById("descripcionEstudiante").innerHTML = descripcion;
            document.getElementById("entregaEstudiante01").innerHTML = entrega1;
            document.getElementById("entregaEstudiante02").innerHTML = entrega2;
            document.getElementById("notaPrimera1").innerHTML = primeraNota;
            document.getElementById("notaSegunda2").innerHTML = segundaNota;
            document.getElementById("notaTercera3").innerHTML = terceraNota,
                document.getElementById("notaFina").innerHTML = notafinal;
            document.getElementById("notaFinal").innerHTML = notafinal;
        }
    })