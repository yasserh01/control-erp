## Inventory

Items, categories and stores; receiving, issuing, transferring, adjusting and counting stock; writing stock down to net realisable value; reorder planning, valuation and stock reports. 

Stock comes in through GRNs (from suppliers), Opening Stock and Stock Receipts (returns from site, client-supplied material, production). It goes out through Stock Issues to projects, departments or accounts, Material Consumption, and Delivery Notes to customers. Transfers move it between stores, Adjustments and Stock Counts correct it, and NRV write-downs provide for stock worth less than its cost.

Costing. Stock is valued by the cost method in Inventory Settings: FIFO (oldest cost first, the default) or weighted average. Every document shows the cost it will use; issued cost cannot be typed over.

Accounts. Each movement posts to the stock account of the item; if the item has none, the category's account, and if that is blank too, the default in Inventory Settings. Use Fill missing accounts on the Items screen to complete them in one go. 

Inventory documents at a glance
| Document | Use it for | Accounting when posted |  
| Opening Stock | Quantities and cost on the go-live date | Sets quantity and cost; the ledger balance is entered in Chart of Accounts › Opening balances |  
| Stock Receipt (SRC) | Returns from projects, production output, client-supplied material, samples | Dr Inventory · Cr the account chosen (e.g. project cost) |  
| Stock Issue (SIS) | Issuing material to a project activity, a department or an expense account | Dr project WIP / expense · Cr Inventory |  
| Transfer (TRF) | Moving stock between stores, immediately or with goods in transit | None between stores of one company; a transit shortage is a loss |  
| Adjustment (ADJ) | Damage, expiry, loss, theft, surplus found, corrections | Dr adjustment loss · Cr Inventory, or the reverse for a gain |  
| Stock Count (CNT) | Physical counts and the variance they find | Variance posted as gain or loss |  
| Write-down (NRV) | Providing for old, damaged or slow stock (IAS 2) | Dr write-down expense · Cr inventory provision (or reversal) |  

 

#### Screens in this module

Masters & Settings

ItemsItemsService ItemsCategoriesUnits (Master Data)

Stores & controlsStoresAdjustment ReasonsInventory Settings

Transactions

ReceiptsOpening StockStock Receipt

IssuesStock Issue EntryMaterial Consumption

MovementTransfersAdjustments

Counting & valuationStock CountStock Write-down (NRV)Reorder Planning

Reports

Dashboard & reportsInventory DashboardInventory ReportsStock Ledger & ValuationItem Comprehensive Report 

### Masters & Settings  

### Items

Inventory › Masters & Settings › Items › Items 

Every stock item, service for sale and non-stock item, with the stock held now. KPIs show active items, stock value, items below reorder level, out of stock, negative stock and items without an inventory account. Select a row to open the item card: stock by store, cost layers, movements, usage and the accounts it posts to. How to use it
- Select + New. The Code (ITM-0001) is automatic.
- In General enter the name (and Arabic name), the sales description, Category, UOM and Type.
- In Stock control set the Reorder Level, Min / Max Stock, Reorder Qty, Lead Time and Preferred Supplier; these drive Reorder Planning.
- In Accounts select Apply standard accounts or choose the inventory, cost of sales and revenue accounts.
- In Selling and buying decide whether it can be sold and purchased, the Minimum Price and Sales VAT. Add selling prices with an Effective from date in the price list.
- In Buying and project costs mark subcontract items and the Project Cost Type used when it is charged to a project.
- Save. 

_[Screenshot: Items]_

The Items screen

_[Screenshot: Items form]_

The form that opens with + New 

Fields on the “New Item” form
| Field | Type | What to enter / options | 
| General | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name  | Text | The name shown in every drop-down list and printout. | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| Sales Description  | Text | Description printed on quotations and invoices. | 
| Category  | List | 

Pick from the master list | 
| UOM  | List | Unit of measure.

Pick from the master list | 
| Type  | List | Trading Goods, Finished Goods, Raw Material, Consumable, Service for sale, Stock, Non-stock or Service. Stock types are tracked by quantity and value; non-stock and services are not.

Trading Goods · Finished Goods · Raw Material · Consumable · Service for sale · Stock · Non-stock · Service | 
| Status  | List | Active, Inactive or Obsolete.

