import { ProfileContainer, BookDirectory } from "./directory.styles.jsx";

import SwiperAllBooks from "../swiper/swiper.components.jsx";
import { SwiperReviews } from "../swiper/swiper.components.jsx";

import { SlideInLeftDiv, PulseDiv } from "../../animation";

import { useNavigate } from "react-router-dom";

import Navigation from "../navigation/navigation.component";
import NewsLetter from "../newsletter/newsletter.component";

import Typewriter from "typewriter-effect";

const Directory = () => {
  // const allBooks = getAllBooks();

  const navigate = useNavigate();
  const GoToTopics = () => {
    navigate("/topics");
  };

  return (
    <div>
      <Navigation />
      <ProfileContainer>
        <SlideInLeftDiv>
          <img
            src="https://i.ibb.co/R22rGdD/profile-frame2.png"
            alt="Author Profile"
          />
        </SlideInLeftDiv>
        <div>
          <PulseDiv>
            <h1>Welcome!</h1>
          </PulseDiv>
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
          <Typewriter
            options={{
              strings: [
                "With love,Author",
                "Con amor, Author",
                "Com amor, Author",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              wrapperClassName: "typewriting",
              cursorClassName: "typewritingcursor",
            }}
          />
          <h4>Love, Author</h4>
        </div>
      </ProfileContainer>

      <SwiperReviews />

      <BookDirectory>
        <h1 onClick={GoToTopics}>Books</h1>
      </BookDirectory>
      <SwiperAllBooks />

      <NewsLetter />
    </div>
  );
};

export default Directory;
