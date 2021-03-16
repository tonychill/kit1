import { FC } from "react";
import A from "next/link";
import Icon from "../Icon";
import clsx from "clsx";

interface LinkProps {
  className?: string;
  href: string;
  text: string;
  icon?: string; //This should be the icon name where the icon component will render to corresponding icon.
  size?: number;
}
const Link: FC<LinkProps> = ({ className, href, text, icon }) => {
  return (
    <A href={href}>
      <a className={clsx(className, "mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900")}>
        {icon ? <Icon variant={icon} /> : null}
        {text}
      </a>
    </A>
  );
};

export default Link;

/*** Notes ***
 * Notes go here.
 */
