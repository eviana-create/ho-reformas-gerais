function Localizacao() {

  return (

    <section
      className="
      py-24
      px-6
      bg-gray-900
      text-white
      "
    >

      <div className="container-site">


        <div className="grid md:grid-cols-2 gap-12 items-center">


          <div>


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
              📍 Área de Atendimento
            </span>



            <h2
              className="
              mt-6
              text-4xl
              font-bold
              "
            >

              Reformas no ABC Paulista

            </h2>



            <p
              className="
              mt-5
              text-gray-300
              text-lg
              "
            >

              A HO Reformas Gerais atende clientes
              residenciais e comerciais com serviços
              de reforma, manutenção e acabamento.

            </p>



            <ul className="
            mt-8
            space-y-3
            text-gray-200
            ">

              <li>
                ✅ São Bernardo do Campo
              </li>

              <li>
                ✅ Santo André
              </li>

              <li>
                ✅ São Caetano do Sul
              </li>

              <li>
                ✅ Diadema e região
              </li>

            </ul>



          </div>




          <div
            className="
            bg-gray-800
            rounded-3xl
            p-8
            shadow-xl
            "
          >


            <h3 className="text-2xl font-bold">

              Solicite uma visita

            </h3>



            <p className="mt-4 text-gray-300">

              Envie uma mensagem pelo WhatsApp
              e agende uma avaliação do seu projeto.

            </p>



            <a
              href="https://wa.me/5511912039592?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20para%20avaliar%20uma%20reforma."
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              text-center
              mt-8
              bg-green-600
              hover:bg-green-700
              py-4
              rounded-xl
              font-bold
              transition
              "
            >

              📲 Agendar Visita

            </a>


          </div>


        </div>


      </div>


    </section>

  )

}


export default Localizacao