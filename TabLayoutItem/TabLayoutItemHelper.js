({
	initialize: function(cmp) {
		var tabName = cmp.get("v.tabName");
		var tabIndex = cmp.get("v.tabIndex");
		if(tabIndex === "0") {
			var contentDiv = cmp.find("tabContent");
			$A.util.removeClass(contentDiv, "slds-hide");
		}
	},

	toggleDisplay: function(cmp, event) {
		var eventTabName = event.getParam("tabName");
		var cmpTabName = cmp.get("v.tabName");
		if(cmpTabName === eventTabName) {
			var contentDiv = cmp.find("tabContent");
			$A.util.removeClass(contentDiv, "slds-hide");
		} else {
			var contentDiv = cmp.find("tabContent");
			$A.util.addClass(contentDiv, "slds-hide");
		}
	}
})