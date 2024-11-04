import Image from "next/image";
import Link from "next/link";
import  facebook  from "@/img/facebook.png"
import  google  from "@/img/google.png"

export default function Login(){
    return(
        <div className="mt-8 border-solid rounded border-2 p-3 mb-16 max-w-[90%]">
            <div className="text-center">
                <h1 className="font-semibold text-2xl">Acessar Conta</h1>
                <p>Preencha seus dados de acesso para continuar</p>
            </div>

            <form className="m-12">
                <fieldset className="pt-8 sm:pt-0 border-none flex flex-col items-center">
                    <input type="text" placeholder="Insira seu usuário ou CPF" required minLength={6} className="inputForm" />

                    <div className="flex flex-col w-full">
                        <input type="password" required minLength={7} placeholder="Insira sua senha" className="inputForm"/>
                        <Link href="#"
                        className="block text-orange-600 no-underline hover:text-blue-600 transition ease-in-out duration-200"
                        >Esqueceu a senha?</Link>
                    </div>

                    <div className="pt-8 sm:pt-4">
                        <button type="submit" className="btn">Entrar</button>
                    </div>
                </fieldset>
            </form>


            <h2 className="pt-8">Ainda não tem conta?</h2>
            <Link href="/cliente/cadastro"
            className="pt-4 block text-orange-600 font-semibold no-underline hover:text-blue-600 transition ease-in-out duration-200"
            >Cadastre-se agora!</Link>

            <ul className="pt-16 list-none flex items-center justify-around">
                <li>
                    <Link href="#" className="logarCom">
                        <Image src={facebook} alt="Logo Facebook"/>
                        Entrar com o Facebook
                    </Link>
                </li>

                <li>
                    <Link href="#" className="logarCom">
                        <Image src={google} alt="Logo Google"/>
                        Entrar com o Google
                    </Link>
                </li>
            </ul>
        </div>
    )
}