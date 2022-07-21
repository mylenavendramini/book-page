import { Routes, Route } from "react-router-dom";
import BookItSelf from "../../components/book-itself/book-itself.component";

import FirstCap from "../../components/first-cap/first-cap.components";

const Book = () => {
  return (
    <div>
      <Routes>
        <Route index element={<BookItSelf />} />
        <Route path=":bookId" element={<FirstCap />} />
      </Routes>
    </div>
  );
};

export default Book;
