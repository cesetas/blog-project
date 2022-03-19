import React from "react";
import { Categories } from "./Categories";
import { PostCard } from "./PostCard";
import { PostWidget } from "./PostWidget";
import { getPosts } from "../services/index";

export const Posts = () => {

  const posts = [
      {title: "Blog", excerpt:"Learn about .."},
      {title: "Movie", excerpt:"Coming soon .."},
  ]
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];

//   return {
//     props: {posts},
//   };
// }
