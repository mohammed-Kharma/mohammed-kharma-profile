import axios from "axios";
class DB_Education{
    constructor(year,title , detelis , _id){
        this.year = year;
        this.title = title;
        this.detelis = detelis;
        this._id = _id;
    }
    // ----------------------

    async AddEducation(){
        try {
            let resposes = await axios.post(`/api/Education`,{
                year:this.year,
                title:this.title,
                detelis:this.detelis

            });
            return resposes.data.data;
        } catch (error) {
                return null;
        }
    }

    // -----------
    static async ReadEducation(){
        try {
            let resposes = await axios.get(`/api/Education`);
            return resposes.data.data;
        } catch (error) {
            return [];
        }
    }
    // ----------

    async DeleteEducation(){
        try {
            let resposes = await axios.delete(`/api/Education/${this._id}`);
            return resposes.data.status;
        } catch (error) {
            return false;
        }
    }
    // ---------
    async UpdateEducation(){
        try {
            let resposes = await axios.put(`/api/Education/${this._id}`,{
                year:this.year,
                title:this.title,
                detelis:this.detelis
            });
            return resposes.data.data;
        } catch (error) {
            return false;
        }
    }
}
export default DB_Education;