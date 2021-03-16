import clsx from "clsx";
import styles from "./Type.module.css";
import { FC, Fragment } from "react";

interface TypeProps {
  variant: "base" | "bold" | "title" | "heading" | "shout" | "hint";
  color?: string;
  clamp?: number;
}

const Type: FC<TypeProps> = ({ children, variant, color, clamp }) => {
  return (
    <Fragment>
      {variant === "base" ? (
        <p className={clsx(styles.root, "font-normal", clamp === 4 ? "line-clamp-4" : null)} color={color ? color : "#000"}>
          {children}
        </p>
      ) : variant === "bold" ? (
        <p className={clsx(styles.root, "font-bold")} color={color ? color : "#000"}>
          {children}
        </p>
      ) : variant === "heading" ? (
        <h3 className={clsx(styles.root, styles.heading)} color={color ? color : "#000"}>
          {children}
        </h3>
      ) : variant === "hint" ? (
        <p className="text-lg text-black font-semibold">{children}</p>
      ) : variant === "title" ? (
        <h2 className={clsx(styles.root, styles.title)} color={color ? color : "#000"}>
          {children}
        </h2>
      ) : variant === "shout" ? (
        <h1 className={clsx(styles.root, styles.wow)} color={color ? color : "#000"}>
          {children}
        </h1>
      ) : null}
    </Fragment>
  );
};

export default Type;
