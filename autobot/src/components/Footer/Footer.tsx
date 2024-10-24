import Image from "next/image";
import logoKitsune from "@/img/logo-kitsune-tech.png";
import { FaInstagram as InstagramLogo, FaWhatsappSquare as WhatsapLogo } from "react-icons/fa";
import { FaFacebookSquare as FacebookLogo } from "react-icons/fa";

export default function Footer(){
    return(
        <footer className="w-full text-footerColor">
            <div>
                <div className="bg-zinc-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                    <div>
                        <span>
                            <Image 
                                src={logoKitsune} 
                                alt="Logo Kitsune Tech"
                                className="w-1/2"/>
                        </span>
                        <p className="gap-4 mb-6">Em prol da agilidade.</p>

                        <div className="flex">
                            <a href="#"><InstagramLogo className="text-instagramColor text-3xl"/></a>
                            <a href="#"><FacebookLogo className="text-facebookColor text-3xl"/></a>
                            <a href="#"><WhatsapLogo className="text-whatsappColor text-3xl"/></a>
                        </div>
                        
                    </div>

                </div>
            </div>
        </footer>
    )
}