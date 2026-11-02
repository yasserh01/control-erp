# Data catalogue (extracted from ERP_System v108)

Every module, section (screen), document prefix and field of the prototype. Generated automatically — do not edit by hand.

| Module | Sections | Fields |
|---|---|---|
| Overview | 0 | 0 |
| Master Data | 25 | 288 |
| Projects | 26 | 71 |
| Purchase | 25 | 97 |
| Sales | 25 | 129 |
| Inventory | 15 | 94 |
| Fixed Assets | 11 | 89 |
| HR & Payroll | 75 | 108 |
| Legal & Generals | 8 | 0 |
| Finance | 53 | 136 |
| Reports | 62 | 0 |
| Users & Settings | 14 | 34 |
| Manufacturing | 37 | 156 |
| Marine Fleet | 13 | 71 |
| Time Management | 12 | 14 |
| **Total** | **401** | **1287** |


## Overview (`ov`)
KPIs and drill-down


## Master Data (`md`)
Organisation, parties, items, accounts

### Departments — `departments`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Manager | text |  |
| Cost Centre | link | costcenters |
| Status | choice | Active / Inactive |

### Designations — `designations`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Department | link | departments |
| Grade | text |  |
| OT Eligible | choice | Yes / No |
| Status | choice | Active / Inactive |

### Employees — `employees`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Nationality | text |  |
| Emirates ID | text |  |
| Department | link | departments |
| Designation | link | designations |
| Project | link | projects |
| Date of Birth | date |  |
| Place of Birth | text |  |
| Join Date | date |  |
| Basic | number |  |
| Housing | number |  |
| Transport | number |  |
| Other | number |  |
| IBAN | text |  |
| Status | choice | Active / Inactive / Terminated |
| Last Rejoin Date | date |  |
| Last Leave Date | date |  |
| OT Eligible | choice | No / Yes |
| EOSB Eligible | choice | Yes / No |
| Vacation Pay Eligible | choice | Yes / No |
| Air Ticket Eligible | choice | No / Yes |
| Air Ticket Monthly | number |  |
| Benefit-1 Eligible | choice | No / Yes |
| Benefit-1 Monthly | number |  |
| Benefit-2 Eligible | choice | No / Yes |
| Benefit-2 Monthly | number |  |
| Salary Debit Acct | link | coa |
| Salary Credit Acct | link | coa |
| EOSB Prov Debit Acct | link | coa |
| EOSB Prov Credit Acct | link | coa |
| Leave Prov Debit Acct | link | coa |
| Leave Prov Credit Acct | link | coa |
| Benefits Prov Debit Acct | link | coa |
| Benefits Prov Credit Acct | link | coa |
| Opening Leave Days | number |  |
| Opening Leave Prov | number |  |
| Opening EOSB Prov | number |  |
| Employee Company | link | companies |
| Paying Company | link | companies |
| Gender | choice | Male / Female |
| Marital Status | choice | Single / Married / Divorced / Widowed |
| First Name | text |  |
| Middle Name | text |  |
| Last Name | text |  |
| MOL ID | text |  |
| MOL ID Issue | date |  |
| MOL ID Expiry | date |  |
| Personal No | text |  |
| Grade | text |  |
| Employment Type | choice | Full-time / Part-time / Contract / Temporary |
| Contract Start | date |  |
| Contract End | date |  |
| Probation End | date |  |
| Cost Type | choice | Direct project / Multi project / Direct manufacturing / Indirect manufacturing / Site overhead / Admin / Sales and marketing / Mixed |
| Allocation Method | choice | Timesheet / Fixed split / Headcount / Revenue / Direct labour hours |
| Default Payroll Project | link | ppc |
| Food | number |  |
| Mobile | number |  |
| Normal OT Rate % | number |  |
| OT-2 Rate % | number |  |
| Holiday OT Rate % | number |  |
| Max OT Hrs | number |  |
| Std Hrs Per Day | number |  |
| Std Working Days | number |  |
| Weekly Rest Day | choice | Sunday / Monday / Tuesday / Wednesday / Thursday / Friday / Saturday |
| Payment Method | choice | WPS / Cheque / Cash |
| Bank Name | text |  |
| Bank Branch | text |  |
| Account No | text |  |
| SWIFT | text |  |
| WPS Agent Code | text |  |
| WPS Routing Code | text |  |
| Cash GL Account | link | coa |
| OT Expense Acct | link | coa |

### Employee Reports — `empr`
_Screen/report (no stored fields)_

### Customers — `customers`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| TRN | text |  |
| Phone | text |  |
| Email | text |  |
| Payment Terms | text |  |
| Credit Limit | number |  |
| Credit Days | number |  |
| Credit Control | choice | Block (override by approval) / Warn only |
| Status | choice | Active / Inactive / Incomplete |
| Address | text |  |
| Country | choice | United Arab Emirates / Saudi Arabia / Bahrain / Kuwait / Oman / Qatar / Other |
| Emirate | choice |  / Abu Dhabi / Dubai / Sharjah / Ajman / Umm Al Quwain / Ras Al Khaimah / Fujairah |
| Delivery Address | text |  |
| Salesperson | text |  |
| Default Project | link | projects |
| Opening Balance | number |  |

### Suppliers — `suppliers`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| TRN | text |  |
| Phone | text |  |
| Email | text |  |
| Portal Access | choice | No / Yes |
| Payment Terms | text |  |
| Retention % | number |  |
| IBAN | text |  |
| Status | choice | Active / Inactive / Incomplete |
| Address | text |  |
| Country | choice | United Arab Emirates / Saudi Arabia / Bahrain / Kuwait / Oman / Qatar / Other |
| Emirate | choice |  / Abu Dhabi / Dubai / Sharjah / Ajman / Umm Al Quwain / Ras Al Khaimah / Fujairah |
| Opening Balance | number |  |
| License Type | choice |  / Trading / Manufacturing / Services / Contracting |
| License Authority | choice |  / Mainland / Free Zone / Offshore |
| Industrial License | choice |  / Yes / No |
| ICV Class | choice | Standard / Government / Free zone authority / Water and electricity / Property / land rent / Local farmer |
| ICV Registration No | text |  |
| ICV Certificate No | text |  |
| ICV Score % | number |  |
| ICV Issue Date | date |  |
| ICV Expiry Date | date |  |
| ICV Certifying Body | text |  |
| ICV Status | choice |  / Valid / Expired / Pending / Not Certified |
| ICV Cost % | number |  |
| ICV Investment % | number |  |
| ICV Emiratization % | number |  |
| ICV Expat % | number |  |
| Preferred Supplier | choice |  / Yes / No |
| ICV Certificate Link | text |  |

### Service Items — `services`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Unit | text |  |
| Rate | number |  |
| VAT % | number |  |
| Expense Account | link | coa |
| Status | choice | Active / Inactive |

### Items — `items`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Sales Description | text |  |
| Category | link | categories |
| UOM | link | units |
| Type | choice | Trading Goods / Finished Goods / Raw Material / Consumable / Service for sale / Stock / Non-stock / Service |
| Can be Sold | choice | Yes / No |
| Can be Purchased | choice | Yes / No |
| Reorder Level | number |  |
| Minimum Price | number |  |
| Sales VAT | choice | Standard (5%) / Zero-rated / Exempt |
| Inventory Account | link | coa |
| Revenue Account | link | coa |
| Cost of Sales Account | link | coa |
| BOM | text |  |
| Routing | text |  |
| Standard Cost | number |  |
| Status | choice | Active / Inactive / Obsolete |
| Barcode | text |  |
| Brand | text |  |
| Manufacturer Part No | text |  |
| HS Code | text |  |
| Country of Origin | text |  |
| Min Stock | number |  |
| Max Stock | number |  |
| Reorder Qty | number |  |
| Lead Time (days) | number |  |
| Preferred Supplier | link | suppliers |
| Subcontract Item | choice | No / Yes |
| Project Cost Type | link | costtypes |
| Purchase Cost Account | link | coa |
| Remarks | text |  |

### Categories — `categories`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Inventory Account | link | coa |
| Cost of Sales Account | link | coa |
| Revenue Account | link | coa |
| Adjustment Gain Account | link | coa |
| Adjustment Loss Account | link | coa |
| Write-down Expense Account | link | coa |
| Provision Account | link | coa |
| Count Frequency | choice |  / Monthly / Quarterly / Half-yearly / Yearly |
| Status | choice | Active / Inactive |

### Units — `units`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |

