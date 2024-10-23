"use client";

import logoAutobot from "@/img/logo-autobot.png"
import Image from 'next/image'
import Link from 'next/link'
import '../../app/globals.css';
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

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
                    <Link href={"/membros"}>Chatbot</Link></li>
                <li className="navButton"><Link href={"/cliente"}>Área do Cliente</Link></li>
            </ul>
            
        </nav>
    )
}