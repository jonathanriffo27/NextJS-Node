import Link from 'next/link';

const LinkUi = ({text, id}:any) => {
  
  return (
    <div
    className='Link flex justify-center items-center w-[303px] '>
      <Link href={`/resetPassword`}>
        <a className='outline-none font-semibold text-[#0500FF] active:scale-90 hover:underline duration-300'>{text}</a>
      </Link>
    </div>
  )
}

export default LinkUi