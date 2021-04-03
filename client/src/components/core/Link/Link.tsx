import { FC } from "react";
import A from "next/link";
import Icon from "../Icons";
import clsx from "clsx";
import Type from "../Type";

interface LinkProps {
  className?: string;
  href: string;
  text: string;
  color?: string;
  icon?: string; //This should be the icon name where the icon component will render to corresponding icon.
  size?: number;
  iconPlacement?: "right";
}
const Link: FC<LinkProps> = ({ className, href, text, icon = "", iconPlacement, color }) => {
  return (
    <A href={href}>
      <a className={clsx(className, "flex items-center mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900")}>
        {icon && iconPlacement === undefined ? <Icon variant={icon} /> : null}
        <Type variant="wet" color={color}>
          {text}
        </Type>
        <span className="ml-4"> {iconPlacement === "right" ? <Icon variant={icon} color="#fff" /> : null}</span>
      </a>
    </A>
  );
};

export default Link;

/*** Notes ***
 * Notes go here.
 */
