public class StringArrayTest{
    public static List<String> generateStringArray(Integer n){
    List<String> lstString = new List<String>();
     for(Integer i=0; i<n;i++){
         lstString.add('Test '+i );        
     }
        System.debug('__________'+lstString);
        return lstString;
    }   
}