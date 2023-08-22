import PersonalForm from "./components/PersonalForm";
import SideNav from "./components/SideNav";
import SelectPlan from "./components/SelectPlan";
function App() {
  return (
    <main>
      <div className="my-20 mx-auto w-4/5 grid grid-cols-2 gap-6 p-2 shadow-md rounded-md bg-white h-[590px]">
        <SideNav />
        {/* <PersonalForm /> */}
        <SelectPlan />
      </div>
    </main>
  );
}

export default App;
