//Conexão Com o Banco De Dados
const db = require('../../knexfile.js')
/**
 * Inserir um aviso no banco de dados
 * @param {object} aviso O aviso deve estar no seguinte formato: {titulo: <string>, data<string>, mensagem<string>}
 * @returns {object} Mensagem de sucesso ou de erro
 */
function salvar(aviso) {
    //insert
    //db.insert(<obj com os dados>).into(<'<nome da tabela>'>)
    return  db.insert(aviso).into('avisos')
        .then(_ => {
            return {
                tipo: "sucesso",
                corpo: "Dados Inseridos Com Sucesso! "
            }
        })
        .catch(erro => {
            return {
                tipo: "erro",
                corpo: "Erro: "+erro
            }
        })
}//Fim Do Salvar

module.exports = {salvar}

