import { useState } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setError } from '../../redux/slices/userSlice';
import { useRouter } from 'next/router'

import InputText from "../../components/ui/InputText"
import Button from "../../components/ui/Button"
import apiKey from "../../utils/config";
import { assignGenericPassword, getByEmail } from "../../redux/slices/userSlice";

const getEmail = ({emails}:any) => {
    const router = useRouter()
    const {error} = useAppSelector((state) => state.userSlice);
    const dispatch = useAppDispatch();
    const inicialState = {
        value: '',
        disabled: true
    }
    const [email, setEmail] = useState(inicialState);

    const handleChangeEmail = (e:any) => {
        if(emails.indexOf(e.target.value) !== -1){
            setEmail({...email, disabled: false})
            dispatch(setError(''))
            setEmail({...email, value: e.target.value})
        } else {
            dispatch(setError('Correo electronico no valido'))
            setEmail({...email, value: e.target.value})
        }  
         
    }

    const handleClick = async () => {
        const {data} = await getByEmail(email.value)
        assignGenericPassword(data.id);
        router.push(`/resetPassword/${data.id}`)
    }   

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

export default getEmail

export async function getStaticProps() {
    try {
        const {data} = await axios.get('http://localhost:3001/api/user/getAll',
        {headers: {api_key: apiKey}});

        const emails = data.data.map((item:any) => (item.email));

        return {
            props: {
                emails,
            }
        }
    } catch (error) {
        console.log(error);
    }   
}