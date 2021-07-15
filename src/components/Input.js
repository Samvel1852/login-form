function Input({ name, isNotValid, errorText, typedName, handleName }) {
  return (
    <label>
      {name + ":"}
      <input onChange={handleName} value={typedName} name={name} />
      <p hidden={isNotValid}>{errorText}</p>
    </label>
  );
}

export default Input;
