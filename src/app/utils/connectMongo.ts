import client from "app/lib/mongoDB";
import { GetServerSideProps } from "next";
//import { Product } from "app/lib/products";

type mongoProduct = {
  id: string,
  Title: string,
  Publisher: string,
  Price: number,
  Type: string, 
  AlternateCover: boolean,
  Stock: number,
  image: string
}



/* const getServerSideProps = (async () => {
  const itemsCollection = client.db("products").collection("books");

  const ping = await client.connect()
  const database = await client.db("products");
  const collection = await database.collection("books");
  const itemList = await collection.find().toArray();
  
  return { props: {itemList} }
}) satisfies GetServerSideProps<{ itemList : mongoProduct }>
 */



export default async function testConnect() {

  const itemsCollection = client.db("products").collection("books");
  //console.log("first test: ", itemsCollection);

  try {
    await client.connect();

    const database = await client.db("products");
    //console.log("database", database);
    const collection = await database.collection("books");
    //console.log("collection", collection);


  //this part gets it
  //find collection, map to an Array. Array is our new baby!
    const docCount = await collection.find().toArray();
    console.log("Array Doc", docCount);
    
    return { props: docCount }

    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("client closing")
    await client.close();
  }

}
testConnect().catch(console.dir); 
