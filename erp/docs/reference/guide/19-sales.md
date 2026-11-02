## Sales

Customers and the cycle from quotation to cash: sales orders, deliveries, tax invoices, credit notes, returns and receipts, plus contract billing, revenue recognition, retention and credit control. 

Quotation→Sales order→Delivery (GDN)→Sales invoice→Receipt→Customer SOA 

Trading sales follow Quotation → Sales Order → Delivery Note (GDN) → Sales Invoice → Customer Receipt, each created from the one before with partial quantities allowed. Contract work is billed through Payment Certificates (IPC) in the Projects module or Progress Certificates here, and revenue on over-time contracts is recognised by the monthly Revenue Recognition run.

Accounting. A posted GDN moves the goods out of stock at their system cost (first in, first out) and records the sale as GDN Receivables (delivered, not yet invoiced). The invoice moves it to the customer (Accounts Receivable) and adds Output VAT. The receipt debits the bank and credits the customer.

Credit control. Each customer has a credit limit and credit days. When a new order or invoice would exceed them, the system blocks it (an approver can override) or only warns, according to the customer's Credit Control setting. 

The sales cycle
| Step | Document | Statuses | Accounting |  
| 1 | Quotation (QT) | Draft → Submitted → Approved → Partially / Fully Ordered | None |  
| 2 | Sales Order (SO) | Draft → Approved → Partially / Fully Delivered → Closed | None (credit limit checked) |  
| 3 | Delivery Note (GDN) | Draft → Posted → Partially / Fully Invoiced | Dr Cost of sales · Cr Inventory; Dr GDN Receivables · Cr Revenue |  
| 4 | Sales Invoice (SI) | Draft → Posted → Partially Paid → Paid | Dr Accounts Receivable · Cr GDN Receivables (or Revenue) and Output VAT |  
| 5 | Customer Receipt (RV) | Draft → Posted | Dr Bank / Cash (or PDC Receivable) · Cr Accounts Receivable |  

 

#### Screens in this module

Masters & SettingsCustomersItems (Inventory)Service Items (Inventory)Payment Terms (Master Data)Credit Loss Rates (ECL) (Users & Settings)

Transactions

Quotation to receiptQuotationsSales OrdersDelivery Notes (GDN)Sales InvoicesDirect Sales Tax InvoiceCredit / Debit NotesSales ReturnsCustomer Receipts

Contracts & projectsProgress CertificatesVariation OrdersRevenue Recognition (Contracts)Contracts & Retention

Project billing (ipc)Payment Certificates (IPC) (Projects)Change Orders (Projects)BOQ & Contract Value (Projects)

Credit controlPDC RegisterCredit Loss Run (ECL)Bad Debt Write-offsUnbilled Revenue

ReportsCustomer AgeingCustomer SOA (Finance)AR Aging (Finance)Sales Registers & Analysis (Finance)Sales ReconciliationsCustomer Comprehensive ReportBilling & Contract Reports (Projects) 

### Masters & Settings  

### Customers

Sales › Masters & Settings › Customers 

The customer master. Customers are a sub-ledger under one Accounts Receivable control account. The Emirate decides which VAT return box (1a–1g) standard-rated sales to this customer fall into, and the TRN is required on tax invoices to registered customers. How to use it
- Select + New. The Code (CUS-0001) is automatic.
- Enter the Name, TRN, Phone, Email and Payment Terms.
- Under Additional details set the Credit Limit, Credit Days and Credit Control (block or warn).
- Enter the address, Emirate, delivery address, Salesperson, Default Project and any Opening Balance.
- Save. 

_[Screenshot: Customers]_

The Customers screen

_[Screenshot: Customers form]_

The form that opens with + New 

Fields on the “New Customer” form
| Field | Type | What to enter / options | 
| General information | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| TRN  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 
| Phone  | Text | Main contact number. | 
| Email  | Text | Main contact email. | 
| Payment Terms  | Text | Credit terms, for example "30 days". Used to calculate due dates. | 
| Additional details | 
| Credit Limit  | Number | Maximum amount the customer may owe. 0 or blank = no limit. | 
| Credit Days  | Number | Maximum days an invoice may be overdue before new sales are stopped. | 
| Credit Control  | List | Block (override by approval): orders and invoices over the limit are stopped until an approver overrides. Warn only: a message is shown.

Block (override by approval) · Warn only | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive · Incomplete | 
| Address  | Text | Address printed on documents. | 
| Country  | List | Country of the party.

United Arab Emirates · Saudi Arabia · Bahrain · Kuwait · Oman · Qatar · Other | 
| Emirate  | List | The emirate. For sales it selects the VAT return box (1a Abu Dhabi to 1g Fujairah).

