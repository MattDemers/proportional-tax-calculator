# TaxCalc (A Proportional Tax Calculator)

This calculator is used with budgeting programs/databases like [Actual](https://github.com/actualbudget/actual), [YNAB](https://www.ynab.com/) or similar programs that allow you to categorize transactions.

These programs may allow you to split one transaction among multiple categories. However, this creates a problem with the remaining amount of tax, and how it's distributed among the categories.

## Example 1: A grocery trip

I go to a grocery store, and my total comes to $110, including tax. Looking at my receipt, I see a number of items with amounts that don't include tax:

* All my purchases that I'd put in a "Grocery" category total $50.
* I bought some bathroom supplies, which total to $30. I want to categorize this as "Home Goods."
* I bought $15 of junk food, which I categorize separately in "Junk Food."

My subtotal, before taxes, is $95. This leaves $15 remaining that was the tax I paid on all the items.

I'd like to calculate how much of this remainder I should assign to each category to represent the **proportion** of the tax it's responsible for.

This is how we'd enter it into the calculator:

![](/Images/screenshot.png)

As text:

| **Category** | **Amount (Pre-Tax)** | **Tax Proportion** | **Total (Including Tax)** |
|--------------|:----------------------:|:--------------------:|:-----------:|
| Grocery      |          $50         |        $7.89       |   $57.89  |
| Home Goods   |          $30         |        $4.74       |   $34.74  |
| Junk Food    |          $15         |        $2.37       |   $17.37  |

The total of the above "Tax Proportion" column is $15 (the amount of unassigned money, the remaining tax).

The total of the above "Total (Including Tax)" column is $110 (the total on the receipt, including tax).

---

This was made with Anthropic's Claude 3.5 (Sonnet)'s help.
