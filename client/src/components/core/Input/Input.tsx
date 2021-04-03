import clsx from "clsx";
import { Fragment, FC, FormEvent, MouseEventHandler } from "react";
import s from "./Input.module.css";
import Type from "../Type";

interface InputProps {
  type: string;
  icon?: JSX.Element;
  placeholder?: string;
  inputStyles?: string;
  value?: number | string;
  name?: string;
  order?: "first" | "last";
  className?: string;
  label?: string;
  otherProps?: object;
  iconAction?: MouseEventHandler;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
}
const Input: FC<InputProps> = ({
  className,
  onFocus,
  onBlur,
  placeholder,
  inputStyles,
  value,
  label,
  type,
  name,
  onChange,
  order = "",
  children,
  otherProps,
  icon = "",
  iconAction,
}) => {
  switch (type) {
    case "checkbox":
      return (
        <div>
          <input className="mr-2 rounded border-gray-300" id="terms-n-privacy" name={name} type="checkbox" />
          <label>{label}</label>
        </div>
      );
      break;
    default:
      return (
        <Fragment>
          {children ? (
            <div className={clsx(s.xroot)}>
              <div className={s.xinner}>{children}</div>
            </div>
          ) : (
            <div className={clsx(s.root, s[order], "sm:rounded-xl sm:border border-gray-600-opacity-10 bg-white ")}>
              <div className={clsx("w-full sm:px-2")}>
                {label ? (
                  <div className={clsx(s.label, "ml-3")}>
                    <Type variant="base">{label}</Type>
                  </div>
                ) : null}

                <div className={clsx("flex flex-grow items-center w-full", className)}>
                  <div className="p-2 pr-1 cursor-pointer" onClick={iconAction}>
                    {icon}
                  </div>

                  <input
                    className={clsx(s.input, "w-full pr-3 pl-1 focus:outline-none")}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    {...otherProps}
                    placeholder={placeholder}
                  />
                </div>
              </div>
            </div>
          )}
        </Fragment>
      );
  }
};
export default Input;
