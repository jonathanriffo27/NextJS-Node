import { useState } from "react";

import Menu from "../../ui/Menu";
import Header from "../../ui/Header";
import Body from "../../layout/Body";
import Content from "../../layout/Content";

const Main = ({ children }: any) => {
  const [showMenu, setshowMenu] = useState(false);

  return (
    <div className="main h-screen w-screen overflow-hidden bg-white">
      <Header showMenu={showMenu} setShowMenu={setshowMenu} />
      <Body>
        <Menu showMenu={showMenu} setShowMenu={setshowMenu} />
        <Content>{children}</Content>
      </Body>
    </div>
  );
};

export default Main;
