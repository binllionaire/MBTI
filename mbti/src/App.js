import React from "react";
import { Route, Routes } from "react-router-dom";

import { StartPage } from "./StartPage";
import { QuestionPage} from "./QuestionPage";
import { ResultPage} from "./ResultPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage/>} />
      <Route path="/question" element={<QuestionPage/>} />
      <Route path="/result" element={<ResultPage/>} />
    </Routes>
  );

}

export default App;