function Navbar() {

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-gray-900/90
      backdrop-blur-md
      text-white
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >


        <div>

          <h1 className="text-2xl font-bold">
            🔨 HO Reformas
          </h1>


          <p className="text-xs text-gray-400">
            Gerais
          </p>

        </div>



        <div className="hidden md:flex gap-8 items-center">


          <a href="#" className="hover:text-yellow-400 transition">
            Início
          </a>


          <a href="#servicos" className="hover:text-yellow-400 transition">
            Serviços
          </a>


          <a href="#galeria" className="hover:text-yellow-400 transition">
            Obras
          </a>


          <a href="#contato" className="hover:text-yellow-400 transition">
            Contato
          </a>



          <a
            href="https://wa.me/5511912039592"
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-green-600
            px-5
            py-3
            rounded-xl
            font-bold
            hover:bg-green-700
            transition
            "
          >

            WhatsApp

          </a>


        </div>


      </div>

    </nav>

  )

}

export default Navbar