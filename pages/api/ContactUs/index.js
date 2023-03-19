import { MongoClient } from "mongodb";

export default async  function handler(req, res) {
    if(req.method =="GET" || req.method =="POST"){
        const client = await MongoClient.connect(`mongodb+srv://AboMofeed:zzhBrrroq7KBZN9v@cluster0.favzugr.mongodb.net/?retryWrites=true&w=majority`);            
        const db = await client.db("Mohammed_Kharma_CV");
        const collocation = await db.collection('contactUs');
        // ---------------
        if(req.method =="GET"){
            const result = await collocation.find().toArray();
            client.close();
            res.status(200).json({status:true , data:result});
        }else{
            const result = await collocation.insertOne(req.body);
            client.close();
            res.status(200).json({status:true,message:"Success",data:{...req.body}})
        }
        res.status(200).json({status:true});
    }else{
        res.status(405).json({status:false,massage:"Not Found Function"});
    }
  }