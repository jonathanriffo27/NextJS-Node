const Row = ({
  height = "h-[60px]",
  display = "grid place-content-center",
  children,
  borderBottom,
  className,
}: any) => {
  return (
    <div
      className={`${display} ${className} ${height} ${
        borderBottom && "border-b border-[#CCCCCC]"
      }`}
    >
      {children}
    </div>
  );
};

export default Row;
