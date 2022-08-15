import Logo from "../Logo";
import { MenuButton } from "../Menu/Menu";
import { UserButton } from "../../funcional/User";

const Header = ({showMenu, setShowMenu}:any) => {
  return (
    <header className={`flex items-center justify-between
               bg-[#FFFFFF] h-[50px] pl-[20px] shadow-md`}>
        <div className="Left flex items-center">
          <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
          <Logo width='143px' height='20px' margin='0 0 0 25px' onClick='/' />
        </div>
        <UserButton />
    </header>
  )
}

export default Header 