import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const categories = [
  {
    id: 1,
    title: "Romance",
    // route: "shop/book1",
  },
  {
    id: 2,
    title: "Kids",
    // route: "shop/book2",
  },
  {
    id: 3,
    title: "Chick Lit",
    // route: "shop/book2",
  },
];

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
