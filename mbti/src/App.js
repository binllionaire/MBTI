import React from "react";
import { Route, Routes } from "react-router-dom";

import { StartPage } from "./StartPage";
import { Q1Page} from "./QuestionPage";
const App = () => {
  return (
    <Routes>
      <Route path="/start" element={<StartPage/>} />
      <Route path="/q1" element={<Q1Page/>} />
    </Routes>
  );
}

export default App;