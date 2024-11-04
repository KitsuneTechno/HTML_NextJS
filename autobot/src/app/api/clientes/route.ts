import { NextResponse } from "next/server";

export async function POST(request: Request) {
    
    try {

        const response = await fetch("http://localhost:8080/clientes")

        const result = await response.json();
        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error("Erro ao processar cadastro:", error);
        return NextResponse.json({ error: "Erro ao processar cadastro" }, { status: 500 });
    }
}
