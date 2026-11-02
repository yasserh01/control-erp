## Finance

The general ledger and everything around it: posting accounts and controls, journals and vouchers, petty cash, banking and reconciliation, treasury (LC, LG, PDC, overdrafts, loans, deposits), period-end accruals, prepayments, leases and provisions, budgets, VAT, corporate tax, ICV and the financial statements. 

Transaction→Accounting event→Posting rule→Journal→GL 

Most entries reach the ledger automatically from other modules (see How accounting happens). Finance users check them, add what only Finance knows (accruals, provisions, bank charges, journals), reconcile the banks, close the period and report.

Controls. Account Mapping links each posting key to a ledger. Period Control closes months so nothing can be dated in them. Analysis Templates decide what extra detail is asked for on analysed accounts. Vouchers, transfers, accruals, budgets and corporate tax each have their own approval levels (Approval inbox), and posted entries are reversed, never deleted.

Month-end order. Post all module documents → run depreciation, payroll, project month-end → accruals, prepayment and lease postings, provisions → FX revaluation → bank reconciliations → check the control reconciliations (GRN payables, analysis, sales reconciliations) → trial balance and financial statements → close the period. 

#### Screens in this module

Masters & Settings

Accounts & ratesChart of Accounts (Master Data)Tax Codes (Master Data)Currencies (Master Data)Exchange Rates

Banks & cashBank AccountsCash BoxesPetty Cash HoldersPayment Terms (Master Data)Bank Reconciliation Settings

ControlsPeriod ControlAccount MappingAnalysis Templates

Transactions

Vouchers & journalsJournal VouchersSupplier PaymentsGeneral Payment VouchersGeneral Receipt VouchersVoucher ControlPetty Cash

Banking & treasuryBank TransfersBank Statement LinesBank ReconciliationReconciliation HistoryLC ManagementLG ManagementPDC ManagementOverdraft FacilityLoan ManagementFixed Deposits

Period-end & allocationsAccrualsPrepaymentsLease ManagementProvisionsFX RevaluationIntercompanyPayroll Recharge

Budget, tax & complianceBudget EntryICV ManagementVAT ReturnCorporate Tax

Reports

Financial statementsFinancial StatementsGeneral LedgerTrial BalanceBudget vs ActualBudget Reports

Banking & treasuryBank ReconciliationBank Reconciliation StatementUncleared ItemsReconciliation StatusBank PositionVoucher Reports

Parties & analysisParty SOAAP / AR AgingGRN Payables ReportReports & RegistersAnalysis Reports

Leases & prepaymentsLease ReportsPrepayment Reports 

### Masters & Settings  

### Exchange Rates

Finance › Masters & Settings › Accounts & rates › Exchange Rates 

Exchange rates by currency and date. Foreign currency documents and receipts take the rate for their date; FX Revaluation uses the closing rate. How to use it
- Select + New, choose the currency, enter the date and rate (AED per unit), and Save. 

_[Screenshot: Exchange Rates form]_

The form that opens with + New 

Fields on the “New Exchange Rate” form
| Field | Type | What to enter / options | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

UAE Dirham · US Dollar · Euro | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Rate  | Number | Exchange rate to the base currency. Amounts are converted with this rate when posted. | 

   

### Bank Accounts

Finance › Masters & Settings › Banks & cash › Bank Accounts 

The company's bank accounts with their account number, IBAN, currency, the ledger account they post to, and the WPS agent and routing codes used for salary files. How to use it
- Select + New, enter the bank name, account number, IBAN and currency.
- Choose the GL Account, or choose Create a new ledger account to have one made on save.
- Enter the WPS Agent Code and Routing Code if salaries are paid from this account.
- Save. 

_[Screenshot: Bank Accounts]_

The Bank Accounts screen

_[Screenshot: Bank Accounts form]_

The form that opens with + New 

Fields on the “New Bank Account” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Bank  | Text | The company bank account used. | 
| Account No  | Text |  | 
| IBAN  | Text | The 23-character UAE IBAN starting with AE. | 
| Currency  | Text | Leave blank for the base currency (AED). Choose another currency for foreign documents. | 
| GL Account  | List | Ledger account for this bank. Each bank should have its own ledger.

Pick a ledger account from the chart of accounts | 
| WPS Agent Code  | Text | Bank's agent code for the WPS salary information file. | 
| WPS Routing Code  | Text | Routing code of this bank. | 

 

Buttons on this screen
- Apply standard accounts   

### Cash Boxes

Finance › Masters & Settings › Banks & cash › Cash Boxes 

Cash boxes (main office cash, site cash) with their custodian and ledger account. Used by bank transfers (bank to cash, cash to bank) and cash vouchers. How to use it
- Select + New, enter the name and custodian, choose or create the GL account, and Save. 

_[Screenshot: Cash Boxes form]_

The form that opens with + New 

Fields on the “New Cash Box” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Custodian  | Text |  | 
| GL Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Petty Cash Holders

Finance › Masters & Settings › Banks & cash › Petty Cash Holders 

People who keep a petty cash float. Each holder is linked to one cash account under Current Assets › Cash on Hand; petty cash vouchers are paid from it. How to use it
- Select + New, enter the holder name and link the employee.
- Set the Float limit.
- Choose the cash account, or Create a new cash account for this holder (the Cash on Hand group is created automatically if missing).
- Save. Fund the float with a Bank Transfer (bank to cash). 

_[Screenshot: Petty Cash Holders]_

The Petty Cash Holders screen

_[Screenshot: Petty Cash Holders form]_

The form that opens with + New 

Fields on the “New Petty Cash Holder” form
| Field | Type | What to enter / options | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Holder name required | Text |  | 
| Employee  | List | The employee, from the Employees master. (optional)

Pick from the master list | 
| Float limit  | Number | (optional) | 
| Cash account required | List | No “Cash on Hand” group exists yet. It is created automatically under Current Assets when you create the account here. Until then, accounts with the Cash control type are listed.

➕ Create a new cash account for this holder (under Cash on Hand) | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Bank Reconciliation Settings

Finance › Masters & Settings › Banks & cash › Bank Reconciliation Settings 

Rules for automatic matching of bank statement lines and the monthly reconciliation reminder: days for a sure match, wider search window for suggestions, amount tolerance (bank charges), party-name match %, the due day of the monthly reconciliation and when an uncleared payment becomes stale. It also shows each bank's last reconciled date. How to use it
- Select Change rules, adjust and Save rules. 

_[Screenshot: Bank Reconciliation Settings]_

The Bank Reconciliation Settings screen

_[Screenshot: Bank Reconciliation Settings form]_

The form that opens with Change rules 

Fields on the “Bank reconciliation rules” form
| Field | Type | What to enter / options | 
| Sure match: days between the entry date and the bank date  | Number |  | 
| Wider search for suggestions (days)  | Number |  | 
| Amount difference allowed in a suggestion (%)  | Number |  | 
| Party name found in the bank description (%)  | Number |  | 
| Reconciliation is due on day of the following month  | Number |  | 
| Payment is stale after (days)  | Number |  | 

 

Buttons on this screen
- Change rules
- Bank Reconciliation
- Bank Statement Lines
- Reconciliation History
- Save rules   

### Period Lock

Finance › Masters & Settings › Controls › Period Lock 

Locks a month when its books are final. In a locked month nothing dated in it can happen: no voucher or document can be added, changed, deleted, voided, approved or posted, and no attachment can be added or removed. The ledger of the month is also protected inside the data, so a change that arrives from any other screen, an import or a restore is cancelled and nothing is saved. Reports, printing, email and the GL Dump still show the month. 

Soft close and Hard close in Period Control only stop posting. Locked is stronger and is set only here. How to use it
- Open Period Lock. Choose the Year. The tiles show the locked months, the months closed for posting, the open months and the latest lock. Select a tile to list only those months.
- Each month card shows its status, the journals and ledger lines, the total debits and the number of unposted vouchers dated in it. Post or cancel those first, because they cannot be posted after the lock.
- Select a month. The window lists the entries by voucher type, the unposted vouchers and the history. Select Lock this month and confirm.
- To lock many months, choose Lock every month up to and select Lock these months.
- To open a month again select Unlock… and enter the reason. The reason is required and is kept. 

