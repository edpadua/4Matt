import React, { useContext } from "react";
import InvoiceSpendOvertime from "../../Components/Graphics/InvoiceSpendOvertime";
import { DataContext } from "../../Context/Data";

function Cost() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 ..."> <InvoiceSpendOvertime /></div>
        <div className="..."> <InvoiceSpendOvertime /></div>
       
      </div>
    </div>
  );
}

export default Cost;
