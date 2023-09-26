import React, { useContext } from "react";
import InvoiceSpendOvertime from "../../Components/Graphics/InvoiceSpendOvertime";
import MostExpensiveLicences from "../../Components/Graphics/MostExpensiveLicences";
import MostExpensiveApps from "../../Components/Graphics/MostExpensiveApps";
import SpendByCategory from "../../Components/Graphics/SpendByCategory";
import { DataContext } from "../../Context/Data";
import ApplicationSpendIncrease from "./../../Components/Graphics/ApplicationSpendIncrease/index";
import PaidUserStatus from "./../../Components/Graphics/PaidUserStatus/index";

function Cost() {
  const { data } = useContext(DataContext);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 ...">
          {" "}
          <InvoiceSpendOvertime />
        </div>
        <div className="...">
          {" "}
          <MostExpensiveLicences />
        </div>
      </div>
    </div>
  );
}

export default Cost;
