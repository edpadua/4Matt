import React, { useContext, useState } from "react";

import { DataContext } from "../../Context/Data";

import tw from "tailwind-styled-components";

const InputItem = tw.div`
pr-4 mb-4 lg:mb-0`;

function Filter() {
  const {
    categories,
    category,
    setCategory,
    application,
    setApplication,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    getData,
  } = useContext(DataContext);
  const options = [
    {
      label: "Todas as Categorias",
      value: "All",
    },
    {
      label: "Produtividade",
      value: "Produtividade",
    },
    {
      label: "Video Chamada",
      value: "Video Chamada",
    },
    {
      label: "RH",
      value: "RH",
    },
    {
      label: "BI",
      value: "BI",
    },
  ];

  const optionsApp = [
    {
      label: "Todos os Aplicativos",
      value: "All",
    },
    {
      label: "Microsoft office 365",
      value: "Microsoft office 365",
    },
    {
      label: "Solides",
      value: "Solides",
    },
    {
      label: "Power BI",
      value: "Power BI",
    },
    {
      label: "Jira",
      value: "Jira",
    },
    {
      label: "Zoom",
      value: "Zoom",
    },
  ];

  const atualizaDataInicial = (e) => {
    setStartDate(e.target.value);
  };

  const atualizaDataFinal = (e) => {
    setEndDate(e.target.value);
  };

  const atualizaCategoria = (e) => {
    setCategory(e.target.value);
  };

  const atualizaAplicacao = (e) => {
    setApplication(e.target.value);
  };

  return (
    <div className="flex w-full pb-4 flex-col lg:flex-row ">
      <InputItem>
        <label className="font-bold pr-4">Data Inicial:</label>

        <input
          className="px-2"
          type="date"
          value={startDate}
          placeholder="Data inicial"
          onChange={atualizaDataInicial}
        />
      </InputItem>
      <InputItem>
        <label className="font-bold pr-4">Data Final:</label>
        <input
          className="px-2"
          type="date"
          value={endDate}
          placeholder="Data final"
          onChange={atualizaDataFinal}
        />
      </InputItem>
      <InputItem>
        <label className="font-bold pr-4">Categorias:</label>
        <select
          name="category"
          className="form-control px-2"
          onChange={atualizaCategoria}
        >
          <option disabled={true} value="">
            Category
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </InputItem>
      <InputItem>
        <label className="font-bold pr-4">Aplicativos:</label>
        <select
          name="application"
          className="form-control px-2"
          onChange={atualizaAplicacao}
        >
          <option disabled={true} value="">
            Application
          </option>
          {optionsApp.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </InputItem>
    </div>
  );
}

export default Filter;
