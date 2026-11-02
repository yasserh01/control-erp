## Time Management

Shift definitions and assignments, punches from the attendance devices or Excel, exception cleansing, Reconcile & Approve, timesheets for payroll and time reports. A module of its own, so that time keepers work without any access to HR & Payroll. 

Payroll category (Employee)→Shift definitions & assignments→Punches (Excel / API)→Exception cleansing→Reconcile & Approve→Timesheets→Payroll Run (by category)→Payment 

Time Management is a separate module, next to HR & Payroll under the same parent group. It exists so that the time keepers can be given the module on its own: a role with Time Management and without HR & Payroll opens only the screens of this module, and never sees the employees’ salaries, payroll or HR records.

The idea. The attendance devices give raw punches. The module loads them (Excel file or device API), checks them against the Employee Master, the shifts, the leave and the holidays, and lists everything that is wrong in an Exception Dashboard. When the list is empty the month is reconciled and locked, the timesheets are generated and approved, and the Payroll Run uses only approved timesheets, category by category.

What moved. Shift Assignments and the holiday list (now Public Holidays) moved out of HR & Payroll into this module. HR keeps the Monthly Parameters, the Leave Register, the Payroll Run and the Payment. Every employee now has a Payroll Category.

Control. Nothing is overwritten: the punches stay as loaded and every fix is a recorded, reversible adjustment until the period is locked. A locked month cannot be changed without Reopen. A timesheet is approved only when its hours add up to the budget hours, its jobs are valid and its overtime is allowed. A payroll row whose payable hours differ from the budget hours is highlighted and needs a written reason before the payroll can be approved. 

Month-end checklist
| # | Screen | Action | Result | 
| 1 | Employee Master › Payroll category | Every active employee gets a payroll category (required). Categories are created in Payroll Categories. | Employees can be reconciled, timesheeted and paid by category | 
| 2 | HR & Payroll › Monthly Parameters | Approve the parameters of the month (rest days, holidays, hours per day). | Budget hours and holidays of the month | 
| 3 | Shift Assignments | Make sure every employee has a shift for the whole month (bulk assign). | No Missing Shift exceptions | 
| 4 | Data Ingestion (API / Excel) | Load the month’s punches from the Excel file or the device API. An invalid file is rejected with an error log. | Raw punches, import IMP-0001 | 
| 5 | Exception Dashboard (Cleansing) | Resolve every exception (missing punch, shift, job code, budget mismatch, overtime alert), then Reconcile & Approve the category. | The month is locked for the category | 
| 6 | Timesheet Generation & Approval | Generate the timesheets, check the Job ID / Phase / Activity, then approve (in bulk or one by one). | Approved timesheets, locked; payroll timesheet in HR | 
| 7 | HR & Payroll › Payroll Run | Choose the category and the month, 1. Process, give a reason for every yellow row, add bonuses or deductions, 2. Approve, 3. Create JV and post. | Payroll journal; timesheets become Processed | 
| 8 | HR & Payroll › Payroll Payment | Pay by category, department or employee, or Pay all; generate the WPS file. | Salaries paid | 
| 9 | Reports | Late Comers, Early Leavers, Absenteeism and Overtime Summary for any period, and the printable Employee Time Sheet of each employee for the site approval. | Records for management | 

 

Time Management documents at a glance
| Document | Screen | Use it for | What happens | 
| Punch import (IMP-0001) | Data Ingestion (API / Excel) | Raw IN and OUT punches from an Excel file or the device server | Nothing yet. The punches are stored as they arrive; the whole import can be undone until its month is reconciled. | 
| Resolution of an exception | Exception Dashboard (Cleansing) | A fix: a missing time, a shift, a job code, what an absence was, what to do with overtime | A recorded adjustment (who, when, what) in the Resolved log; it can be undone until the period is locked. | 
| Period lock (Reconcile & Approve) | Exception Dashboard (Cleansing) | Freezes one month for one category or for all | Punches, imports, shifts, holidays and leave of that month can no longer change. | 
| Timesheet (TSH-000001) | Timesheet Generation & Approval | One per employee and month, with a line per Job ID, Phase and Activity | On approval it becomes the payroll timesheet of HR & Payroll; Processed when the payroll is posted. | 
| Payroll run line | Payroll Run (HR) | The salary of the employee, from the approved timesheet | Posting creates the payroll journal (cost by job, project and activity) and sets the timesheet to Processed. | 

 

#### The design in one table 

From the blueprint to the ERP
| Blueprint item | In the data | In the ERP | 
| 1. Payroll Categories master | payroll_categories; employees.payroll_category_id | Payroll Categories (HR & Payroll) and the required Payroll category field of the Employee Master | 
| 2. Shift Definitions and Public Holidays | tm_shifts, hcal | Masters › Shift Definitions, Public Holidays | 
| 3. Shift Assignment moved out of HR | shift | Operations › Shift Assignments (with bulk assign); the old HR address still opens it | 
| 4. Ingestion by API and Excel | attendance_raw (one record per employee and month, punches stored compactly), tm_batches | Data Ingestion and Raw Attendance | 
| 5. Exception dashboard | time_exceptions (the log of what was resolved); open exceptions are calculated | Exception Dashboard (Cleansing) | 
| 6. Reconcile & Approve | tm_lock | Exception Dashboard | 
| 7. Timesheet engine | timesheets (lines with Job ID, Phase, Activity; status Draft → Processed) | Timesheet Generation & Approval | 
| 8. Payroll integration | Payroll lines carry the category and the timesheet | Payroll Run and Payroll Payment of HR & Payroll, by category | 
| 9. Time reports | Calculated from the days | Late Comers, Early Leavers, Absenteeism, Overtime Summary | 

 

#### Who can do what

Access to the module is given in Users & Settings › Role Permissions; inside it, the permissions of each role are set in Settings & Roles. Select Create the standard time management roles there to add these roles, and adjust them to your organisation: 

The ready-made roles
| Role | May do in Time Management | 
| Time Keeper | Assigns shifts, imports punches, resolves exceptions, generates and edits timesheets. Opens only Time Management. | 
| Time Supervisor | Also maintains the shifts and holidays and approves timesheets. | 
| Time Manager | Also reconciles and reopens periods and sees salary-based figures (projected overtime cost). | 
| Payroll Viewer | Sees the salary-based figures only. | 

 

