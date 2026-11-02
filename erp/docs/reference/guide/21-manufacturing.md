## Manufacturing

Product models, bills of material and routings with revisions; demand, MRP and scheduling; production orders, shop floor and finished goods; inspections, non-conformances and traceability; maintenance, costing and accounting for HVAC control panels. 

Demand & MRP→Production order→Issue materials→Shop floor→Inspection→Finished goods→Close order→Delivery & invoice (Sales) 

This module is for the factory that builds HVAC control panels to order: chiller, AHU, fan and pump panels, with options such as the IP rating or the controller. It covers the engineering data (models, specifications, option classes, bills of material and routings with revisions), planning (demand, MRP, finite scheduling), production (orders, material issue, shop floor, work in progress, receipt of finished panels), quality and traceability (inspections, non-conformances, serial and lot genealogy), maintenance and calibration, costing and accounting, 23 reports and the local content (ICV) of the output.

It works with the rest of the ERP, not beside it. Items, stores, employees, projects, customers, suppliers, sales orders, purchase requisitions and the chart of accounts are the ERP’s own masters. Every stock movement is a real Inventory document (a Stock Issue or a Stock Receipt) and every cost is a real Finance journal, so the stock ledger, the general ledger and the production orders always agree. Revenue and cost of sales appear only through the normal Sales delivery note and invoice.

Control. Engineering releases, production-order releases, MRP proposals, concessions and standard costs can each need approval by a named role (set in Settings & Approval Rules). By default the person who prepared a document cannot approve it. Every action is written to the audit trail.

Costing. With Actual costing finished panels are received at the cost accumulated in work in progress; with Standard costing they are received at the standard cost and the variances are posted when the order is closed. Normal scrap stays in the cost of the order; abnormal scrap is expensed. 

Manufacturing documents at a glance
| Document | Screen | Use it for | Accounting when posted | 
| Production order (WO) | Production Orders | Authorising and tracking the build of panels | None on release (materials are only reserved) | 
| Material issue (SIS) / return (SRC) | Material Reservations & Issues | Taking components from the store into the order, and giving back what was not used | Issue: Dr Work in Progress · Cr Inventory. Return: the reverse | 
| Time entry (TM) | Shop-Floor Control | Labour, machine, overhead and subcontract cost of a completed step | Dr Work in Progress · Cr Production Labour / Manufacturing Overhead / Subcontract Applied | 
| Finished goods receipt (SRC) | Finished Goods Receipt | Receiving passed panels into the finished-goods store | Dr Finished Goods – HVAC Panels · Cr Work in Progress | 
| Inspection (QI) and NCR | Quality Assurance & Testing and Rework, Scrap & NCR | Testing each unit at the checkpoints; deciding failures | Scrap: abnormal is expensed, normal stays in the cost; rework cost moves to the parent order | 
| Closing an order | Manufacturing Costing | Settling the remaining work in progress | Variance accounts (material, labour, overhead) · none when costing is Actual and the order balances | 
| Maintenance order (MW) | Maintenance & Calibration | Planned and breakdown maintenance of work centres | Spares: Dr Factory Maintenance Expense · Cr Inventory | 
| MRP run (MRP) | Material Requirements Planning | Proposing orders and requisitions from demand | None; approved proposals create draft production orders and purchase requisitions | 

 

#### Who can do what

Access to the module is given in Users & Settings › Role Permissions; inside it, the permissions of each role are set in Settings & Approval Rules. Select Create the standard manufacturing roles there to add these ten roles, and adjust them to your organisation: 

The ready-made roles
| Role | May do in Manufacturing | 
| Manufacturing Manager | Everything except changing the settings, roles and approval rules | 
| Production Planner | Demand, MRP, scheduling; creating and releasing production orders | 
| Production Supervisor | Production orders, material issue and return, shop-floor entries | 
| Storekeeper | Reserving, issuing and returning materials; receiving finished goods | 
| Quality Inspector | Inspections and non-conformance decisions; shop-floor entries | 
| Quality Manager | Quality, and releasing bills of material and routings | 
| Design Engineer | Product models, specifications, bills of material and routings (drafts) | 
| Engineering Manager | The Design Engineer’s work, and releasing and approving changes | 
| Cost Accountant | Costing, standard costs, closing orders and the accounting screens | 
| Maintenance Technician | Maintenance orders and calibration | 

 

#### Getting started 
- Inventory. Create the raw-material store and the finished-panels store, the component items (Raw Material or Consumable) and the finished-goods items (type Finished Goods). Enter opening stock or receive it with GRNs.
- Settings. In Settings & Approval Rules choose the default stores, the serial prefix and the costing method, and create the standard roles.
- Engineering data. Option classes (Option Classes), item specifications with tracking (Item & Technical Specs) and product models (Product Engineering).
- Factory. Work centres with their rates (Work Centres) and the overhead pool (Overhead Pools).
- Recipe and route. Bill of material (Bills of Material) and routing (Routings): submit and release both. Add test templates, quality plans and instruments in Quality Assurance & Testing.
- First order. Create a production order (Production Orders), release it, issue the materials, book the steps, inspect, receive the panels and close the order. 

Limits you should knowThe data is stored in the browser, like the rest of the ERP, so use Backup Management regularly. MRP and scheduling run when you press the button. Unabsorbed overhead is shown in the profit and loss account and in the absorption report; it is not spread back onto stock. Lot and serial numbers are captured only for items marked Lot or Serial in their specification. Inspections cannot be deleted; a wrong result is corrected by a new inspection. 

#### Screens in this module

Engineering & Set-up

Product EngineeringProduct EngineeringItem & Technical SpecsOption Classes

Bills of MaterialBills of MaterialEngineering Changes & Revisions

Routings & Work CentresRoutingsWork CentresOverhead Pools

SettingsSettings & Approval Rules

Planning & Production

Demand & PlanningDemand PlanningMaterial Requirements PlanningPlanning & Scheduling

ProductionProduction OrdersMaterial Reservations & IssuesShop-Floor ControlWork in ProgressFinished Goods Receipt

Quality & TraceabilityQuality Assurance & TestingRework, Scrap & NCRSerial & Batch Traceability

MaintenanceMaintenance & Calibration

Costing, Accounting & Reports

Dashboard & ReportsManufacturing DashboardManufacturing Reports

Costing & AccountingManufacturing CostingManufacturing Accounting 

### Engineering & Set-up  

### Product Engineering

Manufacturing › Engineering & Set-up › Product Engineering › Product Engineering 

The technical identity of each panel model you build: its name, the finished item it makes, electrical rating, protection class, standards, drawing references, and the bill of material, routing and quality plan normally used. One product family can have several models. The rating, standard and drawing number print on the test certificate of every unit.How to use it
- Create the finished item first in Inventory › Items (type Finished Goods), then select + New here. The Code (PM-0001) is automatic.
- Enter the Name of the model (for example Chiller Control Panel CCP-250), choose the Item it builds and the Product Family.
- Enter the ratings (Rated Voltage, Phase, Frequency, Rated Current, Short-circuit Rating), the IP Rating, the enclosure and the standard it is built to.
- Record the Drawing No and Drawing Revision, the datasheet reference and the certification.
- Choose the Default BOM, Default Routing and Default Quality Plan normally used for the model, and the warranty in months.
- Set the Status (Active, Under development or Obsolete) and save.

_[Screenshot: The Product Engineering list]_

The Product Engineering list

_[Screenshot: The form that opens with + New]_

The form that opens with + New

Fields on the “New Product Engineering” form
| Field | Type | What to enter / options | 
| Identification | 
| Code automatic | Text | Created automatically (PM-0001, PM-0002…). It cannot be changed. | 
| Name required | Text | The model name shown in lists, on production orders and on the certificate. | 
| Item  | List | The finished-goods item this model builds. A production order for this item picks up the model and prints its rating.

Pick from the master list | 
| Product Family  | List | Groups models for reports and for the people who select them.

Chiller control panel · AHU / FCU control panel · Cooling tower panel · Pump and VFD panel · Fan and ventilation panel · VRF / split system panel · BMS / DDC panel · MCC / power panel · Other | 
| Ratings and construction | 
| Rated Voltage (V)  | Number | Printed on the test certificate. | 
| Phase  | List | Three phase or single phase.

3 · 1 | 
| Frequency (Hz)  | Number | Normally 50 in the UAE. | 
| Rated Current (A)  | Number | The busbar or incomer rating of the panel. | 
| Short-circuit Rating (kA)  | Number | Prospective short-circuit withstand of the assembly. | 
| IP Rating  | Text | Protection class of the enclosure, for example IP54. The option class for IP rating on the bill of material decides which enclosure is fitted. | 
| Enclosure Material  | Text | For example powder-coated mild steel or stainless steel. | 
| Form of Separation  | Text | For example Form 1 or Form 2b. | 
| Controller Type  | Text | For example PLC or thermostat controller. | 
| Applicable Standard  | Text | For example IEC 61439-1/2. Printed on the certificate. | 
| Documents | 
| Drawing No  | Text | Printed on the certificate together with the revision. | 
| Drawing Revision  | Text | The revision of the approved drawing. | 
| Datasheet Ref  | Text | Reference of the datasheet or catalogue page. | 
| Certification  | Text | Type-test or third-party certificates held for the model. | 
| Defaults and status | 
| Default BOM  | List | The bill of material normally used. Recorded with the model as a reference.

Three-phase 250 A busbar set (phantom: not stocked) · Chiller control panel 250 A, 400 V, IP54 or IP65, PLC or thermostat controller · Air handling unit control panel with a VFD | 
| Default Routing  | List | The routing normally used. Recorded with the model as a reference.

