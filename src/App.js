import './App.css';
import Button from './components/ui/Button';
import Viewport from './components/ui/Viewport';
import LayersPanel from './components/ui/LayersPanel';
import InspectorPanel from './components/ui/InspectorPanel';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=> console.log("App rendered"))

  const [childData, setChildData] = useState([''])


  useEffect(() => {
    console.log(`rerendered AND childData state was updated`);
    console.log(childData);
  }, [childData])
  

  return (
    <div className="App">
      <div id='tools-panel' className='panel hor-p'>
        <div id="tools">
          <Button>+ New layer</Button>
        </div>
        <h3>New Collection</h3>
        <Button>Export</Button>
      </div>
      <div id='main-container'>
        <LayersPanel passChildData={setChildData}></LayersPanel>
        <Viewport view="canvas"></Viewport>
        <InspectorPanel parentData={childData}></InspectorPanel>
      </div>
    </div>
  );
}

export default App;


// Button takes in a function defined in App and is used in onCLick event
// That function returns a <Row> (type="interactive" and <Layer> (with {layerInfo.name}) into some parent