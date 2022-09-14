const SelectOption = ({
  onChange,
  value,
  value_id,
  list,
  width = "w-[217px]",
  title,
}: any) => {
  return (
    <select
      name=""
      id="region"
      className={`${width} border border-[#CCCCCC] outline-none focus:border-2 focus:border-[#99a0b3] focus:bg-[#fdffdf] required:border-red-500 rounded-[5px] p-[15px] bg-white text-[#555555]`}
      onChange={onChange}
      value={value_id}
    >
      {/* <option value="">{value === "" || value === null ? title : value}</option> */}
      {list.map((item: any) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
