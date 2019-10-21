public class AccountHandler {
    
    public static Account insertNewAccount(string accountName){
            Account m = new Account(Name=accountName);
        
        try {
    // Perform some database operations that 
    //   might cause an exception.
 

    insert m;
 
            
} catch(DmlException e) {
     System.debug('Inside DMLException catch ,error is ' + e.getMessage());
    m = null;
} catch(Exception e) {
    // Generic exception handling code here.
      System.debug('Inside Exception catch ,error is ' + e.getMessage());
    m = null;
} finally {
    // Perform some clean up.
}	
        
        return m;
     
     /*   // Create the list of sObjects to insert
List<Account> acctList = new List<Account>();
acctList.add(new Account(Name=accountName));

        Account acct = new Account();
// DML statement
Database.SaveResult[] srList = Database.insert(acctList, false);

// Iterate through each returned result
for (Database.SaveResult sr : srList) {
    if (sr.isSuccess()) {
        // Operation was successful, so get the ID of the record that was processed
        System.debug('Successfully inserted account. Account ID: ' + sr.getId());
        
        acct = acctList[0];
    }
    else {
        // Operation failed, so get all errors                
        for(Database.Error err : sr.getErrors()) {
            System.debug('The following error has occurred.');                    
            System.debug(err.getStatusCode() + ': ' + err.getMessage());
            System.debug('Account fields that affected this error: ' + err.getFields());
            error = err.getMessage();
            acct = null;
        }
    }
}        
        
        return  acct;*/
    }

}