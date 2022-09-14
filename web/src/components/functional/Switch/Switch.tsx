import { useAppSelector } from "../../../redux/hooks";

import Login from "../Login";
import Main from "../Main";

const Switch = ({ children }: any) => {
  const { user } = useAppSelector((state) => state.uiSlice);
  return user.email !== "" ? <Main>{children}</Main> : <Login />;
};

export default Switch;
