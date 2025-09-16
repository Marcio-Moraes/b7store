"use client"

import { Produto } from "@/type/produto"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
    data: Produto;
}

export const ProdutoItem = ({data}: Props) => {
    const [curtido, setCurtido] = useState(data.liked);
    const link = `/product/${data.id}`;

    const toggleCurtido = () => {
        setCurtido(!curtido);
    }

    return(
        <div className="bg-white border border-gray-200 rounded-sm p-6">
            <div className="w-full flex justify-end mb-3">
                <div onClick={toggleCurtido} className="cursor-pointer size-12 border border-gray-200 rounded-sm flex justify-center items-center">
                    {curtido &&
                        <Image
                            src={'/assets/ui/heart-3-fill.png'}
                            alt="Heart Fill"
                            width={24}
                            height={24}
                            className="size-6"
                        />
                    }

                    {!curtido &&
                        <Image
                            src={'/assets/ui/heart-3-line.png'}
                            alt="Heart Line"
                            width={24}
                            height={24}
                            className="size-6"
                        />
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <Link href={link}>
                    <Image
                        src={data.img}
                        width={200}
                        height={200}
                        className="max-w-full h-48"
                        alt={data.label}
                    />
                </Link>
            </div>
            <div className="mt-9 text-lg font-bold"><Link href={link}>{data.label}</Link></div>
            <div className="mt-3 text-2xl font-bold text-blue-600"><Link href={link}>R$ {data.price.toFixed(2)}</Link></div>
            <div className="mt-5 text-gray-400">Em até 12x no cartão</div>
        </div>
    )
}