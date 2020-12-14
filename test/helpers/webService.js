const fs = require('fs');

//Esta funcion verifica si el "web service" recibido como un string de parametro
// fue almacenado en el archivo tracelog.json
function verifyWebService(expectedWebService) {
    let webserviceFounded = false;
    let traceLogs = fs.readFileSync('test/helpers/tracelog.json');
    let webservicesJson = JSON.parse(traceLogs);
    let webServices = webservicesJson.traceEvents;
    for (let i = 0; i < webServices.length; i++) {
        if (webServices[i].args && webServices[i].args.data && webServices[i].args.data.url === expectedWebService) {
            webserviceFounded = true;
            break;
        }
    }
    return webserviceFounded;
}

module.exports = {
    verifyWebService
}