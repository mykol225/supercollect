import logo from './logo.svg';
import './App.css';
import Canvas from './components/Canvas';
import Toolbtn from './components/Toolbtn';
import Layer from './components/Layer';

function App() {
  return (
    <div className="App">
        <div id='tool-container'>
          <Toolbtn>Upload</Toolbtn>
          <Toolbtn>new button</Toolbtn>
        </div>
        <div id='layers-container'>
          <Layer>Layer1</Layer>
          <Layer>Layer2</Layer>
          <Layer>Layer3</Layer>
        </div>
        <Canvas></Canvas>
    </div>
  );
}

export default App;
