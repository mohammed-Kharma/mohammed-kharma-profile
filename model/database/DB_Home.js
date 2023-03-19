import axios from "axios";
// import '../../pages/api'
class DB_Home{
    constructor(name , jobs , des , image , _id){
        this.name = name;
        this.jobs = jobs;
        this.des = des;
        this.image = image;
        this._id = _id;
    }
    // ----------------------

    async AddHome(){
        try {
            let resposes = await axios.post(`/api/Home`,{
                name:this.name,
                jobs:this.jobs,
                des:this.des,
                image:this.image,

            });
            return resposes.data.data;
        } catch (error) {
                return null;
        }
    }

    // -----------
    static async ReadHome(){
        try {
            let resposes = await axios.get(`/api/Home`);
            return resposes.data.data;
        } catch (error) {
            return [];
        }
    }
    // ----------

    async DeleteHome(){
        try {
            let resposes = await axios.delete(`/api/Home/${this.id}`);
            return resposes.data.status;
        } catch (error) {
            return false;
        }
    }
    // ---------
    async UpdateHome(){
        try {
            let resposes = await axios.put(`/api/Home/${this.id}`,{
                name:this.name,
                jobs:this.jobs,
                des:this.des,
                image:this.image,
            });
            return resposes.data.data;
        } catch (error) {
            return false;
        }
    }
}
export default DB_Home;