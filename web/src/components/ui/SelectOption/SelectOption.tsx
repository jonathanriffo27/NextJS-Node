const SelectOption = ({ onChange, value, list }: any) => {
  return (
    <select
      name=""
      id="region"
      className="w-[217px] border border-[#CCCCCC] rounded-[5px] p-[15px] bg-white"
      onChange={onChange}
      value={value.region}
    >
      <option value="">Region</option>
      {list.map((item: any) => (
        <option value={item.id} key={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