#### Getting started 
- Payroll categories. In Payroll Categories create the groups you pay and control together (Direct Labor, Indirect Labor, Staff …), each with its cost centre, salary account and time basis.
- Employees. Open each employee and choose the required Payroll category; check OT Eligible and the monthly overtime limit.
- Shifts. Create the shifts in Shift Definitions, add the holidays of the year in Public Holidays, and assign the shifts to the employees in Shift Assignments (use bulk assign).
- People. In Settings & Roles choose Create the standard time management roles, then give each time keeper a role that has Time Management only (Users & Settings › Role Permissions). If you use attendance devices, enter their API connection there too.
- Try it. In a test company, Load demonstration data shows the whole flow with every kind of exception.
- Every month. Follow the checklist above: punches → exceptions → Reconcile & Approve → timesheets → Payroll Run → Payment. 

Limits you should knowThe data is stored in the browser like the rest of the ERP, so use Backup Management regularly and the Clean-up of old punches in Settings & Roles. The ERP does not speak to a device directly: it calls the API of the device server (which must allow the call, or you paste the JSON it returns) or reads the Excel / CSV the device software exports. A month can be reconciled only after its last day. A reconciled month is changed only by reopening it. An approved timesheet cannot be edited: return it to draft first, which is possible until the payroll of the employee is run. 

#### Screens in this module

Masters

Shifts & holidaysShift DefinitionsPublic HolidaysRamadan Periods

SettingsSettings & Roles

In HR & PayrollPayroll Categories

Operations

OverviewTime Dashboard

ShiftsShift Assignments

PunchesData Ingestion (API / Excel)Raw Attendance

Cleansing & timesheetsException Dashboard (Cleansing)Timesheet Generation & Approval

Reports

Time reportsLate ComersEarly LeaversAbsenteeismOvertime SummaryEmployee Time Sheet 

### Masters  

### Shift Definitions

Time Management › Masters › Shift Definitions 

The list of shifts the company works: Shift A 06:00–15:00, Night 20:00–05:00 and so on. A shift gives the start and end times, the break and the grace minutes. The time engine compares every punch with the shift of the day to find late arrivals, early departures, overtime and undertime. A shift whose end time is earlier than its start time is a night shift that ends the next morning.How to use it
- Select + New and enter a Name, the Start Time and the End Time as HH:MM (for example 08:00 and 17:00).
- Enter the Break Hrs (unpaid break, 0 to 6). Standard Hrs and Crosses Midnight are worked out for you: end − start − break.
- Leave the grace minutes empty to use the standard grace of Settings & Roles › Rules, or type a value for this shift only.
- Save. The shift is now offered in Shift Assignments, in the bulk assignment and in the Exception Dashboard.

_[Screenshot: Shift Definitions]_

Shift Definitions

Fields on the “New Shift Definition” form
| Field | Type | What to enter / options | 
| Name required | Text | The shift name, shown in every list (for example Shift A). Each name exists once. | 
| Start Time required | Text | Hours and minutes, for example 08:00. A time such as 8:00 am or 0800 is understood too and saved as HH:MM. | 
| End Time required | Text | Hours and minutes. If it is earlier than the start time, the shift ends the next day (night shift). | 
| Break Hrs  | Number | Unpaid break in hours, 0 to 6. It is taken off the working time of a full day (see the rule on the screen Settings & Roles). | 
| Standard Hrs (auto)  | Number | The paid hours of the shift: end − start − break. Filled in by the system. | 
| Crosses Midnight (auto)  | Text | Yes for a night shift. Filled in by the system. | 
| Late Grace (min)  | Number | Minutes after the start that are still on time (0 to 180). Empty = the standard grace in Settings. | 
| Early Grace (min)  | Number | Minutes before the end that may be left early without being counted (0 to 180). Empty = the standard grace. | 
| Status  | List | Active or Inactive.

Active · Inactive | 
| Notes  | Text | Free text. | 

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
- A shift that is used by shift assignments cannot be deleted: set it to Inactive. A shift cannot become inactive while a current assignment still uses it.
- When a shift has been used in a period that is already reconciled, its times and break cannot change. Create a new shift and assign it from the new date.
- This screen needs the permission Maintain shift definitions and public holidays (see Settings & Roles). A time keeper normally cannot change shifts, only assign them.   

### Public Holidays

Time Management › Masters › Public Holidays 

The calendar of public and company holidays. This list used to be the Holiday Calendar of HR & Payroll; it now belongs to Time Management and the old address still opens it. Monthly Parameters (HR & Payroll) load the holidays of a month from here, and the time engine takes the holidays of a month from the approved Monthly Parameters (from this list only while a month has none yet). A worked holiday is counted as Holiday OT; a holiday that was not worked is paid as part of the budget hours.How to use it
- Select + New, enter the Date, the Name and the Type, and Save.
- Add the holidays of the year when they are announced. In HR & Payroll › Monthly Parameters, load them into the month with Load from Holiday Calendar before the parameters are approved.

_[Screenshot: Public Holidays]_

Public Holidays

Fields on the “New Public Holiday” form
| Field | Type | What to enter / options | 
| Date required | Date | The day of the holiday. A date can be entered once. | 
| Name required | Text | The name that appears in the monthly parameters and the reports. | 
| Type  | List | What kind of holiday it is.

Public holiday · Company holiday · Other | 

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
- A holiday of a month that is already reconciled cannot be added, changed or deleted until the month is reopened.
- Rest days (for example Friday) are not holidays: they come from the Monthly Parameters, or from the Weekly Rest Day of an employee.   

### Ramadan Periods

Time Management › Masters › Ramadan Periods 

The dates of Ramadan of each year. In these dates a Shift Assignment that has Ramadan Hrs uses them as the standard hours of the day (for example 6 instead of 8): the budget hours, the normal hours, the undertime and the overtime all follow, and the reduced break of Ramadan is not deducted.How to use it
- Select + New and enter the From Date and To Date of Ramadan (29 or 30 days). The year is filled from the first date.
- Save. Enter the Ramadan Hrs on the Shift Assignments of the employees who work reduced hours.

