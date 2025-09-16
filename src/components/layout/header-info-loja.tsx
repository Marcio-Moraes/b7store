import Image from "next/image"

type Props = {
    src: string;
    titulo: string;
    subtitulo: string;
}

export const HeaderInfoLoja = ({src, titulo, subtitulo}: Props) => {
    return(
        <div className="flex flex-1 py-6 border border-gray-200 rounded-sm">
            <div className="w-32 flex justify-center items-center border-r border-gray-200">
            <Image
                src={src}
                alt=""
                width={40}
                height={40}
                className=""
            />
            </div>
            <div className="flex-1 pl-8">
                <div className="font-bold uppercase text-xl">{titulo}</div>
                <div className="text-gray-500">{subtitulo}</div>
            </div>
        </div>
    )
}