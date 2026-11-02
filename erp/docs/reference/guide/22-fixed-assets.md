## Fixed Assets

The asset register with documents and components, capitalisation of cost under IAS 16, monthly depreciation, transfers between locations and custodians, and disposal. 

An asset is first created in the Asset Register (or by a Capitalisation). Its cost is built up from the GRN, purchase invoice or Capitalisation lines that select it, so the register always agrees with the purchases. The Depreciation Run charges depreciation once a month for every asset and component and posts one journal. Asset Transfer moves an asset between branches, departments, cost centres, projects and custodians without changing its value; Disposal retires it and records the gain or loss.

Accounts come from the Asset Type (cost, accumulated depreciation and depreciation expense). Vehicles keep their plate, chassis and driver details and document expiries (registration, insurance, inspection). 

Asset accounting
| Event | Screen | Entry |  
| Purchase / capitalisation | GRN, purchase invoice or Capitalisation | Dr Asset cost · Cr GRN Payables / Payables / clearing account |  
| Monthly depreciation | Depreciation Run | Dr Depreciation expense (by cost centre / project) · Cr Accumulated depreciation |  
| Transfer | Asset Transfer | No value change; future depreciation goes to the new cost centre |  
| Disposal | Disposal | Cr Asset cost, Dr Accumulated depreciation, Dr Bank / receivable (proceeds), Output VAT, gain or loss on disposal |  

 

#### Screens in this module

Masters & SettingsAsset RegisterAsset TypesVehicle Expense CategoriesAsset Settings

TransactionsCapitalisationAsset TransferDepreciation RunDisposal

ReportsAsset Register ReportFixed Asset MovementAsset Documents StatusAsset Comprehensive Report 

### Masters & Settings  

### Asset Register

Fixed Assets › Masters & Settings › Asset Register 

The master record of each asset. The form has tabs: Asset details, Type and classification, Location and custodian, Depreciation, Documents and Components. The cost is not typed for new assets: it is added by the purchase documents that select the asset. How to use it
- Select + New. The code (FA-0001) is automatic.
- On Asset details enter the name, description, serial number, supplier and VAT treatment. Enter an Opening cost only for assets owned before go-live.
- On Type and classification choose the Asset type and select Apply standard accounts (cost, accumulated depreciation, expense accounts come from the type).
- On Location and custodian enter the vehicle details (plate, make, model, year, chassis, driver) for vehicles, and the site, branch, department, cost centre, project and custodian.
- On Depreciation choose the method, useful life, residual value and start date.
- On Documents add registration (Mulkiya), insurance and inspection with numbers, dates and reminder days. Expiring documents appear on the Overview and in Asset Documents Status.
- On Components split a large asset into parts with their own lives (IAS 16), if needed.
- Select Save asset. Then select it on the GRN, purchase invoice or Capitalisation that brings in its cost. 

_[Screenshot: Asset Register]_

The Asset Register screen

_[Screenshot: Asset Register form]_

The form that opens with + New 

Fields on the “New asset” form
| Field | Type | What to enter / options | 
| Asset details | 
| Asset code automatic | Text |  | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic name  | Text | Printed on documents next to the English name. | 
| Description  | Text | A short description. | 
| Serial number  | Text |  | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| Purchase invoice  | List | 

PI-000001 | 
| Purchase date (the first purchase sets it if left blank)  | Date |  | 
| Opening cost (leave blank for a new asset; purchases add the cost)  | Number | For assets brought in at go-live only. | 
| Cost from purchases automatic | Text |  | 
| Total cost automatic | Text |  | 
| VAT treatment  | List | Standard rate (recoverable), Zero-rated, Exempt, Reverse charge, or Not recoverable (VAT added to cost).

Standard rate (recoverable) · Zero-rated · Exempt · Reverse charge · Not recoverable (added to cost) | 
| Type and classification | 
| Asset type *—VehicleBuildingMachineryFurnitureTools & Equipment required | List | 

Vehicle · Building · Machinery · Furniture · Tools & Equipment | 
| Category  | Text |  | 
| Cost account  | List | 

Pick a ledger account from the chart of accounts | 
| Accumulated depreciation account  | List | 

Pick a ledger account from the chart of accounts | 
| Depreciation expense account  | List | 

Pick a ledger account from the chart of accounts | 
| Location and custodian | 
| Plate number  | Text |  | 
| Make  | Text |  | 
| Model  | Text |  | 
| Year  | Number | The calendar year. | 
| Chassis number  | Text |  | 
| Driver / custodian  | List | 

