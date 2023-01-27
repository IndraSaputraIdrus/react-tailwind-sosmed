import Post from "./Post";

const Feed = () => {
  return (
    <div className="w-7/12 py-5 flex flex-col gap-8">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
