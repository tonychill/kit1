import { FC } from "react";
import { ModalProps } from "../../../ts";
const Modal: FC<ModalProps> = ({ type, open, toggleModal, children, title }) => {
  return (
    <div className={`${!open ? "hidden " : ""} `}>
      <div
      //TODO: Figure out how to handle modal close on the Moddal's bg click. 
        // onClick={toggleModal}
        className="opacity-25 fixed inset-0 z-50 bg-gray-900"
      ></div>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-white"
        style={{ background: "#fff" }}
      >
        <div className="relative w-full h-full sm:w-auto sm:my-6 mx-auto sm:max-w-3xl ">
          {/*content*/}
          <div className="border-0  h-full sm:h-auto  sm:shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}

            {type === "search" ? null : (
              <div className=" sticky top-0 flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={toggleModal}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                </button>
              </div>
            )}

            {/*body*/}
            <div className="relative flex-auto">{children}</div>
            {/*footer*/}
            {/* <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
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
                  </button>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