What Period Lock records
| Item | Where | What it holds | 
| Status  | Period Control | The month shows Locked, with who locked it, when and why. | 
| Lock history  | This screen | Every lock and unlock with date and time, user, the status before and after, and the reason. | 

 

Buttons on this screen
- Lock these months locks every month, from the first month that has entries, up to the month chosen. It shows how many months it will lock before you confirm.
- Lock this month / Unlock… in the month window.
- Open in GL Dump lists the ledger lines of the month. 

Who can lockOnly a role with the Approve / post permission can lock or unlock. Other roles can look at the months and the history. A locked month cannot be deleted from Period Control.   

### Period Control

Finance › Masters & Settings › Controls › Period Control 

Opens and closes accounting months. A month marked Soft close or Hard close refuses any posting, reversal or new document dated in it until it is reopened. A month that must not change at all is locked in Period Lock. How to use it
- Select + New, enter the Period as YYYY-MM (for example 2026-09) and the Status.
- Save. To reopen, edit the period and set it to Open. 

_[Screenshot: Period Control form]_

The form that opens with + New 

Fields on the “New Period Control” form
| Field | Type | What to enter / options | 
| Period  | Text | Month in the form YYYY-MM. | 
| Status  | List | Open, Soft close or Hard close. Locked is shown for a month locked in Period Lock; it can be set and removed only there, and a locked month cannot be deleted.

Open · Soft close · Hard close · Locked | 

   

### Account Mapping

Finance › Masters & Settings › Controls › Account Mapping 

Links each posting key used by the automatic postings to a ledger: Inventory / Expense, GRN Payable, Input VAT, Output VAT, Accounts Payable, Accounts Receivable, Revenue, Bank / Cash, Fixed Assets, Accumulated Depreciation, Depreciation Expense, Disposal Gain / Loss, Project Cost / COGS, Employee Loans, FX Gain / Loss, Supplier and Customer Advances, Retained Earnings, EOSB Provision, Employee Clearing, GDN Receivable, Sales Returns, Credit Loss Allowance and Expense, PDC Receivable and Sales Price Adjustment. How to use it
- Select Load standard accounts & mapping after loading the starter chart.
- Review each key and use Edit to point it to a different ledger if needed. 

_[Screenshot: Account Mapping]_

The Account Mapping screen

_[Screenshot: Account Mapping form]_

The form that opens with + New 

Fields on the “New Account Mapping” form
| Field | Type | What to enter / options | 
| Key  | List | 

Inventory/Expense · GRN Payable · Input VAT · Output VAT · Accounts Payable · Accounts Receivable · Revenue · Bank / Cash · Fixed Assets · Accumulated Depreciation · Depreciation Expense · Disposal Gain/Loss · Project Cost / COGS · Employee Loans … +25 more | 
| Account  | List | 

Pick a ledger account from the chart of accounts | 

 

Buttons on this screen
- Load standard accounts & mapping
- Apply standard accounts 

Good to know
- An accounting entry showing "(not mapped: …)" means the key has no ledger here.
- This screen is also listed in Users & Settings as Default Posting Accounts.   

### Analysis Templates

Finance › Masters & Settings › Controls › Analysis Templates 

An account with an Analysis Type asks for extra details every time it is posted. A template lists the fields of that pop-up and the master each comes from: Employee Clearing (employee, payment category), Employee Expense (employee, cost type), Vehicle Cost (vehicle, category), Project Cost Control (project, activity, cost element), Asset Cost (asset). Amount and remarks are always included. How to use it
- Select Create standard templates and masters once.
- Use + New template for a custom analysis.
- Choose what happens when an employee balance goes to the opposite side: warn, block or allow. 

_[Screenshot: Analysis Templates]_

The Analysis Templates screen

_[Screenshot: Analysis Templates form]_

The form that opens with Create standard templates and masters 

Fields after selecting Create standard templates and masters
| Field | Type | What to enter / options | 
| When an employee balance goes to the opposite side  | List | 

Warn and ask · Block posting · Allow | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| When an employee balance goes to the opposite side  | List | 

Warn and ask · Block posting · Allow | 

 

Columns shown: Template · Analysis type · Fields · Used by accounts 

Buttons on this screen
- Create standard templates and masters
- + New template 

Allocation pop-up (all control accounts)
- In Journal Vouchers, General Payment and Receipt Vouchers, Petty Cash, Direct Sales and Direct Purchase Tax Invoices, type the account and the amount, then press Enter. For an account with an Analysis Type a window opens with the fields of its template (for example employee and cost type, or project, activity and cost element) and the amount and remarks.
- The three boxes show To apply (the amount of the line), Applied and Balance. Press Enter in an amount to add the next line; when the balance is zero, Enter saves. Save is refused while the lines add up to more or less than the amount. Insert adds a line, × deletes one, Exit closes without saving.
- Type the start of a name in a list field and the window completes it. Use the search box to find a line, and Import to paste lines copied from Excel, one per line, in the order of the columns shown. More options adds the columns prepaid months and capitalise to asset.
- For an employee account the window also has No. of months and Instalment: this is the deduction instruction: the amount is divided into equal instalments, kept with the line and shown in the remarks of the employee’s analysis statement.
- Amounts in tax invoices are allocated without VAT.  

### Transactions  

### Journal Vouchers

Finance › Transactions › Vouchers & journals › Journal Vouchers 

Manual journals for entries no other screen makes: corrections, reclassifications, opening adjustments, period-end entries. Total debit must equal total credit. How to use it
- Select + New, enter the Date, Voucher type and General description.
- Optionally set the project, department and cost centre for the whole voucher, or tick Project / cost centre on each line.
- Enter each line: ledger account, Dr or Cr, amount and description. To charge VAT on a line, choose a Tax code: the VAT cell is calculated and locked, and a shaded VAT line is generated under the line. For analysed accounts the analysis pop-up opens. Use + Add balancing line to balance automatically.
- Select Save draft, Save and print or Save and post. 

_[Screenshot: Journal Vouchers]_

The Journal Vouchers screen

_[Screenshot: Journal Voucher form with a tax code]_

The form with a tax code on line 1: the VAT cell is locked and a shaded VAT line is generated 

Fields on the “New Journal Voucher Draft” form
| Field | Type | What to enter / options | 
| Voucher no (automatic) automatic | Text |  | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Voucher type  | List | General, Accrual, Prepayment, Provision, Payroll, Depreciation or Intercompany.

General · Accrual · Prepayment · Provision · Payroll · Depreciation · Intercompany | 
| Reference (optional)  | Text | Your own reference, such as an external document number. | 
| General description required | Long text |  | 
| Project, department and cost centre for the whole voucher (optional) | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Journal lines | 
| Project / cost centre on each line  | Tick box |  | 

 

Table columns: # · LEDGER ACCOUNT * · DR / CR * · AMOUNT * · TAX CODE · VAT 🔒 AUTO · DESCRIPTION · Project · Cost centre · Supplier / customer / asset 

Buttons on this screen
- Print PDF
- Print Journal Voucher
- Reverse posts a reversing entry for a posted record.
- More
- + Add line adds a line to the table.
- + Add balancing line
- Save draft
- Save and print
- Save and post 

Good to know
- VAT on a journal. A line with a purchase code (Input VAT) adds an Input VAT line on the same side as the line; a line with a sales code adds an Output VAT line. The VAT is calculated from the amount and the code and cannot be typed. Total debit includes the VAT lines, and + Add balancing line takes them into account.
- Accounts of customers, suppliers and fixed assets cannot carry a tax code; post those through their own screens so that the sub-ledgers agree.
- The VAT return picks the lines up: Input codes into box 9, sales codes into their output box (1a–1g, 4 or 5), and Out of scope lines in no box. The printed voucher shows the generated VAT lines.
- Without a tax code a journal posts exactly as before. 

