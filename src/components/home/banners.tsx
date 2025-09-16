"use client"

import { banner } from "@/type/banners"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


type Props = {
    list: banner[];
}

let bannerTimer: NodeJS.Timeout;
let bannerTime = 3000;


export const Banners = ({ list }:Props) => {
    const [imageAtual, setImageAtual] = useState(0);

    const proximaImage = () => {
        setImageAtual(imageAtual => {
            if(imageAtual + 1 >= list.length)  {
                return 0;
            } else {
                return imageAtual + 1;
            }
        });
    }

    const handleBannerClick = (indexB: number) =>{
        setImageAtual(indexB);
        clearInterval(bannerTimer);
        bannerTimer = setInterval(proximaImage, bannerTime);
    }

    useEffect(() => {
        bannerTimer = setInterval(proximaImage, bannerTime);
        return () => clearInterval(bannerTimer);
    }, []);

    return(
        <div className="">
            <div className="relative aspect-[3/1]">
                {list.map((banner, indexB) => (
                    <Link 
                        key={indexB} 
                        href={banner.link}
                        className="transition-all absolute inset-0"
                        style={{
                            opacity: imageAtual === indexB ? 1: 0,
                            display: imageAtual === indexB ? 'block': 'none',
                        }}
                    >
                        <Image
                            src={banner.img}
                            alt=""
                            width={1200}
                            height={400}
                            className="rounded-sm"
                        />
                    </Link>
                ))}
            </div>
            <div className="mt-7 flex justify-center gap-4">
                {list.map((banner, indexB)=>(
                    <div 
                        key={indexB}
                        className="size-4 bg-blue-600 rounded-full cursor-pointer"
                        style={{ opacity: imageAtual === indexB ? 1: 0.3, }}
                        onClick={()=> handleBannerClick(indexB)}
                    >

                    </div>
                ))}
            </div>
        </div>
    )
}