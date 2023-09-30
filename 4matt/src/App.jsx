import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cost from "./Pages/Cost";

import Spend from "./Pages/Spend";

import Transactions from "./Pages/Transactions";

import Licences from "./Pages/Licences";

import HelloWorld from "./Pages/HelloWorld";

import Navbar from "./Components/Bars/Navbar";

import LeftBar from "./Components/Bars/LeftBar";

import tw from "tailwind-styled-components";

import DataProvider from "./Context/Data";

import "./App.css";

const Container = tw.div`
     min-h-screen
     bg-slate-200
     w-full 
     px-4
     py-4
`;

const Container2 = tw.div`
     flex
`;

const Container3 = tw.div`
     w-full
`;

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Container2>
            <LeftBar />
            <Container3>
              <Navbar />
              <Container>
                <Routes>
                  <Route path="/" element={<Cost />} />
                  <Route path="/applications" element={<HelloWorld />} />
                  <Route path="/spend" element={<HelloWorld />} />
                  <Route path="/transactions" element={<HelloWorld />} />
                  <Route path="/licences" element={<HelloWorld />} />
                </Routes>
              </Container>
            </Container3>
          </Container2>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
