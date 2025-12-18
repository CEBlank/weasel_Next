//stand-in for database 

export type ProductType = {
  id: number,
  isbn: string,
  name: string,
  Publisher: string,
  Brand: string, 
  Alternative_Cover: boolean, 
  BookType: string, 
  imageSrc:string,
  imageAlt: string,
  group: string,
  year: number,
  price: number,
  stock: number, 
  quantity: number;
  checked: undefined
  };

export type selectedItem = {
  Product: ProductType,
  checked: true
}



export const product: ProductType[] = [
  {
    id: 1,
    isbn: "123",
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
    stock: 5,
    quantity: undefined,
    checked: undefined
  }, 
  {
    id: 2,
    isbn: "123",
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
    stock: 4,
    quantity: undefined,
    checked: undefined
  }, 
  {
    id: 3,
    isbn: "123",
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
    stock: 1,
    quantity: undefined,
    checked: undefined
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
    stock: 3,
    quantity: undefined,
    checked: undefined
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
    stock: 11,
    quantity: undefined,
    checked: undefined
  },
]

export const communityPosts = [
  {
    id: 1,
    title: 'Tournament Night',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Nov 21, 2025',
    datetime: '2025-11-21',
    category: { title: 'Past Events', href: '#' },
    author: {
      name: 'SpongeBob',
      role: 'Frycook / Magic:The Gathering Player',
      href: '#',
      imageUrl:
        '/user.png',
    },
  },
    {
    id: 2,
    title: 'Root Adventure Night',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'May 1, 2025',
    datetime: '2020-05-01',
    category: { title: 'Past Events', href: '/pages/events' },
    author: {
      name: 'Patrick',
      role: 'Root Player',
      href: '#',
      imageUrl:
        '/user.png',
    },
  },
      {
    id: 3,
    title: 'Open Paint',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 5, 2025',
    datetime: '2025-03-05',
    category: { title: 'Past Events', href: '/pages/events' },
    author: {
      name: 'Squidward',
      role: 'Artist',
      href: '#',
      imageUrl:
        '/user.png',
    },
  },
      {
    id: 4,
    title: 'Adventure League',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Jan 2, 2025',
    datetime: '2025-01-01',
    category: { title: 'Past Events', href: '/pages/events' },
    author: {
      name: 'Mr. Crabs',
      role: 'D&D Adventure League DM',
      href: '#',
      imageUrl:
        '/user.png',
    },
  },
]

export const pastEvents = [
  {
    id: 1,
    name: "Magic:The Gathering Tournament 2025",
    date: 'Nov 21, 2025',
    datetime: '2025-11-21',
    image: "/trophy.jpg",
    alt: "trophy",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
  {
    id:2,
    name: "Yu-Gi-Oh Casual Night",
    date: 'Oct 1, 2025',
    datetime: '2025-10-01',
    image: "/yugiohh.jpg",
    alt: "yugiohh",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
    {
    id: 3,
    name: "Dungeons & Dragons: Adventure League",
    date: 'Dec 4, 2025',
    datetime: '2025-12-04',
    image: "/gameNight.jpg",
    alt: "Game Night",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  },
]

export const news = [
  {
    id: 1,
    name:"Tabletop Game Events",
    image:"/d&d.jpg",
    alt: "dungeons and dragons",
    content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    href:"#",
    linkName:"Check Events"
  },
    {
    id: 2,
    name:"Card Tournaments",
    image:"/mtg.jpg",
    alt: "magic the gathering",
    content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    href:"#",
    linkName:"Check Events"
  },
    {
    id: 3,
    name:"Open Paint Nights",
    image:"/warhammer40k.jpg",
    alt: "warhammer mini",
    content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    href:"#",
    linkName:"Check Community"
  },
  {
    id: 4,
    name:"Festive Week",
    image:"/confetti.jpg",
    alt: "confetti image",
    content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    href:"/pages/community",
    linkName:"Check Community"
  },
]

export const announcements = [
  {
    id: 1,
    title: "Festive Week is coming!",
    content: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi",
    alt:"festive picture",
    image:"/confetti.jpg",
    date: "December 28th through January 4th"
  }
]

export const teamMembers = [
  {
    name: "Jac",
    title:"Founder",
    image:"/jac.jpg",
    alt:"Jac Founder"
  },
    {
    name: "Dip",
    title:"Marketing",
    image:"/dip.jpg",
    alt:"Jac Founder"
  },
    {
    name: "Pip",
    title:"Manager",
    image:"/pip2.jpg",
    alt:"Jac Founder"
  },
    {
    name: "Roe",
    title:"Manager",
    image:"/roe.jpg",
    alt:"Jac Founder"
  },
]