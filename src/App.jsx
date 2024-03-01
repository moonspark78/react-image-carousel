
import './App.css';
import {Carousel} from "./components/Carousel"
import slides from "./data/CarouselData.json";

function App() {
  return (
    <div className="App">
      <Carousel data={slides.slides}/>
    </div>
  );
}

export default App;
