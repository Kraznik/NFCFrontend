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
          <Route path="/:nfcId" element={<StartCreating />} />
          <Route path="/:nfcId/create" element={<CreatePoap />} />
          <Route path="/created" element={<CreationCreated />} />
          <Route path="/claim" element={<ClaimCReation />} />
          <Route path="/claimed" element={<CreationClaimed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
