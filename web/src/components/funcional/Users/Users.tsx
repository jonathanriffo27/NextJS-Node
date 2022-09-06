import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { listUsers, resetUser, setUser } from "../../../redux/slices/userSlice";

import Header from "../../ui/Header";
import Body from "../../layout/Body";
import Content from "../../layout/Content";
import Menu from "../../ui/Menu";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Title from "../../ui/Title/Title";
import Search from "../../ui/Search/Search";
import Buttons from "../../ui/Buttons/Buttons";
import UserForm from "../../ui/Modal/UserForm";

const Users = () => {
  const { list, user } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClickModal = () => {
    dispatch(resetUser());
    setModal(!modal);
  };

  const handleEdit = (row: any) => {
    dispatch(
      setUser({
        id: row.id,
        rut: row.rut,
        name: row.name,
        paternalLastName: row.paternallastname,
        maternalLastName: row.maternallastname,
        email: row.email,
        phone: row.phone,
        urlPhoto: "",
        grade: row.grade,
      })
    );
    setModal(!modal);
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
          <Table
            display="flex-grow"
            borderBottom="yes"
            usersList={list}
            handleEdit={handleEdit}
          />
          <Buttons
            onClick={handleClickModal}
            display="flex justify-between items-center"
            text={`${list.length} registros`}
          />
        </Content>
      </Body>
      {modal && (
        <Modal title="Nuevo Usuario" onClick={() => setModal(!modal)}>
          <UserForm
            textBoton="Registrar"
            userInfo={user}
            onClick={handleClickModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Users;