### Tax Codes — `taxcodes`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Rate % | number |  |
| Type | choice | Input / Output / Zero-rated / Exempt / Reverse charge / Out of scope |
| Applies To | choice | Purchases / Sales |
| Reporting Category | choice |  / Box 1a - Standard rated supplies in Abu Dhabi / Box 1b - Standard rated supplies in Dubai / Box 1c - Standard rated supplies in Sharjah / Box 1d - Standard rated supplies in Ajman / Box 1e - Standard rated supplies in Umm Al Quwain / Box 1f - Standard rated supplies in Ras Al Khaimah / Box 1g - Standard rated supplies in Fujairah / Box 2 - Tax refunds to tourists / Box 3 - Supplies subject to reverse charge / Box 4 - Zero rated supplies / Box 5 - Exempt supplies / Box 9 - Standard rated expenses |

### Chart of Accounts — `coa`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Type | choice | Asset / Liability / Equity / Revenue / Cost of sales / Expense |
| Parent Code | text |  |
| Analysis Type | choice | None / Employee / Vehicle / Project / Asset / Supplier / Customer / Custom |
| Pop-up Template | link | antpl |

### Analysis Master — `paycat`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Category | text |  |
| PAD | text |  |
| Type | choice | Earning / Deduction / Advance / Recovery / Reimbursement |
| Default GL Account | link | coa |
| Debit GL Account | link | coa |
| Credit GL Account | link | coa |
| Affects EOSB | choice | Yes / No |
| Affects Leave | choice | Yes / No |
| Affects Payroll | choice | Yes / No |
| Taxable | choice | Yes / No |
| GOSI Applicable | choice | Yes / No |
| System | choice | Yes / No |
| Status | choice | Active / Inactive |

### Employee Expenses Master — `empexp`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Default GL Account | link | coa |
| Status | choice | Active / Inactive |

### Vehicle Expense Categories — `vehcat`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Default GL Account | link | coa |
| Status | choice | Active / Inactive |

### Job Heads (Cost Elements) — `costel`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Cost Type | link | costtypes |
| Unit | text |  |
| Status | choice | Active / Inactive |

### Cost Centres — `costcenters`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Manager | text |  |
| Status | choice | Active / Inactive |

### Currencies — `currencies`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Base | choice | No / Yes |

### Companies — `companies`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| TRN | text |  |
| MOL Establishment ID | text |  |
| Status | choice | Active / Inactive |
| Arabic Name | text |  |
| Company Type | choice | Operating / Holding / Service company / Project company / Dormant |
| Functional Currency | text |  |
| Rate to Group Currency | number |  |
| Ownership % | number |  |
| Parent Company | link | companies |
| Default Company | choice | No / Yes |
| Include in Consolidation | choice | Yes / No |
| Document Prefix | text |  |
| Colour | choice |  / Teal / Blue / Amber / Rose / Violet / Green / Slate |

### Branches — `branches`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Address | text |  |
| TRN | text |  |

### Stores — `stores`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Location | text |  |
| Project | link | projects |
| Store Type | choice | Main warehouse / Site store / Workshop / Showroom / Consignment / Quarantine or damaged |
| Branch | link | branches |
| Storekeeper | link | employees |
| Cost Centre | link | costcenters |
| Status | choice | Active / Inactive |
| Remarks | text |  |

### Bank Accounts — `banks`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Bank | text |  |
| Account No | text |  |
| IBAN | text |  |
| Currency | text |  |
| GL Account | link | coa |
| WPS Agent Code | text |  |
| WPS Routing Code | text |  |

### Cash Boxes — `cashboxes`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Custodian | text |  |
| GL Account | link | coa |
| Status | choice | Active / Inactive |

### Petty Cash Holders — `pholders`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Holder Name | text |  |
| Employee | link | employees |
| Cash Account | link | coa |
| Float Limit | number |  |
| Status | choice | Active / Inactive |

### Payment Terms — `payterms`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Days | number |  |


## Projects (`pj`)
Planning, budgets, cost control

### Projects — `projects`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Client | link | customers |
| Location | text |  |
| Description | text |  |
| Contract No | text |  |
| Contract Value | number |  |
| Start | date |  |
| End | date |  |
| Manager | text |  |
| Project Cost Account | link | coa |
| Revenue Type | choice | Point in time / Over time |
| Retention % | number |  |
| Revenue Account | link | coa |
| Unbilled Receivable Account | link | coa |
| Retention Receivable Account | link | coa |
| Measurement Method | choice |  / Certified quantities / Approved certificates / Cost to cost |
| Advance Recovery % | number |  |
| Retention Cap % | number |  |
| Budget Control | choice |  / Hard Block / Soft Warning / No Control |
| Warning Threshold % | number |  |
| Status | choice | Planning / Active / On hold / Closed |
| Total Budget Cost | number |  |
| Total Est. Cost to Complete | number |  |

### Cost Types — `costtypes`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Nature | choice | Cost / Revenue |
| Status | choice | Active / Inactive |

### Project Activity Progress — `wbs`
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Activity | text |  |
| Cost Code | text |  |
| Cost Type | link | costtypes |
| Start | date |  |
| End | date |  |
| Progress % | number |  |
| Budget | number |  |
| Est-to-Complete | number |  |

### Job Activity Master — `jam`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Level | text |  |
| Parent | text |  |
| Active | choice | Yes / No |

### Budget & Cost to Complete — `jab`
_Screen/report (no stored fields)_

### Activity Budget & Forecast Reports — `jar`
_Screen/report (no stored fields)_

### Project Comprehensive Report — `crp`
_Screen/report (no stored fields)_

### Budgets — `budgets`
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Cost Type | link | costtypes |
| Budget | number |  |

### Milestones — `milestones`
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Milestone | text |  |
| Due | date |  |
| Value | number |  |
| Status | choice | Pending / Done |

### Manual Project Costs — `pcosts` · prefix **MPC**
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Cost Type | link | costtypes |
| Source | choice | Inventory issue / Subcontract / Asset / Journal / Overhead / Reclassification / Field Expense / Other |
| Activity | link | wbs |
| Cost Code | text |  |
| Description | text |  |
| Offset Account | link | coa |
| Date | date |  |
| Amount | number |  |

### Manual Commitments — `commit` · prefix **MCM**
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Cost Type | link | costtypes |
| Activity | link | wbs |
| Type | choice | Verbal Subcontract / Verbal Supply / Estimated Utility / Estimated Site Expense / Other |
| Description | text |  |
| Counterparty | text |  |
| Date | date |  |
| Amount | number |  |
| Consumed | number |  |
| Valid From | date |  |
| Valid To | date |  |
| Status | choice | Active / Closed / Open |

### Project Cost Control — `pcc`
_Screen/report (no stored fields)_

### Job Cost vs Budget — `jcb`
_Screen/report (no stored fields)_

### Project Completion Transfer — `pjclose`
_Screen/report (no stored fields)_

### BOQ & Budgets — `boq`
_Screen/report (no stored fields)_

### Stage Gates — `cwg`
_Screen/report (no stored fields)_

### Measurement Sheets — `cwm` · prefix **MS**
_Screen/report (no stored fields)_

### Change Orders — `cwo` · prefix **CO**
_Screen/report (no stored fields)_

### Payment Certificates (IPC) — `ipc` · prefix **IPC**
_Screen/report (no stored fields)_

### Month-End Close — `cwe`
_Screen/report (no stored fields)_

### Final Account & Closing — `cwx`
_Screen/report (no stored fields)_

### Project Profitability — `cwd`
_Screen/report (no stored fields)_

### Project Control Reports — `cwr`
_Screen/report (no stored fields)_

### Project Control Settings — `cws`
_Screen/report (no stored fields)_

### Budget Versions — `bver` · prefix **BV**
_Screen/report (no stored fields)_

### Month-End Closings — `pclose` · prefix **MEC**
_Screen/report (no stored fields)_


## Purchase (`pu`)
Requisition to payment

### Purchase Requisition — `pr` · prefix **PR** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Requester | text |  |
| Project | link | projects |
| Department | link | departments |
| Priority | choice | Normal / High / Urgent |
| Required Date | date |  |
| Reference | text |  |
| Status | choice | Draft / Submitted / Under Review / Approved / Rejected / Partially Converted / Fully Converted / Closed / Cancelled |
| Branch | text |  |
| Project Ref | text |  |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Bid Tabulation — `bids`
_Screen/report (no stored fields)_

### Purchase Orders (LPO) — `lpo` · prefix **LPO** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Supplier | link | suppliers |
| Project | link | projects |
| PR No | text |  |
| Bid No | text |  |
| Expected Delivery | date |  |
| Payment Terms | text |  |
| Status | choice | Draft / Pending Budget Override / Approved / Partially Received / Fully Received / Closed / Cancelled |
| Department | link | departments |
| Project Ref | text |  |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Delivery Location | text |  |
| Supplier Ref | text |  |
| Remarks | text |  |

