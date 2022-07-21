import React from "react";
import { StyledMenu } from "./menu.styles";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ isBurgerOpen }) => {
  return (
    <StyledMenu isBurgerOpen={isBurgerOpen}>
      <Link to="/biography">Biography</Link>
      <br />
      <Link to="/topics">Books</Link>
      <br />
      <Link to="/reviews">Reviews</Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  isBurgerOpen: bool.isRequired,
};
export default Menu;
