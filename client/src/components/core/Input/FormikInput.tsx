import clsx from "clsx";
import { Fragment, FC, FormEvent, MouseEventHandler } from "react";
import s from "./Input.module.css";
import Type from "../Type";

interface FormikInputProps {
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
}
interface Props {
  label: string;
  name: string;
  field: {
    name: string;
    onBlur: () => void;
    onChange: () => void;
    value: string;
  };
  form: unknown;
  // InputProps: {
  //   onKeyUp: () => void;
  // };
  // fullWidth: boolean;
  // variant: string;
  // onKeyDown: unknown;
}
export const FormikInput: FC<Props> = ({ field, form, ...props }) => {
  return (
    <div className={clsx(s.root)}>
      <div className={clsx(s.inner_wrap, "w-full")}>
        {
          /**props.label*/ 1 ? (
            <div className={clsx(s.label, "ml-3")}>
              <Type variant="wet">{props.label}</Type>
            </div>
          ) : null
        }

        <div className={clsx("flex flex-grow items-center w-full border rounded-lg")}>
          {/* <div className="p-2 pr-1 cursor-pointer">Label</div> */}
          <input
            className={clsx(s.input, "w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-600")}
            {...field}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};
// export { FormikInput };

/**
 * 
 * 
 *  {children ? (
        <div className={clsx(s.xroot)}>
          <div className={s.xinner}>{children}</div>
        </div>
      ) : (
        <div className={clsx(s.root, s[order])}>
          <div className={clsx(s.inner_wrap, "w-full")}>
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
 * 
 */
