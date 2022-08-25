import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { validateUser } from '../../../redux/slices/userSlice'
import Link from 'next/link'

import Logo from "../../ui/Logo"
import InputText from "../../ui/InputText"
import Button from "../../ui/Button"
import LinkUi  from "../../ui/Link"

const Login = () => {
  const {error} = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState({ email:'', password:''});

  const handleChangeEmail = (e:any) => setLogin({...login, email: e.target.value })   
  const handleChangePassword = (e:any) => setLogin({...login, password: e.target.value})
  
  const handleClick = () => {
    dispatch(validateUser(login.email, login.password))
  }
  return (
    <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
      <Logo width='303px' height='43px' />
      <div className='flex flex-col gap-[5px]'>
        <InputText label='Email' 
                   width='303px' 
                   type='email' 
                   onKeyUp={handleClick}
                   onChange={handleChangeEmail} 
                   value={login.email} />
        <InputText label='Password' 
                   width='303px' 
                   type='password' 
                   onKeyUp={handleClick}
                   onChange={handleChangePassword} 
                   value={login.password} />
      </div>
      <Button text='Ingresar' width='250px' onClick={handleClick} />
      <LinkUi text='Olvide mi contraseña' id='67e96deb-36c2-4f5b-a7bd-c0f96cd2aae1' />
      <p className='mensaje text-red-500 text-md absolute bottom-[180px] h-[30px]'>{error}</p>
    </div>
  ) 
}

export default Login