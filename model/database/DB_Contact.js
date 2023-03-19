import axios from "axios";
class DB_Contact{
    constructor(name , number , email , subject , mssage,_id){
        this.name = name;
        this.number = number;
        this.email = email;
        this.subject  = subject;
        this.mssage = mssage;
    }
    // ----------------------

    async AddContact(){
        try {
            let resposes = await axios.post(`/api/ContactUs`,{
                name:this.name,
                number:this.number,
                email:this.email,
                subject:this.subject,
                mssage:this.mssage
            });
            return resposes.data.data;
        } catch (error) {
                return null;
        }
    }

    // -----------
    static async ReadContact(){
        try {
            let resposes = await axios.get(`/api/ContactUs`);
            return resposes.data.data;
        } catch (error) {
            return [];
        }
    }
    // ----------


    // ---------
   
}
export default DB_Contact;