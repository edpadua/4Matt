import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../../Context/Data";

import GraphicContainer from "../GraphicContainer";

import {
  Chart as ChartJS,  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { GraphicBox } from "../../../GlobalStyles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Most Expensive Licences',
    },
  },
};

function MostExpensiveLicences() {

  const { data, licences } = useContext(DataContext);

  const [labels,setLabels] = useState([]);

  const [spendApp,setSpendApp] = useState([]);

  const [graphicData, setGraphicData] = useState(
    {
      labels: [],
      datasets: []
    }
  );


  function selectLabels(data) {
    const { Application } = data;
    return Application;
  }

  

  function selectSpendApp(data) {
    const { Spend } = data;
    return Spend;
  }


  

  useEffect(() => {
    
    function separateData(){
      const newLabels=licences.map(selectLabels);
      const newSpends= licences.map(selectSpendApp);
      console.log("newLabels",newLabels);
      console.log("newSpends",newSpends);
      setLabels(newLabels);
      setSpendApp(newSpends);
      setGraphicData(
        {
          labels: newLabels,
          datasets: [{
            label: 'Dataset 1',
            data: newSpends,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(255,255,255, 0.5)',
          }]
         
        }
      )
    }

    separateData();
    
    console.log("graphicData",graphicData);
  }, [licences]);

  return (
    <GraphicBox>
   
       <Bar options={options} data={graphicData} />
      
    </GraphicBox>
  );
}

export default MostExpensiveLicences;
