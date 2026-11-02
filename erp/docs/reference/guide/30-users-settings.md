## Users & Settings

Who can use the system and what they can do, document numbering, approval limits, company details and mode, policy rules, default posting accounts, credit loss rates, backup, the audit trail and the Extensions & API Hub (e-invoicing, attendance devices, banks, messaging). 

The administrator sets these up once and revisits them when people, policies or the company change. Start with the roles: select Create standard roles in Role Permissions (Finance Manager, Accountant, HR, Payroll Officer, Project Manager, Storekeeper, Procurement, Management), adjust the ticks, then add users and turn on sign-in.

Backups are the most important habit. All data lives in the browser on the computer. Download a backup ZIP regularly and keep copies outside the computer. 

#### Screens in this module

Masters & Settings

Users & securityUsersRolesRole PermissionsLogin & Security

System rulesDocument NumberingApproval RulesCompany SettingsCompany ModeLegal & Policy RulesDefault Posting Accounts (Finance)Credit Loss Rates (ECL)

Data & BackupBackup Management

EmailEmail SettingsEmail Log

Extensions & API HubOverviewExtensions DashboardExtensionsAdd ExtensionConnector recipesQueue & RetriesAPI LogsWebhooks & InboxE-Invoice RegisterSettings & Security

ReportsAudit Trail 

### Masters & Settings  

### Users

Users & Settings › Masters & Settings › Users & security › Users 

The people who sign in, each with a role and the companies they may work in. How to use it
- Select + New, enter the Username and full Name.
- Choose the main Role. Add Extra Roles and an Access Until date if needed.
- In multi-company mode enter the default Company and the Allowed Companies.
- Save. Passwords are set when sign-in is turned on and when the user first signs in. 

_[Screenshot: Users form]_

The form that opens with + New 

Fields on the “New User” form
| Field | Type | What to enter / options | 
| Information | 
| Username  | Text | The name typed at sign-in. | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Role  | List | Decides which modules and actions the user has (see Role Permissions).

Pick from the master list | 
| Company  | Text |  | 
| Allowed Companies  | Text | Companies the user may switch to (multi-company mode). | 
| Extra Roles  | Text | More roles for the same user, separated by commas. Their rights are added to those of the main role. Easier to set on the Users tab of Role Permissions. | 
| Access Until  | Date | The last day the user may sign in. After it the user is signed out and cannot sign in. Leave empty for no end date. | 
| Status  | List | Inactive users cannot sign in.

Active · Inactive | 

   

### Roles

Users & Settings › Masters & Settings › Users & security › Roles 

The list of roles. Permissions for each role are ticked in Role Permissions. How to use it
- Select + New, enter the role Name, and Save. Then set what it can open and do, section by section, in Role Permissions. (Role Permissions can also create a role from a template.) 

_[Screenshot: Roles]_

The Roles screen

_[Screenshot: Roles form]_

The form that opens with + New 

Fields on the “New Role” form
| Field | Type | What to enter / options | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Permissions  | Text |  | 

   

### Role Permissions

Users & Settings › Masters & Settings › Users & security › Role Permissions 

Decide what each role can open and do, section by section, instead of giving a whole module or nothing. For every screen you choose from nine rights: View, Add, Edit, Delete, Submit, Approve / post, Reverse, Print and Export. A role can therefore be a data-entry clerk for Purchase, see only the reports of Finance, and have no access to Payroll. A user can also hold extra roles and an access end date. The Administrator always has everything. Roles that you set up before this version keep working exactly as they did. 

Works with sign-inThe rights apply once sign-in is turned on in Login & Security. Until then everyone works as the role chosen in the top bar and nothing is restricted. How to use it
- Choose the Role at the top, or select New role (blank), From a template (a ready-made job role) or Copy (start from another role). Rename also updates the users and the Approval Rules that use the role.
- On Overview every module shows one chip: No access, Full module, a preset such as Reports only, or Custom. Select a chip, or the module row, to open it.
- Pick a preset for the whole module in one step (see the table below), then adjust single sections if needed.
- On Access by section open a module and tick the rights per screen. Ticking any right also ticks View; clearing View removes every right of that screen. The column headings tick or clear one right for the whole module. The search box finds a screen by name.
- On Special rights set the master switches (Approve and post, Delete), Salary and payroll data, Bank account details, Post directly to control accounts and the approval stages (salary modification, loans, leases, budgets, ICV, vouchers, corporate tax).
- On Users give each user a main role, optional extra roles, an Access until date and a status. On Review see the totals, the duties that should be kept apart, and print the Access sheet.
- Changes apply at once. A signed-in user gets the new rights the next time a screen opens; no new sign-in is needed. 

The nine rights
| Right | What it allows | Screens it applies to | 
| View | Open the screen and see its records. Without it the screen is hidden from menus, hubs, search and direct links. | All | 
| Add | Create a new record, copy a document, import from a file, convert one document to the next. | Masters, transactions | 
| Edit | Change a saved record. With View only, the record opens read-only. | Masters, transactions | 
| Delete | Delete a record. Also needs the master switch Delete on Special rights. | Masters, transactions | 
| Submit | Send a document for approval. | Transactions | 
| Approve / post | Approve or post a document. Also needs the master switch Approve and post. | Transactions | 
| Reverse | Reverse a posted document. Also needs the master switch Approve and post. | Transactions | 
| Print | Print, save as PDF and open the printable form. | All | 
| Export | Save a list or report to Excel. | All | 

 

Presets for a whole module
| Preset | What the role gets | 
| No access | The module is hidden from this role. | 
| Full module (as before) | Every section, with the master switches of the role. This is how existing roles behave. | 
| View only | See, print and export every section and report. Change nothing. | 
| Reports only | Only the report and dashboard screens (view, print, export). | 
| Data entry | Add, edit and submit transactions. Masters are view only. No reports. | 
| Data entry and reports | As Data entry, plus the reports. | 
| Approver | See everything; approve, post and reverse transactions; reports. | 
| Manager (no delete) | Everything except deleting records. | 

 

The five tabs
| Tab | What it is for | 
| Overview | One chip per module, the count of screens the role can open, and quick access to the access sheet and Who can open…. | 
| Access by section | The grid of screens against the nine rights, with presets, search and column ticks. | 
| Special rights | Master switches, salary and bank data, direct posting to control accounts and the approval stages. | 
| Users | Main role, extra roles, Access until date and status for every user, with each user’s access sheet. | 
| Review | Totals, the duties-to-keep-apart check, every module at a glance and the printable role access sheet. | 

 

Ready-made roles (From a template)
| Template | What it gives | 
| Auditor (read only) | See, print and export every screen and report. Cannot add, change, approve or delete. | 
| CEO / Board | All reports and dashboards, approval rights, salary and bank data. | 
| Accounts payable clerk | Enters purchase invoices and supplier payments. Views masters and reports. | 
| Accounts receivable clerk | Enters sales invoices and customer receipts. Views masters and reports. | 
| General ledger accountant | Journal vouchers, bank and period work, all finance reports. Approval by the Finance Manager. | 
| Cashier / petty cash | Petty cash and bank transfers only. | 
| HR officer | Employees, leave, letters and time management; salary data visible. | 
| Project manager | Projects entry and reports, purchasing and stock view. | 
| Site engineer / requester | Raises requisitions and stock issues for the project; views the project. | 
| Storekeeper | Receives goods and issues stock; stock reports. | 
| Sales executive | Quotations, orders and delivery; customer reports. | 
| Department approver | Approves purchasing, project and stock documents. | 

 

