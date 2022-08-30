import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { assignNewPassword, setError } from '../../../redux/slices/userSlice';
import { useRouter } from 'next/router';

import InputText from '../../../components/ui/InputText';
import Button from '../../../components/ui/Button';

const ResetPasswordValidate = () => {
    const router = useRouter()
    const dispatch = useAppDispatch(); 
    const initialtState = { generatedPassword: '',
                            password: '',
                            confirmPassword: '',
                            disabled: true }
    const [resetPasswordForm, setResetPasswordForm] = useState(initialtState);
    const {error, genericPassword} = useAppSelector((state) => state.userSlice);

    useEffect(() => {
        if(genericPassword.success) {
            router.push(`/`)
        }        
      }, [genericPassword])

    const handleClick = async () => dispatch(assignNewPassword(genericPassword.userId, resetPasswordForm.password, resetPasswordForm.generatedPassword))
    
    
    const handleChangeGeneratedPassword = (e:any) => setResetPasswordForm({...resetPasswordForm, generatedPassword: e.target.value})
    

    const handleChangePassword = (e:any) => setResetPasswordForm({...resetPasswordForm, password: e.target.value})
    

    const handleChangeConfirmPassword = (e:any) => {
        if(e.target.value === resetPasswordForm.password){
            dispatch(setError(''))
            setResetPasswordForm({...resetPasswordForm, disabled: false})
            setResetPasswordForm({...resetPasswordForm, confirmPassword: e.target.value})
            // setEmail({...email, disabled: false})
        } else {
            dispatch(setError('Contraseñas no coinciden'))
            setResetPasswordForm({...resetPasswordForm, confirmPassword: e.target.value})
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
                            type='password'
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
                    // disabled={resetPasswordForm.disabled} 
                    onClick={handleClick} />
            <div className='flex justify-center'>
                <p className='h-[30px] text-red-500 text-md absolute bottom-[180px]'>{error}</p>
            </div>
        </div>
    )
}

export default ResetPasswordValidate