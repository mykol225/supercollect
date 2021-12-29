import './App.css';
import Button from './components/Button';
import Rows from './components/Rows';
import Row from './components/Row';
import Layer from './components/Layer';
import Title from './components/Title';
import Canvas from './components/Canvas';
import Tab from './components/Tab';

function App() {
  return (
    <div className="App">
      <div id='tools-panel' className='panel hor-p'>
        <Button>+ New layer</Button>
        <Button type="destructive">Delete layer</Button>
      </div>
      <div id='main-container'>
        <div id='layers-panel' className='panel ver-p'>
          <Rows>
            <Row>
              <Title>Layers panel</Title>
            </Row>
            <Row type="interactive">
              <Layer>Layer1</Layer>
            </Row>
            <Row type="interactive">
              <Layer>Layer1</Layer>
            </Row>
            <Row type="interactive">
              <Layer>Layer1</Layer>
            </Row>
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
            <Row>
              <Title>Inspector Panel</Title>
            </Row>
          </Rows>
        </div>
      </div>
    </div>
  );
}

export default App;
