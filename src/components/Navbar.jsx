import clsx from "clsx";
import { IoMail, IoNotifications } from "react-icons/io5";
import Avatar from "./Avatar";
import Badge from "./Badge";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 drop-shadow-md bg-blue-500 text-white dark:text-slate-700">
      <header
        className={clsx(
          "h-16",
          "flex items-center justify-between",
          "container"
        )}
      >
        <h1 className={clsx("font-medium text-xl", "uppercase")}>Indra</h1>
        <input
          className={clsx(
            "px-2 py-1 rounded",
            "w-[40%]",
            "text-slate-800",
            "outline-none focus:ring-2 focus:ring-slate-800",
            "dark:bg-slate-800 dark:text-slate-400 dark:focus:ring-slate-200"
          )}
          type="text"
          placeholder="Search..."
        />
        <div className="flex items-center gap-2">
          <Badge size={4} icon={<IoMail />} />
          <Badge size={2} icon={<IoNotifications />} />
          <Avatar src="/profile1.jpg" className="w-7 h-7" />
        </div>
      </header>
    </nav>
  );
};
export default Navbar;