Buttons on this screen
- New role creates a role with no access.
- From a template creates a role from a ready-made job role.
- Copy, Rename and Delete manage the selected role. A role used by users cannot be deleted.
- Create standard roles adds the standard roles the first time.
- Who can open… lists the roles and users who can open one screen.
- Access sheet (Review and Users) prints or exports the access of a role or a user. 

Good to know
- Several roles for one user. Add Extra roles on the Users tab (or in Users). The rights of the main and extra roles are added together; a switch such as Delete is on if any of the roles has it.
- Access until. On the end date the user is signed out when the next screen opens and cannot sign in again. Inactive users are signed out in the same way. Leave the date empty for no end.
- Salary data and bank details are separate. A role with Salary and payroll data but without Bank account details sees the salary fields and a masked IBAN, SWIFT and account number. Existing roles keep both together until you change it.
- Master switches and section rights work together. To approve a document the role needs the switch and the Approve / post right on that screen. A message names the missing right. Roles without section rights keep the original messages.
- Amount limits are not set here. Who approves an invoice above a certain amount is set in Approval Rules. Section rights decide who may press the button; the rules decide who is asked.
- Duties to keep apart. The Review tab warns when one role can both prepare and approve the same thing, for example enter and approve journal vouchers, or add a supplier and pay it. These are warnings: split the duties between two roles, or accept the risk and review the audit trail.
- Reports and hubs follow the screen. A tile on the Reports hub or a module hub appears only if the role can open the screen behind it. Screens that show company-wide profit, bank or payroll figures also need the Sensitive data permission, as before.
- Buttons match the rights. New, Delete, Approve, Print and Excel buttons are hidden where the role does not have the right. A record that a role can view but not edit opens read-only.
- Protected screens. Users, Role Permissions, Login & Security, backups, email settings and the portal settings stay with the Administrator, whatever the role.
- Every change is written to the audit trail. The rights are enforced by this program in the browser, with the same limits as sign-in itself (see Login & Security).   

### Login & Security

Users & Settings › Masters & Settings › Users & security › Login & Security 

Turns on sign-in. Until it is on, anyone using the browser works as the role chosen in the top bar. Once on, each user signs in with a username and password and only sees what their role allows. 

What sign-in protectsSign-in keeps ordinary users out of areas and salary and bank fields. The data is still stored in the browser, so anyone with access to the computer, the browser tools or a backup file can read it. For stronger protection the system must run on a server with a database. How to use it
- Enter the Administrator username, full name and a password of at least 8 characters twice.
- Select Turn on sign-in. Create the other users first so they can sign in. 

_[Screenshot: Login & Security]_

The Login & Security screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Turn on sign-in | 
| Administrator username  | Text |  | 
| Full name  | Text |  | 
| Password (8+ characters)  | Password |  | 
| Confirm password  | Password |  | 

 

Buttons on this screen
- Turn on sign-in   

### Document Numbering

Users & Settings › Masters & Settings › System rules › Document Numbering 

Document numbers are created automatically and cannot be typed. Here you choose the number of Digits, whether to Include the year (PR-2026-000001), and the prefix of each document type. The table shows the next number of every document. Existing documents keep their numbers. 

Prefixes in use include: PR (purchase requisition), RFQ, SQ (supplier quotation), BT (bid tabulation), LPO, GRN, PI (purchase invoice), SCN (supplier credit / debit note), SR (supplier return), PV (supplier payment), QT (quotation), SO, GDN, SI (sales invoice), CN, SRT (sales return), PCERT, VO, RV (customer receipt), BDW, SRC, SIS, MC, TRF, ADJ, CNT, NRV, CAP, AT, AD, JV, GPV, GRV, BTR, PC (petty cash), ACC, PRV, IC, LC, LG, ADD, DED, LN, SMV, RJ, ALS, FS, PA, LTR, GOL, APR, PIP, REQ, CND, OFR, ONB, PRM, EXN, PCL, CRT, MPC, MCM, MS, CO, IPC, BV, MEC and SHF. Master codes (SUP-, CUS-, ITM-, SER-, FA-, PRJ-, EMP-) follow the same scheme. How to use it
- Set the digits and the year option.
- Change any prefix (for example LPO to PO).
- Select Save numbering. 

_[Screenshot: Document Numbering]_

The Document Numbering screen 

Buttons on this screen
- Save numbering   

### Approval Rules

Users & Settings › Masters & Settings › System rules › Approval Rules 

Approval limits by amount: for a transaction type and an amount range, only the named role can approve or post it. Without a rule, anyone with Approve / post can approve. How to use it
- Select + New, enter the Transaction Type (the screen name, for example Purchase Orders (LPO)), the From and To amounts and the Approver Role.
- Save. Add a rule per band (for example 0–50,000 Procurement; 50,000.01 and above Management). 

_[Screenshot: Approval Rules form]_

The form that opens with + New 

Fields on the “New Approval Rule” form
| Field | Type | What to enter / options | 
| Information | 
| Transaction Type  | Text | Screen name or key of the document type the rule applies to. | 
| From Amount  | Number |  | 
| To Amount  | Number | 0 or blank means no upper limit. | 
| Approver Role  | List | 

Pick from the master list | 

   

### Company Settings

Users & Settings › Masters & Settings › System rules › Company Settings 

The company's letterhead details printed at the top of every document: name in English and Arabic, TRN, address, emirate, phone, email, website, currency and MOL establishment ID. How to use it
- Select + New (or Edit the existing record), fill in the details and Save. Keep only one record. 

_[Screenshot: Company Settings]_

The Company Settings screen

_[Screenshot: Company Settings form]_

The form that opens with + New 

Fields on the “New Company Settings” form
| Field | Type | What to enter / options | 
| General information | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Arabic Name  | Text | Printed on documents next to the English name. | 
| TRN  | Text | The 15-digit Tax Registration Number. Printed on tax invoices. | 
| Address  | Text | Address printed on documents. | 
| Emirate  | List | The emirate. For sales it selects the VAT return box (1a Abu Dhabi to 1g Fujairah).

Abu Dhabi · Dubai · Sharjah · Ajman · Umm Al Quwain · Ras Al Khaimah · Fujairah | 
| Phone  | Text | Main contact number. | 
| Additional details | 
| Email  | Text | Main contact email. | 
| Website  | Text |  | 
| Currency  | Text | Leave blank for the base currency (AED). Choose another currency for foreign documents. | 
| MOL Establishment ID  | Text |  | 

   

### Company Mode

Users & Settings › Masters & Settings › System rules › Company Mode 

Chooses Single company (every record belongs to one company; no company selector, no group screens) or Multiple companies (a company selector appears in the top bar; every entry, report and print follows it; the Group & Intercompany module and consolidated statements switch on). It applies to all users. How to use it
- Create the companies in Companies first.
- Choose the mode and select Save. 

_[Screenshot: Company Mode]_

The Company Mode screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| 🏢  | Option | One company. Every record belongs to it. There is no company selector and no intercompany or consolidation screens. | 
| 🌐  | Option | Several companies in one system. A selector in the top bar chooses the company you work in; every entry, report and print follows it. The Group view, intercompany invoicing and consolidated statements are switched on. | 

   

