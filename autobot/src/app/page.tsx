import Section from "@/components/Section/Section";

export default function Home() {
  return (
    <>

      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-1/3">
          <h3 className="mb-4 pt-8 md:text-lg">Seguro Auto</h3>
          <h1 className="uppercase text-base font-semibold mb-4 sm:text-4xl md:text-5xl">
            Faça Faça o diagnóstico, orçamento e agendamento do seu auto sem sair de casa!
          </h1>
          <p className="mb-12 text-xs md:text-xl">Com nosso AutoBot, você identifica o problema do seu veículo, recebe o orçamento dos serviços e agenda a manutenção dele em minutos.</p>
        </div>
      </div>

      <Section/>

    </>
  )
}