Chiller panel build · AHU panel build | 
| Default Quality Plan  | List | Used at a quality checkpoint of the routing that does not name a plan of its own.

Wiring Inspection · Final Test – Chiller Panel | 
| Warranty (months)  | Number | Warranty given to the customer. | 
| Status  | List | Only Active models should be offered for new orders.

Active · Under development · Obsolete | 
| Remarks  | Text | Free notes. | 

Table columns: Code · Name · Item · Product Family · Rated Current (A) · IP Rating · Default BOM · Status

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
- The model is looked up by its finished item, so create one model per item. A production order shows the model name and the option choices (IP rating, controller) in its Overview.   

### Item & Technical Specs

Manufacturing › Engineering & Set-up › Product Engineering › Item & Technical Specs 

Technical data of the items that go into panels: manufacturer, part number, rating, standard and approvals. Two settings matter for the whole module: Tracking (None, Lot or Serial) decides whether lot or serial numbers must be captured when the item is issued to a production order, and Critical Component puts the item on the test certificate and the genealogy of every panel that contains it. There is one specification per item.How to use it
- Select + New and choose the Item (an Inventory item). Only one specification can exist for an item.
- Choose the Specification Type (component, sub-assembly, raw material, enclosure, controller or consumable).
- Enter the manufacturer, part number and the electrical data (rating, voltage, current, breaking capacity, poles, finish).
- Set Tracking: Lot for busbar, wire and breakers bought in batches, Serial for controllers and items that must be traced one by one, None for everything else.
- Set Critical Component to Yes for the parts the customer or the standard requires you to trace.
- Save.

_[Screenshot: The Item &amp; Technical Specs list]_

The Item & Technical Specs list

_[Screenshot: The form that opens with + New]_

The form that opens with + New

Fields on the “New Item & Technical Spec” form
| Field | Type | What to enter / options | 
| Identity and data | 
| Item  | List | The Inventory item this data belongs to. One specification per item.

Pick from the master list | 
| Specification Type  | List | Classifies the item for reports.

Component · Sub-assembly · Raw material · Enclosure · Controller · Consumable | 
| Manufacturer  | Text | Maker of the part. | 
| Manufacturer Part No  | Text | The maker’s catalogue number. | 
| Rating / Size  | Text | A short description such as 125 A, 3 pole. | 
| Voltage (V)  | Text | Rated voltage. | 
| Current (A)  | Text | Rated current. | 
| Breaking Capacity (kA)  | Text | For breakers and fuses. | 
| Poles  | Text | Number of poles. | 
| Colour / Finish  | Text | For example bare, tin-plated, RAL colour. | 
| Standard / Certification  | Text | For example CE, UL, IEC 60947. | 
| Datasheet Ref  | Text | Reference of the datasheet. | 
| Approved Suppliers  | Text | Suppliers approved for the item. Recorded for the buying and quality teams. | 
| Tracking and control | 
| Tracking  | List | None: no numbers needed. Lot: a lot number must be given when the item is issued. Serial: one serial number per unit must be given when issued. Finished panels are always tracked by serial number.

None · Lot · Serial | 
| Critical Component  | List | Yes lists the item, with its lot or serial, on the test certificate and highlights it in the traceability report.

No · Yes | 
| Incoming Inspection  | List | Marks an item the quality team inspects on receipt. Recorded on the specification as a reference.

No · Yes | 
| Shelf Life (months)  | Number | Recorded for items that expire, such as adhesives and labels. | 
| Storage Conditions  | Text | Recorded for the storekeeper. | 
| Status  | List | Active or Inactive.

Active · Inactive | 
| Remarks  | Text | Free notes. | 

Table columns: Item · Specification Type · Manufacturer · Manufacturer Part No · Rating / Size · Tracking · Critical Component · Status

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
- The ERP asks for lot or serial numbers only for items whose Tracking is Lot or Serial. If you change the setting later, orders already issued keep what was captured.
- The serial register of finished panels is created automatically when the order is released; the prefix and number of digits are in Settings.   

### Option Classes

Manufacturing › Engineering & Set-up › Product Engineering › Option Classes 

The choices that make one panel different from another with the same base design: enclosure protection (IP54 or IP65), controller (PLC or thermostat), breaker brand, door type. A line of the bill of material can name an option class and an option; the line is used only when the production order chooses that option. One bill of material then serves every variant.How to use it
- Select + New and enter the Name of the class, for example IP Rating.
- In Options type the choices separated by a semicolon, at least two: IP54;IP65.
- Enter the Default Option (it must be one of the options) and decide whether the class is Required.
- Save. In the bill of material, give each variant line its Option class and Option.

_[Screenshot: The Option Classes list]_

The Option Classes list

_[Screenshot: The form that opens with + New]_

The form that opens with + New

Fields on the “New Option Class” form
| Field | Type | What to enter / options | 
| Code automatic | Text | Created automatically (OC-0001). | 
| Name required | Text | The name of the class, as it will be shown on bills of material and orders. | 
| Options  | Text | Separate the choices with “;” (for example IP54;IP65). At least two are needed. | 
| Default Option  | Text | Used when nobody chooses. It must be one of the options. | 
| Required  | List | Yes: whoever creates the order must choose an option for this class; orders proposed by MRP use the default. No: the default is used when nothing is chosen.

Yes · No | 
| Remarks  | Text | Free notes. | 

Table columns: Code · Name · Options · Default Option · Required · Remarks

Buttons on this screen
- + New opens the entry form.
- Template Import Excel / CSV Print Refresh standard list tools.
- Edit at the end of each row.

Good to know
- A bill of material line without an option class is always used. A line with a class and an option is used only when that option is chosen on the order.
- The options chosen on an order are copied to the order and shown on its Overview, on the traveller and on the test certificate.   

### Bills of Material

Manufacturing › Engineering & Set-up › Bills of Material › Bills of Material 

Multi-level recipes of each panel, with revisions, option classes, phantom sub-assemblies (a group of parts shown as one line but not stocked), substitute components and a scrap allowance per line. A released revision is never edited: a change goes through an engineering change and creates a new revision. A production order keeps the revision it was released with.How to use it
- Select + New BOM. Choose the Finished item; the Revision is proposed (A, then B…) and the Unit comes from the item.
- Enter the Base quantity the quantities refer to (normally 1) and the Effective from date.
- Select + Add line for each component: item, Type (Component, Sub-assembly or Phantom), quantity per base, scrap %, and, for variants, the Option class and Option.
- In Used at op enter the routing step where the component is issued and consumed; use Substitutes to list items that may replace it.
- Select Save draft, or Submit for approval. An engineering approver then selects Approve and release; the previous revision becomes Superseded.
- Use the other tabs: Explosion & cost for the multi-level parts list and its cost, Where-used to find every bill that contains a component, and Compare revisions to see what changed.

_[Screenshot: The Bills of Material list]_

The Bills of Material list

_[Screenshot: A new bill of material]_

A new bill of material

_[Screenshot: A released bill of material (read-only)]_

A released bill of material (read-only)

_[Screenshot: The Explosion &amp; cost tab, choosing the options]_

The Explosion & cost tab, choosing the options

_[Screenshot: The Where-used tab]_

The Where-used tab

Fields on the “New bill of material” form
| Field | Type | What to enter / options | 
| Finished item required | List | The item the bill builds. Pick from the Inventory items or type to search.

Pick from the master list | 
| Revision required | Text | The revision letter. It is proposed automatically; a new revision is made through an engineering change. | 
| Base quantity  | Number | The quantity of the finished item that the line quantities produce (normally 1). | 
| Unit automatic | Text | The unit of the finished item. | 
| Effective from  | Date | The first date on which orders pick up this revision. | 
| Description  | Text | What the revision is, for example Chiller panel 250 A, 400 V. | 
| Remarks  | Text | Free notes. | 

Columns of the BOM lines
| Field | Type | What to enter / options | 
| Line  | Number | Sequence number of the line. | 
| Component item required | List | The Inventory item consumed. | 
| Type  | List | 

Component · Sub-assembly · Phantom | 
| Qty per base  | Number | Quantity needed for the base quantity. Sub-assembly: a stocked intermediate made on its own order. Phantom: not stocked; its own bill is blown through into the parent order. | 
| Unit  | Automatic | The unit of the component item. | 
| Scrap %  | Number | Allowance added to the requirement, for example 3 for busbar cut-off. The order requires quantity × (1 + scrap %). | 
| Option class  | List | Leave blank for a line that is always used.

Pick from the master list | 
| Option  | List | The option for which the line is used. | 
| Used at op  | Number | Routing sequence at which the material is needed. With the setting “materials of a step must be issued first” work on that step cannot be booked until issued. | 
| Substitutes (item; item)  | Text | Items the storekeeper may issue instead, separated by “;”. A substitute needs a reason when issued. | 
| Note  | Text | Free note printed on the pick list. | 

Table columns: BOM · Item · Rev · Status · Effective from · Effective to · Lines · Material cost (std) · Prepared by

Buttons on this screen
- + New BOM opens the form for a new bill (needs the engineering permission).
- Excel exports the list.
- Print / PDF prints the list.
- Save draft saves a draft that can still be changed.
- Submit for approval sends the draft to the engineering approver.
- Approve and release releases the revision; the previous one becomes Superseded.
- Return to draft sends it back to the engineer with a reason.
- Release now releases a draft directly when you hold the approval permission.
- Raise engineering change on a released bill: starts a change request for a new revision.
- Copy to new BOM makes a draft copy to start a new bill.
- Retire withdraws a revision, with a reason.

