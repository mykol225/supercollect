import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Button from "./Button"
import Title from "./Title"
import Layer from "./Layer"
import { genId } from "../../utils/genId"

import { useContext, useEffect, useState} from "react"
import AppContext from "../../AppContext"

let num = 1;

const LayersPanel = props => {
  // get global context
  const context = useContext(AppContext)

  //layers list
  const [layersState, setLayersState] = useState([])
  const [layerCompState, setLayerCompState] = useState([])

  const onClickNewLayerHandler = () => {
    context.addLayer(createLayer())
  }

  useEffect(()=>{
    if (context.layers.length) {
      setLayersState(context.layers)

      const index = context.layers.length - 1
      context.setSelectedLayerIndex(index)

      const oldArray = context.layers
      let newArray = oldArray.map( layer => {
        return <Layer key={layer.id} id={layer.id} onClick={onClickSelectedLayerHandler}>{layer.name}</Layer>
      })
      setLayerCompState(newArray)
    }
  }, [context.layers])

  const createLayer = ( width = 100, height = 100, xcoor = 0, ycoor = 0, files = 'files' ) => {
    const layer = {
      name: `layer ${num}`,
      w: width * num,
      h: height * num,
      x: xcoor + num,
      y: ycoor + num,
      files: files,
      id: genId('layer-')
    }
    num++
    return layer
  }

  //setting selected layer
  const onClickSelectedLayerHandler = event => {
    const index = context.layers.findIndex(l => l.id == event.target.id)
    context.setSelectedLayerIndex(index)
  }

  return(
    <div id='layers-panel' className='panel ver-p'>
    <Rows>
      <Row>
        <Title>Layers panel</Title>
      </Row>
      <Hr />
      {layerCompState}
      <Button onClick={onClickNewLayerHandler}>New layer</Button>
    </Rows>
  </div>
  )
}

export default LayersPanel