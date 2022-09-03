const Col = ({
  children,
  display = "flex justify-center items-center",
  gap,
  className,
}: any) => {
  return <div className={` ${display} ${className} ${gap}`}>{children}</div>;
};

export default Col;
