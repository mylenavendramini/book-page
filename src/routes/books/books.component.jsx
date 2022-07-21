import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Book from "../book/book.component";

import BookShelf from "../../components/bookshelf/bookshelf.component";

const Books = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<BookShelf />} />
        <Route path=":topicId/*" element={<Book />} />
      </Routes>
    </Fragment>
  );
};

export default Books;
