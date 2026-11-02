## Reports

A single place that links to the main reports of every module, grouped as Financial, HR & Payroll, Projects / Stock / Assets, Purchase & Control, and Legal & Generals. It also holds Custom Reports, where you build your own reports from any table of the system and keep them for later. 

Most of the Reports module has no screens of its own: each tile opens the report in its home module, so the same filters, print, PDF and Excel buttons apply. The exception is Custom Reports, the first group below: there you build, save and run reports of your own. Select any report in the map below to read how it works.

Most reports share the same controls: choose the filters (dates, company, department, project, employee, status), select Search / Apply where shown, then Print, PDF (print to PDF) or Excel / CSV. Selecting a row usually opens the document or card behind it. 

#### Screens in this module

Custom ReportsMy Reports (Reports)Create New Report (Reports)Data Dictionary (Reports)Running a report (Reports)

Financial ReportsFinancial Statements (Finance)Trial Balance (Finance)General Ledger (Finance)Bank Reconciliation (Finance)Bank Reconciliation Statement (Finance)Uncleared Items (Finance)Reconciliation Status (Finance)Budget vs Actual (Finance)VAT Return (Finance)Corporate Tax (Finance)FX Revaluation (Finance)Party SOA (Finance)Customer Comprehensive Report (Sales)AP / AR Aging (Finance)GRN Payables Report (Finance)Reports & Registers (Finance)Analysis Reports (Finance)

HR & Payroll ReportsPayroll Reports (HR & Payroll)Payroll Dashboard (HR & Payroll)Provision Schedules (HR & Payroll)Final Settlements (HR & Payroll)Loan Balances (HR & Payroll)Leave Balance (HR & Payroll)Employee Reports (HR & Payroll)Employee Comprehensive Report (HR & Payroll)Employee Control Statement (HR & Payroll)Letters Generated Register (HR & Payroll)Expiring Documents Report (HR & Payroll)Pending Approvals Report (HR & Payroll)Appraisal Register (HR & Payroll)Score Distribution (HR & Payroll)Goal Achievement (HR & Payroll)Calibration Report (HR & Payroll)Bonus Calculation (HR & Payroll)Requisition Register (HR & Payroll)Recruitment Pipeline (HR & Payroll)Time to Hire and Offers (HR & Payroll)Onboarding Status (HR & Payroll)New Hire Document Compliance (HR & Payroll)Document Renewals Register (HR & Payroll)Renewals and Clearance Activity Log (HR & Payroll)Issued Permits Register (HR & Payroll)Petty Cash Clearance Status (HR & Payroll)

Projects, Stock & AssetsProject Cost Control (Projects)Job Cost vs Budget (Projects)Stock Ledger & Valuation (Inventory)Asset Register & Depreciation (Fixed Assets)Asset Documents Status (Fixed Assets)Asset Register Report (Fixed Assets)Project Comprehensive Report (Projects)Asset Comprehensive Report (Fixed Assets)Item Comprehensive Report (Inventory)

Purchase & ControlBid Tabulation (Purchase)3-Way Match (Purchase)Budget Status (Purchase)Supplier Comprehensive Report (Purchase)Portal Audit Log (Purchase)Intercompany Recharge (Finance)Audit Trail (Users & Settings)

Legal & Generals ReportsCEO & BOD Dashboard (Legal & Generals)Certificate Register (Legal & Generals)Certificate Expiry Forecast (Legal & Generals)Certificate Activity Log (Legal & Generals) 

### Custom Reports  

### My Reports

Reports › Custom Reports › My Reports 

Custom Reports lets you build a report yourself from any table of the ERP, in any module, and keep it for next time. You choose the columns, bring in related tables (a sales invoice with its customer, an employee with the hours and the project), add filters, sort, group and total, and save it. What is saved is the definition of the report, not the figures, so when you open it next month it shows next month’s data.

