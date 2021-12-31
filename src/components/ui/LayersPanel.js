import Rows from "./Rows"
import Row from "./Row"
import Hr from "./Hr"
import Button from "./Button"
import Title from "./Title"
import { useLayer } from "../hooks/useLayer"

const LayersPanel = () => {
  const { onClickNewLayerComp, elementArray } = useLayer()

  return(
    <div id='layers-panel' className='panel ver-p'>
    <Rows>
      <Row>
        <Title>Layers panel</Title>
      </Row>
      <Hr />
      {elementArray}
      <Button onClick={onClickNewLayerComp}>New layer</Button>
    </Rows>
  </div>
  )
}

export default LayersPanel