Good to know
- A bill cannot be retired while open production orders still use it.
- Explosion & cost costs each line at the standard cost, else the current stock cost; choose Current stock cost to ignore standards. Pick the option for each class at the top to see the variant.
- Releasing a new revision ends the previous one on the day before the new one starts, so the new revision needs a later effective date. A change to a released bill is accepted only through an approved engineering change.   

### Engineering Changes & Revisions

Manufacturing › Engineering & Set-up › Bills of Material › Engineering Changes & Revisions 

Every change to a released bill of material or routing is requested here, approved, and then turned into a new draft revision. Approving the change does not alter any released document and open orders keep the revision they were released with. When the new revision is released the change becomes Implemented.How to use it
- Select + New change request (or Raise engineering change from a released bill or routing).
- Choose the Item, the Change type (BOM, Routing or BOM and routing), the Planned effective date and enter the Reason for the change and a description.
- Select Submit for approval. The engineering approver selects Approve or Reject.
- After approval select Create BOM revision or Create routing revision. The new draft is a copy of the current revision with the next revision letter; edit and release it.
- Releasing the new revision marks the change Implemented and supersedes the old revision.

_[Screenshot: The Engineering Changes list]_

The Engineering Changes list

_[Screenshot: A new change request]_

A new change request

_[Screenshot: A submitted request waiting for approval]_

A submitted request waiting for approval

Fields on the “New engineering change” form
| Field | Type | What to enter / options | 
| Item required | List | The finished item whose bill or routing changes.

Pick from the master list | 
| Change type  | List | Which documents the change touches.

BOM · Routing · BOM and routing | 
| Planned effective date  | Date | When the new revision is expected to apply. | 
| Reason for the change required | Long text | Why the change is needed: a safety issue, a part obsolete, a cost saving. | 
| Description of the change  | Long text | What will change, in words the shop floor can follow. | 
| Requested by automatic | Text | The user who raised the request. | 

Table columns: Change · Date · Item · Type · From rev · To rev · Reason · Status · Requested by

Buttons on this screen
- + New change request opens the form.
- Save draft Submit for approval keep the request or send it on.
- Approve Reject decision of the engineering approver; the person who raised the change cannot approve it when the separation-of-duties setting is on.
- Create BOM revision Create routing revision makes the new draft revision from an approved change.
- Excel Print / PDF export and print the register.

Good to know
- Statuses: Draft → Submitted → Approved (or Rejected) → Implemented.
- The Engineering change register report in Manufacturing Reports lists all changes with their revisions.   

### Routings

Manufacturing › Engineering & Set-up › Routings & Work Centres › Routings 

The steps to build a panel: the work centre, setup and run time, crew size, quality checkpoints and subcontracted steps. The times drive the cost estimate, the schedule and the labour absorbed into the order. Like a bill of material, a routing has revisions and a released routing is never edited.How to use it
- Select + New routing, choose the Finished item and enter the effective date.
- Add an operation line for each step: Seq (10, 20, 30…), the Operation name and the Work centre.
- Enter Setup (min/batch), Run (min/unit) and the Crew (number of operators working together).
- Tick QC checkpoint on steps that need an inspection and choose the Quality plan that applies. A checkpoint step is completed only by a passed inspection.
- For a subcontracted step tick Subcontract and enter the Sub cost/unit.
- Save as draft and submit; an engineering approver releases it. Use Raise engineering change to revise a released routing.

_[Screenshot: The Routings list]_

The Routings list

_[Screenshot: A released routing with its operations]_

A released routing with its operations

Fields of a routing
| Field | Type | What to enter / options | 
| Header | 
| Finished item required | List | The item the routing builds.

Pick from the master list | 
| Revision required | Text | Proposed automatically. | 
| Effective from  | Date | First date on which orders pick up the revision. | 
| Description  | Text | What the revision is. | 
| Operations | 
| Seq  | Number | Step number. Steps run in this order; the BOM “Used at op” refers to it. | 
| Operation  | Text | Name of the step, for example Control wiring. | 
| Work centre  | List | Where the step is done. Its rates cost the step.

Pick from the master list | 
| Setup (min/batch)  | Number | Time to prepare the step once for the order. | 
| Run (min/unit)  | Number | Time per unit. Total planned hours = (setup + run × quantity) ÷ 60. | 
| Crew  | Number | Number of operators on the step. Labour is costed on the crew’s person-minutes. | 
| QC checkpoint  | List | Yes: the step needs an inspection for each unit before it is complete.

Yes · No | 
| Quality plan  | List | The checklist used at the checkpoint. If blank, the model’s default plan is used.

Pick from the master list | 
| Subcontract  | List | Yes: the step is done by a supplier; its cost per unit is added.

Yes · No | 
| Sub cost/unit  | Number | Agreed price of the subcontracted step per unit. | 
| Note  | Text | Instruction shown on the traveller. | 

Table columns: Routing · Item · Rev · Status · Effective from · Operations · Std minutes/unit · Quality checkpoints

Buttons on this screen
- + New routing opens the form.
- Save draft Submit for approval Approve and release Return to draft the same approval flow as a bill of material.
- Raise engineering change on a released routing.
- Copy to new routing makes a draft copy.
- Retire withdraws a revision, with a reason.

Good to know
- The standard minutes per unit and the number of checkpoints are shown in the list so the engineer can compare routings at a glance.   

### Work Centres

Manufacturing › Engineering & Set-up › Routings & Work Centres › Work Centres 

The places where work is done: busbar shop, assembly bench, wiring bench, testing bay, packing. A work centre sets the capacity used by scheduling (hours per day × stations × efficiency) and the rates per hour for labour, machine and overhead that cost every operation booked on it.How to use it
- Select + New; the Code (WC-0001) is automatic. Enter the Name and choose the Type, Department and Cost Centre.
- Enter the capacity: Hours per Day, number of Stations and Efficiency %.
- Enter the rates: Labour Rate per Hour, Machine Rate per Hour and the Overhead Rate per Hour; choose the Overhead Pool and the Overhead Basis (labour hours or machine hours).
- Link a fixed Asset if the work centre is a machine in the Fixed Assets register, set the Status and save.

_[Screenshot: The Work Centres list]_

The Work Centres list

_[Screenshot: The form that opens with + New]_

The form that opens with + New

Fields on the “New Work Centre” form
| Field | Type | What to enter / options | 
| Identity | 
| Code automatic | Text | Created automatically (WC-0001). | 
| Name required | Text | Shown on routings, orders and the shop-floor screen. | 
| Type  | List | Classifies the work centre.

Cutting and punching · Busbar fabrication · Assembly bench · Wiring bench · Testing bay · Paint and finish · Packing · Engineering · Subcontract | 
| Department  | List | The ERP department that carries the cost.

Pick from the master list | 
| Cost Centre  | List | The cost centre of the work centre, used for reports and journals.

Pick from the master list | 
| Capacity | 
| Hours per Day  | Number | Working hours of one station per day. | 
| Stations  | Number | How many benches or machines work in parallel. | 
| Efficiency %  | Number | Used when scheduling: at 80 % a step needs 1.25 times its standard time. Between 1 and 150. | 
| Rates | 
| Labour Rate per Hour  | Number | Cost of one operator hour. The setting “Labour rate comes from” can use the employee’s payroll rate instead. | 
| Machine Rate per Hour  | Number | Cost of using the machine, absorbed with the time booked. | 
| Overhead Pool  | List | The pool whose budget this work centre’s overhead belongs to.

Panel Shop Overhead | 
| Overhead Rate per Hour  | Number | Overhead absorbed for each hour booked. | 
| Overhead Basis  | List | Whether overhead is absorbed on labour hours or on machine hours.

Labour hours · Machine hours | 
| Asset  | List | Optional link to a fixed asset (a machine).

Pick from the master list | 
| Status  | List | Active can be booked. Under maintenance and Blocked cannot be booked. A maintenance order marked “stops production” puts the work centre under maintenance while it is in progress.

Active · Inactive · Under maintenance · Blocked | 
| Remarks  | Text | Free notes. | 

Table columns: Code · Name · Type · Hours per Day · Stations · Labour Rate per Hour · Overhead Rate per Hour · Status

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
- A work centre that is under maintenance, or has overdue critical maintenance, cannot be booked (the rule is in Settings); see Maintenance & Calibration.
- The scheduler and the dashboard’s load chart use hours per day × stations; set both correctly or the load percentage will be wrong.   

### Overhead Pools

Manufacturing › Engineering & Set-up › Routings & Work Centres › Overhead Pools 

A pool collects the factory overheads that are not charged directly to a panel (supervision, rent of the workshop, power, tools) and sets the rate at which they are absorbed. Work centres point to a pool. The costing screen compares what was absorbed into orders with the overhead actually incurred, so under- or over-absorption is visible.How to use it
- Select + New, enter the Name and the Cost Centre.
- Enter the yearly Budget Fixed Overhead, Budget Variable Overhead and the Normal Capacity Hours of the year.
- In Overhead Accounts list the expense ledgers that make up the pool, separated by “;”. Their balances are the actual overhead in the absorption report.
- Save, and choose the pool in each work centre. The budget rate is (fixed + variable) ÷ normal hours.

_[Screenshot: The Overhead Pools list]_

The Overhead Pools list

_[Screenshot: The form that opens with + New]_

The form that opens with + New

Fields on the “New Overhead Pool” form
| Field | Type | What to enter / options | 
| Code automatic | Text | Created automatically (OP-0001). | 
| Name required | Text | Shown in the work centre and in the absorption report. | 
| Cost Centre  | List | The cost centre the pool belongs to.

