function FormHeadings({ headings, subHeading }) {
  return (
    <div>
      <h2 className="text-3xl font-bold">{headings}</h2>
      <p className="text-Cool-gray">{subHeading}</p>
    </div>
  );
}

export default FormHeadings;
