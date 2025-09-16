"use client"

type Props = {
    grupoId: string;
    item: {
        id: string;
        label: string;
    }    
}

export const FiltroItem = ({grupoId, item}: Props) => {
    return(
        <div className="flex items-center gap-4 mt-4">
            <div className="">
                <input type="checkbox" className="size-6" id={`ck-${item.id}`} />
            </div>
            <label htmlFor={`ck-${item.id}`} className="text-lg text-gray-500">
                {item.label}
            </label>
        </div>
    );
}