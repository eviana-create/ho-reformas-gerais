const obras = [
  {
    imagem: "/obras/obra1.jpg",
    titulo: "Reforma de Ambiente",
    descricao: "Transformação completa com acabamento moderno.",
  },

  {
    imagem: "/obras/obra2.jpg",
    titulo: "Pintura Residencial",
    descricao: "Pintura interna com acabamento profissional.",
  },

  {
    imagem: "/obras/obra3.jpg",
    titulo: "Reforma de Banheiro",
    descricao: "Modernização hidráulica e revestimentos.",
  },

  {
    imagem: "/obras/obra4.jpg",
    titulo: "Melhoria Estrutural",
    descricao: "Adequações e preparação do ambiente.",
  },
];


function Galeria() {

  return (

    <section
      id="galeria"
      className="py-20 px-6 bg-gray-50"
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-gray-900">

            Obras Realizadas

          </h2>


          <p className="mt-4 text-gray-600 text-lg">

            Confira alguns trabalhos realizados pela HO Reformas Gerais.

          </p>


        </div>



        <div className="grid md:grid-cols-4 gap-6">


          {obras.map((obra, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              transition
              "
            >


              <img
                src={obra.imagem}
                alt={obra.titulo}
                className="
                w-full
                h-56
                object-cover
                "
              />


              <div className="p-5">


                <h3 className="text-xl font-bold text-gray-900">

                  {obra.titulo}

                </h3>


                <p className="mt-2 text-gray-600">

                  {obra.descricao}

                </p>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>

  )

}


export default Galeria