// CLASE PARA EL LOGGIN

class Persona {

nombre
apellidos
calle
numero
colonia
ciudad
estado
codigoPostal
pais
correo
telefono
empresa
rfc
constructor(nombre,apellidos,calle,numero,colonia,
    ciudad,estado,codigoPostal,pais,correo,telefono,empresa,rfc){

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.calle = calle;
        this.numero = numero;
        this.colonia = colonia;
        this.ciudad = ciudad;
        this.estado = estado;
        this.codigoPostal = codigoPostal;
        this.pais = pais;
        this.correo = correo;
        this.telefono = telefono;
        this.empresa = empresa;
        this.rfc = rfc
    }
}

//////////////////Variables a trabajar 



const formRegistro = document.querySelector("#infoUsuario"),
nombre = document.querySelector("#nombre"),
apellidos = document.querySelector("#apellidos"),
empresa = document.querySelector("#empresa"),
calle = document.querySelector("#calle"),
numero = document.querySelector("#numero"),
colonia =document.querySelector("#colonia"),
codigoPostal = document.querySelector("#codigoPostal"),
ciudad = document.querySelector("#ciudad"),
estado =document.querySelector("#estado"),
pais = document.querySelector("#pais-region"),
telefono = document.querySelector("#telefono"),
email = document.querySelector("#email"),
rfc = document.querySelector("#rfc"),
boton = document.getElementsByClassName("boton")

const personas = []

//localStorage.clear()
/////////////////////// FUNCION PARA CREAR UN USUARIO NUEVO

 formRegistro.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    const persona = new Persona(
        nombre.value,
        apellidos.value,
        empresa.value,
        calle.value,
        numero.value,
        colonia.value,
        codigoPostal.value,
        ciudad.value,
        estado.value,
        pais.value,
        telefono.value,
        email.value,
        rfc.value,
    )
        
        guardarUsuario(persona)
        guardarLocalStorage(personas)
        formRegistro.reset()
    })

//////////////FUNCION PARA GUARDAR UN USUARIO

function guardarUsuario(usuario){
    return personas.push(usuario)
}


/////////////GUARDAR EN EL LS

function guardarLocalStorage(usuario){
    return localStorage.setItem("usuarios",JSON.stringify(usuario))

}

console.log(personas)