import { Produto } from "@/type/produto";
import { ProdutoItem } from "../produtoItem";

type Props = {
    produtos: Produto[];
};

export const ProdutosRelacionados = ({ produtos }: Props) => {
    return (
        <section className="related-products">
            <div className="related-products__header">
                <h2 className="related-products__title">Você também pode gostar</h2>
                <p className="related-products__subtitle">
                    Produtos relacionados que combinam com o seu estilo
                </p>
            </div>
            <div className="related-products__grid">
                {produtos.slice(0, 4).map((produto) => (
                    <ProdutoItem key={produto.id} data={produto} />
                ))}
            </div>
        </section>
    );
};
