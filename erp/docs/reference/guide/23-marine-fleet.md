## Marine Fleet

Vessels linked to Fixed Assets, voyages as projects, voyage costs through purchase invoices, laytime with demurrage and despatch, marine invoicing through Sales, crew, and the profit and loss of every vessel and voyage. 

Vessel (Fixed Asset)→Voyage (Project)→Voyage costs (Purchase)→Laytime→Marine invoice (Sales)→Crew allocation→Vessel & voyage P&L 

This module is for the company that owns barges, hoppers, tugs and other vessels and earns freight, charter hire, demurrage and standby income from them. It covers the vessel register (an extension of Fixed Assets), voyages (each one a project), voyage costs, crew, laytime with demurrage and despatch, marine invoicing, and the profit and loss of every vessel and voyage.

It works with the rest of the ERP, not beside it. A vessel is a Fixed Asset; a voyage is a Project; a voyage cost is a Purchase Invoice; a freight, hire or demurrage invoice is a Sales Invoice and despatch is a Credit Note; a crew member is an Employee. There is no separate receivable and no separate ledger: everything is posted by Finance. What the module adds is two dimensions on the journal lines, the vessel and the voyage, and the screens and reports that use them.

Control. Nothing can be posted to a closed voyage or to a vessel that has been sold; a marine invoice needs a started voyage; despatch can never exceed what the invoice has left to credit; the person who calculated a laytime statement cannot approve it. Every action is written to the audit trail. 

Marine Fleet documents at a glance
| Document | Screen | Use it for | Accounting when posted | 
| Supplier invoice with a voyage | Voyage Costs | Bunkers, port charges, canal and agency fees of a voyage | Dr Voyage cost account + Input VAT · Cr Accounts Payable, every line with the vessel and voyage | 
| Freight, hire, standby invoice | Marine Invoicing | Billing the charterer (a normal Sales invoice with a marine document type) | Dr Accounts Receivable · Cr Freight / Charter Hire / Standby Revenue – Vessels + Output VAT | 
| Demurrage invoice | Laytime Calculator and Marine Invoicing | Billing the hours over the allowed laytime | Dr Accounts Receivable · Cr Demurrage Revenue – Vessels + Output VAT | 
| Despatch credit note | Laytime Calculator and Marine Invoicing | Allowing the charterer the time saved | Dr Despatch Allowed – Vessels (contra revenue) + Output VAT · Cr Accounts Receivable | 
| Crew cost allocation (Fleet Journal) | Crew Cost Allocation | Charging the month’s crew cost to each vessel | Dr Vessel Operating Cost – Crew (with the vessel) · Cr Applied Labour | 
| Depreciation run |  Fixed Assets | Monthly depreciation of the vessel asset | Dr Depreciation Expense · Cr Accumulated Depreciation, lines carry the vessel | 
| Journal voucher with a vessel |  Finance | Insurance, repairs, drydock amortisation and other costs of a vessel | As entered; the voucher’s details carry the vessel (and the voyage) | 

 

#### The design in one table 

From the blueprint to the ERP
| Blueprint item | In the data | In the ERP | 
| 1. Extend Fixed Assets | fixed_assets_vessel_extension linked to the asset | Vessel Master; Link a Fixed Asset as a vessel; a banner in the Asset Register | 
| 2. Dimensions on the ledger | vessel_asset_id and voyage_id on every journal line | Filled by posting; visible in the ledger screen, the dimension ledger report and the Vessel / Voyage P&L | 
| 3. Voyages | fleet_voyages; a voyage is a project | Voyage Master; the project is created with the voyage | 
| 4. Voyage costs | fleet_voyage_costs; the AP invoice selects a voyage | Purchase Invoice fields Voyage, Vessel and Voyage Cost Type; Voyage Costs for estimates and the list | 
| 5. Invoicing | Sales invoice fields marine_doc_type, voyage_id, vessel_asset_id and the laytime fields; fleet_laytime | Marine Invoicing and the Laytime Calculator; the documents are ordinary Sales invoices and credit notes | 
| 6. Crew | fleet_crew_assignments linked to Employees; monthly allocation | Crew Assignments and Crew Cost Allocation | 
| 7. Vessel P&L | A report that filters the journal lines by vessel | Vessel P&L, Voyage P&L, Dashboard and Reports | 
| 8. No separate AR or GL | Everything posts through Finance | Receivables, payables, VAT, aging and the ledger are the ERP’s own | 

 

