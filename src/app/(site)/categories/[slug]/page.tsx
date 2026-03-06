import { ProdutoListaFiltro } from "@/components/categories/produto-lista-filter";
import Link from "next/link";

type Props = {
    params: Promise<{slug: string}>,
    searchParams: Promise<{[key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props ) {
    const { slug } = await params;
    const filters = await searchParams;

    // TODO: Pegar as informações da categoria

    return(
        <div className="">
            <div className="text-gray-500 mb-4 py-2.5">
                <Link href={'/'}>Home</Link> &gt; <span className="capitalize">{slug}</span>
            </div>

            <ProdutoListaFiltro />
        </div>
    );
}