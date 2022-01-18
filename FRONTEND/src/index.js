import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import View_Data from './View_Data';
import reportWebVitals from './reportWebVitals';
import AddExcelData from "./AddExcelData";
import {HashRouter,Routes,Route} from "react-router-dom";
import HomePage from "./HomePage";
import NewJoiner from "./NewJoiner";
import ExistingEmployee from "./ExistingEmployee";
import ExcelRender from "./ExcelRender";
import TestRun from "./testrun";
import AdminPage from "./AdminPage.js";
ReactDOM.render(
  <HashRouter>
  <Routes>
  <Route path="/" element={<AdminPage />} />
    <Route path="/ViewData" element={<View_Data />} />
    <Route path="/AddData" element={<ExcelRender />} />
    
  </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();