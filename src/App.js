import "./App.scss";
import TextSection from './section/TextSection';
import ChartSection from './section/ChartSection';
import PictureSection from './section/PictureSection';
import SliderSection from './section/SliderSection';

function App() {


  return (
    <div className="App">
      <div className="Left">
        <TextSection />
        <ChartSection />
      </div>
      <div className="Right">
        <PictureSection />
        <SliderSection />
      </div>
    </div>
  );
}

export default App;
