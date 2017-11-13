({
	initActiveTab: function(cmp, helper) {
		var tabIndex = cmp.get("v.tabIndex");
		if(tabIndex === 0) {
			helper.activateTab(cmp, cmp.get("v.tabName"));
		}
	},

	openTab : function(cmp, event, helper) {
		var tabName = cmp.get("v.tabName");

		helper.fireClickedTabEvent(cmp, tabName);
		helper.activateTab(cmp, tabName);
	},

	activateTab: function(cmp, tabName) {
		var tabLabel = cmp.find("tab__label");
		$A.util.addClass(tabLabel, "slds-is-active");
	},

	fireClickedTabEvent: function(cmp, tabName) {
		var clickedTab = $A.get("e.c:ClickedTab");
		clickedTab.setParams({
			tabName: tabName
		});
		clickedTab.fire();
	},

	deactivateTab: function(cmp, event, helper) {
		var eventTabName = event.getParam("tabName");
		var tabName = cmp.get("v.tabName");

		if(tabName !== eventTabName) {
			var tabLabel = cmp.find("tab__label");
			$A.util.removeClass(tabLabel, "slds-is-active");
		}
	}
})