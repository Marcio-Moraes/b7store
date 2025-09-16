import { ProdutoLista } from "../produtoLista"
import { data } from "@/data"

export const ProdutosMaisVendidos = async () => {
    // TODO: Fazer a requisição dos produtos
    

    return(
        <div className="mt-10">
            <h2 className="text-2xl font-semibold text-center md:text-left">Produtos mais vendidos</h2>
            <p className="text-gray-500 text-center md:text-left">Campeões de vendas da nossa loja</p>

            <div className="mt-9">
                <ProdutoLista list={data.products} />
            </div>
        </div>
    )
}