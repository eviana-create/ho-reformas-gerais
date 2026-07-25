const etapas = [
  {
    numero: "01",
    titulo: "Avaliação do Local",
    descricao:
      "Analisamos o ambiente, entendemos sua necessidade e identificamos a melhor solução.",
  },

  {
    numero: "02",
    titulo: "Orçamento Detalhado",
    descricao:
      "Apresentamos os serviços necessários com clareza e transparência.",
  },

  {
    numero: "03",
    titulo: "Execução da Reforma",
    descricao:
      "Realizamos o trabalho com organização, qualidade e atenção aos detalhes.",
  },

  {
    numero: "04",
    titulo: "Entrega Final",
    descricao:
      "Entregamos o ambiente renovado pronto para ser aproveitado.",
  },
];


function Processo() {

  return (

    <section className="
      py-24
      px-6
      bg-gray-100
    ">

      <div className="
       container-site
      ">


        <div className="text-center mb-14">

          <span
            className="
            bg-yellow-500
            text-black
            px-4
            py-2
            rounded-full
            font-bold
            "
          >
            Nosso Processo
          </span>


          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-gray-900
            "
          >
            Como funciona nossa reforma?
          </h2>


          <p className="
            mt-4
            text-gray-600
            text-lg
          ">

            Do planejamento até a entrega final,
            cuidamos de cada etapa.

          </p>

        </div>



        <div className="
          grid
          md:grid-cols-4
          gap-8
        ">


          {etapas.map((etapa,index)=>(

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:-translate-y-2
              transition
              "
            >


              <div
                className="
                text-5xl
                font-bold
                text-yellow-500
                "
              >
                {etapa.numero}
              </div>


              <h3
                className="
                mt-5
                text-xl
                font-bold
                text-gray-900
                "
              >

                {etapa.titulo}

              </h3>


              <p
                className="
                mt-4
                text-gray-600
                "
              >

                {etapa.descricao}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  )

}


export default Processo