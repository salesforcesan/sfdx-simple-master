({
	getHouses : function(component, page) {
        page = page || 1;
        var action = component.get("c.findAll");
		action.setParams({
            "pageNumber": page
    	});
    	action.setCallback(this, function(a) {
            var result = a.getReturnValue();
            component.set("v.houses", result.houses);
            component.set("v.page", result.page);
            component.set("v.total", result.total);
            component.set("v.pages", Math.ceil(result.total/8));
    	});
    	$A.enqueueAction(action);
	}
})