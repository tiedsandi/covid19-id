import "./App.scss";
import TextSection from './components/TextSection';
import ChartSection from './components/ChartSection';
import PictureSection from './components/PictureSection';
import SliderSection from './components/SliderSection';
import { useState } from "react";
import Menu from "./components/Menu";
import MenuBar from "./components/MenuBar";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      {open && <Menu />}
      <div className="Left">
        <TextSection />
        <ChartSection />
      </div>
      <div className="Right">
        <PictureSection />
        <SliderSection />
      </div>
      <div className="Menu" onClick={() => setOpen(!open)}>
        <MenuBar />
      </div>
    </div>
  );
}

export default App;
