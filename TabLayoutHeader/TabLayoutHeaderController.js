({
	init: function(cmp, event, helper) {
		helper.initActiveTab(cmp, helper);
	},

	clickTab: function(cmp, event, helper) {
		helper.openTab(cmp, event, helper);
	},

	handleClickedTab: function(cmp, event, helper) {
		helper.deactivateTab(cmp, event, helper);
	}
})