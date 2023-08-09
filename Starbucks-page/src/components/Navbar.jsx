import { Link } from "react-router-dom";

export default function Navbar() {
  function toogleNavbar() {
    const navbar = document.getElementById("navbar-cta");
    if (navbar.classList.contains("hidden")) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  }

  return (
    <div>
      <nav className="bg-white border-gray-200 shadow-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
          <Link to="/" className="flex items-center">
            <img
              width={60}
              height={60}
              src="https://1000marcas.net/wp-content/uploads/2019/12/Starbucks-logo.jpg"
              className="h-8 mr-3"
              alt="Starbucks Logo"
            ></img>
            </Link>

          <div className="flex md:order-2">
            <Link to="/singin">
              <button
                type="button"
                className="text-black bg-white border-2 hover:bg-slate-200 border-black  focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-4  py-1 text-center mr-3 md:mr-3 "
              >
                Sign in
              </button>
            </Link>
            <Link to="/register">
              <button
                type="button"
                className="text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-4 py-1 text-center mr-3 md:mr-3 "
              >
                Join now
              </button>
            </Link>
            <button
              data-collapse-toogle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={toogleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black md:p-0 hover:text-green-500"
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black md:p-0 hover:text-green-500"
                >
                  REWARDS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black md:p-0 hover:text-green-500"
                >
                  GIFT CARDS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
