import "./App.css";
import Carousel from "./components/Carousel";
import { sliderInfo } from "./components/Data";

function App() {
  return (
    <div className="App">
      <div className="topContent">
        <h2>About Our Service</h2>
        <p>If you Like, please contact with us</p>
      </div>
      {/*Carousel*/}
      <Carousel images={sliderInfo} />
    </div>
  );
}

export default App;