Active · Inactive · Obsolete | 
| Barcode  | Text | Barcode number for scanning. | 
| Brand  | Text |  | 
| Manufacturer Part No  | Text |  | 
| HS Code  | Text | Customs tariff code, for imports and exports. | 
| Country of Origin  | Text |  | 
| Remarks  | Text | Free notes. They print on the document. | 
| Stock control | 
| Reorder Level  | Number | When stock falls to this quantity the item appears in Reorder Planning. | 
| Min Stock  | Number | Safety stock. | 
| Max Stock  | Number | Upper limit; reorders top up to this. | 
| Reorder Qty  | Number | Minimum quantity to order each time. | 
| Lead Time (days)  | Number | Days the supplier needs to deliver. | 
| Preferred Supplier  | List | 

Pick from the master list | 
| Accounts | 
| Inventory Account  | List | Balance sheet account holding the value of this item.

Pick a ledger account from the chart of accounts | 
| Cost of Sales Account  | List | Expense charged when the item is sold.

Pick a ledger account from the chart of accounts | 
| Revenue Account  | List | Income account credited when the item is sold. Required before a sales invoice can post.

Pick a ledger account from the chart of accounts | 
| Selling and buying | 
| Can be Sold automatic | List | No hides the item on sales documents.

Yes · No | 
| Can be Purchased  | List | No hides the item on purchase documents.

Yes · No | 
| Minimum Price  | Number | Selling below this price needs approval. | 
| Sales VAT  | List | Default VAT category on sales: Standard (5%), Zero-rated or Exempt.

Standard (5%) · Zero-rated · Exempt | 
| Buying and project costs | 
| Subcontract Item  | List | Yes for subcontracted work bought as an item.

No · Yes | 
| Project Cost Type  | List | Cost type used when the item is charged to a project.

Labour · Materials · Equipment · Subcontract · Overhead · Other · Revenue | 
| Purchase Cost Account  | List | Account charged when a non-stock item is bought.

Pick a ledger account from the chart of accounts | 
| Manufacturing (not active yet) | 
| BOM (inactive) automatic | Text |  | 
| Routing (inactive) automatic | Text |  | 
| Standard Cost (inactive) automatic | Number |  | 

 

Buttons on this screen
- Fill missing accounts fills blank accounts on all items from their category or the standard accounts.
- Excel downloads the report as a spreadsheet.
- Apply standard accounts fills the item's accounts from the standard chart.
- + Add price adds a selling price with its effective date. 

Good to know
- The Manufacturing fields (BOM, routing, standard cost) are reserved for the future manufacturing module and are not active yet. 

Comprehensive report
- Every line of the list has a Report button, and a saved item has a 📊 Comprehensive report button at the bottom of its form: both open the Item Comprehensive Report. The Item Card has a Comprehensive report button too.   

### Service Items

Inventory › Masters & Settings › Items › Service Items 

Services bought or sold (scaffolding rental, crane hire, testing, subcontracted labour). Service lines on GRNs and invoices go to the project and activity chosen, or to the service's expense account. How to use it
- Select + New, enter the Name, Unit, standard Rate and VAT %.
- Choose the Expense Account (or Apply standard accounts).
- Save. 

_[Screenshot: Service Items]_

The Service Items screen

_[Screenshot: Service Items form]_

The form that opens with + New 

Fields on the “New Service Item” form
| Field | Type | What to enter / options | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Unit  | Text | Unit of measure. | 
| Rate  | Number | Exchange rate to the base currency. Amounts are converted with this rate when posted. | 
| VAT %  | Number | VAT rate. 5 for standard-rated supplies, 0 for zero-rated or exempt. | 
| Expense Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Categories

Inventory › Masters & Settings › Items › Categories 

Item categories (Steel, Cement, Electrical, Plumbing…). A category carries default accounts for its items and the count frequency, and the screen shows stock value by category. How to use it
- Select + New, enter the Name.
- Choose the accounts: inventory, cost of sales, revenue, adjustment gain and loss, write-down expense and provision (or Apply standard accounts).
- Set the Count Frequency for cycle counts.
- Save. 

_[Screenshot: Categories]_

The Categories screen

_[Screenshot: Categories form]_

The form that opens with + New 

