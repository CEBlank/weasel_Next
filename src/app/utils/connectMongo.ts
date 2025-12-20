import client from "app/lib/mongoDB";
import { ObjectId } from "mongodb";
import { GetServerSideProps } from "next";
//import { Product } from "app/lib/products";

export type GameEvent = {
  _id: ObjectId, 
  name: string, 
  date: Date,
  signUpNeeded: boolean,
  minCount: number, 
  game: string
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



const getServerSideProps = (async () => {

  const itemsCollection = client.db("gameEvents").collection("Events");
  console.log("first test: ", itemsCollection);

  const events = await client.db("gameEvents").collection("Events").find().toArray(); //goodness this is a line.
  console.log(events);

  return { props: { events } }

/*  try {
    await client.connect();

    const database = await client.db("gameEvents");
    console.log("database", database);
    const collection = await database.collection("Events");
    console.log("collection", collection);


  //this part gets it
  //find collection, map to an Array. Array is our new baby!
    const events = await collection.find().toArray();
    console.log("Array Doc", events);
    
    return { props: events }

    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("client closing")
    await client.close();
  } */
 // return { props: events }

})

export default getServerSideProps;

