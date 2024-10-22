const prompt = require("prompt-sync")();

const { obras } = require("./controle-obras/obras")
const { criarObra } = require("./controle-obras/criarObra")
const { atualizarObra } = require("./controle-obras/atualizarObra")
const { lerObras } = require("./controle-obras/lerObras")
const { deletarObra } = require("./controle-obras/deletarObra")



criarObra("0001", "Eita!", "Javista Scripto", "2024", "22/10/2024", "Natal/RN", "Perfeito", "5.790.899,20" );
criarObra("0002", "Vaalha!", "Javista Scripto Filho", "2024", "18/09/2024", "Natal/RN", "Perfeito", "790.899,20" );
criarObra("0003", "NPM-G0!", "Nodelito Justino S.", "2024", "02/08/2024", "Natal/RN", "Regular", "1.000,00" );
lerObras();

atualizarObra("001", "Vish!", "J.V", "2004.1", "20/10/24", "RN", "Bom", "5.000,00" );
lerObras();

deletarObra("0003")
lerObras();