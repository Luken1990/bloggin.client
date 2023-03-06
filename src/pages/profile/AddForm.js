import { React, useRef, useState, useContext } from 'react';
import { FormFields } from './FormFields';
import { postNewBlog } from '../../apiCalls/blogApiCalls';

export const AddForm = () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [image, setImage] = useState('');
  const [heading, setHeading] = useState('');
  const [text, setText] = useState('');
  const [tag, setTag] = useState([]);

  const handleTag = (arr) => {
    const name = arr.name;
    if (!tag.includes(name)) {
      setTag([...tag, name]);
    } else {
      const index = tag.indexOf(name);
      tag.splice(index, 1);
    }
  };

  const handleNewBlog = async (e) => {
    e.preventDefault();
    const newBlog = {
      image: image,
      heading: heading,
      text: text,
      tags: tag,
    };
    postNewBlog('https://bloggin-api.onrender.com/blogs/add', newBlog);
    setImage('');
    setTag([]);
    setHeading('');
    setText('');
  };

  return (
    <FormFields
      heading={heading}
      setHeading={setHeading}
      text={text}
      tag={tag}
      setText={setText}
      image={image}
      setImage={setImage}
      handleTag={handleTag}
      handleBlog={handleNewBlog}
    />
  );
};
