import { FC } from "react";
import Type from "../../core/Type";
interface SectionProps {
  title?: string;
}
const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="w-full -m-2 mt-8 " style={{ borderBottom: "1px solid #e8eefa", width: "calc(100% + 16px)" }}>
      {title ? (
        <div className="mb-4">
          <Type variant="title">{title}</Type>
        </div>
      ) : null}
      <div className="mb-6  max-w-full ">{children}</div>
    </section>
  );
};

export default Section;

/*** Notes ***
 * Use the section component to devide the individual sections of UI elements.
 */
