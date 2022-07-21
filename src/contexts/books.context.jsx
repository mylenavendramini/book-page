import { createContext, useState } from "react";

import categories from "../books.data";

export const BooksContext = createContext({
  categories: [],
});

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(categories);
  const value = { categories };
  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};
