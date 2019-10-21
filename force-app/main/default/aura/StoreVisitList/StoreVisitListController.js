({
  doInit: function(component, event, helper) {      

    // Fetch the account list from the Apex controller   
    helper.getStoreVisitList(component);
  },
    refreshComponent:function(cmp,event){
                var a = cmp.get("c.doInit");
        $A.enqueueAction(a);
    },
    getCompnent: function(cmp,event) {
        //https://eshopsync.com/create-dynamic-component/
        //Create component dynamically
        //
        var indx = event.getSource().get("v.value");
         	
        $A.createComponent(
            "c:customSearch",{ childAttr: cmp.get("v.storeVisits")[indx] },
            function(newcomponent){
                if (cmp.isValid()) {
                    
                    var body = cmp.get("v.body");
                    body.push(newcomponent);
                    cmp.set("v.body", body);             
                }
            }            
        );
    },
    removeComponent:function(cmp,event){
        //get the parameter you defined in the event, and destroy the component
        var comp = event.getParam("comp");      
        comp.destroy();
        
        var a = cmp.get("c.doInit");
        $A.enqueueAction(a);
       
    },
  deleteAccount: function(component, event, helper) {
    // Prevent the form from getting submitted
    event.preventDefault();

    // Get the value from the field that's in the form
    //var accountName = event.target.getElementsByClassName('account-name')[0].value;
    //confirm('Delete the ' + accountName + ' account? (don’t worry, this won’t actually work!)');
    //
    //
   //called on clicking your button
//run your form render code after that, run the following lines
helper.showPopupHelper(component, 'modaldialog', 'slds-fade-in-');
helper.showPopupHelper(component,'backdrop','slds-backdrop--');
      
  },
    closeModal:function(component,event,helper){    
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.removeClass(cmpBack,'slds-backdrop--open');
        $A.util.removeClass(cmpTarget, 'slds-fade-in-open'); 
    },
    openmodal: function(component,event,helper) {
        var cmpTarget = component.find('Modalbox');
        var cmpBack = component.find('Modalbackdrop');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open'); 
    }
})