### Legal & Policy Rules

Users & Settings › Masters & Settings › System rules › Legal & Policy Rules 

A register of the statutory and policy rules the company applies (UAE statutory, company policy, management decisions, accounting estimates) with their effective dates and method, for reference and audit. How to use it
- Select + New, enter the code, name, source, effective dates and method, and Save. 

_[Screenshot: Legal & Policy Rules form]_

The form that opens with + New 

Fields on the “New Legal & Policy Rule” form
| Field | Type | What to enter / options | 
| Information | 
| Rule Code  | Text |  | 
| Name required | Text | The name shown in every drop-down list and printout. | 
| Source  | List | 

UAE statutory · Company policy · Management · Accounting estimate | 
| Effective From  | Date |  | 
| Effective To  | Date |  | 
| Method  | Text | How the money moves: Cash, Bank Transfer or Cheque. | 

   

### Credit Loss Rates (ECL)

Users & Settings › Masters & Settings › System rules › Credit Loss Rates (ECL) 

The expected credit loss rate for each age band of customer invoices (current, 1–30, 31–60, 61–90 and over 90 days past due). The monthly Credit Loss Run multiplies the outstanding invoices in each band by its rate. Set the rates from your own collection history. How to use it
- Enter a rate per band and select Save rates. 

_[Screenshot: Credit Loss Rates (ECL)]_

The Credit Loss Rates (ECL) screen 

Filters and settings on the screen
| Field | Type | What to enter / options | 
| Current (not yet due) %  | Number |  | 
| 1-30 days past due %  | Number |  | 
| 31-60 days past due %  | Number |  | 
| 61-90 days past due %  | Number |  | 
| Over 90 days past due %  | Number |  | 

 

Buttons on this screen
- Save rates
- Open the credit loss run  

### Data & Backup  

### Backup Management

Users & Settings › Data & Backup › Backup Management 

Creates, downloads and restores full backups. A backup is a ZIP file with a checksum for every part, so a damaged or changed file is detected before restore. Restoring replaces all current data, and a safety backup is made first. The page shows backups kept, last backup, size, automatic backup status, last download and how much browser storage the data uses (about 5 MB available). 

| Section | Use it to | 
| Create Backup | Take a full backup now, name it, protect it with a password if you wish, and download it as a ZIP. | 
| Import Backup | Restore from a downloaded backup file, with a check and a preview before anything changes. Also used to move data to another computer. | 
| Backup History | Download, restore, verify, protect or delete backups kept in the browser. | 
| Automatic Backup | Schedule automatic backups, set how many to keep, and the reminder to download a copy. | 
| Activity Log | Who created, downloaded, verified, imported or restored a backup, and when. | 

 

Recommended routineTurn on automatic backups. At the end of each working day select Create Backup and download the ZIP to a shared or external drive. Before any large import or restore, take a manual backup. How to use it
- Select Create Backup, give it a name (and optional password) and download it.
- To restore or move data, select Import Backup, choose the ZIP, check the preview and confirm. 

_[Screenshot: Backup Management]_

The Backup Management screen  

### Email  

### Email Settings

Users & Settings › Email › Email Settings 

