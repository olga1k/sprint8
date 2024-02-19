import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses";
import Graph from "./components/Graph";
import Languages from "./components/Languages";
import PercentDif from "./components/PercentDif";
import TodayExpenses from "./components/TodayExpenses";
import TotalBalance from "./components/TotalBalance";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
const locales = {
  en: { title: "English" },
  cat: { title: "Catalan" },
  sp: { title: "Español" },
};


function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className="wrapper">
    <Languages data-testid="languages" />
    <TotalBalance data-testid="total-balance" />
    <div className="main-content">
      <Expenses data-testid="expenses" />
      <Graph data-testid="graph" />
      <div className="compare">
        <TodayExpenses data-testid="today-expenses" />
        <PercentDif data-testid="percent-dif" />
      </div>
    </div>
  </div>
  
  );
}

/*
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
*/
export default App;