My Reports is the home of the section: the reports you can open, the four tiles on top, and a set of ready-made templates to start from. The next screens are Create New Report, where you build one, and the Data Dictionary, which lists every table and field you can use. Running, printing and exporting are explained under Running a report.How to use it
- Open Reports › Custom Reports › My Reports. The tiles show how many reports you can open, how many are your own, how many are shared with everyone and how many data tables the dictionary offers. Select a tile to see the reports behind it.
- To make a report, select + Create New Report. To save time, select one of the templates at the bottom: it opens in the builder, you change what you like and save it under your own name.
- To use a saved report, select ▶ Run on its card (or the card itself). If the report asks for a date range or a company, a small window appears first. The result opens on screen, ready to print or export.
- Use the search box, the module list and the All reports / Created by me / Shared with everyone list to find a report when you have many.
- To change a report, select ✎ Edit. To keep the original and try a variation, select ⧉ Copy: the copy is private and yours.

_[Screenshot: My Reports]_

My Reports: the four tiles, the search bar, the saved reports with their buttons, and the templates below

What is saved with a report
| Field | Type | What to enter / options | 
| The saved definition | 
| Report no automatic | Text | Numbered automatically: CR-0001, CR-0002 … | 
| Report name required | Text | The name on the card and at the top of the printed report. | 
| Description  | Text | One line that explains what the report is for. It is shown on the card and under the title of the result. | 
| Module  | List | The module the report belongs to (Sales, Finance, HR & Payroll …). It is only a label used to filter the list; it does not limit the data. | 
| Who can open it  | List | Only me (default) or Everyone (shared).

Only me · Everyone (shared) | 
| Layout  | Saved | The data source, the linked tables, the columns, the filters, the sorting and the options. No data is saved: every run reads the records as they are today. | 
| Created by, created, last changed automatic | Text | Filled in by the system. | 
| Runs, last run automatic | Number / date | Counted by the system each time the report is run. | 

Templates

Ten templates are offered, each one a complete report that you can run at once or adapt: Sales invoices with customer details, Sales by customer (summary), Sales invoice lines (items, quantity, VAT), Purchase orders with supplier details, General ledger by account and month, Trial balance as of a date, Ledger entries by project, Timesheet hours by project and employee, Employee directory (no salary) and Payroll cost by project. A template is shown only when your role may open all the tables it uses.

Buttons on this screen
- + Create New Report opens the report builder on a blank report.
- Import adds a report from a file (.json) that someone saved with the File button. The imported report is private and yours.
- Data dictionary opens the Data Dictionary.
- ▶ Run runs the report on today’s data, asking first for any filter that is set to prompt.
- ✎ Edit opens the report in the builder. Only the person who made it (or the administrator) can change it; anyone else gets an editable copy.
- ⧉ Copy makes a private copy named “… (copy)”.
- Share Make private lets every user who can open the Reports module run and copy the report, or takes it back. Only its owner can do this.
- ⬇ File saves the definition as a small file (.json) that can be sent to a colleague or another company and imported there.
- 🗑 deletes the saved report after you confirm. Only the layout is deleted; no data is touched.

Good to know
- A report never goes out of date. It is a recipe, not a copy: each run reads the live records, so a report saved in January is correct in December.
- Private and shared. A private report is seen only by you and by the administrator. A shared report is seen and run by everyone who can open the Reports module, and they can copy it, but only you can change or delete it.
- Your role still applies. A saved report never gives more access than the person running it has. If a table is closed to your role the report will not run for you; if a column is restricted (for example Basic Salary) it is left out and the screen says so. See Running a report.
- Company. A report shows the records of the company selected at the top of the screen. In the group view it shows the companies you are allowed to see, and a Company filter can ask which one each time.
- Saved reports are part of the data, so they are included in Backup Management and come back with a restore.   

### Create New Report

Reports › Custom Reports › Create New Report 