Fields on the “New Ramadan Period” form
| Field | Type | What to enter / options | 
| Year  | Number | The year (filled in from the first date). | 
| From Date required  | Date | First day of Ramadan. | 
| To Date required  | Date | Last day of Ramadan. | 
| Notes  | Text | Free text. | 

Buttons on this screen
- + New opens the entry form.
- Edit Delete at the end of each row.

Good to know
- Periods of Ramadan cannot overlap.
- A period that touches a reconciled month cannot be changed or deleted until that month is reopened.   

### Settings & Roles

Time Management › Masters › Settings & Roles 

The rules of the module, the connection to the attendance devices, who may do what, the demonstration data and the clean-up of old punches. It has six tabs. Changing it needs the permission Settings, API connection, roles, demonstration data and clean-up (an administrator has it).Rules and API connection

Select Save after changing values; Back to standard values returns the page to the values below. The values apply from now on; periods that are already reconciled keep their timesheets.

_[Screenshot: Settings &amp; Roles › Rules]_

Settings & Roles › Rules

_[Screenshot: Settings &amp; Roles › API connection]_

Settings & Roles › API connection

The rules (Settings & Roles › Rules)
| Setting | Standard | What it does | 
| Late arrival grace (min) | 10 | Minutes after the shift start that are still on time. Used when the shift has no grace of its own. | 
| Early departure grace (min) | 10 | Minutes before the shift end that may be left early without being counted. | 
| Overtime counts when the hours above the “OT starts after” limit are at least (minutes) | 30 | Less than this is not overtime. The limit is set on each Shift Assignment (Break Hrs and OT Starts After). | 
| Overtime-1 hours on a normal working day | 2 | The first overtime hours of a normal working day are OT-1; the hours after them are OT-2. Holiday and rest-day work is Holiday OT. | 
| Time IN / OUT outside the shift time by more than (minutes) needs approval | 15 | Punches earlier than the IN time or later than the OUT time by more than this raise an Outside Shift Time exception, to approve or reject. | 
| Overtime is counted in steps of (min) | 15 | Overtime is rounded down to this step: 50 minutes counts as 45. | 
| The shift break is deducted when the day is at least (hours) | 5 | Shorter days have no break taken off. The break taken off is the break of the shift, or the gaps between the punches of the day when they are longer. | 
| Time before the shift start (within the tolerance) | Ignore | Ignore: arriving early is not paid. Count: the time counts as worked. | 
| A shift longer than this many hours is read as a missing punch (hours) | 16 | Two punches further apart than this are not one shift. | 
| Two identical punches within this many minutes are one (minutes) | 3 | Double taps on the device. | 
| Accept the valid rows of a file that has errors | No | No: one bad row rejects the whole file. Yes: the bad rows are skipped and the good ones imported. | 
| Phases offered for job coding | Design|Fabrication|Installation|Testing & Commissioning|Handover | The list offered in the Phase box (separate the values with |). | 
| Payroll budget check (hours) | 1 | The Payroll Run marks a row yellow when the payable hours differ from the budget hours by more than this. 0 = any difference. | 
| Keep raw punches for this many months | 12 | Clean-up removes the punches of reconciled periods older than this. | 

The API connection
| Setting | What to enter | 
| Address of the device server (URL) | The address that returns the punches. It must start with http:// or https://. | 
| Method | GET (the dates are added to the address) or POST (the dates are sent as JSON). | 
| Authorization header | For example Bearer abc123. It is kept in this browser with the other settings. | 
| Path to the list | Where the list of punches is in the answer. Empty = the answer is the list (or the first list in it). | 
| Name of the “from date” and “to date” parameters | Standard: from and to. | 
| Field names | The field of the employee ID (emp_id), the date (date), the time (time) or one field that holds both, and the punch type (type). | 
| Values that mean IN and OUT | Standard: IN and OUT. Other usual spellings (Check-in, C/In, 0, 1 …) are understood too. | 

Roles and permissions

Access to the module is given in Users & Settings › Role Permissions: a role that is given Time Management and not HR & Payroll opens only this module, so a time keeper never sees employees’ salaries, payroll or HR records. What the role may do inside the module is set on the tab Roles and permissions with the nine permissions below. The administrator has all of them; while User security is off, everybody has all of them.

Select Create the standard time management roles to add the roles Time Keeper, Time Supervisor and Time Manager (access to Time Management only, with the permissions below). HR and Payroll Officer roles, when they exist, also get access to Time Management. To change an existing role, choose it and a preset and select Apply, or tick the boxes of the grid.

_[Screenshot: The permission grid]_

The permission grid

The nine permissions
| Permission | Opens | 
| Maintain shift definitions and public holidays | Shift Definitions and Public Holidays (the masters) | 
| Assign shifts to employees | Shift Assignments and the bulk assignment | 
| Import punches (Excel / API), add punches and undo imports | Data Ingestion | 
| Resolve, edit and delete exceptions | Exception Dashboard and deleting a raw punch | 
| Generate and edit draft timesheets and submit them for approval | Timesheets | 
| Approve timesheets and return them to draft | Timesheets | 
| Reconcile & Approve (lock) a period and reopen it | Exception Dashboard | 
| See salary-based figures (projected overtime cost) | Overtime Summary | 
| Settings, API connection, roles, demonstration data and clean-up | This screen | 

The standard roles
| Role | May do | 
| Time Keeper | Assign shifts, import punches, resolve exceptions, generate and edit timesheets | 
| Time Supervisor | Everything of the Time Keeper, plus shifts and holidays, and approving timesheets | 
| Time Manager | Everything of the Supervisor, plus Reconcile & Approve, and salary-based figures | 
| Payroll Viewer | Salary-based figures only | 

Demonstration data

Select Load demonstration data to try the whole flow in a test company. It adds, for the previous month, three payroll categories (Direct Labor, Indirect Labor, Staff), three shifts, fourteen employees (TM001 to TM014) with punches that contain every kind of exception, a leave, a public holiday, demo projects and jobs, and a demo bank. It only adds data: it never changes or deletes yours, and it is loaded once. Use it in a test company, not in the live one.

