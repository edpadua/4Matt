import React, { useContext } from "react";
import InvoiceSpendOvertime from "../../Components/Graphics/InvoiceSpendOvertime";
import MostExpensiveLicences from "../../Components/Graphics/MostExpensiveLicences";
import MostExpensiveApps from "../../Components/Graphics/MostExpensiveApps";
import SpendByCategory from "../../Components/Graphics/SpendByCategory";
import { DataContext } from "../../Context/Data";
import ApplicationSpendIncrease from "./../../Components/Graphics/ApplicationSpendIncrease/index";
import PaidUserStatus from "./../../Components/Graphics/PaidUserStatus/index";
import Filter from "../../Components/FilterInput";

function Cost() {
  const { data, category } = useContext(DataContext);

  return (
    <div>
      <div className="">
        <Filter/>
        {data
        ? data.map((item, index) => (
            <div key={index}>
              <h2 >{item.Application} - {item.Category}</h2>
            </div>
          ))
        : "Loading"}
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
