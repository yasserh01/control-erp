## Projects

Set up each project, build its Bill of Quantities and budgets, certify the work done, bill the client through payment certificates, control cost against budget and close each month and finally the project. 

The Projects module is the backbone of contracting work. Every purchase, stock issue, payroll hour, petty cash expense and sales invoice can carry a Project and an Activity, and this module brings them together against the budgets.

The two budgets. Each BOQ line carries what the client pays (quantity × contract rate: the sales budget) and what the work costs you (material, labour, equipment, subcontract and overhead per unit: the cost budget). The difference is the expected margin.

From work to cash. The engineer certifies the design quantity, the project manager or QS certifies the installed quantity on a Measurement Sheet; the lower of the two is billable. A Payment Certificate (IPC) bills that quantity; once approved, revenue is recognised (IFRS 15, output method) and the tax invoice is raised in Sales. 

Typical order of work for a new project
| Step | Screen | What happens |  
| 1 | Projects | Create the project with client, contract value, revenue type, retention and accounts. |  
| 2 | Job Activity Master | Load the standard library or import your own list of activities once for all projects, then allocate each project’s budget to them in the Project Master (optional when a BOQ is used). |  
| 3 | BOQ & Budgets | Enter or paste the BOQ with contract rates and unit costs, then baseline it. |  
| 4 | Budgets | Create the original budget version v1.0 for costs outside the BOQ and get it approved. |  
| 5 | Stage Gates | Set WBS weights and certify planning and procurement gates if your procedure needs them. |  
| 6 | Purchase, Inventory, Payroll | Orders, receipts, stock issues and labour hours collect actual cost on the project; orders are checked against the budget. |  
| 7 | Measurement Sheets | Certify design and installed quantities each period. |  
| 8 | Payment Certificates | Bill the certified work, approve on site and by the client, then raise the tax invoice. |  
| 9 | Change Orders | Record variations and cost budget revisions. |  
| 10 | Month-End Close and Milestones | Accrue, recognise revenue, check earned value and lock the month. |  
| 11 | Final Account & Closing | Settle the contract and close the project. |  

 

#### Screens in this module

Masters & Settings

Project set-upProjectsCost TypesJob Heads (Cost Elements)Job Activity Master

Boq & control settingsBOQ & BudgetsProject Control Settings

Transactions

Planning & measurementStage GatesMeasurement Sheets

Billing to the clientPayment Certificates (IPC)Change Orders

Cost controlBudgetsBudget & Cost to CompleteProject Activity ProgressManual Project CostsManual Commitments

Month-end & closingMonth-End CloseFinal Account & ClosingProject Completion TransferMilestones

Reports

Profitability & costProject ProfitabilityProject Cost ControlJob Cost vs Budget

Project control reportsProject Control Reports

Activity budget & forecastActivity Budget & Forecast Reports

Comprehensive reportProject Comprehensive Report

More screensBudget VersionsMonth-End Closings 

### Masters & Settings  

### Projects

Projects › Masters & Settings › Project set-up › Projects 

The project master. Every project the company works on, with the client, contract details, how revenue is recognised, retention and the accounts its costs and revenue post to. How to use it
- Select + New. The Code (PRJ-0001) is created automatically.
- Enter the Name, choose the Client (from Customers), and fill Location, Contract No, Contract Value, Start and End dates and the Manager.
- Choose the Revenue Type: Over time for construction contracts (revenue follows certified progress) or Point in time for supply-only jobs.
- Enter Retention %, Retention Cap % and Advance Recovery % from the contract.
- Select Apply standard accounts to fill the cost, revenue, unbilled receivable and retention receivable accounts. Change any of them by hand if needed.
- Choose the Budget Control for its purchase orders and, if wanted, a Warning Threshold %.
- Set the Status to Active when work starts, and Save. 

_[Screenshot: Projects]_

The Projects screen

_[Screenshot: Projects form]_

The form that opens with + New 

Fields on the “New Project” form
| Field | Type | What to enter / options | 
| Code automatic | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Client  | List | The customer the project is for.

Pick from the master list | 
| Location  | Text |  | 
| Description  | Text | A short description. | 
| Contract No  | Text | The contract or tender reference. | 
| Contract Value  | Number | Contract sum. Replaced by the BOQ total when the BOQ is baselined. | 
| Start  | Date | Contract start date. | 
| End  | Date | Planned completion date. | 
| Manager  | Text | Project manager name. | 
| Project Cost Account  | List | Where the project's costs are collected (work in progress).

Pick a ledger account from the chart of accounts | 
| Revenue Type  | List | Over time: revenue recognised as work is certified (IFRS 15). Point in time: revenue recognised when invoiced or delivered.

Point in time · Over time | 
| Retention %  | Number | Part of each certificate held back by the client. | 
| Revenue Account  | List | Contract revenue ledger.

Pick a ledger account from the chart of accounts | 
| Unbilled Receivable Account  | List | Contract asset: work certified but not yet invoiced.

Pick a ledger account from the chart of accounts | 
| Retention Receivable Account  | List | Retention held by the client.

Pick a ledger account from the chart of accounts | 
| Measurement Method  | List | Certified quantities (measured progress) or Cost to cost (progress = cost to date ÷ total budgeted cost).

Certified quantities · Cost to cost | 
| Advance Recovery %  | Number | Share of each certificate deducted to recover the advance payment. | 
| Retention Cap %  | Number | Maximum retention as a % of the contract value. 0 means no cap. | 
| Budget Control  | List | How the LPOs of this project are checked against its cost budget. Hard Block: an LPO above the available budget cannot be saved. Soft Warning: it is saved as Pending Budget Override for management. No Control: only the Budget Status panel shows. Blank: the company setting applies.

Hard Block · Soft Warning · No Control | 
| Warning Threshold %  | Number | Optional. When actual + committed + the order reaches this % of the budget (for example 80) the panel turns amber and a message shows on saving. | 
| Status  | List | Planning, Active, On hold or Closed. A closed project accepts no more costs if the lock is on.

Planning · Active · On hold · Closed | 

 

Buttons on this screen
- Apply standard accounts 

Good to know
- Changing an account by hand protects it: Apply standard accounts never overwrites an account you chose yourself.
- Only Active projects appear in month-end closing. 

Budget and estimated cost to complete
- Open a saved project: the buttons BUDGET and ESTIMATED COST TO COMPLETE are at the top of the form. Each shows the total set in the project (Total Budget Cost, Total Est. Cost to Complete, the last two fields of the form), what is allocated in the current revision, and a red mark if they differ. In the project list the same two actions are the buttons Budget and Cost to complete. See Budget & Cost to Complete. 

