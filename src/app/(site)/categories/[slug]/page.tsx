import { ProdutoListaFiltro } from "@/components/categories/produto-lista-filter";
import { data } from "@/data";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{slug: string}>,
    searchParams: Promise<{[key: string]: string | string[] | undefined }>
}

export default async function Page({ params, searchParams }: Props ) {
    const { slug } = await params;
    await searchParams;

    const productsByCategory = data.products.filter((item) => item.category === slug);

    if (productsByCategory.length === 0) {
        notFound();
    }

    // TODO: Pegar as informações da categoria

    return(
        <div className="">
            <div className="text-gray-500 mb-4 py-2.5">
                <Link href={'/'}>Home</Link> &gt; <span className="capitalize">{slug}</span>
            </div>

            <ProdutoListaFiltro products={productsByCategory} />
        </div>
    );
}