"use client";

import logoAutobot from "@/img/logo-autobot.png"
import Image from 'next/image'
import Link from 'next/link'
import '../../app/globals.css';
import { useState } from "react";
import { IoMenu as Burguer, IoClose as CloseBtn } from "react-icons/io5";

export default function Menu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="navegacao">

            <div>
                <Link href={"/"} >
                    <Image
                        src={logoAutobot}
                        alt="Logo autobot"
                        width={250} />
                </Link>
            </div>
            
            
            <div className="hidden md:flex">
                <ul>
                    <li 
                    className="transition ease-in-out hover:text-orange-600 duration-200 md:text-sm">
                        <Link href={"/chatbot"}>Chatbot</Link></li>
                    <li 
                    className="transition ease-in-out hover:text-orange-600 duration-200 md:text-sm">
                        <Link href={"/mecanicas"}>Mecânicas</Link></li>
                    <li 
                    className="transition ease-in-out hover:text-orange-600 duration-200 md:text-sm">
                        <Link href={"/sobre"}>Sobre nós</Link></li>
                    <li 
                    className="transition ease-in-out hover:text-orange-600 duration-200 md:text-sm">
                        <Link href={"/membros"}>Membros</Link></li>
                    <li className="md:navButton"><Link href={"/cliente"}>Área do Cliente</Link></li>
                </ul>
            </div>

            <button onClick={toggleMenu} className="block md:hidden">
                {
                    isOpen ? <CloseBtn/> : <Burguer/>
                }
            </button>
            
            {
                isOpen && (
                    <div className="flex flex-col-reverse justify-between basis-full items-center py-3 bg-gray-100">
                        <ul>
                            <li 
                            className="transition ease-in-out hover:bg-orange-600 rounded duration-200">
                                <Link href={"/chatbot"}>Chatbot</Link></li>
                            <li 
                            className="transition ease-in-out hover:bg-orange-600 rounded duration-200">
                                <Link href={"/mecanicas"}>Mecânicas</Link></li>
                            <li 
                            className="transition ease-in-out hover:bg-orange-600 rounded duration-200">
                                <Link href={"/sobre"}>Sobre nós</Link></li>
                            <li 
                            className="transition ease-in-out hover:bg-orange-600 rounded duration-200">
                                <Link href={"/membros"}>Membros</Link></li>
                            <li className="transition ease-in-out hover:bg-orange-600 rounded duration-200"><Link href={"/cliente"}>Área do Cliente</Link></li>
                        </ul>
                    </div>
                )
            }

        </nav>
    )
}