import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const DataContext = createContext();

DataContext.displayName = "Data";

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dates, setDates] = useState([]);
  const [monthsYear, setMonthsYear] = useState([]);
  const [monthsYearObj, setMonthsYearObj] = useState([]);
  const [Months, setMonths] = useState([]);
  const [Years, setYears] = useState([]);

  function selectDates(data) {
    const { Date } = data;
    return Date;
  }

  function monthYearList(month, year) {
    const obj = Object.fromEntries(
      month.map((key, index) => [key, year[index]])
    );

    return obj;
  }

  function dateComparison(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);

    return date1 - date2;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function removeDuplicates(array) {
    
    let newArray = [];

    
    let uniqueObject = {};

    
    for (let i in array) {
     
      let objTitle = array[i][0];

     
      uniqueObject[objTitle] = array[i];
    }

    
    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }

    
    return newArray;
  }

  const getData = async () => {
    console.log("Get data");

    try {
      const resp = await axios.get("http://localhost:3000/data", {
        headers: { "Content-Type": "application/json" },
      });
      const onlyDates = [...new Set(resp.data.map(selectDates))];
      const onlyDatesDates = onlyDates.map(
        (dateString) => new Date(dateString)
      );
      onlyDatesDates.sort(dateComparison);
      const onlyDatesOrdered = onlyDatesDates.map(
        (date) =>
          padTo2Digits(date.getMonth() + 1) +
          "/" +
          padTo2Digits(date.getDate()) +
          "/" +
          date.getFullYear()
      );
      const onlyMonthsYearOrdered = [
        ...new Set(
          onlyDatesDates.map(
            (date) =>
              padTo2Digits(date.getMonth() + 1) + "/" + date.getFullYear()
          )
        ),
      ];
      const onlyMonthsOrdered = onlyDatesDates.map((date) =>
        padTo2Digits(date.getMonth() + 1)
      );
      const onlyYearsOrdered = onlyDatesDates.map((date) =>
        padTo2Digits(date.getFullYear())
      );
      const monthYear = onlyMonthsOrdered.map(function (value, index) {
        const temp = [value, onlyYearsOrdered[index]];
        return { ...temp };
      });

      const monthYearUnique=removeDuplicates(monthYear);

   
      console.log("data", resp.data);
      console.log("onlyDates", onlyDates);
      console.log("onlyDatesDates", onlyDatesDates);
      console.log("onlyDatesOrdered", onlyDatesOrdered);
      console.log("onlyMonthsOrdered", onlyMonthsOrdered);
      console.log("onlyYearsOrdered", onlyYearsOrdered);
      console.log("onlyMonthsOrdered", onlyMonthsYearOrdered);
      console.log("MonthYear", monthYear);
      console.log("monthYearUnique", monthYearUnique);
      setDates(onlyDatesOrdered);
      setMonthsYear(onlyMonthsYearOrdered);
      setMonthsYearObj(monthYearUnique);
      setData(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        monthsYear,
        monthsYearObj,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
