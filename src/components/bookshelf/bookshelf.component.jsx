import { BookShelfContainer, BookLink, BackButton } from "./bookshelf.styles";

import { getTopics } from "../../books.data";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const BookShelf = () => {
  const topics = getTopics();

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <Fragment>
      <BackButton onClick={goToHome}>&larr; Back to Home Page</BackButton>

      <BookShelfContainer>
        <h1>All This Author's Books</h1>
        {topics.map(({ name, id }) => (
          <div key={id}>
            <BookLink to={id}>&rarr; {name}</BookLink>
          </div>
        ))}
      </BookShelfContainer>
    </Fragment>
  );
};

export default BookShelf;
