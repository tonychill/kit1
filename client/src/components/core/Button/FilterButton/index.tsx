import { FC, useState } from "react";

import Modal from "../../Modal";
import { FilterButtonProps } from "../../../../ts";
/**TODO:
 * 1. Create a single icon component that renders icons based on the prop value passed to it.
 * 2. Move this over to the Icon component and fucure out how to deal with loading the modal.
 * */
const FilterButton: FC<FilterButtonProps> = ({ size }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex mr-1 justify-center items-center  rounded-sm ">
      <button onClick={toggleOpen} className="focus:outline-none">
        <svg id="Component_83_1" data-name="Component 83 – 1" width={size} height={size} viewBox="0 0 33 33">
          <rect id="Rectangle_1098" data-name="Rectangle 1098" width={size} height={size} rx={6} fill="#f7f7f7" />
          <g id="Group_1380" data-name="Group 1380" transform="translate(19251.051 14733)">
            <g id="Rectangle_1096" data-name="Rectangle 1096" transform="translate(-19244.051 -14724)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <rect width={18} height={2} rx={1} stroke="none" />
              <rect x="0.5" y="0.5" width={17} height={1} rx="0.5" fill="none" />
            </g>
            <g id="Rectangle_1097" data-name="Rectangle 1097" transform="translate(-19244.051 -14710)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <rect width={18} height={2} rx={1} stroke="none" />
              <rect x="0.5" y="0.5" width={17} height={1} rx="0.5" fill="none" />
            </g>
            <g id="Ellipse_132" data-name="Ellipse 132" transform="translate(-19241.051 -14725)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <circle cx={2} cy={2} r={2} stroke="none" />
              <circle cx={2} cy={2} r="1.5" fill="none" />
            </g>
            <g id="Ellipse_133" data-name="Ellipse 133" transform="translate(-19233.051 -14711)" fill="#fff" stroke="#000345" strokeWidth={1}>
              <circle cx={2} cy={2} r={2} stroke="none" />
              <circle cx={2} cy={2} r="1.5" fill="none" />
            </g>
          </g>
        </svg>
      </button>
      <Modal title="Filter" open={open} toggleModal={toggleOpen}>
        <div>Body of the filter</div>
      </Modal>
    </div>
  );

  function toggleOpen() {
    setOpen(!open);
  }
};

export default FilterButton;