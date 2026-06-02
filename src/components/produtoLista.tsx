"use client"

import { Produto } from "@/type/produto";
import { usePathname } from "next/navigation";
import { ProdutoItem } from "./produtoItem";

type Props = {
    list: Produto[];
}

export const ProdutoLista = ({ list }: Props) => {
    const pathname = usePathname();
    const isCategoryPage = pathname.startsWith("/categories/");
    const lgGridCols = isCategoryPage ? "lg:grid-cols-3 gap-2" : "lg:grid-cols-4 gap-8";

    const className = `grid grid-cols-1 md:grid-cols-2 ${lgGridCols} `;

    return (
        <div className={className}>
            {list.map((item) => (
                <ProdutoItem key={item.id} data={item} />
            ))}
        </div>
    );
}
