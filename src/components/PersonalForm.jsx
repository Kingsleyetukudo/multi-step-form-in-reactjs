import { useState } from "react";
import FormBtn from "./FormBtn";
import FormHeadings from "./FormHeadings";

function PersonalForm() {
  const [heading, setHeading] = useState("Personal Info");
  const [subHeading, setSubHeading] = useState(
    "Please provide your name, email address, and phone number"
  );
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const checkForm = (e) => {
    e.preventDefault();
    console.log("orking");
    if (name === "") {
      setNameError("this field is required");
      console.log(nameError);
    } else {
      setNameError("");
    }
    if (email === "") {
      setEmailError("this field is required");
      console.log(nameError);
    } else {
      setEmailError("");
    }
    if (phone === "") {
      setPhoneError("this field is required");
      console.log(nameError);
    } else {
      setPhoneError("");
    }
  };
  return (
    // <section>
    <div className="py-8 px-12 flex flex-col gap-10 h-full">
      <FormHeadings headings={heading} subHeading={subHeading} />

      <form onSubmit={checkForm}>
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-base font-medium">
            Name
            {nameError ? (
              <span className="text-Strawberry-red self-end">{nameError}</span>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`outline outline-Light-gray outline-1 p-2 rounded-md hover:outline-Cool-gray hover:outline-2 ${
                nameError
                  ? "outline-Strawberry-red hover:outline-Strawberry-red"
                  : ""
              }`}
            />
          </label>
          <label className="flex flex-col gap-2 text-base font-medium">
            Email Address
            {emailError ? (
              <span className="text-Strawberry-red self-end">{emailError}</span>
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`outline outline-Light-gray outline-1 p-2 rounded-md hover:outline-Cool-gray hover:outline-2 ${
                emailError
                  ? "outline-Strawberry-red hover:outline-Strawberry-red"
                  : ""
              }`}
            />
          </label>
          <label className="flex flex-col gap-2 text-base font-medium">
            Phone Number
            {phoneError ? (
              <span className="text-Strawberry-red self-end">{phoneError}</span>
            ) : (
              ""
            )}
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+2348107483933"
              className={`outline outline-Light-gray outline-1 p-2 rounded-md hover:outline-Cool-gray hover:outline-2 ${
                phoneError
                  ? "outline-Strawberry-red hover:outline-Strawberry-red"
                  : ""
              }`}
            />
          </label>
        </div>
      </form>
      <div className="mt-auto">
        <FormBtn onClick={checkForm} />
      </div>
    </div>
    // </section>
  );
}

export default PersonalForm;
