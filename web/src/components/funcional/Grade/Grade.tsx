import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setUser, resetUser } from "../../../redux/slices/userSlice";

import {
  createGrade,
  listGrade,
  updateGrade,
  deleteGrade,
} from "../../../redux/slices/gradeSlice";
import Title from "../../ui/Title";
import Search from "../../ui/Search";
import Buttons from "../../ui/Buttons";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import InputText from "../../ui/InputText";
import Table from "../../ui/Table";

const Grade = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userSlice);
  const { listGrades } = useAppSelector((state) => state.gradeSlice);
  const [modalOn, setModalOn] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleClick = () => {
    {
      user.id === ""
        ? dispatch(createGrade(user.grade))
        : dispatch(updateGrade(user.id, user.grade));
    }
    dispatch(setUser({ ...user, grade: "" }));
    setModalOn(!modalOn);
  };

  const handleModalDelete = () => {
    dispatch(deleteGrade(user.id));
    dispatch(resetUser());
    setModalDelete(!modalDelete);
  };

  const onGradeChange = (e: any) =>
    dispatch(setUser({ ...user, grade: e.target.value }));

  const handleEdit = (row: any) => {
    dispatch(setUser({ ...user, grade: row.name, id: row.id }));
    setModalOn(!modalOn);
  };

  const handleDelete = (row: any) => {
    dispatch(setUser({ ...user, id: row.id }));
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    dispatch(listGrade());
  }, [listGrades]);

  return (
    <>
      <Title title="Cargos" borderBottom="yes" />
      <Search label="Buscar" width="439px" icon="buscar" borderBottom="yes" />
      <Table
        display="flex-grow"
        borderBottom="yes"
        list={listGrades}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Buttons
        onClick={() => setModalOn(!modalOn)}
        display="grid place-content-center grid-cols-3"
        text="Mostrando 1 al 3 de 3 canales"
        pageButtons="yes"
      />
      {modalOn && (
        <Modal title="Nuevo Cargo" onClick={() => setModalOn(!modalOn)}>
          <InputText
            width="357px"
            label="Cargo"
            onChange={onGradeChange}
            value={user.grade}
          />
          <Button width="250px" text="Registrar" onClick={handleClick} />
        </Modal>
      )}
      {modalDelete && (
        <Modal title="Eliminar Cargo" onClick={() => setModalOn(!modalOn)}>
          <span className="text-[16px]">{`¿Desea eliminar el cargo ${user.grade}?`}</span>
          <Button width="250px" text="Eliminar" onClick={handleModalDelete} />
        </Modal>
      )}
    </>
  );
};

export default Grade;