_[Screenshot: Demonstration data]_

Demonstration dataClean-up

Raw punches take space in the browser. Once a period is reconciled and its timesheets are Approved or Processed, the punches are no longer needed for pay: every approved timesheet keeps its lines and its totals. Remove old punches deletes the punches of reconciled periods older than the retention (12 months by default; at least 3). The day-by-day view of those months is then no longer available; the timesheet itself is unchanged. It cannot be undone, so take a backup first (Backup Management).How it works

The last tab summarises the flow and the tables of the module on one page.

Buttons on this screen
- Save saves the rules or the API connection.
- Back to standard values returns the page to the standard values.
- Create the standard time management roles adds the three standard roles.
- Apply gives a role the permissions of a preset.
- Load demonstration data adds the demonstration.
- Remove old punches cleans up old punches.

Good to know
- Time keeper isolation: the screens of this module work without any HR permission. Access to HR & Payroll is a separate module permission, so a time keeper role without it cannot open the HR screens, the employees’ salaries or the payroll.
- In a group with several companies, select the company in the top bar before importing, resolving or reconciling: time records belong to one company.  

### Operations  

### Time Dashboard

Time Management › Operations › Time Dashboard 

One page that shows where the attendance of a month stands: how many employees, how many punches, what is still wrong, what is late or absent, how much overtime, and how many timesheets are drafts, waiting for approval, approved or already in payroll. It changes nothing; it is the screen a time keeper opens first to see the next step.

The month is the previous month when it has punches (otherwise the latest month that has). Choose another month, a payroll category or a department at the top. The status bar says whether the month is open or reconciled and, for a user who may reopen a period, offers Reopen.How to use it
- Choose the Month and, if you look after one group, the Payroll category and the Department.
- Read the yellow Next step banner. It follows the flow: load the punches, resolve the exceptions, Reconcile & Approve, generate the timesheets, approve them, run the payroll. Its button opens the right screen.
- Select any tile to see the records behind it: the employees, the exceptions of one kind, the late arrivals, the absent days or the timesheets of one status. Select Open exceptions or Punches loaded to go to that screen.
- The table By payroll category at the bottom shows, for each category, the employees, the open exceptions, whether the period is reconciled and the timesheets by status.

_[Screenshot: The Time Dashboard of a month that still has open exceptions]_

The Time Dashboard of a month that still has open exceptions

By payroll category: Category · Employees · Open exceptions · Period · Draft · Pending · Approved · Processed

Good to know
- No punches at all counts the employees on a punch basis who have no punch in the month. Employees of a category whose time basis is Standard hours (no punches) are never counted there.
- The figures are worked out from the data every time the screen opens, so they cannot be out of date. Open exceptions are never stored: fixing the data makes them disappear.
- A category without employees in the month is not listed. Employees without a payroll category appear as (No category): give them a category in the Employee Master.   

### Shift Assignments

Time Management › Operations › Shift Assignments 

Tells the system which shift each employee works, from which date to which date. It moved from HR & Payroll to Time Management, so that the time keeper can assign shifts without any access to HR. An assignment can also carry the Payroll Project (the Job ID) and the activity that the hours of this period are charged to; the Job ID of a timesheet comes from here unless an exception was resolved with another one.

An assignment is for dates (from date, to date), so the same employee can work on different jobs on different dates. The Start Time and End Time are a reference: the employee can punch before the IN time or after the OUT time, but that time waits for your approval or rejection in the Exception Dashboard (Outside Shift Time). The assignment also carries the break, the hour after which overtime starts, and the options for a half day, a night shift and Ramadan hours. The system works out the hours after the break; hours below the standard are undertime, and hours above it are overtime (see the rules below).How to use it
- For one employee: select + New, choose the Employee, the Shift and the From Date and To Date (leave To Date empty for an open assignment). Add the Payroll Project and Activity if hours should be charged to a job. A line under the dates shows the times, the break, the standard hours after the break and when overtime starts.
- Under Additional details change the Break Hrs, OT Starts After (hrs), Half Day, Night Shift or Ramadan Hrs for this assignment when it differs from the shift. Empty boxes use the values of the shift.
- For many employees: select Bulk assign shift. Choose the shift and the dates, filter the list by Category, Department or name, tick the employees (or Select all shown) and select Assign.
- A new assignment on dates that already have an assignment replaces it for those dates: the earlier assignment is shortened, split in two or replaced, and you are told what was done. In the bulk screen untick Replace the existing assignment on the same dates to skip the employees who already have one. Employees that cannot be assigned are listed with the reason.
- To load many assignments from Excel, select Template, fill it and select Import.

_[Screenshot: Shift Assignments, one row per employee and period]_

Shift Assignments, one row per employee and period

_[Screenshot: Bulk assign shift]_

Bulk assign shift

_[Screenshot: New Shift Assignment]_

The form of an assignment: dates, job, break, overtime start, half day, night shift and Ramadan hours

Fields on the “New Shift Assignment” form
| Field | Type | What to enter / options | 
| Employee required | List | The employee, from the Employee Master.

Pick from the master list | 
| Shift  | List | The shift, from Shift Definitions. Its times, standard hours and the day or night type are copied to the assignment.

Pick from the master list | 
| From Date required | Date | First day of the assignment. | 
| To Date  | Date | Last day. Empty = open. | 
| Payroll Project  | List | The Job ID the hours of this period are charged to. Empty = the default payroll project of the employee.

Pick from the master list | 
| Project  | List | The project of the Payroll Project (filled in from it).

Pick from the master list | 
| Activity  | List | The project activity. Empty = the default activity of the Payroll Project.

Pick from the master list | 
| Shift Type  | List | Day or Night, set by the shift.

Day · Night · Rotational | 
| Start Time  | Text | Reference time, set by the shift (a manual time can be typed when no shift is chosen). Punches before it need approval. | 
| End Time  | Text | Reference time, set by the shift. Punches after it need approval. | 
| Standard Hrs  | Number | Automatic: end − start − break. The hours a normal day must have. | 
| Break Hrs  | Number | Unpaid break in hours (0 to 6). Empty = the break of the shift. | 
| OT Starts After (hrs)  | Number | The hours worked (after the break) from which overtime is counted, for example 9. Empty = the standard hours, so overtime starts as soon as the standard hours are done. It cannot be less than the standard hours. | 
| Half Day  | List | Yes: on this assignment the hours below the standard are not undertime.

