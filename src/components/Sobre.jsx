const diferenciais = [
  {
    icon: "🏆",
    titulo: "Experiência e Qualidade",
    descricao:
      "Serviços executados com atenção aos detalhes e acabamento profissional.",
  },

  {
    icon: "⏱️",
    titulo: "Compromisso com Prazo",
    descricao:
      "Planejamento e organização para entregar sua reforma com responsabilidade.",
  },

  {
    icon: "🛠️",
    titulo: "Serviço Completo",
    descricao:
      "Do pequeno reparo até reformas completas de ambientes.",
  },

  {
    icon: "💰",
    titulo: "Orçamento Transparente",
    descricao:
      "Avaliação clara do serviço antes do início da obra.",
  },
];


function Sobre() {

  return (

    <section className="py-20 px-6 bg-gray-900 text-white">

      <div className="container-site">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">

            Por que escolher a HO Reformas?

          </h2>


          <p className="mt-4 text-gray-300 text-lg">

            Profissionalismo, cuidado e qualidade em cada etapa da obra.

          </p>

        </div>



        <div className="grid md:grid-cols-4 gap-6">


          {diferenciais.map((item, index) => (

            <div
              key={index}
              className="
              bg-gray-800
              p-6
              rounded-2xl
              hover:bg-gray-700
              transition
              "
            >


              <div className="text-5xl mb-4">

                {item.icon}

              </div>


              <h3 className="text-xl font-bold">

                {item.titulo}

              </h3>


              <p className="mt-3 text-gray-300">

                {item.descricao}

              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  )

}


export default Sobre