Pick from the master list | 
| Budget Fixed Overhead (year)  | Number | Overhead that does not vary with output, for the year. | 
| Budget Variable Overhead (year)  | Number | Overhead that varies with output, for the year. | 
| Normal Capacity Hours (year)  | Number | The hours the factory normally works in a year. Fixed overhead is spread over these hours, so idle capacity is not loaded onto panels. | 
| Overhead Accounts (separate with ;)  | Text | Names of the ledger accounts that record this overhead, separated by “;”. | 
| Status  | List | Active or Inactive.

Active · Inactive | 
| Remarks  | Text | Free notes. | 

Table columns: Code · Name · Budget Fixed Overhead (year) · Budget Variable Overhead (year) · Normal Capacity Hours (year) · Status

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
- Overhead is absorbed with the rate of the work centre; the pool’s budget rate (shown on Manufacturing Costing) is the yardstick to set that rate.
- Overhead that is not absorbed stays in the profit and loss account (or in cost of sales, as chosen in Settings); it is not spread back to stock.   

### Settings & Approval Rules

Manufacturing › Engineering & Set-up › Settings › Settings & Approval Rules 

The operating rules of the module, the permissions of each role, the approval rules and the demonstration data. Only a user with the administrator permission of Manufacturing can change them. The screen has five tabs.How to use it
- Settings: change the rules below and select Save settings; Back to standard values restores the defaults.
- Roles and permissions: select Create the standard manufacturing roles to add ten ready-made roles to the ERP (Manufacturing Manager, Production Planner, Production Supervisor, Storekeeper, Quality Inspector, Quality Manager, Design Engineer, Engineering Manager, Cost Accountant, Maintenance Technician), or apply a preset to a role you already have. Tick or untick the permissions in the table.
- Approval rules: choose what needs approval (production order release, MRP proposal, concession, standard cost), the amount range and the approver role, then Add rule. Select a rule to delete it.
- Demonstration data: loads a small, clearly labelled demonstration (stores, items, an employee team, work centres, a chiller panel with options, a released bill and routing, a quality plan, instruments and opening stock) for training.
- Notes: how the module fits with the rest of the ERP and its limits.

_[Screenshot: The Settings tab]_

The Settings tab

_[Screenshot: Roles and permissions]_

Roles and permissions

_[Screenshot: Approval rules]_

Approval rules

Settings of the Manufacturing module
| Field | Type | What to enter / options | 
| Orders and materials | 
| Allow release of an order with material shortages  | List | Whether an order can be released when components are short.

No · Yes | 
| Materials of a step must be issued before work on it is booked  | List | Stops operators booking time on a step before its material has left the store.

Yes · No | 
| Over-issue tolerance %  | Number | How much more than the requirement may be issued (default 5). | 
| Default store for materials  | List | Store that supplies components.

Pick from the master list | 
| Default store for finished goods  | List | Store that receives finished panels.

Pick from the master list | 
| Serial number prefix  | Text | Prefix of panel serial numbers (default HVP). | 
| Serial number digits  | Number | Length of the running number (default 5), giving HVP-26-00001. | 
| Costing | 
| Costing method  | List | Actual: finished goods are received at the actual cost accumulated in work in progress. Standard: they are received at the standard cost and the variances are posted when the order is closed.

Actual · Standard | 
| Labour rate comes from  | List | The work centre’s rate or the employee’s payroll rate.

Work centre · Employee payroll | 
| Hours per month (payroll rate)  | Number | Divisor that turns a monthly salary into an hourly rate (default 208). | 
| Normal scrap allowance %  | Number | Scrap up to this percentage of the quantity is normal and stays in the cost (default 2). | 
| Unabsorbed overhead goes to  | List | Where overhead that was not absorbed is shown.

COGS · Inventory and COGS | 
| Quality and maintenance | 
| A failed mandatory test holds the whole order  | List | Yes: one failed unit puts the order on quality hold; No: only the unit is held.

Yes · No | 
| Instrument past its calibration date  | List | Block: the instrument cannot be used in an inspection. Warn: it can, with a warning.

Block · Warn | 
| Overdue critical maintenance  | List | Block: the work centre cannot be booked. Warn: it can, with a warning.

Block · Warn | 
| Planning | 
| MRP horizon (days)  | Number | How far ahead the demand is read (default 60). | 
| MRP includes forecasts  | List | Whether demand forecasts count as demand.

Yes · No | 
| MRP respects safety stock  | List | Whether the item’s safety stock is kept.

Yes · No | 
| Open requisitions count as supply  | List | Whether purchase requisitions not yet ordered cover a shortage.

Yes · No | 
| Default lead time (days)  | Number | Used when an item has no lead time of its own. | 
| Working days (0 = Sunday … 6 = Saturday)  | Text | The days the factory works, for example 1,2,3,4,5. | 
| Local content (ICV) | 
| Nationalities counted as Emirati (separate with ;)  | Text | Nationalities whose labour counts in full. | 
| Expatriate salary counted %  | Number | Share of expatriate labour counted as local (default 60). | 
| Material cost treated as local %  | Number | Share of material cost counted as local (default 0). | 
| Control | 
| The person who prepares a document cannot approve it  | List | Separation of duties for approvals.

Yes · No | 

Buttons on this screen
- Save settings stores the settings.
- Back to standard values restores the defaults.
- Create the standard manufacturing roles adds the ten ready-made roles to the ERP.
- Apply copies a preset’s permissions to the chosen role.
- Add rule adds an approval rule.
- Load demonstration data loads the training data (only when it is not loaded yet).

Good to know
- Access to the module itself is given in Users & Settings › Role Permissions; the table here decides what each role may do inside Manufacturing. While user security is off, everybody has every permission.
- A rule for “Manufacturing: Production order release” names the role that must approve a release whose estimated cost falls in the range; the person who prepared the order cannot approve it.  

### Planning & Production  

### Demand Planning

Manufacturing › Planning & Production › Demand & Planning › Demand Planning 

What the market and the projects will need: open sales orders for manufactured items, forecasts you enter, and project requirements. It is the input of MRP. The summary compares the total demand of each item with the stock on hand and the production orders already open, and shows what is not covered.How to use it
- Open the Demand summary tab, choose the Horizon (days) and whether to Include forecasts. Select a tile or a row to see the demand behind it.
- On the Forecasts tab select + New, choose the item, the date it is Needed by, the quantity, the source and your Confidence %. Only the confident share of a forecast counts as demand.
- On the Project demand tab select + New to record the panels a project will need (project, item, quantity, need date).
- Run MRP (next screen) to turn the uncovered demand into proposals.

_[Screenshot: The Demand summary tab]_

The Demand summary tab

_[Screenshot: The Forecasts tab]_

The Forecasts tab

_[Screenshot: A new forecast]_

A new forecast

Fields on the “New demand forecast” form
| Field | Type | What to enter / options | 
| Item required | List | A manufactured item (one with a bill of material).

Pick from the master list | 
| Needed by required | Date | The date the quantity is expected to be needed. | 
| Quantity required | Number | Expected quantity. | 
| Source  | List | Where the figure comes from.

Sales forecast · Tender pipeline · Management · Other | 
| Confidence %  | Number | The share of the quantity that counts as demand. A 6-unit forecast at 70 % counts as 4.2 units. | 
| Status  | List | Active counts as demand. Consumed and Cancelled do not.

Active · Consumed · Cancelled | 
| Remarks  | Text | Free notes. | 

Fields of a project demand line
| Field | Type | What to enter / options | 
| Project  | List | The project that needs the panels.

Pick from the master list | 
| Item  | List | The manufactured item.

Pick from the master list | 
| Qty  | Number | Quantity needed. | 
| Need Date  | Date | When the project needs them. | 
| Status  | List | Open counts as demand.

Open · Fulfilled · Cancelled | 
| Reference  | Text | A tender, BOQ or drawing reference. | 
| Remarks  | Text | Free notes. | 

Columns of the demand summary: Item · Sales orders · Forecast · Project demand · Total demand · On hand · Open orders · Not covered · First needed

Buttons on this screen
- Horizon (days) Include forecasts change what the summary counts.
- + New on the Forecasts and Project demand tabs.
- Excel exports the summary.
- Print / PDF prints it.

Good to know
- Approved and partially delivered sales orders count, for the quantity not yet delivered, on their required date (or the order date plus the sales-order lead time set in MRP). The From a sales order button on Production Orders prepares an order for a line directly.
- “Not covered” = total demand − stock on hand − open production orders. It is the quantity MRP will propose to make.   

### Material Requirements Planning

Manufacturing › Planning & Production › Demand & Planning › Material Requirements Planning 

Required quantity from the bill of material, less the stock on hand, less what is already on order, gives the shortage. A run only makes proposals: nothing is created until a proposal is approved. An approved Make proposal becomes a draft production order, an approved Buy proposal becomes a draft purchase requisition in Purchase for the preferred supplier.How to use it
- Set the run options at the top: Planning horizon, Sales order lead time, Include forecasts, Include safety stock and Count open requisitions as supply, then select Run MRP.
- Select the run in the list. The proposals show the gross requirement, on hand, on order, safety stock, the proposed quantity and the date it is needed and must be ordered by (late dates are marked).
- Select Why? on a line to see how the figure was reached, level by level.
- Tick the proposals you accept (or Select all open) and select Approve selected, or Reject selected. If an MRP approval rule applies, only the named role can approve.
- Continue in Production Orders (to release the draft orders) and in Purchase (to turn the requisitions into LPOs).

_[Screenshot: The MRP run screen]_

The MRP run screen

_[Screenshot: An MRP run with its proposals]_

An MRP run with its proposals

Run options
| Field | Type | What to enter / options | 
| Planning horizon (days)  | Number | How far ahead the demand is read. | 
| Sales order lead time (days after order date)  | Number | Assumed time between a sales order and its delivery date. | 
| Include forecasts  | List | Count forecasts as demand.

