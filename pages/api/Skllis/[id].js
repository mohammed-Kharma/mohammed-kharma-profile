import { MongoClient, ObjectId } from "mongodb";

export default  async function handler(req, res) {
        if(req.method == "DELETE" || req.method =="PUT"){
            const client = await MongoClient.connect(`mongodb+srv://AboMofeed:zzhBrrroq7KBZN9v@cluster0.favzugr.mongodb.net/?retryWrites=true&w=majority`);            
            const db = await client.db("Mohammed_Kharma_CV");
            const collocation = await db.collection('Page_Skllis');

            if(req.method == "DELETE"){
                const result = await collocation.deleteOne({_id:new ObjectId(req.query.id)});
                await client.close();
                const deleted = result.deletedCount ==1;
                res.status(deleted ? 200 : 400).json({
                    status:deleted , 
                    massage : deleted ? "Success Delete": 'Error Delete',
                });
            }
            else{
              const result = await collocation.findOneAndUpdate({_id : new ObjectId(req.query.id)});
            await client.close();
            res.status(200).json({status:result , massage: "Success Updata" });
            alert("Test",res.status)
            }
            res.status(200).json({status:"Success"})
        }
        else{
            res.status(405).json({status:false,massage:"Not Found Function"});
        }
  }
  