Abu Dhabi · Dubai · Sharjah · Ajman · Umm Al Quwain · Ras Al Khaimah · Fujairah | 
| Delivery Address  | Text | Default address printed on delivery notes. | 
| Salesperson  | Text | Used to group the ageing report. | 
| Default Project  | List | Project filled in automatically on this customer's documents.

Pick from the master list | 
| Opening Balance  | Number | Amount owed by the customer on the go-live date. | 

 

Email address
- The Email of the customer is used when you send a sales invoice or a statement of account. If it is empty, type it in the email window and tick Save it to the master after sending. 

Comprehensive report
- Every line of the list has a Report button, and a saved customer has a 📊 Comprehensive report button at the bottom of its form: both open the Customer Comprehensive Report.  

### Transactions  

### Quotations

Sales › Transactions › Quotation to receipt › Quotations 

A priced offer to a customer. Prices come from the item price list for the quotation date and can be changed; a price below the item's minimum price needs approval. Prices exclude VAT. How to use it
- Select + New, choose the Customer, enter Valid Until and the Salesperson.
- Add lines: choose the type (Stock Item, Asset or Service), the item, quantity, price, discount and VAT category (Standard 5%, Zero-rated, Exempt). The Min price column shows the floor price.
- Save, Submit and Approve. Print it from Actions and send it.
- When the customer accepts, use Convert to Sales Order. 

_[Screenshot: Quotations form]_

The form that opens with + New 

Fields on the “New Quotation” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer required | List | The customer, from the Customers master.

Pick from the master list | 
| Valid Until  | Date | Last date the offer stands. | 
| Salesperson  | Text |  | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Additional details | 
| Payment Terms  | Text | Credit terms, for example "30 days". Used to calculate due dates. | 
| Delivery Address  | Text |  | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved · Partially Ordered · Fully Ordered · Rejected · Closed · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Reference  | Text | Your own reference, such as an external document number. | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: TYPE · ITEM / SERVICE / ASSET · DESCRIPTION · QTY · UOM · UNIT PRICE · DISC % · VAT CATEGORY · AMOUNT · MIN PRICE · PROJECT · ACTIVITY · COST CENTRE · VAT · TOTAL 

Buttons on this screen
- + Add line adds a line to the table.   

### Sales Orders

Sales › Transactions › Quotation to receipt › Sales Orders 

The customer's confirmed order. It reserves nothing in the accounts but is checked against the customer's credit limit. After saving, the last column of each line shows ordered, delivered, invoiced and open quantities. How to use it
- Convert an approved quotation, or select + New.
- Choose the Customer, enter the customer Contract No or PO number and the delivery address.
- Check the lines and save, then Approve.
- Deliver with Convert to GDN, or invoice directly with Actions › Create Sales Invoice for services. Fetching quotations (Call quotation)
- In a new sales order choose the Customer (required) and, to narrow the list, the Project. Select Call quotation under the lines. (A sale has no site request; the quotation is the document it starts from.)
- The window lists the approved quotations of that customer with a quantity not yet ordered. Tick one or more of the same project, untick the lines you do not want and change Order qty (never more than pending).
- Select Add to sales order, then save. The quotation becomes Partially or Fully Ordered at once and a fully ordered quotation is not listed again. Ordering more than what is pending is blocked. 

_[Screenshot: Sales Orders]_

The Sales Orders screen

_[Screenshot: Sales Orders form]_

The form that opens with + New 

Fields on the “New Sales Order” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer required | List | The customer, from the Customers master.

Pick from the master list | 
| Quotation No  | Text | Quotation the order came from. | 
| Contract No  | Text | Customer's PO or contract reference. | 
| Salesperson  | Text |  | 
| Additional details | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Payment Terms  | Text | Credit terms, for example "30 days". Used to calculate due dates. | 
| Delivery Address  | Text |  | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Approved · Partially Delivered · Fully Delivered · Closed · Cancelled | 
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

 

Table columns: TYPE · ITEM / SERVICE / ASSET · DESCRIPTION · QTY · UOM · UNIT PRICE · DISC % · VAT CATEGORY · AMOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE / QUANTITIES · VAT · TOTAL 

Buttons on this screen
- Convert to GDN
- Actions opens every other option for the record (print, copy, flow, void, attachments…).
- Call quotation fetches the pending lines of approved quotations (see above).
- + Add line adds a line to the table.   

### Delivery Notes (GDN)

Sales › Transactions › Quotation to receipt › Delivery Notes (GDN) 

