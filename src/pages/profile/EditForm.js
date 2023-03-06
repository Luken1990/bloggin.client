import { useState } from 'react';
import { FormFields } from './FormFields';
import { editBlog } from '../../apiCalls/blogApiCalls';

export const EditForm = ({ data, closeModal }) => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [image, setImage] = useState(data.image);
  const [heading, setHeading] = useState(data.heading);
  const [text, setText] = useState(data.text);
  const [tag, setTag] = useState(data.tags);

  const handleTag = (arr) => {
    const name = arr.name;
    if (!tag.includes(name)) {
      setTag([...tag, name]);
    } else {
      const index = tag.indexOf(name);
      tag.splice(index, 1);
    }
  };

  const handleEditBlog = async (e) => {
    e.preventDefault();
    const newBlog = {
      image: image,
      heading: heading,
      text: text,
      tags: tag,
    };
    editBlog(`https://bloggin-api.onrender.com/blogs/${data._id}`, newBlog);
    closeModal();
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
      handleBlog={handleEditBlog}
    />
  );
};
