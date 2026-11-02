## Entry forms 

Forms open in a window over the list. The title shows New or Edit, the current status and the document number.  
- Sections. Fields are grouped under headings such as General information, Lines, Additional details and Remarks. Select a heading to fold or unfold it. Additional details starts folded and shows how many fields it holds. 
- Required fields carry a red *. The form will not save until they are filled. 
- Automatic numbers and codes. Document numbers (LPO-000001) and master codes (SUP-0001, ITM-0001, EMP-0001) are created by the system and cannot be typed. Their format is set in Document Numbering. 
- Drop-down lists are filled from the masters. If a list is empty, create the master record first (for example a supplier before an LPO). Long lists are searchable: start typing to narrow them. 
- Keyboard: Ctrl+S saves, Esc closes without saving.  

_[Screenshot: An entry form with sections, line items and running totals]_

An entry form with sections, line items and running totals 

### Line items 

Purchase, sales and stock documents have a Lines table. Each line has a Type that decides what the second column lists:  InventoryA stock item from the Items master. It updates stock quantities and values in the chosen store. AssetAn asset from the Asset Register. Its cost goes to the asset's cost account. ServiceA service item. Linked to a project and activity, it becomes project cost. GL AccountAny posting ledger from the chart of accounts, for charges that are neither stock nor assets (invoices and notes only).  

Enter Qty, Rate, Disc % and VAT % (5 by default). Project, Activity and Cost centre on the line carry the cost to the right place. Source qty shows, for converted lines, the quantity on the earlier document, what was already used and what remains. The bar under the table shows Subtotal, Discount, Taxable amount, VAT and Total. Use + Add line to add a row and × to remove one.
