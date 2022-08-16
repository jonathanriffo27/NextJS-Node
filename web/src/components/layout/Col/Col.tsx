
const Col = ({children, justify='justify-center', gap}:any) => {
  return (
    <div className={`flex ${justify} items-center ${gap}`}>{children}</div>
  )
}

export default Col