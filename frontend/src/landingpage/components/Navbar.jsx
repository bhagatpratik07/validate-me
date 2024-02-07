import { HiMenuAlt3 } from "react-icons/hi";

import websiteLogo from "/icon.svg";

const menuItems = [
  { text: "Home", url: "#" },
  { text: "Features", url: "#" },
  { text: "About", url: "#" },
];

function Navbar() {
  return (
    <div className="navbar-home top-0 py-2 px-5 lg:py-5 w-full bg-transparent lg:relative z-50">
      <nav className="bg-white max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none rounded-lg">
        <div className="flex items-center justify-between">
          <button>
            <div className="header-logo flex items-center space-x-2">
              <img src={websiteLogo} alt="" className="w-10 h-10" />
              <h2 className="text-black font-bold text-base">Validate me</h2>
            </div>
          </button>
          <div className="header-menu hidden  lg:flex items-center gap-x-10">
            <ul className="flex space-x-10 text-sm font-bold text-black/60">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a href={menuItem.url}>
                    <button>{menuItem.text}</button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button className={`advanced-setting-toggle focus:outline-none`}>
              <HiMenuAlt3 className="text-2xl text-slate-800 focus:outline-none active:scale-110 active:text-red-500" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