Comprehensive report
- Every line of the list has a Report button, and a saved project has a 📊 Comprehensive report button at the bottom of its form: both open the Project Comprehensive Report.   

### Cost Types

Projects › Masters & Settings › Project set-up › Cost Types 

Cost types classify project cost: Labour, Materials, Equipment, Subcontract, Overhead, Other, and Revenue. They are used on WBS activities, budgets, manual costs and in the cost reports. How to use it
- Select + New only if you need an extra type.
- Enter the Name and choose the Nature (Cost or Revenue).
- Save. 

_[Screenshot: Cost Types]_

The Cost Types screen

_[Screenshot: Cost Types form]_

The form that opens with + New 

Fields on the “New Cost Type” form
| Field | Type | What to enter / options | 
| Information | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Nature  | List | Cost for expense types, Revenue for income types.

Cost · Revenue | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

   

### Cost Elements

Projects › Masters & Settings › Project set-up › Cost Elements 

Cost elements are an optional finer classification of cost used in project cost analysis (for example Material, Labour, Subcontract, Overhead). When a document line posts to a project, the cost element is taken from the activity's cost type. How to use it
- Select + New, enter the Name and Save. 

_[Screenshot: Cost Elements]_

The Cost Elements screen

_[Screenshot: Cost Elements form]_

The form that opens with + New 

Fields on the “New Cost Element” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Job heads
- In the budget and cost-to-complete allocation a cost element is a job head: what the money is spent on (material, labour, a bond charge). Give each job head its Cost Type (it decides the cost category of the budget) and its usual Unit. Job heads can be imported with the Excel template of the Job Activity Master. A job head used in an allocation cannot be deleted; set it to Inactive.   

### Job Activity Master

Projects › Masters & Settings › Project set-up › Job Activity Master 

One master of work activities, shared by all projects, built like a tree of up to five levels (four are recommended: see How many levels? below). Every project takes its activities from here when its budget and estimated cost to complete are allocated, so the same activity has the same code and name in every project, and reports can add the cost up by section, group or activity. 

The five levels
| Level | Name | Code length | Example | 
| 1 | Section | 2 characters | BB Home Office Works | 
| 2 | Group | 4 characters | BB04 Procurement Activity | 
| 3 | Sub-group | 6 characters | BB0401 Procurement Activities | 
| 4 | Activity | 10 characters | BB04010001 Procurement Related Activity | 
| 5 | Sub-activity | 12 characters | BB0401000101 Vendor registration | 

 

The code of an item starts with the code of the item above it. The lowest items (an activity that has nothing below it) are the ones a budget is allocated to; the levels above only add up. 

How many levels? What the standards say
- No standard fixes a number. The PMI practice standard for work breakdown structures and AACE’s recommended practice (RP 33R-15) break the work down until each piece can be planned, budgeted and controlled, and AACE stresses that no single hierarchy fits every project.
- The US GAO cost guide asks for at least three levels. CSI MasterFormat, the classification used by consultants and estimators, has three (division, section, sub-section) and an optional fourth. UniFormat, for building elements, has three or four; the default breakdown of Deltek has four. SAP Project System sets no fixed depth and holds the budget on the elements you choose.
- Recommended here: four levels: Section, Group, Sub-group and Activity. Budget, commitments, actual cost, progress and cost to complete are controlled at the Activity; the three levels above only add up. Three levels is the minimum but is usually too coarse to see where an overrun starts. The fifth level (Sub-activity) is there for an activity that must be split further, for example by building, floor or subcontract package. Use it only where it helps, because every level adds data entry. Branches may have different depths. How to use it
- Select + New section to add a level 1 item, or select an item in the tree and + New below to add the next level. The next free code is suggested; enter the Name and select Save.
- Select an item in the tree to change its name or set it to Inactive (an inactive item is no longer offered for new budgets). The codes above it are shown as cards, one for each level.
- For an activity (level 4 or 5) select Related Head to choose the job heads that usually belong to it. They are offered first when the activity is budgeted.
- Type in the search box to find a code or a name; Expand all and Collapse all open the tree.
- Delete removes an item that has nothing below it and is not used in any project. To delete an item with everything below it use Delete branch. Otherwise set it to Inactive. Standard library
- Select Standard library (or Load the standard library when the master is empty). The window lists 27 sections: 00 Project Management & Home Office Works, 01 General Requirements (Site Preliminaries), the CSI MasterFormat divisions a contractor uses (02 Existing Conditions, 03 Concrete, 04 Masonry … 33 Utilities), 35 Waterway & Marine Construction and 40 Process Interconnections & Control. Together they hold 68 groups, 114 sub-groups and 380 activities on four levels.
- Tick the sections you work in; the line under the list shows how many new items will be added. Leave Add the standard job heads that are missing ticked so that Material, Labour, Equipment, Subcontract and Overhead exist, and Link each activity to its related job heads ticked so that each activity offers its usual heads first when it is budgeted.
- Select Load selected sections. Items already in your master are never changed or duplicated, so you can load more sections later.
- The library is then yours: rename items, set them to Inactive, add your own with + New below (your own activities at level 4, sub-activities at level 5), or delete what you do not need. Deleting
- Delete: the selected item, when nothing is below it and no project uses it.
- Delete branch (shown when the selected item has items below it): the item and everything below it. A message says how many items will go. Items used in project activities, budgets or cost to complete stay, together with the items above them.
- Delete all unused: every item that no project uses. Use it after loading the library to clear what you will not need; the items your projects use stay. Excel template and import
- Select Download template. The file has the sheets Instructions, Activities (Code, Name, Active, Related Job Heads), Job Heads (Code, Name, Cost Type, Unit, Active) and Example.
- Fill Activities, one item per row. The code decides the level. Every item above must be in the file or already in the ERP. Fill Job Heads too if you want to load them.
- Select Import from Excel and choose the file (a CSV file with the same headings also works). A preview shows each row as New, Changed or Unchanged, or with the error. Rows with errors are skipped; select Import to save the others. Existing codes are updated and nothing is deleted, so the file can be imported again.
- Export to Excel gives the whole master in the same format, to change in Excel and import again. 

Good to know
- The name of an activity is what documents (purchase lines, costs, timesheets) store. If two activities have the same name, the second one in a project is shown as Name [CODE].
- Changing a name here does not rename the activity in projects that already use it.   

### Project Activity Progress

Projects › Transactions › Cost control › Project Activity Progress 

