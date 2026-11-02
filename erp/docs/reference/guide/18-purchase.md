## Purchase

Suppliers and the full procurement cycle: requisition, quotations and bid comparison, purchase order, goods or service receipt, supplier invoice with three-way match, returns, notes and payment. 

PR→Bid tabulation→LPO→GRN→Purchase invoice→Payment→Supplier SOA 

Every step creates the next document from the previous one, so quantities and prices are typed once and the link between documents is kept (see Document Flow in the Actions menu). Partial quantities are allowed at every step: an LPO can be received in several GRNs, and a GRN invoiced in several invoices.

Accounting. The LPO has no accounting entry. The GRN posts Dr Inventory / project cost / asset, Cr GRN Payables. The purchase invoice clears GRN Payables, adds Input VAT and credits the supplier (Accounts Payable). The payment debits the supplier and credits the bank. Services received on a GRN with a project and activity go straight to project cost. 

The purchase cycle
| Step | Document | Created from | Statuses | Accounting |  
| 1 | Purchase Requisition (PR) | New | Draft → Submitted → Approved → Partially / Fully Converted | None |  
| 2 | RFQ, Supplier Quotations, Bid Tabulation | Approved PR | Draft → Submitted → Approved | None |  
| 3 | Purchase Order (LPO) | PR, bid, or new | Draft → Approved → Partially / Fully Received → Closed | None (checked against project budget) |  
| 4 | GRN / Service Receipt | LPO | Draft → Posted → Partially / Fully Invoiced | Dr Inventory / project cost / asset · Cr GRN Payables |  
| 5 | Purchase Invoice (PI) | GRN, or new | Draft → Posted → Partially Paid → Paid | Dr GRN Payables + Input VAT · Cr Accounts Payable |  
| 6 | Supplier Payment (PV) | Invoice (Generate Payment) or new | Draft → Posted | Dr Accounts Payable · Cr Bank / Cash |  

 

#### Screens in this module

Masters & Settings

Suppliers items services payterms icSuppliersItems (Inventory)Service Items (Inventory)Payment Terms (Master Data)ICV Management (Finance)

Project budget controlBudget Control Settings (Projects)

Supplier portalPortal UsersPortal Settings

Transactions

SourcingPurchase RequisitionRFQSupplier QuotationsBid Tabulation

Order to paymentPurchase Orders (LPO)GRN / Service ReceiptPurchase InvoiceDirect Purchase Tax Invoice3-Way MatchBudget StatusSupplier Credit / Debit NotesSupplier ReturnSupplier Payments (Finance)

Project budgetsProject Cost Budgets (BOQ) (Projects)Procurement Gate (Projects)

Supplier portalSupplier Portal Inbox

ReportsSupplier SOA (Finance)AP Aging (Finance)GRN Payables Report (Finance)Purchase Registers & Analysis (Finance)Commitments vs Budget (Projects)Supplier Comprehensive ReportPortal Audit Log 

### Masters & Settings  

### Suppliers

Purchase › Masters & Settings › Suppliers items services payterms ic › Suppliers 

The supplier master. Suppliers are a sub-ledger under the single Accounts Payable control account, so each has its own balance, statement and ageing without a separate ledger in the chart of accounts. How to use it
- Select + New. The Code (SUP-0001) is created automatically.
- Enter the Name, TRN (needed for input VAT recovery), Phone, Email and Payment Terms.
- Under Additional details enter the IBAN, address, emirate, Retention % (if you hold retention on subcontractors) and the Opening Balance owed on the go-live date.
- Fill the licence and ICV fields if the supplier has an In-Country Value certificate (used for your own ICV score).
- Save. Set Status to Incomplete while documents are awaited; Inactive stops the supplier being chosen.
- To let the supplier sign in to the Supplier Portal set Portal Access to Yes, then create its users in Portal Users. 

_[Screenshot: Suppliers]_

The Suppliers screen

_[Screenshot: Suppliers form]_

The form that opens with + New 

Fields on the “New Supplier” form
| Field | Type | What to enter / options | 
| General information | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| TRN  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 
| Phone  | Text | Main contact number. | 
| Email  | Text | Main contact email. | 
| Payment Terms  | Text | Default credit terms, copied to orders and invoices. | 
| Additional details | 
| Retention %  | Number | Retention you withhold from this supplier or subcontractor on invoices. | 
| IBAN  | Text | The 23-character UAE IBAN starting with AE. | 
| Status  | List | Active can be used; Inactive is hidden from lists; Incomplete flags missing documents.

Active · Inactive · Incomplete | 
| Address  | Text | Address printed on documents. | 
| Country  | List | Country of the party.

United Arab Emirates · Saudi Arabia · Bahrain · Kuwait · Oman · Qatar · Other | 
| Emirate  | List | The emirate. For sales it selects the VAT return box (1a Abu Dhabi to 1g Fujairah).

Abu Dhabi · Dubai · Sharjah · Ajman · Umm Al Quwain · Ras Al Khaimah · Fujairah | 
| Opening Balance  | Number | Amount owed to the supplier on the go-live date. | 
| License Type  | List | Trade licence activity: Trading, Manufacturing, Services or Contracting.

Trading · Manufacturing · Services · Contracting | 
| License Authority  | List | Mainland, Free Zone or Offshore.

