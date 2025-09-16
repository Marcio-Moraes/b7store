import Image from "next/image"
import { FooterButton } from "./footer-button"
import { menu } from "@/data-menu"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="">
            <div className="bg-white py-20">
                <div className="w-full max-w-6xl m-auto p-6 flex flex-col md:flex-row justify-between gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-5 w-full">
                        <div className="">
                            <Image
                                src={`/assets/ui/mail-send-line.png`}
                                width={72}
                                height={72}
                                alt=""
                                className="size-18" />
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-bold mb-3 md:mb-2 text-center md:text-left">Fique por dentro das promoções</h3>
                            <p className="mb-2 text-center md:text-left">Coloqoue seu e-mail e seja o primeiro a saber</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <form 
                            action="" 
                            className="flex flex-col md:flex-row gap-3 md:gap-5"
                        >
                            <input 
                                type="text"
                                placeholder="Qual seu e-mail ?" 
                                className="w-full py-5 px-5 border outline-0 border-gray-200 rounded-md"
                            />
                            <button className="cursor-pointer bg-blue-600 text-white py-5 px-6 rounded-md w-full md:max-w-38 hover:opacity-92">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white py-2.5">
                <div className="w-full max-w-6xl m-auto p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center py-10 border-b border-gray-700">
                        <div className="">
                            <Image
                                src={`/assets/ui/logo-white.png`}
                                width={144}
                                height={48}
                                alt={"B7Store"} />
                        </div>
                        <div className="">
                            {menu.map((item, index)=>(
                                <li key={index}>
                                    <Link key={index} href={item.href} className="hover:text-blue-600">
                                        {item.label}                          
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="py-10 flex flex-col md:flex-row justify-between border-b border-gray-700">
                        <div className="">
                            <h3 className="font-semibold text-center mt-6 md:mt-0 md:text-left mb-6">Precisa de ajuda?</h3> 

                            <div className="flex flex-wrap justify-center md:flex-nowrap gap-5 w-full">
                                <FooterButton 
                                    link="#"
                                    img="/assets/ui/mail-line.png"
                                    label="marciomoraes.cdd@gmail.com"
                                />
                                <FooterButton 
                                    link="tel:+5581986709660"
                                    img="/assets/ui/phone-line.png"
                                    label="(81) 9 8670-9660"
                                />
                            </div>
                        </div>
                        <div className="">
                            <h3 className="font-semibold text-center mt-6 md:mt-0 md:text-left mb-6">Acompanhe nas redes sociais</h3>
                            <div className="flex justify-center gap-5">
                                <FooterButton 
                                    link="#"
                                    img="/assets/ui/instagram-line.png"
                                    label=""
                                />

                                <FooterButton 
                                    link="#"
                                    img="/assets/ui/linkedin-line.png"
                                    label=""
                                />

                                <FooterButton 
                                    link="#"
                                    img="/assets/ui/facebook-line.png"
                                    label=""
                                />

                                <FooterButton 
                                    link="#"
                                    img="/assets/ui/twitter-x-fill.png"
                                    label=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="py-10 flex gap-6 flex-col md:flex-row justify-between items-center">
                        <div className="w-full">
                            <p>Se você leu isso aqui, saiba que está no caminho certo!</p>
                            <p>Continue estudando e você chegará lá...</p>
                        </div>
                        <div className="w-full flex justify-end">
                            <FooterButton 
                                link="#"
                                img="/assets/ui/arrow-up-line.png"
                                label=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}