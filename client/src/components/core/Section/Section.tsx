import { setWeek } from "date-fns/esm";
import { FC } from "react";
import Type from "../../core/Type";
interface SectionProps {
  title?: string;
  type?: "card" | string;
}
const Section: FC<SectionProps> = ({ type, title, children }) => {
  /**
   * style={{ borderBottom: "1px solid #e8eefa" }}
   */
  return (
    <section className="w-full mb-8 last:mb-0">
      {title ? (
        <div className="mb-4">
          <Type variant="title">{title}</Type>
        </div>
      ) : null}
      <div className="  max-w-full ">{children}</div>
    </section>
  );
};

// function getSectionMargin(type?: string) {
//   /**
//    * Used to set the margin for this Section component based on the
//    * type passed to it via props.
//    */
//   switch (type) {
//     case "card":
//       return "mt-2";
     
//     default:
//       return "md:mt-2";
     
//   }
// }

export default Section;

/*** Notes ***
 * Use the section component to devide the individual sections of UI elements.
 * Removed the following style from the section element temporarily: , width: "calc(100% + 16px)"
 */
