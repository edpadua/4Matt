import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cost from "./Pages/Cost";

import Spend from "./Pages/Spend";

import Transactions from "./Pages/Transactions";

import Licences from "./Pages/Licences";

import Navbar from "./Components/Bars/Navbar";

import tw from "tailwind-styled-components";

import "./App.css";

const Container = tw.div`
bg-slate-200
     w-full 
     px-16 
     py-10
`;

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cost />} />
            <Route path="/spend" element={<Spend />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/licences" element={<Licences />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
