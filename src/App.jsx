import clsx from "clsx";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

const App = () => {
  return (
    <div className="duration-300 bg-white dark:bg-slate-900">
      <Navbar />
      <div className={clsx("flex justify-between gap-2", "container")}>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default App;
