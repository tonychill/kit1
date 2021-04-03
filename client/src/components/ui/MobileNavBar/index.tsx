import { FC } from "react";
import clsx from "clsx";
import s from "./Mnav.module.css";

interface NavBarProps {
  navLinks: NavLink[];
}
interface NavLink {
  text: string;
  url: string;
  icon?: unknown;
}

const MobileNavBar: FC<NavBarProps> = ({ navLinks }) => {
  return (
    <nav className={clsx(s.root, " border-t border-gray-200 bg-white md:hidden")}>
      <div className="w-full mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 ">
          <div className="relative flex flex-col md:flex-row w-full">
            <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
              {navLinks.map((link, idx) => (
                <div key={idx} className="w-1/3 flex justify-items-center">
                  <a href={link.url} className="mx-auto font-medium leading-6 text-gray-600 hover:text-gray-900">
                    {link.text}
                  </a>
                </div>
              ))}
              <div className="w-1/3 flex justify-items-center">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center mx-auto justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Open menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavBar;
