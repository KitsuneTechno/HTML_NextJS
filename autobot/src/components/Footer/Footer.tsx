import Image from "next/image";
import logoKitsune from "@/img/logo-kitsune-tech.png";
import { FaInstagram as InstagramLogo, FaWhatsappSquare as WhatsapLogo } from "react-icons/fa";
import { FaFacebookSquare as FacebookLogo } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-footerColor">
      <div>
        <div className="bg-zinc-900 grid grid-cols-1 md:grid-cols-2 p-4">

          <div className="flex flex-col items-start">
            <span>
              <Image
                src={logoKitsune}
                alt="Logo Kitsune Tech"
                className="w-40 md:w-1/4 block"
              />
            </span>
            <p className="gap-4 mb-6 text-sm md:text-base">Em prol da agilidade.</p>

            <div className="flex space-x-2">
              <a href="#"><InstagramLogo className="text-instagramColor text-lg md:text-3xl" /></a>
              <a href="#"><FacebookLogo className="text-facebookColor text-lg md:text-3xl" /></a>
              <a href="#"><WhatsapLogo className="text-whatsappColor text-lg md:text-3xl" /></a>
            </div>
          </div>

          <div className="flex justify-between">
            <ul className="footerList items-center">
              <li className="font-bold mb-2">Blog</li>
              <li><a href="#">Tech</a></li>
              <li><a href="#">Notícias</a></li>
              <li><a href="#">Música</a></li>
            </ul>

            <ul className="footerList items-center">
              <li className="font-bold mb-2">Produtos</li>
              <li><a href="#">App</a></li>
              <li><a href="#">Desktop</a></li>
              <li><a href="#">Cloud</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
