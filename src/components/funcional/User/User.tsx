import { useAppSelector } from '../../../redux/hooks';

import Link from "../../ui/Link"

const UserButton = () => {
  return (
    <button className='Right float-right mr-[20px] cursor-pointer'>
        <UserPic width='40px' height='40px' />              
    </button>
  )
}

const UserInfo = ({nombre, cargo}:any) => {
    return (
      <div className="flex items-center h-full">
        <div className="UserInfo flex flex-col justify-center items-center 
              w-[193px] h-[231px] mb-[50px]">  
          <div className="mb-[11px]">
            <UserPic width='120px' 
                    height='120px' />  
          </div>   
          <h1 className='text-[20px] font-[600]'>{nombre}</h1>            
          <h1 className='text-[20px]'>{cargo}</h1> 
          <div className="font-[400] my-[30px]">
            <Link text='Cambiar mi contraseña' url='' />           
          </div>
        </div>
      </div>
    )
}

const UserPic = ({width, height}:any) => {
    const {user} = useAppSelector((state) => state.userSlice);
    return (
        <div
            style={{backgroundImage: `url(${user.picture.large})`, 
                    width: `${width}`, 
                    height: `${height}`}}
            className={`bg-contain bg-no-repeat rounded-full`}>
        </div>
    )
}

export {UserButton, UserInfo, UserPic};