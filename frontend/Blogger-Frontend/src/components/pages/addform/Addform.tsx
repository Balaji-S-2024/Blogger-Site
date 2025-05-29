import React from 'react';
import './AddForm.css';


function AddForm() {

  const [postTitle, setTitle] = React.useState('');
  const [postContent, setContent] = React.useState(''); 
  const [postImage, setImage] = React.useState('');
  const [postTags, setTags] = React.useState('');

  const[postData, setPostData] = React.useState({
    postTitle: '',
    postContent: '',
    postImage: '',
    postTags: '',
  });


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setPostData(prev => ({
      ...prev,
      postTitle: e.target.value,
    }));
    console.log(`Title: ${e.target.value}`);
  }
  
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    setPostData(prev => ({
      ...prev,
      postContent: e.target.value,
    }));
    console.log(`Content: ${e.target.value}`);
  }
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value);
    setPostData(prev => ({
      ...prev,
      postImage: e.target.value,
    }));
    console.log("target");
    console.log(e.target);
    
    console.log(`Image: ${e.target.value}`);
  }

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
    setPostData(prev => ({
      ...prev,
      postTags: e.target.value,
    }));
    console.log(`Tags: ${e.target.value}`);
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting form with the following data:');
    console.log(`Title: ${postTitle}`);
    console.log(`Content: ${postContent}`);
    console.log(`Image: ${postImage}`);
    console.log(`Tags: ${postTags}`);
    console.log('Post Data:', postData);
    fetch('http://localhost:8080/post/addPost', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
  }

  return (
    <>
      <div className='add-form-container'>
        <form action="submit" className='add-form-container' onSubmit={handleSubmit}>
          <label htmlFor="post-tTitle">Post Title</label>
          <input type="text" name="postTitle" id="post_title" value={postData.postTitle} onChange={handleTitleChange} />
          <label htmlFor="post-content" >Post Content</label>
          <textarea name="postContent" id="post_content" rows={10} className='postContent content' value={postData.postContent} onChange={handleContentChange} />
          <label htmlFor="post-image">Post Image URL</label>
          <input type="file" name="postImage" id="post_image" value={postData.postImage} onChange={handleImageChange} />
          <label htmlFor="post-tags">Post Tags (comma separated)</label>
          <input type="text" name="postTags" id="post_tags" value={postData.postTags} onChange={handleTagsChange} />
          <button type="submit" className='btn'>Add Post</button>
        </form>
      </div>
    </>
  )
}

export default AddForm;
