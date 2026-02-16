const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =process.env.URI;
const db=process.env.DB

const collections={
    CARES:"cares",
    BOOKINGS:"bookings"
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export const dbConnect=(collections)=>{
    return client.db(db).collection(collections)

}