### Budget Status — `bgs`
_Screen/report (no stored fields)_

### GRN / Service Receipt — `grn` · prefix **GRN** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Supplier | link | suppliers |
| LPO No | text |  |
| Project | link | projects |
| Store | link | stores |
| Delivery Note | text |  |
| Supplier DN | text |  |
| Status | choice | Draft / Posted / Partially Invoiced / Fully Invoiced / Closed / Cancelled |
| PR No | text |  |
| Department | link | departments |
| Project Ref | text |  |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Reference | text |  |
| Remarks | text |  |

### Purchase Invoice — `sinv` · prefix **PI** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Supplier | link | suppliers |
| Supplier Inv No | text |  |
| GRN No | text |  |
| LPO No | text |  |
| Due Date | date |  |
| Project | link | projects |
| Status | choice | Draft / Posted / Partially Paid / Paid / Cancelled |
| Store | link | stores |
| Department | link | departments |
| Project Ref | text |  |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Reference | text |  |
| Remarks | text |  |

### 3-Way Match — `match`
_Screen/report (no stored fields)_

### Supplier Credit / Debit Notes — `pcn` · prefix **SCN** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Supplier | link | suppliers |
| Invoice No | text |  |
| Type | choice | Credit / Debit |
| Project | link | projects |
| Reason | text |  |
| Status | choice | Draft / Posted / Cancelled |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Supplier Return — `sret` · prefix **SR** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Supplier | link | suppliers |
| GRN No | text |  |
| Project | link | projects |
| Reason | text |  |
| Status | choice | Draft / Posted / Cancelled |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Supplier Portal Inbox — `spd`
_Screen/report (no stored fields)_

### Portal Users — `spv`
_Screen/report (no stored fields)_

### Portal Settings — `sps`
_Screen/report (no stored fields)_

### Portal Audit Log — `spa`
_Screen/report (no stored fields)_

### Supplier Comprehensive Report — `crs`
_Screen/report (no stored fields)_

### RFQ — `rfq` · prefix **RFQ** · document
| Field | Type | Options / link |
|---|---|---|
| PR No | text |  |
| Supplier | link | suppliers |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Supplier Quotations — `quotes` · prefix **SQ** · document
| Field | Type | Options / link |
|---|---|---|
| RFQ No | text |  |
| Supplier | link | suppliers |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Supplier Payments — `p_pay`
_Screen/report (no stored fields)_

### Supplier SOA — `p_soa`
_Screen/report (no stored fields)_

### AP Aging — `p_age`
_Screen/report (no stored fields)_

### GRN Payables Report — `p_grnp`
_Screen/report (no stored fields)_

### Purchase Registers & Analysis — `p_reg`
_Screen/report (no stored fields)_

### Budget Control Settings — `lk_pbs`
_Screen/report (no stored fields)_

### Project Cost Budgets (BOQ) — `lk_pboq`
_Screen/report (no stored fields)_

### Procurement Gate — `lk_pcg`
_Screen/report (no stored fields)_

### Commitments vs Budget — `lk_pbr`
_Screen/report (no stored fields)_


## Sales (`sa`)
Quotation to receipt

### Quotations — `sq` · prefix **QT** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| Valid Until | date |  |
| Salesperson | text |  |
| Project | link | projects |
| Payment Terms | text |  |
| Delivery Address | text |  |
| Status | choice | Draft / Submitted / Approved / Partially Ordered / Fully Ordered / Rejected / Closed / Cancelled |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Reference | text |  |
| Remarks | text |  |

### Sales Orders — `so` · prefix **SO** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| Quotation No | text |  |
| Contract No | text |  |
| Salesperson | text |  |
| Project | link | projects |
| Payment Terms | text |  |
| Delivery Address | text |  |
| Status | choice | Draft / Approved / Partially Delivered / Fully Delivered / Closed / Cancelled |
| Department | link | departments |
| Project Ref | text |  |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Reference | text |  |
| Remarks | text |  |

### Delivery Notes (GDN) — `dn` · prefix **GDN** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| SO No | text |  |
| Store | link | stores |
| Delivery Address | text |  |
| Project | link | projects |
| Vehicle No | text |  |
| Driver | text |  |
| Received By | text |  |
| Received Date | date |  |
| Status | choice | Draft / Posted / Partially Invoiced / Fully Invoiced / Closed / Cancelled |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Reference | text |  |
| Remarks | text |  |

### Sales Invoices — `sinvc` · prefix **SI** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| Emirate | choice |  / Abu Dhabi / Dubai / Sharjah / Ajman / Umm Al Quwain / Ras Al Khaimah / Fujairah |
| GDN No | text |  |
| SO No | text |  |
| Certificate No | text |  |
| Retention % | number |  |
| Due Date | date |  |
| Supply Date | date |  |
| Project | link | projects |
| Type | choice | Standard / Progress / Milestone / Retention / Advance / Service |
| Status | choice | Draft / Posted / Partially Paid / Paid / Cancelled |
| Store | link | stores |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Reference | text |  |
| Remarks | text |  |

### Credit / Debit Notes — `cn` · prefix **CN** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| Invoice No | text |  |
| Type | choice | Credit / Debit |
| Reason | choice | Price adjustment / Quantity adjustment / Discount / Goods returned (no stock effect) / Other |
| Project | link | projects |
| Status | choice | Draft / Posted / Cancelled |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Sales Returns — `sr` · prefix **SRT** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| GDN No | text |  |
| Invoice No | text |  |
| Store | link | stores |
| Project | link | projects |
| Reason | text |  |
| Status | choice | Draft / Posted / Cancelled |
| Department | link | departments |
| Activity | link | wbs |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Progress Certificates — `pcert` · prefix **PCERT** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| Project | link | projects |
| Period From | date |  |
| Period To | date |  |
| Certificate Ref | text |  |
| Retention % | number |  |
| Client Approval Date | date |  |
| Status | choice | Draft / Approved / Partially Invoiced / Invoiced / Cancelled |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Variation Orders — `vo` · prefix **VO** · document
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Project | link | projects |
| VO Ref | text |  |
| Description | text |  |
| Contract Value Change | number |  |
| Cost Budget Change | number |  |
| Cost Type | link | costtypes |
| Activity | link | wbs |
| Reason | text |  |
| Status | choice | Draft / Approved / Cancelled |

### Revenue Recognition (Contracts) — `rrun`
_Screen/report (no stored fields)_

### Contracts & Retention — `cntr`
_Screen/report (no stored fields)_

### PDC Register — `pdc`
_Screen/report (no stored fields)_

### Customer Ageing — `cage`
_Screen/report (no stored fields)_

### Credit Loss Run (ECL) — `ecl`
_Screen/report (no stored fields)_

### Bad Debt Write-offs — `bdw` · prefix **BDW** · document
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Customer | link | customers |
| Invoice No | text |  |
| Amount | number |  |
| Reason | text |  |
| Status | choice | Draft / Submitted / Posted / Rejected / Cancelled |

### Sales Reconciliations — `srec`
_Screen/report (no stored fields)_

### Customer Comprehensive Report — `crc`
_Screen/report (no stored fields)_

### Customer Receipts — `rc` · prefix **RV** · document
| Field | Type | Options / link |
|---|---|---|
| Customer | link | customers |
| Payment Type | choice | Bill Settlement / Advance / On Account / Apply Advance / Bad Debt Recovery |
| Method | choice | Cash / Bank Transfer / Cheque |
| Bank | text |  |
| Reference | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Unbilled Revenue — `unbilled`
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Customer | link | customers |
| Work Done | number |  |
| Billed | number |  |

### Customer SOA — `s_soa`
_Screen/report (no stored fields)_

### AR Aging — `s_age`
_Screen/report (no stored fields)_

### Sales Registers & Analysis — `s_reg`
_Screen/report (no stored fields)_

### Payment Certificates (IPC) — `lk_ipc`
_Screen/report (no stored fields)_

### Change Orders — `lk_cwo`
_Screen/report (no stored fields)_

### BOQ & Contract Value — `lk_boq`
_Screen/report (no stored fields)_

### Billing & Contract Reports — `lk_cwr`
_Screen/report (no stored fields)_


## Inventory (`in`)
Stores and valuation