Allocation pop-up
- When the account has an Analysis Type (see Analysis Templates), enter the amount of the line and press Enter: a window opens to allocate the amount (To apply, Applied, Balance). Under the amount the line shows ⊕ Allocate (or Allocated X of Y) in orange until the amount is fully allocated, then ✓ Allocated in green; select it to open the window again. The allocation is saved with the voucher and appears in the Analysis Reports.   

### Supplier Payments

Finance › Transactions › Vouchers & journals › Supplier Payments 

Pays suppliers: bill settlement against their posted invoices, advances, or on account. Choosing the supplier lists the outstanding bills; tick the ones being paid. How to use it
- Select + New (or Generate Payment on a posted invoice).
- Choose the Supplier, Payment type and Method, and the bank to pay from.
- Tick the bills (adjust part-payments), enter the transfer reference or cheque date.
- Select Save draft or Save and post. 

_[Screenshot: Supplier Payments form]_

The form that opens with + New 

Fields on the “New Supplier Payment” form
| Field | Type | What to enter / options | 
| Voucher No automatic | Text |  | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Supplier required | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Payment type  | List | Bill Settlement (pays invoices), Advance (before an invoice), On Account (unallocated).

Bill Settlement · Advance · On Account | 
| Method  | List | How the money moves: Cash, Bank Transfer or Cheque.

Bank Transfer · Cheque · Cash | 
| Pay from (bank)  | List | Company bank account the payment leaves.

Pick from the master list | 
| Transfer reference  | Text |  | 
| Cheque date  | Date |  | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Exchange rate automatic | Number |  | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Amount automatic | Number | The amount before VAT. | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Buttons on this screen
- Select all
- Deselect all
- Save draft
- Save and post 

Good to know
- A cheque dated in the future is held as a post-dated cheque (see PDC Management).
- If the trade licence has expired, the system may warn or block new payments (Certificate Settings).   

### General Payment Vouchers

Finance › Transactions › Vouchers & journals › General Payment Vouchers 

Any payment that is not a standard supplier payment: expenses, rent, utilities, government fees, VAT and corporate tax, salary advances, assets, intercompany, refunds. You enter the lines; the system adds VAT and the bank credit so the voucher always balances, and shows a posting preview. A Quick start list pre-fills typical transactions. How to use it
- Select + New and optionally choose a Quick start.
- Enter voucher and posting dates, payment method, bank account (and cheque details) and narration.
- Choose the Counterparty type and name, its TRN and tax invoice number (for VAT recovery).
- Add payment lines: line type, account, amount excluding VAT, tax code (the VAT is calculated and locked), and the IAS 7 cash flow class. Tax code for all lines puts one code on every line. Tick the option to set project, activity, cost centre and department per line.
- Check the posting preview, then Save and submit (or Submit and post if you may approve). 

_[Screenshot: General Payment Vouchers]_

The General Payment Vouchers screen

_[Screenshot: General Payment Vouchers form]_

The form that opens with + New

_[Screenshot: Payment voucher lines with a tax code]_

The lines: a tax code, the locked VAT, and the posting preview 

Fields on the “New General Payment Voucher Draft” form
| Field | Type | What to enter / options | 
| Quick start  | List | 

Choose a typical transaction… · Pay supplier invoice · Pay supplier on account · Supplier advance payment · Pay rent · Pay utility bill · Pay employee salary advance · Pay bank charges · Pay government fees · Pay intercompany · Pay for a fixed asset · Pay VAT to the FTA · Pay corporate tax · Pay prepaid expense … +4 more | 
| Voucher no (automatic) automatic | Text |  | 
| Voucher date required | Date |  | 
| Posting date required | Date |  | 
| Company  | List | 

Pick from the master list | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Exchange rate  | Number |  | 
| Payment method required | List | 

Bank Transfer · Cheque · Cash · Card · WPS | 
| Bank account required | List | 

Pick from the master list | 
| Cheque no required | Text |  | 
| Cheque date  | Date |  | 
| Reference (transfer / card / receipt reference)  | Text | Your own reference, such as an external document number. | 
| Narration required | Long text | Explanation of the entry. Printed on the voucher and shown in the ledger. | 
| Counterparty who is being paid | 
| Type required | List | 

Supplier · Customer · Employee · Bank · Intercompany · Other · GL | 
| Name required | List | The name shown in every drop-down list and printout.

Pick from the master list | 
| TRN (supplier / customer)  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 
| Tax invoice no (for VAT)  | Text |  | 
| Date of supply (if different)  | Date |  | 
| Reference document  | Text |  | 
| Project, department and cost centre for the whole voucher (optional) | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Payment lines | 
| Project / activity / cost centre / department on each line  | Tick box |  | 

 

Table columns: # · LINE TYPE · ACCOUNT * · DESCRIPTION · AMOUNT EXCL. VAT * · TAX CODE · VAT 🔒 AUTO · LINE TOTAL · IAS 7 CASH FLOW · Project · Activity · Cost centre · Department 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- + Add line adds a line to the table.
- Save draft
- Save and attach files
- Save and print
- Save and submit
- Submit and post 

Good to know
- The VAT is locked. It is worked out from the tax code and the amount; to change it, change the amount or the tax code. A tax code of Out of scope, zero-rated or exempt gives no VAT. An administrator can allow the VAT to be typed again with Lock the calculated VAT on voucher lines in Voucher Control › Settings.
- Approval limits and duplicate checks are set in Voucher Control.
- Status flow: Draft → Submitted → Approved → Posted (Reversed if needed). 

Allocation pop-up
- When the account has an Analysis Type (see Analysis Templates), enter the amount of the line and press Enter: a window opens to allocate the amount (To apply, Applied, Balance). Under the amount the line shows ⊕ Allocate (or Allocated X of Y) in orange until the amount is fully allocated, then ✓ Allocated in green; select it to open the window again. Use it on the account lines and on deductions.   

### General Receipt Vouchers

Finance › Transactions › Vouchers & journals › General Receipt Vouchers 

Any receipt that is not a standard customer receipt: interest, rent income, supplier refunds, insurance claims, intercompany, asset sale proceeds, VAT refunds, employee reimbursements. The system adds VAT and the bank debit. How to use it
- Select + New, optionally a Quick start.
- Enter dates, receipt method, bank and narration, and the counterparty.
- Add receipt lines with account, amount, tax code (the VAT is calculated and locked) and cash flow class. Tax code for all lines puts one code on every line.
- Check the preview and submit or post. 

_[Screenshot: General Receipt Vouchers]_

The General Receipt Vouchers screen

_[Screenshot: General Receipt Vouchers form]_

The form that opens with + New 

Fields on the “New General Receipt Voucher Draft” form
| Field | Type | What to enter / options | 
| Quick start  | List | 

Choose a typical transaction… · Receive customer payment · Receive customer payment on account · Receive customer advance · Receive interest income · Receive rent income · Receive supplier refund · Receive insurance claim · Receive intercompany · Receive asset sale proceeds · Receive VAT refund · Receive employee reimbursement · Receive scrap sale · Receive commission | 
| Voucher no (automatic) automatic | Text |  | 
| Voucher date required | Date |  | 
| Posting date required | Date |  | 
| Company  | List | 

Pick from the master list | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Exchange rate  | Number |  | 
| Receipt method required | List | 

Bank Transfer · Cheque · Cash · Card · Online | 
| Bank account required | List | 

Pick from the master list | 
| Cheque no required | Text |  | 
| Cheque date  | Date |  | 
| Reference (transfer / card / receipt reference)  | Text | Your own reference, such as an external document number. | 
| Narration required | Long text | Explanation of the entry. Printed on the voucher and shown in the ledger. | 
| Counterparty who is paying | 
| Type required | List | 

Supplier · Customer · Employee · Bank · Intercompany · Other · GL | 
| Name required | List | The name shown in every drop-down list and printout.

Pick from the master list | 
| TRN (supplier / customer)  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 
| Tax invoice no (for VAT)  | Text |  | 
| Date of supply (if different)  | Date |  | 
| Reference document  | Text |  | 
| Project, department and cost centre for the whole voucher (optional) | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Receipt lines | 
| Project / activity / cost centre / department on each line  | Tick box |  | 

 