Pick from the master list | 
| Site / location  | Text |  | 
| Building / room  | Text |  | 
| Project (optional)  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Custodian  | List | 

Pick from the master list | 
| Handover date  | Date |  | 
| Depreciation | 
| Method  | List | Straight line, Reducing balance or Units of use.

Straight line · Reducing · Units of use | 
| Useful life (years)  | Number |  | 
| Residual value  | Number | Expected value at the end of the useful life. | 
| Depreciation start date  | Date | Date depreciation begins (when the asset is available for use). | 
| Total units (units of use)  | Number | Total hours or kilometres expected, for the units-of-use method. | 
| Reducing-balance rate % a year (optional)  | Number | Rate for the reducing method; blank calculates it from the life. | 

 

Table columns: Document type · Number · Issue date · Expiry date · Reminder (days) · Attachment · Status 

Table columns: Component · Cost · Life (yrs) · Method · Residual · Depreciation expense account · Accumulated depreciation account 

Buttons on this screen
- Asset details
- Type and classification
- Location and custodian
- Depreciation
- Documents
- Components
- Apply standard accounts
- + Add document type
- + Add component
- Save asset 

Comprehensive report
- Every line of the list has a Report button, and a saved asset has a 📊 Comprehensive report button at the bottom of its form: both open the Asset Comprehensive Report.   

### Asset Types

Fixed Assets › Masters & Settings › Asset Types 

Asset types (Vehicle, Building, Machinery, Furniture, Tools & Equipment) with their accounts and default depreciation method, useful life and residual %. New assets take these defaults. How to use it
- Select + New, enter the name, and choose the cost, accumulated depreciation and expense accounts (or Apply standard accounts).
- Set the default Method, Useful Life and Residual %.
- Save. 

_[Screenshot: Asset Types]_

The Asset Types screen

_[Screenshot: Asset Types form]_

The form that opens with + New 

Fields on the “New Asset Type” form
| Field | Type | What to enter / options | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Cost Account  | List | 

Pick a ledger account from the chart of accounts | 
| Accum Dep Account  | List | 

Pick a ledger account from the chart of accounts | 
| Dep Expense Account  | List | 

Pick a ledger account from the chart of accounts | 
| Method  | List | How the money moves: Cash, Bank Transfer or Cheque.

Straight line · Reducing · Units of use | 
| Useful Life (yrs)  | Number |  | 
| Residual %  | Number |  | 

 

Buttons on this screen
- Apply standard accounts   

### Vehicle Expense Categories

Fixed Assets › Masters & Settings › Vehicle Expense Categories 

Categories of vehicle running costs (repair and maintenance, insurance, registration, fuel, fines, tyres) used when expenses are analysed by vehicle. How to use it
- Select + New, enter the name and its default GL account, and Save. 

_[Screenshot: Vehicle Expense Categories]_

The Vehicle Expense Categories screen

_[Screenshot: Vehicle Expense Categories form]_

The form that opens with + New 

Fields on the “New Vehicle Expense Category” form
| Field | Type | What to enter / options | 
| Code  | Text | Created automatically for this master. It cannot be changed later. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Default GL Account  | List | 

Pick a ledger account from the chart of accounts | 
| Status  | List | Current stage of the record. Usually changed by the buttons (Submit, Approve, Post), not by hand.

Active · Inactive | 

 

Buttons on this screen
- Apply standard accounts   

### Asset Settings

Fixed Assets › Masters & Settings › Asset Settings 

Rules for capitalisation, transfers, depreciation and disposal: how part-months are charged, when depreciation starts, the capitalisation threshold and clearing account, who approves transfers, whether register fields are locked, and the VAT rate on asset sales. How to use it
- Set each rule and select Save. 

_[Screenshot: Asset Settings]_

The Asset Settings screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Depreciation | 
| Part of a month  | List | Daily (days held), Full month, Half month or Next month.

Daily · Full month · Half month · Next month | 
| Depreciation starts on  | List | Default start: the capitalisation date or the first of the next month.

Capitalisation date · First of next month | 
| Capitalisation | 
| Capitalisation threshold  | Number | Purchases below this amount give a warning (small items are normally expensed). 0 = no warning. | 
| Asset clearing account (work in progress)  | List | Account credited when cost is capitalised from a clearing or CWIP account.

