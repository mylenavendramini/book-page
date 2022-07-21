const topics = [
  {
    id: "all",
    name: "All Books",
    books: [
      {
        id: "Love-at-first-sight",
        name: "Love at first sight",
        imageUrl: "https://i.ibb.co/k3L9kNr/book2.png",
        price: 25,
        pages: 300,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Daily Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "endless-love",
        name: "Endless love",
        imageUrl: "https://i.ibb.co/Hd7Fw2j/book1.png",
        price: 30,
        pages: 340,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Endless love, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " The Sun",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
      },
      {
        id: "this-is-our-story",
        name: "This is our story",
        imageUrl: "https://i.ibb.co/V991TzC/book3.png",
        price: 45,
        pages: 508,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of This is our story, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Sunday Times",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam.",
      },
      {
        id: "about-us",
        name: "About us",
        imageUrl: "https://i.ibb.co/jHfSCFq/This-book.png",
        price: 38,
        pages: 440,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of About us, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Sunday Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Ut diam quam nulla porttitor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam.",
      },
      {
        id: "about-that-night",
        name: "About that night",
        imageUrl: "https://i.ibb.co/HnzKd8w/This-book-1.png",
        price: 30,
        pages: 411,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
        firstCap:
          "First chapter of About that night, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        jornal: " OK!",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "olivia-and-little-cat",
        name: "Olivia and little cat",
        imageUrl: "https://i.ibb.co/vxN6dLT/book-1.png",
        price: 25,
        pages: 354,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
        firstCap:
          "First chapter of About that night, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        jornal: " Sunday Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Ut diam quam nulla porttitor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam.",
      },
      {
        id: "the-littlest-bird",
        name: "The littlest bird",
        imageUrl: "https://i.ibb.co/qgkrs7n/book-2.png",
        price: 30,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Endless love, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " The Sun",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
      },
      {
        id: "the-tale-of-the-monster-falls",
        name: "The tale of the monster falls",
        imageUrl: "https://i.ibb.co/Xy7fMtL/book-3.png",
        price: 45,
        pages: 492,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Daily Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "changing-the-world",
        name: "Changing the world",
        imageUrl: "https://i.ibb.co/ZgvDYM2/book-5.png",
        price: 25,
        pages: 323,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Grazia",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "how-is-this-possible",
        name: "How is this possible?",
        imageUrl: "https://i.ibb.co/XF9W8xq/book-4.png",
        price: 30,
        pages: 398,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Bella",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam",
      },
    ],
  },
  {
    id: "romance",
    name: "Romance",
    books: [
      {
        id: "Love-at-first-sight",
        name: "Love at first sight",
        imageUrl: "https://i.ibb.co/k3L9kNr/book2.png",
        price: 25,
        pages: 300,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Daily Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "endless-love",
        name: "Endless love",
        imageUrl: "https://i.ibb.co/Hd7Fw2j/book1.png",
        price: 30,
        pages: 340,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Endless love, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " The Sun",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
      },
      {
        id: "this-is-our-story",
        name: "This is our story",
        imageUrl: "https://i.ibb.co/V991TzC/book3.png",
        price: 45,
        pages: 508,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of This is our story, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Sunday Times",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam.",
      },
      {
        id: "about-us",
        name: "About us",
        imageUrl: "https://i.ibb.co/jHfSCFq/This-book.png",
        price: 38,
        pages: 440,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of About us, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Sunday Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Ut diam quam nulla porttitor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam.",
      },
      {
        id: "about-that-night",
        name: "About that night",
        imageUrl: "https://i.ibb.co/HnzKd8w/This-book-1.png",
        price: 30,
        pages: 411,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
        firstCap:
          "First chapter of About that night, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        jornal: " OK!",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: "kids",
    name: "Kids",
    books: [
      {
        id: "olivia-and-little-cat",
        name: "Olivia and little cat",
        imageUrl: "https://i.ibb.co/vxN6dLT/book-1.png",
        price: 25,
        pages: 354,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel.",
        firstCap:
          "First chapter of About that night, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        jornal: " Sunday Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Ut diam quam nulla porttitor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum iaculis eu non diam.",
      },
      {
        id: "the-littlest-bird",
        name: "The littlest bird",
        imageUrl: "https://i.ibb.co/qgkrs7n/book-2.png",
        price: 30,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Endless love, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " The Sun",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
      },
      {
        id: "the-tale-of-the-monster-falls",
        name: "The tale of the monster falls",
        imageUrl: "https://i.ibb.co/Xy7fMtL/book-3.png",
        price: 45,
        pages: 492,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Daily Express",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    id: "chicklit",
    name: "ChickLit",
    books: [
      {
        id: "changing-the-world",
        name: "Changing the world",
        imageUrl: "https://i.ibb.co/ZgvDYM2/book-5.png",
        price: 25,
        pages: 323,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Grazia",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: "how-is-this-possible",
        name: "How is this possible?",
        imageUrl: "https://i.ibb.co/XF9W8xq/book-4.png",
        price: 30,
        pages: 398,
        date: "01/01/2001",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget.",
        firstCap:
          "First chapter of the Love at first sight, romance book. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Lectus arcu bibendum at varius vel pharetra vel turpis nunc.",
        jornal: " Bella",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa. Fermentum iaculis eu non diam",
      },
    ],
  },
];

export function getTopics() {
  return topics;
}

export function getAllBooks() {
  return topics.find(({ id }) => id === "all").books;
}

export function getTopic(topicId) {
  return topics.find(({ id }) => id === topicId);
}

export function getBook({ bookId, topicId }) {
  return topics
    .find(({ id }) => id === topicId)
    .books.find(({ id }) => id === bookId);
}

export default topics;
