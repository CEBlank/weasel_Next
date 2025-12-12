//import { runMongo } from "app/lib/mongoDB";

const Shop = () => {

const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://Vercel-Admin-weasel-games-db:tRrqVtYrdB4BTybU@weasel-games-db.1iwb3zs.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function runMongo() {

  console.log("start mongo async");
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
      console.log("TRY");

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("CLOSE");
    await client.close();
  }
}
runMongo().catch(console.dir);







const products = [
  {
    id: 1,
    name: 'Dungeons&Dragons: Player Handbook 2024',
    href: '#',
    price: '$49.99',
    imageSrc: 'https://cdn.discordapp.com/attachments/1279517664649416795/1448863751204769864/wocd37110.png?ex=693ccf04&is=693b7d84&hm=bb857391af424ac808b3fc3523b46d05443a3aae1e7896cf45e0e02237386b5f&',
    imageAlt: 'Dungeons and Dragons player handbook 2024 edition.',
    stock: '5',
  },
  {
    id: 2,
    name: 'Root - A Game of Woodland Might and Right',
    href: '#',
    price: '$60.00',
    imageSrc: '#',
    imageAlt: '#',
  },
 /*  {
    id: 3,
    name: 'Arcadia Quest',
    href: '#',
    price: '$99.99',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 4,
    name: 'Pathfinder Bestiary',
    href: '#',
    price: '$49.99',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 5,
    name: 'Card Keeper',
    href: '#',
    price: '$18.00',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 6,
    name: 'Focus Multi-Pack',
    href: '#',
    price: '$39.00',
    imageSrc: '#',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    name: 'Monster Manual 2024',
    href: '#',
    price: '$50.00',
    imageSrc: '#',
    imageAlt: '#',
  },
  {
    id: 8,
    name: 'Focus Carry Pouch',
    href: '#',
    price: '$32.00',
    imageSrc: '#',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  }, */
]

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 bg-white">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 bg-white">
          {products.map((product) => (
            <span key={product.id} 
                  // href={product.href} 
                  className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc} 
                className="aspect-square w-full rounded-lg object-cover bg-gray-300 group-hover:opacity-75 xl:aspect-7/8"
              ></img>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop;