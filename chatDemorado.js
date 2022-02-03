exports.handler = async function(context, variables) {

var config = {
    method: 'post',
    url: 'https://flows.messagebird.com/flows/20c71c5a-3cd4-464b-bc2f-cb68a6a106d3/invoke',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

var axios = require('axios');
    var data = {
        'id': variables.id,
        'ticketUrl': variables.ticketUrl,
        'eventType': variables.eventType,
    }

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
    
    var response = await axios(config)

}