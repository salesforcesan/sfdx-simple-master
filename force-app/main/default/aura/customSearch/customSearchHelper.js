({
  // Fetch the accounts from the Apex controller
  assignRetailRep: function(component) {
    var action = component.get('c.upsertStoreVisit');
	action.setParams({ storeVisitId : '' });
	action.setParams({ retailRepId : '' });
      alert('1');
    // Set up the callback
    var self = this;
    action.setCallback(this, function(actionResult) {
        alert('2');
     //component.set('v.storeVisits', actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
  }
})