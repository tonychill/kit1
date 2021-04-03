import clsx from "clsx";
import React from "react";
import Icon from "../Icons";
import Type from "../Type";

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  text?: string;
  variant?: "primary" | "secondary" | "nav" | "goBack" | "social" | "save" | "filter" | "close";
  width?: number;
  bgcolor?: string;
  icon?: string;
  fullWidth?: boolean;
}
const Button: React.FC<ButtonProps> = ({ onClick, text, type, fullWidth, variant, icon, bgcolor }) => {
  return (
    <button
      className={clsx(
        "shadow-md bg-white font-bold  flex px-6 py-3 mb-4  outline-none focus:outline-none ",
        variant === "secondary" ? "rounded-full  px-3" : "rounded-xl",
        fullWidth ? "w-full" : null,
        bgcolor ? "border-gray-50 border-2 border-solid" : null
      )}
      type={type}
      style={{ transition: "all .15s ease", backgroundColor: bgcolor }}
      onClick={onClick}
    >
      <div className={clsx("flex flex-row m-auto items-center justify-center ", icon ? null : "px-2")}>
        <div>{icon ? <Icon variant={icon} /> : null}</div>
        {/* <div>
          <Icon variant="close2" />
        </div> */}
        <div>
          <Type color={bgcolor ? "#fff" : "#000345"} variant="wet">
            {text}
          </Type>
        </div>
      </div>
    </button>
  );
};
export default Button;

//inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700
