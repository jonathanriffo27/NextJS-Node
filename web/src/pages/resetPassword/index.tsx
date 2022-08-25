import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setError } from '../../redux/slices/userSlice';
import { useRouter } from 'next/router'

import InputText from "../../components/ui/InputText";
import Button from "../../components/ui/Button";
import { assignGenericPassword } from "../../redux/slices/userSlice";

const sendEmail = () => {
    const router = useRouter()
    const dispatch = useAppDispatch();
    const inicialState = { value: '', disabled: true}
    const {error, genericPassword} = useAppSelector((state) => state.userSlice);
    const [email, setEmail] = useState(inicialState);

    useEffect(() => {
        if(genericPassword.state) {
            router.push(`/resetPassword/${genericPassword.id}`)
        }        
      }, [genericPassword])

    const handleChangeEmail = (e:any) => {
            setEmail({...email, value: e.target.value})
            dispatch(setError(''))
            // setEmail({...email, disabled: false})
    }

    const handleClick = async () => dispatch(assignGenericPassword(email.value));

  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
            <div className='flex justify-center items-center'>   
                <span className="text-[25px] font-medium">Reestablece tu contraseña</span>    
            </div>
            <div className='flex flex-col gap-[5px]'>
                <InputText  label='Ingrese su correo electronico' 
                            width='303px' 
                            type='email'
                            onChange={handleChangeEmail} 
                            value={email.value} />
            </div>
            <Button text='Recupera contraseña' 
                    width='250px' 
                    // disabled={email.disabled} 
                    onClick={handleClick} />
            <div className='flex justify-center'>
                <p className='text-red-500 text-md'>{error}</p>
            </div>
    </div>
  )
}

export default sendEmail;