Fields on the “New Category” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| Inventory Account  | List | 

Pick a ledger account from the chart of accounts | 
| Cost of Sales Account  | List | 

Pick a ledger account from the chart of accounts | 
| Revenue Account  | List | 

Pick a ledger account from the chart of accounts | 
| Adjustment Gain Account  | List | 

Pick a ledger account from the chart of accounts | 
| Adjustment Loss Account  | List | 

Pick a ledger account from the chart of accounts | 
| Write-down Expense Account  | List | 

Pick a ledger account from the chart of accounts | 
| Provision Account  | List | 

Pick a ledger account from the chart of accounts | 
| Count Frequency  | List | How often items in this category should be counted: Monthly, Quarterly, Half-yearly or Yearly.

Monthly · Quarterly · Half-yearly · Yearly | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Stores

Inventory › Masters & Settings › Stores & controls › Stores 

Warehouses and site stores. Each store has a type, an optional project and branch, and a storekeeper. The lower table shows the stock held in each store. How to use it
- Select + New, enter the Name and Location.
- Choose the Store Type, and link a Project for site stores.
- Choose the Storekeeper and Cost Centre.
- Save. 

_[Screenshot: Stores]_

The Stores screen

_[Screenshot: Stores form]_

The form that opens with + New 

Fields on the “New Store” form
| Field | Type | What to enter / options | 
| General information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Location  | Text |  | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Store Type  | List | Main warehouse, Site store, Workshop, Showroom, Consignment, or Quarantine or damaged.

Main warehouse · Site store · Workshop · Showroom · Consignment · Quarantine or damaged | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Additional details | 
| Storekeeper  | List | Employee responsible for the store.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

   

### Adjustment Reasons

Inventory › Masters & Settings › Stores & controls › Adjustment Reasons 

Reasons used on stock adjustments, each with the direction it allows and the account it posts to. How to use it
- Select + New, enter the name (for example Damaged in transit).
- Choose Direction: Both, Decrease only or Increase only.
- Choose the GL Account for the gain or loss.
- Save. 

_[Screenshot: Adjustment Reasons form]_

The form that opens with + New 

Fields on the “New Adjustment Reason” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Direction  | List | 

Both · Decrease only · Increase only | 
| GL Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Inventory Settings

Inventory › Masters & Settings › Stores & controls › Inventory Settings 

The rules every inventory screen follows: the cost method, whether stock may go below zero, whether transfers need approval, the count tolerance, ageing and ABC classification, the NRV ageing matrix, and the default accounts. How to use it
- Review each section, change what your policy requires, and select Save. 

_[Screenshot: Inventory Settings]_

The Inventory Settings screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Costing and control | 
| Cost method  | List | FIFO: stock leaves at the cost of the oldest receipt. Weighted average: at the average cost on hand. Change only at the start of a period.

FIFO · Weighted average | 
| Stock below zero  | List | Block: documents that would make stock negative cannot post. Warn: they can post after a warning.

Block · Warn | 
| Transfer approval  | List | Required: transfers are submitted, approved and then dispatched.

Required · Not required | 
| Alert for goods in transit after (days)  | Number |  | 
| Stock counts | 
| Count tolerance (%)  | Number | Differences above this must be recounted before the count posts. 0 = recount every difference. | 
| Ageing and classification | 
| Slow-moving after (days)  | Number |  | 
| Non-moving after (days)  | Number |  | 
| Ageing bands (days)  | Text | Upper limit of each age band, comma-separated (for example 30,60,90,180,365). | 
| ABC: class A up to (% of usage)  | Number |  | 
| ABC: class B up to (% of usage)  | Number |  | 
| ABC: usage of the last (days)  | Number |  | 
| Write-down to net realisable value (IAS 2) | 
| Ageing matrix  | Text | Write-down % by age of stock, for example 181:25,366:50 (25% after 181 days, 50% after 366 days). | 
| Accounts used when the item and its category have none | 
| Adjustment gain  | List | 

Pick a ledger account from the chart of accounts | 
| Adjustment loss  | List | 

Pick a ledger account from the chart of accounts | 
| Write-down expense  | List | 

Pick a ledger account from the chart of accounts | 
| Provision for write-down  | List | 

Pick a ledger account from the chart of accounts | 

  

### Transactions  

