import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({icon, color, fontSize, onClick}:any) => {
  return (
      <FontAwesomeIcon style={{color, fontSize }}
                       icon={icon}
                       onClick={onClick} />
  )
}

export default Icon