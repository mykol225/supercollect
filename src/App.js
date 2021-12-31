import './App.css';
import Button from './components/ui/Button';
import Rows from './components/ui/Rows';
import Row from './components/ui/Row';
import Title from './components/ui/Title';
import Tab from './components/ui/Tab';
import TextInput from './components/ui/TextInput';
import Hr from './components/ui/Hr';
import Viewport from './components/ui/Viewport';
import LayersPanel from './components/ui/LayersPanel';

function App() {


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
        <LayersPanel></LayersPanel>
        <Viewport view="canvas"></Viewport>
        <div id='inspector-panel' className='panel ver-p'>
          <Rows>
            <Row>
              <Tab>Project</Tab>
              <Tab>Layers</Tab>
              <Tab>Actions</Tab>
            </Row>
            <Hr />
            <Row>
              <Title>Inspector Panel</Title>
            </Row>
            <Row>
              <TextInput>placeholder</TextInput>
            </Row>
          </Rows>
        </div>
      </div>
    </div>
  );
}

export default App;


// Button takes in a function defined in App and is used in onCLick event
// That function returns a <Row> (type="interactive" and <Layer> (with {layerInfo.name}) into some parent