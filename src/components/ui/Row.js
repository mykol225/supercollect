const Row = props => {

  if (props.type === 'interactive') {
    return(
      <div className="row btn-row">{props.children}</div>
    )
  } else {
    return(
      <div className="row">{props.children}</div>
    )
  }
}

export default Row