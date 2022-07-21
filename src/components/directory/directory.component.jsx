import {
  ProfileContainer,
  NewsLetter,
  BookShelfLink,
  AllBooksContainer,
  BookDirectory,
} from "./directory.styles.jsx";

import { getAllBooks } from "../../books.data.js";

import { useNavigate } from "react-router-dom";

import Navigation from "../navigation/navigation.component";
import Form from "../form/form.component";

const Directory = () => {
  const allBooks = getAllBooks();

  const navigate = useNavigate();
  const GoToTopics = () => {
    navigate("/topics");
  };

  return (
    <div>
      <Navigation />
      <ProfileContainer>
        <div>
          <img
            src="https://i.ibb.co/GpY7B3N/profile1.png"
            alt="Author Profile"
          />
        </div>
        <div>
          <h1>Welcome!</h1>
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
          </p>
          <h4>Love, Author Name</h4>
        </div>
      </ProfileContainer>

      <BookDirectory>
        <h1 onClick={GoToTopics}>Books</h1>
        <AllBooksContainer>
          {allBooks
            .filter((_, idx) => idx < 6)
            .map((sub) => (
              <div key={sub.id}>
                <BookShelfLink to={`/topics/all/${sub.id}`}>
                  {" "}
                  <img src={sub.imageUrl} alt={`${sub.name}`} />
                </BookShelfLink>

                <BookShelfLink to={sub.id}>
                  <p>{sub.name}</p>
                </BookShelfLink>
              </div>
            ))}
        </AllBooksContainer>
      </BookDirectory>

      <NewsLetter>
        <h1>Sign up to my newsletter:</h1>
        <p>
          To receive Author’s monthly newsletter, please fill in the form below
          and click submit.
        </p>
        <Form />
        <p>
          By clicking SUBMIT, I consent to you using my details to send me
          Author newsletters.
        </p>
      </NewsLetter>
    </div>
  );
};

export default Directory;