#### Who can do what

Access to the module is given in Users & Settings › Role Permissions; inside it, the permissions of each role are set in Settings & Roles. Select Create the standard fleet roles there to add these five roles, and adjust them to your organisation: 

The ready-made roles
| Role | May do in Marine Fleet | 
| Fleet Manager | Vessels, voyages, crew, laytime (calculate and approve) and marine invoices | 
| Operations Officer | Voyages, laytime calculation and crew | 
| Chartering Manager | Voyages, laytime (calculate and approve) and marine invoices | 
| Crew Manager | Crew assignments and the crew-cost allocation | 
| Fleet Accountant | Marine invoices and approving laytime statements | 

 

#### Getting started 
- Fixed Assets. Create each vessel as an asset (cost, useful life, depreciation accounts) and capitalise it as usual.
- Settings. In Settings & Roles choose Add the standard fleet accounts, set the VAT rate and the warnings, and create the standard roles.
- Vessels. In Vessel Master link each asset as a vessel and enter the IMO number, tonnage, drydock dates and standard rates.
- People. Make sure the crew are Employees, then assign them in Crew Assignments.
- First voyage. Create the voyage in Voyage Master, start it, post its costs as purchase invoices that carry the voyage, calculate laytime in Laytime Calculator, and invoice in Marine Invoicing.
- Month-end. Post Crew Cost Allocation, run the depreciation of Fixed Assets, and read Vessel P&L. 

Limits you should knowThe data is stored in the browser, like the rest of the ERP, so use Backup Management regularly. Drydock capitalisation and IFRS 16 lease accounting are not part of this release: post drydock amortisation with a journal voucher that carries the vessel. Bunker stock on board is not tracked: bunkers are expensed to the voyage when the supplier invoice is posted. Laytime is calculated from the dates and hours you enter; there is no statement-of-facts import. A posted document is never edited: reverse it, and the voyage cost line is reversed with it. 

#### Screens in this module

Vessels & Set-up

VesselsVessel Master

SettingsSettings & Roles

Operations & Invoicing

VoyagesVoyage MasterVoyage Costs

CrewCrew AssignmentsCrew Cost Allocation

Laytime & InvoicingLaytime CalculatorMarine Invoicing

Profitability & Reports

Dashboard & ProfitFleet DashboardVessel P&LVoyage P&L

ReportsFleet Reports 

### Vessels & Set-up  

### Vessel Master

Marine Fleet › Vessels &amp; Set-up › Vessels › Vessel Master 

A vessel is not a second asset list. Every vessel is an ordinary Fixed Asset (it keeps the cost, the depreciation, the location and the disposal) with a marine extension that adds the IMO number, flag, tonnage, drydock dates, standard rates and, if you want, accounts of its own. The extension is stored in the table fixed_assets_vessel_extension and is joined to the asset by its identity, so the register of Fixed Assets and the fleet always agree.

The screen shows tiles (vessels, active, on a voyage, in drydock or laid up, drydock due, net book value); select a tile to list the vessels behind it. Select a vessel for its card: Particulars, Voyages, Crew and Profit (year to date, read from the ledger).How to use it
- Create the asset first in Fixed Assets › Asset Register and capitalise its cost as usual (an asset type such as Machinery or a new type “Marine Vessel” with its cost, accumulated depreciation and depreciation accounts).
- Select Link a Fixed Asset as a vessel, choose the asset (assets that are already vessels or have been disposed of are not offered), enter the vessel code (for example BARGE-001), type and particulars, and Save.
- Enter the next drydock date and the standard rates. The standard rates only suggest the amount when you invoice; you can change them on each invoice.
- To give one vessel its own revenue, fuel, crew or maintenance accounts, select them in the last block. Leave them empty to use the fleet accounts of Settings & Roles.
- You can also open an asset in the Asset Register: a banner tells you it is a vessel, or offers Link this asset as a vessel.

_[Screenshot: Vessel Master with tiles and the register]_

Vessel Master with tiles and the register

Vessel particulars
| Field | Type | What to enter / options | 
| Identity | 
| Fixed Asset (the vessel) required | List | The asset that is this vessel. It cannot be changed after saving.

Pick from the master list | 
| Vessel code (unique) required | Text | Short unique code, for example BARGE-001, HOPPER-001. It cannot change once the vessel is used. | 
| Vessel type required | List | The kind of vessel.

