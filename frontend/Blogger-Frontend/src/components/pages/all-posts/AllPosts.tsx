import React from 'react';
import './Allposts.css';
import { useEffect } from 'react';


function Allposts() {

  type Post = {
  postTitle: string;
  postImage?: string;
  postContent: string;
  postTags?: string;
};

  const [listPosts, setListPosts] = React.useState<Post[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/post/getAllPosts", {
      method:"GET",
    })
    .then(response => response.json())
    .then(data => {
      setListPosts(data);
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
    });
    
  }, []);
  console.log("List of posts fetched:", listPosts);
  
  console.log(listPosts);
  console.log("[0]", listPosts[0]);


  return (
    <div className="all-posts-container">
      {
        listPosts.length === 0 
        ? <p>No posts found.</p> 
        :
        listPosts.map((post, index) => (
          <div key={index} className="post-item">
            <div className="post-title">{post.postTitle}</div>
            <div className="post-image">
              <img src={`data:image/jpeg;base64,${post.postImage}`} alt={post.postTitle} />
            </div>
            <div className="post-content">{post.postContent}</div>
            <div className="post-tags">
              {post.postTags}
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Allposts;
