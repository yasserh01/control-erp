## HR & Payroll

Employees and their documents, the monthly payroll from timesheet to WPS payment, additions, deductions, loans, salary changes, leave and rejoin, EOSB and final settlement, HR letters, appraisals, recruitment, onboarding, renewals and clearance. 

Employee master→Categories & payroll projects→Monthly parameters→Timesheet (Time Management)→Payroll run→Approval→JV posting→WPS payment→Reports 

The monthly payroll runs in a fixed order: approve the Monthly Parameters (rest days, holidays, standard hours) → load and approve the Timesheet → approve any Additions, Deductions and Loans for the month → Payroll Run (1. Process, 2. Approve, 3. Create JV and post) → Payroll Payment by WPS, cheque or cash.

Where cost goes. Each employee has a default Payroll Project (a cost destination such as a project's WIP, admin or site overhead). Timesheet hours by payroll project and activity decide where salary and overtime are charged, so labour cost appears in project cost control.

Provisions. Each posted payroll also accrues annual leave, EOSB and other benefit provisions per employee. Annual Leave Settlement and Final Settlement release them. The Employee Control Statement shows every amount owed to or by each employee.

Rules and rates. Overtime rates and bases, leave accrual, the leave and EOSB divisors, the EOSB cap, sick-leave pay, notice and the final-settlement deadline all come from Payroll Settings, which lists the values the system starts with. Loan recovery is limited to 20% of salary per loan and 50% for all deductions together.

Time Management is a separate module. Shifts, public holidays, the punches of the attendance devices, the exception cleansing and the timesheets are in Time Management, so that time keepers can work without any access to HR & Payroll. Every employee has a Payroll Category; a timesheet approved there becomes the payroll timesheet of this module, and the Payroll Run and the Payroll Payment work category by category. 

Month-end payroll checklist
| # | Screen | Action | Result |  
| 1 | Monthly Parameters | New period → tick rest days → load holidays → Save → Approve | Working days and budget hours for the month |  
| 2 | Timesheet | Load employees (or Bulk import) → enter hours, OT, leave, absence → Confirm all → Approve all. With Time Management, approve the timesheets there; they appear here. | Approved hours per employee and project |  
| 3 | Additions, Deductions, Loans | Approve and post documents effective this month | Picked up by the payroll run |  
| 4 | Payroll Run | 1. Process → review / edit → 2. Approve → 3. Create JV and post | Payroll journal by project / department; provisions accrued |  
| 5 | Payroll Payment | Select bank and employees → Process payment → Generate WPS file | Salaries payable cleared; SIF file for the bank |  
| 6 | Payroll Reports | Print payroll register, payslips, costing, GL reconciliation | Records for management and audit |  

 

#### Screens in this module

Masters & Settings

Employees & payroll setupEmployeesPayroll SettingsPayroll ProjectsPayroll CategoriesAnalysis MasterEmployee Expenses Master

Hr forms & lettersTemplate MasterLetter Categories

Appraisal & goalsCompetency MasterAppraisal CyclesBonus PolicyAppraisal Settings

Recruitment & onboardingOnboarding TemplatesRecruitment Settings

Renewals & clearanceRenewal Settings

Transactions

Monthly payrollMonthly ParametersTimesheetAdditionsDeductionsSalary ModificationPayroll RunPayroll PaymentDelete Month Payroll

Loans & leaveLoans & AdvancesLeave RegisterRejoin EntryAnnual Leave Settlement

Exit & adjustmentsEOSB CalculatorFinal SettlementProvision Adjustments

Hr forms & lettersLetter RequestsDocument Expiry TrackerLeave, Rejoin & Exit Forms

Appraisal & goalsGoalsAppraisalsCalibrationImprovement PlansBonus Payout

Recruitment & onboardingJob RequisitionsCandidatesOffersNew Hire OnboardingOnboarding Tasks by Role

Renewals & clearanceRenewals & ClearanceVehicle & Machinery RenewalsEmployee Document RenewalsIssued PermitsExit NoticesPetty Cash Clearance

Reports

Payroll & dashboardPayroll DashboardPayroll ReportsAdditions & Deductions ReportsSalary Modification Reports

Leave, loans & employeesLeave BalanceLoan BalancesLoans & Advances ReportsEmployee ReportsEmployee Control StatementEmployee Comprehensive Report

ProvisionsProvision SchedulesProvision Subledger

Hr forms & lettersLetters Generated RegisterExpiring Documents ReportPending Approvals Report

Appraisal & goalsAppraisal RegisterScore DistributionGoal AchievementCalibration ReportBonus Calculation

Recruitment & onboardingRequisition RegisterRecruitment PipelineTime to Hire and OffersOnboarding StatusNew Hire Document Compliance

Renewals & clearanceDocument Renewals RegisterRenewals and Clearance Activity LogIssued Permits RegisterPetty Cash Clearance Status 

### Masters & Settings  

### Employees

HR & Payroll › Masters & Settings › Employees & payroll setup › Employees 

The employee master. The form has three tabs: General details (personal data, MOL / WPS identity, assignment, contract dates, cost type and payroll project), Documents (passport, visa, Emirates ID, labour card, driving licence, security passes and more, each with issue and expiry dates) and Payroll (salary components, eligibility, posting accounts, opening balances, overtime rules, working conditions and payment method). Each row of the list also has a Report button that opens the employee comprehensive report. How to use it
- Select + New. The Employee ID (EMP-0001) is automatic. Upload a photo if you have one (shown on reports and HR forms).
- On General details enter the name in English and Arabic, nationality, designation, department, date of birth, contact details and Join date. Enter the WPS name parts and the MOL ID and personal number.
- Under Assignment set the status, project, sponsoring and paying company, grade, employment type and contract / probation dates.
- Under Cost type and allocation choose the cost type, the Allocation method (normally Timesheet) and the Default payroll project. For a fixed split, add the payroll projects and percentages (total 100%).
- On Documents select + Add document for each document with number, issue and expiry date. Expiring documents appear on the Overview and in the Document Expiry Tracker.
- On Payroll enter basic salary and allowances; the full salary is calculated. Set the eligibility (overtime, leave pay, EOSB, air ticket and other benefits with their monthly accrual).
- Select Apply standard accounts to fill the posting accounts, enter any opening leave days and provisions, and the payment method with the IBAN and WPS codes.
- Select Save employee. 

_[Screenshot: Employees]_

The Employees screen

_[Screenshot: Employees form]_

The form that opens with + New 

Fields on the “New employee” form
| Field | Type | What to enter / options | 
| Employee ID automatic | Text |  | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic name  | Text | Printed on documents next to the English name. | 
| Nationality  | Text |  | 
| Gender  | List | 

Male · Female | 
| Marital status  | List | 

Single · Married · Divorced · Widowed | 
| First name (WPS)  | Text | Name parts exactly as on the labour card, for the WPS salary file. | 
| Middle name  | Text |  | 
| Last name  | Text |  | 
| Designation  | List | 

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Date of birth  | Date |  | 
| Place of birth  | Text |  | 
| Contact no. (UAE)  | Text |  | 
| Personal email  | Email |  | 
| Join date  | Date |  | 
| Last leave date automatic | Date | Filled automatically from the Leave Register. | 
| Last rejoin date automatic | Date | Updated only by a saved Rejoin Entry. Updated only by a saved Rejoin Entry (HR > Rejoin Entry) | 
| Ministry of Labour (WPS) | 
| MOL ID  | Text | Person code from the Ministry of Human Resources, required for WPS. | 
| Personal number (MOL)  | Text | The 14-digit personal number on the work permit. | 
| MOL ID issue date  | Date |  | 
| MOL ID expiry date  | Date |  | 
| Assignment | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive · Terminated | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Payroll category required | List | The payroll category of the employee (Direct Labor, Staff …). It is required for active employees and decides which reconciliations, timesheets, payroll runs and payments the employee belongs to. See Payroll Categories.

Pick from the master list | 
| Employee company (sponsor)  | List | Company that holds the visa (multi-company groups).

Pick from the master list | 
| Paying company  | List | Company that pays the salary; if different, the cost is recharged intercompany.

Pick from the master list | 
| Grade  | Text |  | 
| Employment type  | List | 

Full-time · Part-time · Contract · Temporary | 
| Contract start  | Date |  | 
| Contract end  | Date |  | 
| Probation end  | Date |  | 
| Cost type and allocation | 
| Cost type  | List | Direct project, Multi project, Direct / Indirect manufacturing, Site overhead, Admin, Sales and marketing or Mixed. Decides where salary cost is reported.

Direct project · Multi project · Direct manufacturing · Indirect manufacturing · Site overhead · Admin · Sales and marketing · Mixed | 
| Allocation method  | List | Timesheet (by hours), Fixed split (percentages), Headcount, Revenue or Direct labour hours.

Timesheet · Fixed split · Headcount · Revenue · Direct labour hours | 
| Default payroll project  | List | Cost destination used on the timesheet when no other is chosen.

Pick from the master list | 
| Salary | 
| Basic salary  | Number |  | 
| Housing  | Number |  | 
| Transport  | Number |  | 
| Other allowances  | Number |  | 
| Food allowance  | Number |  | 
| Mobile allowance  | Number |  | 
| Full salary automatic | Text | Basic + all allowances. Calculated. | 
| Salary change effective from  | Date | When salaries are locked (Payroll Settings), changes go through a Salary Modification voucher instead. | 
| Reason for salary change  | Text |  | 
| Eligibility | 
| Overtime eligible  | List | Yes to pay overtime from the timesheet.

No · Yes | 
| Annual leave pay  | List | Yes to accrue and pay annual leave.

Yes · No | 
| End of service benefit (EOSB)  | List | Yes to accrue EOSB.

Yes · No | 
| Air ticket  | List | 

No · Yes | 
| Air ticket monthly accrual  | Number | Amount accrued each month towards the air ticket. | 
| Other benefit 1  | List | 

No · Yes | 
| Other benefit 1 monthly accrual  | Number |  | 
| Other benefit 2  | List | 

No · Yes | 
| Other benefit 2 monthly accrual  | Number |  | 
| Posting accounts | 
| Salary debit account  | List | 

Pick a ledger account from the chart of accounts | 
| Salary credit account  | List | 

Pick a ledger account from the chart of accounts | 
| EOSB provision debit  | List | 

Pick a ledger account from the chart of accounts | 
| EOSB provision credit  | List | 

Pick a ledger account from the chart of accounts | 
| Annual leave provision debit  | List | 

Pick a ledger account from the chart of accounts | 
| Annual leave provision credit  | List | 

Pick a ledger account from the chart of accounts | 
| Other benefits provision debit  | List | 

Pick a ledger account from the chart of accounts | 
| Other benefits provision credit  | List | 

Pick a ledger account from the chart of accounts | 
| Opening balances | 
| Opening leave days  | Number | Leave balance on the go-live date. | 
| Opening leave provision  | Number |  | 
| Opening EOSB provision  | Number | EOSB accrued up to go-live. | 
| Overtime rules (blank = company default in Payroll Settings) | 
| Normal overtime rate %  | Number | Blank uses the company default in Payroll Settings. | 
| OT-2 rate %  | Number |  | 
| Holiday overtime rate %  | Number | Blank uses the company default. | 
| Maximum overtime hours per month  | Number |  | 
| Working conditions | 
| Standard hours per day (default 8)  | Number |  | 
| Standard working days (default 30)  | Number |  | 
| Weekly rest day (blank = monthly parameters)  | List | 

Sunday · Monday · Tuesday · Wednesday · Thursday · Friday · Saturday | 
| Payment and WPS | 
| Payment method  | List | WPS (bank SIF file), Cheque or Cash.

WPS · Cheque · Cash | 
| Bank name  | Text |  | 
| Bank branch  | Text |  | 
| Account number  | Text |  | 
| Bank IBAN  | Text |  | 
| SWIFT code  | Text |  | 
| WPS agent code (blank = bank account master)  | Text |  | 
| WPS routing code of the employee bank  | Text | The 9-digit routing (agent) code of the employee's bank. | 
| Cash account (for cash payment)  | List | 

Pick a ledger account from the chart of accounts | 
| Overtime expense account (optional)  | List | 

Pick a ledger account from the chart of accounts | 

 

Table columns: Document · Number · Issue date · Expiry date · Notes · Status 

Buttons on this screen
- Report
- General details
- Documents
- Payroll
- Upload photo
- + Add split
- + Add document
- Apply standard accounts
- Save employee 

Good to know
- Salary and IBAN fields show •••• to roles without the Salary and bank data permission.
- Use Template / Import to load all employees at go-live. 

Email address
- The Email address is where payslips, time sheets and other employee reports are sent. In any report window select ✉ Email: the address is taken from here. If it is empty you can type it in the email window and save it to the employee.   

### Payroll Settings

HR & Payroll › Masters & Settings › Employees & payroll setup › Payroll Settings 

Company-wide payroll rules: overtime rates and bases, standard days and hours (the hourly rate = salary ÷ (days × hours)), leave and EOSB provision methods, the leave and EOSB bases and divisors, sick-leave pay, notice compensation, the final settlement deadline and the salary modification approval limits. 

Values the system starts with (change them to match your policy)
| Setting | Starting value | 
| Overtime-1 rate % (first overtime hours of a normal day) (default) | 250 | 
| Overtime-1 base | Full salary | 
| Overtime-2 rate % (later overtime hours of a normal day) (default) | 125 | 
| Overtime-2 base | Basic salary | 
| Holiday overtime rate % (public holidays and weekly rest days) (default) | 150 | 
| Holiday overtime base | Basic salary | 
| Maximum overtime hours per month (0 = no limit) | 100 | 
| Payroll calendar: the payroll month starts on day (1 = the calendar month, 1st to the last day. 21 = from the 21st of the previous month to the 20th) | 1 | 
| Standard working days per month (hourly rate = salary ÷ (days × hours per day)) | 30 | 
| Standard working hours per day | 8 | 
| Annual leave provision method | Monthly days (below) | 
| Leave provision days per month | 2.5 | 
| EOSB in the first year of service | Accrue from day one | 
| Vacation leave pay base | Full salary | 
| End of service base | Basic salary | 
| EOSB cap in months of base (0 = no cap) | 24 | 
| Full-year leave divisor (leave settlement and leave pay) | 333 | 
| Leave days per year of full service (multiplier) | 30 | 
| Under one year: days of service in each block | 30 | 
| Under one year: leave days earned per block of service days | 2 | 
| Under one year (leave settlement): method used by Auto | Category C | 
| Daily rate divisor (salary ÷ days) for leave, EOSB and notice | 30 | 
| Final leave settlement: rate for days already consumed | Full salary | 
| Final leave settlement: rate for days not consumed | Basic salary | 
| Notice compensation rate | Full salary | 
| Contractual notice period in days (default) | 30 | 
| Sick days at full pay | 15 | 
| Sick days at half pay, up to day | 45 | 
| Final settlement payment deadline (days after the leave date; UAE law: 14) | 14 | 
| Salary modification: lock the salary fields in the employee master (changes only through a voucher) | Yes (recommended) | 
| Salary modification: employee must accept the pay revision memo before the new salary is applied | Yes | 
| Salary modification: HR review only up to a monthly gross change of | 500 | 
| Salary modification: HR and Finance review up to | 2000 | 
| Salary modification: HR, Finance and Management approval up to (above this the CEO also approves) | 10000 | 
| Salary modification: effective dates more than this many days in the past need a justification and the CEO approval | 90 | 
| Overtime rate % (old-format timesheets) | 125 | 
| Overtime base (old-format timesheets) | Full salary | 

 How to use it
- Review each rule against company policy and the employment contracts.
- Select Save settings. Payroll already processed keeps the rates it was calculated with.
- Payroll calendar. Enter the day the payroll month starts: 1 for the calendar month, or for example 21 when the payroll of October runs from 21 September to 20 October. The new calendar applies to the payroll periods you create from now on; the periods that already exist keep their dates (change them in Monthly Parameters). 

_[Screenshot: Payroll Settings]_

The Payroll Settings screen 

Buttons on this screen
- Save settings stores the settings for every user.   

### Payroll Projects

HR & Payroll › Masters & Settings › Employees & payroll setup › Payroll Projects 

Payroll projects are cost destinations for salary: a project's work in progress, project cost, admin, selling, manufacturing, site overhead or intercompany. Timesheet hours are charged to them, and the payroll journal debits their accounts. How to use it
- Select + New, enter a code and name.
- Choose the Destination Type and link the project or department.
- Select Apply standard accounts or choose the debit and credit accounts, the default activity and cost category.
- Save. 

_[Screenshot: Payroll Projects]_

The Payroll Projects screen

_[Screenshot: Payroll Projects form]_

The form that opens with + New 

Fields on the “New Payroll Project” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| Destination Type  | List | Project WIP, Project cost, Admin, Selling, Manufacturing WIP / overhead, Site overhead or Intercompany.

Project WIP · Project cost · Admin · Selling · Manufacturing WIP · Manufacturing overhead · Site overhead · Intercompany | 
| Linked Project  | List | 

Pick from the master list | 
| Linked Department  | List | 

Pick from the master list | 
| Cost Centre  | List | The cost centre the amounts are reported under.

Pick from the master list | 
| Work Centre  | Text |  | 
| Debit GL Account  | List | 

Pick a ledger account from the chart of accounts | 
| Credit GL Account  | List | 

Pick a ledger account from the chart of accounts | 
| Default Activity  | List | 

Pick from the master list | 
| Default Cost Category  | Text |  | 
| Allocation Basis  | List | How shared cost is spread: headcount, direct labour hours, revenue or fixed split.

Headcount · Direct labour hours · Revenue · Fixed split | 
| Absorb GL Account  | List | Account credited when overhead is absorbed into projects.

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Payroll Categories

HR & Payroll › Masters & Settings › Employees & payroll setup › Payroll Categories 

A payroll category is a group of employees that are paid and controlled together: Direct Labor, Indirect Labor, Staff, Management. The category decides which employees a time keeper looks after, which period is reconciled together, which timesheets the Payroll Run processes in one go, and who is paid together. It also supplies the default cost centre and the salary expense account for the payroll journal when the employee has none of his own.

Every active employee must have a payroll category: the field Payroll category of the Employee Master is required. Create the categories here first.How to use it
- Select + New. Enter a short Code (DL, IL, ST) and the Name; the Arabic name is optional.
- Choose the Default Cost Center and the GL Account (the salary expense account) used when an employee of the category has none of his own.
- Choose the Time Basis: Punch based (the usual: hours come from the punches) or Standard hours (no punches) for staff who do not punch; their timesheet is made at the standard hours of the shift or the employee.
- Save. Then open each employee in Employees and choose the Payroll category.

_[Screenshot: Payroll Categories]_

Payroll Categories

_[Screenshot: The Payroll category field in the Employee Master]_

The Payroll category field in the Employee Master

Fields on the “New Payroll Category” form
| Field | Type | What to enter / options | 
| Code required | Text | A short code, for example DL. It cannot change once employees, periods or timesheets use it. | 
| Name required | Text | The category name shown in every list and filter. Each name exists once. | 
| Arabic Name  | Text | Optional. | 
| Default Cost Center  | List | The cost centre of the payroll journal when nothing more specific is set.

Pick from the master list | 
| GL Account  | List | The salary expense account used when the employee has no Salary Debit account.

Pick from the master list | 
| Time Basis  | List | How the hours of the category are found.

Punch based · Standard hours (no punches) | 
| Status  | List | Active or Inactive.

Active · Inactive | 

Buttons on this screen
- + New opens the entry form.
- Template downloads a blank Excel sheet for importing records.
- Import loads records from a filled sheet.
- Excel / CSV exports the list.
- Print prints the list.
- Refresh reloads the list.
- Clear clears the search and the filters.
- Edit Delete at the end of each row (a record in use cannot be deleted).

Good to know
- A category cannot be deleted once an employee, a period or a timesheet uses it; set it to Inactive instead. A category cannot become inactive while active employees still use it.
- The payroll category of an employee is kept on the employee record, so the Employee Master, Time Management and the Payroll Run always agree.
- The categories are used by Time Management (reconciling, timesheets, reports), the Payroll Run (it processes one category at a time) and Payroll Payment (pay by category).   

### Analysis Master (employee control)

HR & Payroll › Masters & Settings › Employees & payroll setup › Analysis Master 

Every amount posted to an employee goes to the employee control account with a subgroup code (salary, overtime, EOSB, leave, loans, advances, deductions, additions, back pay…). Each subgroup belongs to a category, posts as debit, credit or addition, and carries the accounts it posts to. Payroll, loans, settlements and vouchers all use these codes. How to use it
- Filter by category or posting type.
- Select Insert to add a subgroup: code, name (English and Arabic), category, posts as, status and accounts (or Apply standard accounts).
- Select Save. 

_[Screenshot: Analysis Master (employee control)]_

The Analysis Master (employee control) screen

_[Screenshot: Analysis Master (employee control) form]_

The form that opens with Insert 

Fields on the “New subgroup” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Subgroup name  | Text |  | 
| Arabic name  | Text | Printed on documents next to the English name. | 
| Category  | List | 

Salary · EOSB · Annual Leave · Loans · Advances · Deductions · Additions · Back Pay · Intercompany · Other | 
| Posts as  | List | 

Debit (D) · Credit (C) · Addition (A) · No posting (N) | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 
| Accounts | 
| Debit account  | List | 

Pick a ledger account from the chart of accounts | 
| Credit account  | List | 

Pick a ledger account from the chart of accounts | 
| Default account (optional)  | List | 

Pick a ledger account from the chart of accounts | 
| Information flags for reports; they do not change the calculations | 
| Affects EOSB  | List | 

No · Yes | 
| Affects Leave  | List | 

No · Yes | 
| Affects Payroll  | List | 

No · Yes | 
| Taxable  | List | 

No · Yes | 
| GOSI Applicable  | List | 

No · Yes | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Group  | List | 

Employee Control Account | 

 

Buttons on this screen
- Employee control statement opens the statement by employee and subgroup.
- Insert adds a subgroup.
- Print Selected prints ticked rows.
- Print All prints the full list.
- Category shows the category view.
- Subgroup shows the subgroup view.
- Accounts shows the accounts of each subgroup.
- Posting rules shows how each subgroup posts.
- Apply standard accounts   

### Employee Expenses Master

HR & Payroll › Masters & Settings › Employees & payroll setup › Employee Expenses Master 

Types of cost paid for employees (visa, medical, Emirates ID, labour card, air ticket, recruitment agency) with their default expense account, used when expenses are analysed by employee. How to use it
- Select + New, enter the name and default GL account, and Save. 

_[Screenshot: Employee Expenses Master]_

The Employee Expenses Master screen

_[Screenshot: Employee Expenses Master form]_

The form that opens with + New 

Fields on the “New Employee Expenses Master” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Default GL Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Template Master

HR & Payroll › Masters & Settings › Hr forms & letters › Template Master 

The wording of every HR letter (offer, contract summary, salary certificate, experience certificate, NOCs, warning, probation confirmation, promotion, resignation acknowledgement). Fields in double braces such as {{employee_name}} are filled from the employee master. Issued letters keep the wording they were issued with. How to use it
- Select + New template (or Duplicate an existing one).
- Enter the name (English and Arabic), category, language, heading and who the letter is for.
- Set up to three approval steps and whether the employee must acknowledge with an e-signature.
- Add entries to be typed for each letter (purpose, date…).
- Write the English text and Arabic text, clicking fields to insert them. Preview with an employee.
- Select Save template. 

_[Screenshot: Template Master]_

The Template Master screen

_[Screenshot: Template Master form]_

The form that opens with + New template 

Fields on the “New template” form
| Field | Type | What to enter / options | 
| Template name  | Text |  | 
| Name in Arabic  | Text |  | 
| Category  | List | 

Offer · Experience · Salary · NOC · Warning · Policy | 
| Language  | List | 

English · Arabic · Bilingual | 
| Heading on the letter  | Text |  | 
| Heading in Arabic  | Text |  | 
| The letter is for  | List | 

An employee in the employee master · A candidate who is not yet an employee | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 
| Approval and acknowledgement | 
| Approval step 1  | List | 

Pick from the master list | 
| Approval step 2  | List | 

Pick from the master list | 
| Approval step 3  | List | 

Pick from the master list | 
| Employee acknowledgement with e-signature  | List | 

No · Yes | 
| Wording beside the signature  | Text |  | 
| Letter text | 
| Preview with  | List | 

Pick from the master list (Sample employee also offered) | 

 

Table columns: KEY · LABEL · TYPE · REQUIRED · DEFAULT · CHOICES 

Buttons on this screen
- Letter settings letterhead and numbering of letters.
- + New template
- Letter categories
- Letter requests
- Duplicate
- Deactivate
- Use starts a letter request from the template.
- + Add entry
- English text
- Arabic text
- Save template   

### Letter Categories

HR & Payroll › Masters & Settings › Hr forms & letters › Letter Categories 

Categories that group letter templates: Offer, Experience, Salary, NOC, Warning, Policy. How to use it
- Select + New, enter the name in English and Arabic, and Save. 

_[Screenshot: Letter Categories]_

The Letter Categories screen

_[Screenshot: Letter Categories form]_

The form that opens with + New 

Fields on the “New Letter Category” form
| Field | Type | What to enter / options | 
| Information | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Competency Master

HR & Payroll › Masters & Settings › Appraisal & goals › Competency Master 

The competencies employees are rated on (technical, behavioural, core values, leadership), with Arabic names and descriptions. Cycles choose which competencies apply and their weights. How to use it
- Select + New, enter name, Arabic name, category and description, and Save. 

_[Screenshot: Competency Master]_

The Competency Master screen

_[Screenshot: Competency Master form]_

The form that opens with + New 

Fields on the “New Competency Master” form
| Field | Type | What to enter / options | 
| Information | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| Category  | List | 

Leadership · Technical · Behavioral · Core Values | 
| Description  | Text | A short description. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Appraisal Cycles

HR & Payroll › Masters & Settings › Appraisal & goals › Appraisal Cycles 

An appraisal cycle is one review round (annual, semi-annual, quarterly or probation) with its dates, reviewers, rating scale, weights, competencies and bonus policy. Status: Planning → Active (appraisals created) → In Review → Calibration → Completed → Closed. How to use it
- Select + New cycle.
- 1. Enter code, name, type, fiscal year, start / end and ratings due date, and who it applies to.
- 2. Choose self-review, peer and direct-report feedback.
- 3. Choose the rating scale.
- 4. Set goals vs competencies weights and competency weights (Equal weights to share evenly).
- 5. Choose the bonus policy.
- Select Save cycle, then activate it to create the appraisals. 

_[Screenshot: Appraisal Cycles]_

The Appraisal Cycles screen

_[Screenshot: Appraisal Cycles form]_

The form that opens with + New cycle 

Fields on the “New appraisal cycle” form
| Field | Type | What to enter / options | 
| 1. The cycle | 
| Cycle code  | Text |  | 
| Cycle name  | Text |  | 
| Cycle type  | List | 

Annual · Semi-Annual · Quarterly · Probation | 
| Fiscal year  | Number |  | 
| Period (optional, e.g. H1 or Q3)  | Text |  | 
| Starts  | Date |  | 
| Ends  | Date |  | 
| Ratings due by  | Date |  | 
| Applies to  | List | 

All active employees · One department · Joined during the period (probation) | 
| Create the first appraisal for new joiners automatically  | List | 

Yes · No | 
| 2. Who reviews | 
| Employee self-review  | List | 

Yes · No | 
| Peer feedback (360)  | List | 

No · Yes | 
| Direct-report feedback  | List | 

No · Yes | 
| 3. Rating scale | 
| Scale  | List | 

1 to 5 · 1 to 3 · Descriptive (my own labels) | 
| Decimal places in the final rating  | List | 

0 · 1 · 2 | 
| 4. Weights and competencies | 
| Goals section weight (%)  | Number |  | 
| Competencies section weight (%) automatic | Number |  | 
| 5. Bonus and notes | 
| Bonus policy  | List | 

No bonus · Standard Performance Bonus | 
| Notes  | Text |  | 

 

Table columns: COMPETENCY · CATEGORY · WEIGHT % 

Buttons on this screen
- ⚙ Settings
- + New cycle
- Goals
- Appraisals
- Equal weights
- Save cycle   

### Bonus Policy

HR & Payroll › Masters & Settings › Appraisal & goals › Bonus Policy 

Bonus tiers by appraisal score: minimum and maximum score %, and the bonus as a percentage of basic or gross or a fixed amount. How to use it
- Select + New, enter policy, tier, score range, bonus type and value, and Save. 

_[Screenshot: Bonus Policy]_

The Bonus Policy screen

_[Screenshot: Bonus Policy form]_

The form that opens with + New 

Fields on the “New Bonus Policy” form
| Field | Type | What to enter / options | 
| Information | 
| Policy  | Text |  | 
| Tier  | Text |  | 
| Min Score %  | Number |  | 
| Max Score %  | Number |  | 
| Bonus Type  | List | 

Percentage of Basic · Percentage of Gross · Fixed Amount | 
| Bonus Value  | Number |  | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Appraisal Settings

HR & Payroll › Masters & Settings › Appraisal & goals › Appraisal Settings 

Rules for every appraisal cycle: which roles review, calibrate, finalise and create bonus additions; the score below which an improvement plan is recommended; calibration limits; critical-goal cap; suggested goal ratings; department variance flag; record retention. How to use it
- Select Change settings, tick roles and set the rating rules, then Save settings. 

_[Screenshot: Appraisal Settings]_

The Appraisal Settings screen

_[Screenshot: Appraisal Settings form]_

The form that opens with Change settings 

Fields on the “Appraisal settings” form
| Field | Type | What to enter / options | 
| Who can do each step | 
| HR  | Tick box |  | 
| Management  | Tick box |  | 
| Finance Manager  | Tick box |  | 
| Accountant  | Tick box |  | 
| Payroll Officer  | Tick box |  | 
| Project Manager  | Tick box |  | 
| Storekeeper  | Tick box |  | 
| Procurement  | Tick box |  | 
| Rating rules | 
| Improvement plan below a score of (%)  | Number |  | 
| Default length of an improvement plan (days)  | Number |  | 
| Calibration: largest adjustment (± rating points)  | Number |  | 
| A critical goal has failed below (% of the top rating)  | Number |  | 
| …and the overall rating is then capped at (% of the top rating)  | Number |  | 
| Suggested rating: lowest achievement (%) = rating 1  | Number |  | 
| Suggested rating: achievement (%) that earns the top rating  | Number |  | 
| Department average differs from the company by more than (rating points)  | Number |  | 
| Keep appraisal records for (years)  | Number |  | 

 

Buttons on this screen
- Change settings unlocks the settings for editing.
- Competency master
- Bonus policy
- Appraisal cycles
- Save settings stores the settings for every user.   

### Onboarding Templates

HR & Payroll › Masters & Settings › Recruitment & onboarding › Onboarding Templates 

Checklists created for each new hire: tasks for HR, IT, Manager, Employee, Finance and Admin with due days from the start date, mandatory and before-hire flags, and data the task captures. How to use it
- Select + New template (or Duplicate), set the department / position it applies to.
- Add tasks with phase, owner role, due days and flags. Sort by due date.
- Select Save template. 

_[Screenshot: Onboarding Templates]_

The Onboarding Templates screen

_[Screenshot: Onboarding Templates form]_

The form that opens with + New template 

Fields on the “New onboarding template” form
| Field | Type | What to enter / options | 
| Template name required | Text |  | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 
| For department (optional)  | List | 

Pick from the master list (Any department also offered) | 
| For position (optional)  | List | 

Pick from the master list (Any position also offered) | 
| Description  | Text | A short description. | 

 

Table columns: # · TASK · PHASE · DONE BY · DUE (DAYS) · MANDATORY · BEFORE HIRE · CATEGORY · CAPTURES DATA · DONE AUTOMATICALLY · NOTE 

Buttons on this screen
- Settings
- + New template
- Duplicate
- Deactivate
- + Add task
- Sort by due date
- Save template   

### Recruitment Settings

HR & Payroll › Masters & Settings › Recruitment & onboarding › Recruitment Settings 

Recruitment rules: who approves requisitions, who hires, who completes onboarding tasks per role, which documents are needed before the employee record is created, offer defaults and candidate sources. How to use it
- Select Change settings, adjust and Save settings. 

_[Screenshot: Recruitment Settings]_

The Recruitment Settings screen

_[Screenshot: Recruitment Settings form]_

The form that opens with Change settings 

Fields on the “Recruitment settings” form
| Field | Type | What to enter / options | 
| Who can do each step | 
| HR  | Tick box |  | 
| Management  | Tick box |  | 
| Finance Manager  | Tick box |  | 
| Accountant  | Tick box |  | 
| Payroll Officer  | Tick box |  | 
| Project Manager  | Tick box |  | 
| Storekeeper  | Tick box |  | 
| Procurement  | Tick box |  | 
| Who completes the onboarding tasks of each role | 
| HR  | Tick box |  | 
| Management  | Tick box |  | 
| Finance Manager  | Tick box |  | 
| Accountant  | Tick box |  | 
| Payroll Officer  | Tick box |  | 
| Project Manager  | Tick box |  | 
| Storekeeper  | Tick box |  | 
| Procurement  | Tick box |  | 
| Before the employee record is created | 
| Passport number and expiry date  | Tick box |  | 
| Emirates ID number and expiry date  | Tick box |  | 
| Visa number and expiry date  | Tick box |  | 
| IBAN (valid UAE IBAN, for WPS)  | Tick box | The 23-character UAE IBAN starting with AE. | 
| MOL ID (for WPS)  | Tick box |  | 
| Flag a document that expires within (days)  | Number |  | 
| Create the employee record  | List | 

Automatically when everything is ready · Only when HR presses the button | 
| Defaults and sources | 
| Offer valid for (days)  | Number |  | 
| Probation (months, up to 6)  | Number |  | 
| Annual leave (days)  | Number |  | 
| Notice period (days)  | Number |  | 
| Flag a requisition open for more than (days)  | Number |  | 
| Candidate sources (one per line)  | Long text |  | 

 

Buttons on this screen
- Change settings unlocks the settings for editing.
- Job requisitions
- Onboarding templates
- Letter templates (offer letter)
- Save settings stores the settings for every user.   

### Renewal Settings

HR & Payroll › Masters & Settings › Renewals & clearance › Renewal Settings 

Document types for vehicles and machinery, employees and permits, with the usual issuer, validity and alert days; and the petty cash clearance rules (who clears, whether leave or final settlement is blocked while cash is not cleared, when cash is overdue). How to use it
- Select Change rules to set who renews documents and clears petty cash, and the blocking rules.
- Select + New document type to add a type with validity and alert days. 

_[Screenshot: Renewal Settings]_

The Renewal Settings screen

_[Screenshot: Renewal Settings form]_

The form that opens with + New document type 

Fields on the “New document type” form
| Field | Type | What to enter / options | 
| For  | List | 

Vehicle & Machinery · Employee · Permits | 
| Type name required | Text |  | 
| Usual issuer  | Text |  | 
| Usual validity (months) required | Number |  | 
| Alert before the expiry (days) required | Number |  | 
| Must be recorded for every vehicle / employee  | List | 

No · Yes | 
| New validity starts the day after the current expiry  | List | 

No · Yes | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 
| Other names used for this document in the Asset Register or the Employee Documents tab (separate with ;)  | Long text |  | 

 

Buttons on this screen
- Change rules
- + New document type
- Overview
- Vehicles & Machinery
- Employee Documents
- Issued Permits
- Exit Notices
- Petty Cash Clearance
- All
- Vehicle & Machinery
- Employee
- Permits
- Deactivate  

### Transactions  

### Monthly Parameters

HR & Payroll › Transactions › Monthly payroll › Monthly Parameters 

Each payroll month needs approved parameters: weekly rest days, holidays and standard hours per day. From them the system works out the working days and every employee's budget hours on the timesheet. Status: Draft → Approved → Locked.

The payroll period. Each month has a Period from and a Period to. They are filled from the payroll calendar in Payroll Settings (1st to the last day, or for example 21st to 20th) and can be changed for one month. The time sheets, the budget hours, the pay sheet and the WPS file all use these dates.

Budget hours of an employee. They are counted from the later of the period start, the join date and the last rejoin date (a new joiner who never went on leave is counted from the join date) to the end of the period or the last working day. Rest days and public holidays are not budget days, and annual leave days from the Leave Register are left out, because they are settled in the Annual Leave Settlement. In a Ramadan period the Ramadan hours of the shift assignment are used. How to use it
- Select + New period, enter the year and month and standard hours per day.
- Tick the weekly rest days (for example Saturday and Sunday).
- Select Load from Holiday Calendar (the list kept in Time Management › Public Holidays) or + Add holiday.
- Check the line: calendar days − rest days − holidays = working days × hours = budget hours.
- Save, then Approve. 

_[Screenshot: Monthly Parameters]_

The Monthly Parameters screen

_[Screenshot: Monthly Parameters form]_

The form that opens with + New period 

Fields on the “New payroll period” form
| Field | Type | What to enter / options | 
| Year  | Number | The calendar year. | 
| Month  | List | The month (1 to 12).

Jan · Feb · Mar · Apr · May · Jun · Jul · Aug · Sep · Oct · Nov · Dec | 
| Standard hours per day  | Number |  | 
| Period from  | Date | The first day of the payroll period (from the payroll calendar). | 
| Period to  | Date | The last day of the payroll period. | 
| Weekly rest days | 
| Sunday  | Tick box |  | 
| Monday  | Tick box |  | 
| Tuesday  | Tick box |  | 
| Wednesday  | Tick box |  | 
| Thursday  | Tick box |  | 
| Friday  | Tick box |  | 
| Saturday  | Tick box |  | 

 

Table columns: DATE · NAME · TYPE 

Buttons on this screen
- + New period
- Budget hours shows each employee's budget hours for the month.
- Reopen
- Lock
- + Add holiday
- Load from Holiday Calendar   

### Timesheet

HR & Payroll › Transactions › Monthly payroll › Timesheet 

Monthly attendance per employee: payroll project, activity, budget hours, attendance, holiday, annual leave, sick and absent hours, and normal, OT-2 and holiday overtime. The check column flags lines that need correction. Status: Draft → Confirmed → Approved. How to use it
- Choose the Year and Month (the parameters must be approved).
- Select Load employees to create a line per active employee, or Download template and Bulk import from Excel.
- On each line choose the payroll project and activity and enter the hours and overtime. Use ⋯ for line details.
- Select Confirm all shown. Lines with a ⚠ need correction and stay in draft.
- Select Approve all confirmed. Use Return to draft to reopen. 

_[Screenshot: Timesheet]_

The Timesheet screen

_[Screenshot: Timesheet with timesheets from Time Management]_

Timesheets approved in Time Management arrive here, approved, with their number 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Year  | Number | The calendar year. | 
| Month  | List | The month (1 to 12).

Jan · Feb · Mar · Apr · May · Jun · Jul · Aug · Sep · Oct · Nov · Dec | 

 

Columns shown: Code · Name · Designation · Payroll project · Activity · Budget hrs · Attendance · Holiday · Annual leave · Sick · Absent · Total · Normal OT · OT-2 · Holiday OT · Status · Check 

Buttons on this screen
- Download template
- Bulk import
- Load employees
- Confirm all shown
- Approve all confirmed
- Return to draft 

Good to know
- With Time Management the timesheets are generated from the reconciled punches and approved in Timesheet Generation & Approval. An approved one appears on this screen with its number (⏱ TSH-…), already approved; it cannot be changed or deleted here: return it to draft in Time Management.
- A missing payroll project is the most common reason a line cannot be confirmed: set the default payroll project on the employee.   

### Additions

HR & Payroll › Transactions › Monthly payroll › Additions 

Bonus, commission, allowances, reimbursements, air tickets and other payments. Each one is numbered, goes through HR review → Finance review → Management approval, then posts Dr expense / Cr Employee Clearing. The payroll run pays it in the month of its effective date. How to use it
- Select + New addition, choose the employee and type, the document date and the Effective date (payroll month), the amount, project and cost centre.
- Use the GL posting tab to check the entry.
- Select Send for approval. 

_[Screenshot: Additions]_

The Additions screen

_[Screenshot: Additions form]_

The form that opens with + New addition 

Fields on the “Addition (new) Draft” form
| Field | Type | What to enter / options | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list (Select employee also offered) | 
| Addition type  | List | 

Bonus · Commission · Overtime · Allowance · Reimbursement · Air Ticket · Other | 
| Document date (journal date)  | Date |  | 
| Effective date (payroll month)  | Date |  | 
| Amount (AED)  | Number | The amount before VAT. | 
| Project (optional)  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Description  | Text | A short description. | 

 

Buttons on this screen
- ⚙ Setup
- + New addition
- Header
- GL posting
- Approval history
- Close
- Save draft
- Send for approval 

Good to know
- Status flow: Draft → HR Review → Finance Review → Management Approval → Approved → Posted → Applied.
- Approval steps follow the role permissions set in Role Permissions (HR review, Finance review, Management approval).   

### Deductions

HR & Payroll › Transactions › Monthly payroll › Deductions 

Fines, damage recoveries, utility bills, card replacements, insurance and other amounts taken from salary, in one or several monthly instalments. Posting debits Employee Clearing and credits the recovery account; payroll deducts each instalment on schedule. How to use it
- Select + New deduction, choose employee and type, the first payroll month, total amount and number of deductions (the instalment is calculated).
- Check the Deduction schedule tab.
- Select Send for approval. 

_[Screenshot: Deductions]_

The Deductions screen

_[Screenshot: Deductions form]_

The form that opens with + New deduction 

Fields on the “Deduction (new) Draft” form
| Field | Type | What to enter / options | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list (Select employee also offered) | 
| Deduction type  | List | 

Penalty / Fine · Damage Recovery · Utility Bills Recovery · Access Card Replacement · Insurance · Advance / Loan Recovery · Recovery · Other | 
| Document date (journal date)  | Date |  | 
| First deduction (payroll month)  | Date |  | 
| Amount (AED)  | Number | The amount before VAT. | 
| Number of deductions  | Number |  | 
| Amount of each deduction  | Number |  | 
| Project (optional)  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Description  | Text | A short description. | 

 

Buttons on this screen
- ⚙ Setup
- + New deduction
- Header
- Deduction schedule
- GL posting
- Approval history
- Close
- Save draft
- Send for approval 

Good to know
- All deductions together may not exceed 50% of the salary (UAE law); the payroll run respects the limit.   

### Salary Modification

HR & Payroll › Transactions › Monthly payroll › Salary Modification 

Every salary change goes through a voucher: approvals according to the size of the change, back pay for past effective dates, a journal, a pay revision memo and the employee's acceptance. Workflow: Draft → HR Review → Finance Review → Management Approval → CEO Approval (when required) → Approved → Posted → Applied. How to use it
- Select + New voucher, choose the employee, voucher date, Effective date and Reason.
- Enter the new salary components; the comparison shows old, new and difference.
- Add a justification when the effective date is far in the past.
- Select Preview memo, then Save and submit for approval. 

_[Screenshot: Salary Modification]_

The Salary Modification screen

_[Screenshot: Salary Modification form]_

The form that opens with + New voucher 

Fields on the “New salary modification voucher” form
| Field | Type | What to enter / options | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list (Select employee also offered) | 
| Voucher date  | Date |  | 
| Effective date  | Date |  | 
| Reason  | List | Annual Increment, Promotion, Market Adjustment, Correction, Restructuring, Demotion or Other.

Annual Increment · Promotion · Market Adjustment · Correction (error fix) · Restructuring · Demotion · Other | 
| Justification (for management review; required when the effective date is more than 90 days in the past)  | Long text |  | 
| Salary comparison | 
| Notes  | Long text |  | 

 

Buttons on this screen
- + New voucher
- Salary modification reports
- Preview memo
- Save draft
- Save and submit for approval   

### Payroll Run

HR & Payroll › Transactions › Monthly payroll › Payroll Run 

Processes the approved timesheets, additions, deductions and loan instalments into the payroll for the month. Review and edit the preview, approve, then create and post the journal voucher. Status: Processed → Approved → Posted → Paid. How to use it
- Choose the Year and Month, the Payroll category (and one employee if needed).
- Select 1. Process payroll. Review gross pay, overtime, additions, deductions and net pay per employee; edit lines if needed.
- Select 2. Approve payroll.
- Select 3. Create JV and post. The journal charges salary cost to each payroll project and department and accrues the leave, EOSB and benefit provisions.
- Use Return to processed to reopen an approved (unposted) payroll.
- To take a whole month back, select Delete month payroll…: it opens Delete Month Payroll, which goes back step by step (payment, journal entry, payroll run, time sheets, time management).
- When the month is paid and checked, select 4. Lock period so the payroll can no longer change.
- Select Print for the payroll sheet; View on a line shows the employee's calculation. 

_[Screenshot: Payroll Run with the payroll category list]_

The Payroll Run: category list, yellow rows with ⚠

_[Screenshot: Payroll review]_

The Payroll review under the table: hours, additions, deductions and the adjustment reasonPayroll by category and the payroll review

Next to the employee list there is a Payroll category list. Choose a category (for example Direct Labor) and every step, 1. Process payroll, 2. Approve payroll, 3. Create JV and post and Return to processed, works on that category only. All categories works on everyone; (No category) shows the employees that have none.

Step 1 loads only approved timesheets (from Time Management) of the category and month. An employee without an approved timesheet is skipped; the Payroll review panel says how many, and who? lists them.

Payroll review. The panel under the table lists every employee of the run with the budget hours, the payable hours and the difference. A row is yellow (⚠ beside the name in the table) when the payable hours differ from the budget hours by more than the tolerance (Time Management › Settings & Roles › Rules, 1 hour as standard). Every yellow row needs an Adjustment reason before the payroll can be approved. In the same panel you can add an Addition (Bonus, Allowance, Other addition) or a Deduction (Loan, Advance, Penalty, Other deduction): type the amount and a reason, then leave the box; the net salary updates at once and the amounts are posted with the payroll of the employee.

After posting, the timesheets of the posted employees become Processed in Time Management.

Paid leave and leave settlements. The days entered as Paid Leave in the Leave Register are paid with the salary of the month, and at posting their pay is charged to the annual leave provision as an advance. An Annual Leave Settlement that was set to Pay with Salary for this month is added to the employee's pay as an addition. 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Year  | Number | The calendar year. | 
| Month  | List | The month (1 to 12).

Jan · Feb · Mar · Apr · May · Jun · Jul · Aug · Sep · Oct · Nov · Dec | 

 

Columns shown: Emp ID · Name · Payroll project · Status · Gross · Absence + sick · Overtime · OT-2 · Holiday OT · Additions · Other ded. · Net salary · Leave prov. · EOSB prov. · Benefits · Total cost 

Buttons on this screen
- 1. Process payroll loads the approved timesheets of the category.
- 2. Approve payroll
- 3. Create JV and post
- Return to processed
- Delete month payroll… opens the screen that takes a month back step by step (shown to roles that can approve payroll).
- 4. Lock period
- View   

### Delete Month Payroll

HR & Payroll › Transactions › Monthly payroll › Delete Month Payroll 

Takes a payroll month back one step at a time, in the reverse order it was built: Payment → Journal entry → Payroll run → Time sheets → Time management. Nothing is deleted from the accounts: payments and journals are reversed with contra entries, and every step is written to a history with the user, the reason and what was done. You can go back one step, or delete everything back to a stage you choose.How to use it
- Choose the Year and Month. The five cards show how much exists at each stage (payment vouchers, journals, payroll lines, time sheets, reconciled periods). The red card with Next step back is the stage that will be undone next. Select any card to see what it holds.
- Under Next step back read what the step does. For a payment or a journal you may enter a Reversal date (leave it empty to reverse on the date of the original entry; enter a date when the original period is closed in the accounts).
- Enter the Reason (required).
- Select Step back: … to undo this stage only, or choose a stage in Or delete everything back to and select Delete back to selected. Confirm the question.
- The history of the month at the bottom lists every step that was taken back.

_[Screenshot: Delete Month Payroll]_

Delete Month Payroll: the five stages, the next step back and the history

What each step does
| Step | What happens | 
| Payment | The payment journal of every payment voucher of the month is reversed with contra entries, the voucher is marked reversed, the WPS record is marked reversed, and the paid lines return to Posted (payable again). Annual leave settlements that were paid with the salary go back to to be paid with the salary. | 
| Journal entry | The payroll journal of the month is reversed with contra entries and marked cancelled in the journal register. The lines return to Approved and the time sheets from Processed to Approved. | 
| Payroll run | The processed and approved payroll lines of the month are deleted. The additions, deductions, loan instalments, back pay and annual leave settlements that were included become available for the next payroll run. | 
| Time sheets | The approved time sheets (Time Management and HR & Payroll) of the month return to Draft, to be corrected and approved again. | 
| Time management | The reconciled attendance period is reopened: punches and exceptions can be edited again and the draft time sheets are removed (they are generated again after the next Reconcile & Approve). | 

Fields on the screen
| Field | Type | What to enter / options | 
| Year  | Number | The payroll year. | 
| Month  | List | The payroll month.

Jan · Feb · Mar · Apr · May · Jun · Jul · Aug · Sep · Oct · Nov · Dec | 
| Reversal date  | Date | Optional. Used by the payment and journal steps only. | 
| Reason required  | Long text | Why the payroll is taken back. It is kept in the history and in the activity log. | 
| Or delete everything back to  | List | The last stage to undo. The stages between the next step and the one you choose are undone in order. | 

Buttons on this screen
- Step back: … undoes the next stage only.
- Delete back to selected undoes every stage down to the one you chose.
- Unlock in the banner of a locked period.

Good to know
- It needs the permission to approve payroll. Other roles see the screen but cannot step back.
- All or nothing. The checks are made before each step. If a step cannot be done, nothing is changed and the message says why; for example a payment voucher whose reversal date falls in a closed accounting period, a locked payroll period (unlock it with 4. Lock period on the Payroll Run), or a payroll line used by a Final Settlement.
- A payment voucher that also paid other months is reversed as a whole; the confirmation says so and those months become payable again.
- The steps appear only when there is something to undo: a month that was never paid starts at the journal entry or the payroll run.
- Once the run is deleted you can process the month again from Payroll Run.   

### Payroll Payment

HR & Payroll › Transactions › Monthly payroll › Payroll Payment 

Pays posted payroll by WPS bank transfer, cheque or cash (from each employee's payment method). The payment clears salaries payable and credits the bank or cash account, and produces the WPS salary file for the bank. How to use it
- Filter by period, sponsoring company, payment method, payroll category, department or employee (or select Pay all).
- Choose the Bank account and Payment date, and tick the employees.
- Select Process payment.
- Choose the WPS file format (bank CSV or UAE SIF with EDR/SCR records) and select Generate WPS file. Upload it to the bank portal.
- Use Payment sheet by sponsor for the signed payment list. 

_[Screenshot: Payroll Payment with the category, department and employee lists]_

The Payroll Payment screen: pay by category, department or employee, or Pay allPay by category, department or employee

Besides the period, the sponsoring company and the payment method, the bar has three more lists: Payroll category (one category, All categories (pay all) or (No category)), Department and Employee. Choose one to list only those payroll lines, tick the ones to pay and process the payment as usual. Pay all clears the three lists and ticks everything that is posted and not yet paid. The bank, the payment date and the WPS file work as before; the WPS file holds the lines that are listed and ticked. 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Bank account  | List | 

Pick from the master list (Select bank also offered) | 
| Payment date  | Date |  | 
| WPS file  | List | 

CSV (bank sheet layout) · UAE SIF (EDR / SCR) | 

 

Columns shown: Period · Emp ID · Name · MOL ID · Method · Bank · IBAN · Net salary · JV 

Buttons on this screen
- Pay all clears the filters and ticks every unpaid line.
- Process payment (1)
- Generate WPS file
- Payment sheet by sponsor 

Good to know
- WPS needs every employee's MOL ID, IBAN and routing code, and the company MOL establishment ID.   

### Loans & Advances

HR & Payroll › Transactions › Loans & leave › Loans & Advances 

Salary advances and personal, car, housing or emergency loans. Each goes through approval, needs the signed agreement and the employee's written consent, is paid out (Dr Loans to Employees, Cr Bank), and is recovered by payroll within the legal limits (20% of salary per loan, 50% for all deductions). A final settlement recovers any balance. How to use it
- Select + New loan / advance, choose the employee and type, amount, interest (normally None), repayment frequency, first deduction month and number of instalments.
- Check the Repayment schedule.
- Select Send for approval. After approval, disburse it; payroll then recovers each instalment. 

_[Screenshot: Loans & Advances]_

The Loans & Advances screen

_[Screenshot: Loans & Advances form]_

The form that opens with + New loan / advance 

Fields on the “Personal Loan (new) Draft” form
| Field | Type | What to enter / options | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list (Select employee also offered) | 
| Loan type  | List | 

Salary Advance · Personal Loan · Car Loan · Housing Loan · Emergency | 
| Document date (journal date)  | Date |  | 
| Loan amount (AED)  | Number |  | 
| Interest  | List | 

None · Simple · Reducing | 
| Interest rate (% a year) automatic | Number |  | 
| Repayment frequency  | List | 

Monthly · Semi-Monthly | 
| First deduction (payroll month)  | Date |  | 
| Number of installments (most 60)  | Number |  | 
| Installment amount  | Number |  | 
| Deduction cap (% of monthly salary, at most 20)  | Number |  | 
| Project (optional)  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Purpose  | Text |  | 

 

Buttons on this screen
- ⚙ Setup
- + New loan / advance
- Header
- Repayment schedule
- GL posting
- Approval history
- Close
- Save draft
- Send for approval 

Good to know
- Status flow: Draft → HR / Finance / Management review → Approved → Disbursed → Repaying → Settled (or Written Off).   

### Leave Register

HR & Payroll › Transactions › Loans & leave › Leave Register 

The one register of leave and absence: annual leave, paid leave, absent, sick and unpaid leave. You enter the leave date and the expected rejoin; the Days and the Excess Days are worked out for you. The Annual Leave Settlement starts from an entry of this register (it has no register of its own), Time Management reads it for the budget hours and the payroll reads it for the pay. It also records the company assets the employee holds while away (vehicle, pass, petty cash, keys, laptop, phone), printed on the Leave Application Form and checked on return. How to use it
- Select + New, choose the Employee and the Entry Type.
- Enter the Leave Date and the Expected Rejoin. Days and Excess Days (auto) appear at once, with a line that shows the days earned on the leave date, the days already taken and the balance.
- Fill contact details during leave and tick the company assets held.
- Save. The employee's Last leave date is updated. To pay the leave, select Settle on the row (or recall the entry in Annual Leave Settlement). 

_[Screenshot: Leave Register form]_

The form that opens with + New: the days and the excess days are calculated from the two dates 

Fields on the “New Leave Register” form
| Field | Type | What to enter / options | 
| General information | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list | 
| Entry Type  | List | Paid Leave is leave that is paid with the salary of the month in advance of the annual leave settlement (see below). Annual leave is paid in the settlement.

Annual leave · Absent · Sick leave · Unpaid leave · Paid Leave | 
| Leave Date  | Date | The first day of the leave. | 
| Expected Rejoin  | Date | The day the employee is expected back. The leave runs up to the day before it. The real rejoin date is entered in Rejoin Entry. | 
| Days  | Number | Automatic: the days from the leave date to the day before the expected rejoin. | 
| Excess Days (auto)  | Number | Automatic: the days of this leave that are more than the employee has earned since the last rejoin (annual leave and paid leave draw on the same balance, absences reduce it). The excess is carried to the settlement. | 
| Additional details | 
| Designation (auto)  | Text |  | 
| Last Rejoin (auto)  | Text |  | 
| Department (auto)  | Text | The department responsible. | 
| Contact During Leave  | Text |  | 
| City  | Text |  | 
| Email  | Text | Main contact email. | 
| Application Date  | Date |  | 
| Remarks | 
| Remarks  | Text | Free notes. They print on the document. | 
| Company assets & liabilities held | 
| Vehicle  | Tick box |  | 
| Security pass / ID  | Tick box |  | 
| Petty cash float  | Tick box |  | 
| Accommodation keys  | Tick box |  | 
| Laptop / IT equipment  | Tick box |  | 
| Mobile phone  | Tick box |  | 
| Other  | Tick box |  | 

 

Good to know
- The return is recorded only in Rejoin Entry.
- Paid Leave. The days are paid with the salary of the month (they are not deducted). When the payroll is posted, the pay of those days is charged to the employee's annual leave provision as an advance (shown in the provision schedule as Paid leave (advance)), and the same days are taken off the eligible days in the next Annual Leave Settlement. A day that is not in the register as Paid Leave is never paid as leave: a missing day is an absence or undertime.
- An entry that already has a settlement cannot be changed or deleted while the settlement is posted. The register row shows the settlement number.
- Annual leave days are left out of the budget hours of the month (see Monthly Parameters).
- With the petty cash rule on, leave is blocked while the employee's petty cash is not cleared.   

### Rejoin Entry

HR & Payroll › Transactions › Loans & leave › Rejoin Entry 

Records the return from leave. Saving a rejoin closes the leave, adds the days actually taken to the leave ledger, works out any overstay and its deduction, and updates the Last Rejoin Date. The screen lists employees on leave, overdue returns and the rejoin history. How to use it
- Find the employee in Employees on leave: waiting for the rejoin entry.
- Enter the actual rejoin date and confirm the return of company assets.
- Save. 

_[Screenshot: Rejoin Entry]_

The Rejoin Entry screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Rejoined from  | Date |  | 
| to  | Date |  | 

 

Buttons on this screen
- Leave Register
- Print forms
- Clear filters   

### Annual Leave Settlement

HR & Payroll › Transactions › Loans & leave › Annual Leave Settlement 

Pays the annual leave an employee has earned, as regular leave or on final settlement. A regular settlement starts from the Leave Register: you recall the leave entry and the employee, the leave date, the days and the excess days come from it, so the leave is entered once. Posting clears the leave provision and charges or credits the difference to expense. Workflow: Draft → Prepared → Approved → Posted → Paid → Closed. How to use it
- Enter the leave first in Leave Register (leave date and expected rejoin). Then select + New settlement: the list of register entries that are not settled yet opens. Search the employee and select Recall (or select Settle on the row in the register).
- Check the Settlement date. The employee and the leave date follow the register; change them there, not here. Leave Eligibility category on Auto, or choose Category A (first year), B (full year) or C (under one year, 2 days per 30).
- Review the eligible days and the amount. When the employee took Paid Leave before, the screen shows Earned leave days, Less: paid leave already taken in advance and the net eligible days.
- Save, then approve and post.
- Select Pay. Choose the payment method; with Pay with Salary you also choose the payroll month that pays it (see below).
- For an employee who is leaving, use Final settlement form… at the bottom of the list: it needs no register entry. 

_[Screenshot: Annual Leave Settlement]_

The Annual Leave Settlement screen

_[Screenshot: Pay with salary]_

Pay: choose Pay with Salary and the processing month 

Fields on the “New annual leave settlement” form
| Field | Type | What to enter / options | 
| Settlement type  | List | 

Regular leave · Final settlement | 
| Employee  | List | From the Leave Register entry that was recalled (locked). A final settlement lets you choose the employee. | 
| Settlement date  | Date | The date the settlement is made. | 
| Leave date  | Date | From the Leave Register entry (locked). | 
| Eligibility category  | List | 

Auto (by service) · Category A: first year, 30 days on 365 · Category B: full year · Category C: under one year, 2 days per 30 | 
| Notes  | Long text |  | 

 Paying with the salary

In the payment box the first payment method is Pay with Salary, with the Processing month and year beside it (the first payroll month from the settlement date that is still open is suggested). The settlement stays Posted and is marked To be paid with the salary of Nov 2026. When you run that month's payroll, the amount is added to the employee's pay as an addition with the settlement number, and when the payroll is paid (bank transfer or WPS) the settlement becomes Paid automatically, with the payment number. Until the payroll takes it, Cancel pay with salary removes the instruction. If you choose a month whose payroll is already processed, process it again so the amount is included.

To reverse a settlement that was paid with the salary, first take that month's payroll back in Delete Month Payroll; the settlement returns to to be paid with the salary and can then be reversed or paid another way.

Buttons on this screen
- + New settlement opens the Leave Register entries to recall.
- Recall starts the settlement of that leave.
- Final settlement form… for an employee who is leaving, without a register entry.
- Save settlement
- Pay opens the payment box (Pay with Salary, bank transfer, WPS, cheque or cash).
- Cancel pay with salary removes the instruction before the payroll has taken it.   

### EOSB Calculator

HR & Payroll › Transactions › Exit & adjustments › EOSB Calculator 

A calculator for the end of service benefit (and leave) of any employee on a chosen leave date, with optional additions and deductions. It does not post anything; use it to answer questions or check a final settlement. How to use it
- Choose the employee and Leave date.
- Enter absent and excess leave days, and any additions or deductions.
- Review the calculation and Print / PDF. 

_[Screenshot: EOSB Calculator]_

The EOSB Calculator screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Leave date  | Date |  | 
| Absent days  | Number |  | 
| Excess leave days  | Number |  | 
| Addition 1 description  | Text |  | 
| Addition 1 amount  | Number |  | 
| Addition 2 description  | Text |  | 
| Addition 2 amount  | Number |  | 
| Deduction 1 description  | Text |  | 
| Deduction 1 amount  | Number |  | 
| Deduction 2 description  | Text |  | 
| Deduction 2 amount  | Number |  | 

 

Buttons on this screen
- Print / PDF   

### Final Settlement

HR & Payroll › Transactions › Exit & adjustments › Final Settlement 

A nine-section wizard for the end of service: A. employee and service, B. service days, C. last salary, D. notice, E. additions, F. deductions, G. EOSB and leave, H. summary, I. journal and payment. Workflow: Draft → Prepared → HR Review → Finance Review → Management Approval → Approved → Payment Preparation → Paid → Closed. How to use it
- Select + New settlement (or start it from an Exit Notice).
- In section A choose the employee, the last working day, settlement date and Reason for leaving.
- Work through sections B–G with Next; check service days, salary, notice, additions (unpaid salary, leave), deductions (loans, damages), EOSB and leave.
- Check the summary and journal, save and submit for approval.
- Pay within the deadline; the employee becomes Terminated when the settlement is paid. 

_[Screenshot: Final Settlement]_

The Final Settlement screen

_[Screenshot: Final Settlement form]_

The form that opens with + New settlement 

Fields on the “New final settlement” form
| Field | Type | What to enter / options | 
| Section A: employee and service details | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list (Select employee also offered) | 
| Leave date (last working day)  | Date |  | 
| Settlement date  | Date |  | 
| Reason for leaving  | List | Resignation, Termination, End of Contract, Retirement, Death or Other.

Resignation · Termination · End of Contract · Retirement · Death · Other | 
| Notice period waived by employer  | List | Yes when the company waives the notice period.

Yes · No | 

 

Buttons on this screen
- + New settlement
- A. Employee
- B. Service days
- C. Last salary
- D. Notice
- E. Additions
- F. Deductions
- G. EOSB and leave
- H. Summary
- I. Journal and payment
- Save settlement
- Next → Section B 

Good to know
- The vacation leave settlement is created automatically from section G.   

### Provision Adjustments

HR & Payroll › Transactions › Exit & adjustments › Provision Adjustments 

Manual increase or decrease of an employee's leave, EOSB or benefits provision, with a reason (for example corrections at go-live). How to use it
- Select + New, choose employee, Type and Direction, enter the amount and reason, and save and approve. 

_[Screenshot: Provision Adjustments form]_

The form that opens with + New 

Fields on the “New Provision Adjustment” form
| Field | Type | What to enter / options | 
| General information | 
| No automatic | Text | Document number, created automatically when the form opens. | 
| Employee  | List | The employee, from the Employees master.

Pick from the master list | 
| Type  | List | 

Leave · EOSB · Benefits | 
| Direction  | List | 

Increase · Decrease | 
| Reason  | Text | Why this was done. Kept for audit. | 
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

   

### Letter Requests

HR & Payroll › Transactions › Hr forms & letters › Letter Requests 

Prepares HR letters for employees. Choose a template and an employee, check the preview, then submit. Workflow: Draft → Pending Approval → Approved → Signed (when acknowledgement is required). Letters without an approver are issued on submission. How to use it
- Select + New letter, choose the template and employee, fill any entries the template asks for.
- Check the preview and select Save and submit.
- Approvers approve from the Pending Approval tab; print the approved letter. 

_[Screenshot: Letter Requests]_

The Letter Requests screen

_[Screenshot: Letter Requests form]_

The form that opens with + New letter 

Fields on the “New letter request” form
| Field | Type | What to enter / options | 
| Letter template  | List | 

Select a template · Offer Letter · Employment Contract Summary · Experience Certificate · Salary Certificate · No Objection Certificate (General) · No Objection Certificate (Visa Transfer) · Warning Letter · Confirmation Letter (Probation Completed) · Promotion Letter · Resignation Acknowledgement | 
| Employee  | Text | The employee, from the Employees master. | 
| Internal notes (not printed)  | Text |  | 

 

Buttons on this screen
- + New letter
- Draft (0)
- Pending Approval (0)
- Approved (0)
- Signed (0)
- Rejected (0)
- Cancelled (0)
- Template master
- Document expiry tracker
- Letters register
- Save draft
- Save and submit   

### Document Expiry Tracker

HR & Payroll › Transactions › Hr forms & letters › Document Expiry Tracker 

Emirates ID, passport, visa, labour card and other documents from each employee's Documents tab, with days left and status (expired, within 30 / 60 days, valid, not entered). Select Update to edit the document on the employee. 

_[Screenshot: Document Expiry Tracker]_

The Document Expiry Tracker screen 

Columns shown: Code · Employee · Document · Number · Issued · Expires · Days left · Status 

Buttons on this screen
- Expiring documents report
- Clear filters
- Update   

### Leave, Rejoin & Exit Forms

HR & Payroll › Transactions › Hr forms & letters › Leave, Rejoin & Exit Forms 

Three A4 forms with the employee photo: Leave Application Form (leave request, assets held, documents, four approvals), Employee Rejoin Form (dates, overstay, assets returned, PRO clearance) and Final Settlement & Exit Clearance (profile, documents, salary vs role average, last projects, exit reason, settlement summary). How to use it
- Choose an employee.
- Select the form to open it, then print or save as PDF. 

_[Screenshot: Leave, Rejoin & Exit Forms]_

The Leave, Rejoin & Exit Forms screen 

Buttons on this screen
- Rejoin Entry
- Leave Register
- Choose an employee   

### Goals

HR & Payroll › Transactions › Appraisal & goals › Goals 

Goals of each employee for a cycle (individual, shared department or company goals, competency and development goals). Each employee's goals must total 100% weight. How to use it
- Choose the cycle.
- Add goals with target, weight and type; use By employee — weights to check the totals.
- Update progress during the cycle. 

_[Screenshot: Goals]_

The Goals screen

_[Screenshot: Goals form]_

The form that opens with All goals (0) 

Fields after selecting All goals (0)
| Field | Type | What to enter / options | 
| Cycle  | List | 

Pick from the master list | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

Pick from the master list | 

 

Buttons on this screen
- All goals (0)
- By employee — weights   

### Appraisals

HR & Payroll › Transactions › Appraisal & goals › Appraisals 

One appraisal per employee in a cycle: self-review → manager review → 360 feedback → calibration → finalised → acknowledged. Tabs count appraisals at each stage. How to use it
- Choose the cycle and department.
- Open an appraisal and complete the current step. 

_[Screenshot: Appraisals]_

The Appraisals screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

All cycles | 

 

Buttons on this screen
- Appraisal cycles
- Goals
- To Start (0)
- Self Review (0)
- Manager Review (0)
- Peer Review (0)
- Calibration (0)
- Finalized (0)
- Done (0)
- Excluded (0)
- Calibration
- Improvement plans
- Bonus payout   

### Calibration

HR & Payroll › Transactions › Appraisal & goals › Calibration 

HR compares managers' ratings across departments and adjusts them within the allowed limit, with a reason kept on file. How to use it
- Choose the cycle and department, review the ratings and adjust where needed. 

_[Screenshot: Calibration]_

The Calibration screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

Pick from the master list | 

   

### Improvement Plans

HR & Payroll › Transactions › Appraisal & goals › Improvement Plans 

Improvement plans for employees scoring below the threshold: why the plan is needed, the standard expected, the support given, review meetings and the outcome. How to use it
- Select + New plan, enter the employee, dates and plan text.
- Add review meetings as they happen; set the status and outcome at the end. 

_[Screenshot: Improvement Plans]_

The Improvement Plans screen

_[Screenshot: Improvement Plans form]_

The form that opens with + New plan 

Fields on the “New improvement plan” form
| Field | Type | What to enter / options | 
| Employee  | Text | The employee, from the Employees master. | 
| Starts  | Date |  | 
| Ends  | Date |  | 
| Why the plan is needed  | Long text |  | 
| What must improve, and the standard expected  | Long text |  | 
| Support the company gives (training, coaching, tools)  | Long text |  | 
| Review meetings | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Open · Completed – Improved · Completed – Not improved · Cancelled | 
| Outcome  | Long text |  | 

 

Buttons on this screen
- + New plan
- + Add a review meeting
- Close
- Save plan   

### Bonus Payout

HR & Payroll › Transactions › Appraisal & goals › Bonus Payout 

The bonus of each finalised appraisal from the cycle's bonus policy. Sending it to payroll creates a draft Bonus in Additions, which then follows the normal approval and payroll run. 

_[Screenshot: Bonus Payout]_

The Bonus Payout screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

Pick from the master list | 

   

### Job Requisitions

HR & Payroll › Transactions › Recruitment & onboarding › Job Requisitions 

Requests for a new position: Draft → head of department approval → HR approval → Open. Candidates can only be added to an open requisition. How to use it
- Select + New requisition: designation, title, department, number needed, reason, type, priority, needed-by date, place of work and budgeted salary.
- Enter justification, qualifications and duties.
- Select Save and submit. 

_[Screenshot: Job Requisitions]_

The Job Requisitions screen

_[Screenshot: Job Requisitions form]_

The form that opens with + New requisition 

Fields on the “New job requisition” form
| Field | Type | What to enter / options | 
| 1. The position | 
| Designation required | List | 

Pick from the master list (Select also offered) | 
| Position title (as advertised)  | Text |  | 
| Department required | List | The department responsible.

Pick from the master list (Select also offered) | 
| Number of people needed required | Number |  | 
| Reason  | List | Why this was done. Kept for audit.

New position · Replacement · Expansion · Temporary cover | 
| Employment type  | List | 

Full-time · Part-time · Contract · Temporary | 
| Priority  | List | 

Normal · Urgent | 
| Needed by required | Date |  | 
| Place of work or project  | Text |  | 
| Budgeted monthly salary per person (AED, gross)  | Number |  | 
| 2. Why and what is needed | 
| Justification required | Long text |  | 
| Qualification and experience required  | Long text |  | 
| Job description and main duties  | Long text |  | 

 

Buttons on this screen
- Candidates
- Settings
- + New requisition
- Draft (0)
- HOD Approval (0)
- HR Approval (0)
- Open (0)
- On Hold (0)
- Closed (0)
- Rejected (0)
- Cancelled (0)
- Save draft
- Save and submit   

### Candidates

HR & Payroll › Transactions › Recruitment & onboarding › Candidates 

Applicants for open requisitions on one pipeline: Applied → Shortlisted → Interviewed → Offered → Hired. Board shows cards by stage; List shows a table. Hiring starts the onboarding checklist. How to use it
- Select + Add candidate and choose the requisition and source.
- Move the candidate through the stages, recording interview notes.
- From an interviewed candidate select Make offer. 

_[Screenshot: Candidates]_

The Candidates screen 

Buttons on this screen
- Board
- List
- Job requisitions
- + Add candidate   

### Offers

HR & Payroll › Transactions › Recruitment & onboarding › Offers 

Bilingual offer letters (MoHRE wording) to candidates, approved by HR and Management, sent, and accepted by signature. Tabs show offers by status. 

_[Screenshot: Offers]_

The Offers screen 

Buttons on this screen
- Candidates
- Draft (0)
- Pending Approval (0)
- Rejected (0)
- Approved (0)
- Sent (0)
- Accepted (0)
- Declined (0)
- Withdrawn (0)
- Expired (0)   

### New Hire Onboarding

HR & Payroll › Transactions › Recruitment & onboarding › New Hire Onboarding 

Each hire's onboarding checklist. When the before-hire tasks are done and the documents pass the checks, the employee record is created for payroll. 

_[Screenshot: New Hire Onboarding]_

The New Hire Onboarding screen

_[Screenshot: New Hire Onboarding form]_

The form that opens with Board 

Buttons on this screen
- Board cards by onboarding stage.
- List table of all onboardings.
- Tasks by role open tasks per role.   

### Onboarding Tasks by Role

HR & Payroll › Transactions › Recruitment & onboarding › Onboarding Tasks by Role 

Onboarding tasks filtered by role (HR, IT, Manager, Employee, Finance, Admin) and status (open, overdue, done), so each team sees what it must do. 

_[Screenshot: Onboarding Tasks by Role]_

The Onboarding Tasks by Role screen

_[Screenshot: Onboarding Tasks by Role form]_

The form that opens with New hire onboarding 

Buttons on this screen
- New hire onboarding   

### Renewals & Clearance

HR & Payroll › Transactions › Renewals & clearance › Renewals & Clearance 

Everything that needs action before it expires or before an employee leaves: vehicle and machinery documents, employee documents, issued permits, exit notices and petty cash not cleared. Each card opens its screen. 

_[Screenshot: Renewals & Clearance]_

The Renewals & Clearance screen 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Vehicles & Machinery
- Employee Documents
- Issued Permits
- Exit Notices
- Petty Cash Clearance
- Settings
- 🪪 Employee documents 0 0 expired · 0 expiring
- 🚪 Exit notices 0 0 without a final settlement
- 👛 Petty cash not cleared 0 AED 0.00 held · 0 overdue   

### Vehicle & Machinery Renewals

HR & Payroll › Transactions › Renewals & clearance › Vehicle & Machinery Renewals 

Every vehicle and machine with its registration (Mulkiya), insurance, inspection and other documents. Renewing here updates the Asset Register. How to use it
- Select Renew on a document, enter the new number and dates, and attach the document.
- Use Applied for while a renewal is in progress, History for past renewals.
- Select + Add vehicle / machinery / document for assets or documents not yet listed. 

_[Screenshot: Vehicle & Machinery Renewals]_

The Vehicle & Machinery Renewals screen

_[Screenshot: Vehicle & Machinery Renewals form]_

The form that opens with + Add vehicle / machinery / document 

Fields on the “Add vehicle, machinery or document” form
| Field | Type | What to enter / options | 
| 1. The vehicle or machine | 
| Is it already registered in the Asset Register?  | List | 

Yes, select it from the Asset Register · No, register it now | 
| Asset required | List | 

Pick from the master list (Select the asset also offered) | 
| 2. First document (optional) | 
| Document type  | List | 

No document now · Registration (Mulkiya) · Insurance · Inspection / Passing · Operating Permit · Third-Party Liability · Other document | 
| Issuer company  | Text |  | 
| Document / policy number  | Text |  | 
| Issue date required | Date |  | 
| Expiry date required | Date |  | 
| Attach the document (up to 400 KB)  | File |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- + Add vehicle / machinery / document
- Overview
- Employee Documents
- Issued Permits
- Exit Notices
- Petty Cash Clearance
- All documents
- Registration (Mulkiya)
- Insurance
- Inspection / Passing
- Operating Permit
- Third-Party Liability
- Expired (0)
- Expiring (0)
- Not recorded (0)
- Valid (0)
- No expiry (3)
- Renewal applied (0)
- Renew
- Applied for
- History
- Asset   

### Employee Document Renewals

HR & Payroll › Transactions › Renewals & clearance › Employee Document Renewals 

Expired and expiring documents of active employees, one tab per document type (labour contract, residency, passport, Emirates ID, labour card, health insurance). Renew a document to update the employee master, or record an exit notice when service will not continue. 

_[Screenshot: Employee Document Renewals]_

The Employee Document Renewals screen

_[Screenshot: Employee Document Renewals form]_

The form that opens with All documents 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Overview
- Vehicles & Machinery
- Issued Permits
- Exit Notices
- Petty Cash Clearance
- All documents
- Labour Contract
- Residency
- Passport
- Emirates ID
- Labour Card
- Health Insurance
- Needs action (0)
- Expired (0)
- Expiring (0)
- Valid (0)
- Not recorded (15)
- Exit notice (0)
- Renewal applied (0)
- All (15)   

### Issued Permits

HR & Payroll › Transactions › Renewals & clearance › Issued Permits 

Security passes, site access permits, gate passes, government permits and client badges issued to employees. Collect them back when no longer needed; an exit notice marks all of an employee's permits to be collected. How to use it
- Select + Issue permit: employee, permit type, number, issuer, site, issue and expiry dates, and a copy.
- Select Issue the permit. 

_[Screenshot: Issued Permits]_

The Issued Permits screen

_[Screenshot: Issued Permits form]_

The form that opens with + Issue permit 

Fields on the “Issue a permit” form
| Field | Type | What to enter / options | 
| Employee required | List | The employee, from the Employees master.

Pick from the master list (Select the employee also offered) | 
| Permit type required | List | 

Security Pass · Site Access Permit · Gate Pass · Government Permit · Client Badge | 
| Permit number required | Text |  | 
| Issued by / authority  | Text |  | 
| Site / project  | Text |  | 
| Issue date required | Date |  | 
| Expiry date required | Date |  | 
| Attach a copy of the permit (optional, up to 400 KB)  | File |  | 
| Notes  | Long text |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- + Issue permit
- Overview
- Vehicles & Machinery
- Employee Documents
- Exit Notices
- Petty Cash Clearance
- All types
- Security Pass
- Site Access Permit
- Gate Pass
- Government Permit
- Client Badge
- In use (0)
- Collect back (0)
- Expired (0)
- Expiring (0)
- With HR (0)
- Cancelled or lost (0)
- All (0)
- Issue the permit   

### Exit Notices

HR & Payroll › Transactions › Renewals & clearance › Exit Notices 

Employees whose service will not continue. The final settlement is started from here with the employee, last working day and reason filled in. The employee becomes Terminated only when the settlement is paid. 

_[Screenshot: Exit Notices]_

The Exit Notices screen

_[Screenshot: Exit Notices form]_

The form that opens with Open (0) 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Overview
- Vehicles & Machinery
- Employee Documents
- Issued Permits
- Petty Cash Clearance
- Open (0)
- Completed (0)
- Cancelled (0)
- All (0)   

### Petty Cash Clearance

HR & Payroll › Transactions › Renewals & clearance › Petty Cash Clearance 

Petty cash holders with the cash they hold and unposted vouchers. Give clearance when the cash is settled so the employee can go on leave or leave; withhold it otherwise. 

_[Screenshot: Petty Cash Clearance]_

The Petty Cash Clearance screen

_[Screenshot: Petty Cash Clearance form]_

The form that opens with All (1) 

Columns shown: Holder · Employee · Cash account · Cash held (AED) · Last movement · Clearance 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Overview
- Vehicles & Machinery
- Employee Documents
- Issued Permits
- Exit Notices
- All (1)
- Not cleared (0)
- Overdue (0)
- Withheld (0)
- Cleared with exception (0)
- Cleared (1)
- Exit notice (0)
- Not linked (0)
- Give clearance records that the holder has settled.
- Withhold blocks leave or settlement until settled.
- Certificate prints the clearance certificate.
- Vouchers lists the holder's petty cash vouchers.  

### Reports  

### Payroll Dashboard

HR & Payroll › Reports › Payroll & dashboard › Payroll Dashboard 

Payroll at a glance: active employees, latest period, net payroll and overtime, leave, EOSB and benefit provisions, items awaiting approval, JV posting and payment, open final settlements, net payroll by month, and cost by department and project. Quick actions open the main screens. 

_[Screenshot: Payroll Dashboard]_

The Payroll Dashboard screen 

Buttons on this screen
- Timesheet
- Run payroll
- Pay salaries
- Leave settlement
- EOSB
- Reports   

### Payroll Reports

HR & Payroll › Reports › Payroll & dashboard › Payroll Reports 

All payroll reports with filters for month, project, department, employee and status. 

| Group | Reports | 
| Payroll | Payroll register · Pay sheet · Payslips · Pay history · Salary summary by department · Overtime (3 types) · Absence · Employees · Annual leave | 
| Costing | Project costing · Costing by employee · Department costing · Cost allocation summary | 
| Control | GL reconciliation · WPS files | 
| Related | Provision schedules · Provision subledger · Leave balance · Loan balances · Intercompany recharge · Payment sheet · Salary modification vouchers and reports · Employee control statement | 

 

_[Screenshot: Payroll Reports]_

The Payroll Reports screen

_[Screenshot: Payroll Reports form]_

The form that opens with Payroll register Pay sheet

One line per employee for the month, with ID, Name, Designation, MOL, Employer ID / Agent ID, Bank Name, IBAN, Pay Start Date, Pay End Date, Leave Days (Unpaid), Fixpay (Basic), Variable (Others), Additional, Deductions and Total. The pay dates are the payroll period of the month. Employer ID / Agent ID is the establishment ID of the employee's company and the routing code of the bank agent. Leave Days (Unpaid) are the days deducted for absence, undertime and unpaid sick days. Fixpay (Basic) is the basic salary earned, Variable (Others) the other fixed pay (housing, transport…), Additional the overtime and additions, Deductions everything deducted, and Total is the net pay: Fixpay + Variable + Additional − Deductions. Filter it like the other reports and use Print, PDF or Excel.

Columns shown: Period · Emp ID · Name · MOL ID · Department · Payroll project · Status · Full salary · Absence + sick ded. · Normal OT · OT-2 · Holiday OT · Additions · Other ded. · Net salary · Leave prov. · EOSB prov. · Benefits prov. · Total cost 

Buttons on this screen
- Payroll register
- Pay sheet the pay of the month in one line per employee, for the bank, the auditor or the site.
- Payslips
- Pay history
- Salary summary by department
- Overtime (3 types)
- Absence
- Employees
- Annual leave
- Project costing
- Costing by employee
- Department costing
- Cost allocation summary
- GL reconciliation
- WPS files
- Provision schedules (leave, EOSB, benefits)
- Provision subledger and reconciliation
- Leave balance
- Loan and advance balances
- Intercompany recharge
- Payroll payment and payment sheet
- Salary modification vouchers
- Salary modification reports
- Employee control statement
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet. 

Email payslips
- In Payslips select the employees and choose ✉ Email payslips: one email with its own PDF goes to each employee, using the address in the Employees master. Missing addresses are shown in red; type them in the list and they are saved to the employee. A single payslip window has ✉ Email too. Payslips are confidential: check each address before you send.   

### Additions & Deductions Reports

HR & Payroll › Reports › Payroll & dashboard › Additions & Deductions Reports 

Reports on additions and deductions: register, deduction schedule, outstanding deductions, arrears, JV register, GL posting, employee deduction statement and deduction ageing. 

_[Screenshot: Additions & Deductions Reports]_

The Additions & Deductions Reports screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Excel downloads the report as a spreadsheet.   

### Salary Modification Reports

HR & Payroll › Reports › Payroll & dashboard › Salary Modification Reports 

Salary modification reports: the voucher, pay revision memo, revision history per employee and for all, back pay outstanding and settled, approval status, audit trail and cost impact. 

_[Screenshot: Salary Modification Reports]_

The Salary Modification Reports screen

_[Screenshot: Salary Modification Reports form]_

The form that opens with Salary Revision History: per employee 

Fields after selecting Salary Revision History: per employee
| Field | Type | What to enter / options | 
| Effective from  | Date |  | 
| to  | Date |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Effective from  | Date |  | 
| to  | Date |  | 

 

Buttons on this screen
- Salary modification vouchers
- Salary Modification Voucher
- Pay Revision Memo
- Salary Revision History: per employee
- Salary Revision History: all employees
- Back-Pay Report (outstanding)
- Back-Pay Settlement Report
- Approval Status Report
- Audit Trail
- Cost Impact Report
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Leave Balance

HR & Payroll › Reports › Leave, loans & employees › Leave Balance 

Leave earned (company formula from the last rejoin date, less absent and unpaid days), leave taken, balance, excess leave and the value of the balance per employee, as of any date. 

_[Screenshot: Leave Balance]_

The Leave Balance screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| As of  | Date |  | 

 

Columns shown: Emp ID · Name · Designation · Last rejoin · Leave earned (days) · Leave taken (days) · Balance (days) · Excess leave (days) · Balance value 

Buttons on this screen
- Print / PDF
- Excel downloads the report as a spreadsheet.   

### Loan Balances

HR & Payroll › Reports › Leave, loans & employees › Loan Balances 

Posted loans and advances with amount, recovered and outstanding balance per employee. 

_[Screenshot: Loan Balances]_

The Loan Balances screen 

Buttons on this screen
- Print / PDF   

### Loans & Advances Reports

HR & Payroll › Reports › Leave, loans & employees › Loans & Advances Reports 

Loan reports: register, outstanding, ageing, repayment schedule, arrears, statement, disbursements, write-offs, employee summary and balance transfers. 

_[Screenshot: Loans & Advances Reports]_

The Loans & Advances Reports screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Excel downloads the report as a spreadsheet.   

### Employee Reports

HR & Payroll › Reports › Leave, loans & employees › Employee Reports 

Employee lists: Detailed list (personal and job data, years of service, leave dates), Salary details (salary components) and Documents status (document numbers and expiries). Filter by department, status and employee; print or export. 

_[Screenshot: Employee Reports]_

The Employee Reports screen

_[Screenshot: Employee Reports form]_

The form that opens with Detailed list 

Columns shown: Emp ID · Name · Arabic name · Nationality · Designation · Department · Project · Date of birth · Place of birth · Join date · Years of service · Last leave date · Last rejoin date · Status 

Buttons on this screen
- Detailed list
- Salary details
- Documents status
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Employee Control Statement

HR & Payroll › Reports › Leave, loans & employees › Employee Control Statement 

The employee control account per employee split by subgroup, with debit minus credit balances (brackets = the company owes the employee). Views: detailed statement, two summaries, horizontal, month-wise, control accounts and GL reconciliation. 

_[Screenshot: Employee Control Statement]_

The Employee Control Statement screen

_[Screenshot: Employee Control Statement form]_

The form that opens with Statement (Detailed) 

Fields after selecting Statement (Detailed)
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 
| Zero balances  | List | 

No · Yes | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 
| Zero balances  | List | 

No · Yes | 

 

Buttons on this screen
- Analysis Master
- Statement (Detailed)
- Summary 1
- Summary 2
- Horizontal
- Monthwise
- Control accounts
- GL reconciliation
- Employees: All
- Categories: All
- Subgroups: All
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Employee Comprehensive Report

HR & Payroll › Reports › Leave, loans & employees › Employee Comprehensive Report 

The complete file of one employee: personal and job details, projects, documents, salary and payroll, estimated EOSB, leave and leave pay, increments, appraisals, leave history, cash and loans, equipment, vehicles and permits held. Tick the sections, then Open report or Print selected. 

_[Screenshot: Employee Comprehensive Report]_

The Employee Comprehensive Report screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Report date  | Date |  | 
| Personal & employment details  | Tick box |  | 
| Projects & assignments  | Tick box |  | 
| Documents  | Tick box |  | 
| Payroll & salary  | Tick box |  | 
| End of service benefit (estimated to date)  | Tick box |  | 
| Vacation leave & leave pay  | Tick box |  | 
| Increment history  | Tick box |  | 
| Appraisal history  | Tick box |  | 
| Leave history  | Tick box |  | 
| Cash in hand, advances & loans  | Tick box |  | 
| Equipment, vehicles & permits held  | Tick box |  | 
| Other records  | Tick box |  | 

 

Columns shown: ID · Name · Designation · Department · Join date · Status 

Buttons on this screen
- Print selected (0)
- Open report   

### Provision Schedules

HR & Payroll › Reports › Provisions › Provision Schedules 

Annual leave, EOSB and benefits provisions: opening + monthly charge from posted payroll − amounts released by settlements = closing, at company and employee level, reconciled to the ledger, with closing balances by month. 

_[Screenshot: Provision Schedules]_

The Provision Schedules screen

_[Screenshot: Provision Schedules form]_

The form that opens with Annual leave 

Columns shown: Department · Opening · Charge · Settled · Closing 

Columns shown: Emp ID · Name · Department · Opening days · Charge days · Settled days · Closing days · Opening · Charge · Settled · Closing 

Buttons on this screen
- Annual leave
- EOSB
- Benefits
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Provision Subledger

HR & Payroll › Reports › Provisions › Provision Subledger 

Each employee's leave and EOSB subledger: opening balance, monthly accrual, adjustments, settlements and reversals; with a reconciliation to the provision accounts in the general ledger. 

_[Screenshot: Provision Subledger]_

The Provision Subledger screen

_[Screenshot: Provision Subledger form]_

The form that opens with Monthly movement 

Columns shown: Employee · Annual leave days · Annual leave amount · EOSB amount 

Buttons on this screen
- Monthly movement
- Subledger
- Reconciliation with the general ledger
- Print / PDF   

### Letters Generated Register

HR & Payroll › Reports › Hr forms & letters › Letters Generated Register 

Every letter prepared, with template, employee, approvals and acknowledgement. Filter by date, template and status. 

_[Screenshot: Letters Generated Register]_

The Letters Generated Register screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Expiring Documents Report

HR & Payroll › Reports › Hr forms & letters › Expiring Documents Report 

Employee documents expired or expiring within the chosen period. 

_[Screenshot: Expiring Documents Report]_

The Expiring Documents Report screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Show  | List | 

Expired only · Expired and expiring within 30 days · Expired and expiring within 60 days · Expired and expiring within 90 days · Expired and expiring within 180 days · Documents not entered | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Pending Approvals Report

HR & Payroll › Reports › Hr forms & letters › Pending Approvals Report 

Letters waiting for approval, and approved letters waiting for the employee's acknowledgement. 

_[Screenshot: Pending Approvals Report]_

The Pending Approvals Report screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Waiting for  | List | 

Everything pending | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.
- Letter requests   

### Appraisal Register

HR & Payroll › Reports › Appraisal & goals › Appraisal Register 

Every appraisal with section ratings, calibration, final rating and acknowledgement. 

_[Screenshot: Appraisal Register]_

The Appraisal Register screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

All cycles | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Score Distribution

HR & Payroll › Reports › Appraisal & goals › Score Distribution 

How final ratings are spread compared with a normal curve; shows whether managers rate too leniently or harshly. 

_[Screenshot: Score Distribution]_

The Score Distribution screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

All cycles | 

 

Columns shown: Rating · Label · Employees · % of employees 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Goal Achievement

HR & Payroll › Reports › Appraisal & goals › Goal Achievement 

Achievement of each goal against target, by goal or by employee (weighted). 

_[Screenshot: Goal Achievement]_

The Goal Achievement screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

All cycles | 
| View  | List | 

By goal · By employee | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Calibration Report

HR & Payroll › Reports › Appraisal & goals › Calibration Report 

Manager rating, HR adjustment with reason, and final rating, with the effect on each department. 

_[Screenshot: Calibration Report]_

The Calibration Report screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

All cycles | 
| Adjusted only  | Tick box |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Bonus Calculation

HR & Payroll › Reports › Appraisal & goals › Bonus Calculation 

The bonus of every finalised appraisal: score, policy tier, calculation and whether it has gone to payroll. 

_[Screenshot: Bonus Calculation]_

The Bonus Calculation screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Cycle  | List | 

All cycles | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Requisition Register

HR & Payroll › Reports › Recruitment & onboarding › Requisition Register 

Every job requisition with approval status, positions filled and time to fill. 

_[Screenshot: Requisition Register]_

The Requisition Register screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Raised from  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Recruitment Pipeline

HR & Payroll › Reports › Recruitment & onboarding › Recruitment Pipeline 

Candidates by stage, requisition and source, with hire rate per source. 

_[Screenshot: Recruitment Pipeline]_

The Recruitment Pipeline screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Applied from  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Time to Hire and Offers

HR & Payroll › Reports › Recruitment & onboarding › Time to Hire and Offers 

Time from application to hire, offer response time and offer acceptance rate. 

_[Screenshot: Time to Hire and Offers]_

The Time to Hire and Offers screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Offered from  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Onboarding Status

HR & Payroll › Reports › Recruitment & onboarding › Onboarding Status 

Progress of every onboarding checklist and open tasks per team. 

_[Screenshot: Onboarding Status]_

The Onboarding Status screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Start from  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### New Hire Document Compliance

HR & Payroll › Reports › Recruitment & onboarding › New Hire Document Compliance 

Passport, Emirates ID, visa validity and WPS details (IBAN, MOL ID) of every new hire. 

_[Screenshot: New Hire Document Compliance]_

The New Hire Document Compliance screen 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Document Renewals Register

HR & Payroll › Reports › Renewals & clearance › Document Renewals Register 

Vehicle, machinery and employee documents with expiry dates. 

_[Screenshot: Document Renewals Register]_

The Document Renewals Register screen 

Columns shown: Group · Name · Details · Document · Issuer company · Number · Issued · Expiry date · Days left · Status · Renewal applied · Exit notice 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Renewals and Clearance Activity Log

HR & Payroll › Reports › Renewals & clearance › Renewals and Clearance Activity Log 

Every renewal, permit issued or collected, exit notice and petty cash clearance decision, with who and when. 

_[Screenshot: Renewals and Clearance Activity Log]_

The Renewals and Clearance Activity Log screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Date |  | 
| To  | Date |  | 

 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Issued Permits Register

HR & Payroll › Reports › Renewals & clearance › Issued Permits Register 

Every permit issued, where it is now and when it expires. 

_[Screenshot: Issued Permits Register]_

The Issued Permits Register screen 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

### Petty Cash Clearance Status

HR & Payroll › Reports › Renewals & clearance › Petty Cash Clearance Status 

Petty cash holders, cash held, unposted vouchers and clearance status. 

_[Screenshot: Petty Cash Clearance Status]_

The Petty Cash Clearance Status screen 

Columns shown: Holder code · Holder · Employee · Department · Cash account · Float limit · Cash held (AED) · Vouchers not posted (AED) · Last movement · Days · Clearance · Decision · Decided on · Exit notice 

Buttons on this screen
- Print / Save as PDF prints the document or saves it as a PDF.   

 

🕒

Module guide
