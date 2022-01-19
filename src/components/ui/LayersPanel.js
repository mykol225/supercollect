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

const LayersPanel = () => {
  // get global context
  const context = useContext(AppContext)

  //layers list
  const [layersState, setLayersState] = useState([])
  const [layerCompState, setLayerCompState] = useState([])

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

  const onClickNewLayerHandler = () => {
    context.addLayer(createLayer())
  }

  //set selected layer
  const onClickSelectedLayerHandler = event => {
    const selectedLayerIndex = context.layers.findIndex(l => l.layerId === event.target.id)
    const clickedLayerElement = event.target
    const activeLayerRows = document.getElementsByClassName('row btn-row-active')

    // set layer to selected
    context.setSelectedLayerIndex(selectedLayerIndex)

    // set all elements to inactive
    Array.from(activeLayerRows).forEach((element) => {
      element.className = 'row btn-row'
    })

    // set clicked element to active
    if (clickedLayerElement.className === 'row btn-row') {
      clickedLayerElement.className = 'row btn-row-active';
    }
  }

  //Update layers panel to reflect changes to layer info
  useEffect(()=>{
    setLayersState(context.layers)

    const oldArray = context.layers
    let newArray = oldArray.map( layer => {
      return <Layer key={layer.layerId} id={layer.layerId} onClick={onClickSelectedLayerHandler}>{layer.layerName}</Layer>
    })
    setLayerCompState(newArray)

  }, [context.layers])

  // when a new layer is added, make that the selected layer
  useEffect( () => {
    const index = context.layers.length - 1  //but selected will not alwyas
    context.setSelectedLayerIndex(index)
  }, [context.layers.length])



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