### Opening Stock

Inventory › Transactions › Receipts › Opening Stock 

Enters the stock on hand in each store on the go-live date, with its unit cost. How to use it
- Select + New, choose the Store and Item, enter Qty and Unit Cost, and Save. Repeat per item, or use Template and Import for a whole stock list. 

_[Screenshot: Opening Stock form]_

The form that opens with + New 

Fields on the “New Opening Stock” form
| Field | Type | What to enter / options | 
| Information | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Item  | List | The stock item.

Pick from the master list | 
| Qty  | Number | Quantity in the item's unit of measure. | 
| Unit Cost  | Number |  | 

 

Good to know
- Opening stock sets the quantities and cost layers. Enter the matching Inventory ledger balance in Chart of Accounts › Opening balances so the stock ledger agrees with the general ledger.   

### Stock Receipt

Inventory › Transactions › Receipts › Stock Receipt 

Receives stock that did not come through a purchase order: a return from a project, production output, client-supplied material, a donation or sample, or an opening balance. Posting adds the stock at the cost entered and credits the account chosen. Goods bought from suppliers are received on a GRN instead. How to use it
- Select + New, enter the Date, Store and Receipt type.
- For a return from a project choose the Project: the cost is credited back to it.
- Choose the Credit account.
- Add the items with quantity and unit cost (or Paste lines from Excel).
- Select Save and submit; an approver posts it. 

_[Screenshot: Stock Receipt form]_

The form that opens with + New 

Fields on the “New Stock Receipt” form
| Field | Type | What to enter / options | 
| Receipt | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Store required | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Receipt type required | List | Return from project, Production output, Client-supplied material, Donation or sample, Opening balance, Other.

Return from project · Production output · Client-supplied material · Donation or sample · Opening balance · Other | 
| Reference (delivery note, return note…)  | Text | Your own reference, such as an external document number. | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Credit account required | Text | The account credited with the value received. | 
| Remarks  | Long text | Free notes. They print on the document. | 

 

Table columns: # · ITEM · UNIT · ON HAND · QUANTITY · UNIT COST · AMOUNT · NOTE 

Buttons on this screen
- + Add line adds a line to the table.
- Paste lines from Excel
- Save as draft
- Save and submit   

### Stock Issue Entry

Inventory › Transactions › Issues › Stock Issue Entry 

Issues material from a store. Choose the store and every item held there is listed with its quantity on hand and FIFO cost. Enter the quantity to issue and the account to charge. For a project WIP account choose the project and activity; for other control accounts the analysis details are asked for when you post. How to use it
- Select + New, enter the Date and choose the Store.
- Enter the issue quantity on each item needed.
- Choose the GL account, Project and Activity at the top and select Apply to lines with a quantity, or set them per line.
- Save and Post. 

_[Screenshot: Stock Issue Entry form]_

The form that opens with + New 

Fields on the “New Stock Issue Entry” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Item  | List | The stock item.

Pick from the master list | 
| Qty  | Number | Quantity in the item's unit of measure. | 
| Reference  | Text | Your own reference, such as an external document number. | 
| Items issued from the store | 
| GL account  | List | 

Pick a ledger account from the chart of accounts | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Additional details | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: REF · ITEM · UOM · ON HAND · UNIT COST (FIFO) · ISSUE QTY · AMOUNT · GL ACCOUNT · PROJECT · ACTIVITY · ANALYSIS 

Buttons on this screen
- Apply to lines with a quantity 

Good to know
- The printed issue note lists item, quantity, unit cost, amount, GL account, project and activity.   

### Material Consumption

Inventory › Transactions › Issues › Material Consumption 

Records material consumed on site against a project and cost code, when your procedure tracks consumption separately from issues. How to use it
- Select + New, choose the Store, Item, Qty and Cost Code, and the Project.
- Save, submit and approve. 

_[Screenshot: Material Consumption form]_

The form that opens with + New 

Fields on the “New Material Consumption” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Item  | List | The stock item.

Pick from the master list | 
| Qty  | Number | Quantity in the item's unit of measure. | 
| Cost Code  | Text |  | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Additional details | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Amount  | Number | The amount before VAT. | 
| VAT %  | Number | VAT rate. 5 for standard-rated supplies, 0 for zero-rated or exempt. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved · Rejected · Closed · Cancelled | 

   

