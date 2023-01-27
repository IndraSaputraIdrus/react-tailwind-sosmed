import clsx from "clsx";
import {
  IoHome,
  IoNewspaper,
  IoPeople,
  IoStorefront,
  IoPerson,
  IoSettings,
  IoPersonCircle,
} from "react-icons/io5";
import Switch from "./Switch";
import { useEffect, useState } from "react";

const listItem = [
  { text: "Homepage", icon: <IoHome /> },
  { text: "Pages", icon: <IoNewspaper /> },
  { text: "Group", icon: <IoPeople /> },
  { text: "Marketplace", icon: <IoStorefront /> },
  { text: "Friends", icon: <IoPerson /> },
  { text: "Settings", icon: <IoSettings /> },
  { text: "Profiles", icon: <IoPersonCircle /> },
];

const Leftbar = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [checked]);

  return (
    <div
      className={clsx(
        "w-2/12",
        "text-gray-600 text-xl",
        "flex flex-col gap-2",
        "py-5"
      )}
    >
      <div className="fixed">
        {listItem.map((item) => (
          <div
            key={item.text}
            className={clsx(
              "flex items-center gap-7",
              "p-3 rounded-lg",
              "duration-300",
              "hover:bg-gray-100",
              "dark:text-slate-400 dark:hover:bg-slate-800"
            )}
          >
            {item.icon}
            <h2 className="text-base">{item.text}</h2>
          </div>
        ))}
        <Switch defaultChecked={checked} onChecked={setChecked} />
      </div>
    </div>
  );
};

export default Leftbar;
