const { obras } = require("./obras");


function lerObras() {
    try {
        console.table(obras);
    } catch(error) {
        console.error ("Erro ao visualizar as Obras.", erro.message);
    }
}


module.exports = { lerObras };
