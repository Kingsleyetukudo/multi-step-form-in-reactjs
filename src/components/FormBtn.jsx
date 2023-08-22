function FormBtn(props) {
  return (
    <div className="flex justify-between">
      <button className="font-medium text-Cool-gray hover:text-Marine-blue">
        Go Back
      </button>
      <button
        className="py-2 bg-Marine-blue px-4 rounded-md text-white text-base  hover:bg-Purplish-blue"
        onClick={props.onClick}>
        Next Step
      </button>
    </div>
  );
}

export default FormBtn;
