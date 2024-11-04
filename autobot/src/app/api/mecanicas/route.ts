import { NextResponse } from "next/server";

export async function GET(){

    try{

        const response = await fetch("http://localhost:8080/mecanicas");
        const data = await response.json();
        return NextResponse.json(data);

    } catch(e){
        console.error("Falha na obtenção de dados: ", e);
        return NextResponse.json({ message: "Falha na obtenção de dados: " + e}, { status:500});
    }
}