## Common questions

### A drop-down list on a form is empty.

The list comes from a master. Create the master record first (for example a supplier, project, store or bank account), then reopen the form.

### I cannot find the Approve or Post button.

Your role does not have the Approve / post permission, or an approval rule assigns this amount to another role. Ask the administrator.

### The system says the period is closed.

Finance has locked that month in Period Control. Ask Finance to reopen it, or date the document in an open month.

### I cannot edit a posted document.

Posted documents are locked. Use Actions → Void / Reverse, then copy the document, correct it and post again.

### I cannot delete a document.

Delete is only for drafts with no postings and no later documents. Use Void / Cancel instead; the Actions menu explains why delete is blocked.

### My data is missing on another computer.

Data is stored in each browser. Import the latest backup on that computer in Backup Management.

### Salary figures show ••••.

Your role does not have Salary and bank data permission.

### An account shows “(not mapped: …)” in the accounting entry.

A posting key has no ledger. Set it in Finance → Account Mapping.

### I cannot release a production order.

The message says why: materials are short (issue a purchase requisition from MRP, or allow release with shortages in Manufacturing Settings), the item or work centre is inactive, or the order needs approval by another role.

### A step cannot be completed.

Material of the step has not been issued, the previous step has not passed units on, the work centre is blocked or under maintenance, or the order is on hold or quality hold. Open Shop-Floor Control to see which.

### The order is on quality hold.

A mandatory test failed. Open the non-conformance report in Rework, Scrap & NCR and apply a decision; the hold is lifted when no unit of the order is on hold.

### I cannot post an invoice that carries a voyage.

Voyage and vessel are checked at posting: the voyage is closed (reopen it, or post to another voyage), the vessel has been sold, or a marine sales invoice belongs to a voyage that has not started. The message names which.

### The voyage or the vessel is not offered in the invoice.

Vessels appear once they are linked in Vessel Master. A voyage must have started and not be closed to receive postings; a planned voyage is not offered for invoices.

### The Vessel P&L shows no revenue.

Revenue appears when the sales invoice is posted, and only if the invoice carries the voyage. Marine invoices made from Marine Invoicing carry it automatically; for an invoice made in Sales, choose the voyage in its details.

### The month will not Reconcile & Approve.

The button is dim until the exceptions of the selection are all resolved. Other reasons: the month has not ended yet (a period can be reconciled after its last day); you chose All categories and some employees have no payroll category; or a category of the month was already reconciled alone. The message tells which.

### Generate timesheets skips an employee.

The list under the button gives the reason: the period is not reconciled for the employee’s category, an exception is still open for him, a timesheet already exists (tick Refresh the drafts that exist for a draft), or the timesheet is already pending, approved or processed. HR must also have approved the Monthly Parameters of the month.

### The Payroll Run does not include an employee.

Step 1 loads only approved timesheets of the chosen category and month. The Payroll review panel says how many employees have none and lists them under who?. Approve their timesheet in Time Management, or choose the right category.

### The punch file was rejected.

A file with even one bad row is rejected so that data is never half loaded. The list shows the line, the Emp ID, the date, the time and the reason of each bad row (employee not found, invalid time, type not IN or OUT, employee not employed that day, period locked). Correct the file and load it again, or switch on Accept the valid rows of a file that has errors in Settings & Roles.

### A time keeper must not see HR & Payroll.

Create the standard roles in Time Management › Settings & Roles (Time Keeper, Time Supervisor, Time Manager). Each is given the module Time Management only in Role Permissions, and the permissions inside the module are set on the tab Roles and permissions. Switch User security on, so that the roles apply.

### A row of the Payroll Run is yellow.

The employee’s payable hours (attendance, leave and sick hours) differ from the budget hours of the month by more than the tolerance (1 hour by default). Type the reason in the Payroll review panel; the payroll cannot be approved until every yellow row has one. Bonuses and deductions are typed in the same panel.

### The extension will not switch on.

The window shows the reasons in red at the top: a name, a trigger (event or schedule), a missing credential or gateway address for a live extension, or a setting that the connector needs (for example the Saudi VAT number). Correct them and select Switch on again. Amber lines are only warnings.

### Nothing is sent although the extension is Active.

