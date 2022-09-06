import Col from "../../layout/Col";
import Row from "../../layout/Row";
import { EditButtons } from "../Canal/Canal";

const Table = ({
  display,
  borderBottom,
  height = "h-full",
  usersList,
  handleEdit,
}: any) => {
  return (
    <Row display={display} borderBottom={borderBottom}>
      <div className={`${height} py-[10px] w-[684px] m-auto`}>
        <div className="flex flex-col gap-[2px] h-full rounded-[5px] border border-[#CCCCCC] p-[3px]">
          <TableHeader />
          <TableDetails usersList={usersList} handleEdit={handleEdit} />
        </div>
      </div>
    </Row>
  );
};

const TableHeader = () => {
  return (
    <Row height="h-[36px]" display="flex gap-[2px] font-bold">
      <Col gap="g-[2px]" className="bg-[#EDEDED] h-[36px] w-[81px]">
        #
      </Col>
      <Col className="bg-[#EDEDED] flex-grow">Nombre</Col>
    </Row>
  );
};

const TableDetails = ({ usersList, handleEdit }: any) => {
  return (
    <div className="flex flex-col gap-[2px]">
      {usersList.map((item: any, index: any) => (
        <Row height="h-[36px]" display="flex gap-[2px]" key={index}>
          <Col
            gap="gap-[2px]"
            className={`${
              index % 2 === 0 ? "bg-[#EEF2FF]" : "bg-[#F8F8F8]"
            } h-[36px] w-[81px]`}
          >
            {index + 1}
          </Col>
          <Col
            className={`${
              index % 2 === 0 ? "bg-[#EEF2FF]" : "bg-[#F8F8F8]"
            } flex-grow px-[15px]`}
            display="flex justify-between items-center"
          >
            <span>{`${item.name} ${item.paternallastname}`}</span>
            <EditButtons onClick={() => handleEdit(item)} />
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Table;
export { TableHeader, TableDetails };
