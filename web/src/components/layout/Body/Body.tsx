
const Body = (props: any) => {
  return (
    <div className='flex flex-col justify-start items-center w-screen h-[calc(100%-50px)]'>
        {props.children}
    </div>
  )
}

export default Body