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

/**
 * Seleciona Todos Os Avisos Cadrastados
 * @return {object} Objeto Com Todos Avisos Cadrastados Ou
 * Uma Mensagem De Erro
 */
function selecionarTodos(){
    return db.select('*').from('avisos')
        .then(avisos =>{return avisos})
        .catch(erro => {
            return {
                tipo: "erro",
                corpo: "Erro: "+erro
            }
        })
}

/**
 * Funçao q exclui um aviso do banco de dados
 * @param {int} id id do aviso
 */
function excluir(id){
    return db.del().from('avisos').where('ID_avisos',id)
}

module.exports = {salvar, selecionarTodos, excluir}