Pick a ledger account from the chart of accounts | 
| Transfer and register | 
| Transfer approval  | List | Who must approve a transfer: both custodians, the receiving or sending custodian, or nobody.

Both custodians · Receiving custodian · Sending custodian · Not required | 
| Lock the register fields  | List | Yes stops editing of location and custodian on the register; changes must go through transfers.

No · Yes | 
| Disposal | 
| VAT on the sale of an asset (%)  | Number |  | 

  

### Transactions  

### Capitalisation

Fixed Assets › Transactions › Capitalisation 

Builds up the cost of an asset the way IAS 16 requires: purchase price, customs duty, freight and insurance, installation, site preparation, professional fees, testing, borrowing cost, dismantling provision and other directly attributable costs, less discounts. Posting creates the asset (or adds to an existing one), debits the asset account and credits payables or the clearing account. How to use it
- Select + New.
- 1 · Source document: choose a purchase invoice, a GRN, or no source document.
- 2 · Asset: create a new asset (type, name, capitalisation date, supplier) or add cost to an existing asset.
- 3 · Cost build-up: add each cost line with amount, VAT (recoverable or not) and the account credited (supplier payable, clearing, CWIP, accrued expenses, bank or other).
- 4 · Depreciation: method, life, residual value and start date.
- 5 · Location and responsibility: branch, department, cost centre, project and custodian.
- 6 · Review, then Save and submit. An approver posts it. 

_[Screenshot: Capitalisation form]_

The form that opens with + New 

Fields on the “New Capitalisation” form
| Field | Type | What to enter / options | 
| 1 · Source document | 
| Purchase invoice  | Option |  | 
| Goods receipt (GRN)  | Option |  | 
| No source document  | Option |  | 
| 2 · Asset | 
| Create a new asset  | Option |  | 
| Add cost to an existing asset  | Option |  | 
| Asset type required | List | 

Vehicle · Building · Machinery · Furniture · Tools & Equipment | 
| Asset name required | Text |  | 
| Arabic name  | Text | Printed on documents next to the English name. | 
| Serial number  | Text |  | 
| Capitalisation date required | Date |  | 
| Supplier  | List | The supplier, from the Suppliers master.

Pick from the master list | 
| 4 · Depreciation | 
| Method  | List | How the money moves: Cash, Bank Transfer or Cheque.

Straight line · Reducing · Units of use | 
| Useful life (years)  | Number |  | 
| Residual value  | Number |  | 
| Depreciation starts  | List | 

On the capitalisation date · First day of the next month · A date I choose | 
| Available-for-use date required | Date |  | 
| 5 · Location and responsibility | 
| Branch  | List | The branch, if the company has several branches.

Pick from the master list | 
| Department  | List | The department responsible.

Pick from the master list | 
| Cost centre  | List | 

Pick from the master list | 
| Project  | List | The project this record belongs to. Costs and revenue are reported against it.

Pick from the master list | 
| Custodian  | List | 

Pick from the master list | 
| Site / location  | Text |  | 
| Building / room  | Text |  | 
| Handover date  | Date |  | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Table columns: COST · DESCRIPTION · SUPPLIER · REFERENCE · AMOUNT · VAT % · VAT · CREDIT TO 

Buttons on this screen
- + Add a cost
- Save as draft
- Save and submit   

### Asset Transfer

Fixed Assets › Transactions › Asset Transfer 

Moves an asset to another branch, department, cost centre, project or custodian. The net book value does not change; from the transfer date depreciation is charged to the new cost centre, and the custodians sign off the handover. How to use it
- Select + New, choose the Asset and Transfer date.
- In Where it goes choose the new branch, department, cost centre, project and custodian.
- Give the Reason and the Condition at handover.
- Select Save and submit for approval. The custodians approve (as set in Asset Settings), then a finance user executes the transfer and the register is updated. 

_[Screenshot: Asset Transfer form]_

The form that opens with + New 

Fields on the “New Asset Transfer” form
| Field | Type | What to enter / options | 
| 1 · Asset | 
| Asset required | List | 

Pick from the master list (— select — also offered) | 
| Transfer date required | Date |  | 
| 3 · Request | 
| Reason  | List | Relocation, Change of custodian, Project allocation, Department restructuring, Replacement, Repair / maintenance, Temporary loan or Other.

Relocation · Change of custodian · Project allocation · Department restructuring · Replacement · Repair / maintenance · Temporary loan · Other | 
| Condition at handover  | List | Good, Fair or Needs repair.

