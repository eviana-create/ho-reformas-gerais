function Hero() {

  return (

    <section
      className="
      relative
      min-h-[700px]
      pt-24
      flex
      items-center
      bg-cover
      bg-center
      "
      style={{
        backgroundImage:
          "url('/imagens/hero-reformas.jpg')"
      }}
    >

      {/* Camada escura + degradê */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/80
        via-black/60
        to-black/40
        "
      ></div>



      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        text-white
        w-full
        "
      >


        <div className="container-site">


          <span
            className="
            inline-flex
            items-center
            bg-yellow-500
            text-black
            px-5
            py-2
            rounded-full
            font-bold
            shadow-lg
            "
          >

            🔨 Reformas Residenciais e Comerciais

          </span>




          <h1
            className="
            mt-6
            text-5xl
            md:text-7xl
            font-extrabold
            leading-tight
            tracking-tight
            "
          >

            Transformamos ambientes
            com qualidade e acabamento
            profissional

          </h1>




          <p
            className="
            mt-6
            text-lg
            md:text-xl
            text-gray-200
            max-w-3xl
            leading-relaxed
            "
          >

            Reformas completas, pintura,
            elétrica, hidráulica, demolições
            e soluções personalizadas para
            valorizar seu imóvel.

          </p>




          <div
            className="
            mt-8
            flex
            flex-wrap
            gap-4
            "
          >


            <a
              href="https://wa.me/5511912039592?text=Olá!%20Encontrei%20a%20HO%20Reformas%20Gerais%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="
              bg-green-600
              hover:bg-green-700
              px-8
              py-4
              rounded-xl
              font-bold
              text-lg
              shadow-xl
              hover:scale-105
              transition
              "
            >

              📲 Solicitar Orçamento

            </a>




            <a
              href="#servicos"
              className="
              border-2
              border-white
              px-8
              py-4
              rounded-xl
              font-bold
              text-lg
              hover:bg-white
              hover:text-black
              transition
              "
            >

              Ver Serviços

            </a>


          </div>





          {/* Indicadores de confiança */}

          <div
            className="
            mt-12
            grid
            grid-cols-3
            gap-6
            max-w-2xl
            "
          >


            <div
              className="
              border-l-4
              border-yellow-500
              pl-4
              "
            >

              <strong
                className="
                text-4xl
                font-extrabold
                "
              >
                +10
              </strong>


              <p className="text-gray-300">
                Anos de experiência
              </p>


            </div>





            <div
              className="
              border-l-4
              border-yellow-500
              pl-4
              "
            >

              <strong
                className="
                text-4xl
                font-extrabold
                "
              >
                +200
              </strong>


              <p className="text-gray-300">
                Obras realizadas
              </p>


            </div>





            <div
              className="
              border-l-4
              border-yellow-500
              pl-4
              "
            >

              <strong
                className="
                text-4xl
                font-extrabold
                "
              >
                100%
              </strong>


              <p className="text-gray-300">
                Compromisso
              </p>


            </div>



          </div>



        </div>



      </div>


    </section>

  )

}


export default Hero