import {
  ReviewsContainer,
  ReviewContainer,
  ReviewBox,
  AllBooksContainer,
  BookShelfLink,
} from "./reviews.styles";

import { getAllBooks } from "../../books.data";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  const allBooks = getAllBooks();
  const navigate = useNavigate();
  const GoToTopics = () => {
    navigate("/topics");
  };

  return (
    <ReviewsContainer>
      <ReviewContainer>
        <ReviewBox>
          {allBooks
            .filter((_, idx) => idx < 10)
            .map((sub) => (
              <div key={sub.id}>
                <p>{sub.review}</p>
                <h4>
                  {sub.jornal}, about {sub.name}
                </h4>
              </div>
            ))}
        </ReviewBox>

        <h1 className="out" onClick={GoToTopics}>
          Books
        </h1>
        <AllBooksContainer>
          {" "}
          <h1 onClick={GoToTopics}>Books</h1>
          {allBooks
            .filter((_, idx) => idx > 3)
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
      </ReviewContainer>
    </ReviewsContainer>
  );
};

export default Reviews;
