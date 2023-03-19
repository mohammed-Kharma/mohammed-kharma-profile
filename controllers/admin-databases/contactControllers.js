import DB_Contact from "@/model/database/DB_Contact";

class ContactControllers{
    async CreateContact(item){
     return await item.AddContact(); 
    }
    async ViewContact(){
        return await DB_Contact.ReadContact();
    }
}
export default ContactControllers;