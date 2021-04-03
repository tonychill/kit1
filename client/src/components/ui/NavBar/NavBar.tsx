import { NavProps, NavLink } from "../../../ts";
import { GlobalContext } from "../../../context";
import { FC, useContext, useState } from "react";
import Link from "../../core/Link";
import Modal from "../../core/Modal";
import Search from "../Search";
import Button from "../../core/Button";

const NavBar: FC<NavProps> = ({ navLinks }) => {
  const { session, handleLogIn, handleLogOut } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full shadow-md sm:px-8 text-gray-700 bg-white body-font xxmotion-safe:animate-fadeIn" style={{ background: "#fff" }}>
      <div className="container flex flex-col flex-wrap items-center justify-between py-3 sm:py-5 mx-auto md:flex-row max-w-7xl">
        <div className="hidden sm:flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
          <Link href="/" text={"YOUR LOGO"}>
            <a>
              <span className="text-xl font-black leading-none text-gray-900 select-none logo"></span>
            </a>
          </Link>
        </div>
        <div className="flex-grow ">
          <div className=" flex justify-center sm:justify-start ">
            {/* <Search /> */}

            {/* <button
                className=" px-3 leading-6 font-medium flex items-center space-x-3 sm:space-x-4 hover:text-gray-400 transition-colors duration-200 w-full py-2 text-gray-300 focus:outline-none "
                // value=""

                onClick={toggleModal}
              >
                <svg width={24} height={24} fill="none" className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <span> What are you looking for?</span>
              </button> */}
            {/* TODO: Implement filter options */}
            {/* <div className="">
              <span style={{ width: 1 }} className=" rounded-lg mr-2 h-6 w-1/12 bg-gray-200"></span>
              <FilterButton size={33} />
            </div> */}
          </div>
        </div>
        <div className="hidden sm:flex flex-col md:flex-row">
          <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
            {navLinks.map((link: NavLink, idx) => (
              <Link key={idx} href={link.url} text={link.text} />
            ))}
          </nav>
          <div className="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
            {session?.isAuthenticated ? (
              <button
                onClick={handleLogOut}
                className="text-base focus:outline-none font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={handleLogIn}
                className="text-base focus:outline-none font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              >
                Sign in
              </button>
            )}

            <span className="inline-flex rounded-md shadow-sm">
              <Button text="Join" onClick={() => console.log("signing up... ")} />
            </span>
          </div>
        </div>
      </div>
      {/* <Modal type="search" open={open} toggleModal={toggleModal}>
        TODO: Add component
      </Modal> */}
    </header>
  );
  function toggleModal() {
    setOpen(!open);
  }
};

export default NavBar;
