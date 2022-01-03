import Tab from "./Tab"
import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Title from "./Title"
import TextInput from "./TextInput"
import AppContext from "../../AppContext"

import { useContext } from "react"

const InspectorPanel = props => {
  const context = useContext(AppContext)

  const index = context.selectedLayer

  const layerInfo = {
    layerName: context.layers[index] ? `Name:${context.layers[index].name}` : '',
    layerXY: context.layers[index] ? `X:${context.layers[index].x} Y:${context.layers[index].y}` : '',
    layerWH: context.layers[index] ? `W:${context.layers[index].w} H:${context.layers[index].h}` : '',
    layerId: context.layers[index] ? `Layer id: ${context.layers[index].id}` : '',
    layerFile: context.layers[index] ? `Files:${context.layers[index].files}` : '',
  }

  return(
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
          <span>{layerInfo.layerName}</span>
        </Row>
        <Row>
          <span>{layerInfo.layerXY}</span>
        </Row>
        <Row>
          <span>{layerInfo.layerWH}</span>
        </Row>
        <Row>
          <span>{layerInfo.layerId}</span>
        </Row>
        <Row>
          <span>{layerInfo.layerFile}</span>
        </Row>
        <Row>
          <TextInput>placeholder</TextInput>
        </Row>
      </Rows>
    </div>

  )
}
export default InspectorPanel
