import { MongoClient } from "mongodb"

export async function connectToDatabase() {
    const url = process.env.DB_MONGO_CONNECTION
    const client = await MongoClient.connect(url, { useNewUrlParser: true })

    return client
}


export async function findSingleDocument(client, type) {
    const db = client.db()

    const meetUpCollection = await db.collection(`${process.env.COLLECTIONS}`)

    const result = await meetUpCollection.findOne({ type: type })

    return result
}