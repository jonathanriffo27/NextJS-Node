import {useState} from 'react';
import { useAppSelector } from '../../../redux/hooks';

import { UserInfo } from '../User';
import Menu from '../../ui/Menu';
import Header from '../../ui/Header';
import Body from '../../layout/Body';

const Main = () => { 
  const [showMenu, setshowMenu] = useState(false)
  const {user} = useAppSelector((state) => state.userSlice);
  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header showMenu={showMenu} setShowMenu={setshowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setshowMenu} />
        <UserInfo nombre={`${user.name.first} ${user.name.last}`} 
                  cargo={user.name.title} />
      </Body>
    </div>
  )
}

export default Main