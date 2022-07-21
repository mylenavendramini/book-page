import { Fragment } from "react";
import { FooterContainer, FooterLink } from "./footer.styles";

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/biography">Biography</FooterLink>
        <FooterLink to="/topics">Books</FooterLink>
        <FooterLink to="/reviews">Reviews</FooterLink>
      </FooterContainer>
    </Fragment>
  );
};

export default Footer;
