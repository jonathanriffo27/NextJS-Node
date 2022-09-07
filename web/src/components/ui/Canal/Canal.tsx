import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Icon from "../Icon";

const Canal = ({ text }: any) => {
  return (
    <div className="flex items-center h-[60px] w-[357px] px-[20px] rounded-[5px] border border-[#CCCCCC]">
      <span className="flex flex-grow font-[400] text-[16px]">{text}</span>
      <EditButtons />
    </div>
  );
};

const EditButtons = ({ handleEdit, handleDelete }: any) => {
  return (
    <div className="flex gap-[6px] cursor-pointer">
      <Icon
        icon={faPencil}
        color="#959595"
        fontSize="20px"
        onClick={handleEdit}
      />
      <Icon
        icon={faTrashCan}
        color="#959595"
        fontSize="20px"
        onClick={handleDelete}
      />
    </div>
  );
};

export default Canal;
export { EditButtons };
