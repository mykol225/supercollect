import Tab from "./Tab"
import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Title from "./Title"
import TextInput from "./TextInput"

import { useEffect, useState } from "react"

const InspectorPanel = props => {
  useEffect(()=> console.log("Inspector panel rendered"))

  const [layer, setLayer] = useState({})

  useEffect(() => {
    setLayer(props.parentData)
    console.log("inspector: parentData set as state on each render");
  }, [])

  useEffect(() => {
    console.log("inspector: runs AFTER parentData causes a rerender, AND parentData has changed");
    console.log(props.parentData);
    console.log(layer);
  }, [layer])




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
          <p>{props.parentData[0] ? props.parentData[0].name : ""}</p>
        </Row>
        <Row>
          <p>{props.parentData[0] ? `x:${props.parentData[0].x}  y:${props.parentData[0].y}` : ""}</p>
        </Row>
        <Row>
          <p>{props.parentData[0] ? `w:${props.parentData[0].w}  h:${props.parentData[0].h}` : ""}</p>
        </Row>
        <Row>
          <p>{props.parentData[0] ? `files:${props.parentData[0].files}` : ""}</p>
        </Row>
        <Row>
          <TextInput>placeholder</TextInput>
        </Row>
      </Rows>
    </div>

  )
}
export default InspectorPanel