The goods delivery note: proof that goods left the store. For a stock item the available quantity and the system cost (first in, first out) are shown; delivery cannot exceed the stock in the store. A service line needs the completion or acceptance reference. Revenue is recognised on delivery; VAT arises on the invoice. How to use it
- From an approved sales order use Convert to GDN (or + New).
- Choose the Store, and enter the vehicle number and driver.
- Enter the quantity delivered now on each line.
- Save and Post. Print it for the customer to sign; record Received By and Received Date when the signed copy returns.
- Invoice it with Convert to Sales Invoice or from the Sales Invoices list with Invoice from GDNs. Recalling the sales order (Call SO)
- In a new GDN choose the Customer (required) and, to narrow the list, the Project. Select Call SO under the lines.
- The window lists the approved or partly delivered sales orders of that customer with a pending quantity: number, date, project, ordered, delivered and pending quantity, and status. A fully delivered order is not listed, so it cannot be delivered twice.
- Tick one or more orders of the same project, untick the lines you do not deliver and change Deliver now (never more than pending). Select Add to GDN; SO No lists the orders fetched.
- Choose the store, save and Post. The sales order shows Partially or Fully Delivered when the GDN is posted. A saved GDN, even a draft, already holds its quantity; delivering more than what is pending is blocked (“Cannot deliver 9 of Cement. Pending balance on SO-000003 is only 8.”). 

_[Screenshot: Delivery Notes (GDN) form]_

The form that opens with + New 

Fields on the “New Delivery Note (GDN)” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer required | List | The customer, from the Customers master.

Pick from the master list | 
| SO No  | Text |  | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Delivery Address  | Text |  | 
| Additional details | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Vehicle No  | Text | Delivery vehicle plate. | 
| Driver  | Text | Driver name. | 
| Received By  | Text | Customer representative who signed for the goods. | 
| Received Date  | Date | Date the customer received the goods. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Partially Invoiced · Fully Invoiced · Closed · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
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

 

Table columns: TYPE · ITEM / SERVICE / ASSET · DESCRIPTION · STORE · AVAILABLE · QTY · UOM · UNIT PRICE · DISC % · VAT CATEGORY · AMOUNT · SYSTEM COST · PROJECT · ACTIVITY · COST CENTRE · COMPLETION / ACCEPTANCE REF · SOURCE / QUANTITIES 

Buttons on this screen
- Call SO recalls the pending lines of the sales orders of the chosen customer (see above).
- + Add line adds a line to the table. 

Good to know
- The printed GDN has Prepared By, Delivered By and Received By signature boxes.   

### Sales Invoices

Sales › Transactions › Quotation to receipt › Sales Invoices 

The tax invoice to the customer. Lines come from GDNs or a sales order, or are entered directly for services, progress, milestones, retention release or advances. Each line carries a Tax code that decides the VAT return box. If a price differs from the GDN price, the difference goes to Sales Price Adjustment after approval. How to use it
- Select Invoice from GDNs to pick posted delivery notes, or + New for a direct invoice.
- Choose the Customer and check the Emirate (it selects the VAT box).
- Choose the invoice Type: Standard, Progress, Milestone, Retention, Advance or Service. For progress invoices enter the Certificate No and Retention %.
- Check lines, tax codes and the Due Date.
- Save and Post. When the customer pays, use Generate Receipt.
- From a posted invoice, Actions offers Create Credit Note and Return Goods. 

_[Screenshot: Sales Invoices]_

The Sales Invoices screen

_[Screenshot: Sales Invoices form]_

The form that opens with + New 

Fields on the “New Sales Invoice” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer required | List | The customer, from the Customers master.

Pick from the master list | 
| Emirate  | List | The emirate. For sales it selects the VAT return box (1a Abu Dhabi to 1g Fujairah).

Abu Dhabi · Dubai · Sharjah · Ajman · Umm Al Quwain · Ras Al Khaimah · Fujairah | 
| GDN No  | Text | Delivery note(s) invoiced. | 
| SO No  | Text | Sales order invoiced. | 
| Additional details | 
| Certificate No  | Text | The IPC or progress certificate billed. | 
| Retention %  | Number | Retention deducted from the amount due on progress invoices. | 
| Due Date  | Date | Date the amount becomes due. Used by the ageing reports. | 
| Supply Date  | Date | Date of supply when different from the invoice date (VAT tax point). | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Type  | List | Standard (goods), Progress (from a certificate), Milestone, Retention (release of retention held), Advance (advance payment invoice) or Service.

Standard · Progress · Milestone · Retention · Advance · Service | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Posted · Partially Paid · Paid · Cancelled | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
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

 

Table columns: TYPE · ITEM / SERVICE / ASSET · DESCRIPTION · STORE · QTY · UOM · UNIT PRICE · DISC % · TAX CODE · AMOUNT · GL ACCOUNT · PROJECT · ACTIVITY · COST CENTRE · SOURCE / QUANTITIES · VAT · TOTAL 

Buttons on this screen
- Invoice from GDNs
- Generate Receipt
- Actions opens every other option for the record (print, copy, flow, void, attachments…).
- + Add line adds a line to the table. 

