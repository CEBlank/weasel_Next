/* export type Books = {
  sku: number,
  isbn: number,
  Title: string,
  Publisher: string,
  Brand: string, 
  Alternative_Cover: boolean, 
  BookType: string, 
  image: string,
  group: string,
  year: number,
  price: number,
  stock: number
  };

export type Accessories = { 
  sku: number,
  Title: string,
  Publisher: string,
  Brand: string, 
  Alternative_Cover: boolean, 
  BookType: string, 
  image: string,
  group: string,
  year: number,
  price: number,
  stock: number
};

export type Cards = { 
  sku: number,
  Title: string,
  Publisher: string,
  Brand: string, 
  Alternative_Cover: boolean, 
  BookType: string, 
  image: string,
  group: string,
  year: number,
  price: number,
  stock: number
}; */

export const products = [
  {
    id: 1,
    isbn: 123,
    name: "Dungeons & Dragons Monster Manual (2024)",
    Publisher: "Wizards of the Coast",
    Brand: "Dungeons and Dragons", 
    Alternative_Cover: false, 
    BookType: "hardcover", 
    imageSrc:'https://cdn.discordapp.com/attachments/1279517664649416795/1448863751204769864/wocd37110.png?ex=693ccf04&is=693b7d84&hm=bb857391af424ac808b3fc3523b46d05443a3aae1e7896cf45e0e02237386b5f&',
    imageAlt:"",
    group: "books",
    year: 2024,
    price: 49.99,
    stock: 5
  }, 
  {
    id: 2,
    isbn: 123,
    name: "Dungeons & Dragons Dungeon Master's Guide (2024)",
    Publisher: "Wizards of the Coast",
    Brand: "Dungeons and Dragons", 
    Alternative_Cover: false, 
    BookType: "hardcover", 
    imageSrc: 'https://cdn.discordapp.com/attachments/1279517664649416795/1448863756267421816/wocd37100.png?ex=693ec946&is=693d77c6&hm=7fbaf4bda42cc63cc4d6e07da4f7e8c838eeecb87571d8ebd5f243ee26fc8e25&',
    imageAlt:"",
    group: "books",
    year: 2024,
    price: 49.99,
    stock: 4
  }, 
  {
    id: 3,
    isbn: 123,
    name: "Dungeons & Dragons Monster Manual (2024)",
    Publisher: "Wizards of the Coast",
    Brand: "Dungeons and Dragons", 
    Alternative_Cover: true, 
    BookType: "hardcover", 
    imageSrc: 'https://cdn.discordapp.com/attachments/1279517664649416795/1449585561080823808/iu_.png?ex=693f6f41&is=693e1dc1&hm=ecd10480fffd5e61d5871cc935883c31d476d499c386c884e5d76a5bd6b92568&',
    imageAlt:"",
    group: "books",
    year: 2024,
    price: 89.99,
    stock: 1
  }, 
  {
    id: 4,
    isbn: "n/a",
    name: "Root - A Game of Woodland Might and Right ",
    Publisher: "Leder Games",
    Brand: "Root (Leder Games)", 
    Alternative_Cover: false, 
    BookType: "n/a", 
    imageSrc: "https://media.discordapp.net/attachments/1279517664649416795/1448862815208210432/led01000.png?ex=693ec865&is=693d76e5&hm=4007a37a0d3870c420d42dc58c38d03cd280e16d575e4139ed7a5c67b5d74cd4&",
    imageAlt:"",
    group: "board game",
    year: 2020,
    price: 60.00,
    stock: 3
  },
    {
    id: 5,
    isbn: "n/a",
    name: "Foam Head Rainbow Dice Set (7 piece)",
    Publisher: "N/A",
    Brand: "Foam Head", 
    Alternative_Cover: false, 
    BookType: "n/a", 
    imageSrc: "https://media.discordapp.net/attachments/1279517664649416795/1449594040054976625/image.png?ex=693f7727&is=693e25a7&hm=16fa650a6f2aee997ab5203550c7df95e1ccb2b9982b13315328280ed236e36b&",
    imageAlt:"",
    group: "dice sets",
    year: 2024,
    price: 11.00,
    stock: 11
  },
]