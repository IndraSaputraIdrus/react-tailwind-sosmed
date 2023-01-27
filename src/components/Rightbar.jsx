import { listAvatar, listPhotos } from "../data";
import StackingAvatar from "./StackingAvatar";
import clsx from "clsx";
import Dividers from "./Dividers";

const Rightbar = () => {
  return (
    <div className="w-3/12 p-4 dark:text-white">
      <div className={clsx("sticky top-20", "flex flex-col gap-4")}>
        <div>
          <h4 className="text-2xl font-extralight mb-2">Online Friends</h4>
          <div className="inline-flex flex-row-reverse relative">
            {listAvatar.map((item, index) => {
              return (
                <StackingAvatar
                  key={item.src}
                  listLenght={listAvatar.length}
                  src={item.src}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-extralight mb-2">Latest Photos</h4>
          <div className="w-[100%] h-36 flex gap-1">
            {listPhotos.map((photo) => (
              <img
                key={photo}
                className="w-1/3 object-cover rounded"
                alt="latest photos"
                src={photo}
              />
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-extralight mb-2">Latest Conversation</h4>
          <div className="flex flex-col gap-2">
            <div className={clsx("p-2", "flex items-center gap-4")}>
              <img className="w-10 h-10 rounded-full" src="/profile1.jpg" />
              <div>
                <h4>Brunch this weekend?</h4>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  <span className="inline text-black dark:text-slate-200">
                    Ali Connors
                  </span>{" "}
                  - I'll be in your neighborhood doing errands this…
                </p>
              </div>
            </div>
            <Dividers />
            <div className={clsx("p-2", "flex items-center gap-4")}>
              <img className="w-10 h-10 rounded-full" src="/profile2.jpg" />
              <div>
                <h4>Summer BBQ?</h4>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  <span className="inline text-black dark:text-slate-200">
                    Rachel
                  </span>{" "}
                  - Wish I could come, but I'm out of town this…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
