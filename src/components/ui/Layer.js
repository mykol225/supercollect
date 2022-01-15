import Row from './Row'
import { useState } from 'react'

const Layer = props => {

  return(
    <Row type="interactive" id={props.id} onClick={props.onClick} className={'row btn-row'}>
      <span className='layer' id={props.id}>{props.children}</span>
    </Row>
  )
}

export default Layer