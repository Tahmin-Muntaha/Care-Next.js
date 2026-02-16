const { dbConnect } = require("@/lib/dbConnect");

const caresCollection=dbConnect("cares")
export async function GET(request){
    const result =await caresCollection.find().toArray()
    return Response.json(result)
}