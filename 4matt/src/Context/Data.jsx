import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const DataContext = createContext();

DataContext.displayName = "Data";

export default function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = async () => {
    console.log("Get data");

    try {
      const resp = await axios.get("http://localhost:3000/data", {
        headers: { "Content-Type": "application/json" },
      });
      console.log("data",resp.data);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