### Stock Receipt — `rec` · prefix **SRC** · document
| Field | Type | Options / link |
|---|---|---|
| Store | link | stores |
| Receipt Type | text |  |
| Supplier | link | suppliers |
| Reference | text |  |
| Credit Account | link | coa |
| Item | link | items |
| Qty | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Stock Issue Entry — `iss` · prefix **SIS** · document, line items
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Store | link | stores |
| Item | link | items |
| Qty | number |  |
| Reference | text |  |
| Status | choice | Draft / Posted / Cancelled |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Remarks | text |  |

### Material Consumption — `cons` · prefix **MC** · document
| Field | Type | Options / link |
|---|---|---|
| Store | link | stores |
| Item | link | items |
| Qty | number |  |
| Cost Code | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Transfers — `trf` · prefix **TRF** · document
| Field | Type | Options / link |
|---|---|---|
| From Store | link | stores |
| To Store | link | stores |
| Mode | choice | Immediate / Two-step |
| Reference | text |  |
| Item | link | items |
| Qty | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Adjustments — `adj` · prefix **ADJ** · document
| Field | Type | Options / link |
|---|---|---|
| Store | link | stores |
| Item | link | items |
| Qty | number |  |
| Direction | choice | Decrease / Increase / Mixed |
| Reason | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Stock Count — `cnt` · prefix **CNT** · document
| Field | Type | Options / link |
|---|---|---|
| Store | link | stores |
| Scope | text |  |
| Counted By | text |  |
| Item | link | items |
| System Qty | number |  |
| Counted Qty | number |  |
| Net Variance | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Stock Write-down (NRV) — `nrv` · prefix **NRV** · document
| Field | Type | Options / link |
|---|---|---|
| Store | link | stores |
| Basis | text |  |
| Item | link | items |
| Provision Needed | number |  |
| Net Movement | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Opening Stock — `opening`
| Field | Type | Options / link |
|---|---|---|
| Store | link | stores |
| Item | link | items |
| Qty | number |  |
| Unit Cost | number |  |

### Stock Ledger & Valuation — `stkv`
_Screen/report (no stored fields)_

### Item Comprehensive Report — `cri`
_Screen/report (no stored fields)_

### Adjustment Reasons — `ivrn`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Direction | choice | Both / Decrease only / Increase only |
| GL Account | link | coa |
| Status | choice | Active / Inactive |

### Inventory Settings — `ivs`
_Screen/report (no stored fields)_

### Inventory Dashboard — `ivd`
_Screen/report (no stored fields)_

### Inventory Reports — `ivr`
_Screen/report (no stored fields)_

### Reorder Planning — `ivro`
_Screen/report (no stored fields)_


## Fixed Assets (`fa`)
Register to disposal

### Asset Register — `assets`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Description | text |  |
| Type | link | asstype |
| Category | text |  |
| Serial No | text |  |
| Supplier | link | suppliers |
| Purchase Invoice | text |  |
| Purchase Date | date |  |
| Cost | number |  |
| VAT Treatment | text |  |
| Location | text |  |
| Building / Room | text |  |
| Project | link | projects |
| Department | link | departments |
| Custodian | link | employees |
| Handover Date | date |  |
| Method | choice | Straight line / Reducing / Units of use |
| Useful Life (yrs) | number |  |
| Residual | number |  |
| Start Date | date |  |
| Total Units | number |  |
| Plate No | text |  |
| Make | text |  |
| Model | text |  |
| Year | text |  |
| Chassis No | text |  |
| Driver | link | employees |
| Cost Account | link | coa |
| Accum Dep Account | link | coa |
| Dep Expense Account | link | coa |

### Asset Types — `asstype`
| Field | Type | Options / link |
|---|---|---|
| Name | text |  |
| Cost Account | link | coa |
| Accum Dep Account | link | coa |
| Dep Expense Account | link | coa |
| Method | choice | Straight line / Reducing / Units of use |
| Useful Life (yrs) | number |  |
| Residual % | number |  |

### Asset Settings — `fas`
_Screen/report (no stored fields)_

### Asset Documents Status — `adocs`
_Screen/report (no stored fields)_

### Asset Comprehensive Report — `cra`
_Screen/report (no stored fields)_

### Capitalisation — `acq` · prefix **CAP** · document
| Field | Type | Options / link |
|---|---|---|
| Asset Code | text |  |
| Asset Name | text |  |
| Cap Type | text |  |
| Asset Type | text |  |
| Supplier | link | suppliers |
| Invoice No | text |  |
| GRN No | text |  |
| Total Cost | number |  |
| Start Date | date |  |
| Posted | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Depreciation Run — `dep`
_Screen/report (no stored fields)_

### Asset Register Report — `areg`
_Screen/report (no stored fields)_

### Fixed Asset Movement — `fam`
_Screen/report (no stored fields)_

### Asset Transfer — `atrf` · prefix **AT** · document
| Field | Type | Options / link |
|---|---|---|
| Asset Code | text |  |
| Asset Name | text |  |
| From Branch | text |  |
| From Department | text |  |
| From Cost Centre | text |  |
| From Custodian | text |  |
| To Branch | text |  |
| To Department | text |  |
| To Cost Centre | text |  |
| To Custodian | text |  |
| Reason | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Disposal — `disp` · prefix **AD** · document
| Field | Type | Options / link |
|---|---|---|
| Asset Code | text |  |
| Asset Name | text |  |
| Disposal Type | text |  |
| Buyer | text |  |
| Proceeds | number |  |
| NBV | number |  |
| Gain Loss | number |  |
| Posted | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |


## HR & Payroll (`hr`)
Payroll, leave, EOSB and reports

### Payroll Dashboard — `pdash`
_Screen/report (no stored fields)_

### Payroll Settings — `psett`
_Screen/report (no stored fields)_

### Payroll Projects — `ppc`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Destination Type | choice | Project WIP / Project cost / Admin / Selling / Manufacturing WIP / Manufacturing overhead / Site overhead / Intercompany |
| Linked Project | link | projects |
| Linked Department | link | departments |
| Cost Centre | link | costcenters |
| Work Centre | text |  |
| Debit GL Account | link | coa |
| Credit GL Account | link | coa |
| Default Activity | link | wbs |
| Default Cost Category | text |  |
| Allocation Basis | choice |  / Headcount / Direct labour hours / Revenue / Fixed split |
| Absorb GL Account | link | coa |
| Status | choice | Active / Inactive |

### Shift Assignments — `shift` · prefix **SHF**
| Field | Type | Options / link |
|---|---|---|
| Employee | link | employees |
| From Date | date |  |
| To Date | date |  |
| Payroll Project | link | ppc |
| Project | link | projects |
| Activity | link | wbs |
| Shift Type | choice | Day / Night / Rotational |
| Start Time | text |  |
| End Time | text |  |
| Standard Hrs | number |  |
| Working Days Pattern | text |  |
| Rest Day | choice |  / Sunday / Monday / Tuesday / Wednesday / Thursday / Friday / Saturday |
| Status | choice | Active / Inactive |
| Notes | text |  |

### Holiday Calendar — `hcal`
| Field | Type | Options / link |
|---|---|---|
| Date | date |  |
| Name | text |  |
| Type | choice | Public holiday / Company holiday / Other |

### Monthly Parameters — `mpar`
_Screen/report (no stored fields)_

### Timesheet — `ts`
| Field | Type | Options / link |
|---|---|---|
| Employee | link | employees |
| Year | number |  |
| Month | choice | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 |
| Month Days | number |  |
| Standard Hrs | number |  |
| Holiday Hrs | number |  |
| Normal OT Hrs | number |  |
| Sick Hrs | number |  |
| Absent Hrs | number |  |
| Annual Leave Hrs | number |  |
| Project | link | projects |
| Activity | link | wbs |
| Designation (auto) | text |  |
| Department (auto) | text |  |
| PP Code | text |  |
| Budget Hrs | number |  |
| Attendance Hrs | number |  |
| Paid Holiday Hrs | number |  |
| OT2 Hrs | number |  |
| Holiday OT Hrs | number |  |
| Status | text |  |

### Additions — `add` · prefix **ADD**
_Screen/report (no stored fields)_

### Deductions — `ded` · prefix **DED**
_Screen/report (no stored fields)_

### Additions & Deductions Reports — `adjr`
_Screen/report (no stored fields)_

### Loans & Advances — `loan` · prefix **LN** · document
| Field | Type | Options / link |
|---|---|---|
| Employee | link | employees |
| Type | choice | Loan / Advance |
| Monthly Instalment | number |  |
| Start Year | number |  |
| Start Month | choice | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 |
| Description | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Loans & Advances Reports — `loanx`
_Screen/report (no stored fields)_

### Loan Balances — `loanr`
_Screen/report (no stored fields)_

### Salary Modification — `smv` · prefix **SMV**
_Screen/report (no stored fields)_

