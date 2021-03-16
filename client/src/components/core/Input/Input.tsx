import clsx from "clsx";
import { Fragment, FC, FormEvent } from "react";
import s from "./Input.module.css";
import Type from "../Type";

interface InputProps {
  type: string;
  placeholder?: string;
  inputStyles?: string;
  value?: number | string;
  name?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  order?: "first" | "last";
  className?: string;
  label?: string;
  otherProps?: object;
}
const Input: FC<InputProps> = ({ className, placeholder, inputStyles, value, label, type, name, onChange, order = "", children, otherProps }) => {
  return (
    <Fragment>
      {children ? (
        <div className={clsx(s.xroot)}>
          <div className={s.xinner}>{children}</div>
        </div>
      ) : (
        <div className={clsx(s.root, s[order])}>
          <div className={clsx(s.inner_wrap, "w-full")}>
            {label ? (
              <div className={clsx(s.label, "ml-3")}>
                <Type variant="base">Guests</Type>
              </div>
            ) : null}

            <div className={clsx(s.input_wrap, className, "w-full")}>
              <input
                className={clsx(s.input, "w-full focus:outline-none")}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                {...otherProps}
                placeholder={placeholder}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Input;
