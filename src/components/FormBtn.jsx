function FormBtn(props) {
  return (
    <div className="flex justify-between">
      {props.formMove !== 1 ? (
        <button
          className="font-medium text-Cool-gray hover:text-Marine-blue"
          onClick={props.backBtn}>
          Go Back
        </button>
      ) : (
        ""
      )}
      <button
        className="py-2 bg-Marine-blue px-4 rounded-md text-white text-base ml-auto  hover:bg-Purplish-blue"
        onClick={props.onClick}>
        Next Step
      </button>
    </div>
  );
}

export default FormBtn;
