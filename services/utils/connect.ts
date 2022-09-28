import { Db, MongoClient } from 'mongodb'

const cachedDb: Record<string, Db> = {}

export async function connect(database: string) {
  if (cachedDb[database]) return cachedDb[database]

  const client = await MongoClient.connect(process.env.MONGODB_URI ?? '')

  const db = client.db(database)

  cachedDb[database] = db

  return cachedDb[database]
}
