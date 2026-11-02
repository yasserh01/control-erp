## Master Data

The company-wide records every other module reads: companies, branches, departments, designations, cost centres, the chart of accounts, tax codes, currencies, units and payment terms. 

Master Data is set up once and then changed only occasionally. Everything you choose from a drop-down list in a transaction comes from here or from a module's own masters. Set these up before you start entering transactions, and keep names consistent: the name you give a department or cost centre is exactly what appears in every report.

Some masters belong to one module and are explained there: Suppliers in Purchase, Customers in Sales, Items, Categories and Stores in Inventory, Employees in HR & Payroll, Bank Accounts, Cash Boxes and Petty Cash Holders in Finance. 

#### Screens in this module

Screens

OrganisationCompaniesBranchesDepartmentsDesignationsCost Centres

Accounts, tax & unitsChart of AccountsTax CodesCurrenciesUnits  

### Companies

Master Data › Screens › Organisation › Companies 

The legal companies that use this ERP. In single-company mode there is one record; in multi-company mode (see Company Mode) each company of the group gets its own record, and the top bar lets users switch between them. How to use it
- Select + New.
- Enter the Name, TRN and MOL Establishment ID of the company.
- Open Additional details and choose the Company Type, Functional Currency, Parent Company and Ownership % if the company belongs to a group.
- Set Default Company to Yes on the company most users work in.
- Enter a Document Prefix if each company should number its documents separately, and pick a Colour to tell companies apart in the top bar.
- Save. 

_[Screenshot: Companies]_

The Companies screen

_[Screenshot: Companies form]_

The form that opens with + New 

Fields on the “New Company” form
| Field | Type | What to enter / options | 
| General information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| TRN  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 
| MOL Establishment ID  | Text | The establishment number at the Ministry of Human Resources. Printed on the WPS salary file. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| Additional details | 
| Company Type  | List | Operating, Holding, Service company, Project company or Dormant. Used in group reports.

Operating · Holding · Service company · Project company · Dormant | 
| Functional Currency  | Text | The currency the company keeps its books in (normally AED). | 
| Rate to Group Currency  | Number | Rate used to translate this company into the group currency in consolidation. | 
| Ownership %  | Number | Share owned by the parent. Used for the consolidation. | 
| Parent Company  | List | The company that owns this one.

Pick from the master list | 
| Default Company  | List | Yes on one company only: the company selected when a user signs in.

No · Yes | 
| Include in Consolidation  | List | No keeps the company out of the consolidated statements.

Yes · No | 
| Document Prefix  | Text | Added in front of document numbers for this company, so two companies never share a number. | 
| Colour  | List | Colour of the company strip in the top bar, so users can see at a glance which company they are in.

Teal · Blue · Amber · Rose · Violet · Green · Slate | 

 

Good to know
- Company letterhead details (address, phone, Arabic name) for printing come from Company Settings.   

### Branches

Master Data › Screens › Organisation › Branches 

Physical branches or offices of the company. Branches are used on stores, assets and asset transfers, and can carry their own TRN and address. How to use it
- Select + New.
- Enter the branch Name, Address and, if registered separately for VAT, its TRN.
- Save. 

_[Screenshot: Branches]_

The Branches screen

_[Screenshot: Branches form]_

The form that opens with + New 

Fields on the “New Branch” form
| Field | Type | What to enter / options | 
| Information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Address  | Text | Address printed on documents. | 
| TRN  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 

   

### Departments

Master Data › Screens › Organisation › Departments 

Departments of the company (Projects, Accounts, Procurement, HR…). Employees, designations, budgets and most transactions carry a department, so reports can be split by department. How to use it
- Select + New.
- Enter Name and the Manager.
- Link a default Cost Centre if the department's costs always go to one cost centre.
- Save. 

_[Screenshot: Departments]_

The Departments screen

_[Screenshot: Departments form]_

The form that opens with + New 

Fields on the “New Department” form
| Field | Type | What to enter / options | 
| Information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Manager  | Text | Name of the head of department (printed on some HR forms). | 
| Cost Centre  | List | Default cost centre for this department.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Good to know
- Set a department to Inactive instead of deleting it once it has been used.   

### Designations

Master Data › Screens › Organisation › Designations 

Job titles (Site Engineer, Accountant, Steel Fixer…). The employee master uses them, and the designation decides by default whether overtime applies. How to use it
- Select + New.
- Enter the Name, the Department it belongs to and the Grade.
- Set OT Eligible to Yes for jobs that are paid overtime.
- Save. 

_[Screenshot: Designations]_

The Designations screen

_[Screenshot: Designations form]_

The form that opens with + New 

Fields on the “New Designation” form
| Field | Type | What to enter / options | 
| Information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Department  | List | The department responsible.

Pick from the master list | 
| Grade  | Text | Salary grade or band, used in HR reports. | 
| OT Eligible  | List | Default overtime eligibility for employees with this designation. Can be changed on each employee.

Yes · No | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Cost Centres

Master Data › Screens › Organisation › Cost Centres 

