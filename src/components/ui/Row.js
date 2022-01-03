const Row = props => {

  if (props.type === 'interactive') {
    return(
      <div onClick={props.onClick} className="row btn-row" id={props.id}>{props.children}</div>
    )
  } else {
    return(
      <div className="row">{props.children}</div>
    )
  }
}

export default Row