Deck Barge · Hopper · Tank · Tug · Crane Barge · Landing Craft · Other | 
| Operational status  | List | Sold is not chosen here: it appears when the asset is disposed of in Fixed Assets. A vessel cannot leave Active while a voyage is in progress.

Active · Drydock · Laid Up | 
| IMO number  | Text | Seven digits; the last one is a check digit and is verified. An IMO number can belong to one vessel only. | 
| Flag state, Call sign, Year built, Builder / yard, Class society  | Text | Optional particulars. | 
| Size | 
| Deadweight (DWT), Gross tonnage, Net tonnage  | Number | Net tonnage cannot be more than gross tonnage. | 
| Drydock | 
| Last drydock, Next drydock due  | Date | The next date cannot be before the last. A drydock due within the warning days of Settings appears on the dashboard. | 
| Drydock interval (months)  | Number | For your own planning. | 
| Standard rates | 
| Daily hire rate, Standby rate per day  | Number | Suggested on time-charter and standby invoices. | 
| Demurrage rate per hour  | Number | Suggested in the Laytime Calculator. | 
| Accounts of this vessel | 
| Freight, Charter hire and Demurrage revenue accounts; Fuel and bunker, Crew and Maintenance accounts  | List | Ledger accounts of the chart of accounts. Empty = the fleet accounts of Settings.

Pick from the master list | 

Buttons on this screen
- + Link a Fixed Asset as a vessel opens the form.
- Excel Print / PDF export or print the register.
- Open a vessel shows its card; Edit, New voyage, Assign crew, Fixed Asset (opens the register) and Open the Vessel P&L are on the card.

Good to know
- A vessel that is used by a voyage, a crew assignment or a document cannot be removed; set it to Laid Up instead. A vessel that is a Fixed Asset cannot be deleted from the Asset Register while it is a vessel.
- When the asset is disposed of in Fixed Assets, the vessel becomes Sold: nothing more can be posted to it, and the disposal is refused while a voyage of the vessel is in progress.
- Depreciation of a vessel is the normal depreciation run of Fixed Assets. Its journal lines carry the vessel automatically, so the Vessel P&L shows it.   

### Settings & Roles

Marine Fleet › Vessels &amp; Set-up › Settings › Settings & Roles 

The operating rules of the module, the ledger accounts it posts to, the permissions of each role and the demonstration data. Changing them needs the administrator permission of Marine Fleet. The screen has five tabs.How to use it
- Settings: change the rules below and select Save settings; Back to standard values restores the defaults.
- Accounts: the module posts only to ledger accounts, through mapping keys of Finance › Account Mapping. Select Add the standard fleet accounts to create the revenue (freight, charter hire, demurrage, despatch allowed, standby), voyage cost (fuel, port, canal, agency, other), vessel operating cost (crew, maintenance, insurance), drydock amortisation and crew-cost-applied accounts and map them. You can map other accounts instead.
- Roles and permissions: select Create the standard fleet roles to add five ready-made roles (Fleet Manager, Operations Officer, Chartering Manager, Crew Manager, Fleet Accountant), or apply a preset to a role you already have, then tick or untick the permissions. Access to the module itself is given in Users & Settings › Role Permissions.
- Demonstration data: loads a small, clearly labelled marine business for training (all or nothing, in the active company).
- How it works: how the module fits with the rest of the ERP and its limits.

_[Screenshot: The Settings tab]_

The Settings tab

Settings of Marine Fleet
| Field | Type | What to enter / options | 
| Invoicing | 
| Default VAT % on marine invoices  | Number | Used when a voyage has no VAT % of its own (default 5). | 
| Despatch rate as % of the demurrage rate  | Number | Suggested in the Laytime Calculator (default 50, the usual half rate). | 
| Create a project for every new voyage  | List | Yes: a voyage creates its own project named with the voyage number.

Yes · No | 
| Default cargo unit  | List | Unit suggested for new voyages.

MT · CBM · Units · TEU · Days | 
| Control | 
| The person who calculated a laytime statement cannot approve it  | List | Applies when user security is on.

Yes · No | 
| Warnings | 
| Warn about a drydock due within (days)  | Number | Default 90. | 
| Warn about a crew sign-off within (days)  | Number | Default 14. | 

