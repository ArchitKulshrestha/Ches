/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import { Eureka } from "../assets";

function NavBar() {
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/eureka";
  };

  return (
    <>
      <header className="w-full flex items-center py-3 fixed top-0 z-30 border-b-[0px] drop-shadow-md backdrop-blur-[10px] bg-background-900/70 ">
        <nav className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
          <a href="/eureka">
            <img
              src={Eureka}
              alt="Logo"
              className="w-[11rem] h-[3.5rem] hover:scale-105 duration-300 em:h-[3rem] em:w-[9rem] emobile:w-[8rem] emobile:h-[3rem] es:w-[7rem] es:h-[2.5rem]"
            />
          </a>

          <ul className="list-none  md:flex flex-row gap-8">
            {sessionStorage.getItem("token") ? (
              <Link to="/eureka">
                <button
                  className="border-2 border-background-300/50 py-2 px-4 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800"
                  onClick={handleSignOut}>
                  SignOut{" "}
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-secondary-600 py-2 px-6 rounded-xl outline-none w-fit text-text-100 font-bold shadow-md hover:bg-secondary-800">
                  Login{" "}
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
