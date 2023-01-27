import Avatar from "./Avatar";

const StackingAvatar = ({ index, src, listLenght }) => {
  if (index + 1 <= 7) {
    if (index + 1 === 1) {
      return (
        <Avatar className="stackAvatar flex items-center justify-center text-white font-medium text-xl">
          +{listLenght - 7}
        </Avatar>
      );
    }

    return <Avatar src={src} className={`stackAvatar`} />;
  }
};

export default StackingAvatar;
