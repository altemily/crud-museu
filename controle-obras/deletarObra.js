const { obras } = require("./obras");


function deletarObra(id) {
    try {
        const indice = obras.findIndex(obra => obra.id === id);

        if (indice === -1) {
            console.log("Obra não encontada.");
        } else {
            obras.splice(indice, 1);
            console.log("Obra deletada com sucesso!");
        }
    } catch (error) {
        console.error("Erro ao deletar a obra.", error.message);
    }
}


module.exports = { deletarObra };