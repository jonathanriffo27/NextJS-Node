const SelectOption = ({
  onChange,
  value,
  list,
  width = "w-[217px]",
  title,
}: any) => {
  return (
    <select
      name=""
      id="region"
      className={`${width} border border-[#CCCCCC] rounded-[5px] p-[15px] bg-white text-[#555555]`}
      onChange={onChange}
      value={value}
    >
      <option value="">{value === "" || value === null ? title : value}</option>
      {list.map((item: any) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
