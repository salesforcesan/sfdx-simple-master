public class StoreVisitController {
 @AuraEnabled
  public static List<StoreVisit__c> getStoreVisits() {
    return [SELECT Name, Id, Store__r.Name, Store__r.Address__c, StartDate__c, EndDate__c, Status__c, RetailRep__r.FirstName__c, RetailRep__r.LastName__c 
            FROM StoreVisit__c];
  }
   
}