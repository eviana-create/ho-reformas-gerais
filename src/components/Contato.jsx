function Contato() {

  return (

    <section
      id="contato"
      className="py-20 px-6 bg-yellow-500"
    >

      <div className="max-w-6xl mx-auto">


        <div className="grid md:grid-cols-2 gap-10 items-center">


          <div>


            <h2 className="text-4xl font-bold text-gray-900">

              Precisa reformar seu imóvel?

            </h2>


            <p className="mt-5 text-lg text-gray-800">

              Solicite um orçamento sem compromisso.
              A HO Reformas Gerais está pronta para
              transformar seu projeto em realidade.

            </p>


            <div className="mt-8 space-y-3">


              <p className="font-bold text-gray-900">
                🧱 Reformas residenciais e comerciais
              </p>


              <p className="font-bold text-gray-900">
                ⚡ Elétrica e hidráulica
              </p>


              <p className="font-bold text-gray-900">
                🎨 Pintura e acabamento
              </p>


            </div>


          </div>



          <div
            className="
            bg-gray-900
            rounded-3xl
            p-8
            text-white
            shadow-xl
            "
          >


            <h3 className="text-2xl font-bold">

              Solicite seu orçamento

            </h3>


            <p className="mt-3 text-gray-300">

              Clique no botão abaixo e fale diretamente pelo WhatsApp.

            </p>



            <a
            href="https://wa.me/5511912039592?text=Olá!%20Encontrei%20a%20HO%20Reformas%20Gerais%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="
            mt-8
            bg-green-600
            hover:bg-green-700
            transition
            w-full
            py-4
            rounded-xl
            font-bold
            text-lg
            flex
            justify-center
            "
            >

            📲 Chamar no WhatsApp

            </a>


          </div>



        </div>


      </div>


    </section>

  )

}


export default Contato