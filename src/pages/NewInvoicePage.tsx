import * as React from "react";

export interface INewInvoicePageProps {}

export default function NewInvoicePage(props: INewInvoicePageProps) {
  return (
    <form style={{ padding: "1rem" }}>
      <label style={{ display: "block" }} htmlFor="new-invoice">
        New Invoice Name
      </label>
      <input type="text" name="new-invoice" id="new-invoice" />
      <input type="submit" value="Create New Invoice" />
    </form>
  );
}
