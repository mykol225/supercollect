import './App.css';
import Button from './components/ui/Button';
import Viewport from './components/ui/Viewport';
import LayersPanel from './components/ui/LayersPanel';
import InspectorPanel from './components/ui/InspectorPanel';
import { useState } from 'react';
import AppContext from './AppContext';

function App() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0)
  const [layers, setLayers] = useState([])

  const addLayer = newLayer => {
    setLayers(layers => [...layers, newLayer])
  }

  const global = {
    selectedLayer: selectedLayerIndex,
    layers: layers,
    setSelectedLayerIndex,
    addLayer,
  }

  return (
    <AppContext.Provider value={global}>
      <div className="App">
        <div id='tools-panel' className='panel hor-p'>
          <div id="tools">
            <Button>+ New layer</Button>
          </div>
          <h3>New Collection</h3>
          <Button>Export</Button>
        </div>
        <div id='main-container'>
          <LayersPanel></LayersPanel>
          <Viewport view="canvas"></Viewport>
          <InspectorPanel></InspectorPanel>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;


// Button takes in a function defined in App and is used in onCLick event
// That function returns a <Row> (type="interactive" and <Layer> (with {layerInfo.name}) into some parent