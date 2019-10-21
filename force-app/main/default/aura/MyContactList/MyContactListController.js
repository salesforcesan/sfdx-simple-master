({
	myAction : function(component, event, helper) {
		var action = component.get("c.getGTPPhotos");
        action.setCallback(this, function(data) {
        component.set("v.GTPPhotos", data.getReturnValue());
        });
        $A.enqueueAction(action);

	}
})