Mainland · Free Zone · Offshore | 
| Industrial License  | List | Yes for manufacturers with an industrial licence (higher ICV weight).

Yes · No | 
| ICV Class  | List | How spend with this supplier counts in your ICV calculation.

Standard · Government / Free zone authority · Water and electricity · Property / land rent · Local farmer | 
| ICV Registration No  | Text |  | 
| ICV Certificate No  | Text |  | 
| ICV Score %  | Number | Score on the supplier's ICV certificate. | 
| ICV Issue Date  | Date |  | 
| ICV Expiry Date  | Date | Certificate expiry. Expiring certificates are flagged in ICV Management. | 
| ICV Certifying Body  | Text |  | 
| ICV Status  | List | Valid, Expired, Pending or Not Certified.

Valid · Expired · Pending · Not Certified | 
| ICV Cost %  | Number |  | 
| ICV Investment %  | Number |  | 
| ICV Emiratization %  | Number |  | 
| ICV Expat %  | Number |  | 
| Preferred Supplier  | List | Marks preferred suppliers in lists and bid comparisons.

Yes · No | 
| ICV Certificate Link  | Text | Link to the scanned certificate. | 

 

Good to know
- Use Template and Import to load many suppliers at once.
- A supplier with transactions cannot be deleted; make it Inactive. 

Email address
- The Email of the supplier is used when you send a purchase document, a payment advice or a statement of account. If it is empty, type it in the email window and tick Save it to the master after sending. 

Comprehensive report
- Every line of the list has a Report button, and a saved supplier has a 📊 Comprehensive report button at the bottom of its form: both open the Supplier Comprehensive Report.  

### Transactions  

### Purchase Requisition

Purchase › Transactions › Sourcing › Purchase Requisition 

An internal request to buy materials, services or assets for a project or department. It does not commit the company; once approved it is converted into an RFQ, a bid tabulation or an LPO. How to use it
- Select + New. The number (PR-000001) is automatic.
- Enter the Date, Requester, Project, Department and Priority.
- In Lines requested, choose the type (Inventory, Service or Asset), the item, the project and activity, and the quantity. The unit comes from the master. For stock items the right-hand box shows the quantity available in each store, as a guide.
- Under Additional details enter the Required Date and any reference.
- Save, then Submit. An approver selects Approve.
- From the approved PR use Convert to LPO, on the row of the list or under Actions (or start a bid tabulation). You can also fetch the PR from inside a new LPO with Call SR (see Purchase Orders). The PR shows Partially or Fully Converted as soon as an LPO, even a draft, takes the quantities. 

_[Screenshot: Purchase Requisition]_

The Purchase Requisition screen

_[Screenshot: Purchase Requisition form]_

The form that opens with + New 

Fields on the “New Purchase Requisition” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Requester  | Text | Person asking for the purchase. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Priority  | List | Normal, High or Urgent. Shown to the buyer.

Normal · High · Urgent | 
| Additional details | 
| Required Date  | Date | When the goods or services are needed on site. | 
| Reference  | Text | Your own reference, such as an external document number. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Under Review · Approved · Rejected · Partially Converted · Fully Converted · Closed · Cancelled | 
| Branch  | Text | The branch, if the company has several branches. | 
| Project Ref  | Text | A free reference to the project document, such as a site request number. | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / SERVICE / ASSET · PROJECT · ACTIVITY · QTY · UOM · AVAILABLE IN STOCK 

Buttons on this screen
- Approve accepts the document (no accounting entry).
- Actions opens every other option for the record (print, copy, flow, void, attachments…).
- Convert to LPO
- + Add line adds a line to the table. 

Good to know
- The printed PR shows, for each line, the quantity already ordered and the quantity remaining.
- A fully converted PR cannot be ordered a second time: it is no longer offered by Convert to LPO or Call SR, and an LPO line cannot exceed the pending quantity. Deleting or cancelling the LPO gives the quantity back.   

### RFQ

Purchase › Transactions › Sourcing › RFQ 

A request for quotation sent to a supplier for the lines of a requisition. 

Each line has a Type (Inventory, Asset, Service or GL Account), the item or account, description, quantity, unit, rate, discount %, VAT %, and the project, activity and cost centre the cost belongs to. See Line items. How to use it
- Select + New, enter the PR No and choose the Supplier.
- Add the lines to be quoted.
- Save, Submit and print the RFQ to send it. 

_[Screenshot: RFQ form]_

The form that opens with + New 

Fields on the “New RFQ” form
| Field | Type | What to enter / options | 
| Information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| PR No  | Text |  | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved · Rejected · Closed · Cancelled | 

 

Table columns: TYPE · ITEM / ACCOUNT · DESCRIPTION · QTY · UOM · RATE · DISC % · VAT % · GL ACCOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- + Add line adds a line to the table.   

### Supplier Quotations

Purchase › Transactions › Sourcing › Supplier Quotations 

Records a supplier's quotation in reply to an RFQ, with the quoted rates per line, so quotations can be compared. 

Each line has a Type (Inventory, Asset, Service or GL Account), the item or account, description, quantity, unit, rate, discount %, VAT %, and the project, activity and cost centre the cost belongs to. See Line items. How to use it
- Select + New, enter the RFQ No and choose the Supplier.
- Enter the quoted rate, discount and VAT on each line.
- Save and submit. 