Good · Fair · Needs repair | 
| Requested by  | Text |  | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Buttons on this screen
- Save as draft
- Save and submit for approval   

### Depreciation Run

Fixed Assets › Transactions › Depreciation Run 

Posts depreciation for one month as a batch. Every asset and component is calculated by its own method, part-months are prorated, and one journal is posted with the cost centre, department and project of each asset. A month already posted is skipped. The History tab lists past runs; Forecast projects future charges. How to use it
- Choose the month with ‹ and ›.
- Select Lock period and calculate: the period is locked against new asset changes and the charge is calculated.
- Review the charge per asset, then Post to ledger. 

_[Screenshot: Depreciation Run]_

The Depreciation Run screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Run  | Option |  | 
| History  | Option |  | 
| Forecast  | Option |  | 

 

Buttons on this screen
- Lock period and calculate 

Good to know
- Run it once a month after all capitalisations, transfers and disposals for the month are posted.   

### Disposal

Fixed Assets › Transactions › Disposal 

Retires an asset by sale, scrap, trade-in, or write-off for loss or theft. Depreciation is brought up to the disposal date, cost and accumulated depreciation are removed, and the gain or loss (proceeds less net book value, IAS 16.71) is recorded. VAT is charged on a sale. How to use it
- Select + New, choose the Asset, Disposal date, Reason and the type (Sale, Scrap, Trade-in or Lost / written off).
- For a sale enter the proceeds before VAT, the Buyer, VAT treatment and where the proceeds are received.
- Check the result (net book value, proceeds, gain or loss).
- Select Save and submit for approval. 

_[Screenshot: Disposal form]_

The form that opens with + New 

Fields on the “New Asset Disposal” form
| Field | Type | What to enter / options | 
| 1 · Asset and type | 
| Asset required | List | 

Pick from the master list (— select — also offered) | 
| Disposal date required | Date |  | 
| Reason  | List | Why this was done. Kept for audit.

Sale to a third party · Replaced by a new asset · No longer needed · Beyond economic repair · Obsolete · Damaged · Lost or stolen · End of useful life · Other | 
| Sale  | Option |  | 
| Scrap  | Option |  | 
| Trade-in  | Option |  | 
| Lost, stolen or written off  | Option |  | 
| 2 · Proceeds | 
| Sale proceeds (before VAT) required | Number |  | 
| Buyer required | List | 

Pick from the master list | 
| VAT treatment  | List | 

Standard · Zero-rated · Exempt or outside the scope of VAT | 
| VAT %  | Number | VAT rate. 5 for standard-rated supplies, 0 for zero-rated or exempt. | 
| Proceeds are received in  | List | Bank or cash, Customer account (receivable), Supplier account (trade-in allowance) or another account.

Bank or cash · Customer account (receivable) · Supplier account (trade-in allowance) · Another account | 
| Bank / cash account (blank = mapped Bank / Cash)  | List | 

Pick a ledger account from the chart of accounts | 
| Cost of removal and sale (optional)  | Number | Costs that reduce the gain. | 
| Remarks  | Text | Free notes. They print on the document. | 

 

Buttons on this screen
- Save as draft
- Save and submit for approval  

### Reports  

### Asset Register Report

Fixed Assets › Reports › Asset Register Report 

All assets with type, location, custodian, purchase date, cost, accumulated depreciation, remaining value and status (with buyer and proceeds for disposed assets), and the cost build-up from purchases. Filter by asset type; print, PDF or Excel. 

_[Screenshot: Asset Register Report]_

The Asset Register Report screen 

Columns shown: Code · Name · Type · Location · Custodian · Purchase date · Cost · Accumulated depreciation · Remaining value · Status · Buyer · Proceeds 

Buttons on this screen
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Fixed Asset Movement

Fixed Assets › Reports › Fixed Asset Movement 

The IAS 16 movement schedule for a period: opening cost, additions, disposals, closing cost; opening depreciation, charge, released on disposal, closing depreciation and net book value, by asset type or by asset. It also checks that the register agrees with the general ledger. How to use it
- Choose From and To months and By asset type or By asset.
- Print or export. 

_[Screenshot: Fixed Asset Movement]_

The Fixed Asset Movement screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| From  | Month |  | 
| To  | Month |  | 
| By asset type  | Option |  | 
| By asset  | Option |  | 

 

