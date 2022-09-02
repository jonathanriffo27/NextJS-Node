import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Header from "../../ui/Header";
import Body from "../../layout/Body";
import Content from "../../layout/Content";
import Menu from "../../ui/Menu";
import Row from "../../layout/Row";
import InputText from "../../ui/InputText";
import Col from "../../layout/Col";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import { ModalUserRegister } from "../../ui/Modal/Modal";

const Users = () => {
  const [modalRegisterOn, setModalRegisterOn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClickRegister = () => setModalRegisterOn(!modalRegisterOn);

  return (
    <div className="h-screen w-screen overflow-hidden bg-white transition-all duration-300">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Content>
          <Row borderBottom="yes">
            <span className="text-[32px] font-bold">Usuarios</span>
          </Row>
          <Row height="h-[80px]" borderBottom="yes">
            <InputText
              label="Texto a buscar"
              width="684px"
              type="email"
              icon="buscar"
            />
          </Row>
          <Row height="flex-grow" display="" borderBottom="yes">
            <Table className="" />
          </Row>
          <Row display="grid place-content-center grid-cols-3">
            <Col justify="justify-start">
              <span className="font-semibold">1 registro</span>
            </Col>
            <Col gap="gap-[3px]"></Col>
            <Col justify="justify-end">
              <Button
                icon={faPlus}
                width="40px"
                onClick={handleClickRegister}
              />
            </Col>
          </Row>
        </Content>
      </Body>
      {modalRegisterOn && <ModalUserRegister onClick={handleClickRegister} />}
    </div>
  );
};

export default Users;
