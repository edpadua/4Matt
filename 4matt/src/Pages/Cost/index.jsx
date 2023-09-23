import React from "react";
import InvoiceSpendOvertime from "../../Components/Graphics/InvoiceSpendOvertime";

function Cost() {
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
