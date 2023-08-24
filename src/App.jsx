import PersonalForm from "./components/PersonalForm";
import SideNav from "./components/SideNav";
function App() {
  return (
    <main>
      <div className="my-20 mx-auto w-1/2 grid grid-cols-2 gap-6 p-4 shadow-md rounded-md bg-white h-[590px]">
        <SideNav />
        <PersonalForm />
      </div>
    </main>
  );
}

export default App;
