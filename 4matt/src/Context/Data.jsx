import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const DataContext = createContext();

DataContext.displayName = "Data";

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("01/01/1970");
  const [endDate, setEndDate] = useState("01/01/2050");
  const [licences, setLicences] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All");
  const [application, setApplication] = useState("All");
  const [monthsYear, setMonthsYear] = useState([]);
  const [monthsYearObj, setMonthsYearObj] = useState([]);
  const [monthYearInvoice, setMonthYearInvoice] = useState([]);
  const [invoice, setInvoice] = useState([]);
  const [dateLabels, setDateLabels] = useState([]);
 

  function selectDates(data) {
    const { Date } = data;
    return Date;
  }

  function selectLicences(data) {
    const { Application, Spend } = data;
    return { Application, Spend };
  }

  function selectCategories(data) {
    const { Category } = data;
    return Category;
  }



  function dateComparison(a, b) {
    const date1 = new Date(a);
    const date2 = new Date(b);

    return date1 - date2;
  }

  function numberComparison(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);

    return num1 - num2;
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

  function isInList(item, array) {
    for (let i in array) {
      let obj = array[i];

      if (item.Application == obj.Application) {
        return true;
      }
    }
    return false;
  }

  function removeDuplicates2(array) {
    let newArray = [];

    for (let i in array) {
      let objTitle = array[i];

      if (!isInList(objTitle, newArray)) {
        newArray.push(objTitle);
      }
    }

    return newArray;
  }

  const getData = async () => {
    console.log("Get data");
    setCategories([]);
    setLicences([]);
    setMonthsYear([]);
    setMonthsYearObj([]);
    setMonthYearInvoice([]);
    setInvoice([]);
    setDateLabels([]);
    setData([]);

    try {
      const resp = await axios.get("http://localhost:3000/data", {
        headers: { "Content-Type": "application/json" },
      });

      let dataFiltered = [];

      dataFiltered = resp.data;

      if (category != "All") {
        dataFiltered = dataFiltered.filter(function (el) {
          return el.Category == category;
        });
      }
      if (application != "All") {
        dataFiltered = dataFiltered.filter(function (el) {
          return el.Application == application;
        });
      }
      if (startDate != "01/01/1970") {
        dataFiltered = dataFiltered.filter(function (el) {
          return new Date(el.Date) >= new Date(startDate);
        });
      }
      if (endDate != "01/01/2050") {
        dataFiltered = dataFiltered.filter(function (el) {
          return new Date(el.Date) <= new Date(endDate);
        });
      }

      const onlyLicences = dataFiltered.map(selectLicences);
      const onlyLicencesUnique = removeDuplicates2(onlyLicences);
      onlyLicencesUnique.sort((a, b) => {
        return b.Spend - a.Spend;
      });
      onlyLicencesUnique.sort(numberComparison);

      const onlyCategories = [...new Set(dataFiltered.map(selectCategories))];

      const onlyDates = [...new Set(dataFiltered.map(selectDates))];
      const onlyDatesDates = onlyDates.map(
        (dateString) => new Date(dateString)
      );
      onlyDatesDates.sort(dateComparison);
      

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

      const monthYearUnique = removeDuplicates(monthYear);

      

      setData(dataFiltered);
      setLicences(onlyLicencesUnique);
      setMonthsYear(onlyMonthsYearOrdered);
      setMonthsYearObj(monthYearUnique);

    
      setCategories(onlyCategories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [category, application, startDate, endDate]);

  return (
    <DataContext.Provider
      value={{
        data,
        monthsYear,
        monthsYearObj,
        licences,
        categories,
        category,
        monthYearInvoice,
        invoice,
        dateLabels,
        application,
        startDate,
        endDate,
        setInvoice,
        setDateLabels,
        setCategory,
        setApplication,
        setMonthYearInvoice,
        getData,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