Yes · No | 
| Include safety stock  | List | Plan to keep each item’s safety stock.

Yes · No | 
| Count open requisitions as supply  | List | Treat requisitions not yet ordered as coming stock.

Yes · No | 

Columns of the list of runs: Run · Date · Horizon · Proposals · Open · Converted · Status · Run by

Columns of the proposals: Item · Action · Gross · On hand · On order · Safety · Proposed qty · Needed · Order by · Supplier · Est. cost · Status

Buttons on this screen
- Run MRP calculates the proposals for the horizon.
- Why? explains a proposal.
- Select all open ticks every proposal still open.
- Approve selected creates the draft production orders and purchase requisitions.
- Reject selected closes the proposals without creating anything.
- Excel Print / PDF export and print the run.

Good to know
- Items whose stock and open orders already cover the demand are listed under Covered items.
- MRP runs only when you press the button; it is not a background job. Run it again after the demand changes.
- The run shows how many proposals were Converted into orders and requisitions and how many are still open.   

### Planning & Scheduling

Manufacturing › Planning & Production › Demand & Planning › Planning & Scheduling 

Forward scheduling of every planned and live order through its work centres, day by day, using each centre’s capacity (hours per day × stations × efficiency). Orders are taken by priority and due date. The screen shows the load of every work centre by week and tells you which orders will finish late.How to use it
- Choose Capacity: Finite (a work centre cannot work more than its hours, so work moves to later days) or Infinite (shows the overload without moving work).
- Read the tiles (orders scheduled, orders finishing late, operations ending after the due date, work centres) and the Load by work centre table.
- Check the Orders table (start, due, scheduled finish, result) and the Operations table (hours and dates of each step).
- Select Apply schedule to the orders to write the scheduled dates onto the orders and their operations.

_[Screenshot: The scheduling screen]_

The scheduling screen

Columns of the Orders table: Order · Item · Qty · Status · Priority · Start · Due · Scheduled finish · Result

Columns of the Operations table: Order · Seq · Operation · Work centre · Hours · Start · End · Result

Buttons on this screen
- Capacity Finite or Infinite scheduling.
- Apply schedule to the orders saves the scheduled dates on the orders (needs the planning permission).
- Excel Print / PDF export and print the schedule.

Good to know
- Only working days are used (set in Settings). The load percentage above 100 % means the work centre is overloaded.
- Scheduling runs when you open or change the options; the dates are not changed on the orders until you apply them.   

### Production Orders

Manufacturing › Planning & Production › Production › Production Orders 

The authorisation to build panels. An order copies the bill of material and routing that are effective on its start date and keeps those revisions, reserves its materials, and moves through Draft → Planned → Released → In Progress → Completed → Closed (with On Hold, Quality Hold, Awaiting Approval and Cancelled on the way). Its serial numbers are created when it is released.How to use it
- Select + New production order (or From a sales order to pick an approved sales order line that is not yet covered).
- Choose the Item to produce and the Quantity; set the dates, priority, project or customer, the Materials from store and the Finished goods to store. When the item has option classes, choose the option for each (IP rating, controller…).
- Select Create draft or Create and release. A draft can be changed; Plan marks it ready; Release checks the materials, reserves them and creates the serial numbers. If an approval rule applies, the order waits in Awaiting Approval for the named role.
- Open the order to follow it on its six tabs: Overview, Components, Operations, Units & serials, Cost and History.
- Issue materials, book the work on the shop floor, inspect, and receive the finished panels (next screens). Select Close order when everything is received or scrapped to post any remaining variance.

_[Screenshot: The Production Orders list]_

The Production Orders list

_[Screenshot: A new production order]_

A new production order

_[Screenshot: Order Overview]_

Order Overview

_[Screenshot: Components]_

Components

_[Screenshot: Operations and time entries]_

Operations and time entries

_[Screenshot: Cost]_

Cost

_[Screenshot: The traveller (print)]_

The traveller (print)

Fields on the “New production order” form
| Field | Type | What to enter / options | 
| Item to produce required | List | A manufactured item that has a released bill of material and routing.

Pick from the master list | 
| Quantity required | Number | Number of panels to build. | 
| Start date  | Date | The bill and routing effective on this date are copied into the order. | 
| Due date  | Date | When the panels must be ready. Late orders are flagged. | 
| Priority  | List | Used when scheduling and in the lists.

Normal · High · Urgent · Low | 
| Sales order  | List | Links the order to an approved sales order.

Pick from the master list | 
| Customer  | List | The customer the panels are for.

Pick from the master list | 
| Project  | List | Charges the finished panels to a project when they are issued.

Pick from the master list | 
| Cost centre  | List | For reports.

Pick from the master list | 
| Materials from store required | List | The store the components are issued from.

Pick from the master list | 
| Finished goods to store  | List | The store that receives the finished panels.

Pick from the master list | 
| Remarks  | Text | Free notes. | 

Table columns: Order · Item · Qty · Received · Status · Start · Due · Priority · Progress · WIP value · Project · Sales order

The tabs of an order
| Field | Type | What to enter / options | 
| Overview  | Tab | Item, quantity, bill of material and routing revision, model, chosen options, units received, progress, work in progress and estimated cost. Dates, priority, project, stores and remarks can be changed while the order is still a draft or planned. | 
| Components  | Tab | Required (with scrap allowance), reserved, issued, left to issue, free stock, lot or serial numbers and the status of every component. | 
| Operations  | Tab | Each step with its work centre, planned and actual minutes, done quantity, actual cost and status, and below it the time entries that were booked (void an entry with Void this entry). | 
| Units &amp; serials  | Tab | Each panel’s serial number, status, final test result, inspections, receipt and scrap reason. | 
| Cost  | Tab | Planned, standard and actual cost by material, labour, machine, overhead and subcontract, the cost received into stock, scrap written off and the order’s cost ledger. | 
| History  | Tab | Every status change with the user and the time. | 

Buttons on this screen
- + New production order opens the form.
- From a sales order lists approved sales order lines for manufactured items that are not yet covered.
- Create draft Create and release saves the order, and releases it at once if the materials are available.
- Plan marks a draft as ready.
- Release Approve and release checks material shortages, reserves the materials and creates the serial numbers.
- Issue materials Return materials open the issue and return screens.
- Shop floor opens the shop-floor screen for the order.
- Report completion receives finished units into stock.
- Hold Resume stops a released or running order (a reason is required) and restarts it.
- Complete rework finishes a rework order.
- Close order Reopen order closes a completed order and posts its variance; reopening reverses it.
- Cancel order cancels an order (a reason is required) once nothing is received, no labour is posted and the materials are returned to stock.
- Delete removes a draft.
- Traveller (print) prints the job card that travels with the panel.
- Excel Print / PDF export and print the list.

Good to know
- A released order never changes when a newer revision of the bill or routing is released: it keeps the one it started with.
- Release is blocked when materials are short unless Allow release of an order with material shortages is on in Settings.
- Orders cannot be closed while units are still waiting to be received or scrapped, a non-conformance of the order is open, or a rework order is not finished.   

### Material Reservations & Issues

Manufacturing › Planning & Production › Production › Material Reservations & Issues 

The materials set aside for released orders, what has been issued to work in progress and what is short. Issuing and returning post real Inventory documents (a Stock Issue and a Stock Receipt), so the stock ledger and the general ledger stay in agreement: issued material moves from the store into Work in Progress at its FIFO cost.How to use it
- Choose an Order (or leave All live orders) and read the tiles: orders, component lines, short lines and lines ready to issue.
- Select an order’s Issue materials button, or open it from the production order. The pick list shows required, issued, left and free stock for each component.
- In Issue now enter the quantity. For lot- or serial-tracked items enter the Lot no. or the serial numbers (separated by commas). To use an approved substitute, choose it in Item issued and give the Substitute reason.
- Select Issue. Use Print pick list for the storekeeper.
- To send unused material back, select Return materials, enter the quantity and the reason, and select Return to stock. It goes back at the cost it was issued at and leaves work in progress.

_[Screenshot: Reservations and issues]_

Reservations and issues

_[Screenshot: The issue screen with the pick list]_

The issue screen with the pick list

Columns of the issue screen
| Field | Type | What to enter / options | 
| Component  | Text | The item required by the order. | 
| Required  | Number | Quantity needed including the scrap allowance. | 
| Issued  | Number | Quantity already issued, net of returns. | 
| Left  | Number | Still to issue. | 
| Free in store  | Number | Stock not reserved for other orders. | 
| Issue now  | Number | Quantity to issue now. It cannot exceed what is left plus the over-issue tolerance. | 
| Item issued  | List | The component itself, or one of its approved substitutes. | 
| Substitute reason  | Text | Required when a substitute is issued. | 
| Lot no.  | Text | For lot-tracked items. | 
| Serial numbers (separate with commas)  | Text | For serial-tracked items: one number for each unit issued. | 
| Supplier / GRN ref.  | Text | Where the lot came from, for the trace. | 
| For unit (optional)  | List | Links a serial-tracked part to the panel that will carry it. | 

Columns of the list: Order · Item · Component · Required · Reserved · Issued · Left to issue · On hand · Short · Status

Buttons on this screen
- Issue materials Print pick list Issue pick, print and post the issue.
- Return materials Return to stock post a return.
- Order filters the list.
- Excel Print / PDF export and print.

Good to know
- Releasing an order reserves the free stock; another order cannot use it. The Short column shows what could not be reserved.
- Only the storekeeper permission can issue or return. Material issued to an order is charged to Work in Progress, never directly to cost of sales.   

### Shop-Floor Control

Manufacturing › Planning & Production › Production › Shop-Floor Control 

