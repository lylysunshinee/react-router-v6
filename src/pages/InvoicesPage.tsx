import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import { invoices } from "../data/Invoices";

export interface InvoicesPageProps {}

export function InvoicesPage(props: InvoicesPageProps) {
  return (
    <div>
      <main>
        <h2>InvoicesPage</h2>
        <Link to={"new"}>Create New Invoice</Link>
        <div style={{ display: "flex" }}>
          <nav style={{ padding: "1rem", borderRight: "1px solid" }}>
            {invoices.map((invoice) => (
              <Link
                style={{ display: "block", margin: "1rem" }}
                to={invoice.id.toString()}
              >
                {" "}
                {invoice.name}
              </Link>
            ))}
          </nav>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
