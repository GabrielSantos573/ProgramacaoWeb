let produtos = Array();

function criar_produto(id, nome, qtd) {
    let p ={
        id: id, 
        nome: nome,
        qtd: qtd,
    }
    return p;
}

function add_produto(p) {
    produtos.push(p); //push é pra colocar algo dentro do array
}

function listar_produtos() {
    return produtos;
}

function editar_produtos(id, qtdAtual) {
    let pEditado;
    produtos.forEach(p => {
        if (p.id == id) {
            p.qtd = qtdAtual;
        }
        pEditado = p;
    })
    return pEditado;
}

function remover_produtos(id) {
    produtos = produtos.filter((p) => {
        return p.id != id
    })
    return{};
}

module.exports ={
    criar_produto,
    add_produto,
    listar_produtos,
    editar_produtos, 
    remover_produtos,
}