Good to know
- No order or delivery note? For scrap, rent received or any one-off sale use Direct Sales Tax Invoice: you choose the ledger account of every line, debit or credit, and a tax code. Those invoices are listed here too.
- E-invoicing. If an e-invoice extension (KSA ZATCA or UAE) is active, a posted invoice is also queued for the authority or the provider, and the printed invoice carries the QR code and the e-invoice status. See the E-Invoice Register.
- A tax invoice to a customer without a TRN asks for confirmation before posting.
- Retention invoices print as RETENTION RELEASE INVOICE.   

### Direct Sales Tax Invoice

Sales › Transactions › Quotation to receipt › Direct Sales Tax Invoice 

A tax invoice for a sale that has no quotation, sales order or delivery note: scrap, rent received, a one-off service, a recharge, a commission. There are no items or quantities and no three-way chain. Every line goes to a ledger account that you choose, as a debit or a credit, with a tax code. The VAT is worked out from the code, is locked against manual change, and is posted to Output VAT by the system.

The invoice posts to the customer’s account, so receipts, ageing, the customer statement, credit notes, the VAT return and the e-invoice extensions treat it exactly like any other sales invoice. It also appears in Sales Invoices, where Edit opens this form.How to use it
- Open Sales › Direct Sales Tax Invoice and select + New Direct Sales Tax Invoice (the same form opens from the Direct Sales Tax Invoice button on the Sales Invoices screen).
- Choose the Customer. The TRN, emirate and due date are filled in. A tax invoice must show the customer’s TRN; for a customer that is not registered for VAT choose the type Simplified tax invoice.
- For each line choose the ledger account (type a name or a code, or pick from the list), Credit for income or Debit for a deduction such as a discount or allowance, add a description and the amount, and choose the Tax code. Tax code for all lines sets one code on every line.
- Check VAT by tax code and Journal that will be posted below the lines. The invoice total must be above zero.
- Select Save draft, Save and print or Save and post. When the customer pays, select Generate Receipt on the invoice row.

_[Screenshot: Direct Sales Tax Invoice register]_

The register: six tiles that open their lists, filters, and the actions of each invoice

_[Screenshot: Direct Sales Tax Invoice form]_

The form: a credit line, a debit line (a deduction) and an exempt line; the VAT is locked

Fields on the “New Direct Sales Tax Invoice” form
| Field | Type | What to enter / options | 
| Invoice | 
| Invoice no automatic | Text | Created when the form opens (prefix DSI). | 
| Invoice date required | Date | Decides the accounting period and the VAT return period. Defaults to today. | 
| Customer required | List | The customer, from the Customers master. Its TRN, emirate and due date are filled in.

Pick from the master list | 
| Customer TRN  | Text | The customer’s 15-digit tax registration number, taken from the master. It is needed to post a tax invoice (not a simplified one). If the master has none, the number you enter here is saved to it. | 
| Invoice type  | List | Tax invoice (default) or Simplified tax invoice for a customer that is not registered for VAT, which needs no customer TRN.

Tax invoice · Simplified tax invoice | 
| Emirate  | List | The place of supply. For standard-rated lines it selects the VAT return box (1a Abu Dhabi to 1g Fujairah) and the default tax code.

Abu Dhabi · Dubai · Sharjah · Ajman · Umm Al Quwain · Ras Al Khaimah · Fujairah | 
| Date of supply  | Date | Only when it differs from the invoice date (the VAT tax point). | 
| Due date  | Date | Worked out from the customer’s payment terms. Change it if you agreed another date. | 
| Currency  | List | Leave blank for the base currency (AED). For a foreign invoice choose the currency; the exchange rate is taken from Exchange Rates and can be changed. | 
| Exchange rate  | Number | Shown for a foreign currency. The invoice is posted in AED at this rate. | 
| Amounts entered  | List | Excluding VAT (default): the VAT is added to each amount. Including VAT: the amounts you type are gross and the VAT is taken out of them.

Excluding VAT · Including VAT | 
| Reference  | Text | Customer PO, job or contract number. It prints on the invoice. | 
| Remarks  | Long text | Free notes that print on the invoice. | 
| Project, Department, Cost centre  | List | Optional, for the whole invoice. Tick Project / cost centre on each line to set them line by line. | 

Table columns: # · LEDGER ACCOUNT * · DEBIT / CREDIT * · DESCRIPTION · AMOUNT EXCL. VAT * · TAX CODE * · VAT 🔒 AUTO · LINE TOTAL · Project · Cost centre

What the invoice in the picture posts
| Account | Debit | Credit | Comes from | 
| Accounts Receivable | 5,190.00 |  | the invoice total, to the customer | 
| Other Income |  | 5,000.00 | line 1, credit | 
| Sales Returns | 200.00 |  | line 2, debit: a deduction on the same invoice | 
| Interest Income |  | 150.00 | line 3, credit, exempt | 
| VAT Output |  | 240.00 | 5% of 4,800.00 (5,000.00 less 200.00) | 

