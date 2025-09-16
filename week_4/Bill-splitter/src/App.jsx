import React from "react";
import Heading from "./components/Heading";
import EnterManually from "./components/EnterManually";
import UploadReceipt from "./components/UploadReceipt";
import AddPerson from "./components/AddPerson";
import FinalPage from "./components/FinalPage";
import { BrowserRouter, Routes, Route } from "react-router";
import "./output.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heading />} />
          <Route path="/upload" element={<UploadReceipt />} />
          <Route path="/manual" element={<EnterManually />} />
          <Route path="/AddPerson" element={<AddPerson />} />
          <Route path="/Final" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