The report builder works in three steps, shown as three tabs at the top: 1. Data source, 2. Columns and 3. Filters, sorting & options. You can go back to any step at any time, and Preview Data shows the first rows of the report whenever you want to check it.How to use it
- Step 1, Data source. Choose the main table: every row of the report starts from one record of it (an invoice, an employee, a journal line). The tables are grouped by module; use the search box to find a table or a field by name. The tile shows how many records and fields the table has.
- Step 2, Columns. The left side lists the fields of the main table. Add a field with the + button, by double-clicking it, or by dragging it into the layout on the right; fields that are already in the report are highlighted. Under Related data (Bring in more data from …) select Add next to a table you want to join: → Customers is the table that a field points to, ↳ Lines repeats the record for each line, and ⇐ Delivery Notes lists other records that point back to this one. The table appears as its own folder in the list of fields, already joined; the ✕ on its folder takes it out again.
- Data from any other table. The related tables above only cover fields that already point to each other. To use a table of any module in the same report, press + Add data from another table… at the top of the list of fields. Choose the table, then tell the report which two fields hold the same value, for example the Name of a project and the Project of a sales invoice, or the Month of two dates. The ERP suggests the likeliest pair and shows how many records match. Records of the report that have no match are kept (the new columns stay empty) unless you choose Leave them out. The new table appears as its own folder in the list of fields; add as many tables as you need, each matched to the report or to a table added before it.
- In the layout on the right, give each column its heading, choose how a date is shown (Date, Year, Quarter or Month), tick Total to add the column to the total row, and move the columns up or down. Tables that have lines (invoices, orders, vouchers) offer ↳ Lines: the report then has one row per line, with the net, VAT and line total worked out.
- To make a summary instead of a list, tick Group on the columns that form the groups (for example Customer, or Month), and choose for each other column what to calculate: Sum, Average, Smallest, Largest, Count or Distinct count.
- Step 3, Filters, sorting & options. Select + Add Filter, choose the field and the condition and type or pick the value. Tick Prompt at run time to leave the value open: the report then asks for it each time it is run (the usual choice for a date range or a company). Show rows that match all / any of these conditions decides whether every filter or just one must be true.
- Add one or more sorting rules (ascending or descending), and under Options set the printed title, the paper (Automatic, which uses landscape when the report is wide, A4 Portrait or A4 Landscape) and whether to show a total row.
- Select Preview Data to check, then Save Report or Save & Run. The report appears in My Reports.

_[Screenshot: Create New Report, step 1]_

Step 1: the tables of every module, with a search box

_[Screenshot: Create New Report, step 2]_

Step 2: the fields on the left and the layout on the right. Customer TRN and Phone come from the linked Customers table

_[Screenshot: Create New Report, step 3]_

Step 3: a date range that is asked at run time, two fixed filters, and the sorting

_[Screenshot: Add data from another table]_

Add data from another table: choose the table and the two fields that match (here the Name of a project and the Project of a sales invoice)

Fields at the top of the builder
| Field | Type | What to enter / options | 
| Report name required | Text | Required to save. Use a name that says what the report shows. | 
| Description  | Text | Optional, one line. | 
| Module  | List | The label used to file the report in My Reports. | 
| Who can open it  | List | Only me or Everyone (shared).

Only me · Everyone (shared) | 

Conditions you can use in a filter
| Field | Type | What to enter / options | 
| Date fields  | Choice | Between · Equals · Before · After · On or before · On or after · Today · This Week · This Month · Last Month · This Quarter · Last Quarter · Year To Date · This Year · Last Year · Last 30 Days · Last 90 Days · Next 30 Days · Is empty · Is not empty. The ready-made periods (This Month …) are worked out on the day the report is run. | 
| Number fields  | Choice | Between · Equals · Not equals · Greater than · Greater than or equal · Less than · Less than or equal · Is empty · Is not empty. | 
| Text fields  | Choice | Equals · Contains · Not equals · Does not contain · Starts with · Is one of (a, b, c) · Is empty · Is not empty. Capital letters do not matter. | 
| Choice fields (status, type …)  | Choice | Equals · Not equals · Is one of · Is empty · Is not empty. The value is picked from the list of the field. | 

