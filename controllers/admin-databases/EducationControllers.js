import DB_Education from "@/model/database/DB_Education";

class EducationConrtollers{
    async CreateEducation(item){
       
        if(item.year !="" && item.title !="" && item.detelis !=""){
            return await item.AddEducation();
        }else{
            return null;
        }
        
    }
    async ViewEducation(){
        return await DB_Education.ReadEducation();
    }
    async DeleteEdu(item){
        return await item.DeleteEducation();
    }
}
export default EducationConrtollers;