Permissions of Marine Fleet
| Field | Type | What to enter / options | 
| Register vessels and link them to Fixed Assets  | Permission | Vessel Master. | 
| Create and run voyages and voyage cost estimates  | Permission | Voyage Master, start, complete, close, estimates. | 
| Crew assignments and the monthly crew-cost allocation  | Permission | Crew Assignments and Crew Cost Allocation. | 
| Calculate laytime, demurrage and despatch  | Permission | Laytime Calculator (calculate, save, generate invoices). | 
| Approve laytime statements  | Permission | A second person, normally an accountant or chartering manager. | 
| Create marine invoices and credit notes from voyages and laytime  | Permission | Marine Invoicing. | 
| Fleet settings, account mapping and roles  | Permission | This screen. | 

Good to know
- With user security off, everybody has every permission. The administrator always has every permission.
- The demonstration data posts real documents to the ledger. Load it in a training or test company; it adds data only and never changes or deletes yours.  

### Operations & Invoicing  

### Voyage Master

Marine Fleet › Operations &amp; Invoicing › Voyages › Voyage Master 

A voyage is a project. Saving a voyage creates a project named with the voyage number (VOY-2026-000001), so every cost, invoice and journal of the voyage can also be followed in the Projects reports. The voyage record (fleet_voyages) holds the vessel, the charterer, the sales order, the route, the cargo, the freight or hire rate and the dates.

A voyage moves through five statuses: Planned → In Progress (departure) → Completed (arrival) → Invoiced (the system sets it when the freight or hire invoice is posted) → Closed. Select a voyage for its card: Overview, Costs, Documents, Laytime and Profit.How to use it
- Select New voyage, choose the vessel and the customer (the charterer), the voyage type and the route; for a voyage charter enter the cargo quantity and the freight rate per unit, for a time charter the daily hire rate. Enter the planned dates and Save.
- On the voyage card select Start voyage and enter the date of departure. From now on supplier invoices, journals and marine invoices can carry the voyage.
- Post the voyage costs as supplier invoices (see Voyage Costs). Invoice the freight or the hire in Marine Invoicing; calculate waiting time in Laytime Calculator.
- When the cargo is delivered select Complete voyage and enter the arrival date (not in the future).
- After the invoices are posted the voyage becomes Invoiced. Close voyage locks it when every document is posted and every laytime statement is dealt with; a closed voyage accepts no more postings until a fleet administrator selects Reopen.

_[Screenshot: Voyage Master]_

Voyage Master

_[Screenshot: A voyage card: costs, estimate and profit]_

A voyage card: costs, estimate and profit

Voyage
| Field | Type | What to enter / options | 
| Voyage | 
| Vessel required | List | Active vessels. It cannot change after the voyage has started.

Pick from the master list | 
| Customer (charterer) required | List | A customer of Sales.

Pick from the master list | 
| Voyage type required | List | Voyage Charter: freight per unit of cargo. Time Charter: daily hire. CoA: contract of affreightment.

Time Charter · Voyage Charter · CoA | 
| Sales order (optional)  | List | Links the voyage to a sales order.

Pick from the master list | 
| Route and cargo | 
| Port of loading / discharge (time charter: delivery / redelivery port)  | Text | Required for a voyage charter. | 
| Cargo description  | Text |  | 
| Cargo quantity (B/L), Cargo unit, Freight rate per unit  | Number | Required for a voyage charter. Freight can be invoiced only up to the cargo quantity not yet invoiced. | 
| Daily hire rate  | Number | Required for a time charter. | 
| Standby rate per day  | Number | For standby invoices. | 
| Terms and dates | 
| VAT %  | Number | Empty = the default of Settings. | 
| Currency  | List | Empty = the base currency; the invoice uses the exchange rate of its date.

Pick from the master list | 
| Planned departure / delivery, Planned arrival / redelivery  | Date | The departure is required. | 
| Actual departure and arrival  | Date | Set by Start voyage and Complete voyage; they can be corrected while the voyage is not closed. | 
| Project  | List | Empty = a project is created automatically.

Pick from the master list | 

Buttons on this screen
- New voyage opens the form.
- Start voyage Planned → In Progress, with the date of departure.
- Complete voyage In Progress → Completed, with the date of arrival.
- Close voyage Reopen closing locks the voyage once its documents are posted; reopening needs the administrator permission of Marine Fleet.
- Delete only a planned voyage with no documents can be deleted (its project is deleted with it).
- Excel Print / PDF export or print the register.