The activities of each project with the start, finish and progress % of each one. It replaces the old Project Activities (WBS) master: the activities are no longer typed in, they come from the Job Activity Master, so every project uses the same codes and names. Purchase lines, stock issues, timesheets and manual costs choose from these activities, so cost is tracked per activity. How to use it
- Choose the Project. Its activities are listed with their code, source, budget and cost to complete.
- To give the project more activities select + Add activities from the master, tick them and select Add selected. They have no budget until you allocate one (Project Master › Budget). Allocating a budget adds the activities it uses by itself.
- Enter the Start, End and Progress % of each activity; the change is saved when you leave the box. The month-end closing and the earned value check use them. The progress of the project is the average of its activities weighted by budget.
- Remove takes an activity out of the project when it has no budget and no cost to complete and has not been used in any document or cost.
- Excel and Print give the list of the project. 

Good to know
- The budget and the cost to complete are shown but cannot be typed here. They change only through approved revisions (Budget & Cost to Complete), so they always agree with the totals in the Project Master.
- The activities of a project with a BOQ come from the BOQ lines. Their dates and progress come from the BOQ programme and the certified quantities and are shown locked.
- Activities entered before the master existed show Not in master. They keep working; new activities should come from the master.   

### BOQ & Budgets

Projects › Masters & Settings › Boq & control settings › BOQ & Budgets 

The Bill of Quantities of each project. Each line has a WBS code, description, unit, contract quantity and contract rate (giving the sales value), and a unit cost split into material, labour, equipment, subcontract and overhead (giving the cost budget). The screen shows the sales budget, cost budget, expected margin, billed to date and remaining to bill. How to use it
- Choose the Project.
- Select + Add line for each BOQ item, or Paste from Excel to paste the whole BOQ in one go (columns in the same order as the table).
- Fill WBS code, Description, Unit, Contract qty and Contract rate, then the cost per unit for each component. Sales value, cost budget, margin and margin % are calculated.
- Check the totals. The KPI strip warns when the BOQ total differs from the contract value in the Project Master.
- Select Baseline the BOQ and confirm. The contract value is replaced by the BOQ total, and the quantities, rates and costs are locked.
- After baselining, changes go through New change order. Reopen for editing is available only before any certification. 

_[Screenshot: BOQ & Budgets]_

The BOQ & Budgets screen

_[Screenshot: BOQ & Budgets form]_

The form that opens with New change order 

Fields on the “New Change order” form
| Field | Type | What to enter / options | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Type of change required | List | 

Variation (client approved) · Cost budget revision | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Client instruction / reference  | Text |  | 
| Reason  | Text | Why this was done. Kept for audit. | 

 

Table columns: # · BOQ LINE · WBS (NEW LINE) · DESCRIPTION (NEW LINE) · UNIT · QUANTITY NOW · CHANGE IN QUANTITY · NEW QUANTITY · NEW CONTRACT RATE · NEW MATERIAL /UNIT · NEW LABOUR /UNIT · NEW EQUIPMENT /UNIT · NEW SUBCONTRACT /UNIT · NEW OVERHEAD /UNIT · SALES BUDGET CHANGE · COST BUDGET CHANGE 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 

 

Buttons on this screen
- BOQ lines the editable BOQ table.
- Two-budget view sales budget and cost budget side by side per line.
- Cost build-up the unit cost of each line by component.
- History every change to the BOQ, with who and when.
- Reopen for editing unlocks a baselined BOQ while nothing has been certified.
- New change order opens a change order for this project.
- + Add line adds a line to the table.
- Save as draft
- Save and submit 

_[Screenshot: Two-budget view]_

Two-budget view 

_[Screenshot: Cost build-up view]_

Cost build-up view 

Good to know
- The Item (optional) column links a BOQ line to a stock item when the line is mainly one material.
- The overhead % in Project Control Settings is added automatically to the direct cost of new lines.   

### Project Control Settings

Projects › Masters & Settings › Boq & control settings › Project Control Settings 

Settings that apply to every project: who certifies each stage gate and approves certificates, the billing defaults, how purchase orders are checked against the budget, the forecast method, budget-revision rules and month-end closing thresholds. 

Purchase budget controlDecides what happens when an LPO would take a project over its cost budget: Block (cannot be saved), Approval (an approver must override), Warn (message only) or Off. The Control level checks the budget per Activity (BOQ line), per Cost type or for the whole Project, with an optional Tolerance %. A project with its own Budget Control (Project Master) uses that mode instead; Who approves a budget override names the role that decides a Pending Budget Override LPO. How to use it
- Work through each section and choose the options your company procedure requires.
- Select Save settings. 

_[Screenshot: Project Control Settings]_

The Project Control Settings screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Stage gates and sign-off | 
| Gates required before a quantity is measured  | List | Two: engineering and construction only. Four: planning and procurement must be certified first.

Two · Four | 
| Planning gate certified by  | List | Blank: anyone who can approve.

Pick from the master list | 
| Procurement gate certified by  | List | Blank: anyone who can approve.

Pick from the master list | 
| Engineering quantity certified by  | List | Blank: anyone who can approve.

Pick from the master list | 
| Construction quantity certified by  | List | Blank: anyone who can approve.

Pick from the master list | 
| Payment certificate approved by (site QS / project manager)  | List | Blank: anyone who can approve.

Pick from the master list | 
| Payment certificate approved by (client representative)  | List | Blank: anyone who can approve.

Pick from the master list | 
| Billing defaults | 
| Retention %  | Number | Used when the project does not have its own. | 
| Retention cap % of the contract value  | Number | 0 = no cap. | 
| Advance recovery % of each certificate  | Number | 0 = none. Recovered from the customer advances of the project. | 
| VAT % on certificates  | Number |  | 
| Revenue recognised when the certificate is approved by  | List | Output method: Dr Unbilled Receivables (contract asset), Cr Contract Revenue.

Site approval · Client approval | 
| Alert when a certificate waits for approval (days)  | Number |  | 
| Alert when an approved certificate is not invoiced (days)  | Number |  | 
| Purchase budget control | 
| When an order would exceed the cost budget  | List | Block: the order cannot be saved. Approval: an approver must override. Warn: a message only. Off: no control. A project with its own Budget Control (Project Master) uses that instead.

Block · Approval · Warn · Off | 
| Control level  | List | Activity = the BOQ line.

Activity · Cost type · Project | 
| Tolerance %  | Number |  | 
| Also control projects without a BOQ  | List | 

No · Yes | 
| Who approves a budget override (Soft Warning)  | List | Blank: anyone who can approve. | 
| Forecast, risk and closing | 
| Estimate to complete  | List | Performance based projects the cost per unit of progress to date.

Remaining work at budget · Performance based | 
| At risk when projected margin is below this % of the expected margin  | Number |  | 
| Overhead % added to the direct cost of new BOQ lines  | Number |  | 
| Lock a closed project  | List | A closed project takes no more orders, receipts, invoices or costs.

Yes · No | 
| Budget versions and manual entries | 
| Budget revisions approved by  | List | Blank: anyone who can approve.

