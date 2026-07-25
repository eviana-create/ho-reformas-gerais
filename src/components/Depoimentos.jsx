const depoimentos = [
  {
    nome: "Carlos Oliveira",
    texto:
      "Excelente profissional. Reformou minha cozinha com muito cuidado e entregou tudo conforme combinado.",
    estrelas: 5,
  },

  {
    nome: "Mariana Souza",
    texto:
      "Serviço muito bem feito, organizado e com ótimo acabamento. Recomendo!",
    estrelas: 5,
  },

  {
    nome: "João Ferreira",
    texto:
      "Fez pintura, elétrica e alguns reparos na minha casa. Ficou excelente.",
    estrelas: 5,
  },
];


function Depoimentos() {

  return (

    <section
      className="
      py-24
      px-6
      bg-white
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
            Clientes satisfeitos
          </span>


          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-gray-900
            "
          >
            O que nossos clientes dizem
          </h2>


          <p className="mt-4 text-gray-600 text-lg">

            Qualidade e compromisso em cada reforma realizada.

          </p>


        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {depoimentos.map((item,index)=>(

            <div
              key={index}
              className="
              bg-gray-50
              rounded-3xl
              p-8
              shadow-md
              hover:shadow-xl
              transition
              "
            >


              <div className="text-yellow-500 text-2xl">

                {"⭐".repeat(item.estrelas)}

              </div>



              <p
                className="
                mt-5
                text-gray-600
                italic
                "
              >

                "{item.texto}"

              </p>



              <h3
                className="
                mt-6
                font-bold
                text-gray-900
                "
              >

                {item.nome}

              </h3>


            </div>


          ))}


        </div>


      </div>


    </section>

  )

}


export default Depoimentos