import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  createUser,
  updateUser,
  setUser,
} from "../../../redux/slices/userSlice";

import { UserPic } from "../../funcional/User";
import Button from "../Button";
import InputText from "../InputText";

const UserForm = ({ onClick, textBoton, userInfo }: any) => {
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

  const handleClick = () => {
    {
      userInfo.id === ""
        ? dispatch(createUser(user))
        : dispatch(updateUser(user));
    }
    onClick();
  };

  return (
    <div className="flex flex-col items-center gap-[30px]">
      <div className="flex">
        <UserPic width="215px" height="215px" />
        <div className="flex flex-col gap-[5px] w-[439px]">
          <InputText
            width="146px"
            label="Rut"
            onChange={onRutChange}
            value={userInfo.id === "" ? user.rut : userInfo.rut}
          />
          <InputText
            width="439px"
            label="Nombres"
            onChange={onNameChange}
            value={userInfo.id === "" ? user.name : userInfo.name}
          />
          <div className="flex flex-wrap gap-[5px]">
            <InputText
              width="217px"
              label="Apellido paterno"
              onChange={onPaternalChange}
              value={
                userInfo.id === ""
                  ? user.paternalLastName
                  : userInfo.paternalLastName
              }
            />
            <InputText
              width="217px"
              label="Apellido materno"
              onChange={onMaternalChange}
              value={
                userInfo.id === ""
                  ? user.maternalLastName
                  : userInfo.maternalLastName
              }
            />
            <InputText
              width="217px"
              label="Correo electronico"
              onChange={onEmailChange}
              value={userInfo.id === "" ? user.email : userInfo.email}
            />
            <InputText
              width="217px"
              label="Telefono"
              onChange={onPhoneChange}
              value={userInfo.id === "" ? user.phone : userInfo.phone}
            />
          </div>
          <InputText
            width="439px"
            label="Cargo"
            onChange={onGradeChange}
            value={userInfo.id === "" ? user.grade : userInfo.grade}
          />
        </div>
      </div>
      <Button width="250px" text={textBoton} onClick={handleClick} />
    </div>
  );
};

export default UserForm;
