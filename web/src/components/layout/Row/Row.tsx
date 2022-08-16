
const Row = ({height='h-[60px]', grid, children}:any) => {
  return (
    <div className={`grid ${grid} place-content-center ${height} border-b border-[#CCCCCC]`}>
        {children}
    </div>
  )
}

export default Row