function Submit(props) {
  return (
    <button
      onClick={props.isAllValid}
      disabled={props.isAllFilled}
      className="submitBtn"
    >
      {"Submit"}
    </button>
  );
}

export default Submit;
