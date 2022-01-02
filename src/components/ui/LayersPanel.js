import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Button from "./Button"
import Title from "./Title"
import { useLayer } from "../hooks/useLayer"
import { useEffect } from "react"
import { useState } from "react"

const LayersPanel = props => {
  useEffect(()=> console.log("Layers panel rendered"))
  const { onClickNewLayerComp, layerArray, elementArray } = useLayer()
  const [state, setState] = useState()

  // pass data to App.js
  const dataHandler = data => {
    props.passChildData(data)
    console.log("LayerPanel: data is being passed up to parent (App), should cause a re-render of App");
  }

  const onClickHandler = () => {
    onClickNewLayerComp()
    setState(layerArray)
    // layerArray gets set as State, but is empty on first go around. Correct on later ones.
  }

  //this only gets called AFTER rerender AND the state changed, but only a couple times... stops working
  // state change may need to come from the parent App
  useEffect(()=> {
    dataHandler(layerArray)
  },[state])


  useEffect(()=> {
    dataHandler(layerArray)
  })


  return(
    <div id='layers-panel' className='panel ver-p'>
    <Rows>
      <Row>
        <Title>Layers panel</Title>
      </Row>
      <Hr />
      {elementArray}
      <Button onClick={onClickHandler}>New layer</Button>
    </Rows>
  </div>
  )
}

export default LayersPanel