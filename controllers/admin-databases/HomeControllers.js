import DB_Home from "@/model/database/DB_Home";

class HomeConrtollers{
    async CreateHome(item){
       
        if(item.name !="" && item.jobs !="" && item.des !=""){
            return await item.AddHome();
        }else{
            return null;
        }
        
    }
    async ViewHome(){
        return await DB_Home.ReadHome();
    }
}
export default HomeConrtollers;