_[Screenshot: Supplier Quotations form]_

The form that opens with + New 

Fields on the “New Supplier Quotation” form
| Field | Type | What to enter / options | 
| Information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| RFQ No  | Text |  | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved · Rejected · Closed · Cancelled | 

 

Table columns: TYPE · ITEM / ACCOUNT · DESCRIPTION · QTY · UOM · RATE · DISC % · VAT % · GL ACCOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- + Add line adds a line to the table.   

### Bid Tabulation

Purchase › Transactions › Sourcing › Bid Tabulation 

Compares quotations from several suppliers for an approved requisition, side by side. An authorised user selects the winning supplier per line; the system never picks the lowest price on its own. The chosen supplier's lines become the LPO. How to use it
- Select + New bid tabulation and choose an approved requisition with quantities still open.
- Add each supplier and enter its prices, delivery and terms per line.
- Compare totals and terms, then select the supplier for each line and record the reason.
- Approve the tabulation and create the LPO(s) from it. 

_[Screenshot: Bid Tabulation]_

The Bid Tabulation screen

_[Screenshot: Bid Tabulation form]_

The form that opens with + New bid tabulation 

Fields on the “New Bid Tabulation” form
| Field | Type | What to enter / options | 
| Approved purchase requisition  | List | 

Pick from the master list | 

 

Buttons on this screen
- + New bid tabulation
- Create 

_[Screenshot: New bid tabulation]_

New bid tabulation 

Fields: New bid tabulation
| Field | Type | What to enter / options | 
| Approved purchase requisition  | List | 

Pick from the master list | 

 

Good to know
- The bid number (BT-…) is copied to the LPO in the Bid No field.   

### Purchase Orders (LPO)

Purchase › Transactions › Order to payment › Purchase Orders (LPO) 

The purchase order sent to the supplier. It commits the project budget (shown as committed in project reports) but has no accounting entry. Goods and services are received against it on GRNs. How to use it
- Select + New, or convert an approved PR or bid tabulation.
- Choose the Supplier, the Project, and enter Expected Delivery and Payment Terms.
- Enter the lines. The bar shows Subtotal, Discount, Taxable, VAT and Total.
- For a foreign supplier choose the Currency and Rate.
- Save, then Approve. The Budget Status panel under the header shows the project budget while you type; if the order exceeds it, the budget control of the project decides (see Budget control on the order).
- Print the LPO (Actions › View / Print PDF) and send it.
- When goods arrive select Convert to GRN: choose the store, delivery note number and the quantity received now on each line. Fetching site requests (Call SR)
- In the new LPO choose the Supplier and, to narrow the list, the Project. Select Call SR under the lines.
- The window lists the approved site requests that still have a pending quantity: number, date, requester, project, required date, requested, ordered and pending. A late request is marked Overdue; a partly ordered one shows Partially Converted. Use Search and the dates to find one.
- Tick one or more requests of the same project. Their lines appear below: untick a line you do not need and change LPO qty (never more than pending). The footer shows the lines, quantity and value selected.
- Select Add to LPO. The lines come in with item, unit, quantity and the last cost of the item (change the rate if needed). Project, department, cost centre, activity and PR No of the header are filled when empty.
- Save. Each PR becomes Partially or Fully Converted at once, and a fully converted PR is not listed again. Budget control on the order
- The Budget Status panel shows, for the project of the order: Allocated, Committed (approved LPOs not yet received), Actual spent, Available, the Current LPO value (without VAT) and a status. Select 📊 Budget Status for the full report, which can be printed.
- When the order is more than the available budget, the Budget Control in the Project Master decides. Hard Block: the LPO cannot be saved (“Insufficient Budget. Available … Required … Shortfall … Budget Revision required.”). Soft Warning: it is saved as Pending Budget Override. No Control: only the panel shows. A project with no choice follows the company setting in Project Control Settings. A Warning Threshold % turns the status amber before the budget runs out.
- A Pending Budget Override LPO cannot be received and does not commit the budget yet. The approver selects Approve Override on its row, reads the report, types the mandatory justification and approves (or rejects: the LPO returns to Draft). Who asked, who approved, how much and why are kept in the report and in the Audit Trail.
- Cancelling an LPO releases its commitment. Saving an edited LPO checks the new value again; if it fits, it returns to Draft. 

_[Screenshot: Purchase Orders (LPO)]_

The Purchase Orders (LPO) screen

_[Screenshot: Purchase Orders (LPO) form]_

The form that opens with + New 

Fields on the “New Purchase Order (LPO)” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Supplier required | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| PR No  | Text | The requisition this order came from (filled on conversion). | 
| Bid No  | Text | The bid tabulation the supplier was chosen in. | 
| Additional details | 
| Expected Delivery  | Date | Delivery date promised by the supplier. | 
| Payment Terms  | Text | Credit terms, for example "30 days". Used to calculate due dates. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Pending Budget Override · Approved · Partially Received · Fully Received · Closed · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
| Project Ref  | Text | A free reference to the project document, such as a site request number. | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Delivery Location  | Text | Site or store address for delivery. | 
| Supplier Ref  | Text | The supplier's quotation or reference number. | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

