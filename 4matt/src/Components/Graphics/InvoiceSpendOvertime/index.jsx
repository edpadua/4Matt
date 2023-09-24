import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../Context/Data";

import GraphicContainer from "../GraphicContainer";

function InvoiceSpendOvertime() {
  const { data } = useContext(DataContext);

  const [monthYearInvoice, setMonthYearInvoice] = useState({});

  const getMonthYearInvoice = () => {
    
    console.log("Filter", data);
  };

  useEffect(() => {
    getMonthYearInvoice();
  }, []);

  return <GraphicContainer title="Invoice Spend Overtime"></GraphicContainer>;
}

export default InvoiceSpendOvertime;
