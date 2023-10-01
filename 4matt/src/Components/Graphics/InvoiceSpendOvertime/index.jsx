import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../Context/Data";

import { GraphicBox } from "../../../GlobalStyles";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function InvoiceSpendOvertime() {
  const { data, monthsYearObj, monthYearInvoice, invoice, setInvoice, dateLabels, setDateLabels } = useContext(DataContext);

  const [incomeTotalperiod, setIncomeTotalperiod] = useState(0);  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Invoice Spend Overtime - $ ${incomeTotalperiod}`,
      },
    },
  };
  

  const [graphicData, setGraphicData] = useState(
    {
      labels: [],
      datasets: []
    }
  );

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function getMonthYearInvoice() {
 
    let newMonthYearInvoice = monthYearInvoice;
    let newInvoice = invoice;
    let newLabels = dateLabels;
    if (monthYearInvoice.length == 0) {
      let newIncomeTotalperiod=0;
      console.log("get Month Year Invoice");
      console.log("newMonthYearInvoice", newMonthYearInvoice);
      console.log("newLabels", newLabels);
      console.log("newInvoice", newInvoice);

      monthsYearObj.map(function calcInvoice(item) {
        let sum = 0;

        data.forEach((element) => {
          if (
            item["0"] == padTo2Digits(new Date(element.Date).getMonth() + 1) &&
            item["1"] == new Date(element.Date).getFullYear()
          ) {
            sum += (Number(element.Spend)*(Number(element["Active Users"])+Number(element["Inative Users"])));
            newIncomeTotalperiod+=(Number(element.Spend)*(Number(element["Active Users"])+Number(element["Inative Users"])));
            
          }
        });


        newMonthYearInvoice.push({
          month: item["0"],
          year: item["1"],
          incomeTotal: sum,
        });
        newLabels.push(item["0"] + " " + item["1"]);
        newInvoice.push(sum);
        setInvoice(newInvoice);
        setDateLabels(newLabels);
        setIncomeTotalperiod(newIncomeTotalperiod);
      
      });
    }
    console.log("labels",dateLabels);
    setGraphicData(
      {
        labels: dateLabels,
        datasets: [{
          label: 'Dataset 1',
          data: invoice,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(255,255,255, 0.5)',
        }]
       
      }
    )
  }

  useEffect(() => {
    getMonthYearInvoice();
    console.log("Temp", monthYearInvoice);
  }, [data]);

  return (
    <GraphicBox>
  
        <Line options={options} data={graphicData} />
      
    </GraphicBox>
  );
}

export default InvoiceSpendOvertime;