Table columns: # · LINE TYPE · ACCOUNT * · DESCRIPTION · AMOUNT EXCL. VAT * · TAX CODE · VAT 🔒 AUTO · LINE TOTAL · IAS 7 CASH FLOW · Project · Activity · Cost centre · Department 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- + Add line adds a line to the table.
- Save draft
- Save and attach files
- Save and print
- Save and submit
- Submit and post 

Good to know
- The VAT is locked. It is worked out from the tax code and the amount; to change it, change the amount or the tax code. A tax code of Out of scope, zero-rated or exempt gives no VAT. An administrator can allow the VAT to be typed again with Lock the calculated VAT on voucher lines in Voucher Control › Settings. 

Allocation pop-up
- When the account has an Analysis Type (see Analysis Templates), enter the amount of the line and press Enter: a window opens to allocate the amount (To apply, Applied, Balance). Under the amount the line shows ⊕ Allocate (or Allocated X of Y) in orange until the amount is fully allocated, then ✓ Allocated in green; select it to open the window again. Use it on the account lines and on deductions.   

### Voucher Control

Finance › Transactions › Vouchers & journals › Voucher Control 

Approval limits, maker-checker, duplicate checks and policy settings for general payment and receipt vouchers, with the Approval inbox of vouchers waiting for you and the Duplicate exceptions to review. 

_[Screenshot: Voucher Control]_

The Voucher Control screen 

Buttons on this screen
- Approval inbox (0) vouchers waiting for your approval.
- Duplicate exceptions (0) vouchers that look like duplicates.
- Settings approval limits and checks. 

Good to know
- Lock the calculated VAT on voucher lines (Settings › Controls). Yes (default): the VAT of a voucher line is calculated from its tax code and cannot be typed. No: the VAT can be overtyped, for example to match a supplier’s rounding.   

### Petty Cash

Finance › Transactions › Vouchers & journals › Petty Cash 

Records the bills paid from a holder's float. Each bill is one line with date, bill number, payee, amount, tax code and GL account. Posting summarises the lines by account, puts the VAT into Input VAT and pays the total from the holder's cash account. How to use it
- Select + New, choose the Petty cash holder, whether amounts include or exclude tax, and a general description.
- Enter each bill on its own line.
- Select Save and post (or save and print for approval). 

_[Screenshot: Petty Cash form]_

The form that opens with + New 

Fields on the “New Petty Cash Voucher Draft” form
| Field | Type | What to enter / options | 
| Voucher no (automatic) automatic | Text |  | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Petty cash holder required | List | 

Pick from the master list | 
| Amounts entered  | List | Excluding tax (VAT is added) or Including tax (VAT is inside the amount).

Excluding tax (tax is added) · Including tax (tax is inside the amount) | 
| General description required | Long text |  | 
| Department and cost centre for the whole voucher (optional) | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 

 

Table columns: # · DATE * · BILL NO · PAYEE · AMOUNT * · TAX CODE · TAX · TOTAL · GL ACCOUNT * · DESCRIPTION 

Buttons on this screen
- + Add line adds a line to the table.
- Create the standard UAE tax codes (5%, zero-rated, exempt)
- Save draft
- Save and print
- Save and post 

Good to know
- Replenish the float with a Bank Transfer (bank to cash). 

Allocation pop-up
- When the account has an Analysis Type (see Analysis Templates), enter the amount of the line and press Enter: a window opens to allocate the amount (To apply, Applied, Balance). Under the amount the line shows ⊕ Allocate (or Allocated X of Y) in orange until the amount is fully allocated, then ✓ Allocated in green; select it to open the window again. The analysis of a petty cash expense is entered the same way.   

### Bank Transfers

Finance › Transactions › Banking & treasury › Bank Transfers 

Moves money between bank accounts and cash boxes (bank to bank, cash to bank, bank to cash, cash to cash). Each transfer is approved by amount and posts one journal: credit the account the money leaves, debit the account it reaches, with bank charges, VAT and any exchange difference. How to use it
- Select + New and optionally a Quick start (deposit cash, fund petty cash, transfer to the WPS account…).
- Choose the Type of transfer, date, value date and method.
- Choose the From account and amount sent, and the To account (and amount received for different currencies).
- Enter any bank charges and VAT.
- Check the preview and Save and submit or Submit and post. 

_[Screenshot: Bank Transfers]_

The Bank Transfers screen

_[Screenshot: Bank Transfers form]_

The form that opens with + New 

Fields on the “New Bank Transfer Draft” form
| Field | Type | What to enter / options | 
| Quick start  | List | 

Choose a typical transfer… · Transfer between our bank accounts · Deposit cash to the bank · Cash withdrawal for office use · Fund the petty cash box · Transfer to the payroll (WPS) account · Transfer to a foreign-currency account · Transfer between cash boxes | 
| Transfer no (automatic) automatic | Text |  | 
| Type of transfer required | List | 

Bank to Bank · Cash to Bank · Bank to Cash · Cash to Cash | 
| Transfer date *(posting date) required | Date |  | 
| Value date (bank)  | Date |  | 
| Company  | List | 

Pick from the master list | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Method required | List | How the money moves: Cash, Bank Transfer or Cheque.

Bank Transfer · Online Banking · Cheque · Internal Transfer | 
| Reference (bank / transfer reference)  | Text | Your own reference, such as an external document number. | 
| Cheque no required | Text |  | 
| Cheque date  | Date |  | 
| Reference document  | Text |  | 
| Narration required | Long text | Explanation of the entry. Printed on the voucher and shown in the ledger. | 
| From the money leaves | 
| Bank account required | List | 

Pick from the master list | 
| Amount sent *AED required | Number |  | 
| Exchange rate (1 AED = ? AED)  | Number |  | 
| To the money arrives | 
| Bank account required | List | 

Pick from the master list | 
| Amount received (AED)  | Number |  | 
| Exchange rate (1 AED = ? AED)  | Number |  | 
| Bank charges optional, deducted from the account the money leaves | 
| Charges excl. VAT AED  | Number |  | 
| VAT code  | List | 

No VAT · GV - Standard rated 5% · GV - Zero rated · GV - Exempt · GV - Standard 5% (not recoverable) | 
| VAT  | Number |  | 
| Charges account  | Text |  | 
| Project, department and cost centre for the bank charges (optional) | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Register
- Approval inbox (0)
- Duplicate exceptions (0)
- Reports
- Settings
- Save draft
- Save and attach files
- Save and print
- Save and submit
- Submit and post   

### Bank Statement Lines

Finance › Transactions › Banking & treasury › Bank Statement Lines 

Bank statement lines, imported from the bank's Excel, CSV or PDF file or entered by hand. Each line is matched to a ledger entry in Bank Reconciliation, or the missing entry (bank charges, interest) is created from here. Tabs: imported statements, not in books, matched, ignored. How to use it
- Select Import statement and choose the file, or + Add a line.
- Select Auto-match to match lines with ledger entries using the rules in settings.
- For lines Not in books, create the missing entry or ignore the line. 

_[Screenshot: Bank Statement Lines]_

The Bank Statement Lines screen

_[Screenshot: Bank Statement Lines form]_

The form that opens with + Add a line 

Fields on the “Add a bank statement line” form
| Field | Type | What to enter / options | 
| Bank account  | List | 

Pick from the master list | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Type  | List | 

Deposit · Withdrawal | 
| Amount required | Number | The amount before VAT. | 
| Description  | Text | A short description. | 
| Cheque no / reference  | Text |  | 
| Balance after this line (optional)  | Number |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Automatic statements. A Bank statement auto-sync extension of the Extensions & API Hub (or Load a statement file now… in it) loads MT940 or CAMT.053 statements into this register on a schedule. Lines that were loaded before are recognised and skipped.Buttons on this screen
- Import statement
- + Add a line
- Auto-match
- Print / Save as PDF prints the document or saves it as a PDF.
- Bank Reconciliation
- Reconciliation History
- Settings
- Statement lines
- Imported statements (0)
- Not in books (0)
- Matched (0)
- Ignored (0)
- All (0)   

