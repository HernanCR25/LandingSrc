const url = "http://localhost:3000/api/cliente/";
let resultados = '';
const formArticulo = document.querySelector("form");
const NOMCLI = document.getElementById("NOMCLI");
const APECLI = document.getElementById("APECLI");
const CELCLI = document.getElementById("CELCLI");
const EMACLI = document.getElementById("EMACLI");
const MENCLI = document.getElementById("MENCLI");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (NOMCLI.value == "" || APECLI.value == "" || CELCLI.value == "" || EMACLI.value == "" || MENCLI.value == "") {
       		 alert("Asegúrese de que todos los campos estén completos");
       		 return false;
   		 } else {
       		 console.log("Todos los campos están completos");
       		 fetch(
           		 url,
           		 {
               		 method: 'POST',
               		 headers: {
                   		 'content-Type':'application/json'
               		 },
               		 body: JSON.stringify(
                   		 {
                       		 NOMCLI: NOMCLI.value,
                       		 APECLI: APECLI.value,
                       		 CELCLI: CELCLI.value,
                       		 EMACLI: EMACLI.value,
                       		 MENCLI: MENCLI.value
                   		 }
               		 )
           		 }
       		 )
       		 .then(
           		 response => response.json()
       		 )
       		 .then(
           		 response => location.reload()
       		 );
   		 }
   	 } else if(opcion == 'editar'){
   		 console.log("Activado el ");
   	 }
    }
);