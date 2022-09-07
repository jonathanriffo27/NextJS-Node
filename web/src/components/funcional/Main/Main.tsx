import { useState, useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";

import { UserInfo } from "../User";
import Menu from "../../ui/Menu";
import Header from "../../ui/Header";
import Body from "../../layout/Body";
import Content from "../../layout/Content";

const Main = ({ children }: any) => {
  const [showMenu, setshowMenu] = useState(false);
  const { user } = useAppSelector((state) => state.userSlice);
  console.log(children);

  useEffect(() => {
    alert(1);
  }, []);

  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header showMenu={showMenu} setShowMenu={setshowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setshowMenu} />
        <Content>
          {/* {children.props ? (
            <UserInfo
              nombre={`${user.name} ${user.paternalLastName}`}
              cargo={user.grade}
            />
          ) : (
            children
          )} */}
          {children}
        </Content>
      </Body>
    </div>
  );
};

export default Main;
