import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Button from "./Button"
import Title from "./Title"
import Layer from "./Layer"
import { genId } from "../../utils/idGenerator"

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
        return <Layer key={layer.layerId} id={layer.layerId} onClick={onClickSelectedLayerHandler}>{layer.layerName}</Layer>
      })
      setLayerCompState(newArray)
    }
  }, [context.layers])

  const createLayer = ( width = 100, height = 100, xcoor = 0, ycoor = 0, files = 'files' ) => {
    const layer = {
      layerName: `layer ${num}`,
      layerW: width * num,
      layerH: height * num,
      layerX: xcoor + num,
      layerY: ycoor + num,
      layerFile: files,
      layerId: genId('layer-')
    }
    num++
    return layer
  }

  //setting selected layer
  const onClickSelectedLayerHandler = event => {
    const index = context.layers.findIndex(l => l.layerId === event.target.id)
    context.setSelectedLayerIndex(index)
    // console.log(`${event.target.lastChild.innerText} selected`);
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