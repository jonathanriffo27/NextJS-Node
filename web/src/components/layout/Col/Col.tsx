const Col = ({ children, justify = "justify-center", gap, className }: any) => {
  return (
    <div className={`flex ${justify} items-center ${className} ${gap}`}>
      {children}
    </div>
  );
};

export default Col;
