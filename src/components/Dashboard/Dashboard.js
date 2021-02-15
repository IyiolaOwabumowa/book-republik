import React from "react";
import Header from "../Header/Header";
import PostCard from "./PostCard/PostCard";

const Dashboard = () => {
  return (
    <>
      <div className="feed-container flex">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
};

export default Dashboard;
