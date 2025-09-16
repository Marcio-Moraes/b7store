import { HeaderInfoLoja } from "./header-info-loja"

export const HeaderInfoLista = () => {
    return(
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 mt-6 md:mt-12">
            <HeaderInfoLoja
                src="/assets/ui/truck-line.png"
                titulo="Frete Grátis"
                subtitulo="Para todo o Nordeste."
             />

            <HeaderInfoLoja
                src="/assets/ui/discount-percent-line.png"
                titulo="Muitas ofertas"
                subtitulo="Ofertas imbatíveis."
             />

            <HeaderInfoLoja
                src="/assets/ui/arrow-left-right-line.png"
                titulo="Troca Fácil"
                subtitulo="No período de 30 dias."
             />
            
        </div>
    )
}