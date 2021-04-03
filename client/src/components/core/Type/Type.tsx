import clsx from "clsx";
import styles from "./Type.module.css";
import { FC, Fragment } from "react";

interface TypeProps {
  variant: "base" | "bold" | "wet" | "title" | "heading" | "shout" | "hint";
  color?: string;
  clamp?: number;
  className?: string;
}

const Type: FC<TypeProps> = ({ className, children, variant, color, clamp }) => {
  return (
    <Fragment>
      {variant === "base" ? (
        <p className={clsx(styles.root, "font-extralight", clamp === 4 ? "line-clamp-4" : null, className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </p>
      ) : variant === "wet" ? (
        <p className={clsx(styles.root, "font-normal", clamp === 4 ? "line-clamp-4" : null, className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </p>
      ) : variant === "bold" ? (
        <p className={clsx(styles.root, "font-bold", className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </p>
      ) : variant === "title" ? (
        <h3 className={clsx(styles.root, styles.title, " text-lg font-normal", className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </h3>
      ) : variant === "hint" ? (
        <p style={{ color: "#A9B4CC" }} className=" text-base font-light">
          {children}
        </p>
      ) : variant === "heading" ? (
        <h2 className={clsx(styles.root, styles.heading, className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </h2>
      ) : variant === "shout" ? (
        <h1 className={clsx(styles.root, styles.shout, " text-7xl", className)} style={{ color: color ? color : "#000345" }}>
          {children}
        </h1>
      ) : null}
    </Fragment>
  );
};

export default Type;
