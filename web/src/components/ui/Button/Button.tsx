import Icon from '../Icon'

const Button = ({text, width, onClick, icon, disabled=false}:any) => {
  return (
    <div style={{width}}
         className='Button flex justify-center items-center h-[40px] font-semibold text-[white] rounded-full bg-[#03495C] active:scale-90 duration-300'>
      <button className='flex items-center justify-center w-full  outline-none' 
              disabled={disabled}
              onClick={onClick}>
                {text}
                {icon && <Icon icon={icon} fontSize='22px' />}
      </button>
    </div>
  )
}

export default Button
