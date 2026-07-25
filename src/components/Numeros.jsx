const numeros = [
  {
    numero: "+10",
    titulo: "Anos de Experiência",
    descricao: "Atuando com reformas e manutenção.",
  },

  {
    numero: "+200",
    titulo: "Obras Realizadas",
    descricao: "Projetos entregues com qualidade.",
  },

  {
    numero: "100%",
    titulo: "Compromisso",
    descricao: "Dedicação em cada etapa da obra.",
  },

  {
    numero: "24h",
    titulo: "Atendimento",
    descricao: "Sempre pronto para avaliar seu projeto.",
  },
];


function Numeros() {

  return (

    <section
      className="
      bg-white
      py-12
      px-6
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-4
        gap-6
        "
      >


        {numeros.map((item,index)=>(

          <div
            key={index}
            className="
            text-center
            p-6
            rounded-2xl
            shadow-md
            border
            border-gray-100
            hover:-translate-y-2
            transition
            "
          >


            <h3
              className="
              text-5xl
              font-bold
              text-yellow-500
              "
            >

              {item.numero}

            </h3>


            <h4
              className="
              mt-3
              text-xl
              font-bold
              text-gray-900
              "
            >

              {item.titulo}

            </h4>


            <p
              className="
              mt-3
              text-gray-600
              "
            >

              {item.descricao}

            </p>


          </div>


        ))}


      </div>


    </section>

  )

}


export default Numeros