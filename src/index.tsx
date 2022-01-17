import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExpensesPage from "./pages/Expenses";
import { InvoicesPage } from "./pages/InvoicesPage";
import NotFound from "./pages/NotFound";
import InvoicePage from "./pages/InvoicePage";
import NewInvoicePage from "./pages/NewInvoicePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="invoices" element={<InvoicesPage />}>
            <Route
              index
              element={
                <h2 style={{ padding: "1rem" }}> Please select an envoice</h2>
              }
            />
            <Route path=":invoiceId" element={<InvoicePage />} />
            <Route path="new" element={<NewInvoicePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
