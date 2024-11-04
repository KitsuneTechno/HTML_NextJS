"use client";
import { TipoMecanicas } from "@/types";
import { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";

export default function Card(){

    const [mecanicas, setMecanicas] = useState<TipoMecanicas[]>([]);
    const [loading, setLoading] = useState(true);

    const chamadaDaApi = async () => {
        const response = await fetch("http://localhost:3000/api/mecanicas");
        const dados = await response.json();
        setMecanicas(dados);
        setLoading(false);
    };

    useEffect(() => {
        chamadaDaApi();
    }, []);

    if (loading) {
        return <Spinner/>;
    }

    return(
        <>
            {mecanicas.map(m => (
                <div 
                key={m.id} 
                className="containerCard"
                >
                    <h3>{m.nome}</h3>

                    <div className="block text-[0.9rem]">
                        <p>{m.endereco}</p>
                        <p>{m.telefone}</p>
                        <p>{m.email}</p>
                    </div>
                    

                    <div className="linkPorto">
                        <a href="#">Agende agora!</a>
                    </div>
                </div>
            ))}
        </>
    )
}