Pick from the master list | 
| Manual project costs approved by  | List | Blank: anyone who can approve.

Pick from the master list | 
| The approver must be a different person from the preparer  | List | The administrator is always exempt.

Yes · No | 
| A budget revision must quote an approved change order or variation order  | List | No: a reason is enough (for example an internal re-allocation).

No · Yes | 
| Manual project cost above the available budget  | List | Checked when the cost is submitted for approval.

Warn · Block · Off | 
| Manual commitment above the available budget  | List | Approval: an approver must override. The budget limit is the one of Purchase budget control.

Block · Approval · Warn · Off | 
| Month-end closing and earned value | 
| Period close (lock) by  | List | Blank: anyone who can approve.

Pick from the master list | 
| Cost performance index (CPI) below this flags the project At Risk  | Number | CPI = earned value ÷ actual cost. 0.90 is the usual alert level. | 
| CPI below this is on Watch  | Number |  | 
| Schedule performance index (SPI) below this is behind schedule  | Number |  | 
| Open orders and commitments older than this many days are shown as aged  | Number |  | 
| A closed month locks the project  | List | Yes: no order, receipt, invoice, cost or accrual can be dated in or before a closed month of the project.

Yes · No | 

 

Buttons on this screen
- Save settings stores the settings for every user. 

Good to know
- CPI (cost performance index) = earned value ÷ actual cost. Below 0.90 is the usual alert level.
- A role left blank in a "certified by" or "approved by" field means anyone with approval rights can do it.  

### Transactions  

### Stage Gates

Projects › Transactions › Planning & measurement › Stage Gates 

Shows each BOQ line's progress through the four gates: Planning (schedule and WBS weights approved), Procurement (materials ordered and available), Engineering (design quantity certified) and Construction (installed quantity certified). Engineering and construction are certified on Measurement Sheets; planning and procurement are certified here when required. How to use it
- Choose the project.
- Enter planned start and finish dates and Weight % per line, or select Weights from sales value. Weights must total 100%.
- Tick the lines and select Certify planning gate for the ticked lines or Certify procurement gate for the ticked lines.
- Use Withdraw planning or Withdraw procurement to undo a certification. 

_[Screenshot: Stage Gates]_

The Stage Gates screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 

 

Columns shown: WBS · Description · Contract qty · Planned start · Planned finish · Weight % · Planning · Ordered (LPO) · Procurement · Design qty certified · Installed · % complete 

Buttons on this screen
- Weights from sales value
- Certify planning gate for the ticked lines
- Certify procurement gate for the ticked lines
- Withdraw planning
- Withdraw procurement 

Good to know
- Whether these two gates are required before measuring is set in Project Control Settings (Two or Four gates).
- The Ordered (LPO) column shows the quantity already on purchase orders for the line.   

### Measurement Sheets

Projects › Transactions › Planning & measurement › Measurement Sheets 

Measurement sheets record the two certifications behind every billable quantity. The Lead Engineer certifies the design quantity of each BOQ line (the most that can be billed); the Project Manager or QS certifies the installed quantity, which cannot exceed the design quantity. The billable quantity is the lower of the two. How to use it
- Select + New measurement sheet.
- Choose the Project, the Date, the period and a Reference (drawing or inspection request number).
- For each BOQ line enter the design quantity certified to date (cumulative) and the quantity installed this period. Use Design quantity = contract quantity on all lines when the design quantity equals the BOQ.
- Select Save as draft.
- The engineer certifies the design quantities (status Engineering Certified), then the PM / QS certifies the installed quantities (Construction Certified). 

_[Screenshot: Measurement Sheets]_

The Measurement Sheets screen

_[Screenshot: Measurement Sheets form]_

The form that opens with + New measurement sheet 

Fields on the “New Measurement sheet” form
| Field | Type | What to enter / options | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Period from  | Date |  | 
| Period to  | Date |  | 
| Reference (drawing, inspection request)  | Text | Your own reference, such as an external document number. | 
| Remarks  | Text | Free notes. They print on the document. | 
| Quantities by BOQ line | 
| Show only the lines with a quantity  | Tick box |  | 

 

Table columns: # · WBS · DESCRIPTION · UNIT · CONTRACT QTY · DESIGN QTY CERTIFIED BEFORE · DESIGN QTY CERTIFIED (TO DATE) · INSTALLED BEFORE · INSTALLED THIS PERIOD · INSTALLED TO DATE · % OF CONTRACT 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Engineering Certified · Construction Certified · Cancelled | 

 

Buttons on this screen
- + New measurement sheet
- Design quantity = contract quantity on all lines
- Save as draft 

Good to know
- Status flow: Draft → Engineering Certified → Construction Certified (or Cancelled).
- No payment certificate can claim a quantity that is not certified on both sides.   

### Payment Certificates (IPC)

Projects › Transactions › Billing to the client › Payment Certificates (IPC) 

An interim payment certificate bills the work that Engineering and Construction have both certified, less what earlier certificates claimed. It calculates the gross value, retention, VAT and advance recovery and the net amount payable by the client. Revenue is recognised on the certified value; the tax invoice then moves it from the contract asset to the receivable. How to use it
- Select + New payment certificate.
- Choose the Project, the Certificate date and the period. VAT % and Advance recovery % default from the project and settings.
- Enter the quantity to certify now on each line, or select Certify all the available quantity.
- Check the summary: gross value, less retention, add VAT, less advance recovery, net payable.
- Select Save as draft, then Submit. The site QS / project manager approves (Approved by Site), then the client's approval is recorded (Approved by Client).
- Raise the tax invoice from the approved certificate; its status becomes Invoiced. 

_[Screenshot: Payment Certificates (IPC)]_

The Payment Certificates (IPC) screen

_[Screenshot: Payment Certificates (IPC) form]_

The form that opens with + New payment certificate 

Fields on the “New payment certificate” form
| Field | Type | What to enter / options | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Certificate date required | Date |  | 
| Period from  | Date |  | 
| Period to  | Date |  | 
| Reference  | Text | Your own reference, such as an external document number. | 
| VAT %  | Number | VAT rate. 5 for standard-rated supplies, 0 for zero-rated or exempt. | 
| Advance recovery %  | Number |  | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: # · WBS · DESCRIPTION · UNIT · CONTRACT QTY · RATE · DESIGN QTY CERTIFIED · INSTALLED QTY CERTIFIED · CLAIMED BEFORE · AVAILABLE TO BILL · THIS CERTIFICATE · CUMULATIVE · % OF CONTRACT · VALUE THIS CERTIFICATE 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved by Site · Approved by Client · Invoiced · Cancelled | 

 

Buttons on this screen
- + New payment certificate
- Certify all the available quantity
- Clear the quantities
- Save as draft 