A large-button screen for the supervisor and the operators. Choose an order and it shows the pick list with ticks for what has been issued, and the routing steps in order. Each step is completed here: it records the quantity, the operator and the time, absorbs the labour, machine and overhead cost into work in progress, and unlocks the next step.How to use it
- Choose the order from the strip at the top (or All orders…).
- Check the Pick list. If materials are missing select Issue materials.
- On the step to be worked select Complete step, then enter the Quantity completed, the Operator and the person-minutes worked (blank = the standard time), the date and a note, and Save.
- A step with a quality checkpoint shows Inspect with the number of units waiting; select it to open the inspection of the unit.
- When all steps are done and the units have passed, select Report completion to receive them into stock. Use Scrap a unit or Put order on hold when something goes wrong.

_[Screenshot: An order on quality hold]_

An order on quality hold

_[Screenshot: Completing a step]_

Completing a step

_[Screenshot: Scrapping a unit]_

Scrapping a unit

Fields of the “Complete step” form
| Field | Type | What to enter / options | 
| Quantity completed required | Number | How many units were finished on this step. It cannot exceed what the previous step has finished. | 
| Operator required | List | The employee who did the work. The cost uses the work-centre rate, or the employee’s payroll rate if set in Settings.

Pick from the master list | 
| Person-minutes worked  | Number | Total minutes worked by all operators. Blank means the standard minutes for the crew. | 
| Date  | Date | Date of the work. | 
| Note  | Text | Free note. | 
| Fields of the “Scrap units” form | 
| Reason required | Text | Why the units are scrapped. | 
| Cost treatment  | List | Abnormal: expense it writes the cost off to expense and never into stock. Normal: keep in the order cost leaves the cost in the order.

Abnormal: expense it · Normal: keep in the order cost | 

Buttons on this screen
- Complete step books the step: quantity, operator, minutes and cost.
- Inspect (n) opens the inspection of the next unit waiting at a checkpoint.
- Waiting nothing is ready for this step yet: the previous step has not passed any unit on.
- Issue materials Return Print pick list material handling.
- Report completion receives passed units into finished-goods stock.
- Complete rework on a rework order.
- Put order on hold stops the order with a reason.
- Scrap a unit scraps one or more units.
- Open full order opens the production order.

Good to know
- A step cannot be booked when its material has not been issued (if that setting is on), when the work centre is under maintenance or blocked, or when the order is on hold or quality hold.
- A booked step posts a journal Dr Work in Progress · Cr Production Labour / Overhead Applied, so the order’s cost grows as work is done. Wrong entries are voided from the order’s Operations tab.   

### Work in Progress

Manufacturing › Planning & Production › Production › Work in Progress 

The cost of orders that have started and are not yet closed: materials issued, labour, machine, overhead and subcontract absorbed, rework brought in, scrap written off, less what has moved to finished goods. It is a sub-ledger of the Work in Progress account and the tiles show whether it agrees with the ledger.How to use it
- Read the tiles: total work in progress, materials, conversion cost and the Ledger difference, which should be 0.00.
- On Orders in progress read the cost build-up of each order; select an order to open it.
- On Reconciliation compare the sub-ledger with the general-ledger account.
- On Ageing see how long each order has been in progress, to spot orders that are stuck.

_[Screenshot: Work in progress by order]_

Work in progress by order

Table columns: Order · Item · Status · Materials · Labour · Machine · Overhead · Subcontract · Rework in · Scrap off · Relieved to FG · WIP balance · Days

Buttons on this screen
- Excel Print / PDF export and print the report.

Good to know
- Work in progress is relieved when finished panels are received (cost moves to Finished Goods), scrap is written off, or the order is closed.
- A difference between the sub-ledger and the ledger means a journal was posted outside the module; the Period-end checks in Manufacturing Accounting will show it too.   

### Finished Goods Receipt

Manufacturing › Planning & Production › Production › Finished Goods Receipt 

Passed units are received into the finished-goods store at their cost. A unit can be received only after it has passed its final test. Delivery and revenue follow the normal Sales process (delivery note and invoice): nothing is sold from here.How to use it
- On Ready to receive select an order that has units which passed.
- Choose the Finished-goods store and the date, tick the units to receive and select Receive into stock.
- The receipt posts a Stock Receipt: Dr Finished Goods · Cr Work in Progress at the actual cost (or the standard cost if the costing method is Standard), and the serial numbers move to In Stock.
- Use Receipts to see what was received and Serial stock for the panels in the stores.

_[Screenshot: Ready to receive]_

Ready to receive

_[Screenshot: Receiving units into stock]_

Receiving units into stock

Fields of the receipt form
| Field | Type | What to enter / options | 
| Finished-goods store required | List | The store that receives the panels.

Pick from the master list | 
| Date  | Date | Date of the receipt. | 
| Unit / Final test  | Table | Tick each unit to receive; its final test result is shown. | 

Columns of Ready to receive: Order · Item · Units passed · Received · Order qty · To store · Due

Buttons on this screen
- Receive into stock posts the receipt of the ticked units.
- Excel Print / PDF export and print.

Good to know
- The cost per unit is the order’s work in progress divided by the units still to be received, so the first and the last receipt of an order are costed fairly.
- Panels are then sold with the normal delivery note and invoice; the cost of sales is taken from the finished-goods cost.   

### Quality Assurance & Testing

Manufacturing › Planning & Production › Quality & Traceability › Quality Assurance & Testing 

Inspection checkpoints are part of the routing. At each checkpoint the inspector completes a quality plan (a checklist of test templates with limits) for every unit. A pass completes the step for that unit and books the inspection time; a failed mandatory test holds the unit (and, by default, the whole order) and raises a non-conformance report automatically.How to use it
- On Inspection queue see the units waiting at each checkpoint and select Start inspection.
- Choose the Unit (serial), enter the Inspector, and fill the result of each line: the Reading for measurements (checked against the limits), the Instrument used, and Pass or Fail for the others.
- Select Save inspection. A pass completes the step for the unit. A mandatory failure holds the unit and opens an NCR.
- On Test templates define the reusable tests (type, characteristic, whether mandatory, whether an instrument is needed, limits). On Quality plans combine templates into a checklist and name it on a routing step. On Instruments keep the calibration register.
- Inspections lists every inspection done; select one to see its readings and, if it failed, open its NCR.

_[Screenshot: The inspection queue]_

The inspection queue

_[Screenshot: Inspecting a unit]_

Inspecting a unit

_[Screenshot: Test templates]_

Test templates

_[Screenshot: A quality plan]_

A quality plan

_[Screenshot: Instruments]_

Instruments

_[Screenshot: Recording a calibration]_

Recording a calibration

Fields of the inspection form
| Field | Type | What to enter / options | 
| Unit (serial)  | List | The panel being inspected.

HVP-26-00004 · HVP-26-00005 | 
| Inspector required | List | The person who did the test.

Pick from the master list | 
| Date  | Date | Date of the inspection. | 
| Note  | Text | Free note. | 

Lines of the inspection
| Field | Type | What to enter / options | 
| Characteristic  | Text | What is checked, from the test template. | 
| Requirement  | Text | The limit or the acceptance rule. | 
| Instrument  | List | The calibrated instrument used. An instrument past its calibration date is blocked or warned, as set in Settings. | 
| Reading  | Number | The measured value of a measurement test, for example the insulation resistance. | 
| Result  | List | Pass or Fail. A reading outside the limits is a fail.

Pass · Fail | 
| Note  | Text | Free note. | 

Fields of the “New test template” form
| Field | Type | What to enter / options | 
| Name required | Text | The test, for example Insulation resistance. | 
| Code automatic | Text | Created automatically. | 
| Test type  | List | Pass/Fail, a Measurement with limits, or a Visual check.

Pass/Fail · Measurement · Visual | 
| Characteristic being checked  | Text | What the test shows. | 
| Mandatory  | List | A mandatory failure holds the unit.

Yes · No | 
| Instrument required  | List | Yes: an instrument must be named.

No · Yes | 
| Method / standard  | Text | The method or standard, for example IEC 61439. | 
| Status  | List | Active or Inactive.

Active · Inactive | 

Fields of a quality plan
| Field | Type | What to enter / options | 
| Plan name required | Text | Named on the routing step. | 
| Code automatic | Text | Created automatically. | 
| Item (optional)  | List | Restricts the plan to one item.

Pick from the master list | 
| Stage  | List | Where in the process it applies.

Incoming · In-process · Final · Pre-delivery | 
| Status  | List | Active, Draft or Inactive.

Active · Draft · Inactive | 
| Remarks  | Text | Free notes. | 

Lines of a quality plan
| Field | Type | What to enter / options | 
| Test template  | List | The test to perform.

Pick from the master list | 
| Type  | Automatic | From the template. | 
| Mandatory  | List | Overrides the template.

Yes · No | 
| Lower limit (overrides)  | Number | Overrides the template’s lower limit. | 
| Upper limit (overrides)  | Number | Overrides the template’s upper limit. | 

Fields of the “New calibration instrument” form
| Field | Type | What to enter / options | 
| Name required | Text | The instrument, for example Insulation Tester 1000 V. | 
| Code automatic | Text | Created automatically. | 
| Type (multimeter, megger, hipot tester…)  | Text | The kind of instrument. | 
| Serial no.  | Text | The maker’s serial number. | 
| Asset  | List | Optional link to the fixed asset.

Pick from the master list | 
| Range  | Text | Measuring range. | 
| Last calibrated  | Date | Date of the last calibration. | 
| Interval (days)  | Number | Days between calibrations. It must be above zero. | 
| Certificate no.  | Text | Certificate of the last calibration. | 
| Calibrated by (laboratory)  | Text | The laboratory. | 
| Status  | List | Valid or Out of service.

