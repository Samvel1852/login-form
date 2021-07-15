function Submit(props) {
  return (
    <button
      onClick={props.isAllValid}
      disabled={props.disabled}
      className="submitBtn"
    >
      {"Submit"}
    </button>
  );
}

export default Submit;
