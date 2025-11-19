import Image from "next/image";
//import config from '../mongoConfig.json';
import mongodb from 'mongodb';

export default async function Home() {

//const { MongoClient, ServerApiVersion } = require("mongodb");

//mongodb.MongoClient;

// Replace the placeholders in the connection string uri with your credentials

const uri = "mongodb+srv://Vercel-Admin-weasel-games-db:"+process.env.DB_PASS+"@weasel-games-db.1iwb3zs.mongodb.net/?appName=weasel-games-db";

const MongoClient = mongodb.MongoClient;
const ServerApiVersion = mongodb.ServerApiVersion;

// Create a client with options to specify Stable API Version 1
const client = new MongoClient(uri,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
  ); 

  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Hello World</h1>


      </main>
    </div>
  );
}
