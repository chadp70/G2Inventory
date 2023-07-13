import "./css/App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <div>
      <Header title="G-2 Inventory Management" />
      <Body />
    </div>
  );
};

export default App;
