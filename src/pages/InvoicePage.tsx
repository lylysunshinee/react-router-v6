import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { invoices } from "../data/Invoices";

export interface IInvoicePageProps {}

export default function InvoicePage(props: IInvoicePageProps) {
  const params = useParams<{ invoiceId: string }>();
  const navigate = useNavigate();
  const invoice = invoices.find(
    (invoice) => invoice.id.toString() === params.invoiceId
  );
  useEffect(() => {
    //push user to /invoices
    // if (!invoice) navigate("/invoices");
    if (!invoice) navigate("..");
  }, [invoice]);

  return (
    <h2 style={{ padding: "1rem" }}>
      Invoice # ${invoice?.id} for ${invoice?.name}
    </h2>
  );
}
