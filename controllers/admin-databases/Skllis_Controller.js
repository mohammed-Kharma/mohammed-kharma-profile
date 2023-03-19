import DB_Skllis from "@/model/database/DB_Skllis";

class SkllisConrtollers{
    async CreateSkllis(item){
       
        if(item.name !=""){
            return await item.AddSkllis();
        }else{
            return null;
        }
        
    }
    async ViewSkllis(){
        return await DB_Skllis.ReadSkllis();
    }
    async DeleteItemSkllis(item){
        return await item.DeleteSkllis();
    }
    async UpdateDataSkllis(item){
        return await item.UpdateSkllis();
    }
}
export default SkllisConrtollers;