No · Yes | 
| Night Shift  | List | Yes marks a night shift (a shift that ends after midnight is a night shift automatically).

No · Yes | 
| Ramadan Hrs  | Number | The standard hours a day during the Ramadan periods (see Ramadan Periods), for example 6. Empty = no change in Ramadan. | 
| Working Days Pattern  | Text | Information only. | 
| Rest Day  | List | Information only: rest days for the time calculation come from the Monthly Parameters, or from the Weekly Rest Day of the employee.

Sunday · Monday · Tuesday · Wednesday · Thursday · Friday · Saturday | 
| Status  | List | Active or Inactive.

Active · Inactive | 
| Notes  | Text | Free text. | 

Buttons on this screen
- + New opens the entry form.
- Bulk assign shift assigns one shift to many employees.
- Template downloads a blank Excel sheet.
- Import loads assignments from a filled sheet.
- Excel / CSV exports the list.
- Print prints the list.
- Refresh reloads the list.
- Edit Delete at the end of each row.

Good to know
- How the hours are counted. Net hours = time between IN and OUT − break. Up to the standard hours is Normal; less is Undertime (unpaid), except on a Half Day assignment. Hours above OT Starts After are overtime: the first 2 hours of a normal working day are OT-1 and each hour after them is OT-2 (the 2 hours can be changed in Settings & Roles). Work on a public holiday or a weekly rest day is all Holiday OT.
- An assignment never overlaps another one of the same employee: the newer one overwrites the older one on the dates they share.
- An assignment that covers a reconciled period cannot be changed or deleted until the period is reopened.
- The same assignment is created when you resolve a Missing Shift exception in the Exception Dashboard.
- A shift assignment is not needed for employees of a category whose time basis is Standard hours (no punches).   

### Data Ingestion (API / Excel)

Time Management › Operations › Data Ingestion (API / Excel) 

Where the raw IN and OUT punches enter the ERP: from an Excel or CSV file exported by the attendance devices, from the device server (API), or typed by hand for one employee. The punches are stored exactly as they arrive. Nothing is calculated here; late arrivals, overtime and exceptions are worked out afterwards, from the raw punches, in the Exception Dashboard.

The screen has four tabs: Excel upload, API sync, Add a punch and Imports.Excel uploadHow to use it
- Select Template to see the layout, or use the file your device software exports. The file needs four columns: Emp ID, Date, Time and Punch Type (IN or OUT). A single column that holds the date and the time together is accepted too.
- Drop the file on the grey box, or select it. An .xlsx file (the sheet with the most rows is read; choose another sheet in the list if needed) or a .csv file can be used. The headings are recognised in many spellings (Employee ID, Badge No, Punch Time, In/Out, Check Type …). If they are not, open Columns of the file and choose the columns yourself.
- The ERP checks every row before it saves anything: the Emp ID must be in the Employee Master (leading zeros that Excel removed are tolerated), the date and time must be valid and not in the future, the type must be IN or OUT, the employee must be employed on that date, and the period must not be reconciled.
- The four tiles show the rows in the file, the new punches, the punches that are already in the system (duplicates are skipped) and the rows with problems. If any row has a problem the file is rejected: the list shows the line, the Emp ID, the date, the time and the reason, and Open the full error log downloads it. Correct the file and load it again.
- When the file is clean, select Import n punch(es). The import receives a number (IMP-0001) so that it can be found and undone.

_[Screenshot: A file that is rejected: the lines with problems and the reason of each]_

A file that is rejected: the lines with problems and the reason of eachAPI sync

Devices connected in the Extensions & API Hub are listed at the top of this tab with their last pull and a Pull now button. The Hub reads the device (or its server) on a schedule or on demand; the punches enter here as an import, with the same checks and the same number (IMP-…), marked as coming from the API. See Connector recipes. The steps below are for a device server that you call by hand from this screen.How to use it
- First enter the address of the device server and the names of its fields in Settings & Roles › API connection (see Settings & Roles).
- Choose the From and To dates and select Fetch from the device server. The punches go through the same checks and the same preview as an Excel file.
- If the browser cannot reach the server (it must allow this page to call it), open No direct connection?, paste the JSON that the server returns and select Read the JSON.

_[Screenshot: API sync]_

API sync

_[Screenshot: API sync with a connected device]_

The API sync tab with a device connected in the Extensions & API HubAdd a punch and ImportsHow to use it
- Add a punch is for an employee who forgot to punch, or a day without a device. Choose the employee and the date and type the IN time, the OUT time, or both. An OUT earlier than the IN is taken as the next morning (night shift). Such punches are marked Typed by hand.
- Imports lists every import with its number, the date and time, the user, the source (Excel or API), the file, the rows, the punches added, the duplicates and the invalid rows. Undo removes every punch of that import; it is not possible once any of its punches is in a reconciled period.

_[Screenshot: The list of imports]_

The list of imports

Buttons on this screen
- Template downloads the blank punch sheet.
- Fetch from the device server pulls the punches of the period from the API.
- Read the JSON reads a JSON answer pasted by hand.
- Import n punch(es) saves the checked punches.
- Add the punch(es) saves a punch typed by hand.
- Undo removes the punches of one import.

Good to know
- Accepting a file with errors. By default one bad row rejects the whole file, so the data is never half loaded. If you prefer to load the good rows and skip the bad ones, change Accept the valid rows of a file that has errors in Settings & Roles › Rules.
- The same punch is never saved twice: a punch with the same employee, date, time and direction is skipped as a duplicate, and two identical punches within three minutes count as one when the day is worked out.
- Importing needs the permission Import punches. A role that cannot import can still see the punches.
- Raw punches take space in the browser. After a period is reconciled and its timesheets are approved, Settings & Roles › Clean-up can remove old punches.   

### Raw Attendance

Time Management › Operations › Raw Attendance 