Good to know
- The voyage shows revenue, cost and margin read from the ledger lines that carry it, so it always agrees with the Vessel P&L and the General Ledger.
- Nothing can be posted to a Planned voyage with a marine invoice, to a Closed voyage, or to a vessel that has been sold.   

### Voyage Costs

Marine Fleet › Operations &amp; Invoicing › Voyages › Voyage Costs 

Voyage costs are not entered in a separate ledger. They are ordinary Purchase Invoices that carry a Voyage. When such an invoice is posted it debits the cost account (fuel, port charges, canal, agency, other) and the input VAT and credits Accounts Payable exactly as before, and every ledger line carries the vessel and the voyage. A line is also written to the voyage cost table (fleet_voyage_costs) for the voyage reports. This screen lists those lines and the estimates (budgets) you enter to compare with the actual cost.How to use it
- Open Purchase › Purchase Invoices › New. When the company has a vessel, the Voyage, Vessel and Voyage Cost Type fields appear under General information. Choosing the voyage fills the vessel and the project.
- Choose the cost type (Bunker, Port, Canal, Agency, Other), enter the lines against a ledger account such as Vessel Fuel and Bunkers, and approve and post as usual.
- Here, select New cost estimate to enter what you expect the voyage to cost by type. An estimate posts nothing.
- Open Estimate vs actual in Fleet Reports to compare them.
- If the invoice is reversed, its voyage cost line is marked Reversed and the ledger reversal carries the same vessel and voyage.

_[Screenshot: Voyage costs: estimates and posted invoices]_

Voyage costs: estimates and posted invoices

Cost estimate
| Field | Type | What to enter / options | 
| Voyage required | List | A voyage that is not closed.

Pick from the master list | 
| Cost type required | List | 

Bunker · Port · Canal · Agency · Other | 
| Date  | Date |  | 
| Estimated amount required | Number | In the base currency. | 
| Supplier (optional)  | List | 

Pick from the master list | 
| Account (optional)  | List | A ledger account.

Pick from the master list | 
| Description  | Text |  | 

Table columns: Voyage · Cost type · Supplier · AP invoice no. · Amount · Account · Description · Status (Budget / Posted / Reversed)

Good to know
- Only an estimate can be edited here; a posted line is changed by reversing the supplier invoice in Purchases.
- A voyage cost line is the amount before VAT; the VAT stays in the ordinary VAT return.   

### Crew Assignments

Marine Fleet › Operations &amp; Invoicing › Crew › Crew Assignments 

Crew are the ERP’s own Employees: nothing is copied. An assignment (fleet_crew_assignments) links an employee to a vessel with a rank, a daily wage and the dates of sign-on and sign-off. An employee can be on one vessel at a time; overlapping dates are refused.How to use it
- Select Assign crew, choose the vessel and the employee, the rank, the daily wage and the sign-on date, and Save.
- When the person leaves, open the assignment and select Sign off today (or enter the date).
- Use the tiles to see who is on board, who is planned and who signs off within the warning days.

_[Screenshot: Crew Assignments]_

Crew Assignments

Crew assignment
| Field | Type | What to enter / options | 
| Vessel required | List | 

Pick from the master list | 
| Employee required | List | Active employees that are not on another vessel in the same dates.

Pick from the master list | 
| Rank required | List | Master, Chief Officer, Chief Engineer, Tug Master, Deckhand and others. | 
| Daily wage required | Number | Charged to the vessel for each day on board. | 
| Sign on required | Date |  | 
| Sign off  | Date | Leave empty while on board. | 
| Notes  | Text |  | 

Good to know
- The wage here is the cost charged to the vessel; payroll itself stays in HR & Payroll.
- The crew cost reaches the vessel’s profit and loss through Crew Cost Allocation at month-end.   

### Crew Cost Allocation

Marine Fleet › Operations &amp; Invoicing › Crew › Crew Cost Allocation 

At month-end the crew cost is charged to each vessel: days on board × daily wage of every assignment. The journal debits Vessel Operating Cost – Crew (carrying the vessel) and credits the Applied Labour account, so the crew cost appears in the vessel’s profit and loss without changing payroll. One journal is posted for each vessel and month; a month that is already allocated cannot be allocated twice, but you can reverse the journal and allocate again.How to use it
- Choose the month (the month must have ended) and, if you want, one vessel. The table shows each vessel, the people, the days and the amount.
- Select Post allocation and confirm. The journal is created and posted through the General Ledger as a Fleet Journal.
- To correct a month select Reverse on its journal and give a reason; the reversal carries the same vessel, then allocate the month again.

