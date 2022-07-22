import { BookShelfContainer, BookLink, BackButton } from "./bookshelf.styles";

import { getTopics } from "../../books.data";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { SlideInLeftDiv, SlideInRightDiv } from "../../animation";

import NewsLetter from "../newsletter/newsletter.component";

const BookShelf = () => {
  const topics = getTopics();

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <BookShelfContainer>
        <SlideInLeftDiv>
          <h1>All This Author's Books</h1>
        </SlideInLeftDiv>
        {topics.map(({ name, id }) => (
          <div key={id}>
            <SlideInRightDiv>
              <BookLink to={id}>&rarr; {name}</BookLink>
            </SlideInRightDiv>
          </div>
        ))}
      </BookShelfContainer>
      <BackButton onClick={goToHome}>&larr; Back to Home Page</BackButton>
      <NewsLetter />
    </Fragment>
  );
};

export default BookShelf;
