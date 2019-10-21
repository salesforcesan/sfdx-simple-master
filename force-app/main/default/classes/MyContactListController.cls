public class MyContactListController {
@AuraEnabled
public static List<GTPPhoto__x> getGTPPhotos() {
    return [Select id__c, job__c, response__c From GTPPhoto__x limit 10];
}
}