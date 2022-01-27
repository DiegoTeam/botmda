var axios = require('axios');
     var config = {
    method: 'get',
    url: 'https://pau.osde.com.ar/api/v1/breakingnews.all',
    headers: {
        'Authorization': 'Basic c29wb3J0ZXVzdWFyaW9zOmhMcUt2Nm1RTmRLZk1VUGxKaXJ5Z0RYSg==',
        'Content-Type': 'application/json'
    },
    //este es el GET testeadi en postmant
};
var existencia = "true"
var response = await axios(config)
var respuestas = response.data;
var lrespuestas = respuestas.length;
var resultado=[];
var i=0;
var x=0;
for(i=0;lrespuestas>i;i++){
  if(respuestas[i].type_id=="1")
  { if(respuestas[i].status_id==1){
resultado[x]=respuestas[i].title;
x++;
}
}}
if(resultado.length<1)
{
  existencia = "false";
}
resultado=resultado.join("\n");
module.exports.resultado = resultado;
var objresultado={
    existencia:existencia,
    resultado:resultado
};

return objresultado


