import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary" | "nav" | "goBack" | "social" | "save" | "filter";
  width?: number;
  color?: string;
  icon?: string;
}
const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      type="button"
      style={{ transition: "all .15s ease" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
