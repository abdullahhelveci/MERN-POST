import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="flex items-center m-5 flex-wrap gap-10">
      {posts && posts?.map((post, i) => <HomeCard key={i} post={post} />)}
    </div>
  );
};

export default Home;
