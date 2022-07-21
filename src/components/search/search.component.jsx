// // import { useSelector } from "react-redux";

// import { selectCategories } from "../../store/categories/categories.selector";

// import { useState } from "react";

// import {
//   SuggestionContainer,
//   CategoriesContainer,
//   InputContainer,
//   ItemDetails,
//   Name,
//   Price,
// } from "./search.styles";

// const Search = ({ name }) => {
//   //   const categoryItems = useSelector(selectCategories);
//   const [searchTerm, setSearchTerm] = useState("");
//   //   const categoryMap = categoryItems
//   //     .map(({ items }) => items)
//   //     .flat()
//   //     .flat();

//   return (
//     <SuggestionContainer>
//       <InputContainer>
//         <input
//           type="text"
//           name="Search"
//           id="searchInput"
//           placeholder="Search the book"
//           onChange={(event) => {
//             setSearchTerm(event.target.value);
//           }}
//         />
//       </InputContainer>
//       <CategoriesContainer>
//         {categoryMap
//           .filter((item) => {
//             if (searchTerm === "") {
//               return "";
//             } else if (
//               item.name.toLowerCase().includes(searchTerm.toLowerCase())
//             ) {
//               return item;
//             }
//             return "";
//           })
//           .map((item) => {
//             return (
//               <ItemDetails key={item.id}>
//                 <img src={item.imageUrl} alt={`${item.name}`} />

//                 <Name>{item.name}</Name>
//                 <br />
//                 <Price>${item.price}</Price>
//               </ItemDetails>
//             );
//           })}
//       </CategoriesContainer>
//     </SuggestionContainer>
//   );
// };

// export default Search;
