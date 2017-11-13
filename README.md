# lightning-tab-layout

> Custom Tab Components for Lightning Experience

---

## usage

TabLayout, TabLayoutHeader, and TabLayoutItem are used together to lay out the UX of tabbed content in a page.

TabLayout is a container expecting a 1 to 1 match of TabLayoutHeaders to TabLayoutItems - each header has an item.

TabLayoutHeader and TabLayoutItem are connected by `tabName` and `tabIndex` attributes which must match between the corresponding header and its item.

Clicking a TabLayoutHeader fires the ClickedTab application event to be handled by the corresponding item with matching tabName and tabIndex.

```html
<lightning:card title="Custom Lightning Tab Layout">

	<!-- TabLayoutHeaders and TabLayoutItems contained in a TabLayout -->
	<c:TabLayout>

		<aura:set attribute="tabHeaders">
			<!-- Each TabLayoutHeader tabName and tabIndex matches with TabLayoutItem -->
			<c:TabLayoutHeader tabName="Tab1"
				tabLabel="Label 1"
				tabIndex="0" />

			<c:TabLayoutHeader tabName="Tab2"
				tabLabel="Label 2"
				tabIndex="1" />

			<c:TabLayoutHeader tabName="Tab3"
				tabLabel="Label 3"
				tabIndex="2" />
		</aura:set>

		<aura:set attribute="tabItems">
			<!-- Each TabLayoutItem tabName and tabIndex matches with TabLayoutHeader -->
			<c:TabLayoutItem tabName="Tab1"
				tabIndex="0" >
				<aura:set attribute="content">

					<lightning:card title="Tab1">
						<div class="slds-p-left_large">
							Tab1 Content
						</div>
					</lightning:card>

				</aura:set>
			</c:TabLayoutItem>

			<c:TabLayoutItem tabName="Tab2"
				tabIndex="1">
				<aura:set attribute="content">

					<lightning:card title="Tab2">
						<div class="slds-p-left_large">
							Tab2 Content
						</div>
					</lightning:card>

				</aura:set>
			</c:TabLayoutItem>

			<c:TabLayoutItem tabName="Tab3"
				tabIndex="2" >
				<aura:set attribute="content">

					<lightning:card title="Tab3">
						<div class="slds-p-left_large">
							Tab3 Content
						</div>
					</lightning:card>

				</aura:set>
			</c:TabLayoutItem>

		</aura:set>

	</c:TabLayout>

</lightning:card>
```
