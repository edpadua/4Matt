import React, { useContext } from "react";
import InvoiceSpendOvertime from "../../Components/Graphics/InvoiceSpendOvertime";
import MostExpensiveLicences from "../../Components/Graphics/MostExpensiveLicences";
import MostExpensiveApps from "../../Components/Graphics/MostExpensiveApps";
import SpendByCategory from "../../Components/Graphics/SpendByCategory";
import { DataContext } from "../../Context/Data";
import ApplicationSpendIncrease from "./../../Components/Graphics/ApplicationSpendIncrease/index";
import PaidUserStatus from "./../../Components/Graphics/PaidUserStatus/index";
import Filter from "../../Components/FilterInput";
import tw from "tailwind-styled-components";


const Row = tw.div`
    flex flex-col lg:flex-row lg:mb-4 lg:gap-4

`;

function Cost() {
  const { data, category } = useContext(DataContext);

  return (
    <div>
      <div className="">
        <Filter />
        {/*data
          ? data.map((item, index) => (
              <div key={index}>
                <h2>
                  {item.Application} - {item.Category}
                </h2>
              </div>
            ))
          : "Loading"*/}
        <Row>
          <div className="w-full mb-4 lg:mb-0 lg:w-2/3 items-center justify-center">
            {" "}
            <InvoiceSpendOvertime />
          </div>
          <div className="w-full mb-4 lg:mb-0 lg:w-1/3 items-center justify-center">
            {" "}
            <ApplicationSpendIncrease />
          </div>
        </Row>
        <Row> 
          <div className="w-full mb-4  lg:mb-0 lg:w-1/3 items-centerjustify-center">
            {" "}
            <PaidUserStatus /> 
          </div>
          <div className="w-full mb-4 lg:mb-0 lg:w-1/3 items-center justify-center">
            {" "}
            <MostExpensiveApps />
          </div>
          <div className="w-full mb-4 lg:mb-0 lg:w-1/3">
            {" "}
            <MostExpensiveLicences />
          </div>
        </Row>
        <Row>
        <div className="w-full mb-4 lg:w-2/3">
            {" "}
            <SpendByCategory />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Cost;
