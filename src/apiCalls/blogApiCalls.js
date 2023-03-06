const postData = async (url = '', optionsObj = null) => {
  return await fetch(url, optionsObj).then((response) => response.json());
};

const token = JSON.parse(sessionStorage.getItem('token'));

export const postNewBlog = (url, data) => {
  const putOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };

  postData(url, putOptions)
    .then((data) => console.log(JSON.stringify(data)))
    .catch((err) => console.log(err));
};

export const editBlog = (url, data) => {
  const putOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };

  postData(url, putOptions)
    .then((data) => console.log(JSON.stringify(data)))
    .catch((err) => console.log(err));
};