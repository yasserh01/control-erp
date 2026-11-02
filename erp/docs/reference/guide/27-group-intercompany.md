## Group & Intercompany

For groups of companies run in one ERP: staff cost, sponsorship and asset-usage recharges between companies, intercompany invoices, settlement and netting, transfer pricing, and consolidated statements. 

This module appears only when Company Mode is set to Multiple companies and at least two companies are active. A company selector then appears in the top bar: every entry, report and print follows the company chosen, and All companies (Group view) opens the group screens.

Monthly routine. In Month-End Charges the system prepares the charges for payroll one company paid for another, sponsorship costs and asset usage; you review and post them as Intercompany Invoices (recorded in both companies at once), reconcile, and settle the net balance in Settlement and Netting. Consolidated statements eliminate all intercompany balances automatically. 

#### Screens in this module

Masters & Settings

Group setupCompanies (Master Data)Intercompany Settings

Assets used by other companiesAsset Rate Card

Transactions

Month-endMonth-End ChargesIntercompany Invoices

ChargesSponsorship ChargesAsset Usage Log

Settlement and consolidationSettlement and NettingConsolidation Adjustments

Reports

Group overviewGroup DashboardCompany Comparison

IntercompanyIntercompany PositionTransfer Pricing Register

Consolidated statementsConsolidated Trial BalanceConsolidated Income StatementConsolidated Balance SheetElimination Schedule 

### Masters & Settings  

### Intercompany Settings

Group & Intercompany › Masters & Settings › Group setup › Intercompany Settings 

Rules for charges between group companies: the group name and currency for consolidated statements, default VAT on intercompany invoices, available asset hours per month, transfer pricing tolerance and disclosure threshold, overdue days, which provisions are included in staff recharges, and the mark-up, transfer pricing method, benchmark and accounts for each type of charge. How to use it
- Fill the Group section.
- Tick the provisions to include in staff cost recharges.
- For each type of charge set the mark-up %, method (Cost Plus, CUP, Resale Price, TNMM, Profit Split) and the income and expense accounts.
- Select Create missing accounts to add any intercompany ledgers, then Save settings. 

_[Screenshot: Intercompany Settings]_

The Intercompany Settings screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Group | 
| Group name on consolidated statements  | Text |  | 
| Group currency  | Text |  | 
| Default VAT % on intercompany invoices  | Number |  | 
| Available hours of an asset per month  | Number |  | 
| Transfer pricing: allowed difference from the arm's-length value %  | Number |  | 
| Related-party disclosure threshold per company and year  | Number |  | 
| An open invoice is overdue after (days)  | Number |  | 
| Staff cost recharge | 
| Leave provision  | Tick box |  | 
| End-of-service provision  | Tick box |  | 
| Benefits provision (air ticket and others)  | Tick box |  | 
| Control accounts | 
| Intercompany receivable  | List | 

Pick a ledger account from the chart of accounts | 
| Intercompany payable  | List | 

Pick a ledger account from the chart of accounts | 

 

Columns shown: Type · Mark-up % · Transfer pricing method · Benchmark mark-up % · Income account (company that charges) · Expense account (company that is charged) 

Columns shown: Company · Type · Currency · Rate to AED · Group owns % · In consolidation 

Buttons on this screen
- Create missing accounts
- Save settings stores the settings for every user.
- Open Companies   

### Asset Rate Card

Group & Intercompany › Masters & Settings › Assets used by other companies › Asset Rate Card 

The hourly cost of each asset used by other companies: (monthly depreciation + maintenance and running cost) ÷ available hours, plus mark-up. Select Set rate to enter running costs or a fixed hourly rate. 

_[Screenshot: Asset Rate Card]_

The Asset Rate Card screen 

Columns shown: Asset · Owner · Monthly depreciation · Maintenance and running cost · Hours a month · Cost per hour · Mark-up % · Charge per hour 

Buttons on this screen
- Usage log
- Set rate  

### Transactions  

### Month-End Charges

Group & Intercompany › Transactions › Month-end › Month-End Charges 

A six-step monthly checklist for the selected company: 1. payroll paid for other companies, 2. sponsorship, 3. asset usage, 4. review and post the invoices, 5. reconcile, 6. net and settle. How to use it
- Choose the Month.
- In steps 1–3 select Prepare the charge for each source.
- In step 4 review the drafts and select Post all drafts.
- Check step 5 (receivables agree with partner payables) and settle in step 6. 

_[Screenshot: Month-End Charges]_

The Month-End Charges screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Month  | List | The month (1 to 12).

Jan · Feb · Mar · Apr · May · Jun · Jul · Aug · Sep · Oct · Nov · Dec | 

 

Buttons on this screen
- Prepare the charge
- Sponsorship costs
- Usage log
- Post all drafts
- Invoices
- Position and reconciliation
- Settlement   

