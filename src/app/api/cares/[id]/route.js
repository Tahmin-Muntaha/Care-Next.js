import { ObjectId } from "mongodb";

const { dbConnect } = require("@/lib/dbConnect");

const caresCollection=dbConnect("cares")
export async function GET(request,context){
    const params =await context.params
    const {id}=params
    const result =await caresCollection.findOne({_id:new ObjectId(id)})
    return Response.json(result)
}