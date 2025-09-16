"use client"

import Image from "next/image"
import { FiltroItem } from "./filtro-item"
import { useState } from "react"

type Props = {
    id: string;
    name: string;
}

export const FiltroGrupo = ({ id, name }: Props) => {
    const [aberto, setAberto] = useState(true);

    return(
        <div className="mb-8">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
                <div className="flex-1 font-bold text-xl">{name}</div>
                <div 
                    onClick={()=> setAberto(!aberto)}
                    className="size-8 flex justify-center items-center cursor-pointer"
                >
                    <Image
                        src={'/assets/ui/arrow-left-s-line.png'}
                        alt=""
                        width={24}
                        height={24}
                        className={`${aberto ? 'rotate-0' : 'rotate-180'} transition-all`}
                    />
                </div>
            </div>
            <div className={`overflow-y-hidden ${aberto ? 'max-h-96' : 'max-h-0'} transition-all`}>
                <FiltroItem grupoId={id} item={{id: 'node', label: 'NodeJS'}} />
                <FiltroItem grupoId={id} item={{id: 'react', label: 'ReactJS'}} />
                <FiltroItem grupoId={id} item={{id: 'rn', label: 'React Native'}} />
            </div>
        </div>
    )
}