"use client"

import { useQueryString } from "@/hooks/use-querystring";
import { Produto } from "@/type/produto";
import { ChangeEvent, useState } from "react";
import { FiltroGrupo } from "./filtro-grupo";
import { ProdutoLista } from "../produtoLista";

type Props = {
    products: Produto[];
}

export const ProdutoListaFiltro = ({ products }: Props) => {
    const queryString = useQueryString();
    const [filtroAberto, setFiltroAberto] = useState(false);

    const order = queryString.get('order') ?? 'views';

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        queryString.set('order', e.target.value);
    }

    return(
        <div>
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="text-3xl"><strong>{products.length}</strong> Produtos</div>
                <div className="w-full md:max-w-70 flex gap-5">
                    <select 
                        defaultValue={order} 
                        onChange={handleSelectChange}
                        name="" 
                        id="" 
                        className="px-6 h-14 flex-1 flex items-center bg-white border border-gray-200 rounded-sm text-gray-500"
                    >
                        <option value="views">Popularidade</option>
                        <option value="price">Por Preço</option>
                        <option value="selling">Mais vendidos</option>
                    </select>

                    <div 
                        onClick={()=> setFiltroAberto(!filtroAberto)}
                        className="px-6 h-14 flex-1 flex md:hidden items-center bg-white border border-gray-200 rounded-sm text-gray-500"
                    >
                        {filtroAberto ? 'Não Filtrar' : 'Filtrar por'}
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-8">
                <div className={`flex-1 md:max-w-70 ${filtroAberto ? 'block' : 'hidden'} md:block`}>
                    <FiltroGrupo id="tech" name="Tecnologias" />
                </div>

                <div className="flex-1">
                    {products.length > 0 ? (
                        <ProdutoLista list={products} />
                    ) : (
                        <div className="bg-white border border-gray-200 rounded-sm p-8 text-gray-500">
                            Nenhum produto encontrado para esta categoria.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}