The register of every punch as it was loaded, before any cleansing. Use it to answer “what did the device really record?”. Each line shows the employee, the date, the time, IN or OUT, where the punch came from (Excel, Device (API) or Typed by hand) and the import number.How to use it
- Choose the Month. Narrow the list with the Payroll category, the Department, the Source or an employee code or name.
- The tiles count the punches, the employees with punches and the punches of each source.
- To remove a wrong punch select ✕ at the end of the line (it needs the permission Resolve, edit and delete exceptions, and the period must not be reconciled).
- Select + Add a punch to type a missing punch.

_[Screenshot: Raw Attendance of September]_

Raw Attendance of September

Table columns: Emp ID · Name · Category · Date · Day · Time · Type · Source · Import

Buttons on this screen
- + Add a punch opens the manual punch form of Data Ingestion.
- Excel / CSV exports the list.
- Print / PDF prints the list.
- ✕ deletes one punch (asks to confirm).

Good to know
- Only the first 600 punches are shown on the screen; narrow the filters, or use the Excel export for the whole list.
- Every deleted punch is written to the audit trail with the user and the time.   

### Exception Dashboard (Cleansing)

Time Management › Operations › Exception Dashboard (Cleansing) 

The heart of the module. It lists everything that is wrong or incomplete in the attendance of a month, found by checking the raw punches against the Employee Master, the Shift Assignments, the Leave Register and the Monthly Parameters. Each exception has an action on its own row. When the count reaches 0, Reconcile & Approve locks the month and hands it to the timesheet engine.

Nothing is overwritten. The punches stay as they were loaded. A fix is recorded as an adjustment with the user and the time, appears in the Resolved (log) and can be undone until the period is locked. The open exceptions are not stored; they are calculated again each time, so they always match the data.

The six kinds of exception
| Exception | When it appears | How to resolve it (the row’s buttons) | 
| Missing Punch | An IN without an OUT, an OUT without an IN, or two punches further apart than the longest shift in Settings (16 hours). | Type the missing time (HH:MM) and select Update. The date is worked out for you (an OUT earlier than the IN is the next morning). Or select Delete punch to remove the stray punch. | 
| Missing Shift | Days that the employee should work, or worked, with no Shift Assignment (the stretch is shown from … to …). | Choose the shift and select Update: a Shift Assignment is created for the stretch. Or Ignore punches when the punches should not count. | 
| Missing Job Code | Hours that cannot be charged: no Job ID on the assignment or the employee, an inactive job, or a project job without an activity. | Enter the Job ID, the Phase and the Activity (the default job and activity of the employee are suggested) and select Update. | 
| Outside Shift Time | Punches before the IN time or after the OUT time of the shift assignment by more than the tolerance (15 minutes as standard, Settings & Roles › Rules). The row shows the hours before the start and after the end. | Approve to count the extra time (it becomes normal hours or overtime by the rules), or Reject to count only the shift time. Until you decide, only the shift time counts. | 
| Budget Mismatch | (a) Working days with no punch and no leave. (b) Punches on a day of recorded leave. (c) Normal hours plus leave above the budget hours of the month. | (a) Choose what it was: Absent, Unpaid leave, Paid leave, Sick leave or Accident leave. (b) Ignore the punches (leave stands). (c) Treat the excess as OT-1, or Ignore the excess hours. | 
| Overtime Alert | Overtime for an employee who is not OT Eligible in the Employee Master, or above the monthly limit (the employee’s Max OT Hrs or the limit in Payroll Settings). | Reject the overtime (it becomes zero) or, for the limit, Cap at the limit. | 

How to use it
- Choose the Month, the Payroll category and, if needed, the Department or an employee. Use the tabs All, Missing Punch, Missing Shift … to work through one kind at a time.
- On each row fill the box and select Update (or press Enter in a time box). The row disappears and the count falls. Delete punch and Ignore punches ask for confirmation.
- Many at once: tick exceptions of the same kind (for example 20 Missing Job Code rows), enter the value once in the bar that appears (the shift, the Job ID / Phase / Activity, or what the absence was) and select Apply to the selected. Rows that cannot be resolved are listed with the reason.
- When the count is 0, select Reconcile & Approve. Choose the category first to lock one category only, or leave All categories.
- Open Resolved (log) to see every resolution and to Undo one (not possible in a reconciled period).

_[Screenshot: Open exceptions of September, with an action on every row]_

Open exceptions of September, with an action on every row

_[Screenshot: After Reconcile &amp; Approve the period is locked and the list is empty]_

After Reconcile & Approve the period is locked and the list is empty

_[Screenshot: The Resolved (log): what was done, by whom and when]_

The Resolved (log): what was done, by whom and whenReconcile & Approve

Reconciling locks the month for the category (or for all categories). From then on the punches, the imports, the shift assignments, the holidays and the Leave Register entries of that month cannot change, so that the timesheet always agrees with what was reconciled. Rules:
- All exceptions of the selection must be resolved.
- The month must have ended: a period can be reconciled after its last day.
- To reconcile All categories, every employee must have a payroll category (the list says who has none).
- A category that was reconciled alone cannot be reconciled again as part of All; reconcile the remaining categories one by one.

Reopen (in the status bar) unlocks the period again. The draft timesheets of the period are removed (they are generated again after the next Reconcile & Approve). Timesheets that are Pending, Approved or Processed must be returned to draft first.

Table columns: Type · Emp ID · Name · Category · Date · Details · Action

Buttons on this screen
- Update applies the value typed on the row.
- Delete punch removes the stray punch of a Missing Punch.
- Ignore punches the punches of the stretch do not count.
- Apply to the selected applies one value to the ticked exceptions.
- Reconcile & Approve locks the period (all exceptions resolved).
- Reopen unlocks a reconciled period.
- Undo takes back a resolution in the Resolved (log).
- Excel / CSV exports the list.
- Print / PDF prints the list.

Good to know
- Resolving needs the permission Resolve, edit and delete exceptions; Reconcile & Approve and Reopen need Reconcile & Approve (lock) a period and reopen it.
- Outside Shift Time is one row for each run of days. The time is a reference only: nothing is lost by rejecting, and an approval can be undone from the Resolved (log) until the period is reconciled.
- A resolution covers a stretch of days at once: one Missing Shift or Missing Job Code row can stand for 25 days.
- The overtime rules (when overtime starts, the step, the grace minutes) are in Settings & Roles › Rules; they decide which days show as late, early or overtime.
- A payroll category whose time basis is Standard hours (no punches) has no punch exceptions; its employees are counted at their standard hours.   

