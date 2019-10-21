({
  // Fetch the accounts from the Apex controller
  getStoreVisitList: function(component) {
    var action = component.get('c.getStoreVisits');

    // Set up the callback
    var self = this;
    action.setCallback(this, function(actionResult) {
     component.set('v.storeVisits', actionResult.getReturnValue());
    });
    $A.enqueueAction(action);
  },
    showPopupHelper: function(component, componentId, className){
        var modal = component.find(componentId);
        $A.util.removeClass(modal, className + 'hide');
        $A.util.addClass(modal, className + 'open');
    },
    hidePopupHelper: function(component, componentId, className){
        var modal = component.find(componentId);
        $A.util.addClass(modal, className+'hide');
        $A.util.removeClass(modal, className+'open');
        component.set("v.body", "");
    }
})