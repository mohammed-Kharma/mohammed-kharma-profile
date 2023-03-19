import axios from "axios";
class DB_Skllis{
    constructor(name , image , _id){
        this.name = name;
     
        this.image = image;
        this._id = _id;
    }
    // ----------------------

    async AddSkllis(){
        try {
            let resposes = await axios.post(`/api/Skllis`,{
                name:this.name,
        
                image:this.image,

            });
            return resposes.data.data;
        } catch (error) {
                return null;
        }
    }

    // -----------
    static async ReadSkllis(){
        try {
            let resposes = await axios.get(`/api/Skllis`);
            return resposes.data.data;
        } catch (error) {
            return [];
        }
    }
    // ----------

    async DeleteSkllis(){
        try {
            let resposes = await axios.delete(`/api/Skllis/${this._id}`);
            return resposes.data.status;
        } catch (error) {
            return false;
        }
    }
    // ---------
    async UpdateSkllis(){
        try {
            let resposes = await axios.put(`/api/Skllis/${this._id}`,{
                name:this.name,
                image:this.image,
            });
            console.log(resposes.data.status);
            return resposes.data.status;
           
        } catch (error) {
          
            return false;
        }
    }
}
export default DB_Skllis;