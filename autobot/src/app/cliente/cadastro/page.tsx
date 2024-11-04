"use client";
import { TipoCliente } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cadastro(){

    const navigate = useRouter();

    const[cliente, setCliente] = useState<TipoCliente>({
        nome: "",
        dataNascimento: "",
        genero: "",
        cpf: "",
        rg: "",
        cnh: "",
        endereco: "",
        telefone: "",
        email: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setCliente({...cliente, [name]: value})
    }

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:3000/api/clientes/", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cliente)
            });

            if(response.ok) {
                alert("Cliente cadastrado com sucesso!");
                setCliente({
                    nome: "",
                    dataNascimento: "",
                    genero: "",
                    cpf: "",
                    rg: "",
                    cnh: "",
                    endereco: "",
                    telefone: "",
                    email: ""
                });

                navigate.push("/cliente/login");

            }

        } catch(e) {
            console.error("Falha no cadastro: ", e);

        }

    }

    return(
        <div className="mt-8 border-solid rounded border-2 p-3 mb-16 max-w-[90%]">
            <div className="text-center">
                <h1 className="font-semibold text-2xl">Cadastro</h1>
                <p>Insira seus dados para criar uma conta</p>
            </div>

            <form className="m-12" onSubmit={handleSubmit}>
                <fieldset className="pt-8 sm:pt-0 border-none flex flex-col items-center">

                    <input type="text" placeholder="Insira seu nome" name="nome" onChange={(e)=> handleChange(e)}
                     id="idNm" value={cliente.nome} className="inputForm" required/>

                    <input type="text" name="dataNascimento" onChange={(e)=> handleChange(e)}
                     id="idDtNasc" value={cliente.dataNascimento} className="inputForm" required/>

                    <input type="text" placeholder="Insira seu genero(f,m)" name="genero" onChange={(e)=> handleChange(e)}
                     id="idGn" value={cliente.genero} className="inputForm" required/>

                    <input type="text" placeholder="Insira seu CPF" name="cpf" onChange={(e)=> handleChange(e)}
                     id="idCpf" value={cliente.cpf} className="inputForm" required/>

                    <input type="text" placeholder="Insira seu RG" name="rg" onChange={(e)=> handleChange(e)}
                     id="idRg" value={cliente.rg} className="inputForm" required/>

                    <input type="text" placeholder="Insira o número da sua CNH" name="cnh" onChange={(e)=> handleChange(e)}
                     id="idCnh" value={cliente.cnh} className="inputForm" required/>

                    <input type="text" placeholder="Insira seu endereço" name="endereco" onChange={(e)=> handleChange(e)}
                     id="idEnd" value={cliente.endereco} className="inputForm" required/>

                    <input type="text" placeholder="Insira um telefone para contato" name="telefone" onChange={(e)=> handleChange(e)}
                     id="idFone" value={cliente.telefone} className="inputForm" required/>

                    <input type="email" placeholder="Insira seu email" name="email" onChange={(e)=> handleChange(e)}
                     id="idMail" value={cliente.email} className="inputForm" required/>

                    <div className="pt-8 sm:pt-4">
                        <button className="btn" type="submit">Cadastrar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}