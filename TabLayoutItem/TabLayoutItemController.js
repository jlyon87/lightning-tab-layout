({
	init: function(cmp, event, helper) {
		helper.initialize(cmp);
	},

	handleClickedTab: function(cmp, event, helper) {
		helper.toggleDisplay(cmp, event);
	}
})