Buttons on this screen
- + New Direct Sales Tax Invoice opens the entry form.
- Save draft keeps the invoice without posting it. Nothing reaches the ledger.
- Save and print saves it and opens the print preview: TAX INVOICE or SIMPLIFIED TAX INVOICE, the VAT summary and, where an e-invoice extension is active, its QR code and status.
- Save and post saves, checks and posts the invoice.
- Post posts a draft from the register.
- Edit changes a draft. A posted invoice is reversed instead.
- Journal shows the posted entry.
- Generate Receipt creates a receipt for the outstanding amount.
- Reverse cancels a posted invoice with a reversing entry and a reason.
- Copy makes a new draft with the same lines.
- Delete removes a draft.

Good to know
- The six tiles (Drafts, Posted this month, Output VAT this month, Outstanding, Overdue, Need attention) open the invoices behind each figure. Need attention lists drafts that are ready to post.
- Accounts that cannot be used on a line: the customer and supplier control accounts, the fixed asset control account, the VAT accounts, and any account set to no manual posting. The VAT is never posted by hand: choose a tax code.
- Tax codes offered: 5% standard (by emirate, boxes 1a–1g), 0% zero-rated (box 4), exempt (box 5) and Out of scope (no box). See Tax Codes.
- Before posting the company TRN must be set in the Company master and, unless the invoice is simplified, the customer TRN must be entered. The screen tells you what is missing.
- A Debit line reduces the invoice (discount, allowance). The total must stay above zero. To reduce an invoice that was already issued, use a Credit Note. An e-invoice sends a debit line as a negative line; if your provider does not accept negative lines, use a credit note instead.
- A posted invoice cannot be edited. Reverse it and enter a new one. 

Allocation pop-up
- When the account has an Analysis Type (see Analysis Templates), enter the amount of the line and press Enter: a window opens to allocate the amount (To apply, Applied, Balance). Under the amount the line shows ⊕ Allocate (or Allocated X of Y) in orange until the amount is fully allocated, then ✓ Allocated in green; select it to open the window again. The amount to allocate is the line total without VAT.   

### Credit / Debit Notes

Sales › Transactions › Quotation to receipt › Credit / Debit Notes 

A tax credit note reduces a posted invoice (price adjustment, quantity adjustment, discount, goods returned without stock effect). A debit note increases it. It always refers to a posted invoice with an amount left to credit. How to use it
- Select + New and choose the posted invoice, or use Actions › Create Credit Note on the invoice.
- Choose Type (Credit or Debit) and the Reason.
- Enter the amounts per line (Inventory, Service or GL Account) and save, then Post. 

_[Screenshot: Credit / Debit Notes form]_

The form that opens with + New 

Fields on the “Create Credit Note” form
| Field | Type | What to enter / options | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Tax invoice  | List | 

Pick from the master list | 
| Reason  | List | Why this was done. Kept for audit.

Price adjustment · Quantity adjustment · Discount · Goods returned (no stock effect) · Other | 

 

Buttons on this screen
- New customer debit note…
- Create draft credit note 

Good to know
- A credit note reverses revenue and Output VAT and reduces the customer balance. For goods that come back into stock, use a Sales Return instead.   

### Sales Returns

Sales › Transactions › Quotation to receipt › Sales Returns 

Goods returned by the customer into a store. Stock is restored at its original cost and the sale and VAT are reversed. It must refer to a posted GDN or direct invoice with goods left to return. How to use it
- Select + New and choose the GDN or invoice, or use Actions › Return Goods on it.
- Choose the Store receiving the goods, enter the quantity returned and the reason.
- Save and Post. 

_[Screenshot: Sales Returns form]_

The form that opens with + New 

Fields on the “Create Sales Return” form
| Field | Type | What to enter / options | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| GDN / direct invoice  | List | 

Pick from the master list | 
| Invoice credited for quantities already invoiced  | List | 

Pick from the master list | 
| Reason  | Text | Why this was done. Kept for audit. | 

 

Buttons on this screen
- Create draft return   

### Customer Receipts

Sales › Transactions › Quotation to receipt › Customer Receipts 

Records money received from a customer and settles their invoices. It can also record an advance, an amount on account, apply an earlier advance to invoices, or record a recovery of a debt written off. How to use it
- Select + New (or Generate Receipt on an invoice).
- Choose the Customer; the outstanding bills are listed.
- Choose the Receipt type and the Method (Bank Transfer, Cheque or Cash) and the bank account.
- Tick the bills being paid (Select all / Deselect all) and adjust the amount on each if part-paid.
- For a cheque enter the cheque date and the customer's bank. A cheque dated in the future becomes a post-dated cheque (see PDC Register).
- Select Save draft or Save and post. 

_[Screenshot: Customer Receipts form]_

The form that opens with + New 

