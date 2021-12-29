const Button = props => {

  if (props.type === 'destructive') {
    return(
      <button className=" btn destructive-btn">{props.children}</button>
    ) 
  } else {
    return(
      <button className="btn">{props.children}</button>
    ) 
  }
}

export default Button