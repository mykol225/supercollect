const Row = props => {

  if (props.type === 'interactive') {
    return(
      <div onClick={props.onClick} className={props.className} id={props.id}>{props.children}</div>
    )
  } else {
    return(
      <div className="row">{props.children}</div>
    )
  }
}

export default Row