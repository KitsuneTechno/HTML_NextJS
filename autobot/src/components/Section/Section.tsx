import Link from "next/link";

export default function Section(){
    return(
        <section className="bg-orange-600 p-8">
            <h3 className="text-white text-2xl md:text-4xl uppercase text-center">Tudo apenas usando o celular!</h3>

            <div className="flex flex-row items-start justify-start md:items-center md:justify-center">
                <ol className="list-none flex flex-col gap-4">
                    <li className="styleButton"><Link href={"cliente/login"}></Link></li>

                </ol>
            </div>
        </section>
    )
}