Fields on the “New Customer Receipt” form
| Field | Type | What to enter / options | 
| Voucher No automatic | Text |  | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer required | List | The customer, from the Customers master.

Pick from the master list | 
| Receipt type  | List | Bill Settlement (pays invoices), Advance (before invoicing), On Account (unallocated), Apply Advance (uses an earlier advance against invoices), Bad Debt Recovery.

Bill Settlement · Advance · On Account · Apply Advance · Bad Debt Recovery | 
| Method  | List | How the money moves: Cash, Bank Transfer or Cheque.

Bank Transfer · Cheque · Cash | 
| Receive in (bank)  | List | The company bank account receiving the money.

Pick from the master list | 
| Transfer reference  | Text | Bank transfer reference for reconciliation. | 
| Cheque date  | Date |  | 
| Cheque drawn on (customer’s bank)  | Text |  | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Exchange rate automatic | Number | Filled from Exchange Rates for foreign currency receipts. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Amount automatic | Number | The amount before VAT. | 
| VAT % included in the advance  | Number | For advances: VAT is due when an advance is received, so enter 5 when the advance includes VAT. | 
| Advance to apply  | List | The earlier advance being used (receipt type Apply Advance).

Pick from the master list | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Buttons on this screen
- Select all
- Deselect all
- Save draft
- Save and post   

### Progress Certificates

Sales › Transactions › Contracts & projects › Progress Certificates 

A simpler progress certificate for projects billed by activity value (rather than the BOQ quantities used by IPCs). One line per activity with the value of work done this period, excluding VAT. Retention is deducted when the progress invoice is raised. How to use it
- Select + New, choose the Customer, Project and period.
- Add one line per activity with a description and the value certified.
- Enter the Certificate Ref and Retention %.
- Save. When the client signs, enter the Client Approval Date and Approve.
- Use Create Progress Invoice from the approved certificate. 

_[Screenshot: Progress Certificates form]_

The form that opens with + New 

Fields on the “New Progress Certificate” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Period From  | Date |  | 
| Period To  | Date |  | 
| Additional details | 
| Certificate Ref  | Text |  | 
| Retention %  | Number |  | 
| Client Approval Date  | Date |  | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Approved · Partially Invoiced · Invoiced · Cancelled | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: Type · ACTIVITY · DESCRIPTION · QTY · UOM · UNIT PRICE · VAT CATEGORY · AMOUNT · VAT · TOTAL · SOURCE / QUANTITIES 

Buttons on this screen
- + Add line adds a line to the table. 

Good to know
- Status flow: Draft → Approved → Partially Invoiced → Invoiced.
- For BOQ-based projects use Payment Certificates (IPC) instead. A project billed on certified quantities cannot be billed with a manual progress certificate or progress invoice: the system stops it, so the work is billed once.
- Revenue. By default approving a certificate posts no entry: the monthly Revenue Recognition run recognises the revenue (cost to cost) and the progress invoice credits Unbilled Receivables. If the project's Measurement Method in the Project Master is Approved certificates, approving the certificate posts Dr Unbilled Receivables, Cr Contract Revenue for the work certified; the progress invoice then clears the Unbilled Receivables and the run only moves the cost. To cancel a certificate that posted revenue, reverse its invoice first, then reverse the certificate.   

### Variation Orders

Sales › Transactions › Contracts & projects › Variation Orders 

A simple variation order that changes a project's contract value and cost budget by an amount (for projects without a BOQ; once a project has BOQ lines the system no longer accepts a variation order). For BOQ projects use Change Orders. How to use it
- Select + New, choose the Project, enter the VO Ref and description.
- Enter the Contract Value Change and the Cost Budget Change, the cost type and activity.
- Save and approve; the project contract value and budget are updated. 

_[Screenshot: Variation Orders form]_

The form that opens with + New 

Fields on the “New Variation Order” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| VO Ref  | Text |  | 
| Description  | Text | A short description. | 
| Contract Value Change  | Number |  | 
| Additional details | 
| Cost Budget Change  | Number |  | 
| Cost Type  | List | 

Labour · Materials · Equipment · Subcontract · Overhead · Other · Revenue | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Reason  | Text | Why this was done. Kept for audit. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Approved · Cancelled | 

   

### Revenue Recognition (Contracts)

Sales › Transactions › Contracts & projects › Revenue Recognition (Contracts) 

The monthly IFRS 15 run for projects whose Revenue Type is Over time and measured cost to cost. Percent complete = cost incurred (less materials not yet installed) ÷ total estimated cost. Revenue to date = percent complete × contract value; the run books the difference from what was recognised before (Dr Unbilled Receivables, Cr Contract Revenue) and moves the cost from WIP to Cost of Revenue. For a loss-making contract the whole expected loss is provided (IAS 37). How to use it
- Enter the Run date (the month-end).
- Review each project: cost to date, materials not installed, % complete, revenue this run, contract asset or liability, expected profit or loss and provision.
- Select Post recognition run. 

