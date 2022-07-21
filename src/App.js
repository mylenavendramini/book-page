import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Header from "./routes/header/header.component";

import Footer from "./routes/footer/footer.component";
import Biography from "./routes/biography/biography.component";
import Books from "./routes/books/books.component";
import Book from "./routes/book/book.component";
import Reviews from "./routes/reviews/reviews.component";
import NotFound from "./routes/notFound/not-found.component";

import "./App.css";
import { Fragment } from "react";
import FirstCap from "./components/first-cap/first-cap.components";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Fragment>
              <Header />

              <Footer />
            </Fragment>
          }
        >
          <Route index element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/topics/*" element={<Books />}>
            <Route path=":topicId" element={<Book />}>
              <Route path=":bookId" element={<FirstCap />} />
            </Route>
          </Route>
          <Route path="/reviews/" element={<Reviews />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