### Payroll Run — `run`
_Screen/report (no stored fields)_

### Payroll Payment — `ppay`
_Screen/report (no stored fields)_

### Delete Month Payroll — `pdel`
_Screen/report (no stored fields)_

### Leave Balance — `lbal`
_Screen/report (no stored fields)_

### Leave Register — `lreg`
| Field | Type | Options / link |
|---|---|---|
| Employee | link | employees |
| Entry Type | choice | Annual leave / Absent / Sick leave / Unpaid leave / Paid Leave |
| Leave Date | date |  |
| Expected Rejoin | date |  |
| Days | number |  |
| Excess Days (auto) | number |  |
| Remarks | text |  |
| Designation (auto) | text |  |
| Last Rejoin (auto) | text |  |
| Department (auto) | text |  |
| Contact During Leave | text |  |
| City | text |  |
| Email | text |  |
| Application Date | date |  |

### Rejoin Entry — `rjn` · prefix **RJ**
_Screen/report (no stored fields)_

### Leave, Rejoin & Exit Forms — `hrfm`
_Screen/report (no stored fields)_

### Annual Leave Settlement — `als` · prefix **ALS**
_Screen/report (no stored fields)_

### EOSB Calculator — `eosb`
_Screen/report (no stored fields)_

### Final Settlement — `fset` · prefix **FS**
_Screen/report (no stored fields)_

### Provision Adjustments — `padj` · prefix **PA** · document
| Field | Type | Options / link |
|---|---|---|
| Employee | link | employees |
| Type | choice | Leave / EOSB / Benefits |
| Direction | choice | Increase / Decrease |
| Reason | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Provision Schedules — `prv`
_Screen/report (no stored fields)_

### Provision Subledger — `psl`
_Screen/report (no stored fields)_

### Salary Modification Reports — `smr`
_Screen/report (no stored fields)_

### Employee Control Statement — `ecs`
_Screen/report (no stored fields)_

### Employee Comprehensive Report — `ecr`
_Screen/report (no stored fields)_

### Payroll Reports — `rpts`
_Screen/report (no stored fields)_

### Template Master — `hlt`
_Screen/report (no stored fields)_

### Letter Categories — `hlc`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Status | choice | Active / Inactive |

### Letter Requests — `hlr` · prefix **LTR**
_Screen/report (no stored fields)_

### Document Expiry Tracker — `hlex`
_Screen/report (no stored fields)_

### Letters Generated Register — `hlrg`
_Screen/report (no stored fields)_

### Expiring Documents Report — `hlxr`
_Screen/report (no stored fields)_

### Pending Approvals Report — `hlpa`
_Screen/report (no stored fields)_

### Competency Master — `pfk`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Arabic Name | text |  |
| Category | choice | Leadership / Technical / Behavioral / Core Values |
| Description | text |  |
| Status | choice | Active / Inactive |

### Appraisal Cycles — `pfc`
_Screen/report (no stored fields)_

### Bonus Policy — `pfb`
| Field | Type | Options / link |
|---|---|---|
| Policy | text |  |
| Tier | text |  |
| Min Score % | number |  |
| Max Score % | number |  |
| Bonus Type | choice | Percentage of Basic / Percentage of Gross / Fixed Amount |
| Bonus Value | number |  |
| Status | choice | Active / Inactive |

### Appraisal Settings — `pfs`
_Screen/report (no stored fields)_

### Goals — `pfg` · prefix **GOL**
_Screen/report (no stored fields)_

### Appraisals — `pfa` · prefix **APR**
_Screen/report (no stored fields)_

### Calibration — `pfl`
_Screen/report (no stored fields)_

### Improvement Plans — `pfp` · prefix **PIP**
_Screen/report (no stored fields)_

### Bonus Payout — `pfo`
_Screen/report (no stored fields)_

### Appraisal Register — `pfr1`
_Screen/report (no stored fields)_

### Score Distribution — `pfr2`
_Screen/report (no stored fields)_

### Goal Achievement — `pfr3`
_Screen/report (no stored fields)_

### Calibration Report — `pfr4`
_Screen/report (no stored fields)_

### Bonus Calculation — `pfr5`
_Screen/report (no stored fields)_

### Onboarding Templates — `rnt`
_Screen/report (no stored fields)_

### Recruitment Settings — `rns`
_Screen/report (no stored fields)_

### Job Requisitions — `rnq` · prefix **REQ**
_Screen/report (no stored fields)_

### Candidates — `rnc` · prefix **CND**
_Screen/report (no stored fields)_

### Offers — `rno` · prefix **OFR**
_Screen/report (no stored fields)_

### New Hire Onboarding — `rnb` · prefix **ONB**
_Screen/report (no stored fields)_

### Onboarding Tasks by Role — `rnk`
_Screen/report (no stored fields)_

### Requisition Register — `rnr1`
_Screen/report (no stored fields)_

### Recruitment Pipeline — `rnr2`
_Screen/report (no stored fields)_

### Time to Hire and Offers — `rnr3`
_Screen/report (no stored fields)_

### Onboarding Status — `rnr4`
_Screen/report (no stored fields)_

### New Hire Document Compliance — `rnr5`
_Screen/report (no stored fields)_

### Renewals & Clearance — `rwd`
_Screen/report (no stored fields)_

### Vehicle & Machinery Renewals — `vmr`
_Screen/report (no stored fields)_

### Employee Document Renewals — `edr`
_Screen/report (no stored fields)_

### Issued Permits — `ipm` · prefix **PRM**
_Screen/report (no stored fields)_

### Exit Notices — `exn` · prefix **EXN**
_Screen/report (no stored fields)_

### Petty Cash Clearance — `pcl` · prefix **PCL**
_Screen/report (no stored fields)_

### Renewal Settings — `rws`
_Screen/report (no stored fields)_

### Document Renewals Register — `rwr1`
_Screen/report (no stored fields)_

### Renewals and Clearance Activity Log — `rwr2`
_Screen/report (no stored fields)_

### Issued Permits Register — `rwr3`
_Screen/report (no stored fields)_

### Petty Cash Clearance Status — `rwr4`
_Screen/report (no stored fields)_


## Legal & Generals (`legal`)
Company certificates, licenses and legal documents

### Certificate Types — `cct`
_Screen/report (no stored fields)_

### Certificate Settings — `ccs`
_Screen/report (no stored fields)_

### Company Certificates — `ccg` · prefix **CRT**
_Screen/report (no stored fields)_

### Compliance Status — `ccd`
_Screen/report (no stored fields)_

### Certificate Register — `ccr1`
_Screen/report (no stored fields)_

### Certificate Expiry Forecast — `ccr2`
_Screen/report (no stored fields)_

### Certificate Activity Log — `ccr3`
_Screen/report (no stored fields)_

### CEO & BOD Dashboard — `mdc`
_Screen/report (no stored fields)_


## Finance (`fi`)
GL, AP, AR, banking

### Journal Vouchers — `jv` · prefix **JV** · document
| Field | Type | Options / link |
|---|---|---|
| Type | choice | General / Accrual / Prepayment / Provision / Payroll / Depreciation / Intercompany |
| Debit Account | link | coa |
| Credit Account | link | coa |
| Narration | text |  |
| Supplier | link | suppliers |
| Customer | link | customers |
| Asset Code | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Supplier Payments — `pv` · prefix **PV** · document
| Field | Type | Options / link |
|---|---|---|
| Supplier | link | suppliers |
| Payment Type | choice | Bill Settlement / Advance / On Account |
| Method | choice | Cash / Bank Transfer / Cheque |
| Bank | text |  |
| Reference | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### General Payment Vouchers — `gpv` · prefix **GPV** · document
| Field | Type | Options / link |
|---|---|---|
| Counterparty | text |  |
| Method | text |  |
| Reference | text |  |
| Narration | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### General Receipt Vouchers — `grv` · prefix **GRV** · document
| Field | Type | Options / link |
|---|---|---|
| Counterparty | text |  |
| Method | text |  |
| Reference | text |  |
| Narration | text |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Voucher Control — `gvc`
_Screen/report (no stored fields)_

### Voucher Reports — `gvrep`
_Screen/report (no stored fields)_

### Bank Transfers — `bt` · prefix **BTR** · document
| Field | Type | Options / link |
|---|---|---|
| From Bank | link | banks |
| To Bank | link | banks |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Bank Statement Lines — `bstmt`
| Field | Type | Options / link |
|---|---|---|
| Bank | link | banks |
| Date | date |  |
| Reference | text |  |
| Type | choice | Deposit / Withdrawal |
| Amount | number |  |

