import Row from "../../layout/Row";
import InputText from "../InputText";

const Search = ({ label, width, icon, borderBottom }: any) => {
  return (
    <Row height="h-[80px]" borderBottom={borderBottom}>
      <InputText label={label} width={width} type="text" icon={icon} />
    </Row>
  );
};

export default Search;