### Bank Reconciliation

Finance › Transactions › Banking & treasury › Bank Reconciliation 

Reconciles each bank account at a statement date: balance per books, add payments not cleared, less receipts not credited, add or less bank entries not in the books, gives the calculated bank balance, compared with the statement balance you enter. How to use it
- Choose the Bank account and Statement date.
- Import the statement and Auto-match, or enter the bank date of each cleared entry.
- Enter the Balance as per bank statement; the difference must be zero.
- Select Reconcile & lock. Print the statement. 

_[Screenshot: Bank Reconciliation]_

The Bank Reconciliation screen

_[Screenshot: Bank Reconciliation form]_

The form that opens with ERP entries (0 not reflected) 

Fields after selecting ERP entries (0 not reflected)
| Field | Type | What to enter / options | 
| Bank account  | List | 

Pick from the master list | 
| Statement date  | Date |  | 
| Account  | — |  | 
| From  | Date |  | 
| To  | Date |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Bank account  | List | 

Pick from the master list | 
| Statement date  | Date |  | 
| Account  | — |  | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Import statement
- Auto-match
- Print statement
- Bank Statement Lines
- Reconciliation History
- Settings
- Reconcile & lock locks the reconciliation at the statement date.
- ERP entries (0 not reflected) ledger entries the bank has not cleared.
- Bank statement lines (0 not in books) statement lines with no ledger entry.
- Not reflected in bank
- Cleared
- Reconciled
- All   

### Reconciliation History

Finance › Transactions › Banking & treasury › Reconciliation History 

Every locked bank reconciliation with its balances. Open a month to reprint it exactly as locked; only the latest reconciliation of a bank can be reopened. 

_[Screenshot: Reconciliation History]_

The Reconciliation History screen 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Bank Reconciliation
- Bank Statement Lines
- Settings   

### LC Management

Finance › Transactions › Banking & treasury › LC Management 

Import, export and standby letters of credit under bank facilities: margin, commission, amendments, discrepancies and payment, posted to the ledger and reconciled with the register. The dashboard shows LC / LG outstanding, PDCs in hand, expiries, facility use and the IFRS 9 provision. 

_[Screenshot: LC Management]_

The LC Management screen 

Columns shown: Account · Register · General ledger · Difference · Result 

Buttons on this screen
- Dashboard
- LC register all LCs and their status.
- Bank facilities facility limits per bank.
- Reports
- LC
- All trade finance
- Set up trade finance accounts creates the ledgers and mappings LC, LG and PDC postings need.   

### LG Management

Finance › Transactions › Banking & treasury › LG Management 

Letters of guarantee: performance, advance payment, payment, retention, shipping, customs and tender guarantees, with margin, commission, claims and the IFRS 9 provision. 

_[Screenshot: LG Management]_

The LG Management screen 

Columns shown: Account · Register · General ledger · Difference · Result 

Buttons on this screen
- Dashboard
- LG register all guarantees and their expiry.
- Bank facilities
- IFRS 9 provision expected loss on guarantees.
- Reports
- LG
- All trade finance
- Set up trade finance accounts   

### PDC Management

Finance › Transactions › Banking & treasury › PDC Management 

Post-dated cheques received from customers and issued to suppliers, held in a cheques account until they clear: due dates, deposits awaiting clearance, overdue, stale and bounced cheques, reconciled with the ledger. 

_[Screenshot: PDC Management]_

The PDC Management screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Register vs General Ledger | 
| Cheque is stale after (months)  | Number |  | 

 

Columns shown: Account · Register · General ledger · Difference · Result 

Buttons on this screen
- Dashboard
- Received cheques cheques from customers.
- Issued cheques cheques given to suppliers.
- Reports
- PDC
- All trade finance   

### Overdraft Facility

Finance › Transactions › Banking & treasury › Overdraft Facility 

Bank overdraft limits, utilisation read from the overdrawn bank ledger, interest and commitment fees accrued daily, and limit changes approved by a second user. 

_[Screenshot: Overdraft Facility]_

The Overdraft Facility screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Register vs General Ledger | 
| Alert when utilisation reaches  | Number |  | 

 

Columns shown: Account · Register · General ledger · Difference · Result 

Buttons on this screen
- Dashboard
- Facility register
- Reports
- Set up treasury accounts   

### Loan Management

Finance › Transactions › Banking & treasury › Loan Management 

Bank term, revolving and syndicated loans: instalment schedules, interest accrual, repayments, prepayment, rate resets and the current / non-current split, at amortised cost. 

_[Screenshot: Loan Management]_

The Loan Management screen 

Columns shown: Account · Register · General ledger · Difference · Result 

Buttons on this screen
- Dashboard
- Loan register
- Reports
- Accrue interest (all loans) posts accrued interest to date.
- Reclassify current portion moves principal due within 12 months to current liabilities.
- Set up treasury accounts   

### Fixed Deposits

Finance › Transactions › Banking & treasury › Fixed Deposits 

Term deposits: three months or less are cash equivalents, longer ones short-term deposits. Interest accrues daily; deposits mature into the bank or roll over, and early withdrawal recalculates interest with the penalty. 

_[Screenshot: Fixed Deposits]_

The Fixed Deposits screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Default premature rate reduction % p.a.  | Number |  | 

 

Columns shown: Account · Register · General ledger · Difference · Result 

Buttons on this screen
- Dashboard
- Deposit register
- Reports
- Accrue interest (all deposits) books interest earned to date.
- Set up treasury accounts   

### Accruals

Finance › Transactions › Period-end & allocations › Accruals 

Expenses, revenue and provisions that belong to a period but are not yet invoiced or paid. A five-step form (type, details, accounts, reversal and recognition, review) builds a balanced journal; approval is by amount and the period-end run reverses it on the chosen date. How to use it
- Select + New accrual and choose the type (accrued expenses, salaries, utilities, rent, interest, professional fees, subcontractor costs, unbilled revenue, interest income, doubtful debts, warranty / claims, deferred revenue).
- Enter the details and amount, check the accounts, choose how and when it reverses or is recognised.
- Review the journal and submit.
- At month-end use Period-end run to post reversals, instalments and recurring accruals. 

_[Screenshot: Accruals]_

The Accruals screen

_[Screenshot: Accruals form]_

The form that opens with + New accrual 

Buttons on this screen
- + New accrual
- Dashboard
- Register
- Approval inbox (0)
- Duplicate exceptions (0)
- Period-end run posts what is due at the period end.
- Recurring & automatic accruals that repeat every period.
- Reports
- Settings
- Review
- 1Type
- 2Details
- 3Accounts
- 4Reversal & recognition
- 5Review
- Next: Details →   

### Prepayments

Finance › Transactions › Period-end & allocations › Prepayments 

Expenses paid in advance (insurance, rent, software, maintenance…) recognised as an asset and charged to expense month by month. Recorded from a posted supplier invoice, by reclassifying an expense, or as a direct payment. The part used after 12 months is shown as non-current. How to use it
- Select + New prepayment, enter the description, category and how it is recorded, with the supplier invoice.
- On Amount and period enter the amount and benefit period; check the GL mapping and the schedule.
- Send for approval. Each month select ▶ Monthly posting to post the amortisation. 

_[Screenshot: Prepayments]_

The Prepayments screen

_[Screenshot: Prepayments form]_

The form that opens with + New prepayment 

Fields on the “Prepayment (new) Draft” form
| Field | Type | What to enter / options | 
| Description  | Text | A short description. | 
| Category  | List | 

Insurance · Rent · Software and Subscriptions · Maintenance Contracts · Freight and Logistics · Professional Fees · Marketing and Advertising · Utilities · Lease Acquisition Costs · Other | 
| Prepayment type  | List | 

Direct · Indirect · Overhead | 
| How it is recorded  | List | 

