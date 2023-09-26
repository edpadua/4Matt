import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../Context/Data";

import GraphicContainer from "../GraphicContainer";

function InvoiceSpendOvertime() {
  const { data, monthsYear, monthsYearObj } = useContext(DataContext);

  const [monthYearInvoice, setMonthYearInvoice] = useState([]);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  useEffect(() => {
    const getMonthYearInvoice = () => {
      console.log("Filter", data);
      const newMonthYearInvoice = monthYearInvoice;
      console.log("Temp2", newMonthYearInvoice);
      monthsYearObj.map(function calcInvoice(item) {
        let sum = 0;
        console.log("Temp1", monthYearInvoice);
        
        console.log("newMonthYearInvoice", newMonthYearInvoice);
        console.log("item", item);
        setMonthYearInvoice([]);
        
        /*data.forEach((element) => {
          if (
            item["0"] == padTo2Digits(new Date(element.Date).getMonth() + 1) &&
            item["1"] == new Date(element.Date).getFullYear()
          ) {
            
           
           
            sum += Number(element.Spend);
            
          }
         
        });*/
       
        newMonthYearInvoice.push({
          month: item["0"],
          Year: item["1"],
          IncomeTotal: 2,
        });
        console.log("Push");
        setMonthYearInvoice(newMonthYearInvoice);
       
      });
     
    };
    console.log("Temp", monthYearInvoice);
    getMonthYearInvoice();
  }, [data,monthYearInvoice,setMonthYearInvoice]);

  return (
    <>
      {data
        ? data.map((item, index) => <h2 key={index}>{item.Date}</h2>)
        : "Loading"}
      <GraphicContainer title="Invoice Spend Overtime"></GraphicContainer>
    </>
  );
}

export default InvoiceSpendOvertime;
