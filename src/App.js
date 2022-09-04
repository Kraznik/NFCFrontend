import "./App.css";
import ClaimCReation from "./components/ClaimCreation";
import CreationClaimed from "./components/CreationClaimed";
import CreationCreated from "./components/CreationCreated";
import CreatePoap from "./components/CreationPage";
import StartCreating from "./components/StartCreating";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/:nfcId" exact element={<StartCreating />} />
          <Route path="/:nfcId/create" exact element={<CreatePoap />} />
          <Route path="/:nfcId/created/" exact element={<CreationCreated />} />
          <Route path="/:nfcId/claim" exact element={<ClaimCReation />} />
          <Route path="/:nfcId/claimed" exact element={<CreationClaimed />} />
          <Route path="/404/error" exact element={<div>404 NOT FOUND</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
