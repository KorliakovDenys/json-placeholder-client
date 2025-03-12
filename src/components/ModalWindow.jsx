const ModalWindow = ({modalOpen, onCloseClick, children}) => {
  return (
    <>
      <div className={`fixed left-0 top-0 w-full h-full bg-white opacity-90 ${modalOpen ? '' : 'hidden'}`}
           onClick={onCloseClick}></div>
      <div
        className={`fixed left-1/2 top-1/2 -translate-1/2 w-full mx-auto bg-white p-4 sm:w-2/3 md:1/2 max-h-2/3 shadow ${modalOpen ? '' : 'hidden'}`}>
        <div className={'border p-2'}>
          {children}
          <div className={'flex justify-end'}>
            <button onClick={onCloseClick}
                    className="bg-gray-500 text-white px-2 py-1 cursor-pointer">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalWindow