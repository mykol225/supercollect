const TextInput = props => {
  return(
    <input className='text-input' type="text" placeholder={props.children}/>
  )
}

export default TextInput