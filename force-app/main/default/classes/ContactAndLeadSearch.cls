public class ContactAndLeadSearch {
    public static List<List<sObject>> searchContactsAndLeads(string search){
          
        List<List<sObject>> searchList = [FIND :search IN ALL FIELDS 
            RETURNING lead,contact];
            
           return searchList;
    }

}