import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { listUsers } from "../../../redux/slices/userSlice";

import Header from "../../ui/Header";
import Body from "../../layout/Body";
import Content from "../../layout/Content";
import Menu from "../../ui/Menu";
import Table from "../../ui/Table";
import ModalUserRegister from "../../ui/Modal/ModalUserRegister";
import Title from "../../ui/Title/Title";
import Search from "../../ui/Search/Search";
import Buttons from "../../ui/Buttons/Buttons";

const Users = () => {
  const { list } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const [modalRegisterOn, setModalRegisterOn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClickRegister = () => {
    setModalRegisterOn(!modalRegisterOn);
  };

  useEffect(() => {
    dispatch(listUsers());
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-white transition-all duration-300">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Content>
          <Title title="Usuarios" borderBottom="yes" />
          <Search
            label="Texto a buscar"
            width="648px"
            icon="buscar"
            borderBottom="yes"
          />
          <Table display="flex-grow" borderBottom="yes" usersList={list} />
          <Buttons
            onClick={handleClickRegister}
            display="flex justify-between items-center"
            text={`${list.length} registros`}
          />
        </Content>
      </Body>
      {modalRegisterOn && (
        <ModalUserRegister
          onClick={handleClickRegister}
          title="Nuevo Usuario"
          textBoton="Registrar"
        />
      )}
    </div>
  );
};

export default Users;
