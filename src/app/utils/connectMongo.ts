import client from "app/lib/mongoDB";

exports = function() {

  const itemsCollection = client.db("weasel-games-db").collection("products");
 // const purchasesCollection = client.db("store").collection("purchases");
  // ... paste snippet here ...
}

export async function testConnect() {

  const itemsCollection = client.db("products").collection("books");
  console.log("first test: ", itemsCollection);

  try {
    await client.connect();
    const database = client.db("weasel-games-db");
    console.log("database", database);

    const collection = database.collection("products");
    console.log("collection", collection);

    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
testConnect().catch(console.dir);
