import { UserPic } from "../../funcional/User";
import Button from "../Button";
import CloseButton from "../CloseButton/CloseButton";
import InputText from "../InputText";

const Modal = ({ onClick, boton }: any) => {
  return (
    <div className="grid place-content-center bg-black/50 h-screen fixed inset-0 z-50">
      <div className="w-[417px] flex flex-col justify-start items-center bg-white border border-[#CCCCCC] rounded-[10px] pt-[20px] pb-[30px] gap-[30px] relative">
        <CloseButton onClick={onClick} />
        <span className="text-[20px] font-medium">Nuevo Canal</span>
        <InputText width="357px" label="Nombre" />
        <Button width="250px" text={boton} onClick={onClick} />
      </div>
    </div>
  );
};

const ModalUserRegister = ({ onClick }: any) => {
  return (
    <div className="grid place-content-center bg-black/50 h-screen fixed inset-0 z-50">
      <div className="px-[30px] flex flex-col justify-start items-center bg-white border border-[#CCCCCC] rounded-[10px] pt-[20px] pb-[30px] gap-[30px] relative">
        <CloseButton onClick={onClick} />
        <span className="text-[20px] font-medium">Nuevo Usuario</span>
        <div className="flex gap-[30px]">
          <UserPic width="215px" height="215px" />
          <div className="flex flex-col gap-[5px] w-[439px]">
            <InputText width="146px" label="Rut" />
            <InputText width="439px" label="Nombres" />
            <div className="flex flex-wrap gap-[5px]">
              <InputText width="217px" label="Apellido paterno" />
              <InputText width="217px" label="Apellido materno" />
              <InputText width="217px" label="Correo electronico" />
              <InputText width="217px" label="Telefono" />
            </div>
            <InputText width="439px" label="Cargo" />
          </div>
        </div>
        <Button width="250px" text="Registrar" onClick={onClick} />
      </div>
    </div>
  );
};

export default Modal;
export { ModalUserRegister };
