import ReactDOM from "react-dom";
const Backdrop = () => {
  return (
    <div className="fixed w-full h-screen z-20 top-0 left-0 bg-zinc-800/50"></div>
  );
};
const ModalOverlay: React.FC<{
  children: any;
  header: string;
  darkmode: boolean;
  close: () => void;
}> = (props) => {
  return (
    <div
      //tabindex="-1"
      aria-hidden="true"
      className={`${props.darkmode ? "dark" : ""}
        
    flex  ease-in-out h-3/4 w-1/2 m-auto  overflow-y-auto overflow-x-hidden fixed left-50 z-50  inset-0  md:h-full`}
    >
      <div className="m-auto relative p-4 w-full max-w-2xl h-full md:h-auto">
        {/*   <!-- Modal content -->*/}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/*  <!-- Modal header -->*/}
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {props.header}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={() => {
                props.close();
              }}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/*  <!-- Modal body -->*/}
          <div className="p-6 space-y-6">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
const Modal: React.FC<{
  close: any;
  header: string;
  children?: any;
  darkmode: boolean;
}> = (props) => {
  const portalElement: any = document.getElementById("overlays");
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay
          header={props.header}
          darkmode={props.darkmode}
          close={props.close}
        >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </div>
  );
};
export default Modal;
