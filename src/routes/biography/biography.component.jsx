import { Fragment } from "react";
import {
  BiographyContainer,
  AllBooksContainer,
  BookShelfLink,
  ProfileImg,
  BackButton,
  CheckButton,
} from "./biography.styles";
import { getAllBooks } from "../../books.data";

import { useNavigate } from "react-router-dom";

const Biography = () => {
  const allBooks = getAllBooks();

  const navigate = useNavigate();
  const GoToTopics = () => {
    navigate("/topics");
  };
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <BiographyContainer>
        <div>
          <ProfileImg
            src="https://i.ibb.co/GpY7B3N/profile1.png"
            alt="Author Profile"
          />
          <h1>Biography</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam
            quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo
            integer malesuada nunc vel. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget. Lectus arcu bibendum at varius vel
            pharetra vel turpis nunc. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget. Lectus arcu bibendum at varius vel
            pharetra vel turpis nunc. Ut diam quam nulla porttitor massa.
            Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.
            Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.
            Aliquam ultrices sagittis orci a scelerisque purus semper eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam
            quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo
            integer malesuada nunc vel. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget. Lectus arcu bibendum at varius vel
            pharetra vel turpis nunc. Aliquam ultrices sagittis orci a
            scelerisque purus semper eget. Lectus arcu bibendum at varius vel
            pharetra vel turpis nunc. Ut diam quam nulla porttitor massa.
          </p>
          <BackButton onClick={goToHomePage}>
            &larr; Back to Home Page
          </BackButton>
        </div>

        <AllBooksContainer>
          {" "}
          <h2 onClick={GoToTopics}>Books</h2>
          {allBooks
            .filter((_, idx) => idx < 3)
            .map((sub) => (
              <div key={sub.id}>
                <BookShelfLink to={`/topics/all/${sub.id}`}>
                  {" "}
                  <img src={sub.imageUrl} alt={`${sub.name}`} />
                </BookShelfLink>
                <BookShelfLink to={sub.id}>{sub.name}</BookShelfLink>
              </div>
            ))}
        </AllBooksContainer>
        <CheckButton onClick={GoToTopics}>
          &larr; Check all the books
        </CheckButton>
      </BiographyContainer>
    </Fragment>
  );
};

export default Biography;
