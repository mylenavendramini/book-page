import {
  FirstCapContainer,
  FirstCapBox,
  ChapterButton,
  BackButton,
  Dropdown,
} from "./first-cap.styles";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getBook } from "../../books.data";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const FirstCap = () => {
  const { topicId, bookId } = useParams();

  const {
    name,
    description,
    firstCap,
    imageUrl,
    price,
    pages,
    date,
    review,
    jornal,
  } = getBook({
    topicId,
    bookId,
  });

  const navigate = useNavigate();
  const GoToTopics = () => {
    navigate("/topics");
  };

  const [show, setShow] = useState(false);

  return (
    <FirstCapContainer>
      <BackButton onClick={GoToTopics}>&larr; Check all the books</BackButton>
      <FirstCapBox>
        <div>
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>Pages: {pages} </h3>
          <h3>Date: {date} </h3>
          <h3>Price: $ {price}</h3>
          <h3>
            What the
            {jornal} is saying: "{review}"
          </h3>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
            Buy with Amazon
          </Button>
        </div>
      </FirstCapBox>
      <ChapterButton onClick={() => setShow((s) => !s)}>
        &darr; Read the first chapter
      </ChapterButton>
      <Dropdown style={{ visibility: show ? "visible" : "hidden" }}>
        {/* Make a button that open the firstCap */}
        <h4>First Chapter</h4>
        <h4>{firstCap}</h4>
      </Dropdown>
    </FirstCapContainer>
  );
};

export default FirstCap;