_[Screenshot: Crew Cost Allocation]_

Crew Cost Allocation

Columns shown: Vessel · Crew · Days · Amount · Journal · Status

Good to know
- The journal is dated the last day of the month. A closed accounting period refuses it.
- Journal accounts: Dr the vessel’s crew account (or Vessel Crew Costs), Cr Crew Cost Applied (Applied Labour).   

### Laytime Calculator

Marine Fleet › Operations &amp; Invoicing › Laytime &amp; Invoicing › Laytime Calculator 

A charter party allows the charterer a number of hours to load or discharge (the allowed laytime). Time used beyond it is demurrage, payable by the charterer at the demurrage rate; time saved may earn despatch, which the owner allows back at the (usually half) despatch rate. The calculator works this out for a port of a voyage, keeps the statement (fleet_laytime) with who calculated and who approved it, and turns it into the sales documents.

Example. 48 hours allowed, 54 hours used: 6 hours over × 1,000 per hour = 6,000 demurrage. If 36 hours were used: 12 hours saved × 500 = 6,000 despatch.How to use it
- Choose the voyage (a voyage that has started and is not closed). The port, the demurrage rate (from the vessel) and the despatch rate (a % of it, from Settings) are suggested.
- Enter the laytime start and end (date and time) and the allowed hours. Enter any time excluded (weather, holidays) in hours. If you do not have the dates, enter the time used in hours.
- The tiles update as you type: allowed, time used, overstay and the demurrage, time saved and the despatch.
- Tick Bill demurrage and/or Allow despatch and select Save statement, or select Generate invoice → to save, approve and create the draft documents at once.
- A statement is approved by a second person (when user security is on). Approving a statement with demurrage creates a draft sales invoice of type Demurrage; a statement with despatch creates a draft credit note of type Despatch against the freight or hire invoice of the voyage. Review and post them in Sales.
- A statement can be cancelled; if it has already created documents, void them in Sales first.

_[Screenshot: The Laytime Calculator with the live result]_

The Laytime Calculator with the live result

Laytime statement
| Field | Type | What to enter / options | 
| Voyage required | List | Voyages that have started and are not closed.

Pick from the master list | 
| Port required | Text | Suggested from the voyage. | 
| Laytime start / end  | Date and time | Used time = end − start − excluded time. | 
| Allowed laytime (hours) required | Number | From the charter party. | 
| Time excluded (hours)  | Number | Weather, holidays and other time that does not count. | 
| Time used if no dates (hours)  | Number | Use it when you only know the hours. | 
| Demurrage rate per hour  | Number | Suggested from the vessel. | 
| Despatch rate per hour  | Number | Suggested as a % of the demurrage rate. | 
| Bill demurrage, Allow despatch  | Tick | Choose what is passed to the customer. | 
| Remarks  | Text |  | 

Statements register: Statement · Voyage · Port · Allowed h · Used h · Overstay h · Demurrage · Saved h · Despatch · Status (Draft / Approved / Cancelled)

Buttons on this screen
- Save statement keeps a draft.
- Generate invoice → saves, approves (if you may and the separation of duties allows) and creates the draft documents.
- New statement clears the form.
- Open a statement shows its result; Edit and Approve (draft), Create the documents (approved), links to the invoice or credit note, Cancel statement and Print are on it.

Good to know
- With user security on, the person who calculated a statement cannot approve it (Settings). The permission to approve is separate from the permission to calculate.
- A demurrage invoice is for the hours over the allowed laytime, with the dates and hours printed on it. Despatch is never a sales invoice: it is a credit note, so it reduces what the customer owes on the freight invoice.
- The documents are created as drafts. Nothing reaches the ledger until you post them in Sales.   

### Marine Invoicing

Marine Fleet › Operations &amp; Invoicing › Laytime &amp; Invoicing › Marine Invoicing 