### Bank Reconciliation — `bankrec`
_Screen/report (no stored fields)_

### Reconciliation History — `brh`
_Screen/report (no stored fields)_

### Bank Reconciliation Settings — `brs`
_Screen/report (no stored fields)_

### Bank Reconciliation Statement — `brr1`
_Screen/report (no stored fields)_

### Uncleared Items — `brr2`
_Screen/report (no stored fields)_

### Reconciliation Status — `brr3`
_Screen/report (no stored fields)_

### LC Management — `lc` · prefix **LC**
_Screen/report (no stored fields)_

### LG Management — `lg` · prefix **LG**
_Screen/report (no stored fields)_

### PDC Management — `pdcm`
_Screen/report (no stored fields)_

### Overdraft Facility — `odf` · prefix **OD**
_Screen/report (no stored fields)_

### Loan Management — `bln` · prefix **LN**
_Screen/report (no stored fields)_

### Fixed Deposits — `tdp` · prefix **FD**
_Screen/report (no stored fields)_

### Bank Position — `bpos`
_Screen/report (no stored fields)_

### Lease Management — `lease` · prefix **LSE**
_Screen/report (no stored fields)_

### Lease Reports — `leaser`
_Screen/report (no stored fields)_

### Prepayments — `prepay` · prefix **PP**
_Screen/report (no stored fields)_

### Prepayment Reports — `prepayr`
_Screen/report (no stored fields)_

### Financial Statements — `fstm`
_Screen/report (no stored fields)_

### Petty Cash — `petty` · prefix **PC** · document
| Field | Type | Options / link |
|---|---|---|
| Holder | text |  |
| Payee | text |  |
| Cost Category | text |  |
| Invoice No | text |  |
| TRN | text |  |
| Payment Method | choice | Cash / Card |
| Narration | text |  |
| Total | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Accruals — `accr` · prefix **ACC** · document
| Field | Type | Options / link |
|---|---|---|
| Type | choice | Accrual / Prepayment |
| Description | text |  |
| Expense Account | link | coa |
| Accrued / Prepaid Account | link | coa |
| Credit Account (prepayment) | link | coa |
| Months (prepayment) | number |  |
| Reversal Date (accrual) | date |  |
| Activity | link | wbs |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Provisions — `prov` · prefix **PRV** · document
| Field | Type | Options / link |
|---|---|---|
| Type | choice | Leave / EOSB / Other |
| Opening | number |  |
| Closing | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Intercompany — `ic` · prefix **IC** · document
| Field | Type | Options / link |
|---|---|---|
| Counterparty | text |  |
| Service Type | text |  |
| Mark-up % | number |  |
| Date | date |  |
| Project | link | projects |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Amount | number |  |
| VAT % | number |  |
| Status | choice | Draft / Submitted / Approved / Rejected / Closed / Cancelled |

### Payroll Recharge — `icr`
_Screen/report (no stored fields)_

### Account Mapping — `accmap`
| Field | Type | Options / link |
|---|---|---|
| Key | choice | Inventory/Expense / GRN Payable / Input VAT / Output VAT / Accounts Payable / Accounts Receivable / Revenue / Bank / Cash / Fixed Assets / Accumulated Depreciation / Depreciation Expense / Disposal Gain/Loss / Project Cost / COGS / Employee Loans / FX Gain/Loss / Supplier Advances / Customer Advances / Retained Earnings / EOSB Provision / Employee Clearing |
| Account | link | coa |

### General Ledger — `gl`
| Field | Type | Options / link |
|---|---|---|
| Journal No | text |  |
| Date | date |  |
| Source | text |  |
| Doc No | text |  |
| Account | text |  |
| Debit | number |  |
| Credit | number |  |
| Project | text |  |
| Company | text |  |

### Trial Balance — `tb`
_Screen/report (no stored fields)_

### Budget Entry — `bud`
| Field | Type | Options / link |
|---|---|---|
| Year | number |  |
| Month | choice | Annual / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 |
| Account | link | coa |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Project | link | projects |
| Amount | number |  |
| Note | text |  |

### Budget vs Actual — `bva`
_Screen/report (no stored fields)_

### Budget Reports — `bdgr`
_Screen/report (no stored fields)_

### ICV Management — `icv`
_Screen/report (no stored fields)_

### VAT Return — `vatr`
_Screen/report (no stored fields)_

### Corporate Tax — `ctax`
_Screen/report (no stored fields)_

### CT Returns — `ctr`
_Screen/report (no stored fields)_

### CT Entries — `ctj` · prefix **CTJ**
_Screen/report (no stored fields)_

### Exchange Rates — `fxr`
| Field | Type | Options / link |
|---|---|---|
| Currency | link | currencies |
| Date | date |  |
| Rate | number |  |

### FX Revaluation — `fxrev`
_Screen/report (no stored fields)_

### Analysis Templates — `antpl`
_Screen/report (no stored fields)_

### Analysis Reports — `anrep`
_Screen/report (no stored fields)_

### Party SOA — `soa`
_Screen/report (no stored fields)_

### AP / AR Aging — `aging`
_Screen/report (no stored fields)_

### GRN Payables Report — `grnp`
_Screen/report (no stored fields)_

### Reports & Registers — `regs`
_Screen/report (no stored fields)_

### Period Control — `periods`
| Field | Type | Options / link |
|---|---|---|
| Period | text |  |
| Status | choice | Open / Soft close / Hard close / Locked |

### Period Lock — `plk`
_Screen/report (no stored fields)_

### GL Dump — `gld`
_Screen/report (no stored fields)_


## Reports (`rp`)
Financial, payroll, project, stock and asset reports in one place

### Financial Statements — `r1`
_Screen/report (no stored fields)_

### Trial Balance — `r2`
_Screen/report (no stored fields)_

### General Ledger — `r3`
_Screen/report (no stored fields)_

### GL Dump — `r64`
_Screen/report (no stored fields)_

### Project Comprehensive Report — `r65`
_Screen/report (no stored fields)_

### Asset Comprehensive Report — `r66`
_Screen/report (no stored fields)_

### Item Comprehensive Report — `r67`
_Screen/report (no stored fields)_

### Customer Comprehensive Report — `r68`
_Screen/report (no stored fields)_

### Supplier Comprehensive Report — `r69`
_Screen/report (no stored fields)_

### CEO & BOD Dashboard — `r70`
_Screen/report (no stored fields)_

### Bank Reconciliation — `r4`
_Screen/report (no stored fields)_

### Payroll Reports — `r5`
_Screen/report (no stored fields)_

### Payroll Dashboard — `r6`
_Screen/report (no stored fields)_

### Provision Schedules — `r7`
_Screen/report (no stored fields)_

### Final Settlements — `r8`
_Screen/report (no stored fields)_

### Project Cost Control — `r9`
_Screen/report (no stored fields)_

### Stock Ledger & Valuation — `r10`
_Screen/report (no stored fields)_

### Asset Register & Depreciation — `r11`
_Screen/report (no stored fields)_

### 3-Way Match — `r12`
_Screen/report (no stored fields)_

### Intercompany Recharge — `r13`
_Screen/report (no stored fields)_

### Audit Trail — `r14`
_Screen/report (no stored fields)_

### Budget vs Actual — `r15`
_Screen/report (no stored fields)_

### VAT Return — `r16`
_Screen/report (no stored fields)_

### Corporate Tax — `r17`
_Screen/report (no stored fields)_

### Loan Balances — `r18`
_Screen/report (no stored fields)_

### Leave Balance — `r19`
_Screen/report (no stored fields)_

### FX Revaluation — `r20`
_Screen/report (no stored fields)_

### Employee Reports — `r26`
_Screen/report (no stored fields)_

### Analysis Reports — `r27`
_Screen/report (no stored fields)_

### Asset Documents Status — `r28`
_Screen/report (no stored fields)_

### Job Cost vs Budget — `r29`
_Screen/report (no stored fields)_

### Asset Register Report — `r30`
_Screen/report (no stored fields)_

### Employee Control Statement — `r31`
_Screen/report (no stored fields)_

### Letters Generated Register — `r32`
_Screen/report (no stored fields)_

### Expiring Documents Report — `r33`
_Screen/report (no stored fields)_

### Pending Approvals Report — `r34`
_Screen/report (no stored fields)_

### Appraisal Register — `r35`
_Screen/report (no stored fields)_

### Score Distribution — `r36`
_Screen/report (no stored fields)_

### Goal Achievement — `r37`
_Screen/report (no stored fields)_

### Calibration Report — `r38`
_Screen/report (no stored fields)_

### Bonus Calculation — `r39`
_Screen/report (no stored fields)_

