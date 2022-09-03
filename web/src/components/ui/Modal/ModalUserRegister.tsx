import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { createUser } from "../../../redux/slices/userSlice";

import { UserPic } from "../../funcional/User";
import Button from "../Button";
import CloseButton from "../CloseButton/CloseButton";
import InputText from "../InputText";

const ModalUserRegister = ({ onClick, title, textBoton }: any) => {
  const dispatch = useAppDispatch();
  const [userRegister, setUserRegister] = useState({
    rut: "",
    name: "",
    paternalLastName: "",
    maternalLastName: "",
    email: "",
    phone: "",
    grade: "",
  });
  const onRutChange = (e: any) =>
    setUserRegister({ ...userRegister, rut: e.target.value });
  const onNameChange = (e: any) =>
    setUserRegister({ ...userRegister, name: e.target.value });
  const onPaternalChange = (e: any) =>
    setUserRegister({ ...userRegister, paternalLastName: e.target.value });
  const onMaternalChange = (e: any) =>
    setUserRegister({ ...userRegister, maternalLastName: e.target.value });
  const onEmailChange = (e: any) =>
    setUserRegister({ ...userRegister, email: e.target.value });
  const onPhoneChange = (e: any) =>
    setUserRegister({ ...userRegister, phone: e.target.value });
  const onGradeChange = (e: any) =>
    setUserRegister({ ...userRegister, grade: e.target.value });

  const handleClick = () => {
    dispatch(createUser(userRegister));
    onClick();
  };

  return (
    <div className="grid place-content-center bg-black/50 h-screen fixed inset-0 z-50">
      <div className="px-[30px] flex flex-col justify-start items-center bg-white border border-[#CCCCCC] rounded-[10px] pt-[20px] pb-[30px] gap-[30px] relative">
        <CloseButton onClick={onClick} />
        <span className="text-[20px] font-medium">{title}</span>
        <div className="flex gap-[30px]">
          <UserPic width="215px" height="215px" />
          <div className="flex flex-col gap-[5px] w-[439px]">
            <InputText
              width="146px"
              label="Rut"
              onChange={onRutChange}
              value={userRegister.rut}
            />
            <InputText
              width="439px"
              label="Nombres"
              onChange={onNameChange}
              value={userRegister.name}
            />
            <div className="flex flex-wrap gap-[5px]">
              <InputText
                width="217px"
                label="Apellido paterno"
                onChange={onPaternalChange}
                value={userRegister.paternalLastName}
              />
              <InputText
                width="217px"
                label="Apellido materno"
                onChange={onMaternalChange}
                value={userRegister.maternalLastName}
              />
              <InputText
                width="217px"
                label="Correo electronico"
                onChange={onEmailChange}
                value={userRegister.email}
              />
              <InputText
                width="217px"
                label="Telefono"
                onChange={onPhoneChange}
                value={userRegister.phone}
              />
            </div>
            <InputText
              width="439px"
              label="Cargo"
              onChange={onGradeChange}
              value={userRegister.grade}
            />
          </div>
        </div>
        <Button width="250px" text={textBoton} onClick={handleClick} />
      </div>
    </div>
  );
};

export default ModalUserRegister;
