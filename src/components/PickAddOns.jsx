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
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState("arcade");
  const [planPrice, setPlanPrice] = useState(9);

  const checkToggle = (e, num) => {
    setIsToggle(e.target.checked);
    setPlanPrice(num);
    console.log(num);
  };

  const addActive = (card, num) => {
    setIsActive(card);
    setPlanPrice(num);
    console.log(num);
  };

  const pickPlanPrice = () => {
    console.log(planPrice, isActive);
  };
  const pickPrice = (num) => {
    console.log(num);
  };
  return (
    // <section>
    <div className="py-8 px-12 flex flex-col gap-10 h-full">
      <FormHeadings headings={heading} subHeading={subHeading} />

      <div className="grid grid-cols-3 gap-4">
        <div
          onClick={() => addActive("arcade", !isToggle ? 9 : 90)}
          className={`border p-4 flex flex-col gap-8 rounded-md hover:border-Purplish-blue hover:bg-Magnolia ${
            isActive === "arcade" ? "border-Purplish-blue bg-Magnolia" : ""
          }`}>
          <div>
            <img src={icon1} alt="Arcade Icon" />
          </div>
          <div
            className=" mt-auto"
            onChange={() => pickPrice(!isToggle ? 9 : 90)}>
            <p className="text-Marine-blue font-bold text-base">Arcade</p>
            {!isToggle ? (
              <p className="text-Cool-gray text-sm">$9/mo</p>
            ) : (
              <div>
                <p className="text-Cool-gray text-sm">$90/yr</p>
                <p className="text-Marine-blue text-sm font-medium">
                  2 months free
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => addActive("advanced", !isToggle ? 12 : 120)}
          className={`border p-4 flex flex-col gap-8 rounded-md hover:border-Purplish-blue hover:bg-Magnolia ${
            isActive === "advanced" ? "border-Purplish-blue bg-Magnolia" : ""
          }`}>
          <div>
            <img src={icon2} alt="Advanced Icon" />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">Advaned</p>
            {!isToggle ? (
              <p className="text-Cool-gray text-sm">$12/mo</p>
            ) : (
              <div>
                <p className="text-Cool-gray text-sm">$120/yr</p>
                <p className="text-Marine-blue text-sm font-medium">
                  2 months free
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => addActive("pro", !isToggle ? 15 : 150)}
          className={`border p-4 flex flex-col gap-8 rounded-md hover:border-Purplish-blue hover:bg-Magnolia ${
            isActive === "pro" ? "border-Purplish-blue bg-Magnolia" : ""
          }`}>
          <div>
            <img src={icon3} alt="Pro Icon" />
          </div>
          <div className=" mt-auto">
            <p className="text-Marine-blue font-bold text-base">Pro</p>
            {!isToggle ? (
              <p className="text-Cool-gray text-sm">$15/mo</p>
            ) : (
              <div>
                <p className="text-Cool-gray text-sm">$150/yr</p>
                <p className="text-Marine-blue text-sm font-medium">
                  2 months free
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-Magnolia p-4 gap-5">
        <p
          className={
            !isToggle ? "font-medium text-Marine-blue" : "text-Cool-gray"
          }>
          Monthly
        </p>
        <label className="switch">
          <input
            type="checkbox"
            value={isToggle}
            onChange={(e) =>
              checkToggle(
                e,
                isActive === "arcade" && isToggle
                  ? 9
                  : isActive === "arcade" && !isToggle
                  ? 90
                  : isActive === "advanced" && isToggle
                  ? 12
                  : isActive === "advanced" && !isToggle
                  ? 120
                  : isActive === "pro" && isToggle
                  ? 15
                  : 150
              )
            }
          />
          <span className="slider round"></span>
        </label>
        <p
          className={
            isToggle ? "font-medium text-Marine-blue" : "text-Cool-gray"
          }>
          Yearly
        </p>
      </div>

      <div className="mt-auto">
        <FormBtn onClick={pickPlanPrice} />
      </div>
    </div>
    // </section>
  );
}

export default PersonalForm;