### Requisition Register — `r40`
_Screen/report (no stored fields)_

### Recruitment Pipeline — `r41`
_Screen/report (no stored fields)_

### Time to Hire and Offers — `r42`
_Screen/report (no stored fields)_

### Onboarding Status — `r43`
_Screen/report (no stored fields)_

### New Hire Document Compliance — `r44`
_Screen/report (no stored fields)_

### Certificate Register — `r45`
_Screen/report (no stored fields)_

### Certificate Expiry Forecast — `r46`
_Screen/report (no stored fields)_

### Certificate Activity Log — `r47`
_Screen/report (no stored fields)_

### Document Renewals Register — `r48`
_Screen/report (no stored fields)_

### Renewals and Clearance Activity Log — `r49`
_Screen/report (no stored fields)_

### Issued Permits Register — `r50`
_Screen/report (no stored fields)_

### Petty Cash Clearance Status — `r51`
_Screen/report (no stored fields)_

### Employee Comprehensive Report — `r63`
_Screen/report (no stored fields)_

### Bank Reconciliation Statement — `r52`
_Screen/report (no stored fields)_

### Uncleared Items — `r53`
_Screen/report (no stored fields)_

### Reconciliation Status — `r54`
_Screen/report (no stored fields)_

### Party SOA — `r21`
_Screen/report (no stored fields)_

### AP / AR Aging — `r22`
_Screen/report (no stored fields)_

### GRN Payables Report — `r23`
_Screen/report (no stored fields)_

### Reports & Registers — `r24`
_Screen/report (no stored fields)_

### Bid Tabulation — `r25`
_Screen/report (no stored fields)_


## Users & Settings (`sy`)
Security, approvals, configuration

### Default Posting Accounts — `dfacc`
_Screen/report (no stored fields)_

### Users — `users`
| Field | Type | Options / link |
|---|---|---|
| Username | text |  |
| Name | text |  |
| Role | link | roles |
| Extra Roles | text |  |
| Company | text |  |
| Allowed Companies | text |  |
| Access Until | date |  |
| Status | choice | Active / Inactive |

### Roles — `roles`
| Field | Type | Options / link |
|---|---|---|
| Name | text |  |
| Permissions | text |  |

### Login & Security — `uacc`
_Screen/report (no stored fields)_

### Role Permissions — `rperm`
_Screen/report (no stored fields)_

### Backup Management — `bkp`
_Screen/report (no stored fields)_

### Email Settings — `emset`
_Screen/report (no stored fields)_

### Email Log — `emlog`
_Screen/report (no stored fields)_

### Document Numbering — `numset`
_Screen/report (no stored fields)_

### Approval Rules — `appr`
| Field | Type | Options / link |
|---|---|---|
| Transaction Type | text |  |
| From Amount | number |  |
| To Amount | number |  |
| Approver Role | link | roles |

### Credit Loss Rates (ECL) — `eclset`
_Screen/report (no stored fields)_

### Legal & Policy Rules — `rules`
| Field | Type | Options / link |
|---|---|---|
| Rule Code | text |  |
| Name | text |  |
| Source | choice | UAE statutory / Company policy / Management / Accounting estimate |
| Effective From | date |  |
| Effective To | date |  |
| Method | text |  |

### Company Settings — `company`
| Field | Type | Options / link |
|---|---|---|
| Name | text |  |
| Arabic Name | text |  |
| TRN | text |  |
| Address | text |  |
| Emirate | choice |  / Abu Dhabi / Dubai / Sharjah / Ajman / Umm Al Quwain / Ras Al Khaimah / Fujairah |
| Phone | text |  |
| Email | text |  |
| Website | text |  |
| Currency | text |  |
| MOL Establishment ID | text |  |

### Audit Trail — `audit`
| Field | Type | Options / link |
|---|---|---|
| Time | text |  |
| Module | text |  |
| Action | text |  |
| Record | text |  |


## Manufacturing (`mf`)


### Manufacturing Dashboard — `mfdash`
_Screen/report (no stored fields)_

### Product Engineering — `mfpm`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Item | link | items |
| Product Family | choice | Chiller control panel / AHU / FCU control panel / Cooling tower panel / Pump and VFD panel / Fan and ventilation panel / VRF / split system panel / BMS / DDC panel / MCC / power panel / Other |
| Rated Voltage (V) | number |  |
| Phase | choice | 3 / 1 |
| Frequency (Hz) | number |  |
| Rated Current (A) | number |  |
| Short-circuit Rating (kA) | number |  |
| IP Rating | text |  |
| Enclosure Material | text |  |
| Form of Separation | text |  |
| Controller Type | text |  |
| Applicable Standard | text |  |
| Drawing No | text |  |
| Drawing Revision | text |  |
| Datasheet Ref | text |  |
| Certification | text |  |
| Default BOM | link | mfbom |
| Default Routing | link | mfrt |
| Default Quality Plan | link | mfqp |
| Warranty (months) | number |  |
| Status | choice | Active / Under development / Obsolete |
| Remarks | text |  |

### Item & Technical Specs — `mfspec`
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Specification Type | choice | Component / Sub-assembly / Raw material / Enclosure / Controller / Consumable |
| Manufacturer | text |  |
| Manufacturer Part No | text |  |
| Rating / Size | text |  |
| Voltage (V) | text |  |
| Current (A) | text |  |
| Breaking Capacity (kA) | text |  |
| Poles | text |  |
| Colour / Finish | text |  |
| Standard / Certification | text |  |
| Datasheet Ref | text |  |
| Approved Suppliers | text |  |
| Tracking | choice | None / Lot / Serial |
| Critical Component | choice | No / Yes |
| Incoming Inspection | choice | No / Yes |
| Shelf Life (months) | number |  |
| Storage Conditions | text |  |
| Status | choice | Active / Inactive |
| Remarks | text |  |

### Option Classes — `mfoc`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Options | text |  |
| Default Option | text |  |
| Required | choice | Yes / No |
| Remarks | text |  |

### Bills of Material — `mfbom` · prefix **BOM**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Revision | text |  |
| Status | choice | Draft / Awaiting Approval / Released / Superseded / Retired |

### Engineering Changes & Revisions — `mfecr` · prefix **ECO**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Change Type | text |  |
| Status | choice | Draft / Submitted / Approved / Implemented / Rejected |

### Routings — `mfrt` · prefix **RTG**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Revision | text |  |
| Status | choice | Draft / Awaiting Approval / Released / Superseded / Retired |

### Work Centres — `mfwc`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Type | choice | Cutting and punching / Busbar fabrication / Assembly bench / Wiring bench / Testing bay / Paint and finish / Packing / Engineering / Subcontract |
| Department | link | departments |
| Cost Centre | link | costcenters |
| Hours per Day | number |  |
| Stations | number |  |
| Efficiency % | number |  |
| Labour Rate per Hour | number |  |
| Machine Rate per Hour | number |  |
| Overhead Pool | link | mfpool |
| Overhead Rate per Hour | number |  |
| Overhead Basis | choice | Labour hours / Machine hours |
| Asset | link | assets |
| Status | choice | Active / Inactive / Under maintenance / Blocked |
| Remarks | text |  |

### Overhead Pools — `mfpool`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Cost Centre | link | costcenters |
| Budget Fixed Overhead (year) | number |  |
| Budget Variable Overhead (year) | number |  |
| Normal Capacity Hours (year) | number |  |
| Overhead Accounts (separate with ;) | text |  |
| Status | choice | Active / Inactive |
| Remarks | text |  |

### Demand Planning — `mfdem`
_Screen/report (no stored fields)_

### Demand Forecasts — `mffc` · prefix **FC**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Forecast Date | date |  |
| Qty | number |  |
| Source | choice | Sales forecast / Tender pipeline / Management / Other |
| Confidence % | number |  |
| Status | choice | Active / Consumed / Cancelled |
| Remarks | text |  |

### Project Demand — `mfpd` · prefix **PD**
| Field | Type | Options / link |
|---|---|---|
| Project | link | projects |
| Item | link | items |
| Qty | number |  |
| Need Date | date |  |
| Status | choice | Open / Fulfilled / Cancelled |
| Reference | text |  |
| Remarks | text |  |

### Material Requirements Planning — `mfmrp` · prefix **MRP**
| Field | Type | Options / link |
|---|---|---|
| Run Date | date |  |
| Status | choice | Draft / Approved / Closed |

### Planning & Scheduling — `mfsch`
_Screen/report (no stored fields)_

### Production Orders — `mfmo` · prefix **WO**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Qty | number |  |
| Status | choice | Draft / Planned / Awaiting Approval / Released / In Progress / On Hold / Quality Hold / Completed / Closed / Cancelled |