### Transfers

Inventory › Transactions › Movement › Transfers 

Moves stock between stores at its cost. Immediate transfers happen when approved. Two-step transfers take the stock out of the sending store at dispatch and show it In transit until the receiving store confirms what arrived; a shortage is charged as a loss. How to use it
- Select + New, enter the Dispatch date, From store and To store, and choose How (Two-step or Immediate).
- Enter the waybill, vehicle or driver and the Reason.
- Add the items and quantities.
- Select Save and submit. After approval the sending store dispatches it; the receiving store confirms the quantity received. 

_[Screenshot: Transfers form]_

The form that opens with + New 

Fields on the “New Stock Transfer” form
| Field | Type | What to enter / options | 
| Transfer | 
| Dispatch date required | Date |  | 
| From store required | List | 

Pick from the master list | 
| To store required | List | 

Pick from the master list | 
| How  | List | Two-step: stock is in transit until received. Immediate: moved at once.

Two-step · Immediate | 
| Waybill, vehicle or driver  | Text |  | 
| Reason  | List | Replenishment, Project requirement, Rebalancing, Return to main store or Other.

Replenishment · Project requirement · Rebalancing · Return to main store · Other | 
| Remarks  | Long text | Free notes. They print on the document. | 

 

Table columns: # · ITEM · UNIT · ON HAND (SENDING STORE) · QUANTITY · COST · NOTE 

Buttons on this screen
- + Add line adds a line to the table.
- Paste lines from Excel
- Save as draft
- Save and submit 

Good to know
- Transfers in transit longer than the alert days in Inventory Settings appear in the alerts.   

### Adjustments

Inventory › Transactions › Movement › Adjustments 

Corrects stock for damage, expiry, loss, theft, surplus found and other differences that are not from a count. A decrease is valued at the cost of the stock taken out (oldest first); an increase at the cost you enter. How to use it
- Select + New, enter the Date, Store and a Reason for all lines.
- Add each item, choose Decrease or Increase, and the quantity (and unit cost for increases).
- Check the loss, gain and net effect, then Save and submit. 

_[Screenshot: Adjustments form]_

The form that opens with + New 

Fields on the “New Stock Adjustment” form
| Field | Type | What to enter / options | 
| Adjustment | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Store required | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Reason (for all lines)  | List | Why this was done. Kept for audit.

Damaged · Expired · Lost or stolen · Found (surplus) · Count variance · Obsolete or scrap · Wrong receipt or issue correction · Other | 
| Cost centre  | List | 

Pick from the master list | 
| Remarks  | Long text | Free notes. They print on the document. | 

 

Table columns: # · ITEM · UNIT · ON HAND · DIRECTION · QUANTITY · UNIT COST (INCREASE) · AMOUNT · REASON · NOTE 

Buttons on this screen
- + Add line adds a line to the table.
- Paste lines from Excel
- Save as draft
- Save and submit   

### Stock Count

Inventory › Transactions › Counting & valuation › Stock Count 

A physical stock count. Prepare a count sheet, start the count (which freezes the system quantity and cost), enter what was counted, recount lines outside the tolerance, and post the variance. How to use it
- Select + New, enter the Count date and Store, choose What to count (all items with stock, one category, class A items, or selected items) and select Generate the items.
- Choose Counted by and Supervisor, the tolerance, and whether it is a Blind count (system quantity hidden on the printed sheet).
- Select Save and start the count and print the sheet.
- Enter the counted quantities; recount lines outside the tolerance.
- Submit; after approval the differences are posted. 

_[Screenshot: Stock Count form]_

The form that opens with + New 

Fields on the “New Stock Count” form
| Field | Type | What to enter / options | 
| Count sheet | 
| Count date required | Date |  | 
| Store required | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| What to count  | List | 

Items with stock in the store · One category · Class A items (by usage) · Selected items | 
| Counted by  | List | 

Pick from the master list | 
| Supervisor  | List | 

Pick from the master list | 
| Tolerance % (recount above)  | Number |  | 
| Blind count  | List | 

No · Yes | 
| Remarks  | Long text | Free notes. They print on the document. | 

 

Table columns: # · ITEM · CATEGORY · UNIT · SYSTEM QUANTITY NOW · AVERAGE COST · NOTE 

