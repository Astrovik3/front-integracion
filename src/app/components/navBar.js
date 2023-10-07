
export default function NavBar() {
  return (
    <main className="flex flex-col justify-between">
      <nav class="bg-gray-800 border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center md:p-0">
            <a href="/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            </a>
            <ul class="font-medium flex flex-col p-0 pl-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-white md:p-0" aria-current="page">Robots</a>
                </li>
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-slate-400 rounded md:border-0 md:hover:text-white md:p-0">Mapa</a>
                </li>
            </ul>
          </div>
          
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-0 pr-8 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              
              <li>
                <a href="#" class="block py-2 pr-4 text-white rounded md:border-0 md:p-0 dark:text-white">ADMIN</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </main>
  )
}
