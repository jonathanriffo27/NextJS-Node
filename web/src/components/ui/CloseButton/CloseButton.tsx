import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faXmark
  } from '@fortawesome/free-solid-svg-icons'; 

const CloseButton = ({onClick}:any) => {
  return (
    <button onClick={onClick}
            className='bg-[#D9D9D9] h-[30px] w-[30px] rounded-full absolute
    right-[20px]'>
      <div className='flex justify-center items-center text-[20px]'>
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </button>
  )
}

export default CloseButton