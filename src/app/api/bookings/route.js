const { dbConnect } = require("@/lib/dbConnect");

const bookingsCollection=dbConnect("bookings")
export async function GET(request){
    const result= await bookingsCollection.find().toArray()
    return Response.json(result)
}


export async function POST(request){
    const booking =await request.json()
    const result=await bookingsCollection.insertOne(booking)
    return Response.json(result)
}