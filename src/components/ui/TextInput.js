const TextInput = props => {
  return(
    <input className='text-input' type="text" value={props.value} name={props.name} tabIndex={0} onFocus={props.onFocus} onBlur={props.onBlur} onChange={props.onChange}/>
  )
}

export default TextInput