### Material Reservations & Issues — `mfmat`
_Screen/report (no stored fields)_

### Shop-Floor Control — `mfflr`
_Screen/report (no stored fields)_

### Work in Progress — `mfwip`
_Screen/report (no stored fields)_

### Quality Assurance & Testing — `mfqa`
_Screen/report (no stored fields)_

### Test Templates — `mfqt`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Test Type | choice | Pass/Fail / Measurement / Visual |
| Characteristic | text |  |
| UOM | text |  |
| Target | number |  |
| Lower Limit | number |  |
| Upper Limit | number |  |
| Mandatory | choice | Yes / No |
| Instrument Required | choice | No / Yes |
| Method / Standard | text |  |
| Status | choice | Active / Inactive |

### Quality Plans — `mfqp` · prefix **QP**
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Item | link | items |
| Stage | text |  |
| Status | choice | Draft / Active / Inactive |

### Inspections — `mfins` · prefix **QI**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| MO | text |  |
| Result | text |  |

### Serial & Batch Traceability — `mftrc`
_Screen/report (no stored fields)_

### Serial Register — `mfser`
| Field | Type | Options / link |
|---|---|---|
| Serial | text |  |
| Item | link | items |
| MO | text |  |
| Status | text |  |

### Rework, Scrap & NCR — `mfncr`
_Screen/report (no stored fields)_

### Non-Conformance Reports — `mfnc` · prefix **NCR**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| MO | text |  |
| Status | text |  |

### Finished Goods Receipt — `mffg`
_Screen/report (no stored fields)_

### Manufacturing Costing — `mfcst`
_Screen/report (no stored fields)_

### Standard Cost Versions — `mfstd` · prefix **STC**
| Field | Type | Options / link |
|---|---|---|
| Item | link | items |
| Version | text |  |
| Status | choice | Draft / Approved / Active / Superseded |

### Maintenance & Calibration — `mfmnt`
_Screen/report (no stored fields)_

### Maintenance Orders — `mfmw` · prefix **MW**
| Field | Type | Options / link |
|---|---|---|
| Work Centre | text |  |
| Type | text |  |
| Status | text |  |

### Calibration Instruments — `mfcal`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| Name | text |  |
| Instrument Type | text |  |
| Serial No | text |  |
| Asset | link | assets |
| Range | text |  |
| Last Calibrated | date |  |
| Interval (days) | number |  |
| Next Due | date |  |
| Certificate No | text |  |
| Calibrated By | text |  |
| Status | choice | Valid / Out of service |

### Manufacturing Accounting — `mfacc`
_Screen/report (no stored fields)_

### Manufacturing Journals — `mfj` · prefix **MFJ**
| Field | Type | Options / link |
|---|---|---|
| Type | text |  |
| MO | text |  |
| Amount | number |  |
| Status | choice | Draft / Posted / Cancelled |

### Time Entries — `mftime` · prefix **TM**
| Field | Type | Options / link |
|---|---|---|
| MO | text |  |
| Employee | text |  |
| Mins | number |  |
| Status | text |  |

### Manufacturing Reports — `mfrep`
_Screen/report (no stored fields)_

### Settings & Approval Rules — `mfset`
_Screen/report (no stored fields)_


## Marine Fleet (`fl`)


### Fleet Dashboard — `fldash`
_Screen/report (no stored fields)_

### Vessel Master — `fixed_assets_vessel_extension`
| Field | Type | Options / link |
|---|---|---|
| Code | text |  |
| IMO | text |  |
| Flag | text |  |
| Call Sign | text |  |
| Vessel Type | choice | Deck Barge / Hopper / Tank / Tug / Crane Barge / Landing Craft / Other |
| DWT | number |  |
| Gross Tonnage | number |  |
| Net Tonnage | number |  |
| Year Built | text |  |
| Builder | text |  |
| Class Society | text |  |
| Status | choice | Active / Drydock / Laid Up / Sold |
| Last Drydock | date |  |
| Next Drydock | date |  |
| Drydock Interval (months) | number |  |
| Daily Hire Rate | number |  |
| Standby Rate | number |  |
| Demurrage Rate (per hour) | number |  |
| Freight Revenue Account | link | coa |
| Hire Revenue Account | link | coa |
| Demurrage Revenue Account | link | coa |
| Fuel Account | link | coa |
| Crew Account | link | coa |
| Maintenance Account | link | coa |
| Notes | text |  |

### Voyage Master — `fleet_voyages` · prefix **VOY**
| Field | Type | Options / link |
|---|---|---|
| Vessel | link | fixed_assets_vessel_extension |
| Project | link | projects |
| Customer | link | customers |
| SO No | text |  |
| Voyage Type | choice | Time Charter / Voyage Charter / CoA |
| Origin Port | text |  |
| Destination Port | text |  |
| Cargo Description | text |  |
| Cargo Quantity | number |  |
| Cargo UoM | text |  |
| Freight Rate | number |  |
| Hire Rate | number |  |
| Standby Rate | number |  |
| VAT % | number |  |
| Planned Departure | date |  |
| Actual Departure | date |  |
| Planned Arrival | date |  |
| Actual Arrival | date |  |
| Status | choice | Planned / In Progress / Completed / Invoiced / Closed |
| Notes | text |  |

### Voyage Costs — `fleet_voyage_costs`
| Field | Type | Options / link |
|---|---|---|
| Voyage | link | fleet_voyages |
| Cost Type | choice | Bunker / Port / Canal / Agency / Other |
| Supplier | link | suppliers |
| AP Invoice No | text |  |
| Amount | number |  |
| GL Account | link | coa |
| Description | text |  |
| Status | choice | Budget / Posted / Reversed |

### Crew Assignments — `fleet_crew_assignments`
| Field | Type | Options / link |
|---|---|---|
| Vessel | link | fixed_assets_vessel_extension |
| Employee | link | employees |
| Rank | text |  |
| Sign On | date |  |
| Sign Off | date |  |
| Daily Wage | number |  |
| Notes | text |  |

### Crew Cost Allocation — `flalloc`
_Screen/report (no stored fields)_

### Laytime Calculator — `fleet_laytime` · prefix **LAY**
| Field | Type | Options / link |
|---|---|---|
| Voyage | link | fleet_voyages |
| Port | text |  |
| Laytime Start | text |  |
| Laytime End | text |  |
| Allowed Hours | number |  |
| Status | choice | Draft / Approved / Cancelled |

### Marine Invoicing — `flinv`
_Screen/report (no stored fields)_

### Vessel P&L — `flpl`
_Screen/report (no stored fields)_

### Voyage P&L — `flvp`
_Screen/report (no stored fields)_

### Fleet Reports — `flrep`
_Screen/report (no stored fields)_

### Settings & Roles — `flset`
_Screen/report (no stored fields)_

### Fleet Journals — `fleet_journals` · prefix **FJ**
| Field | Type | Options / link |
|---|---|---|
| Type | text |  |
| Vessel | link | fixed_assets_vessel_extension |
| Period | text |  |
| Amount | number |  |
| Status | choice | Draft / Posted / Cancelled |


## Time Management (`tm`)


### Time Dashboard — `tmdash`
_Screen/report (no stored fields)_

### Shift Definitions — `tm_shifts`
| Field | Type | Options / link |
|---|---|---|
| Name | text |  |
| Start Time | text |  |
| End Time | text |  |
| Break Hrs | number |  |
| Standard Hrs (auto) | number |  |
| Crosses Midnight (auto) | text |  |
| Late Grace (min) | number |  |
| Early Grace (min) | number |  |
| Status | choice | Active / Inactive |
| Notes | text |  |

### Data Ingestion (API / Excel) — `tmingest`
_Screen/report (no stored fields)_

### Raw Attendance — `attendance_raw`
_Screen/report (no stored fields)_

### Exception Dashboard (Cleansing) — `time_exceptions`
_Screen/report (no stored fields)_

### Timesheet Generation & Approval — `timesheets` · prefix **TSH**
| Field | Type | Options / link |
|---|---|---|
| Employee | link | employees |
| Year | number |  |
| Month | number |  |
| Status | text |  |

### Late Comers — `tmr1`
_Screen/report (no stored fields)_

### Early Leavers — `tmr2`
_Screen/report (no stored fields)_

### Absenteeism — `tmr3`
_Screen/report (no stored fields)_

### Overtime Summary — `tmr4`
_Screen/report (no stored fields)_

### Employee Time Sheet — `tmr5`
_Screen/report (no stored fields)_

### Settings & Roles — `tmset`
_Screen/report (no stored fields)_
