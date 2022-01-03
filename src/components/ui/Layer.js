import Row from './Row'

const Layer = props => {
  return(
    <Row type="interactive" id={props.id} onClick={props.onClick}>
      <span className='layer' id={props.id}>{props.children}</span>
    </Row>
  )
}

export default Layer