Marine invoicing is not a separate module. Freight, charter hire, demurrage and standby are ordinary Sales Invoices and despatch is an ordinary Credit Note, with four added fields: the marine document type (marine_doc_type), the voyage (voyage_id), the vessel (vessel_asset_id) and, for demurrage, the laytime start, end and hours. They use the normal invoice numbers, the normal Accounts Receivable, the normal VAT return and the normal receipts and aging; there is no second receivable or ledger.

This screen shows what is ready to invoice and lists the marine documents.How to use it
- In Ready to invoice: a voyage charter with cargo not yet invoiced (freight = B/L quantity × rate), a time charter with days of hire not yet billed (hire = days × daily rate), and approved laytime statements with demurrage or despatch not yet invoiced. Select Create on a line.
- For anything else (a standby period, a part shipment, a different rate) select New marine invoice, choose the voyage and the type, then enter the quantity and the rate (for hire and standby also the period) and the date.
- The draft sales invoice is created with the customer, the voyage’s project and a revenue account chosen for the type (Freight Revenue – Vessels, Charter Hire Revenue – Vessels, Demurrage Revenue – Vessels, Standby Revenue – Vessels; the vessel’s own account if it has one). Open it in Sales, check it and post it.
- When the freight or hire invoice is posted, the voyage becomes Invoiced. Receipts are entered in Sales as usual; the screen shows the unpaid and overdue amounts.

_[Screenshot: Marine Invoicing: ready to invoice and the documents]_

Marine Invoicing: ready to invoice and the documents

New marine invoice
| Field | Type | What to enter / options | 
| Voyage required | List | A voyage that has started and is not closed.

Pick from the master list | 
| Invoice type required | List | Freight: quantity up to the cargo not yet invoiced. Hire and Standby: for a period; periods cannot overlap an invoice already made. Demurrage: from a laytime statement.

Freight · Hire · Demurrage · Standby | 
| Quantity required | Number | Cargo units, days or hours. | 
| Rate required | Number | Suggested from the voyage or the vessel. | 
| Period from / to  | Date | For hire and standby; the quantity must equal the days of the period. | 
| Invoice date  | Date | Defaults to today. | 
| Description  | Text | Suggested. | 

Good to know
- Despatch appears as a Credit Note (type Despatch). It is made against the latest posted freight or hire invoice of the voyage and can never be more than that invoice has left to credit.
- Open Sales › Sales Invoices to see the same documents with their marine fields, and AR Aging to see them aged with every other invoice.
- A marine invoice needs a voyage that has started; a closed voyage accepts no invoice.  

### Profitability & Reports  

### Fleet Dashboard

Marine Fleet › Profitability &amp; Reports › Dashboard &amp; Profit › Fleet Dashboard 

Where the fleet stands today. Twelve tiles show the numbers that need attention; select a tile to see the records behind it (vessels, voyages, documents, statements), then select a record to open it.

_[Screenshot: The Fleet Dashboard]_

The Fleet Dashboard

Tiles
| Field | Type | What to enter / options | 
| Vessels  | Tile | Vessels in the fleet and how many are active. | 
| Voyages in progress, Planned voyages  | Tile | At sea or on charter, and not yet sailed. | 
| Ready to invoice  | Tile | Freight, hire, demurrage and despatch waiting to be invoiced, with the value before VAT. | 
| Hire not yet billed  | Tile | Time-charter days not yet invoiced. | 
| Laytime to approve  | Tile | Draft laytime statements. | 
| Revenue this month  | Tile | From the ledger lines carrying a vessel; year to date below. | 
| EBITDA this month  | Tile | Revenue less voyage and operating costs. | 
| Fleet utilisation  | Tile | Vessel-days on a voyage ÷ vessel-days in service, this month. | 
| Crew on board  | Tile | And how many sign off within the warning days. | 
| Drydock due  | Tile | Within the warning days of Settings, or overdue. | 
| Unpaid marine invoices  | Tile | Outstanding amount and how many are overdue. | 

Good to know
- The charts show revenue and cost by vessel (year to date) and revenue of the last six months.
- The tiles read the same records as the other screens, so a number here always agrees with the detail.   

### Vessel P&L

Marine Fleet › Profitability &amp; Reports › Dashboard &amp; Profit › Vessel P&L 

