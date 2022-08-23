import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { assignPassword, setError } from '../../redux/slices/userSlice';
import { useRouter } from 'next/router'
import axios from "axios";

import apiKey from '../../utils/config';
import InputText from '../../components/ui/InputText';
import Button from '../../components/ui/Button';



export default function resetPassword({data}:any) {
    const router = useRouter()
    const {error} = useAppSelector((state) => state.userSlice);
    const dispatch = useAppDispatch();

    const initialtState = { generatedPassword: '',
                            password: '',
                            confirmPassword: '',
                            disabled: true }

    const [resetPasswordForm, setResetPasswordForm] = useState(initialtState);

    const generatePassword = () => {
        let password = "";
        const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i <= 12; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        return password;
    }

    useEffect(() => {
        setResetPasswordForm({...resetPasswordForm, generatedPassword: generatePassword()});
    }, [])

    const handleClick = () => {
        dispatch(assignPassword(data, resetPasswordForm.password))
        router.push('/')
    }
    
    const handleChangeGeneratedPassword = (e:any) => {
        setResetPasswordForm({...resetPasswordForm, generatedPassword: e.target.value})
    }

    const handleChangePassword = (e:any) => {
        setResetPasswordForm({...resetPasswordForm, password: e.target.value})
    }

    const handleChangeConfirmPassword = (e:any) => {
        setResetPasswordForm({...resetPasswordForm, confirmPassword: e.target.value})
        comparePassword();
    }

    const comparePassword = () => {
        if(resetPasswordForm.password == resetPasswordForm.confirmPassword && resetPasswordForm.password !== '') {
            dispatch(setError(''))
            setResetPasswordForm({...resetPasswordForm, disabled: false})
        } else {
            dispatch(setError('Contraseñas no coinciden'))
        }
    }

    return (
        <div className="Login flex flex-col justify-center items-center w-screen h-screen gap-[30px]">
            <div className='flex justify-center items-center'>   
                <span className="text-[25px] font-medium">Reestablecer contraseña</span>    
            </div>
            <div className='flex flex-col gap-[5px]'>
                <InputText  label='Contraseña generica' 
                            width='303px' 
                            type='email'
                            onChange={handleChangeGeneratedPassword} 
                            value={resetPasswordForm.generatedPassword} />
                <InputText  label='Password' 
                            width='303px' 
                            type='password'
                            onChange={handleChangePassword} 
                            value={resetPasswordForm.password} />
                <InputText  label='Confirmar password' 
                            width='303px' 
                            type='password'
                            onChange={handleChangeConfirmPassword} 
                            value={resetPasswordForm.confirmPassword} />
            </div>
            <Button text='Registrar' 
                    width='250px' 
                    disabled={resetPasswordForm.disabled} 
                    onClick={handleClick} />
            <div className='flex justify-center'>
                <p className='mensaje text-red-500 text-md absolute bottom-[180px]'>{error}</p>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    try {
        const {data} = await axios.get('http://localhost:3001/api/user/getAll',
        {headers: {api_key: apiKey}});

        const paths = data.data.map((item:any) => ({params: {id: `${item.id}`}}))
        
        return {
            paths,
            fallback: false
        }
    }catch(error) {
        console.log(error)
    }
}

export async function getStaticProps({params}:any) {
    try {
        const data = params.id;
        
        return {
            props: {
                data,
            }
        }
    } catch (error) {
        console.log(error);
    }   
}