import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUser } from "../../../redux/slices/userSlice";

import { UserPic } from "../../funcional/User";
import Button from "../Button";
import InputText from "../InputText";

const UserForm = ({
  onClick,
  textBoton,
  listRegions,
  handleDistrict,
  district,
}: any) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);
  const [adress, setAdress] = useState({
    region: "",
    district: "",
  });

  const onRegionChange = (e: any) => {
    setAdress({ ...adress, region: e.target.value });
    handleDistrict(e.target.value);
  };
  const onDistrictChange = (e: any) => {
    setAdress({ ...adress, district: e.target.value });
  };
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
          <InputText
            width="439px"
            label="Cargo"
            onChange={onGradeChange}
            value={user.grade}
          />
          <InputText
            width="439px"
            label="Direccion"
            onChange={onGradeChange}
            value={user.grade}
          />
          <div className="flex gap-[5px] text-[#555555] h-[50px]">
            <select
              name=""
              id="region"
              className="w-[217px] border border-[#CCCCCC] rounded-[5px] p-[15px] bg-white"
              onChange={onRegionChange}
              value={adress.region}
            >
              <option value="" disabled>
                Region
              </option>
              {listRegions.map((item: any) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <select
              name=""
              id="district"
              className="w-[217px] bg-white border border-[#CCCCCC] rounded-[5px] p-[15px] "
              onChange={onDistrictChange}
              value={adress.district}
            >
              <option value="" disabled>
                Comuna
              </option>
              {district.map((item: any) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Button width="250px" text={textBoton} onClick={onClick} />
    </div>
  );
};

export default UserForm;