Supplier invoice already posted · Reclassify an expense already booked · Direct payment (bank or cash) | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Supplier invoice number  | Text |  | 
| Invoice date  | Date |  | 
| Contract or policy reference  | Text |  | 
| LPO reference  | Text |  | 
| GRN reference  | Text |  | 
| Notes  | Text |  | 

 

Buttons on this screen
- 📑 Reports
- ⚙ Setup
- ▶ Monthly posting
- + New prepayment
- Details
- Amount and period
- GL mapping and allocation
- Schedule
- Postings
- Adjustments and cancellation
- Documents
- Approval history
- Close
- Save draft
- Send for approval   

### Lease Management

Finance › Transactions › Period-end & allocations › Lease Management 

IFRS 16 leases: a right-of-use asset and a lease liability for every lease except short-term and low-value ones. After approval the lease is activated; each month interest and depreciation post from its schedule, payments settle the liability, and changes or early termination are remeasured. How to use it
- Select + New lease: name, lessor, contract, asset category and classification (right-of-use, short-term or low-value exemption).
- Enter terms and payments; the IFRS 16 calculation gives the liability and asset.
- Check GL mapping and schedule, then send for approval and activate.
- Post each month with ▶ Monthly posting. 

_[Screenshot: Lease Management]_

The Lease Management screen

_[Screenshot: Lease Management form]_

The form that opens with + New lease 

Fields on the “Lease (new) Draft” form
| Field | Type | What to enter / options | 
| Lease name  | Text |  | 
| Lessor (supplier)  | List | 

Pick from the master list (— select supplier — also offered) | 
| Contract reference  | Text |  | 
| Contract date  | Date |  | 
| Asset category  | List | 

Buildings · Vehicles · Equipment · Vessels · IT Equipment | 
| Classification  | List | 

Right-of-use (IFRS 16) · Short-term exemption · Low-value exemption | 
| Asset description  | Text |  | 
| Location  | Text |  | 
| Serial number  | Text |  | 
| Registration number  | Text |  | 
| Asset identification  | Text |  | 
| Value of the asset when new (AED), for the low-value test  | Number |  | 
| Project (optional)  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Notes  | Text |  | 

 

Buttons on this screen
- 📑 Reports
- ⚙ Setup
- ▶ Monthly posting
- + New lease
- Lease details
- Terms and payments
- IFRS 16 calculation
- GL mapping
- Schedule
- Postings and payments
- Changes and termination
- Documents
- Approval history
- Close
- Save draft
- Send for approval   

### Provisions

Finance › Transactions › Period-end & allocations › Provisions 

IAS 37 provisions (warranty, restructuring, onerous contracts, legal claims, environmental, decommissioning, specific doubtful debts) with assessment, measurement, discounting, approval, utilisation, release and unwinding; and contingent liabilities disclosed but not recognised. How to use it
- Select + New provision, assess the three conditions, measure the amount and review the journal; submit.
- Record utilisation and releases under Movements.
- Use + Contingent liability for items that are only disclosed; the system can write the disclosure note. 

_[Screenshot: Provisions]_

The Provisions screen

_[Screenshot: Provisions form]_

The form that opens with + Contingent liability 

Fields on the “New Contingent Liability” form
| Field | Type | What to enter / options | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Category required | List | 

Legal · Tax · Guarantee · Environmental · Other | 
| Description required | Text | A short description. | 
| Counterparty  | Text | The person or company paid or received from. | 
| Case or reference  | Text |  | 
| Why it is not a provision required | List | 

A possible obligation that depends on a future event · An outflow is possible but not probable · The amount cannot be measured reliably · An outflow is remote | 
| Probability of an outflow required | List | 

Remote · Possible · Probable | 
| Probability %  | Number |  | 
| Estimated amount  | Number | (AED, leave empty if it cannot be estimated) | 
| Expected timing  | Text |  | 
| Disclosure note required | Long text | (required unless an outflow is remote) | 

 

Buttons on this screen
- + Contingent liability
- + New provision
- Dashboard
- Register
- Approval inbox (0)
- Movements
- Contingent liabilities (0)
- Doubtful debts
- Period-end run
- Reports
- Settings
- Write the disclosure note from the figures   

### FX Revaluation

Finance › Transactions › Period-end & allocations › FX Revaluation 

Revalues open foreign-currency payables and receivables at the closing rate. The adjustment posts to FX Gain / Loss and reverses the next day, so settlements use the invoice rate. How to use it
- Enter Revalue as of (month-end), review and select Post revaluation. 

_[Screenshot: FX Revaluation]_

The FX Revaluation screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Revalue as of  | Date |  | 

 

Buttons on this screen
- Post revaluation   

### Intercompany

Finance › Transactions › Period-end & allocations › Intercompany 

A simple intercompany charge record (counterparty, service type, mark-up). For groups in multi-company mode use the Group & Intercompany module. 

_[Screenshot: Intercompany form]_

The form that opens with + New 

Fields on the “New Intercompany” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Counterparty  | Text | The person or company paid or received from. | 
| Service Type  | Text |  | 
| Mark-up %  | Number |  | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Additional details | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Amount  | Number | The amount before VAT. | 
| VAT %  | Number | VAT rate. 5 for standard-rated supplies, 0 for zero-rated or exempt. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved · Rejected · Closed · Cancelled | 

   

### Payroll Recharge

Finance › Transactions › Period-end & allocations › Payroll Recharge 

Where the paying company differs from the employee's company, the payer recharges the cost: receivable and recovery for the payer, expense and payable for the other company. How to use it
- Set the recharge basis, mark-up, VAT and accounts, and Save settings.
- Choose the month and select Generate recharge from posted payroll. 

_[Screenshot: Payroll Recharge]_

The Payroll Recharge screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Recharge settings | 
| Recharge basis  | List | 

Total employer cost (net + provisions) · Net salary only | 
| Mark-up %  | Number |  | 
| VAT % on recharge  | Number |  | 
| Receivable account (payer)  | List | 

Pick a ledger account from the chart of accounts | 
| Recovery / revenue account (payer)  | List | 

Pick a ledger account from the chart of accounts | 
| Expense account (cost company)  | List | 

Pick a ledger account from the chart of accounts | 
| Payable account (cost company)  | List | 

Pick a ledger account from the chart of accounts | 

 

Buttons on this screen
- Save settings stores the settings for every user.
- Generate recharge from posted payroll   

### Budget Entry

Finance › Transactions › Budget, tax & compliance › Budget Entry 

Budgets for months of a year: whole-company (every account) or single (one account, department, cost centre or project), as Original, Forecast or What-If, for profit and loss or balance sheet. Approved budgets are locked; changes go through numbered revisions. Budgets never post to the ledger. How to use it
- Choose the Year.
- Select + Whole-company budget or + Single budget; enter name, kind, scope, account and months.
- Enter monthly amounts on Budget lines (with a spreading method).
- Send for approval (Department → Finance → Management → CEO as configured). 

_[Screenshot: Budget Entry]_

The Budget Entry screen

_[Screenshot: Budget Entry form]_

The form that opens with + Single budget 

Fields on the “Budget (new) Draft Original” form
| Field | Type | What to enter / options | 
| Name of the budget  | Text |  | 
| Kind  | List | 

Original · Forecast · What-If | 
| Covers  | List | 

Profit and loss (revenue and expenses) · Balance sheet (monthly movement of assets, liabilities, equity) | 
| Type of budget  | List | 

Whole company · Single account · Single department · Single cost centre · Single project | 
| Account  | List | 

— select — · Contract Revenue · Sales · Sales Returns · Sales Price Adjustment · Service Income · Other Income · Stock Adjustment Gain · Gain or Loss on Disposal · Guarantee Recoveries · Interest Income · Gain or Loss on Lease Termination · Gain or Loss on Sale and Leaseback · Gain on Prepayment Cancellation … +26 more | 
| First month  | Month |  | 
| Last month  | Month |  | 
| Currency automatic | Text | Leave blank for the base currency (AED). Choose another currency for foreign documents. | 
| Purpose and notes  | Text |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Year  | Number | The calendar year. | 

 