Cost centres group income and expenses for management reporting, independently of departments and projects (for example Head Office, Site Operations, Workshop, Vehicle Pool). Every document line can carry a cost centre. How to use it
- Select + New.
- Enter Name and Manager.
- Save. 

_[Screenshot: Cost Centres]_

The Cost Centres screen

_[Screenshot: Cost Centres form]_

The form that opens with + New 

Fields on the “New Cost Centre” form
| Field | Type | What to enter / options | 
| Information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Manager  | Text | The person responsible. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Chart of Accounts

Master Data › Screens › Accounts, tax & units › Chart of Accounts 

The list of all accounts the company posts to, arranged as a tree: five fixed elements (1 Assets, 2 Liabilities, 3 Equity, 4 Income, 5 Expenses), groups you create under them (for example Current Assets › Cash on Hand), and ledgers under the groups. Only ledgers can be posted to. Codes are created automatically from the position in the tree and never change. 

The screen is split into the Balance Sheet accounts (elements 1–3) and the Profit and Loss Statement accounts (elements 4–5). Each row shows the account, its control or analysis setting, and its current balance. 

Starting outSelect Load starter chart to load a ready chart for a UAE engineering and contracting company: bank and cash, receivables, retention, VAT input and output, inventory, CIP and fixed assets, payables, GRN payables, accruals, salaries payable, leave, air-ticket and EOSB provisions, equity, contract revenue, cost of revenue, and the expense groups. Accounts that already exist are left untouched. Then rename, add or deactivate accounts to suit the company. How to use it
- To add a group, select New Group (or + Group on the element row). Choose the Parent (an element or another group) and enter the name. For groups under Expenses that hold direct project costs, set Direct cost group to Yes so their ledgers count as cost of sales.
- To add a ledger, select New Ledger, choose its group, enter the name and, where needed, its control type (Bank, Cash, Accounts Payable, Accounts Receivable…) and analysis type.
- Use Tree view / List view, Expand all and Collapse all to move around the chart.
- Select Opening balances to enter the balances brought forward on the go-live date.
- Use Print, PDF or Excel to share the chart. 

_[Screenshot: Chart of Accounts]_

The Chart of Accounts screen

_[Screenshot: Chart of Accounts form]_

The form that opens with New Group 

Fields on the “New group” form
| Field | Type | What to enter / options | 
| Code (automatic) automatic | Text | Created from the position in the tree, for example 1-01-003. You cannot type it. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic name  | Text | Printed on documents next to the English name. | 
| Parent (element or group)  | List | Where the new group sits in the tree.

1 Assets (element) · 11 Current Assets · 1101 Cash and Bank · 1102 Receivables · 1103 Inventory and CIP · 1104 Tax · 1105 Prepayments · 12 Non-Current Assets · 1201 Fixed Assets at Cost · 1202 Accumulated Depreciation · 1203 Right-of-Use Assets · 1204 Long-Term Prepayments · 1205 Asset Retirement Costs · 2 Liabilities (element) … +22 more | 
| Direct cost group (cost of sales)  | List | Yes makes every ledger in the group a cost of sales account (gross profit is calculated before them).

No · Yes | 
| Active  | List | No hides the account from drop-down lists but keeps its history.

Yes · No | 

 

Buttons on this screen
- Tree view shows the accounts as a tree of elements, groups and ledgers.
- List view shows all accounts as a flat list.
- Expand all opens every branch of the tree.
- Collapse all closes every branch.
- Load starter chart loads a ready UAE engineering and contracting chart of accounts that you can then edit.
- Opening balances enters the opening debit and credit balances of ledgers.
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.
- New Group
- New Ledger
- + Group adds a group under this element or group.
- + Ledger
- Save group 

_[Screenshot: New Ledger form]_

New Ledger form 

Fields: New Ledger form
| Field | Type | What to enter / options | 
| Code (automatic) automatic | Text | Created from the position in the tree, for example 1-01-003. You cannot type it. | 
| English name required | Text |  | 
| Arabic name  | Text | Printed on documents next to the English name. | 
| Parent group required | List | 

 11 Current Assets · 1101 Cash and Bank · 1102 Receivables · 1103 Inventory and CIP · 1104 Tax · 1105 Prepayments · 12 Non-Current Assets · 1201 Fixed Assets at Cost · 1202 Accumulated Depreciation · 1203 Right-of-Use Assets · 1204 Long-Term Prepayments · 1205 Asset Retirement Costs · 21 Current Liabilities · 2101 Payables … +17 more | 
| Opening balance  | Number |  | 
| Active  | List | No hides the account from drop-down lists but keeps its history.

Yes · No | 
| Control type  | List | 

None · Accounts Payable · Accounts Receivable · Fixed Asset · Bank · Cash · VAT · Inventory · Payroll | 
| Analysis type  | List | 

None · Employee · Vehicle · Project · Asset · Supplier · Customer · Custom | 
| Pop-up template  | List | 

Pick from the master list | 
| Cash flow tag  | List | 

