const servicos = [
  {
    icon: "🧱",
    titulo: "Reformas Gerais",
    descricao:
      "Reformas completas de casas, apartamentos e comércios com qualidade e acabamento profissional.",
  },

  {
    icon: "🚰",
    titulo: "Hidráulica",
    descricao:
      "Instalações, reparos, vazamentos, encanamentos e melhorias hidráulicas.",
  },

  {
    icon: "⚡",
    titulo: "Elétrica",
    descricao:
      "Manutenção elétrica, instalações, tomadas, iluminação e adequações.",
  },

  {
    icon: "🎨",
    titulo: "Pintura",
    descricao:
      "Pintura interna e externa, preparação de paredes e acabamento fino.",
  },

  {
    icon: "🔨",
    titulo: "Demolições",
    descricao:
      "Remoção de paredes, pisos, revestimentos e preparação para reformas.",
  },

  {
    icon: "🚛",
    titulo: "Retirada de Entulho",
    descricao:
      "Limpeza do ambiente e retirada de resíduos após a execução da obra.",
  },
];


function Servicos() {

  return (

    <section
      id="servicos"
      className="py-20 px-6 bg-white"
    >

      <div className="container-site">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900">

            Nossos Serviços

          </h2>


          <p className="mt-4 text-gray-600 text-lg">

            Soluções completas para transformar seu ambiente.

          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {servicos.map((servico, index) => (

         <div
            key={index}
            className="
            group
            bg-white
            p-8
            rounded-3xl
            shadow-lg
            border
            border-gray-100
            hover:-translate-y-2
            hover:shadow-2xl
            transition-all
            duration-300
            "
          >


              <div
                className="
                text-5xl
                mb-6
                group-hover:scale-110
                transition
                "
              >

                {servico.icon}

              </div>


              <h3 className="text-2xl font-bold text-gray-900">

                {servico.titulo}

              </h3>


              <p className="mt-4 text-gray-600">

                {servico.descricao}

              </p>

              <a
                href="https://wa.me/5511912039592?text=Olá!%20Gostaria%20de%20informações%20sobre%20um%20serviço%20de%20reforma."
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-block
                mt-6
                text-yellow-600
                font-bold
                hover:text-yellow-700
                "
              >

                Solicitar orçamento →

              </a>


            </div>

          ))}


        </div>


      </div>


    </section>

  )

}


export default Servicos