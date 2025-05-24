import React from 'react';
import './AddForm.css';


function AddForm() {

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState(''); 
  const [image, setImage] = React.useState();
  const [tags, setTags] = React.useState('');


  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(`Title: ${e.target.value}`);
  }
  
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    console.log(`Content: ${e.target.value}`);
  }
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log("target");
    console.log(e.target);
    
    console.log(`Image: ${e.target.value}`);
  }


  return (
    <>
      <div className='add-form-container'>
        <label htmlFor="post-title">Post Title</label>
        <input type="text" name="title" id="title" onChange={handleTitleChange} />
        <label htmlFor="post-content" >Post Content</label>
        <textarea name="content" id="content" rows={10} className='content' onChange={handleContentChange} />
        <label htmlFor="post-image">Post Image URL</label>
        <input type="file" name="" id="" onChange={handleImageChange} />
        <label htmlFor="post-tags">Post Tags (comma separated)</label>
        <input type="text" name="tags" id="tags" />
        <button type="submit" className='btn'>Add Post</button>
        <input type="image" src="/" alt="" ></input>
      </div>
    </>
  )
}

export default AddForm;