Buttons on this screen
- 📑 Reports
- 📊 Budget vs Actual
- ⚙ Setup
- + Single budget
- + Whole-company budget
- Details
- Budget lines
- Monthly summary
- Budget vs actual
- Versions and revisions
- Approval history
- Documents
- Close
- Send for approval   

### ICV Management

Finance › Transactions › Budget, tax & compliance › ICV Management 

In-Country Value: prepares and checks the company ICV score the way MOIAT certifies it, from the ledger, payroll, HR, fixed assets, sales and the supplier master. It does not post. Sections: ICV Dashboard, Company ICV Calculator (eight steps), Supplier ICV, ICV Reports and ICV Settings. How to use it
- Open the Company ICV Calculator and work through the eight steps; adjust figures where needed.
- Keep supplier ICV certificates current in Supplier ICV.
- Record the official certificate in step 8 when issued. 

_[Screenshot: ICV Management]_

The ICV Management screen   

### VAT Return

Finance › Transactions › Budget, tax & compliance › VAT Return 

The VAT 201 return prepared in the FTA layout for a period: standard-rated supplies by emirate (1a–1g), tourist refunds, reverse charge, zero-rated, exempt, imports, adjustments, standard-rated expenses and net VAT due. Each sale goes to the box of its tax code. Boxes 6, 7 and 10 and the adjustment column are entered by hand. How to use it
- Enter From and To (the tax period).
- Review the boxes and enter manual items.
- Export to Excel or Print / PDF and file on the FTA portal. Pay the VAT with a General Payment Voucher (Quick start: Pay VAT to the FTA). 

_[Screenshot: VAT Return]_

The VAT Return screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Columns shown: Item · Amount (AED) · VAT Amount (AED) · Adjustment (AED) 

Columns shown: Tax code · VAT201 box · Amount · VAT 

Good to know
- Direct Sales Tax Invoices and sales-coded journal lines go to the box of their tax code (1a–1g by emirate, 4 zero-rated, 5 exempt). Direct Purchase Tax Invoices and purchase-coded journal lines with a 5% Input code go to box 9.
- Lines coded Out of scope are in no box. The VAT report in Voucher Reports lists them as their own category, so that the documents still agree with the ledger. 

Buttons on this screen
- Excel downloads the report as a spreadsheet.
- Print / PDF   

### Corporate Tax

Finance › Transactions › Budget, tax & compliance › Corporate Tax 

UAE corporate tax (Federal Decree-Law No. 47 of 2022): 0% / 9% rates, exempt income, tax losses, interest limitation, small business relief, free zone and group rules, with IAS 12 accounting. It reads the ledger and registers; the provision posts only when you choose. 

| Section | Use it to | 
| CT Returns | Prepare the return in the FTA format: schedules, adjustments, losses, tax summary lines 1–26, review, approval and filing. | 
| Tax Profile and Elections | Taxpayer details, free zone, tax group, rates and thresholds, penalties and provision accounts. | 
| Account Tagging | How each P&L account is treated: schedule line, non-deductible share, exempt income. | 
| Tax Losses and Interest | Losses and disallowed interest brought forward (75% cap, 10-period limit). | 
| Foreign Tax Credits | Foreign tax paid and the credit allowed. | 
| Related Parties | Related parties, their transactions and disclosure thresholds. | 
| Deferred Tax (IAS 12) | Temporary differences and deferred tax movement. | 
| Filing and Compliance | Deadlines, payments, penalties, amendments, voluntary disclosure, checklist. | 
| CT Accounting Entries | Provision, deferred tax and adjustment journals. | 
| CT Reports | Computation, schedules, elections, registers, provision, multi-year comparison. | 

 

_[Screenshot: Corporate Tax]_

The Corporate Tax screen 

Good to know
- Rates and thresholds are settings so they can follow changes in the law. Confirm unusual items with your tax adviser.  

### Reports  

### Financial Statements

Finance › Reports › Financial statements › Financial Statements 

IFRS statements from the general ledger for any period, compared with the same period a year earlier: Statement of Financial Position, Profit or Loss and OCI (with EBITDA), Changes in Equity, Cash Flows (indirect method), the full Financial Statements Report with notes, and Mapping and Settings (which ledgers feed which line). How to use it
- Choose the Period (or custom dates) and the comparison.
- Open a statement, then print or export it.
- Use Mapping and Settings to map any ledger the automatic mapping does not place. 

_[Screenshot: Financial Statements]_

The Financial Statements screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Period  | List | 

Year to date · 2026 (current) · 2025 · 2024 · 2023 · 2022 · 2021 · 2020 · Custom dates | 
| From  | Date |  | 
| To  | Date |  | 
| Compare with  | List | 

Previous year · No comparative | 

   

### General Ledger

Finance › Reports › Financial statements › General Ledger 

Every posted journal line: journal number, date, source, document number, account, debit, credit, project and company. Search by any value (for example a document number) and export. Opened from Accounting Entry › View GL on any document. 

_[Screenshot: General Ledger]_

The General Ledger screen 

Columns shown: Journal No · Date · Source · Doc No · Account · Debit · Credit · Project · Company   

### GL Dump

Finance › Reports › Financial statements › GL Dump 

The complete general ledger in one list, one row for every ledger line, for review, audit and analysis in Excel. Each row carries the journal, the source document, the account with its code and type, the narration, the analysis (project, activity, cost centre, department), the party, the currency, who posted it and the company. The control totals at the top show whether debits equal credits. How to use it
- Open GL Dump from Finance › Reports (or from Financial Statements). The year to date is shown.
- Set From and To. Narrow the list with the account (name or code), account type, source, project, company, or search any text such as a journal or document number.
- Choose the order: date and journal, account and date, or journal number.
- Check the tiles: lines, total debit, total credit, the difference, journals and Unbalanced journals. Select the last tile to list only the journals whose debits and credits differ.
- Select CSV file for the complete selection, or Print for an A4 landscape sheet. 

Columns: Posting date · Period · Journal no · Line · Source · Document no · Account code · Account name · Account type · Debit · Credit · Net (Dr − Cr) · Narration · Project · Activity · Cost centre · Department · Party · Currency · Posted by · Company 

Buttons on this screen
- CSV file downloads every line of the selection (not only the page shown) for Excel. The file starts with the company, the date and user of the run, the filters used and the control totals, and ends with a total row.
- Print prints the first 2,500 lines with the filters and totals; the CSV file holds the rest.
- Clear resets the filters. 

Good to knowThe screen shows 200 lines a page; the totals always cover the whole selection. A difference other than zero means a journal was posted unbalanced and must be investigated. The dump only reads the ledger: it never changes it.   

### Trial Balance

Finance › Reports › Financial statements › Trial Balance 

Balances of every ledger at a date, with the check that total debits equal total credits. Choose As of (and the company in multi-company mode) and print. 

_[Screenshot: Trial Balance]_

The Trial Balance screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Columns shown: Account · Type · Debit · Credit   

### Budget vs Actual

Finance › Reports › Financial statements › Budget vs Actual 

Budget against posted actuals for the full year or a month, by account, department, cost centre or project, for expenses or revenue. 

_[Screenshot: Budget vs Actual]_

The Budget vs Actual screen 

Columns shown: Account · Budget · Actual · Variance (actual − budget) · Used % 

Buttons on this screen
- Print / PDF
- Excel downloads the report as a spreadsheet.   

### Budget Reports

Finance › Reports › Financial statements › Budget Reports 

Budget reports: register, budget vs actual (original and final), reconciliation from original to final, revision disclosure, variance analysis, version comparison, by department / project / cost centre, monthly matrix, rolling forecast, driver-based, audit trail, cash flow and capex budgets, controls. 

_[Screenshot: Budget Reports]_

The Budget Reports screen 

Buttons on this screen
- 🎯 Budget Entry
- Excel downloads the report as a spreadsheet.   

### Bank Reconciliation Statement

Finance › Reports › Banking & treasury › Bank Reconciliation Statement 

The printable reconciliation statement of a bank account, either a locked reconciliation as it was locked or the current position at a date. 

