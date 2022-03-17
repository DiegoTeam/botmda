var axios = require('axios');
var data = JSON.stringify({
});

var config = {
    method: 'get',
    url: 'https://pau.osde.com.ar/api/v1/breakingnews.all',
    headers: {
        'Authorization': 'Basic c29wb3J0ZXVzdWFyaW9zOmhMcUt2Nm1RTmRLZk1VUGxKaXJ5Z0RYSg==',
        'Content-Type': 'application/json'
    },
    data: data
};
async function patito(){
var response = await axios(config)
var respuestas = response.data;
var lrespuestas = respuestas.length;
var resultado=[];
//console.log(response.data[0]);
var i=0;
var x=0;
for(i=0;lrespuestas>i;i++){
  if(respuestas[i].status_id==1 & respuestas[i].type_id==1){
resultado[x]=respuestas[i].title;
x++;
//console.log(respuestas[i].title);
}}
//console.log(resultado);
switch (parseInt(response.data['type_id'])) {
    case 1:
        status_id = "1"
        break;
    case 2:
        status_id = "3"
        break;
    default:
        estado = "Error"
        break;
}

var dato = {
    //id: response.data['id'],
    titulo: response.data['title'],
    //estado: estado 
  };
//console.log(dato);

var arrayToObject = function (resultado) {
    var newObject = {};
    for (var i = 0; i<resultado.length;i++){
        newObject[i] = resultado[i];
    }
    return newObject;
    
}
//console.log(arrayToObject(resultado));
console.log(resultado);
module.exports.patito = patito();
return resultado;
}
patito();


//type_id==1 => BANER ROJO (alerta)
//type_id==3 => BANER AZUL (restablecido)
//status_id==1 => BANER ACTIVO (visible)
//status_id==2 => BANER RESUELTO (no visible)
