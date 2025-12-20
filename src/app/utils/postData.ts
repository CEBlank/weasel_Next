import { MongoClient } from "mongodb";

export default async function postHandler(req, res) {
    if (req.method === "POST") {
        const { data } = req.body;

        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();

            // Choose a name for your database
            const database = client.db("gameEvents");

            // Choose a name for your collection
            const collection = database.collection("Events");

            await collection.insertOne({ data });

            res.status(201).json({ message: "Data saved successfully!" });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong!" });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: "Method not allowed!" });
    }
}