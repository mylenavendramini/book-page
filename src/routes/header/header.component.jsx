import { Fragment, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks";
import { Outlet } from "react-router-dom";
import Burger from "../../components/burger/burger.component";
import Menu from "../../components/menu/menu.component";
import { HeaderContainer, HeaderLink } from "./header.styles";

const Header = () => {
  const node = useRef();
  useOnClickOutside(node, () => {
    setIsBurgerOpen(false);
  });
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <Fragment>
      <HeaderContainer>
        <HeaderLink to={"/"}>
          Author <br /> Name
        </HeaderLink>
        <div ref={node}>
          <Burger
            isBurgerOpen={isBurgerOpen}
            setIsBurgerOpen={setIsBurgerOpen}
          />
          <Menu isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />
        </div>
      </HeaderContainer>
      <Outlet />
    </Fragment>
  );
};

export default Header;