Good to know
- Status flow: Draft → Submitted → Approved by Site → Approved by Client → Invoiced (or Cancelled).
- Whether revenue is recognised at site approval or client approval is a setting in Project Control Settings.
- Alerts appear on the Overview when a certificate waits too long for approval or is not invoiced.   

### Change Orders

Projects › Transactions › Billing to the client › Change Orders 

After the BOQ is baselined, quantities, rates and costs change only through change orders. A Variation (client approved) changes what you can bill and usually the cost budget. A Cost budget revision is internal and changes the cost budget only. Approval updates the BOQ, the contract value and the budgets that control purchasing. How to use it
- Select + New change order.
- Choose the Project and the Type of change, the Date, the Client instruction / reference and the Reason.
- For each affected BOQ line enter the change in quantity, the new rate or the new unit costs. Leave a field empty to keep it. Choose + New BOQ line in the first column to add new scope.
- The footer shows sales budget, cost budget and margin before and after.
- Select Save as draft or Save and submit. An approver approves it; the BOQ is updated. 

_[Screenshot: Change Orders]_

The Change Orders screen

_[Screenshot: Change Orders form]_

The form that opens with + New change order 

Fields on the “New Change order” form
| Field | Type | What to enter / options | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Type of change required | List | 

Variation (client approved) · Cost budget revision | 
| Date required | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 
| Client instruction / reference  | Text |  | 
| Reason  | Text | Why this was done. Kept for audit. | 

 

Table columns: # · BOQ LINE · WBS (NEW LINE) · DESCRIPTION (NEW LINE) · UNIT · QUANTITY NOW · CHANGE IN QUANTITY · NEW QUANTITY · NEW CONTRACT RATE · NEW MATERIAL /UNIT · NEW LABOUR /UNIT · NEW EQUIPMENT /UNIT · NEW SUBCONTRACT /UNIT · NEW OVERHEAD /UNIT · SALES BUDGET CHANGE · COST BUDGET CHANGE 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Submitted · Approved · Rejected · Cancelled | 

 

Buttons on this screen
- + New change order
- + Add line adds a line to the table.
- Save as draft
- Save and submit 

Good to know
- Status flow: Draft → Submitted → Approved / Rejected (or Cancelled).   

### Budgets (version control)

Projects › Transactions › Cost control › Budgets 

Version control for the project cost budget outside the BOQ. The original budget (v1.0) is locked once approved; every later change is a revision with a reason, an approval and an audit trail. Purchase control, commitments, forecasts and revenue recognition all use the current (Active) version. The screen shows original and current budget, approved changes, actual, committed, available budget, forecast to complete and estimate at completion. How to use it
- Choose the project.
- Select + Create original budget (v1.0). The current figures are loaded; adjust them by WBS code and cost category.
- Select Save and submit for approval. Once approved, the version is active and locked.
- For later changes create a revision, enter the new amounts and the reason (and the change order if your settings require one), and submit it.
- Use the Forecast to complete tab each month to update the estimate without a revision. 

_[Screenshot: Budgets (version control)]_

The Budgets (version control) screen

_[Screenshot: Budgets (version control) form]_

The form that opens with + Create original budget (v1.0) 

Fields on the “New budget version” form
| Field | Type | What to enter / options | 
| Project required automatic | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Version automatic | Text |  | 
| Type automatic | Text |  | 
| Effective date required | Date |  | 
| Remark  | Text |  | 

 

Table columns: # · WBS CODE / ACTIVITY · COST CATEGORY · BUDGET · ACTUAL TO DATE · COMMITTED · REMARK 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 

 

Buttons on this screen
- + Create original budget (v1.0)
- Print current budget
- Current budget
- Versions & revisions (0)
- Forecast to complete
- + Add line adds a line to the table.
- Load the current budget of the project
- Save as draft
- Save and submit for approval 

_[Screenshot: New budget version form]_

New budget version form 

Fields: New budget version form
| Field | Type | What to enter / options | 
| Project required automatic | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Version automatic | Text |  | 
| Type automatic | Text |  | 
| Effective date required | Date |  | 
| Remark  | Text |  | 

 

Good to know
- Settings in Project Control Settings decide who approves revisions and whether the approver must be a different person from the preparer. 

Revisions by activity and job head
- When the Job Activity Master has items, + New revision and + Create original budget open the allocation window of the Project Master (Budget & Cost to Complete) instead of the line-by-line form. Approval, locking, history and the use of the budget in purchase control are unchanged. A revision prepared in the allocation window cannot be edited in the old form; open it from the Project Master.   

### Budget & Cost to Complete

Projects › Transactions › Cost control › Budget & Cost to Complete 

Allocate the budget of a project, and its estimated cost to complete, to the activities of the Job Activity Master and to job heads, until the allocation equals the total set in the Project Master. Both work in the same way, with revisions. This screen lists every project with its total, what is allocated, and whether they match; open a project from here or from the Project Master. Budget: how to use it
- In the Project Master enter Total Budget Cost (the control total), save, open the project again and select BUDGET. The Revision Selection window lists the revisions: number, date, description, status and amount.
- Select Insert, enter the date and the description and select Insert. Revision 0 is the original budget. A later revision starts from the current budget; give the reason, and the change order or variation order if the Project Control Settings ask for it.
- The Job Activity Master opens on the left of the allocation window as a tree: sections, groups, sub-groups and activities. Open the groups (+ opens all of them) or search by code or name, then tick the activities of this project. Ticking a group ticks every activity in it. Select Add ticked, or drag an activity or a group into the project list, or double-click an activity. Each activity you add comes with a line for every job head related to it, so only the quantity, rate and amount are left to type. An activity that is already in the budget shows ✓ added. Hide Job Activity Master gives the allocation more room; Add under the activity list still opens the list picker. On a phone or tablet, where dragging does not work, use the tick boxes. The Qty next to an activity is information only.
- Select an activity. On the right its related job heads are already listed: type the quantity and the rate and the amount is quantity × rate, or type the amount and the rate is worked out. Select Add for any other job head (the related heads are listed first). A line with no quantity, rate or amount is not saved, and an activity with no amount at all is not kept in the revision. Delete removes the last line, ✕ a line, Undo the last change; to take an activity out of the list select it and use Delete under the list, and it returns to the master.
- At the bottom the window shows Allocated, the Total budget cost of the project and the Difference, with the total by cost type. When the difference is zero it shows ✓ Matches. The total can be changed in the box when the budget itself has changed.
- Save keeps a draft. Save & submit for approval is refused until the allocation equals the total; it then goes to an approver. Approve it in the Revision Selection window (Approve) or in Budgets. After approval the revision is locked: insert a new revision for a change. Estimated cost to complete: how to use it
- Enter Total Est. Cost to Complete in the Project Master, save, open the project and select ESTIMATED COST TO COMPLETE.
- Insert a revision and allocate in the same window. Choose the activities from the Job Activity Master in the same way as for the budget; next to each activity the master shows its budget, so you can see which activities carry cost. The right side also shows the budget, actual cost and commitments of the activity, and the estimate at completion with this estimate. Fill from budget loads, for each job head, the budget that is not yet spent or committed; change what differs.
- Save & approve checks the total and applies the estimate: the forecast to complete of each activity, and so the estimate at completion of every cost report and of Budgets, is updated. The previous revision becomes Superseded. The forecast can still be changed by hand in Budgets; the next approved revision replaces it for the allocated activities. Import from Excel

