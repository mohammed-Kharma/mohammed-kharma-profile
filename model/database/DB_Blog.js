import axios from "axios";
class DB_Blog{
    constructor(name , year , des, image , _id){
        this.name = name;
        this.year = year;
        this.des = des;
        this.image = image;
        this._id = _id;
    }
    // ----------------------

    async AddBlog(){
        try {
            let resposes = await axios.post(`/api/Blog`,{
                name:this.name,
                year:this.year,
                des:this.des,
                image:this.image,

            });
            return resposes.data.data;
        } catch (error) {
                return null;
        }
    }

    // -----------
    static async ReadBlog(){
        try {
            let resposes = await axios.get(`/api/Blog`);
            return resposes.data.data;
        } catch (error) {
            return [];
        }
    }
    // ----------

    async DeleteBlog(){
        try {
            let resposes = await axios.delete(`/api/Blog/${this._id}`);
            return resposes.data.status;
        } catch (error) {
            return false;
        }
    }
    // ---------
    async UpdateBlog(){
        try {
            let resposes = await axios.put(`/api/Blog/${this._id}`,{
                name:this.name,
                year:this.year,
                des:this.des,
                image:this.image,
            });
            return resposes.data.data;
        } catch (error) {
            return false;
        }
    }
}
export default DB_Blog;