import { useState } from 'react';
import Row from '../ui/Row';
import Layer from '../ui/Layer';

let num = 0;
const layers = []
const elArray = []

export const useLayer = () => {

  const createNewLayer = (width = 100, height = 100, xcoor = 0, ycoor = 0, files = []) => {
    const name = `layer${num}`
    const layer = {
      name: name,
      w: width,
      h: height,
      x: xcoor,
      y: ycoor,
      files: files
    }
    layers.push(layer)
    num++
    return layers
  }

  const createNewElement = () => {
    // console.log(layers.length);
    // console.log(`row${layers.length}`);
    elArray.push(
      <Row key={`row${layers.length}`} type="interactive">
        <Layer key={`layer${layers.length}`}>{layers[layers.length - 1].name}</Layer>
      </Row>
    )
    return <div id="layer-rows-container">{elArray}</div>
  }

  const [layerArray, setLayerArray] = useState([])
  const [elementArray, setElementArray] = useState([])

  const onClickNewLayerComp = () => {
    setLayerArray(createNewLayer())
    setElementArray(createNewElement())
  }
 
  return { onClickNewLayerComp, layerArray, elementArray } //returns an object with a function and a state value
}
 