_[Screenshot: Revenue Recognition (Contracts)]_

The Revenue Recognition (Contracts) screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Run date  | Date |  | 

 

Columns shown: Project · Contract value · Cost to date · Materials not installed · Total estimated cost · % complete · Revenue to date · Recognised before · Revenue this run · Cost to Cost of Revenue · Billed to date · Contract asset / (liability) · Expected profit / (loss) · Provision this run 

Buttons on this screen
- Post recognition run 

Good to know
- Projects using certified quantities recognise revenue through approved IPCs instead.   

### Contracts & Retention

Sales › Transactions › Contracts & projects › Contracts & Retention 

A register of contract works: original value, variations, contract value, estimated cost, expected profit or loss, % complete, revenue recognised, certified and billed amounts, retention held, released and outstanding, contract asset or liability and loss provision. Select Open on a project for its history. 

_[Screenshot: Contracts & Retention]_

The Contracts & Retention screen 

Columns shown: Project · Original value · Variations · Contract value · Total estimated cost · Expected profit / (loss) · % complete · Revenue recognised · Certified · Billed (excl. VAT) · Retention held · Retention released · Retention balance · Contract asset · Contract liability · Loss provision 

Buttons on this screen
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.
- Open   

### PDC Register

Sales › Transactions › Credit control › PDC Register 

Post-dated cheques received from customers. A receipt by a cheque dated after the receipt date is held here, booked to Post-dated Cheques Receivable, and settles the invoices straight away. On or after the cheque date, deposit it and mark it Cleared (Dr Bank, Cr PDC Receivable) or Returned (the receipt is reversed and the invoices become outstanding again). How to use it
- Filter by status: Held, Deposited, Cleared or Returned.
- On the cheque date mark the cheque Deposited, then Cleared when the bank credits it, or Returned if it bounces. 

_[Screenshot: PDC Register]_

The PDC Register screen 

Buttons on this screen
- Export Excel   

### Credit Loss Run (ECL)

Sales › Transactions › Credit control › Credit Loss Run (ECL) 

The monthly IFRS 9 expected credit loss run. Outstanding invoices are grouped by days past due; each bucket is multiplied by its rate (from Credit Loss Rates) to give the required allowance. The run posts the difference against the current allowance: Dr Credit Loss Expense / Cr Allowance for Credit Losses, or the reverse. How to use it
- Enter the Run date.
- Review the buckets and the breakdown By customer.
- Select Post the run (one run per month). Use Change rates to adjust the rates. 

_[Screenshot: Credit Loss Run (ECL)]_

The Credit Loss Run (ECL) screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Run date  | Date |  | 

 

Columns shown: Ageing bucket · Outstanding invoices · Rate % · Expected credit loss 

Columns shown: Customer · Current · 1-30 · 31-60 · 61-90 · Over 90 · Total · Expected credit loss 

Buttons on this screen
- Change rates
- Post the run   

### Bad Debt Write-offs

Sales › Transactions › Credit control › Bad Debt Write-offs 

Writes off an invoice that will not be collected. The amount is taken from the Allowance for Credit Losses (and expensed if the allowance is not enough). A later payment is recorded as a Bad Debt Recovery receipt. How to use it
- Select Write off an invoice and choose the customer and invoice (or + New).
- Enter the Amount and the Reason.
- Submit; an approver posts it. 

_[Screenshot: Bad Debt Write-offs form]_

The form that opens with + New 

Fields on the “New Bad Debt Write-off” form
| Field | Type | What to enter / options | 
| Information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Invoice No  | Text |  | 
| Amount  | Number | The amount before VAT. | 
| Reason  | Text | Why this was done. Kept for audit. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Posted · Rejected · Cancelled | 

 

Buttons on this screen
- Write off an invoice   

### Unbilled Revenue

Sales › Transactions › Credit control › Unbilled Revenue 

A simple schedule of work done but not yet billed per project and customer, for projects not run through IPCs or the revenue recognition run. How to use it
- Select + New, choose the project and customer, and enter Work Done and Billed to date. 

_[Screenshot: Unbilled Revenue form]_

The form that opens with + New 

Fields on the “New Unbilled Revenue” form
| Field | Type | What to enter / options | 
| Information | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Work Done  | Number |  | 
| Billed  | Number |  | 

  

### Reports  

### Customer Ageing

Sales › Reports › Customer Ageing 

Outstanding tax invoices by days past the due date (Current, 1–30, 31–60, 61–90, over 90), in AED. Select a row to list its invoices. How to use it
- Enter As of, choose Group by (Customer, Salesperson or Project) and optionally one customer or project.
- Select Search / Apply. Print, save as PDF or export to Excel. 

_[Screenshot: Customer Ageing]_

The Customer Ageing screen

_[Screenshot: Customer Ageing form]_