Valid · Out of service | 

Columns of the inspection queue: Order · Item · Checkpoint · Units waiting · Next units · Plan

Buttons on this screen
- Start inspection opens the inspection of the next unit.
- Save inspection records the results.
- + New on the Test templates, Quality plans and Instruments tabs.
- + Add line adds a test to a quality plan.
- Save calibration records a new calibration and moves the due date.
- Open NCR Print on an opened inspection.
- Excel Print / PDF export and print.

Good to know
- First-pass yield counts the first inspection of each unit at each checkpoint, so retests do not hide a real failure.
- Inspections cannot be deleted. A wrong result is corrected by a new inspection, which keeps the audit trail intact.   

### Rework, Scrap & NCR

Manufacturing › Planning & Production › Quality & Traceability › Rework, Scrap & NCR 

Every failure is recorded, decided and costed. A non-conformance report (NCR) is raised automatically when a mandatory test fails, or by hand for faulty incoming material, a customer complaint or an audit finding. Normal rework and scrap stay in the cost of the order; abnormal waste is written off to expense and is never capitalised into stock.How to use it
- Open the NCR (select it in the list or from the failed inspection).
- Choose the Decision: Rework (a rework order is created for the unit), Scrap (the unit is scrapped), Use as is (accepted under concession, with the employee who accepts it) or Re-test (the unit returns to production for another test).
- Enter the Root cause / reason and choose the Cost treatment: Keep in order cost or Expense as abnormal. Select Apply decision.
- A reworked unit is tested again when the rework order is completed. The quality hold of the order is lifted when no unit of it is still on hold.
- For a problem that is not a unit failure select + New NCR and describe it.

_[Screenshot: Non-conformance reports]_

Non-conformance reports

_[Screenshot: Deciding an NCR]_

Deciding an NCR

Fields of the “New non-conformance report” form
| Field | Type | What to enter / options | 
| Source  | List | Where the problem was found.

Incoming material · In-process · Customer complaint · Internal audit · Other | 
| Severity  | List | Minor, Major or Critical.

Minor · Major · Critical | 
| Item  | List | The item concerned.

Pick from the master list | 
| Production order  | List | The order concerned, if any.

Pick from the master list | 
| Lot / serial / reference  | Text | The lot, serial or document reference. | 
| Quantity  | Number | How many are affected. | 
| What is wrong required | Long text | The description of the defect. | 

Fields of the NCR decision
| Field | Type | What to enter / options | 
| Decision required | List | For a unit of a production order: Rework, Scrap, Use as is or Re-test. For other NCRs: Return to supplier, Use as is, Scrap (record only) or Other.

Rework · Scrap · Use as is · Re-test | 
| Root cause / reason required | Long text | Why it happened. Required. | 
| Notes  | Text | Free notes. | 

Table columns: NCR · Date · Source · Item · Order · Unit / ref · Defect · Severity · Decision · Status

Buttons on this screen
- + New NCR raises a report by hand.
- Apply decision carries out the decision.
- Open order Trace unit jump to the order or the unit’s genealogy.
- Rework orders Scrap log the other two tabs list reworks and scrapped units with their cost.
- Excel Print / PDF export and print.

Good to know
- A concession needs approval by the role named in the Concession approval rule, and not by the person who raised the NCR.
- The cost of rework is brought into the parent order’s work in progress; an abnormal scrap posts Dr Abnormal Scrap and Waste · Cr Work in Progress.   

### Serial & Batch Traceability

Manufacturing › Planning & Production › Quality & Traceability › Serial & Batch Traceability 

Forward and backward genealogy. From a panel’s serial number you see everything that went into it (components with their lot or serial, supplier or GRN reference), its tests, its order and its receipt. From a component’s lot or serial you see every panel that contains it, which is what a recall needs.How to use it
- On Trace type a panel serial number (backward trace), a component lot or serial number (forward trace) or a production order number (all its units).
- In the result read the unit’s details, the Backward: what went into it table and its test and inspection history.
- Select Test certificate to print the certificate (rating, standard, drawing, critical components and test results) or Genealogy (print) for the full trace.
- Serial register lists every serial number with its status; Lots and serials issued lists every tracked component issued to orders.

_[Screenshot: The Trace tab]_

The Trace tab

_[Screenshot: The trace of a panel]_

The trace of a panel

Columns of the backward trace: Component · For line · Lot · Serial · Qty · Supplier / GRN · Issued on · Date

Buttons on this screen
- Test certificate prints the certificate of conformity and test of the unit.
- Genealogy (print) prints the full trace.
- Open order opens the production order.
- Excel Print / PDF export and print.

Good to know
- Only items whose Tracking is Lot or Serial in Item & Technical Specs can be traced to a lot or serial; finished panels are always traced by serial number.
- The statuses of a serial number are In Production, Quality Hold, Rework, In Stock and Scrapped. Delivery to the customer is recorded in Sales.   

### Maintenance & Calibration

Manufacturing › Planning & Production › Maintenance › Maintenance & Calibration 

Planned maintenance of work centres and calibration of the test instruments. A work centre under maintenance, or with overdue critical maintenance, cannot be booked; an instrument past its calibration date cannot be used in an inspection (the rules are in Settings: Block or Warn).How to use it
- Select + New on Maintenance orders, choose the work centre, the type (Preventive, Corrective, Breakdown or Inspection), the planned date and describe the work. Tick Stops production if the work centre must be taken out of service, and Critical if production must stop when it is overdue.
- For preventive work enter Repeat every (days): completing the order creates the next one automatically.
- Select Start work (the work centre goes under maintenance if the order stops production), Issue spares to charge parts from stock to maintenance expense, and Complete with the downtime hours.
- Due and overdue lists what needs attention; Work centre status shows which work centres cannot be booked and why; Calibration shows each instrument’s due date.

_[Screenshot: Maintenance orders]_

Maintenance orders

_[Screenshot: A new maintenance order]_

A new maintenance order

Fields of the “New maintenance order” form
| Field | Type | What to enter / options | 
| Work centre required | List | The work centre to be maintained.

Pick from the master list | 
| Type  | List | The kind of work.

Preventive · Corrective · Breakdown · Inspection | 
| Planned date required | Date | When the work is due. | 
| Stops production while in progress  | List | Yes puts the work centre under maintenance while the order is in progress.

No · Yes | 
| Critical (blocks production when overdue)  | List | Yes blocks bookings on the work centre when the order is overdue (if the setting is Block).

No · Yes | 
| Repeat every (days)  | Number | For preventive work: days until the next order. | 
| Assigned to  | List | The technician.

Pick from the master list | 
| Work to be done required | Long text | The description of the work. | 
| Downtime hours automatic | List | Entered when the order is completed. | 

Columns of the due list: No · Work centre · Type · Planned · Critical · Status · Due

Buttons on this screen
- + New creates a maintenance order.
- Start work starts the order.
- Issue spares issues parts from stock to the order.
- Complete finishes the order and asks for the downtime hours.
- Cancel order cancels an order not completed.
- Excel Print / PDF export and print.

Good to know
- Calibration is recorded on the Calibration tab (or in Quality Assurance & Testing): enter the date, the next interval and the certificate number, and the due date moves forward.
- Downtime of the month and the spares issued are shown in the tiles at the top.  

### Costing, Accounting & Reports  

### Manufacturing Dashboard

Manufacturing › Costing, Accounting & Reports › Dashboard & Reports › Manufacturing Dashboard 

Where production stands today. Every tile is a door: select it to see the orders, shortages or records behind the number. Below the tiles are three charts, the orders due in the next seven days, and the local content (ICV) of the manufactured output.How to use it
- Read the tiles. Select a tile to open the list that explains it.
- Check Orders by status, the Work-centre load for the next four weeks (above 100 % a work centre is overloaded) and Units received for the last six months.
- Orders due in the next 7 days lists what must leave the factory soon.
- In the Local content (ICV) block choose Month, Quarter or Year to see how much of the manufacturing cost is local.

_[Screenshot: The Manufacturing Dashboard]_

The Manufacturing Dashboard

Tiles of the dashboard
| Field | Type | What to enter / options | 
| Open orders  | Tile | Orders from planned to running. | 
| In production  | Tile | Orders in progress; the line under it counts the orders released or running. | 
| Late orders  | Tile | Orders past their due date. | 
| Awaiting approval  | Tile | Orders waiting for the approver of a release. | 
| Quality hold  | Tile | Orders blocked by a failed test. | 
| Material shortages  | Tile | Component lines that cannot be fully issued. | 
| Work in progress  | Tile | Cost of the orders in progress. | 
| Output this month  | Tile | Units received into finished goods this month. | 
| First-pass yield  | Tile | Share of first inspections that passed. | 
| Open NCRs  | Tile | Non-conformance reports awaiting a decision. | 
| Calibration overdue  | Tile | Instruments past their calibration date. | 
| Maintenance overdue  | Tile | Maintenance orders past their planned date. | 

The local content (ICV) block
| Field | Type | What to enter / options | 
| Local content of manufacturing cost  | Figure | Local cost ÷ total manufacturing cost for the period. | 
| Local content vs cost of sales  | Figure | Local cost ÷ cost of sales, excluding the absorption journals. | 
| Emirati share of labour cost  | Figure | Emirati labour hours and cost against all labour booked. | 
| Component table  | Table | Emirati labour (100 %), expatriate labour at the set percentage (60 % by default), machine and overhead absorbed, subcontract and materials (0 % treated as local by default) with the total manufacturing cost. | 

Buttons on this screen
- Month Quarter Year changes the period of the ICV block.
- Excel Print / PDF export and print the ICV block.