Buttons on this screen
- + Add line adds a line to the table.
- Paste lines from Excel
- Generate the items
- Save as draft
- Save and start the count   

### Stock Write-down (NRV)

Inventory › Transactions › Counting & valuation › Stock Write-down (NRV) 

Stock is carried at the lower of cost and net realisable value (IAS 2). The assessment suggests a write-down from the age of each cost layer (the ageing matrix) or from the selling price less costs to sell; you can change the NRV of any line. Posting records the change in the provision; the stock cost itself is unchanged. How to use it
- Select + New, enter the Assessment date, the store (blank for all) and the Basis.
- Select Assess the stock to fill the lines.
- Adjust NRV per unit and the reason where needed.
- Select Save and submit; the provision movement posts on approval. 

_[Screenshot: Stock Write-down (NRV) form]_

The form that opens with + New 

Fields on the “New Stock Write-down (NRV)” form
| Field | Type | What to enter / options | 
| Assessment | 
| Assessment date required | Date |  | 
| Store (blank: all stores)  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Basis  | List | Ageing matrix, Selling price less costs to sell, or Manual.

Ageing matrix · Selling price less costs to sell · Manual | 
| Remarks  | Long text | Free notes. They print on the document. | 

 

Table columns: # · STORE · ITEM · UNIT · QUANTITY · UNIT COST · NET REALISABLE VALUE PER UNIT · PROVISION NEEDED · PROVISION HELD · MOVEMENT · REASON 

Buttons on this screen
- + Add line adds a line to the table.
- Paste lines from Excel
- Assess the stock
- Save as draft
- Save and submit   

### Reorder Planning

Inventory › Transactions › Counting & valuation › Reorder Planning 

Lists items at or below their reorder level after counting quantities already on order and on requisitions. The suggested quantity tops up to the maximum (or reorder level plus reorder quantity). Tick lines and create purchase requisitions: one draft per preferred supplier. How to use it
- Filter by Category, Preferred supplier and Show.
- Tick the lines and adjust the quantities.
- Select Create requisitions. Submit the draft PRs in Purchase. 

_[Screenshot: Reorder Planning]_

The Reorder Planning screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Category  | List | 

All categories | 
| Preferred supplier  | List | 

All suppliers | 
| Show  | List | 

Items to order · Also those already covered | 

 

Buttons on this screen
- Create requisitions (0)  

### Reports  

### Inventory Dashboard

Inventory › Reports › Dashboard & reports › Inventory Dashboard 

Inventory at a glance: carrying amount, items to reorder, goods in transit, provision held, non-moving stock and count accuracy; charts of stock by category, receipts and issues for six months, stock age, largest items and stock by store; a list of checks that need attention and the open documents. Select a figure to open the report behind it. 

_[Screenshot: Inventory Dashboard]_

The Inventory Dashboard screen 

Columns shown: Store · Items · Value 

Buttons on this screen
- All reports   

### Inventory Reports

Inventory › Reports › Dashboard & reports › Inventory Reports 

The inventory report library. Each report has its own filters, prints on the company sheet, copies to Excel, and a row opens the stock card or document behind it. 

| Group | Report | Shows | 
| Stock position | Stock Valuation | Quantity, cost, provision and carrying amount on any date. | 
| Stock Status and Reorder | Stock against reorder level, maximum and open orders; days of cover. | 
| Stock Card | Every movement of one item with running balance. | 
| Stock Ageing | Age of stock by cost layer. | 
| Stock to Ledger Reconciliation | Stock ledger against the GL inventory and provision accounts. | 
| Movement and use | Movement Summary | Opening, receipts, issues, other movements, closing. | 
| Consumption Analysis | Cost issued by project, department, cost centre, item, store or month. | 
| Stock Turnover | Issues against average stock and days of stock. | 
| Transfers and Goods in Transit | What is on the way, for how long, and shortages. | 
| Analysis | ABC Analysis | Items ranked by value issued. | 
| Slow and Non-moving Stock | Idle stock, its value and provision. | 
| Adjustments and control | Adjustments and Write-offs | Every adjustment, count difference, transit loss and write-down. | 
| Count Variances | Posted counts with system, counted and recounted quantities. | 
| Write-down Provision Movement | Movement of the NRV provision. | 

 

