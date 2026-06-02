import { data } from "@/data";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProdutoDetalhe } from "@/components/produto/produto-detalhe";
import { ProdutosRelacionados } from "@/components/produto/produtos-relacionados";

type Props = {
    params: Promise<{ slug: string; produto: string }>;
};

// Gera rotas estáticas para todos os produtos (SSG)
export async function generateStaticParams() {
    return data.products.map((product) => ({
        slug: product.category,
        produto: product.slug,
    }));
}

// Gera metadata dinâmica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, produto } = await params;
    const product = data.products.find(
        (p) => p.category === slug && p.slug === produto
    );

    if (!product) {
        return {
            title: "Produto não encontrado | B7Store",
        };
    }

    return {
        title: `${product.label} | B7Store`,
        description: product.description,
        openGraph: {
            title: `${product.label} | B7Store`,
            description: product.description,
            images: [
                {
                    url: product.img,
                    width: 600,
                    height: 600,
                    alt: product.label,
                },
            ],
            type: "website",
            siteName: "B7Store",
        },
        twitter: {
            card: "summary_large_image",
            title: product.label,
            description: product.description,
            images: [product.img],
        },
        keywords: [
            product.label,
            product.category,
            "camiseta developer",
            "b7store",
            "roupa programador",
        ],
    };
}

export default async function ProdutoPage({ params }: Props) {
    const { slug, produto } = await params;
    const product = data.products.find(
        (p) => p.category === slug && p.slug === produto
    );

    if (!product) {
        notFound();
    }

    const relacionados = data.products.filter(
        (p) => p.category === slug && p.id !== product.id
    );

    return (
        <div className="pb-20">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6 py-2.5">
                <ol className="flex items-center gap-1.5 flex-wrap">
                    <li>
                        <Link href="/" className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li className="text-gray-300">/</li>
                    <li>
                        <Link
                            href={`/categories/${slug}`}
                            className="hover:text-blue-600 transition-colors capitalize"
                        >
                            {slug}
                        </Link>
                    </li>
                    <li className="text-gray-300">/</li>
                    <li className="text-gray-800 font-medium">{product.label}</li>
                </ol>
            </nav>

            {/* Produto Principal */}
            <ProdutoDetalhe product={product} categorySlug={slug} />

            {/* Produtos Relacionados */}
            {relacionados.length > 0 && (
                <ProdutosRelacionados produtos={relacionados} />
            )}
        </div>
    );
}
