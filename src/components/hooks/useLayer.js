import { useState } from 'react';
import Row from '../ui/Row';
import Layer from '../ui/Layer';
import { genId } from '../../utils/genId'

let num = 1;
const layers = []
const elArray = []

export const useLayer = () => {

  const defaultLayerElement = (clickEvent, layerName) => {
    return(
      <Row key={`row${layers.length}`} type="interactive">
        <Layer key={`layer${layers.length}`} onClick={clickEvent}>{`layer${layers.length}`}</Layer>
      </Row>
    )
  }

  const [layerArray, setLayerArray] = useState([])
  const [elementArray, setElementArray] = useState([])

  const createNewLayer = (width = 100, height = 100, xcoor = 0, ycoor = 0, files = []) => {
    const name = `layer${num}`
    const layer = {
      name: name,
      w: width,
      h: height,
      x: xcoor,
      y: ycoor,
      files: files,
      id: genId('layer-')
    }
    layers.push(layer)
    num++
    return layers
  }

  const createNewElement = () => {
    // console.log(layers.length);
    // console.log(`row${layers.length}`);
    elArray.push(defaultLayerElement("eventName", layers))
    return <div id="layer-rows-container">{elArray}</div>
  }

  const onClickNewLayerComp = () => {
    setLayerArray(createNewLayer())
    setElementArray(createNewElement())
  }
 
  return { onClickNewLayerComp, layerArray, elementArray } //returns an object with a function and a state value
}
 