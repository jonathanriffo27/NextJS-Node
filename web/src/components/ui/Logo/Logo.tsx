import Link from 'next/link';
import Image from "next/image";

import LogoImg from '../../../../public/logo.png'

const Logo = ({width, height, margin, onClick}:any) => {
  const handleClick = () => {
    <Link href={onClick} />
  }
  return (
    <div onClick={handleClick}
    style={{width, height, margin}}
    className='bg-contain bg-no-repeat cursor-pointer'>
        <Image
            src={LogoImg}
            alt="Logo de la empresa"
          />
    </div>
  )
}

export default Logo