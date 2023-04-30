import { UseState, ClassState } from "./components";

function App() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <UseState name="UseState" />
      <ClassState name="ClassState" />
    </div>
  );
}

export default App;
