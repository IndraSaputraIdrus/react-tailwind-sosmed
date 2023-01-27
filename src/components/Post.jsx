import clsx from "clsx";
import { useState } from "react";
import {
  IoEllipsisVertical,
  IoHeart,
  IoHeartOutline,
  IoShareSocial,
} from "react-icons/io5";

const Post = () => {
  const [loved, setLoved] = useState(false);
  return (
    <article
      className={clsx(
        "drop-shadow-lg bg-white rounded",
        "dark:bg-slate-800 dark:text-white"
      )}
    >
      <div className={clsx("p-4", "flex items-center justify-between")}>
        <div className={clsx("flex items-center gap-3")}>
          <div
            className={clsx(
              "bg-orange-600 text-white",
              "w-10 h-10",
              "flex items-center justify-center",
              "rounded-full",
              "text-xl"
            )}
          >
            R
          </div>
          <div className="text-sm">
            <h3>Shrimp and Chorizo Paella</h3>
            <p className="text-gray-600 dark:text-slate-400">
              September 14, 2016
            </p>
          </div>
        </div>
        <button
          className={clsx(
            "hover:bg-gray-200 hover:bg-opacity-60 p-3 rounded-full",
            "dark:hover:bg-slate-700"
          )}
        >
          <IoEllipsisVertical />
        </button>
      </div>
      <div className="w-full">
        <img alt="Post" className="object-cover" src="/panorama1.jpg" />
      </div>
      <div className="p-4 text-gray-600 dark:text-white">
        <p className="text-sm mb-5">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
        <div className={clsx("flex items-center gap-3", "text-2xl")}>
          <div
            className={clsx(
              "w-10 h-10",
              "rounded-full",
              "hover:bg-gray-200 bg-opacity-60 dark:hover:bg-slate-700",
              "flex items-center justify-center"
            )}
            onClick={() => setLoved(!loved)}
          >
            <input type="checkbox" defaultChecked={loved} className="hidden" />
            {loved ? <IoHeart className="text-red-600" /> : <IoHeartOutline />}
          </div>
          <div
            className={clsx(
              "w-10 h-10",
              "rounded-full",
              "hover:bg-gray-200 bg-opacity-60 dark:hover:bg-slate-700",
              "flex items-center justify-center"
            )}
            onClick={() => setLoved(!loved)}
          >
            <IoShareSocial />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
