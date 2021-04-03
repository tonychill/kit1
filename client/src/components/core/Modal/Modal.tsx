import { FC, Children, useEffect } from "react";
import Button from "../Button";
export interface ModalProps {
  type?: "search";
  open: boolean;
  title?: string;
  header?: string;
  toggleModal: () => void;
}
const Modal: FC<ModalProps> = ({ type, open, toggleModal, children, title, header }) => {
  const childArray = Children.toArray(children);
  useEffect(() => {
    if (window !== undefined && open === true) {
      addScreenOverlay();
    }
    if (!open) removeScreenOverlay();

    function addScreenOverlay() {
      const pageBody = document.body;
      pageBody.style.overflow = "hidden";
    }
    function removeScreenOverlay() {
      document.body.style.cssText = "";
    }
  }, [open]);
  return (
    <div
      id="modal-overlay"
      onClick={(e) => {
        const temp = e.target as HTMLElement;
        if (temp.id == "modal-overlay") toggleModal();
      }}
      className={`${!open ? "hidden " : "fixed h-screen left-0 top-0 w-screen z-50 flex flex-col md:p-[12vh] "} `}
      style={{ backgroundColor: "rgba(0,0,0,.25" }}
    >
      <div className="mx-auto my-0 w-full h-full md:h-auto md:max-w-[47.375rem] flex flex-col min-h-0 md:rounded-xl shadow-md bg-white">
        <header className="py-4 px-6 flex-none md:border-b border-gray-600-opacity-10  z-10 flex items-center md:shadow-md">
          <div className="flex-auto flex hover:items-center min-w-0 ">{header ?? childArray[1] ? childArray[0] : null}</div>
          <div className="mt-2 sm:mt-0 ml-4 ">{type === "search" ? null : <Button variant="secondary" icon="close2" onClick={toggleModal} />}</div>
        </header>
        <main className="flex-auto p-4 overflow-auto ">{childArray[1] ?? childArray[0]}</main>

        <footer className="flex items-center justify-end rounded-b">
          {/*<button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>*/}
        </footer>
      </div>
    </div>
  );
};

export default Modal;
