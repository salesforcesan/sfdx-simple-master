global with sharing class GTPController {

    @AuraEnabled
    public static HousePagedResult findAll(Decimal pageNumber) {
      Integer pageSize = 8;
        Integer offset = ((Integer)pageNumber - 1) * pageSize;
        
        HousePagedResult r =  new HousePagedResult();
        r.pageSize = pageSize;
        r.page = (Integer) pageNumber;
        r.total = [SELECT count() FROM house__c];
        r.houses = [SELECT Id, title__c, city__c, size__c, description__c, price__c, bathrooms__c, bedrooms__c, Default_Picture_URL__c FROM house__c 
                      ORDER BY price__c LIMIT :pageSize OFFSET :offset];
        System.debug(r);
        return r;
    }

}