Layout columns: # · FIELD · COLUMN HEADING · SHOW AS · TOTAL · GROUP · IF GROUPED

Example: sales per customer and month (Group by Customer and Month)
| Customer | Month | Invoices | Sales | VAT | 
| Gulf Builders LLC | 2026-09 | 1 | 176,000.00 | 8,800.00 | 
| Test HVAC Contractor LLC | 2026-08 | 1 | 102,000.00 | 5,100.00 | 
| Test HVAC Contractor LLC | 2026-09 | 1 | 18,300.00 | 915.00 | 

Buttons on this screen
- + Add data from another table… opens the box where you choose any table of any module and the two fields that match.
- + Add Filter adds a filter row.
- + Add sorting adds a sorting rule on one of the columns.
- Next: filters and sorting → goes to step 3.
- ← Columns goes back to step 2.
- Preview Data shows the first rows with today’s data. Filters that ask at run time use this month for dates and no value for others.
- Save Report saves the definition and stays in the builder.
- Save &amp; Run saves it and runs it at once.
- ← My Reports returns to the list. You are asked before changes are thrown away.

Good to know
- Joins are automatic. You never type a join. The ERP knows which fields point to which table (Customer, Supplier, Employee, Project, Cost Centre, Department, Activity, Account, Store, Item, Vessel, Voyage, Currency, Company, and the document numbers such as LPO No or SO No) and links them for you. You can also go the other way: from a customer to its invoices, or from a project to its timesheets, with a ⇐ related records choice.
- Totals stay correct when tables are combined. In a summary (with Group columns) every record of every table is counted once per group, even when another table repeats it. A summary by project can therefore show the sales of Sales Invoices next to the cost of Payroll Runs without one figure multiplying the other. In a plain list, two tables that both repeat the rows are shown as every combination, and the screen warns you; make it a summary or add a filter.
- Project name, employee name, hours and salary in one report. Start from Timesheet, link Employees and Projects, and add the payroll runs as related records. This is the “Hours by project and employee” template.
- Group By turns a long list into a short summary. Use it when a report would otherwise have thousands of rows.
- Up to 10,000 rows are listed. If a report has more, the screen warns you; add filters or group the report (see Running a report). A report whose links would multiply into more than 300,000 combined rows is stopped before it runs, with a message to add a filter or remove a link.
- 🔒 Restricted fields. Fields that your role may not see, such as Basic Salary and the bank details of employees, are not offered in the builder and cannot be used as a filter. A report that was built by someone with more rights runs for you without them.
- Do not worry about breaking anything: a report only reads data. No report can change or delete a record.   

### Data Dictionary

Reports › Custom Reports › Data Dictionary 

The Data Dictionary is the map of the ERP’s data, written for report builders: every table of every module, with its fields, what kind each field is, and which other table it links to. It is built from the live system each time, so a table or field that is added later appears here by itself.How to use it
- Open Reports › Custom Reports › Data Dictionary. The first screen shows one tile per module (Master Data, Projects, Purchase, Sales, Inventory, Manufacturing, Fixed Assets, Marine Fleet, HR & Payroll, Time Management, Finance, Users & Settings), with the number of tables and fields.
- Select a module to see its tables, and a table to see its fields. The line under the title tells the number of records and fields, and whether the table has lines (one row per line).
- The Linked to column shows the table a field points to; select its name to go there. At the bottom, Other tables that point to … lists the tables that refer to this one (the customer is used by invoices, receipts, projects …).
- To find a field anywhere, type its name in the search box: every table that has a matching field is listed, with the matching field names.
- Select Create a report from … to start a report on that table.