In the allocation window select Template to download the allocation (the current lines, or an example) with the lists of activities and job heads. Fill Activity Code, Job Head Code, Unit, Qty, Rate, Amount and Remarks, select Import, choose the file or paste the rows copied from Excel, check the preview and import. Tick Replace the whole allocation to start again; otherwise the rows are added and the same job head of the same activity is combined. 

Good to know
- The budget is kept as budget versions: the approved allocation becomes the budget of the activities by cost type, which purchase control, commitments and forecasts use. It adds to nothing else; there is one budget per project.
- An older budget entered line by line is converted when you insert the first revision: each line becomes one line with the usual job head of its cost type, ready to be split.
- Change orders and variation orders that revise the budget automatically keep the job head detail; the change is added to the activity.
- Activities entered before the master existed, and not in it, are listed at the end of the master panel under Existing project activities, not in the master; tick them like any other. They keep their name but have no related job heads.
- Deleting a revision is possible only for a draft. A job head or an activity used in an allocation cannot be deleted.   

### Manual Project Costs

Projects › Transactions › Cost control › Manual Project Costs 

Costs that no supplier invoice or payroll carries: allocated overheads, site expenses paid in cash, reclassifications. Each is allocated to a WBS code and cost category, has an offset account, and is approved before it posts Dr Project Cost Account / Cr offset account. How to use it
- Select + New manual cost.
- Choose the Project, WBS code / activity, Cost category and Type of cost.
- Enter the Cost date, Amount and the Offset account (credit), plus a reference and description.
- Save, then submit. The approver posts it. 

_[Screenshot: Manual Project Costs]_

The Manual Project Costs screen

_[Screenshot: Manual Project Costs form]_

The form that opens with + New manual cost 

Fields on the “New manual project cost” form
| Field | Type | What to enter / options | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| WBS code / activity required | List | 

Pick from the master list | 
| Cost category required | List | 

Labour · Materials · Equipment · Subcontract · Overhead · Other | 
| Type of cost required | List | 

Overhead · Reclassification · Field Expense · Other | 
| Cost date required | Date |  | 
| Amount required | Number | The amount before VAT. | 
| Offset account (credit) required | List | 

Pick a ledger account from the chart of accounts | 
| Reference (voucher, allocation sheet)  | Text | Your own reference, such as an external document number. | 
| Description required | Text | A short description. | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Draft · Pending Approval · Posted · Rejected · Reversed · Legacy | 
| Type  | List | 

Overhead · Reclassification · Field Expense · Other · Inventory issue · Subcontract · Asset · Journal | 

 

Buttons on this screen
- + New manual cost
- Print register
- Save as draft
- Save and submit for approval 

Good to know
- Status flow: Draft → Pending Approval → Posted (or Rejected; Reversed after posting).
- Print register prints the list for the filters chosen.
- A cost above the available budget is warned or blocked according to the settings.   

### Manual Commitments

Projects › Transactions › Cost control › Manual Commitments 

Commitments the system cannot see from a purchase order: verbal subcontracts, estimated utilities, agreed supplies without an order. With open purchase orders they reduce the available budget (budget − actual − orders not yet received − manual commitments) until consumed by invoices or closed. How to use it
- Select + New commitment.
- Choose the Project, WBS code / activity, Cost category and Type of commitment, and name the subcontractor or supplier.
- Enter the Commitment date, Committed amount and the validity period (Valid from, Valid to) and a description.
- Save.
- As invoices arrive, record the consumed amount; close the commitment to release what is left. 

_[Screenshot: Manual Commitments]_

The Manual Commitments screen

_[Screenshot: Manual Commitments form]_

The form that opens with + New commitment 

Fields on the “New manual commitment” form
| Field | Type | What to enter / options | 
| Project required | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| WBS code / activity required | List | 

Pick from the master list | 
| Cost category required | List | 

Labour · Materials · Equipment · Subcontract · Overhead · Other | 
| Type of commitment required | List | 

Verbal Subcontract · Verbal Supply · Estimated Utility · Estimated Site Expense · Other | 
| Subcontractor / supplier  | Text |  | 
| Commitment date required | Date |  | 
| Committed amount required | Number |  | 
| Valid from required | Date |  | 
| Valid to required | Date |  | 
| Description required | Text | A short description. | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Expired · Closed | 

 

Buttons on this screen
- Commitment aging lists open orders and commitments by age, with those that need a decision.
- + New commitment
- Print register 

Good to know
- The KPIs show commitments expiring within 30 days and expired ones still open.   

### Month-End Close (Projects)

Projects › Transactions › Month-end & closing › Month-End Close 

A checklist per project for the month-end: reversal of last month's accruals, cost accrued for certified work not yet invoiced, open measurement sheets and payment certificates, the revenue and cost recognition run, GRNs not invoiced and the contract asset or liability. The KPIs show projects ready to close, cost to accrue, contract assets and liabilities. How to use it
- Choose the Month-end date.
- Select a project to see what is still open, and complete each step.
- Use Print checklist or Export CSV to share the status. 

_[Screenshot: Month-End Close (Projects)]_

The Month-End Close (Projects) screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Month-end  | Date |  | 

 

Columns shown: Project · Method · Reversal of earlier accruals · Cost accrued for certified work · Measurement sheets · Payment certificates · Revenue and cost recognition run · GRN not invoiced · Contract asset / (liability) · Ready 

Buttons on this screen
- Print checklist
- Export CSV 

Good to know
- The close only adds what is missing (accruals, recognition); it does not change cost already booked.   

### Final Account & Closing

Projects › Transactions › Month-end & closing › Final Account & Closing 

Settles the contract: original contract sum, change orders and final contract sum; revenue recognised, actual cost and final margin; work certified and invoiced, VAT, retention, advance recovered, collections and outstanding amounts. A closing checklist lists anything that prevents closing. How to use it
- Choose the project.
- Work through the closing checklist (BOQ baselined, all lines certified and invoiced, month-end done, no open documents, contract asset cleared).
- Select Print final account for the client and management.
- Select Close the project when the checklist is clear. 