### Intercompany Invoices

Group & Intercompany › Transactions › Month-end › Intercompany Invoices 

Invoices between two group companies, recorded in both at once: receivable and income in the company that charges, payable and expense in the company charged. Types: payroll, sponsorship, asset, service, expense, goods. How to use it
- Select New invoice, choose the Type and the company Charged to.
- Enter lines (description, quantity, rate); the cost, mark-up, VAT and total are calculated, with the arm's-length value for transfer pricing.
- Select Save and post. 

_[Screenshot: Intercompany Invoices]_

The Intercompany Invoices screen

_[Screenshot: Intercompany Invoices form]_

The form that opens with New invoice 

Fields on the “New intercompany invoice” form
| Field | Type | What to enter / options | 
| Type  | List | 

Staff cost recharge (payroll paid by another company) · Sponsorship charges · Equipment / asset usage · Services · Expenses paid on behalf · Goods and other trading | 
| Issued by (charges) automatic | List | 

Pick from the master list | 
| Charged to  | List | 

Pick from the master list | 
| Invoice date  | Date |  | 
| Mark-up %  | Number |  | 
| VAT %  | Number | VAT rate. 5 for standard-rated supplies, 0 for zero-rated or exempt. | 
| Transfer pricing method  | List | 

Cost Plus · CUP · Resale Price · TNMM · Profit Split · Not applicable | 
| Arm's-length value  | Number | (blank = automatic) | 
| Description  | Text | A short description. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Transfer pricing note  | Text |  | 

 

Table columns: DESCRIPTION · QTY · RATE · AMOUNT 

Buttons on this screen
- New invoice
- Month-end charges
- Reset
- + Add line adds a line to the table.
- Save draft
- Save and post   

### Sponsorship Charges

Group & Intercompany › Transactions › Charges › Sponsorship Charges 

Costs one company incurs for an employee who works for another: a monthly sponsorship fee or one-off visa, labour card, Emirates ID, medical insurance, air ticket or accommodation costs. They are charged at month-end with the mark-up. How to use it
- Select Add sponsorship cost, choose the employee, the company to charge, the cost type, frequency, start month, end month and amount, and Save. 

_[Screenshot: Sponsorship Charges]_

The Sponsorship Charges screen

_[Screenshot: Sponsorship Charges form]_

The form that opens with Add sponsorship cost 

Fields on the “Add sponsorship cost” form
| Field | Type | What to enter / options | 
| Sponsoring company (incurs the cost) automatic | List | 

Pick from the master list | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list (— none — also offered) | 
| Charge to company  | List | 

Pick from the master list | 
| Cost  | List | 

Monthly sponsorship fee · Visa and residence · Labour card and MOL fees · Emirates ID · Medical insurance · Air ticket · Accommodation · Other cost | 
| Frequency  | List | 

One-off · Monthly | 
| Start month  | Date |  | 
| Until (blank = no end)  | Date |  | 
| Amount (AED)  | Number | The amount before VAT. | 
| Note  | Text |  | 

 

Buttons on this screen
- Add sponsorship cost   

### Asset Usage Log

Group & Intercompany › Transactions › Charges › Asset Usage Log 

Hours one company uses another company's asset. The owner confirms the hours; confirmed hours are charged at month-end at the rate-card cost plus mark-up. Status: Logged → Confirmed → Invoiced. How to use it
- Select Log usage, choose the asset, the company using it, the date, hours and project, and Save. 

_[Screenshot: Asset Usage Log]_

The Asset Usage Log screen

_[Screenshot: Asset Usage Log form]_

The form that opens with Log usage 

Fields on the “Log asset usage” form
| Field | Type | What to enter / options | 
| Asset  | List | 

Pick from the master list | 
| Used by  | List | 

Pick from the master list | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Hours used  | Number |  | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Activity  | Text | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project. | 
| Note  | Text |  | 

 

Buttons on this screen
- Log usage
- Rate card   

### Settlement and Netting

Group & Intercompany › Transactions › Settlement and consolidation › Settlement and Netting 

Nets the open invoices two companies have charged each other so only the difference is paid; both companies record the settlement together. How to use it
- Select New settlement, choose the second company, the date and bank reference, review the netting and confirm. 

_[Screenshot: Settlement and Netting]_

The Settlement and Netting screen

_[Screenshot: Settlement and Netting form]_

The form that opens with New settlement 

Fields on the “Settlement and netting” form
| Field | Type | What to enter / options | 
| First company automatic | List | 

Pick from the master list | 
| Second company  | List | 

Pick from the master list | 
| Settlement date  | Date |  | 
| Bank reference  | Text |  | 

 

Buttons on this screen
- New settlement
- Close   

### Consolidation Adjustments

Group & Intercompany › Transactions › Settlement and consolidation › Consolidation Adjustments 

