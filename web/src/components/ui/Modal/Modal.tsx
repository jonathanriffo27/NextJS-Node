import CloseButton from "../CloseButton/CloseButton";

const Modal = ({ onClick, title, children }: any) => {
  return (
    <div className="grid place-content-center bg-black/50 h-screen fixed inset-0 z-50">
      <div className="px-[30px] flex flex-col justify-start items-center bg-white border border-[#CCCCCC] rounded-[10px] pt-[20px] pb-[30px] gap-[30px] relative">
        <CloseButton onClick={onClick} />
        <span className="text-[20px] font-medium">{title}</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
