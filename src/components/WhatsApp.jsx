function WhatsApp() {

  return (

    <a
      href="https://wa.me/5511912039592?text=Olá!%20Encontrei%20a%20HO%20Reformas%20Gerais%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      items-center
      gap-3
      bg-green-600
      text-white
      px-5
      py-4
      rounded-full
      shadow-2xl
      hover:bg-green-700
      hover:scale-105
      transition
      "
    >

      <span className="
      text-3xl
      animate-bounce
      ">
        💬
      </span>


      <div className="hidden sm:block">

        <p className="
        font-bold
        text-sm
        ">
          Fale com a HO
        </p>


        <p className="
        text-xs
        ">
          Solicite orçamento
        </p>

      </div>


    </a>

  )

}


export default WhatsApp