import { useParams, useNavigate } from "react-router-dom";
import { getTopic } from "../../books.data";
import {
  BookItSelfContainer,
  BookShelfLink,
  BackButton,
} from "./book-itself.styles";
import { Fragment } from "react";

const BookItSelf = () => {
  const { topicId } = useParams();
  const topic = getTopic(topicId);

  const navigate = useNavigate();
  const GoToTopics = () => {
    navigate("/topics");
  };
  return (
    <Fragment>
      <BackButton onClick={GoToTopics}>&larr; Back to previous page</BackButton>
      <BookItSelfContainer>
        {topic.books.map((sub) => (
          <div key={sub.id}>
            <BookShelfLink to={sub.id}>
              {" "}
              <img src={sub.imageUrl} alt={`${sub.name}`} />
            </BookShelfLink>

            <BookShelfLink to={sub.id}>
              <p>{sub.name}</p>
            </BookShelfLink>
          </div>
        ))}
      </BookItSelfContainer>
    </Fragment>
  );
};

export default BookItSelf;
