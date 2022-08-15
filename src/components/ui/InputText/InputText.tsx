import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Icon from "../Icon";

const InputText = ({ label, width, type, icon, onChange, value, onKeyUp }: any) => {
  const handleKeyUp = (e:any) => {
    if(e.key === 'Enter'){
      onKeyUp()
    }
  }
  return (
    <div
       style={{ width }}
       className={`flex justify-center items-center relative`}>
      <input
        onKeyUp={handleKeyUp}
        id={label}
        type={type}
        name={label}
        onChange={onChange}
        value={value}
        placeholder=" "
        className={`w-full border border-[#CCCCCC] 
        ${icon ? "rounded-l-[5px]" : "rounded-[5px]"}  
        h-[60px] pl-[15px] pt-[17px] peer placeholder-transparent outline-none focus:border-2 focus:border-[#99a0b3] focus:bg-[#fdffdf] required:border-red-500`}/>
      <label
        htmlFor={label}
        className="left-[15px] text-[12px] top-[4px] text-[#555555]
            peer-placeholder-shown:text-[16px]
            peer-placeholder-shown:top-[17px] 
            peer-placeholder-shown:text-[#7c7b7b] 
            peer-focus:text-[12px] 
            peer-focus:top-[4px]
            duration-300 absolute">
        {label}
      </label>
      {icon && (
        <button 
              className="flex justify-center items-center rounded-r-[5px] w-[40px] h-[60px] bg-[#ededed] border-y border-r border-[#CCCCCC] active:border-[#99a0b3] active:border-2 ">
          <Icon icon={faMagnifyingGlass} color="#959595" fontSize="20px" />
        </button>)}
    </div>
  );
};

export default InputText;
