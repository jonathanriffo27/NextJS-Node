import { useState } from "react";

import Menu from "../../ui/Menu";
import Header from "../../ui/Header";
import Body from "../../layout/Body";
import Modal from "../../ui/Modal";
import Content from "../../layout/Content";
import Title from "../../ui/Title";
import Search from "../../ui/Search";
import Buttons from "../../ui/Buttons";
import CanalesSection from "./CanalesSection";

const Canales = () => {
  const [modalOn, setModalOn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => setModalOn(!modalOn);

  return (
    <div className="main h-screen w-screen overflow-hidden bg-white transition-all duration-300">
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Content>
          <Title title="Canales" borderBottom="yes" />
          <Search
            label="Buscar"
            width="439px"
            icon="buscar"
            borderBottom="yes"
          />
          <CanalesSection />
          <Buttons
            onClick={handleClick}
            display="grid place-content-center grid-cols-3"
            text="Mostrando 1 al 3 de 3 canales"
            pageButtons="yes"
          />
        </Content>
      </Body>
      {modalOn && (
        <Modal
          onClick={handleClick}
          textBoton="Registrar"
          title="Nuevo Canal"
          label="Nombre"
        />
      )}
    </div>
  );
};

export default Canales;
