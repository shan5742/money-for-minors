import { BrowserRouter, Route } from "react-router-dom";
import { PageRouter } from "./pages/Root";

function App() {
  return (
    <BrowserRouter>
      <Route component={PageRouter} />
    </BrowserRouter>
  );
}

export default App;