UAE Dirham · US Dollar · Euro | 
| Rate  | Number | Exchange rate to the base currency. Amounts are converted with this rate when posted. | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / ACCOUNT · DESCRIPTION · QTY · UOM · RATE · DISC % · VAT % · PROJECT · ACTIVITY · COST CENTRE · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- Actions opens every other option for the record (print, copy, flow, void, attachments…).
- Call SR fetches the pending lines of approved site requests (see above).
- 📊 Budget Status opens the budget report of the project (print it for management).
- Approve Override (on the row of a pending LPO) opens the report with the justification box.
- + Add line adds a line to the table. 

Good to know
- Status flow: Draft → (Pending Budget Override) → Approved → Partially Received → Fully Received → Closed.
- Saving is blocked when a line is more than what is pending on its site request (“Cannot order 16 of Cement. Pending balance on PR-000003 is only 15.”), also when the same request line is entered twice.
- Close an LPO that will not be fully delivered so its remaining quantity stops counting as committed. 

Supplier Portal
- For a supplier with portal access the list shows Supplier response (Pending, Accepted, Rejected, Amended). An approved order is sent to the supplier in the portal; if you change it afterwards the supplier must accept it again. Use Ask supplier again in Actions after a rejection. See Supplier Portal Inbox.   

### GRN / Service Receipt

Purchase › Transactions › Order to payment › GRN / Service Receipt 

Records goods received into a store, services received on a project, or an asset delivered. Posting the GRN increases stock (or project cost, or the asset cost) and creates the liability GRN Payables until the supplier invoice arrives. How to use it
- Open an approved LPO and select Convert to GRN (or select + New for a receipt without an order).
- Enter the Store, the supplier Delivery Note number and the date.
- On each line: Inventory – item, store, quantity and amount (the stock account comes from the item); Asset – the asset from the Asset Register; Service – the service, project and activity. The Posts to account column shows where each line will go.
- Save, then Post. Stock and costs are updated and the LPO shows Partially or Fully Received.
- Use Actions › Return to Supplier to return goods from a posted GRN. Recalling the LPO (Call LPO)
- In a new GRN choose the Supplier (required) and, to narrow the list, the Project. Select Call LPO under the lines.
- The window lists the approved or partly received LPOs of that supplier that still have a pending quantity: number, date, project, expected delivery, ordered, received and pending quantity, and status. A late LPO is marked Overdue. A completely received LPO is not listed, so it cannot be received twice.
- Tick one or more LPOs of the same project. Their lines appear below with item code, item, unit, ordered, received, pending, Receive now and unit price. Untick the lines that did not arrive and lower Receive now for a partial delivery (it cannot exceed pending).
- Select Add to GRN. The lines are added with their LPO as the source (see Source qty); LPO No lists every LPO fetched and the empty header fields are filled.
- Choose the store and the delivery note, save and Post. 

_[Screenshot: GRN / Service Receipt]_

The GRN / Service Receipt screen

_[Screenshot: GRN / Service Receipt form]_

The form that opens with + New 

Fields on the “New GRN / Service Receipt” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Supplier required | List | The supplier, from the Suppliers master.

Pick from the master list | 
| LPO No  | Text | The order received against. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Additional details | 
| Delivery Note  | Text | Supplier delivery note number. | 
| Supplier DN  | Text | Supplier's own delivery document reference. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Partially Invoiced · Fully Invoiced · Closed · Cancelled | 
| PR No  | Text |  | 
| Department  | List | The department responsible.

Pick from the master list | 
| Project Ref  | Text | A free reference to the project document, such as a site request number. | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Reference  | Text | Your own reference, such as an external document number. | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

UAE Dirham · US Dollar · Euro | 
| Rate  | Number | Exchange rate to the base currency. Amounts are converted with this rate when posted. | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / ASSET / SERVICE · DESCRIPTION · STORE · QTY · UOM · UNIT PRICE · AMOUNT · VAT % · PROJECT · ACTIVITY · POSTS TO ACCOUNT · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- Actions opens every other option for the record (print, copy, flow, void, attachments…).
- Call LPO recalls the pending lines of the LPOs of the chosen supplier (see above).
- + Add line adds a line to the table. 

Good to know
- A GRN cannot take more than what is pending (“Cannot receive 41 of Cement. Pending balance on LPO-000001 is only 40.”). A saved GRN, even a draft, already holds its quantity, so the same LPO line cannot be received twice; delete or cancel the draft to release it.
- The LPO changes to Partially or Fully Received when the GRN is posted, because that is when stock and cost are booked.
- Accounting: Dr Inventory (or project cost, or asset cost) · Cr GRN Payables.
- The GRN Payables Report lists GRNs not yet invoiced. 

Supplier Portal
- A GRN created from a supplier delivery shows Source: Supplier Portal and the supplier user in Source / created by, with its Voucher No. (select it to open the journal). Use the Source filter to list only portal GRNs; a banner shows deliveries waiting for approval, which you approve in the Supplier Portal Inbox.   

### Purchase Invoice

Purchase › Transactions › Order to payment › Purchase Invoice 

