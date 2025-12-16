import client from "app/lib/mongoDB";

exports = function() {

  //const itemsCollection = client.db("weasel-games-db").collection("products");
 // const purchasesCollection = client.db("store").collection("purchases");
  // ... paste snippet here ...
}

export async function testConnect() {

  const itemsCollection = client.db("products").collection("books");
  console.log("first test: ", itemsCollection);


  try {
    await client.connect();
    const database = await client.db("products");
    console.log("database", database);

    const collection = await database.collection("books");
    console.log("collection", collection);


  //this part gets it
    const docCount = await collection.find().toArray();
    console.log("Doc Count", Object.keys(docCount), docCount);


    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    console.log("client closing")
    await client.close();
  }
}
testConnect().catch(console.dir);
