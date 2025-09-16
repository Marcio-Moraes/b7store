import { typeBotaoFooterInfo } from "@/type/botao-footer-info";
import Image from "next/image";



export const FooterButton = ({link, img, label}: typeBotaoFooterInfo) => {    

    return(
        <a 
            href={link}
            className={`border border-gray-700 p-4 rounded-md flex justify-center items-center gap-2 hover:bg-gray-900 ${label == "" ? 'size-15' : ''}`}
        >
            <Image
                src={img}
                width={32}
                height={32}
                className="size-5"
                alt=""
                />
                {label != "" && 
                    <div className="">
                        {label}
                    </div>
                }
        </a>
    )
}