Good to know
- The ICV figure is indicative, taken from the labour, overhead and material cost booked to production orders. The certified ICV score of the company is calculated in the ICV module from the whole company. The percentages and the nationalities counted as Emirati are set in Settings.
- The same figures are available by month in the Local content (ICV) of manufactured output report.   

### Manufacturing Reports

Manufacturing › Costing, Accounting & Reports › Dashboard & Reports › Manufacturing Reports 

Twenty-three reports in nine groups. Select a report, choose the period where it applies, and print it (A4 or PDF) or export it to Excel. Every report reads the live records, so the figures agree with the screens and with the general ledger.How to use it
- Select a report in its group. It opens with the filters it needs (period, order, item…).
- Choose the period and read the figures; select a row where it is a link to open the record.
- Select Print / PDF or Excel.

_[Screenshot: The report list]_

The report list

_[Screenshot: A report: Order cost]_

A report: Order cost

The reports
| Field | Type | What to enter / options | 
| Production | 
| Production order register  | Report | All orders with quantity received, status, dates and links to project and sales order. | 
| Late orders  | Report | Open orders past their due date. | 
| Production output  | Report | Finished goods received from production in the period. | 
| Work-centre loading  | Report | Planned hours against capacity by work centre and week. | 
| Materials | 
| Material shortages  | Report | Components that cannot be fully issued to live orders, with what is on order. | 
| Material issues and returns  | Report | Every issue to and return from a production order, by component. | 
| Engineering | 
| BOM cost roll-up  | Report | The cost of one unit of every item with a released bill, at current stock cost and work-centre rates. | 
| Engineering change register  | Report | Requested, approved and implemented changes. | 
| Costing | 
| Work in progress  | Report | Cost build-up of every order started and not yet closed. | 
| Order cost: planned, standard, actual  | Report | Estimate, standard and actual cost per order; the comparison with the estimate is shown for completed and closed orders only. | 
| Cost variances at close  | Report | Variance posted when each order was closed, by type. | 
| Overhead absorption  | Report | Overhead absorbed against actual overhead by pool. | 
| Local content (ICV) of manufactured output  | Report | Local manufacturing cost by month. | 
| Labour | 
| Labour and time  | Report | Time booked to orders: operator, nationality, minutes and cost absorbed. | 
| Work-centre efficiency  | Report | Standard minutes for the quantity done against the minutes actually booked. | 
| Quality | 
| Inspection results and first-pass yield  | Report | Every inspection in the period with its result. | 
| Non-conformance register  | Report | NCRs raised in the period with decision, cost treatment and status. | 
| Scrap and rework cost  | Report | Scrapped units with the amount written off, and rework orders with their cost. | 
| Traceability | 
| Serial number register  | Report | Every panel serial number with order, status and customer. | 
| Lots and serials issued  | Report | Lot and serial numbers consumed, with the order and panels they went into. | 
| Planning | 
| MRP proposals log  | Report | Proposals of every MRP run with their outcome. | 
| Maintenance | 
| Maintenance and downtime  | Report | Maintenance orders in the period with downtime and spares cost. | 
| Calibration status  | Report | Every measuring instrument with its calibration date and status. | 

Buttons on this screen
- Excel exports the open report.
- Print / PDF prints it on A4, or saves it as a PDF.
- Close returns to the list.

Good to know
- Reports are read-only. To correct a figure, correct the record behind it.
- The cost reports show amounts in the company currency with two decimals.   

### Manufacturing Costing

Manufacturing › Costing, Accounting & Reports › Costing & Accounting › Manufacturing Costing 

Planned, standard and actual cost of every order, standard cost versions, variances at close and overhead absorption. The planned cost is the estimate made when the order was created; the standard cost comes from the active standard cost version; the actual cost is what has been issued, booked and absorbed. A completed order is closed here to settle the difference.How to use it
- On Orders compare planned, standard and actual cost; for completed and closed orders the difference from the plan and the cost per unit received are shown.
- On Standard costs select Roll up a standard cost, choose the item, and the module costs the released bill of material (at current stock cost) and routing (at current work-centre rates) into a new version. Open it to see the cost by component and by step.
- Select Activate as standard to make the version the standard (a “Standard cost” approval rule, when set, names the role who may do it). The previous version is superseded.
- When an order is Completed, open it and select Close order. The remaining work in progress is posted to the variance accounts and the order is closed. Reopen order reverses the close.
- Variances lists the material, labour, overhead and rework variances posted at close; Overhead absorption compares what was absorbed with the pool’s budget and the actual overhead.

_[Screenshot: Costing: orders]_

Costing: orders

_[Screenshot: Standard costs]_

Standard costs

_[Screenshot: A standard cost version]_

A standard cost version

Columns of the Orders tab: Order · Item · Status · Qty · Received · Planned cost · Standard cost · Actual to date · Actual vs planned · Cost / unit received

Columns of the Standard costs tab: No · Item · Version · Status · Material · Labour · Machine · Overhead · Subcontract · Total

Columns of the Variances tab: Order · Item · Closed · Received · Method · Material · Labour · Overhead · Rework · Total variance · Journal

Columns of the Overhead absorption tab: Pool · Budget (year) · Normal hours · Budget rate / h · Work-centre rate / h · Hours worked · Absorbed · Actual overhead · Under / (over) absorbed

Buttons on this screen
- Roll up a standard cost creates a new version for an item.
- Activate as standard makes a version the standard cost (needs the costing permission and, if a rule applies, approval).
- Delete removes a draft version.
- Close order Reopen order on a production order, from the Orders tab.
- From To period of the overhead absorption.
- Excel Print / PDF export and print.

Good to know
- Actual costing (the default): panels are received at the actual cost in work in progress, so the order closes with no variance. Standard costing: panels are received at the standard cost and the differences are posted at close as material, labour or overhead variance.
- Activating a standard cost also updates the Standard Cost of the item in Inventory.
- Overhead that was not absorbed is not spread back onto stock. It stays in the profit and loss account (or in cost of sales, as set in Settings) and is visible as Under / (over) absorbed.   

### Manufacturing Accounting

Manufacturing › Costing, Accounting & Reports › Costing & Accounting › Manufacturing Accounting 

The accounting entries made by the module, in one place. Nothing here is typed in: each manufacturing journal is created by an action (a material issue, a time entry, scrap, closing an order) and is posted to the general ledger as a real journal. To correct one, use the action that made it (void the time entry, return the material, reopen the order); this keeps the order records and the ledger in agreement.How to use it
- On Journals see every manufacturing journal with its order, amount and the general-ledger journal number; select one to see its lines.
- On Stock documents see the Inventory documents created by the module (material issues, returns and finished-goods receipts) with their journals.
- On Account mapping check that each manufacturing account is mapped to a ledger. Select Add or repair the manufacturing accounts if a ledger is missing.
- Before closing a period open Period-end checks and clear every Review line.

_[Screenshot: Manufacturing journals]_

Manufacturing journals

_[Screenshot: Account mapping]_

Account mapping

Accounting entries of the module
| Field | Type | What to enter / options | 
| Material issue  | Document | Dr Work in Progress · Cr Inventory (raw materials) at the FIFO cost. | 
| Material return  | Document | Dr Inventory · Cr Work in Progress at the cost it was issued at. | 
| Time entry (labour, machine, overhead)  | Journal | Dr Work in Progress · Cr Production Labour Applied and Manufacturing Overhead Applied; subcontract steps credit Subcontract Charges Applied. | 
| Finished goods receipt  | Document | Dr Finished Goods – HVAC Panels · Cr Work in Progress at the actual cost (or the standard cost). | 
| Abnormal scrap  | Journal | Dr Abnormal Scrap and Waste · Cr Work in Progress. Normal scrap stays in the cost of the order. | 
| Rework  | Journal | The cost of a rework order is transferred to the work in progress of the parent order; abnormal rework is expensed to Rework Cost. | 
| Closing an order  | Journal | The remaining work in progress is posted to the Material, Labour or Overhead Variance accounts. | 
| Maintenance spares  | Document | Dr Factory Maintenance Expense · Cr Inventory. | 
| Delivery and invoice  | Sales | Revenue and cost of sales are recognised only in the normal Sales process (delivery note and invoice), not in Manufacturing. | 

Period-end checks
| Field | Type | What to enter / options | 
| Accounts mapped  | Check | All manufacturing accounts are mapped to ledgers. | 
| Completed orders closed  | Check | No completed order is waiting to be closed. | 
| No negative work in progress  | Check | No order has a negative balance. | 
| Sub-ledger agrees with the ledger  | Check | Work in progress by order equals the Work in Progress account. | 
| Open non-conformances  | Check | Review when NCRs are still open. | 
| Orders waiting for approval  | Check | Review when releases are waiting. | 
| Instruments in calibration  | Check | Review when an instrument is overdue. | 
| Posting period open  | Check | Today falls in an open accounting period. | 

Columns of the Journals tab: No · Date · Type · Order · Amount · GL journal · Status

Columns of the Stock documents tab: Document · Date · Type · Order · Store · Value · GL journal · Status

Columns of Account mapping: Mapping key · Standard account · Mapped to · Status

Buttons on this screen
- Add or repair the manufacturing accounts creates or re-links the manufacturing ledgers in the Chart of Accounts.
- Open order on a journal: opens its production order.
- Excel Print / PDF export and print.

Good to know
- A journal into a closed accounting period is refused, as everywhere in the ERP.
- The manufacturing ledgers (Work in Progress, Finished Goods – HVAC Panels, the Applied accounts and the variance accounts) are created with the module; see Finance › Chart of Accounts.   

 

🏭

Module guide
