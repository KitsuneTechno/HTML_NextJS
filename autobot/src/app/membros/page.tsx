import Image from "next/image";
import LogoKitsune from "@/img/logo-kitsune-tech.png";
import Julia from "@/img/integrante-1.png";
import Lucy from "@/img/integrante-2.png";
import Wesley from "@/img/integrante-3.png";
import { FaGithub as GithubLogo } from "react-icons/fa";

export default function Membros(){
    return(
        <div className="contentWrap">

            <div className="flex justify-center">
                <Image 
                src={LogoKitsune} 
                alt="Logo da Kitsune Tech"
                className="block w-60 sm:w-80 md:w-2/4 m-8 pb-44 lg:pb-40"/>
            </div>

            <div className="flex items-center justify-center gap-2 h-7 sm:gap-4 md:gap-8 mb-8">

                <div className="cards">
                    <Image src={Julia} alt="Julia Rebelles"/>
                    <h4>Julia Rebelles</h4>
                    <h5>RM554516</h5>
                    <h5>1TDSPO</h5>
                    <a href="https://github.com/JuliaRebelles05" target="_blank"><GithubLogo size={15}/>JuliaRebelles05</a>
                </div>

                <div className="cards">
                    <Image src={Lucy} alt="Luciayla Kawakami"/>
                    <h4>Luciayla Kawakami</h4>
                    <h5>RM557987</h5>
                    <h5>1TDSPO</h5>
                    <a href="https://github.com/Luciayla24" target="_blank"><GithubLogo size={15}/>Luciayla24</a>
                </div>

                <div className="cards">
                    <Image src={Wesley} alt="Wesley Sena"/>
                    <h4>Wesley Sena</h4>
                    <h5>RM558043</h5>
                    <h5>1TDSPO</h5>
                    <a href="https://github.com/SunaUezuri" target="_blank"><GithubLogo size={15}/>SunaUezuri</a>
                </div>

            </div>

            <a 
            href="https://github.com/KitsuneTechno/HTML_NextJS" 
            target="_blank" className="btnRepository">Repositório da Equipe</a>
            
        </div>
    )
}