_[Screenshot: Data Dictionary]_

The Sales Invoices table: each field with its kind and the table it is linked to

Table columns: FIELD · KIND · LINKED TO

Text · Number · Date · Choice · Calculated · Restricted for your role

Buttons on this screen
- All modules goes back to the module tiles.
- My Reports opens My Reports.
- + Create New Report opens the builder.
- Create a report from … opens the builder with this table as the data source.

Good to know
- What you see depends on your role. A module that your role cannot open is not listed, and fields such as Basic Salary or bank account numbers show 🔒 Restricted for your role or are hidden. Tables that hold passwords, roles and permissions, backups, system settings and the report definitions themselves are never offered.
- Kinds of field. Calculated fields do not exist in the table but are worked out for the report, for example the net, VAT and total of an invoice line.
- A table with no records is still listed, so you can build the report before the first record is entered.   

### Running a report

Reports › Custom Reports › Report Result 

A saved report runs on today’s data. If it has a filter set to Prompt at run time, a small window asks for the values first; after that the result opens on screen with its totals and can be printed, saved as PDF, or exported to Excel.How to use it
- In My Reports select ▶ Run. A report with no prompt filters opens at once.
- In the window, choose the values: for a date range the two dates (this month is suggested), for other fields the value to look for. Select Run report. The window offers the values you used last time while the ERP stays open.
- Read the result. The chips above the table show the number of rows, who ran the report and when, and the filters that were used. The total row at the bottom adds up the columns that are marked Total.
- Select Print / PDF for the A4 sheet, Excel (.xlsx) or CSV to save the data, Change parameters to ask the questions again, Refresh to read the data again, or Edit report to change the layout.

_[Screenshot: Run-time questions]_

The window that asks for the date range when the report is run

_[Screenshot: Report result]_

The result: row count, who ran it, the filter used, and the total row

_[Screenshot: Print preview]_

Print / PDF: the company letterhead, the filters, the table with its totals, and the prepared / verified / approved lines

Buttons on this screen
- ← My Reports returns to the list.
- Edit report opens the builder (for your own reports).
- Change parameters asks for the dates or values again.
- Refresh runs the report again with the same values.
- Excel (.xlsx) saves a real Excel file: the title, the filters used and the run date at the top, a frozen heading row with filter buttons, dates as dates, amounts as numbers with two decimals, and the total row.
- CSV saves a plain comma-separated file that opens in Excel or can be imported into other tools.
- Print / PDF opens the print preview on the company letterhead: choose A4 Portrait or Landscape and the signature lines, then Print / Save as PDF. Every row is printed, not only the first screen.
- Show more on a long report, lists the next rows on screen.

Good to know
- Report exceeds 10,000 rows. To protect the system a report lists at most 10,000 rows. If more match, a yellow warning says Report exceeds 10,000 rows. Please add more filters to narrow your data or use a Summary/Group By view, and tells you how many rows matched. The total row still covers every matching row. Narrow the dates, or tick Group in the builder.
- On screen the first 1,000 rows are shown and Show more adds more; print, PDF, Excel and CSV always include all the listed rows.
- Security. The report reads only what you may read. A column that is restricted for your role (for example Basic Salary) is left out and a yellow note says so; a report that filters on a restricted field, or uses a table that your role cannot open, is refused with a message. The administrator sees everything.
- Company. The rows are those of the company selected at the top. A user who may see only some companies never receives the others, even in the group view.
- A report that uses a field or table that was removed later still runs: the missing column is left out and a note tells you so. 

Email
- Every report and document window has an ✉ Email button next to Print. The report goes as a PDF, and the data of statements and lists can go as an Excel (CSV) file as well. In the window choose the recipient: the address comes from the master record when the report is about one person or party. Or type an address, or pick a name from the employee, customer and supplier masters in the box Pick from the masters. If the master has no email address you can save the one you typed.   

 

⚙️

Module guide
