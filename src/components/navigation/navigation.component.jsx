import { NavigationComponent } from "./navigation.styles";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationComponent>
      <Link to="/biography">Biography</Link>
      <Link to="/topics">Books</Link>
      <Link to="/reviews">Reviews</Link>
    </NavigationComponent>
  );
};

export default Navigation;
