import clsx from "clsx";

const Badge = ({ icon, size }) => {
  return (
    <div className="cursor-pointer flex items-center w-8 h-8 relative text-2xl">
      <span
        className={clsx(
          "block w-4 h-4 p-2",
          "bg-red-600",
          "flex items-center justify-center",
          "text-xs",
          "rounded-full",
          "absolute top-0 right-1",
          "text-white"
        )}
      >
        {size}
      </span>
      <button>{icon}</button>
    </div>
  );
};

export default Badge;