The supplier's tax invoice. Created from a posted GRN, or directly for services and expenses that have no GRN. Posting it credits the supplier and records Input VAT. How to use it
- Open the posted GRN and convert it to a Purchase Invoice, or select + New.
- Enter the Supplier Inv No (as printed on the supplier's invoice) and the Due Date.
- Check each line against the supplier invoice. Use the GL Account type for charges not on the GRN (transport, other charges).
- Save, then Post. The 3-Way Match blocks posting if quantity, amount or VAT differ from the LPO and GRN beyond the tolerance.
- When it is time to pay, use Generate Payment on the invoice row. 

_[Screenshot: Purchase Invoice]_

The Purchase Invoice screen

_[Screenshot: Purchase Invoice form]_

The form that opens with + New 

Fields on the “New Purchase Invoice” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Supplier required | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Supplier Inv No  | Text | The number printed on the supplier's tax invoice. Needed for the VAT audit trail. | 
| GRN No  | Text | The GRN invoiced. | 
| LPO No  | Text | The order invoiced. | 
| Additional details | 
| Due Date  | Date | Date the amount becomes due. Used by the ageing reports. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Partially Paid · Paid · Cancelled | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Project Ref  | Text | A free reference to the project document, such as a site request number. | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Reference  | Text | Your own reference, such as an external document number. | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

UAE Dirham · US Dollar · Euro | 
| Rate  | Number | Exchange rate to the base currency. Amounts are converted with this rate when posted. | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / ACCOUNT · DESCRIPTION · QTY · UOM · RATE · DISC % · VAT % · GL ACCOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- Generate Payment
- Actions opens every other option for the record (print, copy, flow, void, attachments…).
- + Add line adds a line to the table. 

Good to know
- No order or goods receipt? For rent, utilities, fees or any one-off service use Direct Purchase Tax Invoice: you choose the ledger account of every line, debit or credit, and a tax code. Those invoices are listed here too.
- Against a GRN: Dr GRN Payables + Input VAT · Cr Accounts Payable. Without a GRN: Dr expense / inventory + Input VAT · Cr Accounts Payable.
- Status flow: Draft → Posted → Partially Paid → Paid. 

Supplier Portal
- An invoice created from a supplier’s portal invoice shows Source: Supplier Portal, the supplier user and its Voucher No. (select it to open the journal entry). Use the Source filter to list only portal invoices; approve waiting ones in the Supplier Portal Inbox.   

### Direct Purchase Tax Invoice

Purchase › Transactions › Order to payment › Direct Purchase Tax Invoice 

Records a supplier’s tax invoice that has no purchase order or goods receipt: rent, utilities, professional fees, insurance, one-off services. There is no three-way match. Every line goes to a ledger account that you choose, as a debit (cost or asset) or a credit (discount, credit received), with a tax code. The input VAT is worked out from the code, locked against manual change, and posted to Input VAT.

It posts to the supplier’s account, so payments, ageing, the supplier statement, debit notes and the VAT return treat it like any other purchase invoice. It also appears in Purchase Invoice, where Edit opens this form.How to use it
- Open Purchase › Direct Purchase Tax Invoice and select + New Direct Purchase Tax Invoice (the same form opens from the Direct Purchase Tax Invoice button on the Purchase Invoice screen).
- Choose the Supplier, then enter the Supplier invoice no exactly as printed on the supplier’s invoice, and check the supplier’s TRN.
- For each line choose the ledger account, Debit for a cost or Credit for a deduction, add the description and amount, and choose the Tax code. Use Amounts entered: Including VAT if the supplier’s lines show gross amounts.
- Check VAT by tax code and the journal below the lines, then select Save draft, Save and print or Save and post. To pay the supplier select Generate Payment on the invoice row.

_[Screenshot: Direct Purchase Tax Invoice register]_

The register with its tiles, filters and row actions

_[Screenshot: Direct Purchase Tax Invoice form]_

The form: two debit lines, one credit line (a discount received) and the journal preview

_[Screenshot: Printed Direct Purchase Tax Invoice]_

The printed PURCHASE TAX INVOICE with the VAT summary

Fields on the “New Direct Purchase Tax Invoice” form
| Field | Type | What to enter / options | 
| Invoice | 
| Invoice no automatic | Text | Created when the form opens (prefix DPI). | 
| Invoice date required | Date | The date on the supplier’s invoice. It decides the accounting period and the VAT return period. | 
| Supplier required | List | The supplier, from the Suppliers master. Its TRN and due date are filled in.

Pick from the master list | 
| Supplier TRN  | Text | The supplier’s 15-digit tax registration number. It is needed to claim input VAT. If the master has none, the number you enter here is saved to it. | 
| Supplier invoice no required | Text | The number printed on the supplier’s own tax invoice. It is needed to claim input VAT, and the same number cannot be recorded twice for one supplier. | 
| Due date  | Date | Worked out from the supplier’s payment terms. Change it if needed. | 
| Currency  | List | Leave blank for the base currency (AED). For a foreign invoice choose the currency; the exchange rate comes from Exchange Rates. | 
| Exchange rate  | Number | Shown for a foreign currency. The invoice is posted in AED at this rate. | 
| Amounts entered  | List | Excluding VAT (default) or Including VAT, when the amounts you copy from the supplier’s invoice are gross.

Excluding VAT · Including VAT | 
| Reference  | Text | Contract, meter or claim number. | 
| Remarks  | Long text | Free notes. They print on the document. | 
| Project, Department, Cost centre  | List | Optional, for the whole invoice. Tick Project / cost centre on each line to set them line by line. | 

Table columns: # · LEDGER ACCOUNT * · DEBIT / CREDIT * · DESCRIPTION · AMOUNT EXCL. VAT * · TAX CODE * · VAT 🔒 AUTO · LINE TOTAL · Project · Cost centre

What the invoice in the picture posts
| Account | Debit | Credit | Comes from | 
| Utilities | 910.00 |  | line 1, debit, 5% | 
| Utilities | 60.00 |  | line 2, debit, zero-rated | 
| Office Expenses |  | 50.00 | line 3, credit: a discount received, with its VAT | 
| VAT Input | 43.00 |  | 5% of 860.00 (910.00 less 50.00) | 
| Accounts Payable |  | 963.00 | the invoice total, to the supplier | 

Buttons on this screen
- + New Direct Purchase Tax Invoice opens the entry form.
- Save draft keeps the invoice without posting it.
- Save and print saves it and opens the PURCHASE TAX INVOICE print preview.
- Save and post saves, checks and posts the invoice.
- Post posts a draft from the register.
- Edit changes a draft. A posted invoice is reversed instead.
- Journal shows the posted entry.
- Generate Payment creates a payment for the outstanding amount.
- Reverse cancels a posted invoice with a reversing entry and a reason.
- Copy makes a new draft. The supplier invoice no is left empty for you to enter.
- Delete removes a draft.

Good to know
- Input VAT is recovered only with a valid tax invoice. When a line carries a 5% input code, the supplier’s TRN and the supplier invoice no are required before posting. Lines with a zero-rated, exempt or out of scope code claim no VAT.
- The VAT of a 5% line goes to box 9 of the VAT Return. A credit line with a 5% code reduces the input VAT claimed.
- Fixed assets: the fixed asset control account cannot be used. Record the purchase of an asset in Acquisitions so that the asset register agrees with the ledger.
- The same accounts are refused as on the sales side: customer and supplier control accounts, VAT accounts and accounts that do not allow manual posting.
- A tile row at the top of the register shows Drafts, Posted this month, Input VAT this month, Outstanding, Overdue and Need attention; each opens its list.
- To correct a posted invoice, Reverse it and enter a new one. For a reduction agreed later with the supplier use a Supplier Credit Note. 

Allocation pop-up
- When the account has an Analysis Type (see Analysis Templates), enter the amount of the line and press Enter: a window opens to allocate the amount (To apply, Applied, Balance). Under the amount the line shows ⊕ Allocate (or Allocated X of Y) in orange until the amount is fully allocated, then ✓ Allocated in green; select it to open the window again. The amount to allocate is the line total without VAT.   

### 3-Way Match

Purchase › Transactions › Order to payment › 3-Way Match 

Compares every supplier invoice with its LPO and GRN on quantity, amount and VAT and shows whether each one passes. An invoice that fails cannot be posted. Invoices without an LPO or GRN reference are not matched. How to use it
- Set the Tolerance % allowed for small differences.
- Review the invoices that fail and correct the invoice, or record a credit / debit note. 

_[Screenshot: 3-Way Match]_

The 3-Way Match screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Tolerance %  | Number |  | 

 

Columns shown: Invoice · Supplier · LPO · GRN · Amount · Result · Details   

### Budget Status

Purchase › More screens › Budget Status 

The purchase budget of every project in one list: allocated, committed by open LPOs, actual cost and what is still available, with the budget control of each project. Open a project for its printable Budget Status report. How to use it
- Read the boxes: projects with a budget, Over budget, Near the warning level and Overrides waiting. Select a box to list only those projects; select it again to clear.
- Select View / Print on a project. The report shows the summary, the budget by cost type and by activity, the open commitments and the budget overrides (who asked, who approved, how much and why).
- In the report use Print / Save as PDF (A4 portrait or landscape). For the list use Print, PDF or Excel. 

Good to know
- Allocated is the cost budget of the project (budgets and BOQ). Committed is approved LPOs not yet received. Actual is posted cost. Available = Allocated − Actual − Committed. Amounts are without VAT.
- The same report opens from the 📊 Budget Status button of an LPO and from Approve Override.
- Set the control of each project (Hard Block, Soft Warning or No Control) and its warning threshold in the Project Master.   

### Supplier Portal Inbox

Purchase › Transactions › Supplier Portal › Supplier Portal Inbox 

Your suppliers sign in to a separate web page (the Supplier Portal), see only their own purchase orders, accept or reject each order, send a delivery with the delivery note, and then send the invoice. Nothing reaches your books until you approve it here. Your ERP itself is never opened to the internet: it sends the portal a copy of each supplier’s orders and collects what suppliers submit. 

LPO sent to supplier→Supplier accepts→Supplier sends delivery + documents→You approve: GRN + journal→Supplier sends invoice→You approve: invoice + journal→Paid How to use it
- Set the supplier up once: Portal Access = Yes in the Supplier master, a user under Portal Users, and the connection under Portal Settings.
- Open the inbox. It synchronises by itself (every few minutes while the ERP is open); select Synchronise now to do it at once. Select Open the portal to see the supplier’s page.
- Read the boxes: Deliveries to approve, Invoices to approve, Orders not yet accepted, Orders rejected, Approved this month and Rejected so far. Select a box to list only those items.
- Delivery. Select Review. You see the supplier’s quantities against the order (ordered, received before, open now), the delivery note, vehicle and remarks, and the supporting documents (select Open to view each one). Check the goods physically, lower the Accept quantity of a line if less was accepted, choose the receipt date and receiving store, and select Approve and post GRN. The GRN is created with the next number and its journal voucher is posted (Dr stock or expense, Cr GRN payables).
- Invoice. The supplier can invoice only an approved delivery. Select Review: the supplier’s invoice is shown beside the approved delivery still to be invoiced, with the difference. Set the posting and due date (the due date follows the payment terms) and select Approve and post invoice. The purchase invoice is created with the next number and its journal voucher is posted (Dr GRN payables and input VAT, Cr accounts payable).
- To refuse an item select Reject… and give the reason. The supplier sees it, corrects the delivery or invoice and sends it again. 

Good to know
- A delivery is posted only for the accepted quantity, never more than the open quantity of the order. An invoice is posted at the approved delivery value (three-way match). If the supplier’s total differs by more than the tolerance in Portal Settings, the supplier must explain it and you must write an approver note (at least 10 characters) before approving; settle the difference with a credit or debit note.
- The supplier sees the invoice as In Review, then Approved, Partially Paid or Paid (after you pay it in Supplier Payments and the next synchronisation), or Rejected. An order changed after the supplier accepted it must be accepted again; a late answer to an old version is marked Superseded.
- If a document cannot be posted (a locked period, a missing account), nothing is created and you see why; the supplier’s submission stays in the inbox. If the gateway is not reachable, decisions are kept and sent at the next synchronisation.
- The new GRN or invoice shows Source: Supplier Portal, the supplier user who created it, and its portal reference. Its journal lines carry the same flag, so finance can filter them. The Actions › Supplier Documents button opens the delivery note or tax invoice; small files are also saved in the document’s Attachments.
- With Different approver switched on in Portal Settings, the person who approved a delivery cannot approve its invoice (maker-checker).   

### Portal Users

Purchase › Masters & Settings › Supplier Portal › Portal Users 

The people at your suppliers who may sign in to the Supplier Portal. A supplier needs Portal Access = Yes in the Supplier master and at least one active user. How to use it
- Select + New user, choose the Supplier, enter the person’s Name and Email (the sign-in name), and choose the Type: Sales sees orders and sends deliveries, Finance sees deliveries and invoices and sends invoices, Both does all.
- After saving, the window shows a temporary password once. Select Copy details or Send invitation email and give it to the person safely. It is not stored in readable form and cannot be shown again.
- At the first sign-in the person sets up an authenticator app and chooses a new password.
- Use the row buttons: New password, Unlock for a user locked after five wrong passwords (the lock ends by itself after 15 minutes), Reset authenticator for a lost phone, Edit to set a user to Inactive, or Delete for a user who has not submitted anything. 

Good to know
- Each user sees only the orders, deliveries and invoices of their own supplier.
- The boxes show active users, suppliers with users, users locked now and users who never signed in. A supplier with no active user, or Portal Access = No, cannot sign in.   

### Portal Settings

Purchase › Masters & Settings › Supplier Portal › Portal Settings 

Connection, upload rules, matching tolerance, security and synchronisation of the Supplier Portal. How to use it
- Connection. The portal runs inside the same gateway as ERP email (Email Settings; use gateway version 1.2). Select How to set it up, download the gateway and portal files, start the gateway on a server behind https, enter its address and key in Email Settings, then select Test the connection. Enter the public https address of the portal if it differs.
- What suppliers must provide. Whether the order must be accepted before delivery, the least number of documents, the most files, the largest file (MB) and the allowed types (PDF, JPG, PNG; the file content is checked, not only its name).
- Invoice matching. The amount and percentage tolerance, and whether a different approver is needed for the delivery and its invoice.
- Security. Authenticator code at every sign-in and the idle sign-out time. Passwords are stored as salted hashes. A virus scan of uploads is available with ClamAV beside the gateway.
- Posting and synchronisation. The default receiving store, the size of documents kept in the ERP, automatic synchronisation, supplier emails when you decide, and the address to email when suppliers submit.
- Select Save settings.   

### Portal Audit Log

Purchase › Reports › Portal Audit Log 

Every action in the Supplier Portal, kept in a record nobody can edit: sign-ins and failures, order answers, deliveries and invoices sent, uploads, and your approvals and rejections, each with the user, supplier, reference, time and the address it came from. How to use it
- Filter by text, supplier, action or dates.
- Select Check integrity to prove that no entry was changed or removed: the entries are chained, so any edit breaks the check.
- Use Excel / CSV to give the list to the auditors.   

### Supplier Credit / Debit Notes

Purchase › Transactions › Order to payment › Supplier Credit / Debit Notes 

A credit note from a supplier (reducing what you owe: price reduction, discount, return already invoiced) or a debit note you raise on the supplier. How to use it
- Select + New, choose the Supplier and the Invoice No it relates to.
- Choose the Type: Credit or Debit, and give the Reason.
- Enter the lines (usually GL Account or the item) with amounts and VAT.
- Save and Post. 

_[Screenshot: Supplier Credit / Debit Notes form]_

The form that opens with + New 

Fields on the “New Supplier Credit / Debit Note” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Supplier required | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Invoice No  | Text |  | 
| Type  | List | 

Credit · Debit | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Additional details | 
| Reason  | Text | Why this was done. Kept for audit. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / ACCOUNT · DESCRIPTION · QTY · UOM · RATE · DISC % · VAT % · GL ACCOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- + Add line adds a line to the table. 

Good to know
- A credit note posts Dr Accounts Payable · Cr expense / inventory and Input VAT (reversed).   

### Supplier Return

Purchase › Transactions › Order to payment › Supplier Return 

Returns goods received on a GRN to the supplier. Stock goes down and the amount is taken off what you owe. How to use it
- From a posted GRN use Actions › Return to Supplier (or select + New and enter the GRN No).
- Enter the quantity returned on each line and the Reason.
- Save and Post. 

_[Screenshot: Supplier Return form]_

The form that opens with + New 

Fields on the “New Supplier Return” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Supplier required | List | The supplier, from the Suppliers master.

Pick from the master list | 
| GRN No  | Text |  | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Reason  | Text | Why this was done. Kept for audit. | 
| Additional details | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

UAE Dirham · US Dollar · Euro | 
| Rate  | Number | Exchange rate to the base currency. Amounts are converted with this rate when posted. | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / ACCOUNT · DESCRIPTION · QTY · UOM · RATE · DISC % · VAT % · GL ACCOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE QTY · VAT · TOTAL 

Buttons on this screen
- + Add line adds a line to the table.  

### Reports  

### Supplier Comprehensive Report

Purchase › Reports › Supplier Comprehensive Report 

The complete file of one supplier in one report: details and payment terms, ICV certificate and licence, the payable balance and ageing, purchases by month and project, orders, deliveries and invoices, payments and advances, retention withheld, delivery performance, enquiries and quotations, and the statement of account. The balance is the same as in the Supplier SOA. How to use it
- Select Purchase › Reports › Supplier Comprehensive Report. Search, or filter by status and ICV status.
- Choose the Report date and tick the sections you need.
- Select Open report, or tick several suppliers and select Print selected.
- Open it from Reports (the Reports hub), from the Reports group of the module, from the Report button on each line of the supplier master, or from the 📊 Comprehensive report button at the bottom of the supplier form (shown for a saved record). 

What the report contains
| Section | What it shows | 
| 1. Supplier details & terms | Code, status, name, TRN, phone, email, payment terms, retention %, IBAN and preferred supplier. | 
| 2. ICV certificate & licence | ICV status, score, certificate number, issue and expiry dates, certifying body, and the licence details. | 
| 3. Payable position | Balance per the statement, unpaid and overdue invoices, goods received not yet invoiced, advances paid, retention withheld, credit notes, returns and average days to pay. | 
| 4. Ageing of unpaid invoices | Unpaid invoices in age bands and the list of unpaid invoices with days overdue. | 
| 5. Purchases summary | Invoiced to date and this year, delivered (GRN) amount and the last invoice, then purchases by month, by project and the items delivered. | 
| 6. Orders, deliveries & invoices | Purchase orders, goods received notes and purchase invoices, and the open orders past the promised delivery date. | 
| 7. Payments & advances | Payments made, and the advance and on-account payments. | 
| 8. Retentions | Retention rate in the supplier master and the retention withheld on each invoice. | 
| 9. Performance | On-time delivery against the promised date, average lead time from order to first delivery, returns as a percentage of deliveries and orders raised. | 
| 10. Enquiries & quotations | Requests for quotation and supplier quotations with their date, project, status and amount. | 
| 11. Statement of account | The latest entries of the statement of account up to the report date. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Search  | Text | By code, name, TRN, phone or email. | 
| Status  | List | All statuses, or one supplier status. | 
| ICV status  | List | All ICV statuses, or one ICV status. | 
| Report date  | Date | The report is prepared as at this date. It starts with today. Changing the date inside an open report prepares it again. | 
| Supplier details & terms  | Tick box |  | 
| ICV certificate & licence  | Tick box |  | 
| Payable position  | Tick box |  | 
| Ageing of unpaid invoices  | Tick box |  | 
| Purchases summary  | Tick box |  | 
| Orders, deliveries & invoices  | Tick box |  | 
| Payments & advances  | Tick box |  | 
| Retentions  | Tick box |  | 
| Performance  | Tick box |  | 
| Enquiries & quotations  | Tick box |  | 
| Statement of account  | Tick box |  | 
| Tick box on each line  | Tick box | Selects the line for Print selected. Up to 30 lines can be printed at a time. | 

 

Columns shown: Code · Supplier · TRN · Phone · Payment terms · ICV · Status 

Buttons on this screen
- Print selected (0) prints the ticked lines, each on its own page.
- Open report opens the report of that line. 

Good to know
- The box Points that need attention under the headline figures lists what to look at first; when nothing is wrong it says so.
- The report date limits the cost and the transactions in the report. The payment terms, ICV certificate and the supplier status are always shown as they stand today, and the section note says so.
- An ICV certificate that is expiring or has expired, overdue payables, delivery notes received and not invoiced, late orders and poor on-time delivery appear in the box at the top. 

Who can open it
- Roles that have the Purchase, Finance or Master Data module.   

 

💰

Module guide
