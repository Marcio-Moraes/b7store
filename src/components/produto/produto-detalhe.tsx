"use client";

import { Produto } from "@/type/produto";
import Image from "next/image";
import { useState } from "react";

type Props = {
    product: Produto;
    categorySlug: string;
};

export const ProdutoDetalhe = ({ product, categorySlug }: Props) => {
    const [imagemSelecionada, setImagemSelecionada] = useState(0);
    const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");
    const [corSelecionada, setCorSelecionada] = useState(0);
    const [quantidade, setQuantidade] = useState(1);
    const [curtido, setCurtido] = useState(product.liked);
    const [imgZoom, setImgZoom] = useState(false);

    const desconto = Math.round(
        ((product.priceOriginal - product.price) / product.priceOriginal) * 100
    );

    const parcelamento = (product.price / 6).toFixed(2);

    return (
        <div className="product-detail">
            <div className="product-detail__grid">
                {/* Galeria de Imagens */}
                <div className="product-detail__gallery">
                    {/* Imagem Principal */}
                    <div
                        className={`product-detail__main-image ${imgZoom ? "product-detail__main-image--zoom" : ""}`}
                        onClick={() => setImgZoom(!imgZoom)}
                    >
                        {desconto > 0 && (
                            <div className="product-detail__badge">
                                -{desconto}%
                            </div>
                        )}
                        <Image
                            src={product.images[imagemSelecionada]}
                            alt={product.label}
                            width={500}
                            height={500}
                            className="product-detail__image"
                            priority
                        />
                    </div>

                    {/* Thumbnails */}
                    {product.images.length > 1 && (
                        <div className="product-detail__thumbs">
                            {product.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setImagemSelecionada(index)}
                                    className={`product-detail__thumb ${imagemSelecionada === index ? "product-detail__thumb--active" : ""}`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${product.label} - Variação ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="product-detail__thumb-img"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Informações do Produto */}
                <div className="product-detail__info">
                    {/* Cabeçalho */}
                    <div className="product-detail__header">
                        <span className="product-detail__category">{categorySlug}</span>
                        <h1 className="product-detail__title">{product.label}</h1>
                        <p className="product-detail__description">{product.description}</p>
                    </div>

                    {/* Preço */}
                    <div className="product-detail__pricing">
                        {product.priceOriginal > product.price && (
                            <span className="product-detail__price-original">
                                R$ {product.priceOriginal.toFixed(2)}
                            </span>
                        )}
                        <div className="product-detail__price-row">
                            <span className="product-detail__price">
                                R$ {product.price.toFixed(2)}
                            </span>
                            {desconto > 0 && (
                                <span className="product-detail__discount-tag">
                                    -{desconto}% OFF
                                </span>
                            )}
                        </div>
                        <p className="product-detail__installments">
                            ou 6x de <strong>R$ {parcelamento}</strong> sem juros
                        </p>
                        <div className="product-detail__pix">
                            <span className="product-detail__pix-icon">◉</span>
                            <span>
                                <strong>R$ {(product.price * 0.9).toFixed(2)}</strong> no PIX{" "}
                                <span className="product-detail__pix-discount">(10% off)</span>
                            </span>
                        </div>
                    </div>

                    {/* Divisor */}
                    <div className="product-detail__divider" />

                    {/* Cores */}
                    {product.colors.length > 0 && (
                        <div className="product-detail__section">
                            <label className="product-detail__label">
                                Cor: <strong>{product.colors[corSelecionada].name}</strong>
                            </label>
                            <div className="product-detail__colors">
                                {product.colors.map((color, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCorSelecionada(index);
                                            if (index < product.images.length) {
                                                setImagemSelecionada(index);
                                            }
                                        }}
                                        className={`product-detail__color-btn ${corSelecionada === index ? "product-detail__color-btn--active" : ""}`}
                                        title={color.name}
                                    >
                                        <span
                                            className="product-detail__color-swatch"
                                            style={{ backgroundColor: color.hex }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tamanhos */}
                    {product.sizes.length > 0 && (
                        <div className="product-detail__section">
                            <label className="product-detail__label">Tamanho</label>
                            <div className="product-detail__sizes">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setTamanhoSelecionado(size)}
                                        className={`product-detail__size-btn ${tamanhoSelecionado === size ? "product-detail__size-btn--active" : ""}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Divisor */}
                    <div className="product-detail__divider" />

                    {/* Quantidade + Ações */}
                    <div className="product-detail__actions">
                        <div className="product-detail__quantity">
                            <button
                                onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
                                className="product-detail__qty-btn"
                            >
                                −
                            </button>
                            <span className="product-detail__qty-value">{quantidade}</span>
                            <button
                                onClick={() => setQuantidade(quantidade + 1)}
                                className="product-detail__qty-btn"
                            >
                                +
                            </button>
                        </div>

                        <button
                            className="product-detail__add-to-cart"
                            onClick={() => alert(`${quantidade}x ${product.label} adicionado ao carrinho!`)}
                        >
                            <Image
                                src="/assets/ui/shopping-bag-4-line.png"
                                alt=""
                                width={20}
                                height={20}
                                className="product-detail__cart-icon"
                            />
                            Adicionar ao Carrinho
                        </button>

                        <button
                            onClick={() => setCurtido(!curtido)}
                            className={`product-detail__wishlist ${curtido ? "product-detail__wishlist--active" : ""}`}
                            title="Adicionar aos favoritos"
                        >
                            <Image
                                src={curtido ? "/assets/ui/heart-3-fill.png" : "/assets/ui/heart-3-line.png"}
                                alt="Favoritar"
                                width={22}
                                height={22}
                            />
                        </button>
                    </div>

                    {/* Comprar agora */}
                    <button className="product-detail__buy-now">
                        Comprar Agora
                    </button>

                    {/* Info de entrega */}
                    <div className="product-detail__shipping-info">
                        <div className="product-detail__shipping-item">
                            <Image
                                src="/assets/ui/truck-line.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <span>Frete grátis para o Nordeste acima de R$ 199</span>
                        </div>
                        <div className="product-detail__shipping-item">
                            <Image
                                src="/assets/ui/share-line.png"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <span>Troca e devolução grátis em até 30 dias</span>
                        </div>
                    </div>

                    {/* Detalhes do produto */}
                    <div className="product-detail__details">
                        <h3 className="product-detail__details-title">Detalhes do Produto</h3>
                        <ul className="product-detail__details-list">
                            {product.details.map((detail, index) => (
                                <li key={index} className="product-detail__details-item">
                                    <span className="product-detail__details-check">✓</span>
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
