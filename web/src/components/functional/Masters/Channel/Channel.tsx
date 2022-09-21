import { useState } from "react";

import Modal from "../../../ui/Modal";
import Title from "../../../ui/Title";
import Search from "../../../ui/Search";
import Buttons from "../../../ui/Buttons";
import CanalesSection from "./CanalesSection";
import InputText from "../../../ui/InputText";
import Button from "../../../ui/Button";

const Channel = () => {
  const [modalOn, setModalOn] = useState(false);
  const handleClick = () => setModalOn(!modalOn);

  return (
    <>
      <Title title="Canales" borderBottom="yes" />
      <Search label="Buscar" width="439px" icon="buscar" borderBottom="yes" />
      <CanalesSection />
      <Buttons
        onClick={handleClick}
        display="grid place-content-center grid-cols-3"
        text="Mostrando 1 al 3 de 3 canales"
        pageButtons="yes"
      />
      {modalOn && (
        <Modal onClick={handleClick} title="Nuevo Canal">
          <InputText width="357px" label="Nombre" />
          <Button width="250px" text="Registrar" onClick={handleClick} />
        </Modal>
      )}
    </>
  );
};

export default Channel;
