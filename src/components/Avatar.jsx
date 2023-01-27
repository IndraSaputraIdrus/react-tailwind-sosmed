const Avatar = ({ src, className, children }) => {
  return (
    <div
      className={`overflow-hidden rounded-full ${
        !src && "bg-gray-400"
      } ${className}`}
    >
      {src && <img src={src} />}
      {children}
    </div>
  );
};

export default Avatar;
