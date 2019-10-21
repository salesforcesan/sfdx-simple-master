({
    onInit : function(component, event, helper) {
        /* Call the Apex class method to fetch the List of all object */
        
        var action = component.get('c.listAllObject');
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS' && component.isValid()){
                
                component.find('sfdcDiv').set("v.body",[]);
                var JSON = {
                    menu: [
                        {id: '0',sub: [
                            {id: '0-0', sub: null},
                            {id: '0-1', sub: null},
                            {id: '0-2', sub: null}
                        ]
                        },
                        {id: '1',sub: null},
                        {id: '2',sub: [
                            {id: '2-0', sub: null},
                            {id: '2-1', sub: null},
                            {id: '2-2', sub: [
                                {id: '2-2-0', sub: [{id: '2-2-0-0', sub: null},]},
                                                    {id: '2-2-1', sub: null},
                                                    {id: '2-2-2', sub: null},
                                                    {id: '2-2-3', sub: null},
                                                    {id: '2-2-4', sub: null},
                                                    {id: '2-2-5', sub: null},
                                                    {id: '2-2-6', sub: null}
                                                   ]},
                                {id: '2-3', sub: null},
                                {id: '2-4', sub: null},
                                {id: '2-5', sub: null}
                            ]
                            },
                            {id: '3',sub: null}
                        ]
                        }    
                        
                        var test  = this.buildList(JSON.menu,false);                
                        var dvTable = document.getElementById("sfdctable");
                        
                       
                        dvTable.innerHTML = test;
                        
                        var responseValue = response.getReturnValue();
                        var lstOptions = [];
                    for(var i=0; i < responseValue.length; i++){
                    lstOptions.push({
                    value : responseValue[i].split('####')[1],
                    key : responseValue[i].split('####')[0]
                });
            }
            lstOptions.sort();
            component.set('v.objectList', lstOptions);
            
        }
                           else{
                           var errors = response.getError();
        $A.log(errors);
        if(errors || errors[0].message){
            console(errors[0].message);
        }
    }
    
    
});
$A.enqueueAction(action);        
},
    
    buildList: function(data, isSub){
      
        var html = (isSub)?"<div  id='sfdctable21' aura:id='sfdcDiv21'>":''; // Wrap with div if true
        html += '<ul>';
        
        for (var item in data){
            
            html += '<li id="' + data[item].id + item + '" aura:id="' + data[item].id + item + '">';
            if(typeof(data[item].sub) === 'object'){ // An array will return 'object'
                html += data[item].id;
                html += this.buildList(data[item].sub, isSub); // Submenu found. Calling recursively same method (and wrapping it in a div)
            } else {
                html += data[item].id // No submenu
            }
            html += '</li>';
        }
        html += '</ul>';
        html += (isSub)?'</div>':'';
        return html;
    },
        
        
        
        
        onHandleChange : function(component, event, helper){
             alert('test 1111');
              alert(document.getElementById('sfdctable21'));
                        alert(component.find('sfdctable21'));
                        
                       
            
            /* Call this method whenever user will select the Obejct
         * and show the Dynamic Content */
        var selObject = component.find('selectObject').get('v.value');
        var action = component.get('c.listAllFields');
        if(selObject!=null && selObject!='' && selObject!=undefined){
            action.setParams({
                "objectName" : selObject  
            });
            action.setCallback(this, function(response){
                var state = response.getState();
                if( state === 'SUCCESS' && component.isValid()){
                    //component.find("dynamicBody").set("v.body",[]);
                    component.find('sfdcDiv').set("v.body",[]);
                    var JSON = {
                        menu: [
                            {id: '0',sub: [
                                {id: '0-0', sub: null},
                                {id: '0-1', sub: null},
                                {id: '0-2', sub: null}
                            ]
                            },
                            {id: '1',sub: null},
                            {id: '2',sub: [
                                {id: '2-0', sub: null},
                                {id: '2-1', sub: null},
                                {id: '2-2', sub: [
                                    {id: '2-2-0', sub: [{id: '2-2-0-0', sub: null},]},
                                                        {id: '2-2-1', sub: null},
                                                        {id: '2-2-2', sub: null},
                                                        {id: '2-2-3', sub: null},
                                                        {id: '2-2-4', sub: null},
                                                        {id: '2-2-5', sub: null},
                                                        {id: '2-2-6', sub: null}
                                                       ]},
                                    {id: '2-3', sub: null},
                                    {id: '2-4', sub: null},
                                    {id: '2-5', sub: null}
                                ]
                                },
                                {id: '3',sub: null}
                            ]
                            }    
                            
                            var test  = this.buildList(JSON.menu,false);
                            
                            var dvTable = document.getElementById("sfdctable");
                            dvTable.innerHTML = test;
                            //dvTable.appendChild(table);
                            /*
                    var responseValue = response.getReturnValue();
                    var objectValue   = responseValue.sObjectData;
                    var fieldList     = responseValue.fieldList;
                    
                   
                    var sObjectDataTableHeader = [];
                    // Create table Header
                    for (var i=0; i <  fieldList.length; i++) {
                        sObjectDataTableHeader.push(fieldList[i].label);
                    }
                    console.log(sObjectDataTableHeader);
                    //Get the count of columns.
                    var columnCount = sObjectDataTableHeader.length;
                    //Create a HTML Table element.
                    var table = document.createElement("TABLE");
                    //table.border = "1";
                    //Add the header row.
                    var row = table.insertRow(-1);
                    for (var i = 0; i < columnCount; i++) {
                        var headerCell = document.createElement("TH");
                        headerCell.innerHTML = sObjectDataTableHeader[i];
                        headerCell.className='hearderClass';
                        row.appendChild(headerCell);
                    }
                    var dvTable = document.getElementById("sfdctable");
                    dvTable.innerHTML = "";
                    dvTable.appendChild(table);
                   
                    
                    if(objectValue.length){
                        for(var j=0; j < objectValue.length; j++){
                            // Dynamic table Row
                            row = table.insertRow(-1);
                            // Dynamic Table Row End
                            for (var i=0; i <  fieldList.length; i++) {
                                // Dynamic table Row
                                var cell = row.insertCell(-1);
                                cell.innerHTML = objectValue[j][fieldList[i].apiName];
                                component.set('v.isSending' , false);
                                
                            }
                        }
                    }else{
                        
                    }
                    
                    */
                            }else{
                            var errors = response.getError();
                            $A.log('Error Details '+errors);
                            if( errors || errors[0].message){
                        console.log('Error Details '+errors[0].message);
                    }
                    }
            });
            $A.enqueueAction(action);
        }else{
            component.set('v.isSending' , false);
        }
    },
})