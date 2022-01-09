import { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  // const changeNavBacground = () => {
  //   if (window.scrollY >= 1) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  const changeNavBackground = () => {
    if (window.scrollY >= 2) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);
  // bg-gradient-to-r from-black to-gray-900
  // {
  //   navbar ? "navigation py-4 transition duration-500 ease-in-out w-full bg-white fixed flex justify-center items-center" : "navigation transition duration-500 fixed ease-in-out py-4 w-full bg-black  flex justify-center items-center"
  // }

  return (
    <div className="">
      <div className="navigation py-5 transition duration-500 ease-in-out w-full bg-gradient-to-r from-black to-gray-900  fixed flex justify-center items-center">
        <div className="navigation-menu open-sans container p-0 mx-auto flex justify-between items-center">
          <a className="text-xl  text-white font-semibold" href="#">
            Ini Logo
          </a>
          <div className="right-menu text-white flex items-center">
            <a className="text-xl font-semibold" href="">
              <span className="hover:border-b-2 ">Project</span>
            </a>
            <a className="ml-4 text-xl font-semibold  hover: transition duration-300 ease-in-out" href="">
              Contact
            </a>
            <a className=" text-xl font-semibold border border-black rounded-md p-2 bg-transparent border-none text-white  " href="">
              <div className="flex mx-2 text-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <h4 className="ml-2">GitHub</h4>
              </div>
            </a>
            <a className=" text-xl font-semibold border rounded-full bg-transparent border-none text-white p-2 hover:bg-white hover:text-black hover:transition duration-500" href="">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
