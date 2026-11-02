## How accounting happens 

You rarely type journals by hand. Each transaction carries a posting rule: when you post it, the ERP builds the journal from the document and the default accounts in Account Mapping and the item, asset, supplier or customer masters. The Finance hub shows this as Transaction → Accounting event → Posting rule → Journal → GL. Some examples: 

| Document | Debit | Credit |  
| GRN (goods received) | Inventory / expense (or project cost for services) | GRN Payable (goods received not invoiced) |  
| Purchase invoice against a GRN | GRN Payable + Input VAT | Accounts Payable (supplier) |  
| Purchase invoice without GRN | Inventory / expense + Input VAT | Accounts Payable |  
| Supplier payment | Accounts Payable | Bank / Cash |  
| Sales invoice | Accounts Receivable (customer) | Revenue + Output VAT |  
| Customer receipt | Bank / Cash | Accounts Receivable |  
| Payroll run (JV) | Salary and overtime cost per payroll project (project WIP, admin…); leave, EOSB and benefit provision expense | Employee clearing (salaries payable); leave, EOSB and benefit provisions |  
| Payroll payment | Employee clearing (salaries payable) | Bank / Cash |  
| Depreciation run | Depreciation expense | Accumulated depreciation |  

 

Use Accounting Entry in the Actions menu to see the exact lines before or after posting.