Columns shown: Asset type · Cost: opening · Additions · Disposals · Cost: closing · Depreciation: opening · Charge · Released on disposals · Depreciation: closing · Net book value 

Columns shown: Asset register · General ledger · Difference   

### Asset Documents Status

Fixed Assets › Reports › Asset Documents Status 

Every asset document (registration / Mulkiya, insurance, inspection / passing) with number, dates, days left and status. Filter by document type, asset, location and expiry window (expired, within 30, 60 or 90 days, valid). 

_[Screenshot: Asset Documents Status]_

The Asset Documents Status screen 

Columns shown: Asset · Name · Type · Location · Document · Number · Issue date · Expiry date · Days left · Status 

Buttons on this screen
- Reset
- PDF prints the report or saves it as PDF.
- Excel downloads the report as a spreadsheet.   

### Asset Comprehensive Report

Fixed Assets › Reports › Asset Comprehensive Report 

The complete file of one asset in one report: identity and vehicle details, the cost build-up, depreciation and net book value, components, location, custody and project, documents and their expiry, running costs, and the acquisition, transfer and disposal history. Cost, accumulated depreciation and net book value are the same as in the Asset Register and the Depreciation Run. How to use it
- Select Fixed Assets › Reports › Asset Comprehensive Report. Search, or filter by asset type and status.
- Choose the Report date and tick the sections you need.
- Select Open report, or tick several assets and select Print selected.
- Open it from Reports (the Reports hub), from the Reports group of the module, from the Report button on each line of the asset register master, or from the 📊 Comprehensive report button at the bottom of the asset form (shown for a saved record). 

What the report contains
| Section | What it shows | 
| 1. Asset details | Code, status (in use or disposed), name, Arabic name, description, type, category, serial number, supplier, purchase invoice and date, VAT treatment, department, branch and cost centre. | 
| 2. Vehicle details | Plate number, make, model, year, chassis number and driver. For an asset that is not a vehicle the section says so. | 
| 3. Cost build-up | Opening cost and each purchase with its document, the total cost, the capitalisation documents and the ledger accounts of the asset. | 
| 4. Depreciation & net book value | Method, start of depreciation, useful life, residual value, depreciable amount, standard monthly charge, accumulated depreciation, net book value, % depreciated and months in service, then the monthly depreciation postings. | 
| 5. Components | Each separately depreciated component with its cost, life, method, start, accumulated depreciation and net book value. | 
| 6. Location, custody & project | Location, building or room, project, department, custodian with status and handover date, driver, and the custody history. | 
| 7. Documents, registration & insurance | Each document with its number, issue and expiry dates and status. | 
| 8. Running costs | Fuel, repair, maintenance and other costs posted against the asset, by category (with % of total) and by month. | 
| 9. Transfers & disposal | Every transfer of the asset (custodian, branch, department, reason, status) and the disposal with buyer, proceeds, net book value and gain or loss. | 

 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Search  | Text | By code, name, type, plate number, custodian or location. | 
| Asset type  | List | All asset types, or one type. | 
| Status  | List | All statuses, or one asset status. | 
| Report date  | Date | The report is prepared as at this date. It starts with today. Changing the date inside an open report prepares it again. | 
| Asset details  | Tick box |  | 
| Vehicle details  | Tick box |  | 
| Cost build-up  | Tick box |  | 
| Depreciation & net book value  | Tick box |  | 
| Components  | Tick box |  | 
| Location, custody & project  | Tick box |  | 
| Documents, registration & insurance  | Tick box |  | 
| Running costs  | Tick box |  | 
| Transfers & disposal  | Tick box |  | 
| Tick box on each line  | Tick box | Selects the line for Print selected. Up to 30 lines can be printed at a time. | 

 

Columns shown: Code · Name · Type · Location · Custodian · Cost · Net book value · Status 

Buttons on this screen
- Print selected (0) prints the ticked lines, each on its own page.
- Open report opens the report of that line. 

Good to know
- The box Points that need attention under the headline figures lists what to look at first; when nothing is wrong it says so.
- The report date limits the cost and the transactions in the report. The location, custodian, project and status are always shown as they stand today, and the section note says so.
- Expired or expiring documents, a missing custodian or location, a custodian who has left, depreciation not set up or not posted for the last month, and a disposed asset are listed in the box at the top. 

Who can open it
- Roles that have the Fixed Assets module.   

 

🚢

Module guide
