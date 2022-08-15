
const Link = ({text, url}:any) => {
  return (
    <div
      className='Link flex justify-center items-center w-[303px] '>
        <a href={url} className='outline-none font-semibold text-[#0500FF] active:scale-90 hover:underline duration-300'>{text}</a>
    </div>
  )
}

export default Link