Sets up sending email straight from the ERP. A web page cannot talk to a mail server by itself, so the ERP hands each message to a small program, the gateway, which runs on a computer of your choice and sends it through your mail server (SMTP). When this screen is complete, the Send button of the Email window sends the document as a PDF together with the files you tick. Only an administrator can open this screen. How to set it up
- Start the gateway (once). Install Node.js 18 or newer, select Download gateway.js, save it in a folder of its own and start it with a secret key of your choice (12 characters or more): on Windows set GATEWAY_KEY=your-secret-key and then node gateway.js; on Mac or Linux GATEWAY_KEY=your-secret-key node gateway.js. Leave it running. If a gateway for the Extensions & API Hub already runs, replace its gateway.js with this version (1.1); nothing else changes.
- Enter the Gateway address (http://localhost:8787 on the same computer; another computer needs an https address) and the Gateway key.
- Enter the Server, Port and Security of your mail server (587 with STARTTLS, or 465 with SSL/TLS), then the User name and Password. Gmail and Microsoft 365 need an app password, and SMTP login must be allowed for the account.
- Enter the From name and From address. Most servers accept only an address that belongs to the logged-in account. You may add a different Reply-to address, and a Copy address (Bcc) that receives every email sent.
- Choose where the key and password are kept, set Sending from the ERP to Yes and select Save settings.
- Select Test the connection. It checks the gateway, the key, the mail server and the login, and says in plain words what is wrong. Then select Send test email to your own address and look in the inbox, and in the spam folder. 

The settings
| Field | What it is | 
| Gateway address | Where the gateway runs. Plain http is accepted only for localhost. | 
| Gateway key | The secret that the gateway was started with (GATEWAY_KEY). Leave it empty to keep the saved one. | 
| Server, Port, Security | Your mail server. STARTTLS (port 587), SSL/TLS (port 465) or None (a server on your own network). | 
| User name, Password | The login of the mail account. Leave the user name empty if the server needs no login. | 
| Do not verify the TLS certificate | Only for a server you trust that uses a self-signed certificate. | 
| From name, From address | How the sender appears to the person who receives the email. | 
| Reply-to, Copy address | Optional. Replies go to the reply-to address; the copy address silently receives every email. | 
| Sending from the ERP | The master switch. While it is No, the Send button explains that sending is off. | 

 

Where the key and password are keptIn the ERP data needs nothing to unlock, but the password is then part of the saved data and of every backup. In the credential vault keeps them encrypted; the vault must be unlocked once in each session before anyone can send (see the Vault tab of Settings & Security). 

Who can sendAnyone who can see a document can email it; only the administrator sees these settings and the log. The files sent through the gateway are not stored there. Messages larger than 20 MB are refused before sending, because most mail servers would refuse them. 

Buttons on this screen
- Download gateway.js / Copy the program give you the gateway program.
- Save settings stores everything on this screen.
- Test the connection checks the gateway, the key, the mail server and the login without sending anything.
- Send test email sends a short message to the address you type. 

Email on every report
- Once sending is set up here, every report, statement, payslip and document window can be emailed with the ✉ Email button. Until then the same window offers Open email app, which opens your own mail program with the text filled in.   

### Email Log

Users & Settings › Email › Email Log 

The record of every email sent from the ERP: the number (EM-00001…), the date and time, who sent it, the document, the recipients, how many files went with it, and whether the mail server accepted it. The tiles count Sent, Failed, Today and All; select a tile to list only those emails. In a group of companies each company sees its own emails. How to use it
- Open Email Log. Select a tile to filter the list.
- A Sent email means that the mail server accepted the message. If only some recipients were accepted, the others are named in the message of the email.
- A Failed email shows the reason, for example a wrong password or a recipient the server refused. Correct the cause, then select Send again: the Email window of the document opens with the same recipients, subject and text, ready to send.
- Open on a sent email opens the same window, for example to send the document again to someone else. 

Good to knowA Sent email was handed over to the mail server; the log cannot tell whether the person has read it. Every email is also written in the Audit Trail. 

Reports in the log
- Reports and statements sent with ✉ Email are logged as Report. Open or Send again on such an email keeps its recipients and text for 10 minutes: open the report again, select ✉ Email, and the window is filled in.  

### Extensions & API Hub 

The Extensions & API Hub connects the ERP to e-invoicing (KSA ZATCA and the UAE), attendance devices (into Time Management), bank statements, payment notifications, WhatsApp and e-mail and any other web service. Everything starts in simulation; a queue with retries keeps posting fast; the log is tamper-evident; secrets are kept in an encrypted vault or at the gateway. Start with Extensions & API Hub: overview.  

### Extensions & API Hub: overview

Users & Settings › Extensions & API Hub › Extensions & API Hub: overview 

The Extensions & API Hub connects the ERP to the outside world from one place: e-invoicing for the Kingdom of Saudi Arabia (ZATCA) and the UAE, attendance devices that feed Time Management, bank statements, payment notifications, WhatsApp and e-mail, and any other web service through a generic REST, SOAP or webhook connector. Each connection is an extension: it has its own settings, a fixed or editable data mapping, a trigger (a posted document, a schedule, or a click), retry rules, a test and its own log.

It does not slow anyone down. When an invoice is posted the ERP only puts a message in a queue; the Hub delivers it in the background and tries again if the service is down. Posting never waits for a government server.

Simulation first. Every extension starts as a draft that talks to a built-in simulator, which answers like the real service, including failures that you can trigger. Nothing leaves the ERP until you switch the extension, the Hub and the credentials on (see the three conditions below).

Add Extension (catalogue)→Connection · Mapping · Triggers→Test in simulation→Settings: live mode, vault, gateway→Document is posted→Queue · retries→Service answers→API log · e-invoice registerWhat you can connect

The 15 connectors of the catalogue
| Connector | Group | What it does | Live use from | 
| KSA · ZATCA E-Invoicing (Fatoora Phase 2) | Tax & Regulatory | Builds the UBL 2.1 invoice with counter, previous hash, UUID and QR code; the gateway signs it and reports or clears it with ZATCA. | The gateway | 
| UAE · E-Invoicing (Peppol PINT AE) | Tax & Regulatory | Builds the PINT AE invoice and submits it to your Accredited Service Provider; the status is polled or received by webhook. | The browser, if the service allows web pages (otherwise the gateway) | 
| ZKTeco biometric terminal | Hardware & IoT | Pulls the IN / OUT punches (TCP 4370) into Time Management. | The gateway | 
| Suprema BioStar 2 | Hardware & IoT | Reads the events of a BioStar 2 server into Time Management. | The gateway | 
| Hikvision access terminal | Hardware & IoT | Reads the attendance events (ISAPI) into Time Management. | The gateway | 
| Device server or middleware with a JSON API | Hardware & IoT | Any server or cloud service that returns the punches as JSON over https. | The browser, if the service allows web pages (otherwise the gateway) | 
| Bank statement auto-sync | Banking & Payments | Fetches an MT940 / CAMT.053 / JSON statement (bank API or SFTP folder) into Bank Statement Lines. | The gateway | 
| Payment notifications | Banking & Payments | Receives the payment confirmations of Stripe, Telr, Network International or a bank, checks the signature and matches the invoice. | The gateway | 
| WhatsApp Business (Cloud API) | Communication & Workflow | Sends template messages, for example payslip and invoice notices. | The gateway | 
| E-mail through an HTTP service | Communication & Workflow | SendGrid, Resend, Mailgun, Postmark or Microsoft Graph. | The browser, if the service allows web pages (otherwise the gateway) | 
| SMTP e-mail | Communication & Workflow | Any SMTP server (Microsoft 365, Gmail, your own). | The gateway | 
| Outgoing webhook | Communication & Workflow | Posts a JSON message to Zapier, Make, n8n or Power Automate when a document is posted. | The browser, if the service allows web pages (otherwise the gateway) | 
| Custom REST API | Communication & Workflow | Any web service that takes JSON or XML: address, authentication, fields and event. | The browser, if the service allows web pages (otherwise the gateway) | 
| Custom SOAP service | Communication & Workflow | An XML envelope that you design once, with {{field}} placeholders. | The browser, if the service allows web pages (otherwise the gateway) | 
| Incoming webhook | Communication & Workflow | Gives an outside system an address to call; the ERP collects, checks and records what arrives. | The gateway | 

Browser or gateway? A web page cannot open TCP connections (attendance devices), SFTP or SMTP, cannot sign with the elliptic curve that ZATCA requires, and cannot call services that do not allow web pages. For those connectors the Hub uses a small program called the gateway, which you run on a server of yours; the ERP hands the job to it. A starter gateway comes with the Hub (Settings & Security › Gateway).

Three things must be true before a real message leaves the ERP
| What | Setting | Why | 
| The extension | In its Connection tab, Simulation is set to No: use the real service. | Each connection goes live on its own, when you decide. | 
| The Hub | Live mode is on in Settings & Security › General (it asks for confirmation). | One master switch: switch it off and every extension answers from the simulator again. | 
| The connection | The credentials are in the vault (or at the gateway) and, where the service needs it, the gateway address and key are entered. | Secrets never travel in the log. | 

Where the data goes
- Device punches enter Time Management as raw punches, with an import number, and can be undone like an Excel import: see Data Ingestion.
- Bank statement lines enter the Bank Statement Lines register of Finance, ready for reconciliation.
- E-invoices are recorded in the E-Invoice Register and the printed invoice carries the QR code and the status.
- Incoming messages are kept in Webhooks & Inbox; a payment notice is matched to the sales invoice so that you can record the receipt.

The Hub’s records at a glance
| Record | Screen | What it is | Life of the record | 
| Extension (EXT-0001) | Extensions | One configured connection: its settings, mapping, trigger and retry rules | Draft → Active ⇄ Paused. Health is worked out: Active, Needs attention (the latest messages failed), Paused or Draft. | 
| Queue message (Q-0001) | Queue & Retries | One message that must leave the ERP (an invoice, a pull, a status check) | Queued → Done, or Retrying → Failed after the last try (or Cancelled by a person). | 
| API call (log row) | API Logs | One request and its answer, with time, status and duration | Chained by hashes; secrets hidden; cleaned after the retention period. | 
| E-invoice (EI-0001) | E-Invoice Register | One invoice or credit note prepared for ZATCA or the UAE provider, with counter, hash, UUID and QR code | Generated → Submitted → Cleared / Reported / Delivered, or Rejected. Never cleaned automatically. | 
| Incoming message (IN-0001) | Webhooks & Inbox | One message that an outside system sent to your address | Received → Processed, Ignored or Error; Rejected when the signature is wrong. | 

Who can do what

The Hub has six permissions of its own. They are given to roles in Settings & Security › Roles (and the role must also have Users & Settings in Role Permissions). While user security is switched off everybody has full access.

The six permissions of the Hub
| Permission | Short name | Allows | 
| See the Extensions & API Hub | view | Opens the screens. Every other permission includes it. | 
| Create and change extensions, mappings and triggers | manage | Add Extension, the Connection, Mapping, Triggers and Error Handling tabs, Pause, Copy, Delete. | 
| Run extensions, retry failed messages and pull device data | run | Pull now, Run the queue now, Retry, Cancel, Collect now, Send missing, Send again. | 
| Enter and replace credentials, unlock the vault | creds | The password, key and token fields and the vault passphrase. | 
| Read request and response payloads in the API log | logs | The Request and Response boxes of a log row and of an incoming message. | 
| Hub settings, roles, clean-up and demonstration data | admin | Everything in Settings & Security. | 

Ready-made presets
| Preset | Permissions | 
| Integration Officer | view, manage, run, logs | 
| Integration Operator | view, run | 
| Integration Viewer | view | 
| Integration Administrator | all six | 

Getting started
- Look first. In Settings & Security › Demo data choose Load the demonstration data in a test company: six extensions in simulation show the whole flow, from the posted invoice to the register and the printed QR code. Remove it when you are done.
- Add the extension. In Add Extension choose the connector (KSA ZATCA, UAE e-invoicing, a device, a bank …). It is created as a draft in simulation.
- Configure it. Fill in the Connection, check the Data Mapping, choose the Triggers and the Error Handling (see Extensions and Connector recipes).
- Test it. The Test tab builds a sample document or pulls with a dry run. Use Simulator behaviour to see how the queue, retries and alerts react to a failure.
- Prepare the real connection. Set up the vault, enter the credentials, install the gateway if the connector needs one and enter its address and key in Settings & Security › Gateway.
- Go live, one connection at a time. Set the extension’s Simulation to No, switch Live mode on, and watch the dashboard, the queue and the log for the first documents.

Limits you should knowThe Hub prepares and sends documents in the formats of the authorities, but only the authority’s own system is the final judge: use the sandbox of ZATCA or your provider before production. The starter gateway forwards requests and keeps webhooks, but the signing of ZATCA invoices and the connection to attendance devices and SFTP folders need small add-on functions (hooks.js) that you add to the gateway; until then those jobs report that they need them and the messages stay in the queue. The scheduler works while the ERP is open in a browser; for unattended operation let the gateway run the schedule. The ERP stores its data in the browser, so the API log and the queue are kept short on purpose: export what you need and take the ERP backup regularly.

Good to know
- Phase-in dates of e-invoicing (which taxpayers must start when) are set by the Saudi ZATCA and by the UAE Ministry of Finance and Federal Tax Authority, and they change. Confirm the current dates, the data model and your provider’s API with the authority and your provider before you go live; the Hub is built so that the settings can follow.
- Nothing in a posted document changes when an extension fails. A message that cannot be delivered stays visible in the queue as Failed, and the extension shows Needs attention on the dashboard.
- Every change to an extension, the vault or the settings is written to the Audit Trail with the user’s name.   

### Extensions Dashboard

Users & Settings › Extensions & API Hub › Extensions Dashboard 

The first page of the Hub. It shows how every connection is doing and what needs a person: failed messages, e-invoices that were not sent or were rejected, incoming messages, the health of the log and the vault. It changes nothing; every tile opens the records behind it.How to use it
- Read the banner on top. Simulation mode (grey) means that nothing leaves the ERP; Live mode means that extensions with Simulation set to No send real messages. The chips show whether the gateway and the vault are set up; Settings & Security opens the settings.
- Select a tile. Active integrations, Needs attention, Failed messages, Waiting or retrying, Delivered today, E-invoices needing action and In progress open a list of the extensions, messages or invoices behind the number. The other tiles take you to the screen where the work is done.
- Use the buttons above the tiles: + Add New Extension, View API Logs, Webhooks & Inbox, Queue & Retries and Run the queue now (tries the waiting messages at once).
- The table Integrations lists every extension with its mode, status, trigger, last and next run and the number of messages sent and failed. Select a row to open its settings. The chart Calls in the last 7 days shows the successful and the failed calls of each day.

_[Screenshot: The Extensions Dashboard with six demonstration extensions]_

The Extensions Dashboard with six demonstration extensions

The tiles of the dashboard
| Field | Type | What to enter / options | 
| Active integrations  | Tile | Extensions with status Active, out of all configured. | 
| Needs attention  | Tile | Extensions whose latest messages failed, and paused extensions. | 
| Failed messages  | Tile | Queue messages that used all their tries or were refused. | 
| Waiting or retrying  | Tile | Queue messages that have not been delivered yet. | 
| Delivered today  | Tile | Messages and pulls that were done today. | 
| Success rate, 7 days  | Tile | Successful calls out of all calls of the last seven days. Opens the API Logs. | 
| E-invoices needing action  | Tile | Invoices posted but not sent, and invoices rejected by the authority or provider. | 
| In progress  | Tile | E-invoices submitted and waiting for the authority or the provider’s answer. | 
| Incoming messages  | Tile | Messages received or in error that nobody has looked at. Opens Webhooks & Inbox. | 
| Log integrity  | Tile | Verified when the hash chain of the API log is intact; BROKEN with the row that was changed. | 
| Credential vault  | Tile | Not set up, Locked or Unlocked. | 
| Next scheduled run  | Tile | The next pull, status check or retry that the scheduler will start. | 

Good to know
- The scheduler (device pulls, bank statements, status checks, retries) works while this ERP is open in a browser. The dashboard says so at the bottom; for unattended operation use the gateway.
- Needs attention is worked out from the messages and the status; it is never typed. An extension that is paused (by you, or automatically after too many failures in a row) shows there until you resume it.
- With no extension yet, the page shows a short note that points to Add New Extension and to the demonstration data.   

### Extensions

Users & Settings › Extensions & API Hub › Extensions 

The list of all the connections you configured, and the configuration window of each. Select a row to open the window. It has five tabs: Connection, Data Mapping, Triggers, Error Handling & Logs and Test, and a check at the top that tells what is still missing before the extension can work.How to use it
- In the list, filter by type or status, or search by name. Excel and Print / PDF export the list. + Add Extension opens the catalogue.
- Select a row. The title bar shows the extension number, its type, its status (Draft, Active, Paused) and its mode (Simulation or Live). The buttons are Switch on (or Resume), Pause, Copy, Delete and Close.
- Connection: name, environment (Sandbox or Production), the Simulation switch, the route (direct from the browser or through the gateway), the simulator behaviour, the address and authentication, the credentials and the settings that belong to this connector (for example the Saudi VAT number of the seller, or the device address).
- Data Mapping: which field of the ERP goes to which field of the service. The e-invoice extensions have a fixed, tested mapping that is shown for information; a custom REST, SOAP or webhook connector lets you choose the fields and the format.
- Triggers: when it runs: Event (when a sales invoice, credit note, receipt, purchase invoice, payment, payroll or approved timesheet is posted), Schedule (every n minutes, or daily at a fixed time) or Manual. Add Only when rules to limit it, for example customer.country = Saudi Arabia.
- Error Handling & Logs: the number of retries, the minutes between tries, fixed or growing waits, the time-out and the number of failures in a row after which the extension is paused. Below are its failed and waiting messages and its latest calls.
- Test: build a sample invoice (the XML and the QR code are shown, nothing is sent), run a Dry run of a device or bank pull, or send a real document now through this extension.

_[Screenshot: The list of extensions]_

The list of extensions

_[Screenshot: The Connection tab of the KSA ZATCA extension]_

The Connection tab of the KSA ZATCA extension

_[Screenshot: The Data Mapping tab of an attendance device: device users to Employee IDs]_

The Data Mapping tab of an attendance device: device users to Employee IDs

_[Screenshot: The Triggers tab]_

The Triggers tab

_[Screenshot: The Error Handling &amp; Logs tab]_

The Error Handling & Logs tab

_[Screenshot: The Test tab]_

The Test tab

Fields on the Connection tab (every extension)
| Field | Type | What to enter / options | 
| General | 
| Name required | Text | The name shown in every list. Required. | 
| Environment  | List | Where the service is: Sandbox (test) or Production.

Sandbox · Production | 
| Simulation  | List | Yes: nothing leaves the ERP and the built-in simulator answers. No: the real service is used, if Live mode is on in Settings & Security.

Yes: nothing leaves the ERP · No: use the real service | 
| Route  | List | How the call reaches the service. Services that cannot be reached from a web page (ZATCA, devices, SFTP, SMTP) need Through the gateway for live use.

Direct from the browser · Through the gateway | 
| Simulator behaviour  | List | Only for simulation: make the simulator fail on purpose to see how the queue, the retries and the alerts behave.

Works normally · Service unavailable (503): retried · Wrong credentials (401) · Message rejected (400/422) | 
| Endpoint and authentication | 
| Endpoint URL required | Text | The address of the service. It must be https (http only for localhost). Placeholders such as {{doc.no}} are replaced by values of the document. | 
| Authentication  | List | How the service identifies the ERP.

None · API key (header) · API key (query) · Bearer token · Basic · OAuth2 (client credentials) · HMAC signature · ZATCA CSID | 
| Credentials | 
| Where the secrets are kept  | List | In this ERP: encrypted vault (needs the vault) or At the gateway (not stored here): the ERP sends only the extension number and the gateway adds the secrets.

In this ERP: encrypted vault · At the gateway (not stored here) | 
| Secret fields  | Password | Client ID and secret, API key, token, user and password, according to the authentication. A secret is never shown again after Save credentials; enter it again to replace it. | 

Good to know
- The check lines at the top of the window. A red line (for example a missing name, trigger or credential) stops Switch on and says what to do; an amber line is a warning (for example “Live mode is off”, or an identifier that is not entered yet) and does not stop it.
- A paused extension sends nothing. An extension in Draft is also silent: Switch on makes it Active and records the date of the first activation.
- Copy makes a Draft with the same settings, but without the secrets and without the onboarding steps. Delete asks for confirmation, removes the waiting messages and keeps the API log. An extension that has e-invoices in the register cannot be deleted, because the counter and hash chain belong to it: pause it instead.
- A paused extension is also paused automatically when the number of failed messages in a row that you set in Error Handling is reached; Resume starts it again.   

### Add Extension (Catalogue)

Users & Settings › Extensions & API Hub › Add Extension (Catalogue) 

The catalogue of connectors, in four groups: Tax & Regulatory (KSA ZATCA, UAE e-invoicing), Hardware & IoT (ZKTeco, Suprema, Hikvision, a device server with a JSON API), Banking & Payments (bank statements, payment notifications) and Communication & Workflow (WhatsApp, e-mail, SMTP, outgoing and incoming webhooks, custom REST and SOAP). Each card says what the connector does, whether it runs from the browser or needs the gateway for live use, and what it is connected to in the ERP (E-invoicing, Time Management, Bank reconciliation, Events).How to use it
- Choose the card of the connector and select it. Give the extension a name (the catalogue suggests one).
- The extension is created as a Draft in simulation, with sensible settings, and its configuration window opens.
- Complete the Connection tab and test it. When all is ready select Switch on.

_[Screenshot: The catalogue of connectors]_

The catalogue of connectors

Good to know
- Adding an extension does not send anything and does not change any document.
- A connector marked Live needs the gateway works in simulation without it; only the real connection needs the gateway.
- Need something that is not in the list? Custom REST API and Outgoing webhook post any JSON or XML to a web address, Custom SOAP service sends an XML envelope, and Incoming webhook receives messages from outside.
- A user needs the permission Create and change extensions to add one.   

### Connector recipes

Users & Settings › Extensions & API Hub › Connector recipes 

Step-by-step set-ups for the four connections that are asked for most. They use the screens described above; read the overview first.

#### KSA: ZATCA e-invoicing (Fatoora Phase 2)

For a Saudi entity that must issue e-invoices in the ZATCA format. The ERP builds the UBL 2.1 invoice and the Hub reports or clears it; signing needs the gateway.How to use it
- In Add Extension choose KSA · ZATCA E-Invoicing (Fatoora Phase 2).
- On the Connection tab fill in the Seller (the Saudi VAT number of 15 digits, commercial registration, street, building, district, city and postal code) and the Invoice settings (invoice type: Automatic, always standard or always simplified; unit, payment means and the reason codes for zero-rated, exempt and out-of-scope supplies, to be confirmed with your tax adviser).
- Choose Environment: Sandbox, Route: Through the gateway and keep the secrets At the gateway. Add the signing function (zatcaSign, with the ZATCA SDK or a certified library) and the onboarding function (zatcaOnboard) to the gateway’s hooks.js.
- Run the Onboarding steps one by one: create the signing key and request (CSR), get the compliance CSID with the OTP of the Fatoora portal, run the compliance invoice checks, get the production CSID.
- On the Test tab Build a sample invoice and read the XML and the QR code; then post an invoice and watch it in the register.
- Go to production only after the sandbox and the compliance checks are clean: change Environment to Production, set Simulation to No and switch Live mode on.

Invoices in another currency than SAR are converted to SAR for the tax amount with the rate of the document, and the register shows a warning. The e-invoice chain (counter and previous hash) must not be broken: the Hub sends ZATCA invoices one at a time, in order.

#### UAE: e-invoicing through an Accredited Service Provider (PINT AE)

The ERP builds the PINT AE invoice (UBL 2.1) and submits it to the Accredited Service Provider you appoint; the provider validates it, delivers it over the Peppol network and reports to the tax authority. Every provider has its own API: copy the settings from its guide.How to use it
- Choose UAE · E-Invoicing (Peppol PINT AE) in the catalogue.
- Enter the provider’s submission address, choose the authentication (API key, bearer token, OAuth2 …) and, if the secrets are kept in the ERP, set up the vault and save the credentials.
- Under Service provider choose how the document is submitted (XML document or JSON wrapper with the base64 document), the status address, the paths of the id and the status in the provider’s answer, and how many times to ask for the status.
- Under Your identifiers enter the TIN (the 10-digit tax identification number, used as the Peppol endpoint), the trade licence number, and the category of zero-rated lines, the payment means and the unit code.
- Test with the provider’s sandbox. The invoices appear in the register as Submitted and become Delivered when the provider answers.

_[Screenshot: The Connection tab of the UAE e-invoicing extension]_

The Connection tab of the UAE e-invoicing extension

The UAE introduces e-invoicing in phases that depend on turnover, with an appointment of the provider before each start date. The dates and the data model come from the Ministry of Finance and the Federal Tax Authority; confirm them, and your provider’s API, before going live.

#### Attendance devices into Time Management

Fingerprint or face terminals give raw punches. The Hub reads them and hands them to Time Management › Data Ingestion, where they pass the same checks as an Excel file.How to use it
- Choose ZKTeco biometric terminal, Suprema BioStar 2, Hikvision access terminal or Device server or middleware with a JSON API.
- In the Device section enter the IP address and port (ZKTeco: 4370), the serial number if you have it, how many days the first pull looks back, the clock offset (Gulf time is +4) if the device sends UTC, and how to tell IN from OUT (the device’s own state, or alternating by time).
- On the Data Mapping tab list the users whose number in the device is different from the Employee ID (any other number is taken as the Employee ID).
- On the Triggers tab choose Schedule (for example every 15 minutes) or Manual.
- On the Test tab run a Dry run (it reads and checks without saving), then Pull now. The result says how many new punches were added, for how many employees, and the import number (IMP-…).

_[Screenshot: Time Management › Data Ingestion › API sync lists the connected devices with Pull now]_

Time Management › Data Ingestion › API sync lists the connected devices with Pull now

Punches that fail a check (employee not found, outside the employment dates, period locked) are listed in the result and the good ones are kept. A punch that was loaded before is recognised and skipped, so reading the same period twice is harmless. An import can be undone from Imports in Time Management until its month is reconciled. A TCP connection to a device needs the gateway inside your network, with a function devicePull for your device in hooks.js; a device server with a JSON API can be called directly.

#### Bank statements into Bank Reconciliation

Fetches the statement (the bank’s API, or an SFTP folder through the gateway), reads MT940 or CAMT.053 (or JSON) and loads the lines into Bank Statement Lines, optionally matching them with the ledger.How to use it
- Choose Bank statement auto-sync. Choose the bank account (ledger), the statement format (Auto, MT940, CAMT.053 or JSON) and how it arrives: Gateway (SFTP folder) with the folder and file name pattern, or the API (statement address).
- Choose how many days to look back and whether to match with the ledger after loading. Choose a schedule (for example daily at 07:30).
- No automatic connection yet? Select Load a statement file now… and pick the file you downloaded from the bank’s portal: it goes through the same checks and the same register.

_[Screenshot: The bank statement extension]_

The bank statement extension

Lines already loaded are recognised and skipped. Reading the same statement twice is harmless.   

### Queue & Retries

Users & Settings › Extensions & API Hub › Queue & Retries 

Every message that leaves the ERP waits here until it is delivered. A message that cannot be delivered is tried again; after the last try it stays here as Failed, so that nothing is lost silently. Messages for e-invoicing services leave strictly one at a time, in order, so the counter chain of ZATCA never has a gap.How to use it
- Choose a tab: Waiting or retrying, Failed, Delivered or All, and, if you wish, one extension.
- Select a row to open the message: when it was created, how many tries it had, who started it and the calls it made, with the HTTP answer of each.
- Send now tries a waiting message at once; Retry puts a failed one back; Cancel removes it from the queue (after a confirmation). Run the queue now and Retry all failed work on the whole list.
- Correct the cause before you retry: a message that the service rejected (a wrong field, a refused invoice) or whose credentials were refused is not retried by itself.

_[Screenshot: The queue]_

The queue

_[Screenshot: One message with the calls it made]_

One message with the calls it made

Table columns: Queue no. · Extension · Event · Reference · Status · Tries · Next attempt · Message

How a failure is handled
| Field | Type | What to enter / options | 
| Service unavailable, time-out, too many requests (503, 429, 408 …)  | Retry | The message waits and is tried again after the pause set in the Error Handling tab (fixed, or doubling after each failure). | 
| Wrong credentials (401, 403)  | Failed | Not retried. Correct the credentials, then Retry. | 
| Rejected by the service (400, 422 …)  | Failed | Not retried. The service’s reason is shown; correct the document or the setting, then Retry or Send again. | 
| The connector needs the gateway or an add-on (501)  | Failed | Explained in the message: for example that the gateway needs the ZATCA signing function. Not retried. | 
| Too many failures in a row  | Pause | If set, the extension is paused after that many failed messages in a row, and shows Needs attention. | 

Good to know
- The queue is cleaned in Settings & Security › Clean-up: only delivered and cancelled messages older than the days you choose are removed. Failed and waiting ones are never removed automatically.
- A user needs Run extensions, retry failed messages and pull device data to use the buttons; others can only look.   

### API Logs

Users & Settings › Extensions & API Hub › API Logs 

A record of every call that the Hub made or received: what was sent, what came back and when. Rows are chained with a hash: each row holds the fingerprint of the one before it, so a row that is changed or removed afterwards is detected. Passwords, keys and tokens are replaced by stars and never written to the log.How to use it
- Filter by extension, result (Succeeded or Failed), direction (Sent or Received) and the From and To dates. Excel exports what is shown.
- Select a row. The window shows the call, the address, the HTTP status, the duration, the try, the reference (the document number), the event, the mode (Simulation or Live), the user, and the Request and the Response as they were.
- Select Verify integrity to check the whole chain. The result is also shown on the dashboard (Log integrity).

_[Screenshot: The API log]_

The API log

_[Screenshot: One call: request, response and the row hash]_

One call: request, response and the row hash

Table columns: No. · Time · Extension · Call · Reference · HTTP · ms · Try · Result

Good to know
- The Request and Response boxes are shown only to users who have the permission Read request and response payloads; others see “hidden for your role”.
- A call made in simulation is marked sim and never reached an authority.
- The log keeps the rows of the last 90 days and at most 1,500 rows (both can be changed in Settings & Security › General). When old rows are removed the chain stays valid. Because the ERP keeps its data in the browser, large payloads are cut at the size set there, and successful answers are kept short.
- The log is evidence of what was sent, not of what the authority accepted. The accepted e-invoices are in the E-Invoice Register, which is never cleaned automatically.   

### Webhooks & Inbox

Users & Settings › Extensions & API Hub › Webhooks & Inbox 

Outside systems (a payment provider, a bank, a device server) call a web address when something happens. The gateway keeps the message, because the ERP in a browser cannot be called from outside. The ERP then collects the messages, checks the signature and acts on them. This page lists the endpoints you gave out and the inbox of messages that arrived.How to use it
- Select + Payment notifications or + Other incoming webhook. An extension is created and opens; in its Connection tab choose the name in the web address, what to do with a message (Log only, Payment notice, E-invoice status, Punches (device push)), the signature header and the signing secret.
- Give the address shown in the window (https://your-gateway/hooks/payments) to the other system, together with the signing secret.
- Select Collect now, or let the scheduler collect every few minutes. Each message becomes a row in the inbox with its status.
- Select a message to read its text and headers. A message in error can be processed again; a message that you do not need can be ignored.

_[Screenshot: Endpoints and inbox]_

Endpoints and inbox

_[Screenshot: An incoming webhook for payment notifications]_

An incoming webhook for payment notifications

Status of an incoming message
| Field | Type | What to enter / options | 
| Received  | Status | Collected and waiting to be handled. | 
| Processed  | Status | Handled. A payment notice says which sales invoice it matches and whether the amounts agree. | 
| Ignored  | Status | You set it aside, or it is a type that needs no action. | 
| Error  | Status | The message could not be understood; open it, correct the settings and choose Process again. | 
| Rejected  | Status | The signature is missing or wrong: the message is not acted on. | 

Good to know
- A payment notice never posts a receipt by itself. It tells you which invoice it matches and whether the amount agrees; you record the receipt in Customer Receipts.
- The signature is an HMAC SHA-256 of the message body with the signing secret. A message without a valid signature is Rejected and never acted on.
- The ERP keeps the latest 300 messages. Clean-up removes the processed and ignored ones.
- Webhooks need the gateway and a public address (https) for it.   

### E-Invoice Register

Users & Settings › Extensions & API Hub › E-Invoice Register 

The register of every invoice and credit note that was prepared for the tax authority, with its counter, hash, UUID, status and the authority’s answer. For KSA the register keeps the ICV / PIH chain (invoice counter and previous-invoice hash) that ZATCA checks. It is the evidence that an invoice was sent and what was said, and it is never cleaned automatically.How to use it
- The tiles show In the register, Accepted (reported, cleared or delivered), In progress (awaiting the answer), Rejected (must be corrected) and Posted, not sent (posted since the extension was switched on but never sent).
- Filter by scheme (ZATCA or UAE), status and dates. Select a row to see the invoice, its UUID, hash and previous hash, the QR code, the message of the authority and its warnings, and the XML that was prepared.
- Send missing queues every invoice that was posted but not sent. Send again (or Send now) in the window of a rejected invoice sends a corrected copy after you fixed the cause.
- Check the counter chain verifies that the counters and previous hashes of the ZATCA invoices follow each other without a gap or a change.
- Open the invoice in the window opens the sales invoice itself.

_[Screenshot: The register of e-invoices]_

The register of e-invoices

_[Screenshot: One e-invoice: counter, hash, QR code and the answer]_

One e-invoice: counter, hash, QR code and the answer

_[Screenshot: The printed invoice carries the QR code and the e-invoice status]_

The printed invoice carries the QR code and the e-invoice status

Table columns: Register no. · Document · Date · Customer · Scheme · Type · Cur. · Total · VAT · Counter · Status · Message

Status of an e-invoice
| Field | Type | What to enter / options | 
| Generated  | Status | Built by the ERP and waiting to be sent or for the answer. | 
| Submitted  | Status | Sent to the provider or the authority; the answer is awaited (UAE: the status is polled or received by webhook). | 
| Cleared  | Status | ZATCA cleared a standard invoice (B2B). | 
| Reported  | Status | ZATCA accepted a simplified invoice (B2C). | 
| Delivered  | Status | The UAE provider delivered the invoice to the buyer’s access point and reported it. | 
| Rejected  | Status | The authority or provider refused it, with the reason. Correct and send again. | 

Good to know
- Printed invoice. A sales invoice or credit note that an active e-invoice extension is responsible for prints with its QR code and the e-invoice status (reference, UUID and hash). Choose in Settings & Security › General whether printing is allowed before the authority accepted it: allow it, say nothing, allow it and show a warning on the screen (the warning is not printed), or do not allow until the authority has accepted it.
- A simulated row says so (“simulation: never sent to an authority”), on the screen and on the paper, so that a test cannot be mistaken for a real e-invoice.
- KSA, standard or simplified. With the setting Automatic, an invoice whose customer has a VAT number is a standard invoice (B2B, cleared by ZATCA before it is given to the customer) and one without is simplified (B2C, reported within 24 hours). You can also force one type.
- Tax rules require the e-invoices and their records to be kept for several years. Export the register to Excel and take the ERP backup regularly; confirm the retention period with your tax adviser.   

### Settings & Security

Users & Settings › Extensions & API Hub › Settings & Security 

The place where the Hub is switched live, the gateway and the credential vault are set up, roles are given, the demonstration data is loaded and old records are cleaned. It has seven tabs: General, Gateway, Vault, Roles, Demo data, Clean-up and How it works. Everything here needs the permission Hub settings, roles, clean-up and demonstration data.General

Live mode is the master switch: while it is off, every extension is answered by the simulator, whatever its own setting. Switch live mode on… asks you to confirm, because a document accepted by an authority cannot be withdrawn. The same tab sets the scheduler (run it in this browser or not), the default time-out, the minutes of idle time after which the vault locks, the size kept per log row, the log retention (days and rows), the QR code and status on the printed invoice, the rule for printing an invoice that is not yet accepted, and the allowed hosts (when you list hosts, only those and their sub-domains can be called).Gateway

Enter the gateway address (https; http://localhost is accepted for tests) and the gateway key, Save the key, and Test the gateway. The page shows the starter gateway script with the steps to run it, and the contract that the ERP uses, so that you can write your own. The same program also sends the emails of Email Settings (gateway version 1.1 or newer).Vault

Passwords, keys and tokens are stored encrypted in the ERP’s data (AES-256-GCM; the key is made from your passphrase with PBKDF2, 150,000 rounds). The passphrase is never stored: Set up the vault once, write the passphrase down, and unlock the vault when you enter or replace a secret. Change the passphrase re-encrypts every secret; Forget everything… removes all saved credentials. The table shows where each extension keeps its secrets (vault or gateway) and which fields are saved.Roles

Tick the six permissions for each role, or give a role a preset (Integration Officer, Operator, Viewer, Administrator). The Administrator can always do everything.Demo data

Load the demonstration data creates six extensions in simulation (KSA ZATCA, UAE e-invoicing, a ZKTeco terminal, a bank statement sync, payment notifications and WhatsApp), sends your latest posted invoices through the e-invoicing ones, pulls the device and the bank once and adds an incoming payment notice. Remove the demonstration data takes everything back, including the demo punches in Time Management and the demo statement lines in Bank Reconciliation (unless a period is locked or reconciled).Clean-up

Removes old technical records: delivered and cancelled queue messages, processed and ignored inbox messages, and log rows beyond the retention rules. Documents and the e-invoice register are never removed here.How it works

A short explanation inside the ERP: simulation first, events and queue, what runs in the browser and what needs the gateway, e-invoicing, devices, security and limits.

_[Screenshot: General: live mode, scheduler, log retention, printed invoice, allowed hosts]_

General: live mode, scheduler, log retention, printed invoice, allowed hosts

_[Screenshot: Gateway: address, key, test and the starter script]_

Gateway: address, key, test and the starter script

_[Screenshot: Vault: where each extension keeps its secrets]_

Vault: where each extension keeps its secrets

_[Screenshot: Roles: the six permissions and the presets]_

Roles: the six permissions and the presets

_[Screenshot: Demonstration data]_

Demonstration dataHow to use it
- Gateway. Copy the starter script from the Gateway tab, save it as gateway.js on a server (Node 18 or newer), start it with GATEWAY_KEY=your-long-secret node gateway.js, put it behind https, then enter its address and the same key and select Test the gateway.
- Vault. Select Set up the vault, enter the passphrase twice and keep it safe. Then enter the credentials in each extension.
- Roles. Give the clerks Integration Operator, the finance manager Integration Officer and the IT administrator Integration Administrator.
- Live. When one extension is tested, set its Simulation to No, then switch Live mode on here.

Good to know
- The vault protects stored data (for example a backup file); it does not protect against someone sitting at an unlocked session. Keep the most sensitive secrets, such as the ZATCA private key and bank logins, at the gateway (At the gateway (not stored here)).
- Switching live mode off again is immediate and safe: queued messages stay queued and the simulator answers again.
- The allowed hosts list limits the damage if an extension is set up wrongly, because the ERP refuses to call any other host.  

### Reports  

### Audit Trail

Users & Settings › Reports › Audit Trail 

A read-only log of every action: time, module, action and record, with the user and role. Search for a document number to see its history (the Actions menu of a document opens this filtered to it). Export to Excel for audit. 

_[Screenshot: Audit Trail]_

The Audit Trail screen 

Columns shown: Time · Module · Action · Record   

Reference

# Glossary & FAQ
