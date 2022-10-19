import {
  BigBookShelfContainer,
  BookShelfBox,
  BookShelfContainer,
  BookLink,
  BackButton,
} from "./bookshelf.styles";

import { getTopics } from "../../books.data";
import { useNavigate } from "react-router-dom";
import { SlideInLeftDiv, PulseDiv } from "../../animation";

import Typewriter from "typewriter-effect";
import { SwiperBookShelf } from "../swiper/swiper.components";

const BookShelf = () => {
  const topics = getTopics();

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <BigBookShelfContainer>
      <BookShelfBox>
        <h1>
          <Typewriter
            options={{
              strings: [
                "The words only come to life when the reader reads them.",
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
        <br />
        <SwiperBookShelf />
      </BookShelfBox>
      <SlideInLeftDiv>
        <h1>All Author's Books</h1>
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
