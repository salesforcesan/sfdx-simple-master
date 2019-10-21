public class CustomSearchController {
    @AuraEnabled
    
     public static List<RetailRep__c> searchForIds(String searchText) {
     searchText = searchText + '*';
    List<List<RetailRep__c>> results = [FIND :searchText IN ALL FIELDS  RETURNING RetailRep__c(FirstName__c, LastName__c, Name, Id)];
    List<RetailRep__c> ids = new List<RetailRep__c>();
    for (List<RetailRep__c> sobjs : results) {
      for (RetailRep__c sobj : sobjs) {
        ids.add(sobj);
      }
    }
    return ids;
}    
    
     @AuraEnabled
    public static void upsertStoreVisit(String storeVisitId, String retailRepId)  {
        
            // Query for the contact, which has been associated with an account.
        StoreVisit__c queriedContact = [SELECT Id, Name, Status__c, RetailRep__c
                                  FROM StoreVisit__c 
                                  WHERE Id =:storeVisitId];
    
        // Update the contact's phone number
    queriedContact.RetailRep__c = retailRepId;
    queriedContact.Status__c = 'Assigned';
    try {

        // Make two separate calls 
        // 1. This call is to update the contact's phone.
        update queriedContact;
    
    } catch(Exception e) {
        System.debug('An unexpected error has occurred: ' + e.getMessage());
    }

    }

    
    //public static List<String> searchForIds(String searchText) {
        
    //List<List<SObject>> results = [FIND :searchText IN ALL FIELDS  RETURNING RetailRep__c];
    //List<String> ids = new List<String>();
    //for (List<SObject> sobjs : results) {
    //  for (SObject sobj : sobjs) {
    //    ids.add(sobj.Id);
    //  }
    //}
   // return ids;
//}
}