The form that opens with Search / Apply 

Fields after selecting Search / Apply
| Field | Type | What to enter / options | 
| As of  | Date |  | 
| Group by  | List | 

Customer · Salesperson · Project | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 
| Group by  | List | 

Customer · Salesperson · Project | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 

 

Columns shown: Customer · Current · 1-30 · 31-60 · 61-90 · Over 90 · Total 

Columns shown: Invoice · Customer · Salesperson · Project · Date · Due date · Days past due · Bucket · Outstanding 

Buttons on this screen
- Reset
- Print PDF
- Export Excel   

### Sales Reconciliations

Sales › Reports › Sales Reconciliations 

Four checks that each ledger agrees with its supporting schedule: GDN Receivables vs GDNs not invoiced; Accounts Receivable vs the customer sub-ledger; Inventory vs stock valuation; Retention Receivable vs the project retention schedule. A difference means a posting is missing; open the detail to find it. How to use it
- Enter the As of date and review each line. Agrees means no difference. 

_[Screenshot: Sales Reconciliations]_

The Sales Reconciliations screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Columns shown: Reconciliation · Ledger balance · Schedule · Difference · Result 

Buttons on this screen
- Print PDF
- Export Excel   

### Customer Comprehensive Report

Sales › Reports › Customer Comprehensive Report 

The complete file of one customer in one report: details and credit terms, the receivable balance against the credit limit, ageing, sales by type and month, invoices, receipts, advances and post-dated cheques, credit notes and bad debts, projects with retention and unbilled work, quotations and orders, and the statement of account. The balance is the same as in the Customer SOA. How to use it
- Select Sales › Reports › Customer Comprehensive Report. Search, or filter by status and salesperson.
- Choose the Report date and tick the sections you need.
- Select Open report, or tick several customers and select Print selected.
- Open it from Reports (the Reports hub), from the Reports group of the module, from the Report button on each line of the customer master, or from the 📊 Comprehensive report button at the bottom of the customer form (shown for a saved record). 

What the report contains
| Section | What it shows | 
| 1. Customer details & credit terms | Code, name, TRN, contact details, address, salesperson, payment terms, credit days, credit limit and credit control. | 
| 2. Receivable position & credit control | Balance per the statement, credit used and available, overdue, over 90 days, advances not applied, post-dated cheques held and bad debts written off. | 
| 3. Ageing of open invoices | Open invoices in age bands (current, 1-30, 31-60, 61-90, 91-120, over 120 days) and the list of open invoices with days overdue. | 
| 4. Sales summary | Sales by invoice type, by month and by project, with VAT. | 
| 5. Invoices | The latest posted invoices with amount, outstanding balance and status. | 
| 6. Receipts, advances & post-dated cheques | Receipts, the advances not yet applied (received, applied and balance) and the post-dated cheques with their cheque date and status. | 
| 7. Credit notes, returns & bad debts | Credit and debit notes, sales returns and bad debts written off. | 
| 8. Projects & retention | Each project of the customer as client with status, contract value, invoiced, retention held, advance recovery % and dates. | 
| 9. Quotations, orders & deliveries | The latest quotations, sales orders and delivery notes with their status and amount. | 
| 10. Statement of account | The latest entries of the statement of account up to the report date. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Search  | Text | By code, name, TRN, salesperson or phone. | 
| Status  | List | All statuses, or one customer status. | 
| Salesperson  | List | All salespeople, or one salesperson. | 
| Report date  | Date | The report is prepared as at this date. It starts with today. Changing the date inside an open report prepares it again. | 
| Customer details & credit terms  | Tick box |  | 
| Receivable position & credit control  | Tick box |  | 
| Ageing of open invoices  | Tick box |  | 
| Sales summary  | Tick box |  | 
| Invoices  | Tick box |  | 
| Receipts, advances & post-dated cheques  | Tick box |  | 
| Credit notes, returns & bad debts  | Tick box |  | 
| Projects & retention  | Tick box |  | 
| Quotations, orders & deliveries  | Tick box |  | 
| Statement of account  | Tick box |  | 
| Tick box on each line  | Tick box | Selects the line for Print selected. Up to 30 lines can be printed at a time. | 

 

Columns shown: Code · Customer · TRN · Phone · Credit limit · Salesperson · Status 

Buttons on this screen
- Print selected (0) prints the ticked lines, each on its own page.
- Open report opens the report of that line. 

Good to know
- The box Points that need attention under the headline figures lists what to look at first; when nothing is wrong it says so.
- The report date limits the cost and the transactions in the report. The credit limit, credit terms and the customer status are always shown as they stand today, and the section note says so.
- A credit limit that is exceeded, invoices past due, post-dated cheques held and advances not yet applied appear in the box at the top. 

Who can open it
- Roles that have the Sales, Finance or Master Data module.   

 

📦

Module guide