Journals that exist only in the consolidated statements (for example eliminating the investment against the subsidiary's equity, or unrealised profit). They do not change any company's books. How to use it
- Select New adjustment and enter the journal lines. 

_[Screenshot: Consolidation Adjustments]_

The Consolidation Adjustments screen

_[Screenshot: Consolidation Adjustments form]_

The form that opens with New adjustment 

Fields on the “New consolidation adjustment” form
| Field | Type | What to enter / options | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Description  | Text | A short description. | 

 

Table columns: ACCOUNT · DEBIT · CREDIT 

Buttons on this screen
- New adjustment
- + Add line adds a line to the table.  

### Reports  

### Group Dashboard

Group & Intercompany › Reports › Group overview › Group Dashboard 

Group year-to-date figures in AED, translated with each company's rate and excluding intercompany charges, plus anything that needs attention. 

_[Screenshot: Group Dashboard]_

The Group Dashboard screen

_[Screenshot: Group Dashboard form]_

The form that opens with Month-end charges 

Fields after selecting Month-end charges
| Field | Type | What to enter / options | 
| Month  | List | The month (1 to 12).

Jan · Feb · Mar · Apr · May · Jun · Jul · Aug · Sep · Oct · Nov · Dec | 

 

Buttons on this screen
- Month-end charges
- Consolidated statements   

### Company Comparison

Group & Intercompany › Reports › Group overview › Company Comparison 

Companies side by side in AED: results, financial position and intercompany balances (before eliminations), with a consolidated group column. 

_[Screenshot: Company Comparison]_

The Company Comparison screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 
| Eliminate intercompany and apply adjustments  | Tick box |  | 

 

Columns shown: 2026-01-01 to 2026-10-23 · Control Contracting & Trading Co. AED→AED · Beta LLC AED→AED · Group (consolidated) 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Intercompany Position

Group & Intercompany › Reports › Intercompany › Intercompany Position 

What each company is owed by the others, from the invoices and from both companies' books. The two sides of every pair must agree. 

_[Screenshot: Intercompany Position]_

The Intercompany Position screen

_[Screenshot: Intercompany Position form]_

The form that opens with Settle 

Columns shown: Is owed ↓ · owes → · Control Contracting & Trading Co. · Beta LLC · Total owed to it 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Settle opens settlement for the pair.   

### Transfer Pricing Register

Group & Intercompany › Reports › Intercompany › Transfer Pricing Register 

Every posted intercompany invoice with its transfer pricing method and arm's-length value. Companies whose related-party transactions exceed the threshold must file the transfer pricing disclosure with the corporate tax return. 

_[Screenshot: Transfer Pricing Register]_

The Transfer Pricing Register screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Year  | Number | The calendar year. | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Consolidated Trial Balance

Group & Intercompany › Reports › Consolidated statements › Consolidated Trial Balance 

Each company's trial balance in AED, the eliminations and consolidation adjustments, and the consolidated column. 

_[Screenshot: Consolidated Trial Balance]_

The Consolidated Trial Balance screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As at  | Date |  | 
| Eliminate intercompany and apply adjustments  | Tick box |  | 

 

Columns shown: Account · Type · Control Contracting & Trading Co. AED→AED · Beta LLC AED→AED · Group total · Eliminations · Adjustments · Consolidated debit · Consolidated credit 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Consolidated Income Statement

Group & Intercompany › Reports › Consolidated statements › Consolidated Income Statement 

Revenue, costs and expenses of all companies for the period with intercompany charges eliminated. 

_[Screenshot: Consolidated Income Statement]_

The Consolidated Income Statement screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 
| Eliminate intercompany and apply adjustments  | Tick box |  | 

 

Columns shown: 2026-01-01 to 2026-10-23 · Control Contracting & Trading Co. AED→AED · Beta LLC AED→AED · Eliminations and adjustments · Consolidated 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Consolidated Balance Sheet

Group & Intercompany › Reports › Consolidated statements › Consolidated Balance Sheet 

Assets, liabilities and equity of all companies at a date with intercompany balances eliminated. 

_[Screenshot: Consolidated Balance Sheet]_

The Consolidated Balance Sheet screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As at  | Date |  | 
| Eliminate intercompany and apply adjustments  | Tick box |  | 

 

Columns shown: At 2026-10-23 · Control Contracting & Trading Co. AED→AED · Beta LLC AED→AED · Eliminations and adjustments · Consolidated 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Elimination Schedule

Group & Intercompany › Reports › Consolidated statements › Elimination Schedule 

The intercompany entries removed on consolidation. Income eliminated must equal expense eliminated, and receivables must equal payables. 

_[Screenshot: Elimination Schedule]_

The Elimination Schedule screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As at  | Date |  | 

 

Buttons on this screen
- Consolidation adjustments   

 

🏦

Module guide
