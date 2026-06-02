export type Produto = {
    id: number;
    label: string;
    slug: string;
    category: string;
    description: string;
    img: string;
    images: string[];
    price: number;
    priceOriginal: number;
    liked: boolean;
    sizes: string[];
    colors: { name: string; hex: string }[];
    details: string[];
}