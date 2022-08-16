import { 
    faPencil, faTrashCan
  } from '@fortawesome/free-solid-svg-icons';
import Icon from '../Icon'

const Canal = ({text}:any) => {
  return (
    <div className='flex items-center h-[60px] w-[357px] pl-[19px] rounded[5px] border border-[#CCCCCC]'>
        <span className='flex flex-grow font-[400] text-[16px]'>{text}</span>
        <div className='flex mr-[20px] gap-[6px] cursor-pointer'>
            <Icon icon={faPencil} color='#959595' fontSize='20px' />
            <Icon icon={faTrashCan} color='#959595' fontSize='20px' />
        </div>
    </div>
  )
}

export default Canal