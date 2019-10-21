public class ContactSearch {
	public static List<Contact> searchForContacts(string lastName, string mailingPostalCode)
    {
        Contact[] acctsWithContacts = [SELECT Name, FirstName,LastName
                               FROM Contact 
                               WHERE (LastName =: lastName And MailingPostalCode =: mailingPostalCode)];
     
     	return acctsWithContacts;
    }
}