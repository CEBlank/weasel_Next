import client from "app/lib/mongoDB";
//import { GetServerSideProps } from "next";
//import { GameEvent } from "app/lib/products";

//GetServerSideProps throws error on "satisfies" due to type error. 
//cannot pass these for the life of me.
//almost as bad as kidney stones
//Property 'X' does not exist on type 'WithId<Document>[]' - until I expire.
//never. ever. ever. again
//UX -4000 points
//this has been a miserable experience, MongoDB. Truly, truly horrible. 


export async function connectMongo() {

  const itemsCollection = client.db("gameEvents").collection("Events");
  console.log("first test: ", itemsCollection);

  const events = await client.db("gameEvents").collection("Events").find({}).toArray(); //goodness this is a line.
  console.log(events);
  
  return events;

  }; 


