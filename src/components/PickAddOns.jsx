import { useState } from "react";
import FormBtn from "./FormBtn";
import FormHeadings from "./FormHeadings";

function PickAddOns() {
  const [heading, setHeading] = useState("Pick add-ons");
  const [subHeading, setSubHeading] = useState(
    "Add-ons help enchance your gaming experience."
  );
  const [isActive, setIsActive] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [planPrice, setPlanPrice] = useState(9);

  const handleCheck = (e) => {
    if (e.target.checked) {
      setIsActive([...isActive, e.target.value]);
    } else {
      setIsActive(isActive.filter((active) => active !== e.target.value));
    }
    console.log(isActive);
  };

  return (
    // <section>
    <div className="py-8 px-12 flex flex-col gap-10 h-full">
      <FormHeadings headings={heading} subHeading={subHeading} />

      <div className="grid grid-rows-1 gap-4">
        <div
          className={`border p-4 flex items-center gap-8 rounded-md hover:border-Purplish-blue hover:bg-Magnolia ${
            isActive.includes("onlineService")
              ? "border-Purplish-blue bg-Magnolia"
              : ""
          }`}>
          <div>
            <input
              value="onlineService"
              type="checkbox"
              onChange={handleCheck}
            />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">
              Online service
            </p>

            <p className="text-Cool-gray text-sm">
              Access to multiplayer games
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-Purplish-blue text-sm">+$1/mo</p>
          </div>
        </div>
        <div
          className={`border p-4 flex items-center gap-8 rounded-md hover:border-Purplish-blue hover:bg-Magnolia ${
            isActive.includes("largerStorage")
              ? "border-Purplish-blue bg-Magnolia"
              : ""
          }`}>
          <div>
            <input
              value="largerStorage"
              type="checkbox"
              onChange={handleCheck}
            />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">
              Larger storage
            </p>

            <p className="text-Cool-gray text-sm">Extra 1TB of cloud save</p>
          </div>
          <div className="ml-auto">
            <p className="text-Purplish-blue text-sm">+$2/mo</p>
          </div>
        </div>
        <div
          className={`border p-4 flex items-center gap-8 rounded-md hover:border-Purplish-blue hover:bg-Magnolia ${
            isActive.includes("customizableProfile")
              ? "border-Purplish-blue bg-Magnolia"
              : ""
          }`}>
          <div>
            {/* <label className="bg-Pastel-blue flex items-center p-2 m-1 rounded"> */}
            <input
              value="customizableProfile"
              type="checkbox"
              onChange={handleCheck}
              className="  checked:bg-blue-500"
            />
            {/* </label> */}
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">
              Customizable Profile
            </p>

            <p className="text-Cool-gray text-sm">
              Custom theme on your profile
            </p>
          </div>
          <div className="ml-auto">
            <p className="text-Purplish-blue text-sm">+$2/mo</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <FormBtn />
      </div>
    </div>
    // </section>
  );
}

export default PickAddOns;
