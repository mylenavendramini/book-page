import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { getAllBooks } from "../../books.data.js";

import {
  AllBooksContainer,
  ReviewsContainer,
  BookShelfContinaer,
  LeftQuote,
  RightQuote,
} from "./swiper.styles";
import { BookShelfLink } from "../directory/directory.styles";

export const SwiperAllBooks = () => {
  const allBooks = getAllBooks();
  return (
    <AllBooksContainer>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={6}
        breakpoints={{
          // when window width is >= 640px
          200: {
            width: 400,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          // when window width is >= 1000px
          1300: {
            width: 1300,
            slidesPerView: 6,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {allBooks.map((sub) => (
          <div key={sub.id}>
            <SwiperSlide>
              <BookShelfLink to={`/topics/all/${sub.id}`}>
                {" "}
                <img src={sub.imageUrl} alt={`${sub.name}`} />
              </BookShelfLink>
              <BookShelfLink to={sub.id}>
                <p>{sub.name}</p>
              </BookShelfLink>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </AllBooksContainer>
  );
};

export const SwiperReviews = () => {
  const allBooks = getAllBooks();
  return (
    <ReviewsContainer>
      <LeftQuote>&#8220;</LeftQuote>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {allBooks.map((sub) => (
          <div key={sub.id}>
            <SwiperSlide>
              <p>{sub.review}</p>

              <h4>
                {sub.jornal}, about {sub.name}
              </h4>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <RightQuote>&#8221;</RightQuote>
    </ReviewsContainer>
  );
};

export const SwiperBookShelf = () => {
  return (
    <BookShelfContinaer>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <h2>The words only come to life when the reader reads them.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>I'm nothing without the words.</h2>
        </SwiperSlide>
        <SwiperSlide>
          <h2>Reading is the best choice for today.</h2>
        </SwiperSlide>
      </Swiper>
    </BookShelfContinaer>
  );
};
export default SwiperAllBooks;