_[Screenshot: Inventory Reports]_

The Inventory Reports screen   

### Stock Ledger & Valuation

Inventory › Reports › Dashboard & reports › Stock Ledger & Valuation 

The stock ledger and valuation by store and item. Opening stock, approved receipts, issues, consumption, transfers and adjustments are included; drafts are ignored. How to use it
- Choose the store and item (or all).
- Switch between Valuation and Stock ledger.
- Print or export to Excel. 

_[Screenshot: Stock Ledger & Valuation]_

The Stock Ledger & Valuation screen 

Columns shown: Store · Item · Quantity · Average cost · Value · Reorder level · Alert 

Columns shown: Date · Type · Reference · Store · Item · Qty · Value · Balance qty · Balance value 

Buttons on this screen
- Excel downloads the report as a spreadsheet.   

### Item Comprehensive Report

Inventory › Reports › Dashboard & reports › Item Comprehensive Report 

The complete file of one item in one report: master data, stock on hand by store with average cost and value, movements, usage by project and month, purchases and prices by supplier, open orders, sales and margin, and the costing, provision and reorder position. Quantities and values are the same as in Stock Ledger & Valuation. How to use it
- Select Inventory › Reports › Item Comprehensive Report. Search, or filter by category and status.
- Choose the Report date and tick the sections you need.
- Select Open report, or tick several items and select Print selected.
- Open it from Reports (the Reports hub), from the Reports group of the module, from the Report button on each line of the item master, or from the 📊 Comprehensive report button at the bottom of the item form (shown for a saved record). The Item Card also has a Comprehensive report button. 

What the report contains
| Section | What it shows | 
| 1. Item master data | Code, status, name, category, unit, item type, whether it can be sold or purchased, brand, preferred supplier, reorder level and quantity, minimum and maximum stock, standard cost and remarks. | 
| 2. Stock on hand by store | Quantity, average cost, value and position (OK, at or below the reorder level, negative) in each store at the report date, with the total. | 
| 3. Movement summary & ledger | The movements summarised by type (entries, quantity in and out, value), then the latest movements with the running balance. | 
| 4. Usage by project & month | Quantity and value issued to each project, and the usage by month. | 
| 5. Purchases, prices & orders | Purchases by supplier (quantity, value, average and last price), the latest purchases, and the open purchase orders for the item. | 
| 6. Sales & margin | By customer: quantity, revenue, cost, margin, margin % and the last price and sale date. | 
| 7. Costing, provisions & reorder | Costing method, average cost on hand, standard cost and the difference, write-down provision, value net of provision, reorder level and quantity, minimum and maximum stock, lead time, suggested order and ABC class. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Search  | Text | By code, name, category, brand or barcode. | 
| Category  | List | All categories, or one category. | 
| Status  | List | All statuses, or one item status. | 
| Report date  | Date | The report is prepared as at this date. It starts with today. Changing the date inside an open report prepares it again. | 
| Item master data  | Tick box |  | 
| Stock on hand by store  | Tick box |  | 
| Movement summary & ledger  | Tick box |  | 
| Usage by project & month  | Tick box |  | 
| Purchases, prices & orders  | Tick box |  | 
| Sales & margin  | Tick box |  | 
| Costing, provisions & reorder  | Tick box |  | 
| Tick box on each line  | Tick box | Selects the line for Print selected. Up to 30 lines can be printed at a time. | 

 

Columns shown: Code · Item · Category · UOM · Type · Reorder level · Status 

Buttons on this screen
- Print selected (0) prints the ticked lines, each on its own page.
- Open report opens the report of that line. 

Good to know
- The box Points that need attention under the headline figures lists what to look at first; when nothing is wrong it says so.
- The report date limits the cost and the transactions in the report. Reorder levels, open orders and the item status are always shown as they stand today, and the section note says so.
- An item with no stock says so in the stock section instead of printing an empty table.
- Negative stock, stock at or below the reorder level or above the maximum, slow-moving stock, a difference of more than 10% to the standard cost, a write-down provision and a missing inventory account are listed in the box at the top. 

Who can open it
- Roles that have the Inventory, Purchase, Sales or Master Data module.   

 

🏭

Module guide