_[Screenshot: Final Account & Closing]_

The Final Account & Closing screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 

 

Columns shown: Cost type · Budget · Actual · Variance 

Buttons on this screen
- Print final account
- Close the project 

Good to know
- A closed project takes no more orders, receipts, invoices or costs (when the lock is on in settings).   

### Project Completion Transfer

Projects › Transactions › Month-end & closing › Project Completion Transfer 

Moves the cost held on a project-analysis account (for example Construction in Progress) to Cost of Sales or to Fixed Assets when the project is complete. The analysis lines move across, so the project cost report keeps the history. How to use it
- Choose the Project and the Cost account (control account) holding its cost.
- Choose Transfer to: Cost of sales or Fixed Assets, and the Target account.
- Enter the Date, review the amount and post the transfer. 

_[Screenshot: Project Completion Transfer]_

The Project Completion Transfer screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Cost account (control account)  | List | 

Construction in Progress – Projects Cost Control | 
| Transfer to  | List | 

Cost of sales · Fixed Assets | 
| Target account  | List | 

Material Cost · Direct Labour · Subcontractors · Project Overheads · Cost of Revenue – Contracts · Onerous Contract Loss · Stock Adjustment Loss · Inventory Write-down Expense · Cost of Sales – Trading Goods · Cost of Services · Insurance Amortization - Cost of Sales · Rent Amortization - Cost of Sales · Freight Amortization - Cost of Sales · Other Prepaid Amortization - Cost of Sales | 
| Date  | Date | Document date. It decides the accounting period the posting falls in. Defaults to today. | 

   

### Month-End Closing · Milestones

Projects › Transactions › Month-end & closing › Milestones 

Closes each project every month in six ordered steps: accruals, commitments, earned value, WIP and revenue, loss provision, and the period lock. The table shows each project's steps, CPI, SPI, risk and status. A closed month is locked against back-dated entries for that project. How to use it
- Choose the Month-end.
- Select Continue on a project to open its closing and complete the steps in order.
- Use Closing register for the history and Contract milestones for billing milestones. 

_[Screenshot: Month-End Closing · Milestones]_

The Month-End Closing · Milestones screen

_[Screenshot: Month-End Closing · Milestones form]_

The form that opens with Continue 

Fields after selecting Continue
| Field | Type | What to enter / options | 
| Month-end  | Date |  | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Month-end  | Date |  | 

 

Columns shown: Project · Manager · Steps · CPI · SPI · Risk · Status 

Buttons on this screen
- Month-end closing the closing table for all projects.
- Closing register every month closed, by whom and when.
- Contract milestones contract billing milestones with due dates and values.
- Export CSV
- Continue 

_[Screenshot: Monthly closing steps of a project]_

Monthly closing steps of a project  

### Reports  

### Project Profitability

Projects › Reports › Profitability & cost › Project Profitability 

Every project against its two budgets: contract value, cost budget, expected margin, actual and committed cost, cost to complete, projected cost and margin, progress and billing. A project is At risk when the projected margin is below 80% of the expected margin and In loss below zero. 

_[Screenshot: Project Profitability]_

The Project Profitability screen 

Columns shown: Project · Sales budget · Cost budget · Expected margin · Actual · Committed · To complete · Projected cost · Projected margin · % · Progress · Billed · Status   

### Project Cost Control

Projects › Reports › Profitability & cost › Project Cost Control 

One line per project with contract value, revenue, budget, actual cost, committed, forecast cost, variance, % used, profit to date, margin and progress. Select a project for the detail by cost type and source. 

Actual cost = posted payroll, GRNs, supplier invoices without GRN, approved petty cash, stock issued to the project and manual costs. Committed = approved orders not yet delivered plus manual commitments. Forecast = actual + committed + estimate to complete. 

_[Screenshot: Project Cost Control]_

The Project Cost Control screen 

Columns shown: Project · Contract value · Revenue · Budget · Actual cost · Committed · Forecast cost · Variance · Used % · Profit to date · Margin % · Progress % · Status 

Buttons on this screen
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Job Cost vs Budget

Projects › Reports › Profitability & cost › Job Cost vs Budget 

Projected cost against budget by project, cost type and activity, at three levels of detail. Variance = projected cost − budget; overruns show in red. How to use it
- Choose the Report level (Level 01 project, 02 cost type, 03 activity), the Project and the As on date.
- Print, save as PDF or export to Excel. 

_[Screenshot: Job Cost vs Budget]_

The Job Cost vs Budget screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Report level  | List | 

Level 01 · Level 02 · Level 03 | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list (All projects also offered) | 
| As on  | Date |  | 

 

Columns shown: Job ID · Job Name · Projected cost · Budget · Variance · Actual · Committed · Est-to-comp. · Line total · Amount · % 

Buttons on this screen
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Activity Budget & Forecast Reports

Projects › Reports › Activity budget & forecast › Activity Budget & Forecast Reports 

Seven reports built on the allocation of the budget and of the estimated cost to complete. Choose the report, the project and, where it applies, the level of the Job Activity Master to add up to (1 section to 5 sub-activity). Every report has Print (with ✉ Email in the print window) and Excel. 

The reports
| Report | What it shows |  
| Budget by Activity (5 levels) | The approved budget (or a revision you choose) added up by section, group, sub-group, activity and sub-activity, with the job head detail if you tick it. |  
| Budget by Job Head | The budget by job head with quantity, share of the total and the estimated cost to complete, largest first. |  
| Budget Revisions | Every revision with date, reason, amount, change, order and who approved it, and a comparison of two revisions by activity. |  
| Budget, Actual and Committed | By activity level: budget, actual cost, committed, available, percentage used, cost to complete, estimate at completion and the variance against the budget. |  
| Estimated Cost to Complete | The same by activity with the current estimate, the history of the estimate revisions and, if you tick it, the lines by job head. |  
| Estimate at Completion (all projects) | For every project: contract value, budget, actual, committed, cost to complete, estimate at completion (actual + committed + cost to complete), variance against the budget and the forecast margin. |  
| Allocation Control (all projects) | For every project, whether the budget and the cost to complete are allocated and equal to the totals in the Project Master (OK, Mismatch, Not allocated). |  

 

Good to know
- Actual cost and commitments come from the documents and costs posted to the project activity; they are shown by activity, not by job head. Cost posted to an activity that is not in the budget is shown under — (not in the master).
- The estimate at completion follows the usual project-control rule: actual cost + commitments + estimated cost to complete. The variance is the budget minus the estimate at completion; a negative figure means an expected overrun.   

### Project Comprehensive Report

