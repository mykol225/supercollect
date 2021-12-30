import './App.css';
import Button from './components/Button';
import Rows from './components/Rows';
import Row from './components/Row';
import Title from './components/Title';
import Canvas from './components/Canvas';
import Tab from './components/Tab';
import TextInput from './components/TextInput';
import Hr from './components/Hr';
import { useLayer } from './components/useLayer'


function App() {
  const { onClickNewLayerComp, elementArray } = useLayer()

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
        <div id='layers-panel' className='panel ver-p'>
          <Rows>
            <Row>
              <Title>Layers panel</Title>
            </Row>
            <Hr />
            {elementArray}
            <Button onClick={onClickNewLayerComp}>New layer</Button>
          </Rows>
        </div>
        <div id='viewport' className=''>
          <Canvas></Canvas>
        </div>
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