### Timesheet Generation & Approval

Time Management › Operations › Timesheet Generation & Approval 

Turns a reconciled month into one timesheet per employee, lets you correct the Job ID, Phase and Activity, and approves it. An approved timesheet is locked and is what the Payroll Run uses. Timesheets are made in bulk for a category, or one by one for a selected employee.

Each timesheet has one line per Job ID, Phase and Activity the employee worked on. The columns are: Normal Hrs (time between IN and OUT less the break, up to the standard hours), Undertime Hrs (budget hours − normal − leave), OT-1 (the first 2 hours of overtime on a normal working day), OT-2 (each hour after them), Holiday OT (work on a public holiday or a weekly rest day) and the leave days as Sick, Absent, Paid and Accident leave hours. Normal + half-day hours + undertime + leave always equals the budget hours of the month.

The timesheet shows the actual hours only. Salary is calculated on the budget hours and the actual hours: the hours that are missing are not paid as leave. A day is paid as leave only when it was entered in the Leave Register as Paid Leave (or as sick leave, by the sick-leave rules). Annual leave days are outside the budget hours and are paid in the Annual Leave Settlement. The budget hours start from the last rejoin date, or from the join date of an employee who never went on leave (see Monthly Parameters).How to use it
- Choose the Month and the Payroll category. The month must be reconciled for that category, and HR must have approved the Monthly Parameters of the month (they give the budget hours and the holidays).
- Select Generate timesheets (n employees). The ones that cannot be made (not reconciled, an open exception, already approved) are listed with the reason. Tick Refresh the drafts that exist to make the drafts again from the reconciled data.
- Check the lines. While a timesheet is a draft, the Job ID, the Phase and the Activity can be changed on the line. Red rows do not pass the checks; hover over the row for the reason. Select an employee’s name to see every day and how it was counted.
- To change many lines, tick them and select Assign Job / Phase / Activity. Leave a box empty to keep what the lines have.
- Tick the timesheets (the box at the top ticks all shown) and select Submit for approval (optional) and then Approve. A timesheet that fails a check stays as it is and is listed with the reason.
- Return to draft reopens an approved timesheet, as long as payroll has not been run for the employee and month. Delete drafts removes draft timesheets.

_[Screenshot: Timesheet Generation &amp; Approval: one line per job, status at the end of each timesheet]_

Timesheet Generation & Approval: one line per job, status at the end of each timesheet

_[Screenshot: The day-by-day view that opens from the name of an employee]_

The day-by-day view that opens from the name of an employee

Table columns: sl# · Emp ID · Name · Designation · Job ID · Normal Hrs · Undertime Hrs · OT-1 Hrs · Holiday OT Hrs · OT-2 Hrs · Phase · Activity · Sick Leave · Absent Leave · Paid Leave · Acd Leave · Status

The status of a timesheet goes Draft → Pending Approval → Approved → Processed. Processed is set by the system when the payroll of the employee is posted.

Buttons on this screen
- Generate timesheets creates the timesheets of the selection.
- Assign Job / Phase / Activity sets the job coding of the ticked lines.
- Submit for approval sends the ticked timesheets to the approver.
- Approve approves the ticked timesheets (checks them first).
- Return to draft reopens the ticked timesheets.
- Delete drafts removes draft timesheets.
- Excel / CSV exports the list.
- Print / PDF prints the list.

Good to know
- What approval does. The timesheet becomes the payroll timesheet of HR & Payroll (marked with its number on the HR Timesheet screen) and cannot be changed there. If HR already has a timesheet for the employee and month, the approval is refused until HR removes it.
- Checks before approval: the Job ID must exist and be active, a project job needs an activity, the hours must add up to the budget hours, overtime needs an OT Eligible employee and must be within the monthly limit.
- Leave comes from the Leave Register (annual leave counts as paid leave); an absence you classified in the Exception Dashboard counts as the kind you chose.
- Employees of a category on Standard hours (no punches) get a timesheet at their standard hours, without punches.
- Generating and editing needs Generate and edit draft timesheets; approving and returning an approved timesheet needs Approve timesheets.  

### Reports  

### Late Comers

Time Management › Reports › Late Comers 

Lists the days on which an employee punched IN after the start of the shift plus its grace period. The minutes are counted from the shift start, so an employee who arrives at 08:35 for an 08:00 shift with 10 minutes grace is 35 minutes late. Use it for warnings and for the discipline records.How to use it
- Set the From and To dates (the default is the month that is open on the dashboard) and, if needed, the category, the employee or the department.
- Read the three tiles: late arrivals, employees and minutes lost.
- Tick Summary by employee for one line per employee with the number of late days, the total, the average and the longest delay.

_[Screenshot: Late Comers]_

Late Comers

Filters on the screen
| Field | Type | What to enter / options | 
| From / To  | Date | The period of the report. It may span several months (up to 13). | 
| Payroll category  | List | One category, all categories, or the employees without a category. | 
| Employee code  | Text | A code or part of a name. | 
| Department  | List | One department or all. | 
| Summary by employee  | Tick box | One line per employee instead of one per day. | 

Table columns: Emp ID · Name · Category · Department · Date · Day · Shift · Shift starts · First IN · Late (min)

Buttons on this screen
- Excel / CSV exports the report.
- Print / PDF prints the report.

Good to know
- The grace period is that of the shift (Shift Definitions), or the standard grace of Settings & Roles › Rules when the shift has none.
- The report reads the raw punches with the shift assignments, so it works for an open month as well as for a reconciled one. A punch you have not yet cleansed (a missing OUT) can still show a late arrival.   

### Early Leavers

Time Management › Reports › Early Leavers 

Lists the days on which an employee punched OUT before the end of the shift less its early grace. The minutes are counted back from the shift end.How to use it
- Choose the period, category, employee and department.
- Read the tiles (early departures, employees, minutes lost) and the list.
- Tick Summary by employee for one line per employee.

_[Screenshot: Early Leavers]_

