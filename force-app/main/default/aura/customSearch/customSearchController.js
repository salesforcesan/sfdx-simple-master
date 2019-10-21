({
    handleClick : function(component, event, helper) {
        var searchText = component.get('v.searchText');
        var action = component.get('c.searchForIds');                
        
        action.setParams({searchText: searchText});
        action.setCallback(this, function(response) {
            var state = response.getState();            
            if (state === 'SUCCESS') {
                var ids = response.getReturnValue();
                component.set('v.recordIds', ids);            
            }
        });
        
        $A.enqueueAction(action);
        
        component.set('v.searchHit', true);       
    },    
    selectSObjectRecord:function(component, event, helper){      
        
        component.set('v.selectedRowIndx', event.currentTarget.dataset.record);
        component.set('v.selectedRow', component.get('v.recordIds')[event.currentTarget.dataset.record]);
        component.set('v.repSelected',true);
    },
    applycss:function(cmp,event){
        //initialize        
        
        var cmpTarget = cmp.find('Modalbox');
        var cmpBack = cmp.find('MB-Back');
        $A.util.addClass(cmpTarget, 'slds-fade-in-open');
        $A.util.addClass(cmpBack, 'slds-backdrop--open'); 
    },
    removeComponent:function(component, event, helper){
        //get event and set the parameter of Aura:component type, as defined in the event above.
        var compEvent = component.getEvent("RemoveComponent");
        compEvent.setParams({
            "comp" : component
        });
        compEvent.fire();
    },
    assignRetailRep:function(component, event, helper){
        
        var action = component.get('c.upsertStoreVisit');
        action.setParams({storeVisitId: component.get('v.childAttr').Id, retailRepId:component.get('v.selectedRow').Id});
        
        action.setCallback(this, function(response) {
            var state = response.getState();            
            if (state === 'SUCCESS') {
                component.set('v.confirmation', true);
            }
        });
        
        $A.enqueueAction(action);
    },
    navigateToMyComponent : function(component, event, helper) {
        
    }
})