import Tab from "./Tab"
import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Title from "./Title"
import TextInput from "./TextInput"
import AppContext from "../../AppContext"

import { useContext, useEffect, useState } from "react"

const InspectorPanel = props => {
  const context = useContext(AppContext)

  const index = context.selectedLayer

  const [layerInfo, setLayerInfo] = useState({
    layerName: context.layers[index] ? `${context.layers[index].layerName}` : '',
    layerX: context.layers[index] ? `${context.layers[index].layerX}` : '',
    layerY: context.layers[index] ? `${context.layers[index].layerY}` : '',
    layerW: context.layers[index] ? `${context.layers[index].layerW}` : '',
    layerH: context.layers[index] ? `${context.layers[index].layerH}` : '',
    layerId: context.layers[index] ? `${context.layers[index].layerId}` : '',
    layerFile: context.layers[index] ? `${context.layers[index].layerFile}` : ''
  })

  //display selected layer
  useEffect( () => {
    if (context.layers.length) {
      setLayerInfo(context.layers[index])
    }
  },[index])

  //keep input changes
  const handleChange = e => {
    const { name, value } = e.target
    setLayerInfo(layerInfo => ({...layerInfo, ...{[name]:value}}))
  }

  //update layers to include changed info
  const handleOnBlur = () => {
    context.updateLayer(layerInfo)
  }

  //regex needed for each field; to be used in handleChange function

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
          <Title>Layers</Title>
        </Row>
        <Row>
          <span className="h3">Name </span>
          <TextInput value={layerInfo.layerName} name={"layerName"} tabIndex={0} defaultValue={layerInfo.layerName} onChange={e => handleChange(e)} onFocus={e => {} } onBlur={ handleOnBlur } />
        </Row>
        <Row>
          <span className="h3">X </span>
          <TextInput value={layerInfo.layerX} name={"layerX"} defaultValue={layerInfo.layerX} onChange={e => handleChange(e)} onFocus={e => {} } onBlur={ handleOnBlur }  />
          <span className="h3">Y </span>
          <TextInput value={layerInfo.layerY} name={"layerY"} defaultValue={layerInfo.layerY} onChange={e => handleChange(e)} onFocus={e => {} } onBlur={ handleOnBlur }  />
        </Row>
        <Row>
          <span className="h3">W </span>
          <TextInput value={layerInfo.layerW} name={"layerW"} defaultValue={layerInfo.layerW} onChange={e => handleChange(e)} onFocus={e => {} } onBlur={ handleOnBlur }  />
          <span className="h3">H </span>
          <TextInput value={layerInfo.layerH} name={"layerH"} defaultValue={layerInfo.layerH} onChange={e => handleChange(e)} onFocus={e => {} } onBlur={ handleOnBlur }  />
        </Row>
        <Row>
          <span className="h3">Files </span>
          <TextInput value={layerInfo.layerFile} name={"layerFile"} defaultValue={layerInfo.layerFile} onChange={e => handleChange(e)} onFocus={e => {} } onBlur={ handleOnBlur }  />
        </Row>
      </Rows>
    </div>

  )
}
export default InspectorPanel
