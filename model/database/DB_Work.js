import axios from "axios";
class DB_Work{
    constructor(name , des, image , _id){
        this.name = name;
        this.des = des;
        this.image = image;
        this._id = _id;
    }
    // ----------------------

    async AddWork(){
        try {
            let resposes = await axios.post(`/api/Work`,{
                name:this.name,
                
                des:this.des,
                image:this.image,

            });
            return resposes.data.data;
        } catch (error) {
                return null;
        }
    }

    // -----------
    static async ReadWork(){
        try {
            let resposes = await axios.get(`/api/Work`);
            return resposes.data.data;
        } catch (error) {
            return [];
        }
    }
    // ----------

    async DeleteWork(){
        try {
            let resposes = await axios.delete(`/api/Work/${this._id}`);
            return resposes.data.status;
        } catch (error) {
            return false;
        }
    }
    // ---------
    async UpdateWork(){
        try {
            let resposes = await axios.put(`/api/Work/${this._id}`,{
                name:this.name,
           
                des:this.des,
                image:this.image,
            });
            return resposes.data.data;
        } catch (error) {
            return false;
        }
    }
}
export default DB_Work;