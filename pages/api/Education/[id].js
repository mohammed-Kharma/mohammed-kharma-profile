import { MongoClient, ObjectId } from "mongodb";

export default  async function handler(req, res) {
        if(req.method == "DELETE"){
            const client = await MongoClient.connect(`mongodb+srv://AboMofeed:zzhBrrroq7KBZN9v@cluster0.favzugr.mongodb.net/?retryWrites=true&w=majority`);            
            const db = await client.db("Mohammed_Kharma_CV");
            const collocation = await db.collection('Page_Education');

            const result = await collocation.deleteOne({_id:new ObjectId(req.query.id)});
            await client.close();
            const deleted = result.deletedCount ==1;
            res.status(deleted ? 200 : 400).json({
                status:deleted , 
                massage : deleted ? "Success Delete": 'Error Delete',
            });
        }
        else{
            res.status(405).json({status:false,massage:"Not Found Function"});
        }
  }
  