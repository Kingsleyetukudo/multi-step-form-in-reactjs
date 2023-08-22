import { useState } from "react";
import FormBtn from "./FormBtn";
import FormHeadings from "./FormHeadings";
import icon1 from "../assets/icon-arcade.svg";
import icon2 from "../assets/icon-advanced.svg";
import icon3 from "../assets/icon-pro.svg";

function PersonalForm() {
  const [heading, setHeading] = useState("Select your plan");
  const [subHeading, setSubHeading] = useState(
    "Ypu have the option of monthly or yearly billing."
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

      <div className="grid grid-cols-3 gap-4">
        <div className="border p-4 h-40 flex flex-col rounded-md hover:border-Purplish-blue hover:bg-Magnolia">
          <div>
            <img src={icon1} alt="Arcade Icon" />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">Arcade</p>
            <p className="text-Cool-gray text-sm">$9/mo</p>
          </div>
        </div>
        <div className="border p-4 h-40 flex flex-col rounded-md hover:border-Purplish-blue hover:bg-Magnolia">
          <div>
            <img src={icon2} alt="Arcade Icon" />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">Advaned</p>
            <p className="text-Cool-gray text-sm">$12/mo</p>
          </div>
        </div>
        <div className="border p-4 h-40 flex flex-col rounded-md hover:border-Purplish-blue hover:bg-Magnolia">
          <div>
            <img src={icon3} alt="Arcade Icon" />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">Pro</p>
            <p className="text-Cool-gray text-sm">$15/mo</p>
          </div>
        </div>
      </div>

      <div>
        <p>Monthly</p>
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>

      <div className="mt-auto">
        <FormBtn onClick={checkForm} />
      </div>
    </div>
    // </section>
  );
}

export default PersonalForm;
