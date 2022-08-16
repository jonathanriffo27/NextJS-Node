import { useAppSelector } from '../../../redux/hooks';

import Login from '../Login'
import Main from '../Main'

const Switch = () => {
  const {user} = useAppSelector((state) => state.userSlice);
  return  user.email !== "" ? <Main /> : <Login />;
}

export default Switch