Early Leavers

Filters on the screen
| Field | Type | What to enter / options | 
| From / To  | Date | The period of the report. It may span several months (up to 13). | 
| Payroll category  | List | One category, all categories, or the employees without a category. | 
| Employee code  | Text | A code or part of a name. | 
| Department  | List | One department or all. | 
| Summary by employee  | Tick box | One line per employee instead of one per day. | 

Table columns: Emp ID · Name · Category · Department · Date · Day · Shift · Shift ends · Last OUT · Early (min)

Buttons on this screen
- Excel / CSV exports the report.
- Print / PDF prints the report.

Good to know
- For a night shift the last OUT of the day is the one after midnight, and the shift end is the next morning.
- A day with a missing OUT is not an early leaver; it is a Missing Punch exception.   

### Absenteeism

Time Management › Reports › Absenteeism 

Lists the scheduled working days on which the employee did not come: no punches and no leave. It also shows the days you classified as absent in the Exception Dashboard. The absence rate is the absent days divided by the scheduled days of the same selection.How to use it
- Choose the period and the filters.
- Tick Include approved and classified leave to list annual, sick and other leave days as well (with the reason: Leave Register or Classified).
- Tick Summary by employee for the absent days, the scheduled days and the absence rate of each employee.

_[Screenshot: Absenteeism]_

Absenteeism

Filters on the screen
| Field | Type | What to enter / options | 
| From / To  | Date | The period of the report. It may span several months (up to 13). | 
| Payroll category  | List | One category, all categories, or the employees without a category. | 
| Employee code  | Text | A code or part of a name. | 
| Department  | List | One department or all. | 
| Include approved and classified leave  | Tick box | Also list the days of leave. | 
| Summary by employee  | Tick box | One line per employee. | 

Table columns: Emp ID · Name · Category · Department · Date · Day · Shift · Reason

Buttons on this screen
- Excel / CSV exports the report.
- Print / PDF prints the report.

Good to know
- Rest days and public holidays are never counted as absent.
- A working day with no punch that has not yet been explained is an open Budget Mismatch exception; the report shows it as No punch, not explained.   

### Overtime Summary

Time Management › Reports › Overtime Summary 

All the overtime logged in the period, by employee: OT-1 (the first 2 hours of overtime on a normal working day), OT-2 (each hour after them) and Holiday OT (work on a public holiday or a weekly rest day), with the total. For a user who may see salary-based figures, the Projected cost is added: the overtime hours at the rates the payroll run will use (the OT base and percentage of Payroll Settings, or the rates on the employee).How to use it
- Choose the period and the filters.
- Read the tiles: total, OT-1, OT-2 and holiday overtime, and the projected cost.
- Tick Detail by day to see each day with the shift, the last OUT and the hours of each type.

_[Screenshot: Overtime Summary]_

Overtime Summary

Filters on the screen
| Field | Type | What to enter / options | 
| From / To  | Date | The period of the report. It may span several months (up to 13). | 
| Payroll category  | List | One category, all categories, or the employees without a category. | 
| Employee code  | Text | A code or part of a name. | 
| Department  | List | One department or all. | 
| Detail by day  | Tick box | One line per day instead of one per employee. | 

Table columns: Emp ID · Name · Category · Department · OT-1 hrs · Holiday OT hrs · OT-2 hrs · Total OT hrs · Projected cost

Buttons on this screen
- Excel / CSV exports the report.
- Print / PDF prints the report.

Good to know
- Overtime that was rejected or capped in the Exception Dashboard is already removed from the report.
- The projected cost is shown only to roles that have the permission See salary-based figures; the other roles see the hours.
- Overtime of an employee who is not OT Eligible in the Employee Master raises an Overtime Alert in the Exception Dashboard; reject it there or ask HR to change the status.   

### Employee Time Sheet

Time Management › Reports › Employee Time Sheet 

The printable time sheet of each employee for a payroll month, to circulate for the site approval. One A4 page per employee with the employee data, the day-by-day record (date, day, shift, IN, OUT, normal hours, OT-1, Holiday OT, OT-2, job / activity and remarks), the totals, a summary of the month and the sign-off boxes: Employee, Supervisor / Foreman, Site Engineer / PM and Approved (Client / HR). The hours come from the attendance records after the exceptions are cleared.How to use it
- Clear the exceptions in the Exception Dashboard and reconcile the month.
- Open Employee Time Sheet, choose the Payroll month and, if needed, the payroll category, the employee or the department.
- Untick the employees you do not need (the box in the header ticks or unticks all). Select Print on a row for one sheet, or Print selected for all the ticked employees: the sheets are made in one go, one page each.
- In the preview choose A4 Portrait or landscape and the Signatures line, then Print / Save as PDF.
- Circulate the pages for signature. Excel exports the list of employees with their totals.

_[Screenshot: Employee Time Sheet]_

The printed sheet of one employee: daily record, totals, summary and the sign-off boxes

Filters on the screen
| Field | Type | What to enter / options | 
| Payroll month  | Month | The payroll month; the sheet covers the payroll period of the month (for example 21st to 20th when the payroll calendar says so). | 
| Payroll category  | List | One category, all categories, or the employees without a category. | 
| Employee code  | Text | A code or part of a name. | 
| Department  | List | One department or all. | 

Table columns: Emp ID · Name · Category · Department · Budget hrs · Normal hrs · OT-1 · OT-2 · Holiday OT · Leave / absent hrs · Period · Time sheet

Buttons on this screen
- Print on a row prints that employee's sheet.
- Print selected prints the ticked employees, one page each.
- Excel exports the list.
- Print / PDF prints the list.

Good to know
- A sheet of a month that is not reconciled yet is printed with the red mark DRAFT: the period is not reconciled, so it cannot be mistaken for the final one.
- Rest days and public holidays are shown with a light line and the remark; extra time outside the shift that was approved or rejected is noted in the remarks.
- The normal hours, OT-1, OT-2 and Holiday OT follow the rules of Shift Assignments; the totals are the same as in the Timesheet Generation & Approval. 

Email time sheets
- The printed time sheets have ✉ Email: each employee’s sheet goes to the address in the employee master.   

 

⚖️

Module guide
