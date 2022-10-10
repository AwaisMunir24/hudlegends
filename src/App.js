import "./App.css";
import Routing from "./routes/Routing";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import { useContext } from "react";
import { contentCreate } from "./context/reducer/UseReducer";
function App() {
  const data = useContext(contentCreate);
  // const positionFixed = data.state.menuToggle || data.state.vallatPopoup;

  return (
    <div
      className="App"
      style={{
        position: data.state.menuToggle ? "fixed" : "",
      }}
    >
      <Header />

      <Routing />

      <Footer />
    </div>
  );
}

export default App;