A real message needs three things: the extension’s Simulation set to No, Live mode switched on in Settings & Security, and the credentials (and the gateway, where the connector needs it). Otherwise the simulator answers, and the rows of the log are marked sim.

### A message is stuck as Failed.

Open it in Queue & Retries: the message says why. A refused credential or a rejected document is not retried by itself; correct the cause and select Retry. A message that says that the connector needs the gateway or an add-on function means that the gateway must be installed or extended, see Connector recipes.

### The ZATCA invoice is not signed or the onboarding fails.

A browser cannot sign with the curve that ZATCA requires, so the gateway does it, with a zatcaSign function in its hooks.js (the ZATCA SDK or a certified library). The starter gateway does not include it. Until it is added, ZATCA jobs answer that they need it and the invoices wait in the queue.

### The device punches do not appear in Time Management.

Check the Test tab: Dry run shows what was read and which punches were refused (employee not found, outside the employment dates, period locked). Device users whose number differs from the Employee ID are listed in Data Mapping. A TCP connection to a device needs the gateway with a devicePull function.

### I forgot the vault passphrase.

It cannot be recovered. Use Forget everything… in Settings & Security › Vault, set the vault up again and enter the credentials again. Secrets that are kept at the gateway are not affected.

### The printed invoice has no QR code.

The QR code is printed for a sales invoice or credit note that an active e-invoice extension is responsible for, when Print the QR code and the e-invoice status is Yes (Settings & Security › General). The ZATCA code appears once the invoice was prepared; a rejected invoice prints without it.

### Log integrity says BROKEN.

A log row was changed or removed outside the Hub (for example by editing a backup). The dashboard names the first row that no longer matches. The chain remains valid after the Hub’s own clean-up. Keep the ERP backups; the E-Invoice Register is the record of what was accepted.

### A ledger account is refused on a line of a direct invoice.

The invoice posts to the customer or supplier account and to Output or Input VAT by itself, so those accounts, the fixed asset control account and any account set to no manual posting cannot be chosen on a line. Choose the income or expense account, and a tax code for the VAT. For a fixed asset use Fixed Assets › Acquisitions.

### Save and post says that a TRN is needed.

A tax invoice must show the customer’s TRN (for a sale) or the supplier’s TRN and invoice number (when input VAT is claimed). Enter them on the form; they are saved to the master if it had none. For a customer that is not registered for VAT choose the type Simplified tax invoice. The company’s own TRN is set in the Company master.

### I cannot type the VAT amount.

The VAT is calculated from the tax code and locked on direct invoices and journal vouchers. To change it, change the amount or the tax code. On payment and receipt vouchers an administrator can allow typing again in Voucher Control › Settings.

### The journal voucher does not balance after I chose a tax code.

The VAT line that the system generates counts in the totals. Add a line for the VAT to the other side, or select + Add balancing line, which takes the VAT into account.

### How do I give a discount or allowance on a direct invoice?

Add a line on the account that holds the discount (for example Sales Returns) with Debit on a sales invoice, or Credit on a purchase invoice, and the same tax code as the lines it reduces. The VAT is reduced with it. Keep the invoice total above zero; to reduce an invoice that was already issued use a credit note.

### A table or a field I need is missing in Custom Reports.

The Data Dictionary shows only what your role may open. A module that is not in your role, and sensitive fields such as Basic Salary and bank details, are hidden. Ask the administrator to give your role the module or the “sensitive data” permission.

### The report says it exceeds 10,000 rows.

Only the first 10,000 rows are listed. Add a filter (for example the dates) or open the report in the builder and tick Group on a column, so that it shows totals per customer, project or month instead of every record.

### A saved report shows fewer columns for me than for its owner.

A column that your role may not see is left out when you run the report, and a yellow note names it. Nothing is wrong with the report.

### I cannot change a report that a colleague shared with me.

Only the person who made a report, or the administrator, can change it. Select ⧉ Copy to get your own private copy and change that.

### How do I get sales per customer for each month?

In the builder choose Sales Invoices, add Customer, Date (show as Month) and the amount, tick Group on Customer and Date, and leave the amount on Sum. The template Sales by customer (summary) does the same by customer. 

ERP User Manual · prepared for the users of the company ERP system. Screens and options described here match the ERP version of 25 October 2026.   ↑ Top
