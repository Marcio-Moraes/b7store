"use client"

import { useQueryString } from "@/hooks/use-querystring";

type Props = {
    grupoId: string;
    item: {
        id: string;
        label: string;
    }    
}

export const FiltroItem = ({grupoId, item}: Props) => {
    const queryString = useQueryString();

    const toggleFiltro = (grupoId: string, itemId: string) => {

    }

    return(
        <div className="flex items-center gap-4 mt-4">
            <div className="">
                <input 
                    type="checkbox" 
                    className="size-6" 
                    id={`ck-${item.id}`} 
                    onChange={()=> toggleFiltro(grupoId, item.id)}
                />
            </div>
            <label htmlFor={`ck-${item.id}`} className="text-lg text-gray-500">
                {item.label}
            </label>
        </div>
    );
}