_[Screenshot: Bank Reconciliation Statement]_

The Bank Reconciliation Statement screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| At  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Bank Reconciliation
- Bank Statement Lines
- Reconciliation History
- Settings   

### Uncleared Items

Finance › Reports › Banking & treasury › Uncleared Items 

Payments and receipts in the books that the bank has not reflected, with their age; stale payments are flagged. 

_[Screenshot: Uncleared Items]_

The Uncleared Items screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| At  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Reconciliation Status

Finance › Reports › Banking & treasury › Reconciliation Status 

Each bank with its book balance, last reconciled date, items waiting and whether the monthly reconciliation is up to date or overdue. 

_[Screenshot: Reconciliation Status]_

The Reconciliation Status screen 

Columns shown: Bank account · Balance in the books · Reconciled up to · Reconciliation · Statement balance then · Days since · Payments not cleared · Receipts not credited · Statement lines not in the books · Status 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Bank Position

Finance › Reports › Banking & treasury › Bank Position 

Cash, deposits, facility limits and headroom, expected net cash flow for 7 and 30 days, maturing loans and deposits, liquidity coverage and the cash conversion cycle, with balances by bank ledger. 

_[Screenshot: Bank Position]_

The Bank Position screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| By bank ledger, today | 
| Liquidity coverage alert below  | Number |  | 

 

Columns shown: Bank · Ledger · Balance · Overdraft limit · Overdraft used · Overdraft available · Deposits held 

Columns shown: Instrument · Class · Measurement · How it is handled here 

Buttons on this screen
- Treasury dashboard
- Position for a period
- Facilities
- Reports
- Set up treasury accounts   

### Voucher Reports

Finance › Reports › Banking & treasury › Voucher Reports 

Voucher reports: register, detail, payment and receipt summaries, IAS 7 cash flow classification, VAT report, sub-ledger reconciliation, audit trail and duplicate exceptions. 

_[Screenshot: Voucher Reports]_

The Voucher Reports screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Excel downloads the report as a spreadsheet.   

### Party SOA

Finance › Reports › Parties & analysis › Party SOA 

Statement of account for a supplier or customer, in AED: opening balance, invoices, payments, notes and running balance; or only the open invoices. How to use it
- Choose Party type and Party, dates, currency and project; tick Outstanding only if needed.
- Select Search / Apply, then print, PDF, Excel or CSV. 

_[Screenshot: Party SOA]_

The Party SOA screen

_[Screenshot: Party SOA form]_

The form that opens with Search / Apply 

Fields after selecting Search / Apply
| Field | Type | What to enter / options | 
| Party type  | List | 

Supplier · Customer | 
| Party  | List | 

Pick from the master list | 
| Date from  | Date |  | 
| Date to  | Date |  | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Outstanding only  | Tick box |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Party type  | List | 

Supplier · Customer | 
| Party  | List | 

Pick from the master list | 
| Date from  | Date |  | 
| Date to  | Date |  | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Outstanding only  | Tick box |  | 

 

Buttons on this screen
- Reset
- Print PDF
- Export Excel
- Export CSV 

Email statements
- Use ✉ Email to send the statement of the selected customer or supplier as a PDF, with an Excel (CSV) file if you wish; the address comes from the master. ✉ Email all lists every party with a balance for the chosen dates, currency and project, and sends each its own statement; the closing balance is added to the message.   

### AP / AR Aging

Finance › Reports › Parties & analysis › AP / AR Aging 

Open supplier (AP) or customer (AR) invoices by age from the due date, in AED, as of any date. How to use it
- Choose AP aging or AR aging and the As of date, then print or export. 

_[Screenshot: AP / AR Aging]_

The AP / AR Aging screen

_[Screenshot: AP / AR Aging form]_

The form that opens with AP aging 

Fields after selecting AP aging
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Columns shown: Supplier · Current · 1-30 · 31-60 · 61-90 · 91-120 · 120+ · Total 

Columns shown: Invoice · Party · Date · Due date · Days overdue · Bucket · Outstanding 

Buttons on this screen
- AP aging
- AR aging
- Print PDF
- Export Excel
- Export CSV   

### GRN Payables Report

Finance › Reports › Parties & analysis › GRN Payables Report 

Goods and services received but not invoiced, by supplier. The total must equal the GRN Payable ledger balance; the reconciliation at the bottom shows any difference. A month-end check. 

_[Screenshot: GRN Payables Report]_

The GRN Payables Report screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Columns shown: GRN · Date · Supplier · LPO · Project · GRN value · Invoiced / returned · Outstanding 

Buttons on this screen
- Print PDF
- Export Excel   

### Reports & Registers

Finance › Reports › Parties & analysis › Reports & Registers 

One place for every ledger-based report: general ledger, trial balance, P&L, balance sheet, cash flow, changes in equity, journal register, account ledger and activity, trial balance by company, department, project, activity or cost centre; plus the lease, prepayment, budget, voucher, bank transfer and accrual registers. Choose a report, set the filters, and Search / Apply. 

_[Screenshot: Reports & Registers]_

The Reports & Registers screen

_[Screenshot: Reports & Registers form]_

The form that opens with Search / Apply 

Fields after selecting Search / Apply
| Field | Type | What to enter / options | 
| Date from  | Date |  | 
| Date to  | Date |  | 
| Company  | List | 

Pick from the master list | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Item  | List | The stock item.

Pick from the master list | 
| Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Approved · Draft · Fully Invoiced · Fully Received · Posted · Submitted | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Date from  | Date |  | 
| Date to  | Date |  | 
| Company  | List | 

Pick from the master list | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Activity  | List | The project activity (WBS line). Costs are tracked against the activity budget. Lists the activities of the chosen project.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Customer  | List | The customer, from the Customers master.

Pick from the master list | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Item  | List | The stock item.

Pick from the master list | 
| Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Approved · Draft · Fully Invoiced · Fully Received · Posted · Submitted | 
| Currency  | List | Leave blank for the base currency (AED). Choose another currency for foreign documents.

AED · USD · EUR | 
| Store  | List | The store or warehouse the goods come from or go to.

Pick from the master list | 

 

Columns shown: Date · Journal · Source · Document · Account · Debit · Credit · Project · Cost centre · Company 

Buttons on this screen
- Reset
- Print PDF
- Export Excel
- Export CSV   

### Analysis Reports

Finance › Reports › Parties & analysis › Analysis Reports 

Checks that each control account agrees with its analysis ledger, and analysis reports: analysis ledger, employee ledger, employee cost, vehicle cost (and per month), project cost analysis. 

_[Screenshot: Analysis Reports]_

The Analysis Reports screen

_[Screenshot: Analysis Reports form]_

The form that opens with Control account reconciliation 

Fields after selecting Control account reconciliation
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Columns shown: Account · Analysis type · GL balance · Analysis ledger · Difference · Status 

Buttons on this screen
- Control account reconciliation GL balance vs analysis ledger for each analysed account.
- Analysis ledger
- Employee ledger
- Employee cost
- Vehicle cost
- Vehicle cost per month
- Project cost analysis
- Reset
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Lease Reports

Finance › Reports › Leases & prepayments › Lease Reports 

Lease reports: register, amortisation schedule, payments due, maturity analysis, right-of-use movement, liability reconciliation, interest, exemptions, discount rates, sale and leaseback, book-tax, IFRS 16 disclosures, options and expiry, controls. 

_[Screenshot: Lease Reports]_

The Lease Reports screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Buttons on this screen
- Excel downloads the report as a spreadsheet.   

### Prepayment Reports

Finance › Reports › Leases & prepayments › Prepayment Reports 

Prepayment reports: register, amortisation schedule, balances by category, movement, current / non-current split, journals, amortisation by project / cost centre / department, upcoming 12 months, expiring, invoices without a schedule, ledger reconciliation, adjustments, book-tax, disclosures, controls. 

_[Screenshot: Prepayment Reports]_

The Prepayment Reports screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Buttons on this screen
- Excel downloads the report as a spreadsheet.   

 

📑

Module guide
