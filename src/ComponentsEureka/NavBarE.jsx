import { Link } from "react-router-dom";
import { Eureka } from "../assets";
import { useState, useEffect, useRef } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownRef, setDropdownRef] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef && !dropdownRef.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleGlobalClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [dropdownRef]);

  return (
    <>
      <header className="w-full flex items-center py-3 fixed top-0 z-30 border-b-[0px] drop-shadow-md backdrop-blur-[10px] bg-background-900/70">
        <nav className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
          <a href="/eureka">
            <img
              src={Eureka}
              alt="Logo"
              className="w-[11rem] h-[3.5rem] hover:scale-105 duration-300 em:h-[3rem] em:w-[9rem] emobile:w-[8rem] emobile:h-[3rem] es:w-[7rem] es:h-[2.5rem]"
            />
          </a>

          <div className="dropdown" ref={(node) => setDropdownRef(node)}>
            <button onClick={toggleDropdown} className="border-2 border-background-300/50 py-2 px-3 rounded-xl outline-none w-45 text-text-100 font-bold shadow-md hover:bg-secondary-800">  Archives</button>
            {isOpen && (
              <div className="absolute mt-2 bg-background-900/70 drop-shadow-md backdrop-blur-[10px] shadow-lg rounded-xl py-2 w-45 px-3 mx-auto ">
                <Link to="./Eureka1">
                  <button className="block text-text-100 font-bold hover:bg-secondary-600 rounded-xl px-2 mx-auto">Eureka 1.0</button>
                </Link>
                <Link to="./Eureka2">
                <button className="block text-text-100 font-bold hover:bg-secondary-600 rounded-lg px-2 mx-auto">Eureka 2.0</button>
                </Link>
                <Link to="./Eureka3">
                <button className="block text-text-100 font-bold hover:bg-secondary-600 rounded-lg px-2 mx-auto">Eureka 3.0</button>
                </Link>
              </div>
            )}
          </div>

          <ul className="list-none md:flex flex-row gap-8">
            {sessionStorage.getItem("token") ? (
              <Link to="/eureka">
                <button
                  className="border-2 border-background-300/50 py-2 px-4 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800"
                  onClick={handleSignOut}
                >
                  LogOut
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
