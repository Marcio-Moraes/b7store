import { Produto } from "@/type/produto";
import { ProdutoItem } from "./produtoItem";

type Props = {
    list: Produto[];
}

export const ProdutoLista = ({list}: Props) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {list.map((item)=> (
                <ProdutoItem key={item.id} data={item} />
            ))}
        </div>
    );
}