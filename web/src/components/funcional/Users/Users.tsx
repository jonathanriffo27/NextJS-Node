import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  listUsers,
  resetUser,
  setUser,
  deleteUser,
  createUser,
  updateUser,
} from "../../../redux/slices/userSlice";
import { listRegion } from "../../../redux/slices/regionSlice";
import {
  listDistrict,
  setDistrict,
  getDistrictByRegionId,
  setDistrictListByRegionId,
} from "../../../redux/slices/districtSlice";
import { listGrade } from "../../../redux/slices/gradeSlice";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Title from "../../ui/Title/Title";
import Search from "../../ui/Search/Search";
import Buttons from "../../ui/Buttons/Buttons";
import UserForm from "../../ui/Modal/UserForm";
import Button from "../../ui/Button";

const Users = () => {
  const { list, user } = useAppSelector((state) => state.userSlice);
  const { listRegions } = useAppSelector((state) => state.regionSlice);
  const { districtList, districtListByRegionId } = useAppSelector(
    (state) => state.districtSlice
  );
  const { listGrades } = useAppSelector((state) => state.gradeSlice);

  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleClickModal = () => {
    {
      user.id === "" ? dispatch(createUser(user)) : dispatch(updateUser(user));
    }
    dispatch(resetUser());
    setModal(!modal);
  };

  const handleModalDelete = () => {
    dispatch(deleteUser(user.id));
    dispatch(resetUser());
    setModalDelete(!modalDelete);
  };

  const handleEdit = (row: any) => {
    dispatch(
      setUser({
        id: row.id,
        rut: row.rut,
        name: row.name,
        paternalLastName: row.paternallastname,
        maternalLastName: row.maternallastname,
        adress: row.adress,
        region: row.region_name,
        district: row.district_name,
        email: row.email,
        phone: row.phone,
        urlPhoto: "",
        grade: row.grade_name,
      })
    );
    setModal(!modal);
  };

  const handleDelete = (row: any) => {
    dispatch(
      setUser({
        id: row.id,
        rut: row.rut,
        name: row.name,
        paternalLastName: row.paternallastname,
        maternalLastName: row.maternallastname,
        email: row.email,
        phone: row.phone,
        grade: row.grade,
      })
    );
    setModalDelete(!modalDelete);
  };

  const handleDistrict = (id: string) => {
    dispatch(getDistrictByRegionId(id));
  };

  const handleModalCloseButton = () => {
    dispatch(resetUser());
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(listUsers());
    dispatch(listRegion());
    dispatch(listDistrict());
    dispatch(listGrade());
  }, []);

  return (
    <>
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
        list={list}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <Buttons
        onClick={() => setModal(!modal)}
        display="flex justify-between items-center"
        text={`${list.length} registros`}
      />
      {modal && (
        <Modal title="Nuevo Usuario" onClick={handleModalCloseButton}>
          <UserForm
            textBoton="Registrar"
            onClick={handleClickModal}
            listRegions={listRegions}
            handleDistrict={handleDistrict}
            district={districtListByRegionId}
            listGrades={listGrades}
          />
        </Modal>
      )}
      {modalDelete && (
        <Modal
          title="Eliminar Usuario"
          onClick={() => setModalDelete(!modalDelete)}
        >
          <span className="text-[16px]">{`¿Desea eliminar a ${user.name} ${user.paternalLastName} ?`}</span>
          <Button width="250px" text="Eliminar" onClick={handleModalDelete} />
        </Modal>
      )}
    </>
  );
};

export default Users;
