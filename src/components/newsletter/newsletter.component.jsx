import { NewsLetterContainer } from "./newsletter.styles";
import Form from "../form/form.component";

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <h1>Sign up to my newsletter:</h1>
      <p>
        To receive This Author’s monthly newsletter, please fill in the form
        below and click submit.
      </p>
      <Form />
      <p>
        By clicking SUBMIT, I consent to using my details to send me This Author
        newsletters.
      </p>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
