function Input(props) {
  console.log(props);
  return (
    <label>
      {props.name + ":"}
      <input onChange={props.handleFn} value={props.value} name={props.name} />
      <p hidden={props.hidden}>{props.errorText}</p>
    </label>
  );
}

export default Input;
