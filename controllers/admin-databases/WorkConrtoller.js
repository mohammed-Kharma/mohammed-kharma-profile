import DB_Work from "@/model/database/DB_Work";

class WorkConrtollers{
    async CreateWork(item){
        
     return await item.AddWork();
    }
    async ViewWork(){
        return await DB_Work.ReadWork();
    }
    async DeleteItemWork(item){
        return await item.DeleteWork();
    }
}
export default WorkConrtollers;