const url = "http://localhost:3000/api/cliente/";
let resultados = '';
const formArticulo = document.querySelector("form");
const nomcli = document.getElementById("NOMCLI");
const apecli = document.getElementById("APECLI");
const celcli = document.getElementById("CELCLI");
const emacli = document.getElementById("EMACLI");
const mencli = document.getElementById("MENCLI");
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