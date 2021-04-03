import { FC } from "react";

interface HeaderProps {
  data?: string;
}
const Header: FC<HeaderProps> = ({}) => {
  return (
    <section className="mb-3 p-0 flex items-center">
      <div className="flex-auto flex-grow-0 ">
        <div
          className=" w-12 border-gray-50 border-2 h-12 shadow-sm bg-gray-50 flex overflow-hidden relative flex-shrink-0 rounded-full justify-center "
          aria-label="recipe"
        >
          <img
            className="w-full h-full object-cover text-center text-in"
            src="//images.ctfassets.net/g5nrk2qtffpm/Nj4YUF1LAu1dz1YBTXjAr/ba27dc69d8f91dea896947dcf017d198/3.jpg"
          />
        </div>
      </div>
      <div className=" flex-auto ml-2">
        <span className=" block font-medium leading-5 m-0">Betty</span>
        <span className="block font-medium leading-5 m-0">a month ago</span>
      </div>
    </section>
  );
};

export default Header;