Projects › Reports › Comprehensive report › Project Comprehensive Report 

The complete file of one project in one report: details and contract terms, cost and revenue budgets, profitability, progress and earned value, billing and collections, advances, retentions, purchases and commitments, and the people and equipment on the project. Every figure is taken from the same calculation as the Project Profitability, Project Cost Control and Contracts & Retention screens, so the numbers agree. How to use it
- Select Projects › Reports › Comprehensive report. Type in the search box or use the two filters to find the project.
- Choose the Report date and tick the sections you need; all of them are ticked at first.
- Select Open report on the project, or tick several projects and select Print selected.
- In the report, change the Report date at the top to prepare it again as at another date, then Print it or save it as a PDF.
- Open it from Reports (the Reports hub), from the Reports group of the module, from the Report button on each line of the project master, or from the 📊 Comprehensive report button at the bottom of the project form (shown for a saved record). 

What the report contains
| Section | What it shows | 
| 1. Project details & contract terms | Client and its TRN, contract number, location, manager, start and end dates, planned duration and time elapsed, revenue type, measurement method, retention %, retention cap, advance recovery %, budget control and whether the project is BOQ based. | 
| 2. Contract value & revenue budget | Original contract value, approved variations and change orders, the revised contract value, the revenue recognised to date and the part not yet recognised, with the variation orders listed. | 
| 3. Cost budget by cost type & revisions | Budget, actual, committed, estimate to complete, forecast, variance and % used for each cost type, then the budget versions and the estimate to complete versions. | 
| 4. Activity budget, cost & forecast | For each activity: budget, actual cost, committed, estimate to complete, forecast, variance and progress. | 
| 5. Profitability | Expected, projected and gross profit to date, status (on track, at risk, in loss), revenue recognised, and the contract works figures: percentage complete, loss provision, contract asset or liability. | 
| 6. Progress, milestones & earned value | Physical progress against time elapsed and cost incurred, earned value indicators (CPI, SPI, estimate at completion) and the milestones with their due dates. | 
| 7. Billing, certification & collections | Certified, invoiced, collected, outstanding and overdue amounts and work done not yet billed, then the sales invoices (with retention and outstanding) and the receipts. | 
| 8. Advances | Advance received from the client, the part recovered through invoices and certificates, the advance not yet recovered and the recovery rate; each advance with the amount reserved on open IPCs; and the advance payments made to suppliers on this project. | 
| 9. Retentions | Retention % and cap in the contract, retention withheld from the client, released to date and the balance held, retention on approved IPCs not yet invoiced, the retention schedule by invoice, and the retention withheld from suppliers (project share). | 
| 10. Cost analysis by source & month | Actual cost by source of the entry (entries, amount and % of cost), then cost and revenue by month with the cumulative totals. | 
| 11. Purchases, subcontracts & commitments | Purchase orders with order value, received and open commitment, and the supplier invoices by supplier with the amount invoiced and still unpaid (project share). | 
| 12. Resources, stores & equipment | Active employees assigned to the project, the assets and vehicles on it with cost and net book value, and the stores of the project with their storekeepers. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Search  | Text | By code, name, client, manager or location. | 
| Status  | List | All statuses, or one project status. | 
| Client  | List | All clients, or one client. | 
| Report date  | Date | The report is prepared as at this date. It starts with today. Changing the date inside an open report prepares it again. | 
| Project details & contract terms  | Tick box |  | 
| Contract value & revenue budget  | Tick box |  | 
| Cost budget by cost type & revisions  | Tick box |  | 
| Activity budget, cost & forecast  | Tick box |  | 
| Profitability  | Tick box |  | 
| Progress, milestones & earned value  | Tick box |  | 
| Billing, certification & collections  | Tick box |  | 
| Advances  | Tick box |  | 
| Retentions  | Tick box |  | 
| Cost analysis by source & month  | Tick box |  | 
| Purchases, subcontracts & commitments  | Tick box |  | 
| Resources, stores & equipment  | Tick box |  | 
| Tick box on each line  | Tick box | Selects the line for Print selected. Up to 30 lines can be printed at a time. | 

 

Columns shown: Code · Project · Client · Contract value · Start · End · Status 

Buttons on this screen
- Print selected (0) prints the ticked lines, each on its own page.
- Open report opens the report of that line. 

Good to know
- The box Points that need attention under the headline figures lists what to look at first; when nothing is wrong it says so.
- The report date limits the cost and the transactions in the report. Budgets, open commitments, the estimate to complete and current statuses are always shown as they stand today, and the section note says so.
- When several projects are printed together, each report starts on its own page. A section with no data says so instead of printing an empty table.
- If one section cannot be prepared the others still print and that section shows a message. 

Who can open it
- Roles that have the Projects module.   

### Project Control Reports

Projects › Reports › Project control reports › Project Control Reports 

A library of project control reports. Open a report, choose one project or all, then print or export it. 

| Report | Shows | 
| Two Budgets | Sales and cost budget per project, expected margin, billed and remaining to bill. | 
| Bill of Quantities and Cost Build-up | Every BOQ line with rate, unit cost by component, cost budget and margin. | 
| Forecast Margin by WBS | Budgets, actual, committed, estimate to complete, projected cost and margin per line. | 
| Margin Erosion | Lines whose projected margin is below the expected margin. | 
| Stage Gate Status | Gates, design and installed quantity, billable, claimed and invoiced per line. | 
| Measurement Register | Measurement sheets, status and certified values. | 
| Payment Certificate Register | Every IPC: work done, VAT, retention, advance recovered, net payable. | 
| Revenue, Billing and Contract Position | Revenue against billing: contract assets and liabilities, WIP, retention receivable. | 
| Commitments Against Budget | Budget, actual, committed and remaining by project and cost type. | 
| Retention Schedule | Retention withheld, released and still held. | 
| Change Order Register | Variations and cost revisions with their budget effect. | 
| Month-End Accruals | Cost accrued for certified work not yet invoiced. | 
| Budget Versions and Revisions | Every budget version, change order behind it and approver. | 
| Manual Project Costs / Manual Commitments | The manual entries with status and journals. | 
| Commitment Aging | Open orders and commitments by age. | 
| Earned Value (CPI and SPI) | Budget, % complete, planned and earned value, actual cost, CPI, SPI and risk flag. | 

 

_[Screenshot: Project Control Reports]_

The Project Control Reports screen  

### More screens  

### Budget Versions

Projects › More screens › Budget Versions 

A read-only log of every budget version created in Budgets, with its number (BV-…), project and status.   

### Month-End Closings

Projects › More screens › Month-End Closings 

A read-only log of every project month-end closing (MEC-…) done in Milestones.   

 

🛒

Module guide
