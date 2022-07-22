import {
  BigBookShelfContainer,
  Teste,
  BookShelfContainer,
  BookLink,
  BackButton,
} from "./bookshelf.styles";

import { getTopics } from "../../books.data";
import { useNavigate } from "react-router-dom";
import { SlideInLeftDiv, PulseDiv } from "../../animation";

import Typewriter from "typewriter-effect";

const BookShelf = () => {
  const topics = getTopics();

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <BigBookShelfContainer>
      <Teste>
        <h1>
          <Typewriter
            options={{
              strings: [
                "The words that come out of the books only come to life when the reader reads them.",
                "I'm nothing without the words.",
                "Reading is the best choice for today.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              pauseFor: 1000,
              deleteSpeed: 20,
              wrapperClassName: "typewriting",
              cursorClassName: "typewritingcursor",
            }}
          />
        </h1>
        <h2>
          The words that come out of the books only come to life when the reader
          reads them.
        </h2>
      </Teste>
      <SlideInLeftDiv>
        <h1>All This Author's Books</h1>
      </SlideInLeftDiv>
      <BookShelfContainer>
        {topics.map(({ name, id }) => (
          <div key={id}>
            <PulseDiv>
              <BookLink to={id}>
                <p>{name}</p>
              </BookLink>
            </PulseDiv>
          </div>
        ))}
      </BookShelfContainer>
      <BackButton onClick={goToHome}>&larr; Back to Home Page</BackButton>
    </BigBookShelfContainer>
  );
};

export default BookShelf;
