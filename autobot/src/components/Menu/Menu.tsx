import logoAutobot from "@/img/logo-autobot.png"
import Image from 'next/image'
import Link from 'next/link'

export default function Menu() {
    return (
        <nav className="navegacao">

            <Link href={"/"} >
                <Image
                    src={logoAutobot}
                    alt="Logo autobot"
                    width={250} />
            </Link>

            <ul>
                <li><Link href={"/chatbot"}>Chatbot</Link></li>
                <li><Link href={"/mecanicas"}>Mecanicas</Link></li>
                <li><Link href={"/sobre"}>Sobre nós</Link></li>
                <li><Link href={"/membros"}>Chatbot</Link></li>
                <li><Link href={"/cliente"}>Área do Cliente</Link></li>
            </ul>
        </nav>
    )
}