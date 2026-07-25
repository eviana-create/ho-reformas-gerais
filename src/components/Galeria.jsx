const obras = [

  {
    imagem: "/imagens/obras/banheiro.jpg",
    titulo: "Reforma de Banheiros",
    descricao:
      "Modernização completa com hidráulica, revestimentos e acabamento."
  },


  {
    imagem: "/imagens/obras/pintura.jpg",
    titulo: "Pintura Residencial",
    descricao:
      "Renovação de ambientes com pintura profissional."
  },


  {
    imagem: "/imagens/obras/eletrica.jpg",
    titulo: "Instalações Elétricas",
    descricao:
      "Manutenção e melhorias elétricas com segurança."
  },


  {
    imagem: "/imagens/obras/reforma-geral.jpg",
    titulo: "Reformas Gerais",
    descricao:
      "Transformação completa de ambientes residenciais."
  }

];



function Galeria() {


  return (


    <section
      id="galeria"
      className="
      py-24
      bg-gray-100
      "
    >


      <div className="container-site">



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
            Nossas Obras
          </span>



          <h2
            className="
            mt-6
            text-4xl
            font-extrabold
            text-gray-900
            "
          >

            Projetos realizados

          </h2>



          <p
            className="
            mt-4
            text-gray-600
            text-lg
            "
          >

            Confira alguns serviços realizados pela HO Reformas Gerais.

          </p>


        </div>




        <div
          className="
          grid
          md:grid-cols-4
          gap-8
          "
        >



          {obras.map((obra,index)=>(


            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:-translate-y-2
              transition
              "
            >


              <div className="overflow-hidden">


                <img
                  src={obra.imagem}
                  alt={obra.titulo}
                  className="
                  w-full
                  h-64
                  object-cover
                  hover:scale-110
                  transition
                  duration-500
                  "
                />


              </div>




              <div className="p-6">


                <h3
                  className="
                  text-xl
                  font-bold
                  text-gray-900
                  "
                >

                  {obra.titulo}

                </h3>



                <p
                  className="
                  mt-3
                  text-gray-600
                  "
                >

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