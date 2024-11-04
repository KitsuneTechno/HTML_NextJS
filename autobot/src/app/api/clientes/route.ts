import { TipoCliente } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request:Request) {

    try {
        const {nome, dataNascimento, genero, cpf, rg, cnh, endereco, telefone, email} = await request.json();
        const client = {nome, dataNascimento, genero, cpf, rg, cnh, endereco, telefone, email} as TipoCliente;


        const response = await fetch("http://localhost:8080/clientes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        });

        

        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        console.error("Erro ao processar cadastro:", error);
        return NextResponse.json({ error: "Erro ao processar cadastro" }, { status: 500 });
    }
}
