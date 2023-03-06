import React from 'react';
import { tags } from '../../data/Tags';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as AiIcons from 'react-icons/ai';

export const FormFields = ({
  heading,
  setHeading,
  tag,
  text,
  setText,
  image,
  setImage,
  handleTag,
  handleBlog,
}) => {
  return (
    <form action="#" method="POST" className="mt-6">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 sm:text-sm"
                  placeholder="My first blog"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <div className="mt-1">
              {tags.map((item, index) => {
                return (
                  <span
                    className={
                      tag.includes(item.name)
                        ? 'my-3 mr-3 inline-block overflow-hidden rounded-md border border-midBlue bg-midBlue  py-1 px-2 text-2xl text-white'
                        : 'my-3 mr-3 inline-block overflow-hidden rounded-md border py-1 px-2 text-2xl text-midBlue hover:border-midBlue hover:bg-midBlue hover:text-white'
                    }
                    onClick={() => handleTag(item)}
                    key={index}
                  >
                    {item.icon}
                  </span>
                );
              })}
            </div>
          </div>

          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mt-1">
              <ReactQuill
                theme="snow"
                name="text"
                value={text}
                onChange={(newValue) => setText(newValue)}
              />
            </div>
          </div>

          <div className="mb-3 flex items-center rounded-md border border-gray-300 text-gray-400">
            <div className="rounded-l-md border-r bg-gray-50 px-3 py-2.5">
              <AiIcons.AiOutlinePicture />
            </div>
            <input
              className="mx-2 w-full border-none bg-transparent p-1 text-sm outline-none"
              type="text"
              name="image"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            onClick={handleBlog}
            className="hover:bg-bg-darkBlue focus:ring-bg-darkBlue inline-flex justify-center rounded-md border border-transparent bg-nightBlue py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