The Vessel P&L is a report on the General Ledger. Every journal line has two added columns, vessel_asset_id and voyage_id; posted documents (supplier invoices, sales invoices, credit notes, journal vouchers, depreciation and the crew allocation) fill them in. The report simply filters the ledger lines by the vessel, and optionally by the voyage and the period. There is nothing to run or close.How to use it
- Choose the vessel (or all vessels), a voyage if you want one, and the from and to dates. The tiles and the statement update.
- Read the statement top to bottom: revenue (freight, charter hire, demurrage, despatch allowed, standby), direct voyage costs (bunker and fuel, port charges, canal and transit, agency, other), vessel operating costs (crew, maintenance and spares, insurance, other), EBITDA, then depreciation and drydock amortisation and the net profit.
- Select any line to see the ledger entries behind it; select an entry to open its document.
- With all vessels, the By vessel table compares vessels, with utilisation. Excel and Print / PDF give the statement for the file.

_[Screenshot: The Vessel P&amp;L]_

The Vessel P&L

Tiles: Revenue · Direct voyage costs · Vessel EBITDA · Net profit · Utilisation % · Voyages · Days idle

Good to know
- Utilisation is the days the vessel was on a voyage divided by the days it was in service in the period (from the date of its asset start). Days idle is the rest.
- A reversal posted in a later month appears in that month, so a period report for the original month still shows the original posting.
- To put another cost on a vessel (insurance, repairs, drydock amortisation), post a Journal Voucher and choose the vessel (and the voyage) in the voucher’s details; or enter the vessel on the supplier invoice.
- Depreciation comes from the normal Fixed Assets depreciation run; no extra step is needed.   

### Voyage P&L

Marine Fleet › Profitability &amp; Reports › Dashboard &amp; Profit › Voyage P&L 

Revenue and cost of each voyage, read from the ledger lines that carry the voyage. The list compares voyages (revenue, cost, margin and the estimate); select a voyage for its statement: the same lines as the Vessel P&L, the costs by type compared with the estimate, and the documents behind them.How to use it
- Choose the vessel and the period to filter the list.
- Select a voyage to open its statement; use Back to return to the list.
- Select a line to see the ledger entries.

_[Screenshot: The Voyage P&amp;L]_

The Voyage P&L

Good to know
- Costs are those posted. A voyage in progress shows its costs so far next to the estimate, so you can see an overspend before the voyage ends.
- Because a voyage is also a project, the Project reports show the same cost and revenue under the voyage number.   

### Fleet Reports

Marine Fleet › Profitability &amp; Reports › Reports › Fleet Reports 

Eighteen reports on the fleet. Select a report, choose the period where it applies, and print it (A4 / PDF) or export it to Excel.

The reports
| Field | Type | What to enter / options | 
| Fleet | 
| Fleet register  | Report | Every vessel with its particulars, status, book value and drydock. | 
| Drydock schedule  | Report | Last and next drydock, days to go, status. | 
| Vessel utilisation  | Report | Voyages, days at sea, idle days and utilisation % per vessel. | 
| Profit and loss | 
| Vessel profit and loss, by vessel  | Report | Revenue, costs, EBITDA, depreciation and net profit of each vessel. | 
| Fleet profit and loss, line by vessel  | Report | The P&L lines across, vessels down, with totals. | 
| Voyages | 
| Voyage register  | Report | Every voyage with route, cargo, dates, status and amounts. | 
| Voyage profitability  | Report | Revenue, cost, margin and margin % of each voyage. | 
| Voyage cost register  | Report | Every cost line by voyage, type and supplier. | 
| Voyage cost: estimate and actual  | Report | Estimate, actual and variance by cost type. | 
| Invoicing | 
| Marine invoice register  | Report | All marine invoices and credit notes. | 
| Ready to invoice  | Report | What can be invoiced now. | 
| Demurrage and despatch statement  | Report | The laytime statements of the period and their documents. | 
| Time charter hire schedule  | Report | Hire billed and still to bill for each time charter. | 
| Receivables by voyage  | Report | Unpaid marine invoices by voyage and customer. | 
| Crew | 
| Crew on board  | Report | Who is on which vessel today, with rank and wage. | 
| Crew assignment history  | Report | All assignments, signed on and off. | 
| Crew cost allocation  | Report | The monthly allocations by vessel. | 
| Ledger | 
| Vessel dimension ledger  | Report | Every journal line that carries a vessel or voyage, with its document. | 

Good to know
- Reports that depend on a period use the dates you choose in the report window (the default is the year to date).
- All reports read the same records as the screens, so they agree with them and with the General Ledger.   

 

👥

Module guide
