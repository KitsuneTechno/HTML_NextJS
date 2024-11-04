import autobot from "@/img/autobot-cabeca.png";
import Image from "next/image";

export default function Chatbot() {
    return (
        <div className="border-solid border-2 rounded border-gray-500 p-4
        mb-16 h-[40rem] flex flex-col items-start">
            <div className="mt-8 h-full">
                <div className="mensagemBot">
                    <Image src={autobot} alt="Imagem do autobot" />
                    <p>Olá! Bem-vindo, eu sou o AutoBot, como posso ajudar você hoje?</p>
                </div>
            </div>

            <textarea className="resize-none p-4 text-base border-solid border-2 rounded border-gray-400 w-full"
                rows={1}
                placeholder="Você pode escrever aqui">
            </textarea>
        </div>
    )
}