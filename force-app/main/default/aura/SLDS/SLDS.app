<aura:application access="GLOBAL">
  <ltng:require styles="/resource/slds/assets/styles/salesforce-lightning-design-system-vf.css"/>
    <div class="slds">
        <c:grid wrap="true" class="topHeader">
            <c:col size="1-of-1" mdSize="1-of-12" lgSize="1-of-12">
         		<img src="https://developer.salesforce.com/resource/images/salesforce-developer-network-logo_1.png" label="logo" size="large"/>
            </c:col>
                <c:col size="1-of-1" mdSize="10-of-12" lgSize="10-of-12"> 
                <h1 class="slds-text-heading--large slds-truncate">Salesforce Lightning Design System</h1>
            </c:col>
        </c:grid>
        <c:grid wrap="true" style="margin-right:100px">
          <c:col size="1-of-1" mdSize="2-of-12" lgSize="2-of-12" class="sidebar">
             
               <c:list direction="block">
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#breadCrumbs">Bread Crumbs</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#buttonGroups">Button Groups</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#buttons">Buttons</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#gridSystem">Grid System</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#images">Images</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#badges">Badges</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#lists">Lists</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#mediaObjects">Media Objects</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#pills">Pills</a></c:listItem>
                 <c:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#tabs">Tabs</a></c:listItem>
         		</c:list>
              

            </c:col>
           <c:col size="1-of-1" mdSize="10-of-12" lgSize="10-of-12">              
            <c:docHeader name="Bread Crumbs" top="false" anchorName="breadCrumbs"/>
            <c:breadCrumbsDoc />
            <a name="buttonGroups"></a>
            <c:docHeader name="Button Groups" anchorName="buttonGroups"/>   
            <c:buttonGroupsDoc />
            <c:docHeader name="Buttons" anchorName="buttons"/>   
            <c:buttonsDoc />
            <c:docHeader name="Grid System" anchorName="gridSystem"/>   
            <c:gridDoc />
            <c:docHeader name="Images" anchorName="images"/>   
            <c:imagesDoc />
            <c:docHeader name="Labels" anchorName="badges"/>        
            <c:badgesDoc />
            <c:docHeader name="Lists" anchorName="lists"/>  
            <c:listsDoc />
            <c:docHeader name="Media Objects" anchorName="mediaObjects"/> 
            <c:mediaObjectsDoc />
            <c:docHeader name="Pills" anchorName="pills"/>
            <c:pillsDoc />
         
           </c:col>
        </c:grid>
    </div>
</aura:application>