import { NavigationComponent } from "./navigation.styles";
import { Link } from "react-router-dom";
import { SlideInRightDiv } from "../../animation";

const Navigation = () => {
  return (
    <SlideInRightDiv>
      <NavigationComponent>
        <Link to="/biography">Biography</Link>
        <Link to="/topics">Books</Link>
        <Link to="/reviews">Reviews</Link>
      </NavigationComponent>
    </SlideInRightDiv>
  );
};

export default Navigation;
