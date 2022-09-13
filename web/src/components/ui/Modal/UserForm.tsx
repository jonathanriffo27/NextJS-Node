import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUser } from "../../../redux/slices/userSlice";

import { UserPic } from "../../funcional/User";
import Button from "../Button";
import InputText from "../InputText";
import SelectOption from "../SelectOption";

const UserForm = ({
  onClick,
  textBoton,
  listRegions,
  handleDistrict,
  district,
  listGrades,
}: any) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);

  const onRutChange = (e: any) =>
    dispatch(setUser({ ...user, rut: e.target.value }));
  const onNameChange = (e: any) =>
    dispatch(setUser({ ...user, name: e.target.value }));
  const onPaternalChange = (e: any) =>
    dispatch(setUser({ ...user, paternalLastName: e.target.value }));
  const onMaternalChange = (e: any) =>
    dispatch(setUser({ ...user, maternalLastName: e.target.value }));
  const onEmailChange = (e: any) =>
    dispatch(setUser({ ...user, email: e.target.value }));
  const onPhoneChange = (e: any) =>
    dispatch(setUser({ ...user, phone: e.target.value }));
  const onGradeChange = (e: any) =>
    dispatch(setUser({ ...user, grade: e.target.value }));
  const onAdressChange = (e: any) =>
    dispatch(setUser({ ...user, adress: e.target.value }));
  const onRegionChange = (e: any) => {
    dispatch(setUser({ ...user, region: e.target.value }));
    handleDistrict(e.target.value);
  };
  const onDistrictChange = (e: any) => {
    dispatch(setUser({ ...user, district: e.target.value }));
  };

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex gap-[30px]">
        <UserPic width="215px" height="215px" />
        <div className="flex flex-col gap-[5px] w-[439px]">
          <InputText
            width="146px"
            label="Rut"
            onChange={onRutChange}
            value={user.rut}
          />
          <InputText
            width="439px"
            label="Nombres"
            onChange={onNameChange}
            value={user.name}
          />
          <div className="flex flex-wrap gap-[5px]">
            <InputText
              width="217px"
              label="Apellido paterno"
              onChange={onPaternalChange}
              value={user.paternalLastName}
            />
            <InputText
              width="217px"
              label="Apellido materno"
              onChange={onMaternalChange}
              value={user.maternalLastName}
            />
            <InputText
              width="217px"
              label="Correo electronico"
              onChange={onEmailChange}
              value={user.email}
            />
            <InputText
              width="217px"
              label="Telefono"
              onChange={onPhoneChange}
              value={user.phone}
            />
          </div>
          <SelectOption
            onChange={onGradeChange}
            value={user.grade}
            list={listGrades}
            width="w-full"
            title="Cargo"
          />
          <InputText
            width="439px"
            label="Direccion"
            onChange={onAdressChange}
            value={user.adress}
          />
          <div className="flex gap-[5px] text-[#555555] h-[50px]">
            <SelectOption
              onChange={onRegionChange}
              value={user.region}
              list={listRegions}
              title="Region"
            />
            <SelectOption
              onChange={onDistrictChange}
              value={user.district}
              list={district}
              title="Comuna"
            />
          </div>
        </div>
      </div>
      <Button width="250px" text={textBoton} onClick={onClick} />
    </div>
  );
};

export default UserForm;