None · Operating · Investing · Financing | 
| Manual posting allowed  | List | 

Yes · No | 

 

_[Screenshot: Opening balances]_

Opening balances 

Fields: Opening balances
| Field | Type | What to enter / options | 
| Opening date  | Date |  | 

 

Good to know
- Suppliers and customers are not separate ledgers. They are a sub-ledger under one Accounts Payable and one Accounts Receivable control ledger. Their balances appear under those control accounts.
- A ledger with an Analysis Type (Employee, Vehicle, Project, Asset, Supplier, Customer or Custom) asks for an extra breakdown every time it is posted. The templates are set in Analysis Templates.
- Posting keys such as Output VAT, GRN Payable or EOSB Provision are linked to ledgers in Account Mapping.
- Deactivate rather than delete an account that has postings.   

### Tax Codes

Master Data › Screens › Accounts, tax & units › Tax Codes 

VAT codes and the VAT return box each one reports in. The system comes with the standard output codes for the seven emirates (boxes 1a–1g), zero-rated (box 4), exempt (box 5), tourist refunds (box 2) and reverse charge (box 3). An Out of scope code, for supplies and costs outside the scope of VAT, has 0% and appears in no box. Add input codes for purchases (box 9) as needed. How to use it
- Select + New.
- Enter a short Code and a clear Name.
- Enter the Rate %, choose the Type (Input, Output, Zero-rated, Exempt, Reverse charge or Out of scope) and whether it Applies To purchases or sales.
- Choose the Reporting Category: the VAT 201 box the amounts go to.
- Save. 

_[Screenshot: Tax Codes]_

The Tax Codes screen

_[Screenshot: Tax Codes form]_

The form that opens with + New 

Fields on the “New Tax Code” form
| Field | Type | What to enter / options | 
| Information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Rate %  | Number | 5 for standard-rated supplies, 0 for zero-rated and exempt. | 
| Type  | List | Input (purchases), Output (sales), Zero-rated, Exempt, or Reverse charge (imports of services and goods under reverse charge).

Input · Output · Zero-rated · Exempt · Reverse charge · Out of scope | 
| Applies To  | List | Purchases or Sales.

Purchases · Sales | 
| Reporting Category  | List | The box of the VAT 201 return. Sales by emirate go to boxes 1a–1g, so the emirate on the customer and invoice matters.

Box 1a - Standard rated supplies in Abu Dhabi · Box 1b - Standard rated supplies in Dubai · Box 1c - Standard rated supplies in Sharjah · Box 1d - Standard rated supplies in Ajman · Box 1e - Standard rated supplies in Umm Al Quwain · Box 1f - Standard rated supplies in Ras Al Khaimah · Box 1g - Standard rated supplies in Fujairah · Box 2 - Tax refunds to tourists · Box 3 - Supplies subject to reverse charge · Box 4 - Zero rated supplies · Box 5 - Exempt supplies · Box 9 - Standard rated expenses | 

 

Good to know
- The VAT Return reads these codes to fill the return.
- The codes VAT/I - Standard 5%, VAT/I - Zero Rated, VAT/I - Exempt, VAT/I - Out of Scope and VAT/O - Out of Scope are added automatically when they are missing, for use on the Direct Sales Tax Invoice, the Direct Purchase Tax Invoice and journal vouchers.   

### Currencies

Master Data › Screens › Accounts, tax & units › Currencies 

Currencies used on foreign documents. One currency is the Base (AED). Exchange rates are kept in Exchange Rates. How to use it
- Select + New.
- Enter the ISO Code (USD, EUR…) and Name.
- Set Base to Yes only for the company's own currency.
- Save. 

_[Screenshot: Currencies]_

The Currencies screen

_[Screenshot: Currencies form]_

The form that opens with + New 

Fields on the “New Currency” form
| Field | Type | What to enter / options | 
| Code  | Text | Three-letter ISO code, for example USD. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Base  | List | Yes for the reporting currency (AED). Only one currency should be the base.

No · Yes | 

   

### Units

Master Data › Screens › Accounts, tax & units › Units 

Units of measure for items and BOQ lines: Nos, Ton, Bag, m³, m², Lm, Kg, Litre, Month and so on. How to use it
- Select + New.
- Enter a short Code (TON) and the Name (Ton).
- Save. 

_[Screenshot: Units]_

The Units screen

_[Screenshot: Units form]_

The form that opens with + New 

Fields on the “New Unit” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 

   

### Payment Terms

Master Data › Payment Terms 

Credit terms used on suppliers, customers, orders and invoices (for example 30 days, 60 days, Cash). The number of days sets the due date of invoices. How to use it
- Select + New.
- Enter a Code, a Name such as "30 days" and the number of Days.
- Save. 

_[Screenshot: Payment Terms]_

The Payment Terms screen

_[Screenshot: Payment Terms form]_

The form that opens with + New 

Fields on the “New Payment Term” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Days  | Number | Days after the invoice date until payment is due. 0 for cash or immediate payment. | 

   

 

🏗️

Module guide
