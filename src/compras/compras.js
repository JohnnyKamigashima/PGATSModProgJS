const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas.length === 0 || comprar.length === 0)
        throw new Error("Ambas as listas precisam ter ao menos um item.");

    let total = 0;

    for (let ferramenta of ferramentas) {
        for (let itemAComprar of comprar) {
            if (ferramenta.nome.toUpperCase() === itemAComprar.toUpperCase()) {
                total += ferramenta.preco;
            }
        }
    }

    if (total === 0)
        throw new Error("Nenhuma ferramenta desejada encontrada.");

    return `O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${total.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}